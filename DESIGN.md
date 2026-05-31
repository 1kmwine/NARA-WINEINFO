---
name: Nara Wineinfo
description: 나라셀라 와인 정보 플랫폼 — 세계 와인, 한눈에
colors:
  terroir-green: "#1B4332"
  terroir-green-lift: "#2D6A4F"
  ink: "#111111"
  body-text: "#3d3d3d"
  secondary-text: "#6b6b6b"
  muted: "#b3b3b3"
  border: "#e8e8e8"
  canvas: "#f9f9f9"
  surface: "#ffffff"
typography:
  display:
    fontFamily: "'Pretendard Variable', Pretendard, -apple-system, sans-serif"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "'Pretendard Variable', Pretendard, -apple-system, sans-serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Pretendard Variable', Pretendard, -apple-system, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.45
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'Pretendard Variable', Pretendard, -apple-system, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "-0.005em"
  label:
    fontFamily: "'Pretendard Variable', Pretendard, -apple-system, sans-serif"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.04em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "80px"
components:
  button-primary:
    backgroundColor: "{colors.terroir-green}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.terroir-green-lift}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  chip-type:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.secondary-text}"
    rounded: "{rounded.sm}"
    padding: "2px 6px"
  wine-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "16px"
  input-search:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
---

# Design System: Nara Wineinfo

## 1. Overview

**Creative North Star: "The Cave Catalogue"**

Nara Wineinfo의 디자인 언어는 와인 하우스의 지하 카브(cave)에 정리된 분류 장부에서 출발한다. 소란스럽지 않고, 불필요한 장식도 없다. 각 와인은 정확한 레이블과 제자리를 가지며, 사용자는 조용히 탐색하고 정확히 찾는다. 디자인은 콘텐츠를 전달하는 그릇일 뿐, 스스로 주목받으려 하지 않는다.

단일 서체(Pretendard Variable)가 한국어 환경에 최적화되어 위계를 형성하고, 딥 포레스트 그린 하나가 인터랙션의 주축을 담당한다. 여백은 숨을 쉬게 한다. 모든 색상과 크기는 기능에서 출발한다.

이 시스템은 다음을 명시적으로 거부한다: 소셜커머스형 충동 유도 패턴, 화려한 SaaS 대시보드의 그라데이션과 메트릭 트로피, 텍스트 덤프식 학술 나열. 와인은 조용하고 신뢰할 수 있는 공간에서 말한다.

**Key Characteristics:**
- 단색 단계 계층 — 9단계 중립 + 1개 액션 컬러
- 타이트한 네거티브 트래킹(-0.01em~-0.025em)으로 한국어 가독성 향상
- 카드는 플랫 기본, 호버 시에만 부상
- 레이블은 항상 uppercase + 넓은 자간(0.04em) — 분류 태그로만 사용
- 10px 미만 텍스트 없음 (레이블 최소 11px)

## 2. Colors

단일 액션 컬러(Terroir Green)가 화면의 5% 이하에만 나타난다. 나머지는 무채색의 9단계 계층으로 구성된다.

### Primary
- **Terroir Green** (`#1B4332`): 버튼, 활성 상태, 필터 배지의 선택 상태. 화면당 1~2개 요소에만 사용.
- **Terroir Green Lift** (`#2D6A4F`): 버튼 호버 전용. Terroir Green의 유일한 파생.

### Neutral
- **Ink** (`#111111`): 페이지 제목, 와인 카드 이름, 헤더 브랜드명. 가장 강한 텍스트.
- **Body Text** (`#3d3d3d`): 본문 설명, 검색 입력값, 일반 콘텐츠 텍스트.
- **Secondary Text** (`#6b6b6b`): 와이너리명, 지역, 품종 등 보조 메타데이터.
- **Muted** (`#b3b3b3`): 비활성 네비게이션, 힌트 텍스트, 플레이스홀더.
- **Border** (`#e8e8e8`): 카드 테두리, 섹션 구분선, 입력 필드 테두리.
- **Canvas** (`#f9f9f9`): 카드 상단 이미지 영역 배경, 푸터 배경, 칩 배경.
- **Surface** (`#ffffff`): 페이지 배경, 카드 콘텐츠 영역, 헤더 배경.

