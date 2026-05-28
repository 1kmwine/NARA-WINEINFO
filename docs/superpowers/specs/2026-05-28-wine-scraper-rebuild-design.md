# 와인 정보 스크래퍼 리빌드 설계

**날짜:** 2026-05-28  
**시스템 위치:** 나라셀라 Application Layer — e) 와인 정보 스크래퍼  
**접근 방식:** 풀 리빌드

---

## 1. 목적 및 범위

### 역할
Data Layer(내부 와인 정보)와 외부 스크래핑 데이터(블로그·카페·유튜브·기사 등)를 결합해 Service Layer에 제공하는 와인 정보 허브.

### 이번 범위
- 나라셀라 판매 와인 2,000개 (Excel 임포트)
- 외부 9개 소스 스크래핑 및 표시
- 웹 퍼블리싱 (브랜드·지역·품종 인덱스)

### 제외 범위
- ERP 재고·가격 연동 (Data Layer 접근 정보 수령 후 별도 구현)
- CRM 고객 데이터
- Newsletter 발송
- B2B 수발주

### 미래 확장 준비
- 1KMWINE MariaDB 6만개 와인 연동 (데이터 소스 추상화 레이어로 대비)
- ERP 코드 매핑 (`erpCode` 필드 예약)

---

## 2. 기술 스택

| 레이어 | 기술 |
|---|---|
| 프레임워크 | Next.js 14 (App Router, TypeScript) |
| 스타일 | Tailwind CSS |
| DB | Prisma ORM + SQLite (개발) → PostgreSQL (운영) |
| 스크래퍼 | Python 3, requests, BeautifulSoup, youtube-transcript-api |
| 스케줄링 | GitHub Actions cron (매주 일요일 02:00 KST) |
| 임포트 | `xlsx` npm 패키지 파싱 → Next.js API upsert |

---

## 3. DB 스키마

### 핵심 변경 (현재 → 신규)

| 항목 | 현재 | 신규 |
|---|---|---|
| `Wine.images` | JSON 문자열 | `WineImage` 별도 테이블 |
| `ScrapedData.url` | 제약 없음 | `@unique` (중복 방지) |
| 스크래핑 상태 | 없음 | `ScrapeJob` 테이블 |
| ERP 연동 | 없음 | `Wine.erpCode` 필드 |
| 인덱스 | 없음 | type·country·regionL1·wineryId·isPublished |
| `wineryDesc` | 중복 필드 | 제거 (Winery.description 사용) |
| 스파클링 기포 | 없음 | `Wine.fizz` (1-5) |

### 모델 요약

```
Winery          — 와이너리 (nameKo, nameEn, country, websiteUrl, logoUrl)
Wine            — 와인 핵심 정보 (slug @unique, erpCode, type, 척도, 설명)
WineImage       — 이미지 (url, type: bottle|winery|vineyard|label, order)
WineGrape       — 와인↔품종 다대다 (percentage)
Grape           — 포도 품종
Award           — 수상 내역 (vintage, source, score)
ScrapedData     — 외부 수집 데이터 (url @unique, sourceType, summary, thumbnailUrl)
ScrapeJob       — 스크래핑 작업 상태 (status: pending|running|done|failed, lastRunAt, nextRunAt, resultCount)
```

**`ScrapedData.url` 유니크 처리**: URL이 없는 소스(인스타그램 일부)는 `wineId + sourceType + 제목` 해시값을 url 대신 저장해 중복 방지.

**`/admin` 인증**: v1은 인증 없음 (내부 사용 전용). 운영 배포 시 기본 인증(환경변수 ADMIN_PASSWORD) 적용.

### 데이터 소스 추상화

`lib/wine-repository.ts` 인터페이스를 두어 현재는 Prisma(SQLite)로 구현하고, 추후 1KMWINE MariaDB API 연동 시 구현체만 교체 가능하도록 설계.

```typescript
interface WineRepository {
  findBySlug(slug: string): Promise<Wine | null>
  findMany(filter: WineFilter): Promise<Wine[]>
  upsert(data: WineInput): Promise<Wine>
}
```

---

## 4. UI 레이아웃

### 와인 상세 페이지

**데스크탑 (≥768px) — 스티키 사이드바**
- 좌측 240px 고정: 병 이미지, 당도·산도·바디·타닌 척도(1-5 점), 수상 배지
- 우측 스크롤: 와인명, 와이너리, 원산지, 스펙 테이블, 와인 스토리, 테이스팅 노트, 양조 방법, 스크래핑 섹션들

**모바일 (<768px) — 세로 스택**
병 이미지 → 와인명 → 척도 → 스펙 → 수상 → 스토리/노트 → 스크래핑

**스크래핑 섹션 표시 방식**
- 탭 없이 소스별 섹션이 아래로 나열 (전체 균등)
- 각 섹션 헤더: 소스 아이콘 + 이름 + 수집 건수
- 카드 형식: 제목, 출처, 날짜, 요약 2줄, 원문 링크
- YouTube: 썸네일 + 채널명 + 조회수

