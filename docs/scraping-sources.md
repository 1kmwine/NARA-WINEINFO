# 스크래핑 소스 목록

> 마지막 업데이트: 2026-06-09  
> 용도별 구분: **[브리핑]** = 데일리 브리핑 수집, **[와인]** = 와인 상세 스크래퍼, **[공통]** = 둘 다

---

## 국내 매거진
1. 소믈리에 타임즈 https://www.sommeliertimes.com/ **[공통]**
   - 스크래퍼: `article_scraper.py` KR_SOURCES (`domain: sommelierkorea.co.kr`, `naver_kw: 소믈리에타임즈`)
2. 와인21 https://www.wine21.com/11_news/news_list.html **[공통]**
   - 스크래퍼: `article_scraper.py` KR_SOURCES (`domain: wine21.com`, `naver_kw: wine21`)
3. 와인인 https://winein.co.kr/ **[브리핑]**
   - 수집 방법: `web_fetch` 직접 크롤링

---

## 국내 뉴스
> 일반 경제지는 와인 관련 키워드로 검색 필요

1. 한국경제 https://www.hankyung.com/ **[공통]**
   - 스크래퍼: `article_scraper.py` KR_SOURCES (`domain: hankyung.com`, `naver_kw: 한국경제`)
2. 매일경제 https://www.mk.co.kr/ **[브리핑]**
   - 수집 방법: NaverSearch `search_news` query="와인 매일경제"
3. 조선비즈 https://biz.chosun.com/ **[브리핑]**
   - 수집 방법: NaverSearch `search_news` query="와인 조선비즈"
4. 세계일보 https://www.segye.com/ **[브리핑]**
   - 수집 방법: NaverSearch `search_news` query="와인 세계일보"
5. 메트로 신문 https://www.metroseoul.co.kr/ **[공통]**
   - 스크래퍼: `article_scraper.py` KR_SOURCES (`domain: metro.co.kr`, `naver_kw: 메트로신문`)
6. 파이낸셜 뉴스 https://www.fnnews.com/ **[공통]**
   - 스크래퍼: `article_scraper.py` KR_SOURCES (`domain: fnnews.com`, `naver_kw: 파이낸셜뉴스`)

---

## 해외 매거진
> ⚠️ 403 차단 사이트는 WebSearch로 대체 수집 (직접 fetch 불가)

1. Decanter https://www.decanter.com/wine-news/ **[공통]**
   - 스크래퍼: `article_scraper.py` GLOBAL_SOURCES (`domain: decanter.com`)
   - 수집 방법: DuckDuckGo `site:decanter.com` 검색
2. Wine-Searcher https://www.wine-searcher.com/dept/wine+news **[와인]**
   - 스크래퍼: `article_scraper.py` GLOBAL_SOURCES (rate_limit: 0.5s)
3. James Suckling https://www.jamessuckling.com/wine-news/ **[공통]**
   - 스크래퍼: `article_scraper.py` GLOBAL_SOURCES (`domain: jamessuckling.com`)
4. Wine Advocate (Robert Parker) https://winejournal.robertparker.com/ **[공통]**
   - 스크래퍼: `article_scraper.py` GLOBAL_SOURCES (`domain: robertparker.com`)
5. Wine Spectator https://www.winespectator.com/ **[공통]**
   - 스크래퍼: `article_scraper.py` GLOBAL_SOURCES (`domain: winespectator.com`)
6. Wine Enthusiast https://www.winemag.com/ **[공통]**
   - 스크래퍼: `article_scraper.py` GLOBAL_SOURCES (`domain: winemag.com`)

---

## 해외 뉴스
1. OIV https://www.oiv.int/news/agenda, https://www.oiv.int/news/press **[브리핑]**
   - 수집 방법: `web_fetch` 직접 크롤링

---

## 국내 통계
1. 수입 통계 https://tradedata.go.kr/ **[브리핑]**
   - HS CODE 조회 대상:
     - `220421` : 2리터 이하 용기에 넣은 것
     - `220410` : 발포성 포도주
2. 가처분소득 https://www.index.go.kr/unity/potal/indicator/IndexInfo.do?cdNo=2&clasCd=10&idxCd=F0134&upCd=6 **[브리핑]**
3. 가구 월별 주류 소비 https://mods.go.kr/board.es?mid=a10301040400&bid=214 **[브리핑]**
4. 소비 심리 지수 https://www.index.go.kr/unity/potal/main/EachDtlPageDetail.do?idx_cd=1058 **[브리핑]**
5. 비닛 https://vinit.io/#yangchart **[브리핑]**

---

## 해외 통계
1. OIV https://www.oiv.int/what-we-do/statistics **[브리핑]**

---

## 트렌드

---

## 이벤트
1. 와인21 https://www.wine21.com/12_event/index.html **[브리핑]**
2. WSA https://www.wsaacademy.com/goods/catalog?page=1&searchMode=catalog&category=c0004&per=40&sorting=ranking&filter_display=lattice&code=0004 **[브리핑]**
3. 도운 https://thedowoon.com/event2.php **[브리핑]**

---

## 뉴스룸
1. 나라셀라 **[브리핑]**
   - https://www.naracellar.com/bbs/board.php?bo_table=column
   - https://www.naracellar.com/bbs/board.php?bo_table=press
   - https://www.naracellar.com/bbs/board.php?bo_table=event&wr_id=608