**The One Voice Rule.** Terroir Green은 한 화면에 하나의 인터랙션 주체에만 쓴다. 버튼과 활성 네비게이션이 동시에 초록색이어서는 안 된다.

**The Neutral Staircase Rule.** 텍스트 위계는 Ink → Body Text → Secondary Text → Muted 순서만 허용한다. 이 사다리를 건너뛰거나 뒤집으면 읽기 흐름이 깨진다.

## 3. Typography

**Body/Display Font:** Pretendard Variable (fallback: Pretendard, -apple-system, Apple SD Gothic Neo, sans-serif)

한국어 환경을 위한 단일 서체 전략. 웨이트 대비(400→600→700)가 위계를 만든다. 폰트 패밀리를 추가하지 않는다. 영문 콘텐츠(와인명, 산지)도 Pretendard로 처리하며 별도 디스플레이 서체를 섞지 않는다.

### Hierarchy
- **Display** (700, 28px, line-height 1.25, letter-spacing -0.025em): 홈 히어로 헤드라인 단독 사용.
- **Headline** (600, 22px, line-height 1.35, letter-spacing -0.02em): 페이지 제목(`와인 컬렉션` 등).
- **Title** (600, 15px, line-height 1.45, letter-spacing -0.01em): 카드 와인명, 헤더 브랜드명, 섹션 서브타이틀.
- **Body** (400, 14px, line-height 1.75, letter-spacing -0.005em): 설명 문단, 푸터 링크. 최대 줄 길이 65–70ch.
- **Label** (500, 11px, line-height 1.2, letter-spacing 0.04em, uppercase): 네비게이션, 분류 태그(타입, 지역), spec 레이블 전용. 4단어 이하 짧은 레이블에만.

**The Single Family Rule.** 서체는 Pretendard Variable 하나다. 두 번째 폰트를 추가하는 것은 이 시스템의 절제된 목소리를 희석시킨다.

**The Label Floor Rule.** uppercase 레이블은 최소 11px. 그 이하에서는 가독성이 무너진다.

## 4. Elevation

이 시스템은 기본 플랫(flat)이다. 정지 상태의 카드는 `border: 1px solid #e8e8e8`만으로 구분되고 그림자가 없다. 그림자는 인터랙션의 응답으로만 나타난다.

### Shadow Vocabulary
- **Card Hover** (`box-shadow: 0 8px 24px rgba(0,0,0,0.10)`): 와인 카드 마우스오버 시 부상 신호. 동시에 border가 `#1B4332/30`으로 전환.
- **Header Sticky** (sticky header는 `border-bottom: 1px solid #e8e8e8`로만 구분): 그림자 없음.

**The Flat-By-Default Rule.** 그림자는 상태 변화의 응답이지 장식이 아니다. hover/focus 외 그림자는 금지된다.

## 5. Components

### Buttons
절제된 무게감. 라운드를 남용하지 않는다.
- **Shape:** 살짝 둥근 모서리 (6px)
- **Primary:** Terroir Green(`#1B4332`) 배경, 흰색 텍스트. 텍스트는 13px 이하 또는 label 스타일(11px uppercase).
- **Hover:** Terroir Green Lift(`#2D6A4F`)로 전환, `opacity: 0.9` 방식 미사용.
- **검색 버튼 특수형:** 입력 필드와 붙어 있는 형태로, 인라인 right 배치. 독립 버튼과 동일한 컬러 규칙.