### 기타 페이지
- `/wines` — 필터 사이드바(데스크탑) + 와인 카드 그리드
- `/brands`, `/regions`, `/varieties` — A-Z 인덱스 + 와인 목록
- `/admin/import` — CSV/Excel 업로드 + 미리보기 + 임포트 실행

---

## 5. 스크래핑 아키텍처

### 수집 소스 (9개)

| sourceType | 소스 | 수집 내용 |
|---|---|---|
| `naver_blog` | 네이버 블로그 | 시음 후기, 추천 글 |
| `naver_cafe` | 와쌉(winerack24) | 커뮤니티 언급 |
| `youtube` | YouTube | 영상 + 트랜스크립트 |
| `instagram` | 인스타그램 | 태그 게시물 |
| `wine_searcher` | Wine-Searcher | 평균 가격, 커뮤니티 점수 |
| `winery_official` | 와이너리 공식 사이트 | 공식 설명·노트 |
| `article_kr` | Wine21, 소믈리에타임즈 | 국내 기사 |
| `article_global` | Decanter, WS, WE | 해외 리뷰·기사 |
| `other` | 기타 | 관련 자료 |

### 실행 방식

```
GitHub Actions cron: 매주 일요일 02:00 KST (17:00 UTC 토요일)
  → python scripts/scraper/main.py --all
  → 50개 배치 처리 (전체 2,000개 약 40분)
  → 결과를 POST /api/internal/scrape 로 저장
  → ScrapeJob 상태 업데이트
```

### 품질 기준
- 소스별 rate limit: Naver 1초, YouTube 2초, 그 외 0.5초
- 실패 시 재시도: 최대 3회, exponential backoff (2s→4s→8s)
- URL `@unique` 제약으로 중복 삽입 방지 (upsert 방식)
- `ScrapedData.summary` — 수집 시 앞 300자 자동 저장

---

## 6. CSV/Excel 임포트

### `/admin/import` 페이지 흐름
1. .xlsx 또는 .csv 파일 업로드 (최대 5MB)
2. 첫 5행 미리보기 + 컬럼 매핑 확인
3. 유효성 검사: 필수 필드(slug, nameKo, type, country), 중복 slug 경고
4. 임포트 실행: slug 기준 upsert
5. 결과: 생성 N건 / 업데이트 N건 / 실패 N건 + 실패 행 목록

### Excel 컬럼 스펙
```
slug | nameKo | nameEn | erpCode | type | country | regionL1 | regionL2
wineryName | grapes(품종명:비율,품종명:비율) | volume | servingTempMin | servingTempMax
foodPairing(쉼표구분) | sweetness | acidity | body | tannin | fizz
description | wineStory | tastingNotes | productionMethod | bottleImageUrl
```

---

## 7. API 엔드포인트

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | `/api/wines` | 목록 (필터·페이지네이션) |
| GET | `/api/wines/[slug]` | 상세 |
| POST | `/api/wines` | 단건 생성 |
| PUT | `/api/wines/[slug]` | 업데이트 |
| POST | `/api/admin/import` | CSV/Excel 일괄 임포트 |
| GET | `/api/admin/scrape-jobs` | 스크래핑 상태 조회 |
| POST | `/api/internal/scrape` | 스크래퍼 → DB 저장 (내부용) |

---

## 8. 파일 구조

```
NARA-WINEINFO/
├── app/
│   ├── wines/[slug]/page.tsx        # 상세 (Option B 레이아웃)
│   ├── wines/page.tsx               # 목록 + 필터
│   ├── brands/[brand]/page.tsx
│   ├── regions/[country]/[region]/page.tsx
│   ├── varieties/[variety]/page.tsx
│   ├── admin/import/page.tsx        # Excel 임포트
│   └── api/...
├── components/
│   ├── wine-detail/
│   │   ├── WineDetailSidebar.tsx    # 스티키 사이드바
│   │   ├── WineDetailMain.tsx       # 본문 스크롤
│   │   ├── ScrapedSourceSection.tsx # 소스별 카드 섹션
│   │   └── WineSpecTable.tsx        # 스펙 테이블
│   ├── ScaleBar.tsx
│   ├── AwardBadge.tsx
│   └── WineCard.tsx
├── lib/
│   ├── db.ts                        # Prisma 싱글톤
│   ├── wine-repository.ts           # 데이터 소스 추상화
│   └── utils.ts
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
└── scripts/scraper/
    ├── main.py
    ├── sources/
    │   ├── naver_blog.py
    │   ├── naver_cafe.py
    │   ├── youtube_scraper.py
    │   ├── instagram_scraper.py
    │   ├── wine_searcher.py
    │   ├── winery_official.py
    │   └── article_scraper.py
    └── db_client.py
```