2. 에노테카 https://www.enoteca.co.kr/News **[브리핑]**
3. 신세계 엘앤비 https://www.shinsegaegroupnewsroom.com/family/ssglnb/ **[브리핑]**

---

## 유튜브
> 스크래퍼: `youtube_scraper.py` — `scrapetube.get_search(wine_name + " 와인", limit=10)` **[와인]**  
> 브리핑용 CCR 수집: 아래 채널별 WebSearch `"채널명" site:youtube.com after:{ONE_WEEK_AGO}` — 채널 외 영상 대체 금지

1. 와인 좀 한해 https://www.youtube.com/@JUNGHANHAE **[브리핑]**
   - Channel ID: UCsTjitDbkUW20H3U20ITqaw (미확정)
   - CCR 쿼리: `"와인 좀 한해" site:youtube.com after:{ONE_WEEK_AGO}`
2. 이민정 MJ https://www.youtube.com/@Rheeminjung_MJ **[브리핑]**
   - CCR 쿼리: `"Rheeminjung" OR "이민정 MJ" 와인 site:youtube.com after:{ONE_WEEK_AGO}`
3. 비밀이야 https://www.youtube.com/@bimirya **[브리핑]**
   - Channel ID: UCaKQ7_GT0k8u_sL0nE2tgkA ✅
   - CCR 쿼리: `"비밀이야" 와인 site:youtube.com after:{ONE_WEEK_AGO}`
4. 양갱 https://www.youtube.com/@yanggangtv **[브리핑]**
   - Channel ID: UCohsv4KNeRzmj7E6ipE8COA ✅
   - CCR 쿼리: `"양갱" 와인 site:youtube.com after:{ONE_WEEK_AGO}`
5. 와인킹 https://www.youtube.com/@wineking **[브리핑]**
   - Channel ID: UCb7KNFvMuvQz9LPRK4xyzfA ✅
   - CCR 쿼리: `"와인킹" site:youtube.com after:{ONE_WEEK_AGO}`

---

## 전방 시장
1. 유통산업 통계 **[브리핑]**
   - https://www.motir.go.kr/kor/article/ATCL3f49a5a8c/171537/view
   - https://www.index.go.kr/unity/potal/main/EachDtlPageDetail.do?idx_cd=1142
2. 외식 트렌드 https://diaryr.com/ **[브리핑]**
3. 식품 - 서울대 https://calslab.snu.ac.kr/foodbiz/ **[브리핑]**
   - https://www.youtube.com/@aTwebTV

---

## 인스타그램
> 스크래퍼: `instagram_scraper.py` — DuckDuckGo `site:instagram.com {wine_name} 와인` **[와인]**  
> 브리핑용 계정 수집은 web_fetch 또는 WebSearch 활용

1. 와인앤모어 https://www.instagram.com/wineandmoressg/ **[브리핑]**
2. 나라셀라 https://www.instagram.com/naracellar/ / https://www.instagram.com/winepicks_official/ **[브리핑]**
3. 아영 https://www.instagram.com/ayoungfbc/ **[브리핑]**
4. 비닛 https://www.instagram.com/iihida/ **[브리핑]**

---

## 커뮤니티
> 소비자 실제 구매행동·여론 파악용

1. 와쌉 (네이버 카페, 17.5만 회원) https://cafe.naver.com/winerack24 **[브리핑]**
   - "★와쌉★ 와인 싸게 사는 사람들" — 한국 최대 와인 소비자 커뮤니티
   - 로컬 수집: `NaverSearch-search_cafearticle` query="와인 와쌉" sort=date ✅ (작동 확인 2026-06-10)
   - CCR 수집: Python urllib → `search.naver.com` (브라우저 헤더) → DuckDuckGo fallback
   - ⚠️ CCR 클라우드 환경에서 Naver 직접 접근 차단될 수 있음 → 수집 실패 시 "수집 불가" 표시 (지어내기 금지)
2. 네이버 블로그 (와인 시음/구매 후기) **[공통]**
   - 스크래퍼: `article_scraper.py` rate_limit `naver_blog: 1.0s`
   - 수집 방법: `NaverSearch-search_blog` query="와인 시음 추천" sort=date display=10
3. 티스토리 와인 블로그 **[브리핑]**
   - 수집 방법: WebSearch "와인 추천 시음 site:tistory.com" 최신순

---

## 스크래퍼 소스 코드 매핑

| 소스 유형 | 파일 | 수집 방법 | Rate Limit |
|-----------|------|-----------|-----------|
| 국내 기사 | `scripts/scraper/sources/article_scraper.py` `KR_SOURCES` | Naver News 검색 → DDG fallback | 0.5s |
| 해외 기사 | `scripts/scraper/sources/article_scraper.py` `GLOBAL_SOURCES` | DuckDuckGo `site:` 검색 | 0.5s |
| 유튜브 | `scripts/scraper/sources/youtube_scraper.py` | `scrapetube` 키워드 검색 + 자막 요약 | 2.0s |
| 인스타그램 | `scripts/scraper/sources/instagram_scraper.py` | DDG `site:instagram.com` 검색 | 1.5s |
| 네이버 블로그 | `article_scraper.py` / MCP | NaverSearch API | 1.0s |
| 네이버 카페 | MCP | `NaverSearch-search_cafearticle` | 1.0s |
| Wine-Searcher | `article_scraper.py` GLOBAL_SOURCES | DDG `site:wine-searcher.com` | 0.5s |