### Type Chips
분류 태그. 독립 인터랙션 요소가 아닌 읽기 전용 레이블.
- **Style:** Canvas(`#f9f9f9`) 배경, Border(`#e8e8e8`) 1px 테두리, 11px uppercase, secondary-text(`#6b6b6b`).
- **Shape:** 4px 라운드 (pill이 아님).
- **No color-coded types:** 레드/화이트/로제를 색으로 구분하지 않는다. 텍스트가 유일한 신호.

### Wine Cards
리스트와 그리드 두 가지 뷰를 지원한다. 두 뷰 모두 같은 컬러 규칙을 따른다.
- **Grid View:** 흰색 배경, `border: 1px solid #e8e8e8`, 8px 라운드. 상단 이미지 영역은 Canvas(`#f9f9f9`) 배경. 호버: `shadow-lg` + `border-color: #1B4332/30`.
- **List View:** 하단 border-b만으로 구분. 호버: 전체 행 Canvas 배경 전환.
- **Corner Style:** 카드 최대 8px. 24px 이상 라운드 금지.

### Search Input
- **Style:** 흰색 배경, `border: 1.5px solid #e8e8e8`, 6px 라운드. 플레이스홀더: Muted(`#b3b3b3`).
- **Focus:** border-color를 Ink(`#111111`)로 전환. glow 없음.
- **텍스트:** Body Text(`#3d3d3d`), 14px.

### Navigation
- **Style:** 헤더 내 flex 배치. label 타이포그래피(11px uppercase, 0.04em).
- **Default:** Muted(`#b3b3b3`).
- **Active:** Ink(`#111111`) + 하단 2px underline.
- **Hover:** Ink(`#111111`) 전환, underline 없음.
- **Mobile:** 햄버거 버튼으로 숨김. 현재 메뉴는 별도 구현.

### Section Divider
와인 상세 페이지의 섹션 간 구분 요소.
- 얇은 선(`#e8e8e8`) + 가운데 텍스트 레이블(11px uppercase, Secondary Text).
- 이 패턴은 섹션 간 공백을 대체한다. 두 가지를 동시에 쓰지 않는다.

## 6. Do's and Don'ts

### Do:
- **Do** 타이포그래피 위계만으로 섹션을 구분한다 — 분리선과 제목이 공존할 때 선 또는 공백 하나를 제거한다.
- **Do** 카드 hover 시 border-color와 shadow를 동시에 바꿔 인터랙션 신호를 강화한다.
- **Do** 모든 uppercase 레이블에 `letter-spacing: 0.04em`을 적용한다.
- **Do** 이미지가 없는 와인 카드는 Canvas 배경 + 병 이모지 폴백을 유지한다.
- **Do** 접근성 텍스트 대비를 확인한다: body text(`#3d3d3d`) on white는 ≥ 9:1 통과. Muted(`#b3b3b3`)는 장식용이며 본문 정보에 사용 금지.

### Don't:
- **Don't** 화려한 SaaS 대시보드 패턴을 쓴다 — 그라데이션 숫자 트로피, 큰 숫자 + 작은 레이블의 hero-metric 템플릿, 그라데이션 accent 버튼.
- **Don't** 소셜커머스형 장치를 사용한다 — 할인율 배지, 카운트다운 타이머, 충동구매 유도 배너.
- **Don't** 위키피디아식 텍스트 덤프를 만든다 — 스펙 테이블을 5개 이상 나열하거나, 연속 단락 없이 숫자·기호만 이어 붙이지 않는다.
- **Don't** 카드에 `border-radius: 16px` 이상을 사용한다. 8px가 최대다.
- **Don't** `border-left: 3px+ solid [color]`를 카드/리스트 아이템 액센트로 사용한다. 이 패턴은 이 시스템의 절제와 충돌한다.
- **Don't** `background-clip: text` 그라데이션 텍스트를 사용한다.
- **Don't** Terroir Green을 텍스트 컬러로 사용한다 — 이 색은 버튼 배경과 활성 상태 전용이다.
- **Don't** 새로운 서체를 추가한다. Pretendard Variable이 유일한 타이포그래피 기반이다.
