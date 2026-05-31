const WINERIES = [
  {
    "nameKo": "케이머스 빈야즈",
    "nameEn": "Caymus Vineyards",
    "country": "미국",
    "region": "나파 밸리",
    "description": "케이머스 빈야즈는 1972년 찰리 와그너(Charlie Wagner)와 그의 아들 척 와그너(Chuck Wagner)에 의해 설립된 나파 밸리의 아이콘적인 와이너리입니다. 반세기가 넘는 역사를 자랑하며, 나파 밸리 카베르네 소비뇽의 정수를 담은 와인으로 전 세계에 이름을 알렸습니다.",
    "history": "1975년 첫 빈티지를 선보인 이래로, 케이머스는 일관되게 뛰어난 품질의 와인을 생산해 왔습니다. 특히 스페셜 셀렉션은 Wine Spectator로부터 두 번이나 올해의 와인(1984, 1990)에 선정되는 영예를 안았습니다.",
    "websiteUrl": "https://caymus.com"
  },
  {
    "nameKo": "케이머스 빈야드",
    "nameEn": "Caymus Vineyards",
    "country": "미국",
    "region": "나파 밸리",
    "description": "1972년 찰리 와그너가 설립한 나파 밸리 대표 와이너리. 카베르네 소비뇽의 제왕으로 불린다.",
    "websiteUrl": "https://www.caymus.com"
  },
  {
    "nameKo": "풋 프린트 소비뇽 블랑",
    "nameEn": "",
    "country": "South Africa"
  },
  {
    "nameKo": "풋 프린트 카버네 소비뇽",
    "nameEn": "",
    "country": "South Africa"
  },
  {
    "nameKo": "풋 프린트 멀롯-피노타쥐",
    "nameEn": "",
    "country": "South Africa"
  },
  {
    "nameKo": "풋 프린트 쉬라즈",
    "nameEn": "",
    "country": "South Africa"
  },
  {
    "nameKo": "립쉑",
    "nameEn": "",
    "country": "South Africa"
  },
  {
    "nameKo": "선키스트 스위트 레드",
    "nameEn": "",
    "country": "South Africa"
  },
  {
    "nameKo": "선키스트 스위트 화이트",
    "nameEn": "",
    "country": "South Africa"
  },
  {
    "nameKo": "선키스트 스위트 로제",
    "nameEn": "",
    "country": "South Africa"
  },
  {
    "nameKo": "끌로 앙리",
    "nameEn": "",
    "country": "New Zealand"
  },
  {
    "nameKo": "부티노",
    "nameEn": "",
    "country": "New Zealand"
  },
  {
    "nameKo": "줄스 테일러",
    "nameEn": "",
    "country": "New Zealand"
  },
  {
    "nameKo": "말보로 소비뇽 블랑",
    "nameEn": "",
    "country": "New Zealand"
  },
  {
    "nameKo": "피노누아",
    "nameEn": "",
    "country": "New Zealand"
  },
  {
    "nameKo": "샤도네이",
    "nameEn": "",
    "country": "New Zealand"
  },
  {
    "nameKo": "피노그리",
    "nameEn": "",
    "country": "New Zealand"
  },
  {
    "nameKo": "로제",
    "nameEn": "",
    "country": "New Zealand"
  },
  {
    "nameKo": "Secret Stone Marlborough Sauvignon Blanc",
    "nameEn": "",
    "country": "New Zealand"
  },
  {
    "nameKo": "울라르 글래드스톤",
    "nameEn": "",
    "country": "New Zealand"
  },
  {
    "nameKo": "울라르 빈야드",
    "nameEn": "",
    "country": "New Zealand"
  },
  {
    "nameKo": "시크릿 스톤",
    "nameEn": "",
    "country": "New Zealand"
  },
  {
    "nameKo": "발타자 레스 리슬링 트로켄",
    "nameEn": "",
    "country": "Germany"
  },
  {
    "nameKo": "발타자 레스 리슬링 그로세스 게벡스",
    "nameEn": "",
    "country": "Germany"
  },
  {
    "nameKo": "발타자 레스 리슬링 카비네트",
    "nameEn": "",
    "country": "Germany"
  },
  {
    "nameKo": "발타자 레스 리슬링 슈페트레제",
    "nameEn": "",
    "country": "Germany"
  },
  {
    "nameKo": "발타자 레스 리슬링 아우스레제",
    "nameEn": "",
    "country": "Germany"
  },
  {
    "nameKo": "닥터 헤르만",
    "nameEn": "",
    "country": "Germany"
  },
  {
    "nameKo": "프리츠 짐머 리슬링",
    "nameEn": "",
    "country": "Germany"
  },
  {
    "nameKo": "프리츠 짐머 리슬링 카비넷",
    "nameEn": "",
    "country": "Germany"
  },
  {
    "nameKo": "프리츠 짐머 리슬링 슈페트레제",
    "nameEn": "",
    "country": "Germany"
  },
  {
    "nameKo": "프리츠 짐머 리슬링 아우스레제",
    "nameEn": "",
    "country": "Germany"
  },
  {
    "nameKo": "골드트라움 24K (Goldtraum 24K)",
    "nameEn": "",
    "country": "Germany"
  },
  {
    "nameKo": "살베이",
    "nameEn": "",
    "country": "Germany"
  },
  {
    "nameKo": "나파밸리에서의 명성에 이어 롱반으로 캘리포니아 최고 가성비 와인을 탄생시킨 카모미에서 2019년 신규 BEND 를 출시합니다.",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "롱반으로 캘리포니아 최고 value와인을 만든 카모미 그룹에서 만든 Bend의 첫 리저브급 와인입니다.",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "레팡드르",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "브랜드 나파밸리 N°95 카버네소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "브랜드 나파밸리 에스테이트 카버네소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "바넷 빈야즈 카버네 소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "바넷 빈야즈 멀롯",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "와이너리 주변에 자주 나타나는 ‘방울뱀’ 이라는 이름의 이 와인은 다크초콜릿과 커피, 블랙커런트와 갓 딴 블랙베리 등이 조화롭습니다. 미네랄과 유칼립투스의 힌트가 포도밭의 테루아를 짐작케 하며 살짝 더해지는 후추와 너트맥 스파이스, 감초 등이 복합미를 더합니다.",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "카모미 나파밸리 카버네 소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "카모미 나파밸리 멀롯",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "나파밸리에서 비교적 서늘한 카네로스 지역의 포도를 사용해 만든 와인으로 풍부한 과실 풍미와 산도가 어우러진 풀바디의 샤도네이 입니다.",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "캘리포니아의 선택된 AVA 지역에서의 다양한 포도 품종들로 양조한, 과일 풍미가 잘 살아있는 레드 블렌드 입니다.",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "카모미 몬터레이 소비뇽 블랑은 활기찬 자몽과 향긋한 멜론의 아로마로 먼저 다가옵니다. 입에서는 밝고 상큼한 레몬과 달콤한 파인애플, 풍부하고 다채로운 캘리포니아 떼루아의 허브가 어우러져 생동감 넘치는 풍미를 느낄 수 있습니다.",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "1992년 시작된 콜긴의 역사는 짧지만 그 안에는 와인 업계 최 정상급 인물들의 발자취가 생생합니다. 오너 앤 콜긴(Ann Colgin)은 대학 졸업 후 런던의 소더비 경매소에서 경매사 과정을 이수하면서 와인에 매료되었고, 1988년 나파 밸리 와인 옥션에 골동품 딜러인 남편과 참가하던 중 캘리포니아의 컬트 와인메이커 헬렌 털리(Helen Turley)를 만나게 됩니다.",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "디스트릭트 나파 카버네 소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "디스트릭트 러시안리버밸리 샤도네이\u000bDistrict Russian River Valley Chardonnay",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "아이슬 빈야드 알타그라시아 카버네 소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "포스타 샤도네이",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "포스타 피노누아",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "포스타 레드 와인",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "Wine Spectator 선정, <20세기의 와인 12선> (1974)",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "클래식은 영원하다 - 하이츠 셀라",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "잉글 눅 루비콘",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "잉글 눅 블랑카누",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "잉글 눅 까버네쇼비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "잉글 눅 1882",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "잉크 그레이드",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "이터 샤도네이",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "이터 피노누아",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "이터 카버네 소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "Josh Cellars의 카버네 소비뇽은 브랜드의 시작을 알린 첫 번째 와인으로, 이후 조쉬의 모든 와인에 적용되는 높은 품질 기준을 세운 상징적인 제품입니다.",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "이른 아침에 시원한 상태로 수확되어 바로 압착되며, 스테인리스 스틸 탱크에서 침전 과정을 거치고 약 3~4주간의 저온 발효를 통해 품종 고유의 개성과 향을 극대화합니다. 일부는 리즈 컨택과 말로락틱 발효를 거쳐 질감과 풍미를 더했습니다. 전체의 10%는 새 프렌치 오크 배럴에서 숙성시켜 균형감과 부드러움을 완성했습니다.",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "Deutsch Family Wine & Spirits(DFWS)는 1981년 설립된 가족 경영 와인·스피릿 전문 기업으로, 9개국에서 Josh Cellars 포함 22개의 와인·스피릿 브랜드를 수입·유통하며, 미국 내 전체 와인 회사 중 3위, 프리미엄 테이블 와인 부문에서는 1위를 차지한 글로벌 주류 기업입니다.",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "캘리포니아는 포도 재배에 이상적인 환경을 갖추고 있습니다. 이 지역의 토양은 모래, 점토, 양토, 화강암, 화산재, 해양 퇴적층, 강 자갈층 등 매우 다양해, 포도 품종의 특성을 잘 살릴 수 있는 조건을 갖추고 있습니다.",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "▶ 원산지 : California, USA",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "우리는 모든 가정에 Hearth — 사람들이 모여 따뜻함과 위로를 나누는 공간 — 이 있기를 바랐습니다. Hearth는 단순히 식탁 위의 와인 경험을 넘어, 저녁 식사 이후 친구들이 머물며 진정한 교감을 나누는 특별한 순간까지 이어지는 새로운 와인 문화를 제안합니다.",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "조쉬 셀라 리저브 노스 코스트 샤도네이",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "조쉬 셀라 리저브 노스 코스트 카버네 소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "포도는 풍미가 절정에 이른 시기에 수확되며, 압착 후 24~48시간 동안 콜드 소킹 과정을 거칩니다. 이후 약 10~15일간의 발효를 통해 포도 껍질로부터 풍미, 색상, 타닌을 최대한 끌어낸 뒤, 말로락틱 발효를 거쳐 산미를 부드럽게 하고 질감을 향상시킵니다. 마지막으로, 최근 비워낸 버번 위스키 배럴에서 2개월간 숙성시켜 독특한 풍미를 더했습니다.",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "라 크레마 러시안 리버 밸리 샤도네이",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "라 크레마 러시안 리버 밸리 피노누아",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "라 크레마 소노마 코스트 샤도네이",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "라 크레마 소노마 코스트 피노누아",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "라 크레마 몬터레이 샤도네이",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "라 크레마 몬터레이 피노누아",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "\"If any grape growing region in California deserves to be called a well-defined district, it is Howell Mountain.\"",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "크리스 카펜터는 일리노이 주립대에서 생물학을 전공하고 국제 비즈니스/마케팅 MBA 를 취득 후 우연히 나파 밸리를 방문하게 됩니다. 와인의 세계에서 영감을 받은 그는 명문 UC Davis 에서 포도 재배학과 양조학 석사를 이수하며 본격적인 양조가의 길로 접어듭니다. 졸업 후 이태리 토스카나의 유서 깊은 와이너리인 안티노리에서 근무, 페루자 대학교에서 양조학에 대한 보다 깊은 배움을 얻었으며, 이후 도멘 카네로스, 도멘 샹동, 카디날 등 나파 밸리의 유수 와이너리에서 양조가로 활동하며 명성을 쌓습니다. 또한 일리노이대학의 풋볼 플레이어/나파 밸리 유스 심포니 회장으로도 활동했으며 자상한 남편이자 모범적인 아빠인 그를 세상은 와인 평론가 로버트 파커로부터 100점을 세 번이나 받은 ‘천재 와인 메이커’ 로 부릅니다.",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "하웰 마운틴 멀롯",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "하웰 마운틴 카버네 프랑",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "Established in 1995,",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "나파 마운틴 카버네. 그 순수의 극치",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "마운트 비더 카버네 소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "하웰 마운틴 카버네 소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "스프링 마운틴 카버네 소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "다이아몬드 마운틴 카버네 소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "롱반 샤도네이",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "롱반 멀롯",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "롱반 피노누아",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "롱반 진판델",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "롱반 카버네 소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "롱반 레드",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "롱반 리저브 샤도네이",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "롱반 리저브 카버네 소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "롱반 리저브 피노누아",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "카버네 소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "카버네 프랑",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "멀롯",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "올드 소울 샤도네이",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "올드 소울 올드바인 진판델",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "올드 소울 카버네 소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "티.앤.티 진판델",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "오퍼스 원 2019",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "오버츄어",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "슈레이더 카버네 소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "슈레이더 CCS 카버네 소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "슈레이더 콜스월시 카버네 소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "슈레이더 RBS 카버네 소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "슈레이더 “올드 스파키” 카버네 소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "슈레이더 T6 카버네 소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "더블 다이아몬드 카버네 소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "슈레이더 LPV 카버네 소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "슈레이더 GII 카버네 소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "더블 다이아몬드 레드",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "슈레이더 헤리티지 클론",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "슈레이더 모나스트리 블록",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "슈레이더 와포 힐",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "▶ 원산지 : 오크빌(Oakville) - 나파 밸리(Napa Valley)",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "토칼론 빈야드 컴퍼니 엘리자스 레드 블랜드",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "토칼론 빈야드 컴퍼니 하이스트 뷰티 카버네 소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "토칼론 빈야드 컴퍼니 H.W.C 카버네 소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "케이머스 스페셜 셀렉션 카버네 소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "케이머스 나파밸리 카버네 소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "케이머스 캘리포니아 카버네 소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "보난자 카버네 소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "코넌드럼 레드 블렌드",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "코넌드럼 화이트",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "바다와 태양의 에너지가 담긴 샤도네이",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "메르솔레이 실버 샤도네이",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "에멀로 멀롯",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "에멀로 소비뇽 블랑",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "케이머스 캘리포니아 진판델",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "▶ 원산지 :  미국 / 캘리포니아 / 소노마 카운티 / 소노마 코스트",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "▶ 원산지 :  미국 / 캘리포니아 / 소노마 / 카네로스",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "파우더 하우스 빈야드 샤도네이는 오베르의 4번째 이스테이트 샤도네이로 30년이상 샤르도네 와인을 만든 스타 와인 메이커 마크 오베르의 정점에 도달한 와인입니다. 파우더 하우스는 예전에 산비탈에 화약을 저장했던 화약 저장고의 이름에서 유래했으며 보올, 원형 경기장과 같은 오목한 모양의 Forestville (포레스트빌)의 구 시가지에 위치하며, 오베르의 샤도네이 중 엘레강스하면서도 파워풀한 와인으로 소개되고 있습니다",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "2003년 첫 빈티지가 탄생하며 세상에 알려진 로렌 빈야드는 ‘완벽함’에 대한 오베르의 정의 입니다. Mark Aubert의 딸 Lauren의 이름을 따 지은 로렌 빈야드는 포레스트빌의 “황금 언덕＂이라 불리는 곳에 위치합니다. 오베르의 가장 좋은 4 가지 클론으로 구성되어 놀라운 집중력과 밀도를 보여주며 우아한 마우스필로 소노마 코스트 샤도네이의 정점을 선사합니다. 2015년, 2017년, 2018년 빈티지는 연속으로 Robert Parker 100점을 받은 쾌거를 이루며 시간이 흐를수록 진화하는 품질을 증명하고 있습니다.",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "가장 남성적인 피노누아로 꼽히는 UV-SL은 풍부한 향과 맛으로 미각 전체에 걸쳐 가시적인 충만함을 보여줍니다. 포도밭이 바다에서 가깝다고 생각하기 쉽지만, 이 지역의 따뜻한 기후는 포도가 최적의 숙성 상태에 도달하는데 매우 적합합니다.",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "소노마 코스트 샤도네이는 싱글 빈야드 지역의 어린 포도나무로 구성되어 있습니다. 클래식한 빈티지와 오베르만의 스타일이 두드러지며, 우아한 텍스쳐와 아로마를 선사합니다.",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "▶ 원산지 :  미국 / 캘리포니아 / 소노마 카운티 / 러시안 리버 밸리",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "▶ 원산지 :  미국 / 캘리포니아 / 소노마 카운티 / 카네로스",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "허쉬 빈야드 산 안드레아스  폴트 피노 누아",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "허쉬 빈야드 이스트 릿지 피노 누아",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "허쉬 빈야드 리저브 피노 누아",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "코스타 브라운 세리즈 빈야드 피노 누아",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "코스타 브라운 갭스 크라운 피노 누아",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "코스타 브라운 산타 리타 힐즈 피노 누아",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "코스타 브라운 러시안 리버 밸리 피노 누아",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "코스타 브라운 소노마 코스트 피노 누아",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "코스타 브라운 원 식스틴 샤도네이",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "코스타 브라운 마운트 카멜 피노누아",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "코스타 브라운 앤더슨 밸리 피노누아",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "코스타 브라운 윌라매트 밸리 피노누아",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "코스타 브라운 키퍼 랜치 피노 누아 2018",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "마리타나 라 리비에르 샤도네이",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "마리타나 샵 블록 샤도네이",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "마리타나 핸슨힐 샤도네이",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "마리타나 레 루스 피노누아",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "마리타나 젠킨스 랜치 싱글빈야드 피노누아",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "레인 소노마 코스트 피노누아",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "레인 포트 로스-씨뷰 피노누아",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "레인 프리스톤 옥시덴탈 피노누아",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "레인 소노마 코스트 레이디 마조리 샤도네이",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "이곳의 포도밭은 바위가 많은 언덕 위에 있으며, 포트로스의 시원한 태평양 해안선에서 3km 떨어진 곳에 위치해 있습니다. 이 곳의 토양은 갈라진 암석 사이로 배수가 원활하며, 40년 전에 이곳에 심어진 포도나무는 토양에 단단히 뿌리를 내리고 있습니다.",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "센시즈 소노마 코스트 샤도네이",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "센시즈 러시안 리버밸리 샤도네이",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "센시즈 엘 디아블로 샤도네이",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "센시즈 티에리엇 샤도네이",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "센시즈 칸츨러 빈야드 피노누아",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "센시즈 찰스 하인츠 샤도네이",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "센시즈 비에이 티에리엇 샤도네이",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "센시즈 데이원 피노누아",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "센시즈 엠씨엠 88 피노누아",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "센시즈 보데가 티에리엇 피노누아",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "본 오브 파이어 카버네 소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "인트린직 카버네 소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "인트린직 레드 블렌드",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "▶ 원산지 :  미국 / 워싱턴 / 콜럼비아 밸리 (Columbia Valley / Washington / US)",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "2017, 2016, 2014, 2013 Wine & Spirits Top 100 Values of the Year",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "레꼴 No.41 콜럼비아 밸리 카버네 소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "▶ 원산지 : 미국 / 워싱턴 / 왈라왈라 밸리 (Walla Walla Valley / Washington / US)",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "오레곤 비오니에",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "윌라멧 밸리 피노 누아",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "쉐이 빈야드 피노 누아",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "그랜드 이스테이트 골드",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "카버네 소비뇽 리저브",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "H3 카버네 소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "H3 멀롯",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "H3 샤도네이",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "그랜드 이스테이트 카버네 소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "그랜드 이스테이트 멀롯",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "그랜드 이스테이트 샤도네이",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "투바인 카버네 소비뇽",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "투바인 카버네 멀롯",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "투바인 카버네 쉬라즈",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "투바인 카버네 샤도네이",
    "nameEn": "",
    "country": "USA"
  },
  {
    "nameKo": "천재 와인메이커의 와인 ‘알바로 팔라시오스’",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "팔라시오스 레몬도는 2,000년 이상 된 포도 재배지이고 150년 넘게 와인을 생산한 곳으로 알바로의 아버지 호세 팔라시오스가 1960년대부터 가업과 전통을 기반으로 와인 생산의 터를 잡았고 2000년대 이후 알바로가 양조 책임을 맡게 되면서 비약적으로 발전했습니다.",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "<천재 와인메이커 “알바로 팔라시오스”>",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "그랑 미갈로",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "깜포 산 빅토리오",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "비센테 간디아(Vicente Gandia) 는 1885년 스페인 발렌시아 지방에 설립된 와이너리로 올해로 131년을 맞이하는 역사와 전통의 와인기업 입니다.  비센테 간디아는 긴 전통과 함께 혁신을 추구하는 와이너리로 늘 품질향상, 와인문화 선도와 사회복지 실현에도 깊은 관심을 가지고 있습니다.",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "라 발 알바리뇨",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "라 발 핀카 아란테이 알바리뇨",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "마르께스 데 톨레도 그랑 레세르바",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "마르께스 데 톨레도 레세르바",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "마르께스 데 톨레도 크리안자",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "마르께스 데 톨레도 베르데호",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "전통이 살아있는 고품질의 현대적 와인을 생산한다는 사명으로 5대째 꾸준한 혁신을 통해 이어나가고 있는 이 패밀리 와이너리는 스페인 와인 모더니즘의 성공 사례로 맹위를 떨치고 있습니다.",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "베르데호",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "자연효모로 발효가 진행되며, 잔여당분이 약 80g/L 남았을 때 온도 조절을 통해 발효를 중단합니다.",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "스테인리스 탱크 발효 및 자연적 젖산발효를 거치는 이 와인은 3개월 동안 앙금과의 숙성 기간을 거쳐 더욱 진한 풍미를 지니게 됩니다.",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "제비꽃과 같은 보랏빛을 띠며, 인텐스한 체리와 블루베리향이 뚜렷합니다. 복합미를 더하는 흑후추의 풍미 그리고 흙의 존재감도 느껴집니다. 입안에서는 부드러운 타닌과 단단하면서 신선한 과실 풍미가 긴 여운을 이끕니다.",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "수령이 130년 이상 된 포도나무에서 수확된, 풍미가 집약된 포도만을 사용한 와인입니다. 오크통과 진흙탱크에서 약 11개월 가량 숙성을 진행하고, 2년 동안의 병숙성 후 출시됩니다.",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "자연 효모와 박테리아를 통해 자연적 발효와 젖산발효를 진행합니다. 산화가 이뤄지는 오크통에서 3년의 숙성을 거치고 6개월간 병에서 안정기간을 지내고 출시됩니다.",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "< 친환경 재료로 만든 건축물과 다양한 생물이 공존하는",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "오가닉 와인 (A.K.A 유기농 와인)",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "바이오다이나믹 와인",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "내추럴 와인",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "로저 구라트 브뤼 밀레짐",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "비센테 간디아(Vicente Gandia) 는 1885년 스페인 발렌시아 지방에 설립된 와이너리로 올해로 131년을 맞이하는 역사와 전통의 와인 기업 입니다.  비센테 간디아는 긴 전통과 함께 혁신을 추구하며 늘 품질향상, 와인문화 선도와 사회복지 실현에도 깊은 관심을 가지고 있습니다.",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "▶ 원 산 지 : 스페인 (Valencia)",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "산테스",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "티오니오 레세르바",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "비나 레알 크리안자",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "비나 레알 리제르바",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "비나 레알 그랑 리제르바",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "비나 레알 퍼멘티드 블랑코",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "비나 레알 라 비르헨",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "비나 레알 바케데르",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "베시토스 모스카토 Besitos Moscato",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "베시토스 로제 Besitos Rose",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "다그다",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "마르께스 달고",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "오페라 프리마 스위트 모스카토 스파클링",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "오페라 프리마 핑크 모스카토 스파클링",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "라 츌라 상그리아",
    "nameEn": "",
    "country": "Spain"
  },
  {
    "nameKo": "무르사 옐로우 무스캇",
    "nameEn": "",
    "country": "Slovenia"
  },
  {
    "nameKo": "오즈메츠 소비뇽 블랑",
    "nameEn": "",
    "country": "Slovenia"
  },
  {
    "nameKo": "풍요의 땅 ‘토스카나’의 정수, 아카넘",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "2013 Vintage:  RP 96+점",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "2013 Vintage:  RP 95점, JS 94점",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "아카넘 일 파우노 2019",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "까델 보스코 뀌베 프레스티지 엑스트라 브륏",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "까델 보스코 뀌베 프레스티지 로제",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "까델 보스코 도자쥬 제로",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "까델보스코 빈티지 컬렉션 엑스트라 브륏\u000b Ca’del Bosco Vintage Collection Extra Brut",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "까델보스코 안나마리아 클레멘티\u000b Ca’del Bosco Annamaria Clementi",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "까델 보스코 셀바 델라 테사 \u000b Ca'del Bosco Selva della Tesa",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "까델 보스코 피네로 \u000b Ca'del Bosco Pinéro",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "칸티나 트라민",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "1897년 프랑스계 이주민인 프랑수아(Francois) 가문이  설립한 이 포도원은 토스카나(Toscana) 및 이태리 전체에서 가장 잘 알려진 끼안티(Chianti) 와인이 생산되는 지역 중 자갈이 풍부한 그레베(Greve) 마을에 위치하고 있습니다.",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "로맨틱",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "카스텔로 디 퀘르체토 치냘레",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "▶ 원산지 : 토스카나(Toscana) – 이태리",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "끼안티 클라시코 그란 셀레지오네 “일 피키오＂",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "끼안티 클라시코",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "끼안티 클라시코 리제르바",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "퀘르체토 끼안티",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "베르나차 디 산지미냐노",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "토스카나 레드",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "Gerardo Cesari(제라르도 체사리)에 의해 1936년 설립된 베네토 와인의 강자 체사리는 전통을 살린 혼이 담긴 와인을 현대적으로 해석하여 ’40년대에 이미 이태리 전역에서 성공적을 거두면서 베네토의 핵심 생산자로 자리하게 되었습니다.",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "아마로네 클라시코",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "“마라” 비노 디 리파소",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "발폴리첼라 클라시코",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "소아베 클라시코",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "발폴리첼라 리파소 수페리오레",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "돈나푸가타  밀레 에 우나 노떼",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "돈나푸가타  앙겔리",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "돈나푸가타  세다라",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "돈나푸가타  세라자데",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "돈나푸가타  루메라",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "돈나푸가타  라푸가",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "돈나푸가타  안띨리아",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "돈나푸가타  리게아",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "돈나푸가타  벤 리에",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "돈나푸가타  벨아사이",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "돈나푸가타  술 불카노 비앙코\u000bDonnafugata, Sul Vulcano Bianco",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "돈나푸가타  술 불카노 로사토\u000bDonnafugata, Sul Vulcano Rosato",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "돈나푸가타  술 불카노 로쏘\u000bDonnafugata, Sul Vulcano Rosso",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "돈나푸가타 프라고레 에트나 로쏘\u000bDonnafugata, Fragore Etna Rosso",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "돈나푸가타 로사",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "돈나푸가타 이졸라노",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "돈나푸가타 꾸오르디라바",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "돈나푸가타  탄크레디",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "로마냐 트레비아노",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "로마냐 산지오베제 리제르바",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "로마냐 산지오베제 아파시멘토",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "‘칸티네 레오나르도 다 빈치’는 1961년 천재 미술가이자 과학자인 레오나르도 다 빈치의 고향인 Vinci 마을에 약 70헥타르의 포도원으로 그 역사를 시작하여 현재 50년이 지난 현재는 총 750헥타르의 포도원을 소유하고 있습니다. Chianti, Brunello di Montalcino 와인으로도 각종 평론지, 와인대회에서 수상을 받고, 이를 통한 명성도 매년 쌓아가고 있습니다.",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "빌라 다 빈치 산 지오",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "빌라 다 빈치 산토 이폴리토",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "다 빈치 끼안티",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "다 빈치 끼안티 리제르바",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "다 빈치 브루넬로 디 몬탈치노",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "모나리자 비노 로쏘 디 이탈리아",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "모나리자 로마냐 산지오베제 수페리오레",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "500주년 기념 에디션 구성",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "수태고지 (The Annunciation), 1472년 作",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "빌라 다 빈치 스트레다 2017",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "빌라 다 빈치 산 지오 2017",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "빌라 다 빈치 리나리우스 2016",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "빌라 다 빈치 산토 이폴리토 2016",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "☆☆내추럴 와인은 와인 본연의 맛을 살리기 위해 필터링을 최소화 하여 주석 및 병내 부유물이 있을 수 있습니다.",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "메디치 에르메테",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "오뇨스트로 화이트",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "오뇨스트로 레드",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "오뇨스트로 인스타그램 주소",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "피에몬테의 작은 마을인 Treiso에 베이스에 둔 Pelissero는 1957년 설립 이후    3대째 이어져 오고 있는 가족 경영 와이너리입니다.",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "펠리세로",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "▶ 원산지  :  피에몬테(Piemonte), 이탈리아(Italy)",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "푸에르 아풀리에",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "일 팔코네",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "카펠라쵸",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "프리미티보",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "프렐루디오 넘버 원 샤도네이",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "라마 데이 코르비",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "피아니 디 투파라",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "이태리의 와인 명가 ‘루피노’ 는 1877년 일라리오 루피노(Ilario Ruffino)와 레오폴도 루피노(Leopoldo Ruffino)가 플로렌스 근교에 위치한 폰타씨에베(Pontassieve)에 와이너리를 설립하며 그 역사가 시작되었습니다.",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "브루넬로 디 몬탈치노 아리아 2018",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "브루넬로 디 몬탈치노 바치아 2019",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "토레셀라 프로세코",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "토레셀라 프로세코 로제",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "토레셀라 피노그리지오",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "토레셀라 카베르네 소비뇽",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "토레셀라 메를로",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "로쏘 디 몬탈치노",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "브루넬로 디 몬탈치노",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "브루넬로 디 몬탈치노 포지오 알 그란키오",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "브루넬로 디 몬탈치노 비냐 델 라고",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "브루넬로 디 몬탈치노 비냐 스푼탈리",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "로에로 아르네이스",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "티모라쏘 데르토나",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "바르베라 달바 (트레 비그네)",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "바르베라 다스티 (트레 비그네)",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "바르베라 다스티 라 크레나",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "랑게 네비올로 페바코",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "바르바레스코 크뤼 마세리아",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "바롤로 카스틸리오네",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "바롤로 크뤼 라자리토",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "바롤로 크뤼 라베라",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "바롤로 크뤼 체레퀴오",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "바롤로 크뤼 몬빌리에로",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "바롤로 로께 디 카스틸리오네",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "바롤로 브루나테",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "Heritage- Artist Label Wine",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "비에티의 최상급 와인 바롤로 크뤼 리제르바 빌레로는 30년 넘도록 14개의 선별된 빈티지로만 출시되었습니다. 또한 70년대부터 빈티지 별 3,000병 남짓의 소량만 생산하고 있으며 2012 빈티지는 3,860병 출시되어 국내에는 단 30병 수입 되었습니다.",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "비에티의 최상급 와인 바롤로 리제르바 빌레로는 1974년부터 45년간 단 15개의 선별된 빈티지로만 출시 되었습니다. 빈티지 별 3,000병 남짓으로 소량 생산하고 있으며, 2013 빈티지는 3,986병 출시된 희소성 있는 와인입니다.",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "모스카토 다스티",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "바르베라 달바 (트레비에)",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "바르베라 다스티 (트레비에)",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "비에티의 최상급 와인 바롤로 리제르바 빌레로는 1974년부터 52년간 단 15개의 선별된 빈티지로만 출시 되었     습니다. 빈티지 별 3,000~5,000병 남짓으로 소량 생산하고 있으며, 2016 빈티지는 단 5,146병만 출시된 희소성 있는   와인입니다.",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "바롤로",
    "nameEn": "",
    "country": "Italy"
  },
  {
    "nameKo": "아소르스 브랑코",
    "nameEn": "",
    "country": "Portugal"
  },
  {
    "nameKo": "아소르스 로제",
    "nameEn": "",
    "country": "Portugal"
  },
  {
    "nameKo": "아소르스 틴토",
    "nameEn": "",
    "country": "Portugal"
  },
  {
    "nameKo": "다우 포트  (Dow’s Port)",
    "nameEn": "",
    "country": "Portugal"
  },
  {
    "nameKo": "메이커스 테이블 쉬라즈",
    "nameEn": "",
    "country": "Australia"
  },
  {
    "nameKo": "메이커스 테이블 카버네 소비뇽",
    "nameEn": "",
    "country": "Australia"
  },
  {
    "nameKo": "메이커스 테이블 소비뇽 블랑",
    "nameEn": "",
    "country": "Australia"
  },
  {
    "nameKo": "메이커스 테이블 샤도네이",
    "nameEn": "",
    "country": "Australia"
  },
  {
    "nameKo": "넥스트 챕터  카버네-멀롯(수입중단)",
    "nameEn": "",
    "country": "Australia"
  },
  {
    "nameKo": "넥스트 챕터  샤도네이(수입중단)",
    "nameEn": "",
    "country": "Australia"
  },
  {
    "nameKo": "바로사  샤도네이(수입중단)",
    "nameEn": "",
    "country": "Australia"
  },
  {
    "nameKo": "맴레 브룩 쉬라즈",
    "nameEn": "",
    "country": "Australia"
  },
  {
    "nameKo": "맴레 브룩 카버네 소비뇽",
    "nameEn": "",
    "country": "Australia"
  },
  {
    "nameKo": "맴레 브룩 샤도네이",
    "nameEn": "",
    "country": "Australia"
  },
  {
    "nameKo": "넘버원 쉬라즈",
    "nameEn": "",
    "country": "Australia"
  },
  {
    "nameKo": "에이쓰 메이커 쉬라즈(수입중단)",
    "nameEn": "",
    "country": "Australia"
  }
];

const GRAPES = [
  {
    "nameKo": "카베르네 소비뇽",
    "nameEn": "Cabernet Sauvignon"
  },
  {
    "nameKo": "메를로",
    "nameEn": "Merlot"
  },
  {
    "nameKo": "카베르네 프랑",
    "nameEn": "Cabernet Franc"
  },
  {
    "nameKo": "쁘띠 베르도",
    "nameEn": "Petit Verdot"
  },
  {
    "nameKo": "진판델",
    "nameEn": "Zinfandel"
  },
  {
    "nameKo": "샤르도네",
    "nameEn": "Chardonnay"
  },
  {
    "nameKo": "피노 누아",
    "nameEn": "Pinot Noir"
  },
  {
    "nameKo": "소비뇽 블랑 (Sauvignon Blanc)",
    "nameEn": "소비뇽 블랑 (Sauvignon Blanc)"
  },
  {
    "nameKo": "카버네 소비뇽 (Cabernet Sauvignon)",
    "nameEn": "카버네 소비뇽 (Cabernet Sauvignon)"
  },
  {
    "nameKo": "멀롯 (Merlot) 50%",
    "nameEn": "멀롯 (Merlot) 50%"
  },
  {
    "nameKo": "피노타쥐 (Pinotage) 50%",
    "nameEn": "피노타쥐 (Pinotage) 50%"
  },
  {
    "nameKo": "쉬라즈 (Shiraz)",
    "nameEn": "쉬라즈 (Shiraz)"
  },
  {
    "nameKo": "피노타쥐 60%",
    "nameEn": "피노타쥐 60%"
  },
  {
    "nameKo": "쉬라즈 40% (피노타쥐 블렌드)",
    "nameEn": "쉬라즈 40% (피노타쥐 블렌드)"
  },
  {
    "nameKo": "Cinsaut 50%; Ruby Cabernet(C",
    "nameEn": "Cinsaut 50%; Ruby Cabernet(C"
  },
  {
    "nameKo": "S와 Carignan의 교배품종) 50%",
    "nameEn": "S와 Carignan의 교배품종) 50%"
  },
  {
    "nameKo": "철저한 연구를 거듭한 끝에",
    "nameEn": "철저한 연구를 거듭한 끝에"
  },
  {
    "nameKo": "2002년 90ha에 달하는 언덕 부지를 매입해 소비뇽 블랑과 피노 누아를 심었습니다. 이 두 품종을 심은 계기는 이미 프랑스에서의 경험을 기반으로 하여 자갈",
    "nameEn": "2002년 90ha에 달하는 언덕 부지를 매입해 소비뇽 블랑과 피노 누아를 심었습니다. 이 두 품종을 심은 계기는 이미 프랑스에서의 경험을 기반으로 하여 자갈"
  },
  {
    "nameKo": "충적토",
    "nameEn": "충적토"
  },
  {
    "nameKo": "진흙 등으로 이루어진 토양이 두 품종에 큰 잠재력을 표현할 수 있는 떼루아라고 판단했기 때문입니다.",
    "nameEn": "진흙 등으로 이루어진 토양이 두 품종에 큰 잠재력을 표현할 수 있는 떼루아라고 판단했기 때문입니다."
  },
  {
    "nameKo": "샤도네이는 뉴질랜드를 대표하는 화이트 포도품종 중 하나로 주로 북섬에서 재배되던 품종입니다.",
    "nameEn": "샤도네이는 뉴질랜드를 대표하는 화이트 포도품종 중 하나로 주로 북섬에서 재배되던 품종입니다."
  },
  {
    "nameKo": "피노그리는 최근 뉴질랜드에서 생산량이 급증하고 있어 소비뇽 블랑의 뒤를 이어 뉴질랜드를 대표하고 있는 품종입니다.",
    "nameEn": "피노그리는 최근 뉴질랜드에서 생산량이 급증하고 있어 소비뇽 블랑의 뒤를 이어 뉴질랜드를 대표하고 있는 품종입니다."
  },
  {
    "nameKo": "30헥타르에 달하는 단일 포도밭에는 약 10만 그루의 포도나무가 식재되어 있으며",
    "nameEn": "30헥타르에 달하는 단일 포도밭에는 약 10만 그루의 포도나무가 식재되어 있으며"
  },
  {
    "nameKo": "평균 수령은 약 25년입니다. 빙하와 퇴적층으로 형성된 자갈과 점토 기반의 토양은 배수가 뛰어나고 미네랄이 풍부하며",
    "nameEn": "평균 수령은 약 25년입니다. 빙하와 퇴적층으로 형성된 자갈과 점토 기반의 토양은 배수가 뛰어나고 미네랄이 풍부하며"
  },
  {
    "nameKo": "연평균 13~15℃의 서늘한 기후는 피노 누아",
    "nameEn": "연평균 13~15℃의 서늘한 기후는 피노 누아"
  },
  {
    "nameKo": "피노 그리",
    "nameEn": "피노 그리"
  },
  {
    "nameKo": "소비뇽 블랑 등 섬세한 품종 재배에 이상적입니다.",
    "nameEn": "소비뇽 블랑 등 섬세한 품종 재배에 이상적입니다."
  },
  {
    "nameKo": "2004년도 출시된 이후 매 빈티지와 새로운 품종에 대한 좋은 평가를 받으며 와인 전문 매체들의 주목을 받는 와인이자 호주에서 연간 *약 88",
    "nameEn": "2004년도 출시된 이후 매 빈티지와 새로운 품종에 대한 좋은 평가를 받으며 와인 전문 매체들의 주목을 받는 와인이자 호주에서 연간 *약 88"
  },
  {
    "nameKo": "000 케이스 (1",
    "nameEn": "000 케이스 (1"
  },
  {
    "nameKo": "056",
    "nameEn": "056"
  },
  {
    "nameKo": "000병)의 높은 판매고를 기록하고 있는 와인입니다.",
    "nameEn": "000병)의 높은 판매고를 기록하고 있는 와인입니다."
  },
  {
    "nameKo": "리슬링(Riesling)",
    "nameEn": "리슬링(Riesling)"
  },
  {
    "nameKo": "가장 독일스러운 포도품종 리슬링(Riesling)은 모젤(Mosel)과 라인가우(Rhinegau)",
    "nameEn": "가장 독일스러운 포도품종 리슬링(Riesling)은 모젤(Mosel)과 라인가우(Rhinegau)"
  },
  {
    "nameKo": "라인헤센(Rhinehessen) 지역에서 고품질의 와인을 생산하는 매우 중요한 품종입니다.",
    "nameEn": "라인헤센(Rhinehessen) 지역에서 고품질의 와인을 생산하는 매우 중요한 품종입니다."
  },
  {
    "nameKo": "Salwey는 자연 보호를 최우선 과제로 생각하며",
    "nameEn": "Salwey는 자연 보호를 최우선 과제로 생각하며"
  },
  {
    "nameKo": "모든 포도를 손 수확하고",
    "nameEn": "모든 포도를 손 수확하고"
  },
  {
    "nameKo": "포도 품종의 명확한 스타일과 떼루아의 미네랄리티를 보여주는 것이 특징입니다. 특히",
    "nameEn": "포도 품종의 명확한 스타일과 떼루아의 미네랄리티를 보여주는 것이 특징입니다. 특히"
  },
  {
    "nameKo": "1997년 산 속에 건설한 지하 셀러는 Salwey의 자부심이며",
    "nameEn": "1997년 산 속에 건설한 지하 셀러는 Salwey의 자부심이며"
  },
  {
    "nameKo": "일년 내내 11.5~13℃ 시원한 온도를 유지하고",
    "nameEn": "일년 내내 11.5~13℃ 시원한 온도를 유지하고"
  },
  {
    "nameKo": "내장된 스프링쿨러 시스템을 통해 습도를 조절하여 완벽한 숙성 환경을 조성하고 있습니다.",
    "nameEn": "내장된 스프링쿨러 시스템을 통해 습도를 조절하여 완벽한 숙성 환경을 조성하고 있습니다."
  },
  {
    "nameKo": "벤드 멀롯은 미국인들이 가장 즐겨 마시는 품종답게",
    "nameEn": "벤드 멀롯은 미국인들이 가장 즐겨 마시는 품종답게"
  },
  {
    "nameKo": "레드 베리를 비롯한 붉은 과실의 향과 풍미",
    "nameEn": "레드 베리를 비롯한 붉은 과실의 향과 풍미"
  },
  {
    "nameKo": "제비꽃의 아로마",
    "nameEn": "제비꽃의 아로마"
  },
  {
    "nameKo": "미묘한 코코아의 느낌 등 마시기 쉬운 스타일로 완성되었습니다.",
    "nameEn": "미묘한 코코아의 느낌 등 마시기 쉬운 스타일로 완성되었습니다."
  },
  {
    "nameKo": "유연한 질감과 풍부한 과실 풍미가 뛰어난 와인으로 멀롯 품종 특유의 부드러운 느낌을 잘 살렸으며",
    "nameEn": "유연한 질감과 풍부한 과실 풍미가 뛰어난 와인으로 멀롯 품종 특유의 부드러운 느낌을 잘 살렸으며"
  },
  {
    "nameKo": "잘 익은 탄닌과 균형 잡힌 산도",
    "nameEn": "잘 익은 탄닌과 균형 잡힌 산도"
  },
  {
    "nameKo": "복합미가 조화를 이룹니다.",
    "nameEn": "복합미가 조화를 이룹니다."
  },
  {
    "nameKo": "2000년에는 역시 St. Helena의 해발 280 ~ 430m 고지대에 바위를 밀고 8.3 ha 포도밭을 조성해 “나인 이스테이트(IX Estate)”라고 명명했는데",
    "nameEn": "2000년에는 역시 St. Helena의 해발 280 ~ 430m 고지대에 바위를 밀고 8.3 ha 포도밭을 조성해 “나인 이스테이트(IX Estate)”라고 명명했는데"
  },
  {
    "nameKo": "높은 고도로 인한 선선한 기온과 미네랄이 풍부한 토양을 지닌 이 밭에는 보르도 품종인 카버네 소비뇽",
    "nameEn": "높은 고도로 인한 선선한 기온과 미네랄이 풍부한 토양을 지닌 이 밭에는 보르도 품종인 카버네 소비뇽"
  },
  {
    "nameKo": "카버네 프랑",
    "nameEn": "카버네 프랑"
  },
  {
    "nameKo": "멀롯",
    "nameEn": "멀롯"
  },
  {
    "nameKo": "쁘띠 베르도 외에 나파에서 매우 귀한 시라가 심겨져 있습니다. 또한 IX Estate의 북단에는 최첨단의 양조장이 지어져 2002 빈티지 부터 콜긴의 모든 와인이 양조되고 있습니다.",
    "nameEn": "쁘띠 베르도 외에 나파에서 매우 귀한 시라가 심겨져 있습니다. 또한 IX Estate의 북단에는 최첨단의 양조장이 지어져 2002 빈티지 부터 콜긴의 모든 와인이 양조되고 있습니다."
  },
  {
    "nameKo": "캐리아드의 비전은 나파 밸리 심장부에 위치한 바위로 구성된 경사지 테루아에서 오는 풍부함과 힘을 표현하는 것으로",
    "nameEn": "캐리아드의 비전은 나파 밸리 심장부에 위치한 바위로 구성된 경사지 테루아에서 오는 풍부함과 힘을 표현하는 것으로"
  },
  {
    "nameKo": "이름만으로도 가치를 입증하는 빈야드 매니저",
    "nameEn": "이름만으로도 가치를 입증하는 빈야드 매니저"
  },
  {
    "nameKo": "데이빗 애브루(David Abreu)가 소유 및 관리하는 3개의 빼어난 포도밭(Madrona Ranch",
    "nameEn": "데이빗 애브루(David Abreu)가 소유 및 관리하는 3개의 빼어난 포도밭(Madrona Ranch"
  },
  {
    "nameKo": "Thorevilos",
    "nameEn": "Thorevilos"
  },
  {
    "nameKo": "Howell Mountain)에서 나온 보르도 품종을 사용합니다.",
    "nameEn": "Howell Mountain)에서 나온 보르도 품종을 사용합니다."
  },
  {
    "nameKo": "순수함과 농염함을 모두 지닌 와인으로",
    "nameEn": "순수함과 농염함을 모두 지닌 와인으로"
  },
  {
    "nameKo": "나파 밸리 테루아의 유니크한 개성과 카버네 소비뇽 품종의 신선한 아로마를 잘 표현해내고 있습니다. 여러 가지 풍미가 서로 잘 융합된 와인으로",
    "nameEn": "나파 밸리 테루아의 유니크한 개성과 카버네 소비뇽 품종의 신선한 아로마를 잘 표현해내고 있습니다. 여러 가지 풍미가 서로 잘 융합된 와인으로"
  },
  {
    "nameKo": "풍부한 검붉은 과실의 맛이 이 와인의 시그니처인 민트 풍미와 잘 조화를 이룹니다.",
    "nameEn": "풍부한 검붉은 과실의 맛이 이 와인의 시그니처인 민트 풍미와 잘 조화를 이룹니다."
  },
  {
    "nameKo": "벨리즈(Belize)에 있는 호텔 중 하나의 이름에서 따온   Blancaneaux는 프랑스어로 \"하얀 물\"을 의미합니다. Inglenook의 뛰어난 화이트 와인으로 1999년 첫 빈티지부터 2002년 빈티지까지 블랑코는 론 밸리의 세 가지 품종(비오니에",
    "nameEn": "벨리즈(Belize)에 있는 호텔 중 하나의 이름에서 따온   Blancaneaux는 프랑스어로 \"하얀 물\"을 의미합니다. Inglenook의 뛰어난 화이트 와인으로 1999년 첫 빈티지부터 2002년 빈티지까지 블랑코는 론 밸리의 세 가지 품종(비오니에"
  },
  {
    "nameKo": "루산",
    "nameEn": "루산"
  },
  {
    "nameKo": "마르산)과 함께 샤도네이를 블렌딩 했지만",
    "nameEn": "마르산)과 함께 샤도네이를 블렌딩 했지만"
  },
  {
    "nameKo": "2003년 이후부터는 오로지 이 세 가지 론 품종 만을 블렌딩합니다.",
    "nameEn": "2003년 이후부터는 오로지 이 세 가지 론 품종 만을 블렌딩합니다."
  },
  {
    "nameKo": "과실의 풍미와 산도의 긴장감이 완벽한 균형을 이르면",
    "nameEn": "과실의 풍미와 산도의 긴장감이 완벽한 균형을 이르면"
  },
  {
    "nameKo": "이른 아침에 시원한 상태로 수확되어 바로 압착되며",
    "nameEn": "이른 아침에 시원한 상태로 수확되어 바로 압착되며"
  },
  {
    "nameKo": "스테인리스 스틸 탱크로 옮겨져 약 3~4주간의 저온 발효를 거칩니다. 이 과정은 포도 품종 고유의 개성과 향을 극대화하고 아로마를 온전히 보존할 수 있도록 도와줍니다.",
    "nameEn": "스테인리스 스틸 탱크로 옮겨져 약 3~4주간의 저온 발효를 거칩니다. 이 과정은 포도 품종 고유의 개성과 향을 극대화하고 아로마를 온전히 보존할 수 있도록 도와줍니다."
  },
  {
    "nameKo": "캘리포니아의 대표적인 산뜻한 화이트 품종인 소비뇽 블랑과 피노 그리지오를 블렌딩해",
    "nameEn": "캘리포니아의 대표적인 산뜻한 화이트 품종인 소비뇽 블랑과 피노 그리지오를 블렌딩해"
  },
  {
    "nameKo": "시트러스와 꽃향기를 중심으로 잘 익은 풀과 그린 멜론의 생생한 뉘앙스를 담아냈습니다. 입안에서는 상쾌하고 밝은 시트러스 풍미가 퍼지며",
    "nameEn": "시트러스와 꽃향기를 중심으로 잘 익은 풀과 그린 멜론의 생생한 뉘앙스를 담아냈습니다. 입안에서는 상쾌하고 밝은 시트러스 풍미가 퍼지며"
  },
  {
    "nameKo": "따사로운 햇살 아래에서 마시기 좋은 와인입니다.",
    "nameEn": "따사로운 햇살 아래에서 마시기 좋은 와인입니다."
  },
  {
    "nameKo": "“고립되고 전원적인 느낌을 주는 라 호타의 포도원과 양조장의 모습은 1800년대와 크게 다르지 않지만",
    "nameEn": "“고립되고 전원적인 느낌을 주는 라 호타의 포도원과 양조장의 모습은 1800년대와 크게 다르지 않지만"
  },
  {
    "nameKo": "이 지역은 역사 속 다양한 이야기를 품고 있습니다. 수 세기 전 토착 부족민인 와포 족 (Wappo tribe) 이 이곳에 자리 잡았고 이어 멕시코의 장군은 노스 캐롤라이나에서 온 개척자에게 토지를 내어주었으며",
    "nameEn": "이 지역은 역사 속 다양한 이야기를 품고 있습니다. 수 세기 전 토착 부족민인 와포 족 (Wappo tribe) 이 이곳에 자리 잡았고 이어 멕시코의 장군은 노스 캐롤라이나에서 온 개척자에게 토지를 내어주었으며"
  },
  {
    "nameKo": "훗날 스위스에서 온 사업가는 이 땅에 와이너리를 설립하게 됩니다. 이태리 출신의 석공은 지역 고유의 화성암을 이용해 석조 와이너리를 설계",
    "nameEn": "훗날 스위스에서 온 사업가는 이 땅에 와이너리를 설립하게 됩니다. 이태리 출신의 석공은 지역 고유의 화성암을 이용해 석조 와이너리를 설계"
  },
  {
    "nameKo": "중국인들은 이를 완성시켰고 빈야드에는 프랑스 포도 품종이 심어졌으며 이것이 바로 ‘미국’ 의 이야기 입니다.”",
    "nameEn": "중국인들은 이를 완성시켰고 빈야드에는 프랑스 포도 품종이 심어졌으며 이것이 바로 ‘미국’ 의 이야기 입니다.”"
  },
  {
    "nameKo": "높은 고도의 포도밭은 항상 고도의 노동력이 필요합니다. 얇은 암석으로 이루어진 토양과 가파른 경사면에 위치하고 있어 배수 능력은 좋지만",
    "nameEn": "높은 고도의 포도밭은 항상 고도의 노동력이 필요합니다. 얇은 암석으로 이루어진 토양과 가파른 경사면에 위치하고 있어 배수 능력은 좋지만"
  },
  {
    "nameKo": "항상 붕괴의 위험을 가지고 있습니다. 높은 고도로 인해 늘 서늘한 기후를 가지고 있으며",
    "nameEn": "항상 붕괴의 위험을 가지고 있습니다. 높은 고도로 인해 늘 서늘한 기후를 가지고 있으며"
  },
  {
    "nameKo": "태양광 노출을 산 아래 지역보다 더 많이 받을 수 있습니다. 이러한 떼루아를 통해 포도는 최적의 숙성과 품종의 복잡미를 최상으로 가지게 됩니다.",
    "nameEn": "태양광 노출을 산 아래 지역보다 더 많이 받을 수 있습니다. 이러한 떼루아를 통해 포도는 최적의 숙성과 품종의 복잡미를 최상으로 가지게 됩니다."
  },
  {
    "nameKo": "Cabernet Sauvignon 78%",
    "nameEn": "Cabernet Sauvignon 78%"
  },
  {
    "nameKo": "Merlot 8%",
    "nameEn": "Merlot 8%"
  },
  {
    "nameKo": "Petit Verdot 6%",
    "nameEn": "Petit Verdot 6%"
  },
  {
    "nameKo": "Cabernet Franc 6%",
    "nameEn": "Cabernet Franc 6%"
  },
  {
    "nameKo": "Malbec 2%",
    "nameEn": "Malbec 2%"
  },
  {
    "nameKo": "Cabernet Sauvignon 80%",
    "nameEn": "Cabernet Sauvignon 80%"
  },
  {
    "nameKo": "To Kalon Vineyard Company의 \"Eliza's\" 뀌베는 마야카마스 산맥 기슭에 있는 역사적 장소의 힘과 정신을 가장 잘 보여주는 두 가지 품종인 까베르네 프랑과 까베르네 소비뇽을 블렌딩한 와인입니다. 이 와인의 이름은 Napa에서 가장 잘 알려진 초기 개척자 중 한 명이자 Yountville 설립자의 미망인인 한때  최고의 까베르네 소비뇽의 재배지가 있는 Walnut Lane에 있는 To Kalon의 조용한 모퉁이를 한때 소유했던 Eliza Yount의 이름을 따서 명명되었습니다. 이 블렌드는 Napa Valley 와인의 가장 매력적인 예 중 하나를 생산하며",
    "nameEn": "To Kalon Vineyard Company의 \"Eliza's\" 뀌베는 마야카마스 산맥 기슭에 있는 역사적 장소의 힘과 정신을 가장 잘 보여주는 두 가지 품종인 까베르네 프랑과 까베르네 소비뇽을 블렌딩한 와인입니다. 이 와인의 이름은 Napa에서 가장 잘 알려진 초기 개척자 중 한 명이자 Yountville 설립자의 미망인인 한때  최고의 까베르네 소비뇽의 재배지가 있는 Walnut Lane에 있는 To Kalon의 조용한 모퉁이를 한때 소유했던 Eliza Yount의 이름을 따서 명명되었습니다. 이 블렌드는 Napa Valley 와인의 가장 매력적인 예 중 하나를 생산하며"
  },
  {
    "nameKo": "Cabernet Franc은 이국적인 스파이스 노트와 꽃 향을 제공하고 Cabernet Sauvignon은 무게감",
    "nameEn": "Cabernet Franc은 이국적인 스파이스 노트와 꽃 향을 제공하고 Cabernet Sauvignon은 무게감"
  },
  {
    "nameKo": "구조 및 깊고 풍부한 검은 과일 특성을 제공합니다. 이 조합은 드물고 독특한 To Kalon입니다. 지금은 활기차고 활기차지만 앞으로 수십 년 동안 숙성될 와인입니다. 이 와인의 첫 번째 빈티지 제품인 2018년은 이미 밸리에서 벤치마크의 해로 인정받고 있습니다.",
    "nameEn": "구조 및 깊고 풍부한 검은 과일 특성을 제공합니다. 이 조합은 드물고 독특한 To Kalon입니다. 지금은 활기차고 활기차지만 앞으로 수십 년 동안 숙성될 와인입니다. 이 와인의 첫 번째 빈티지 제품인 2018년은 이미 밸리에서 벤치마크의 해로 인정받고 있습니다."
  },
  {
    "nameKo": "우리 이름을 딴 와인의 목표는 To Kalon Vineyard 전체와 협력하여 100% Cabernet Sauvignon으로 와인을 만드는 동시에 이 특별한 떼루아의 순수함",
    "nameEn": "우리 이름을 딴 와인의 목표는 To Kalon Vineyard 전체와 협력하여 100% Cabernet Sauvignon으로 와인을 만드는 동시에 이 특별한 떼루아의 순수함"
  },
  {
    "nameKo": "강도 및 다양성을 포착하는 것입니다. 부드러운 탄닌",
    "nameEn": "강도 및 다양성을 포착하는 것입니다. 부드러운 탄닌"
  },
  {
    "nameKo": "풍부한 구조감",
    "nameEn": "풍부한 구조감"
  },
  {
    "nameKo": "풍부함",
    "nameEn": "풍부함"
  },
  {
    "nameKo": "향긋한 흥분을 지닌 이 와인은 거의 이상적인 2018년 성장기에 대한 이야기를 들려줍니다. 포도는 과일의 신선도를 보존하기 위해 밤에 수확되었습니다. 신중한 분류와 길고 느린 발효 및 침용은 와인을 완성하고 이 고귀한 품종에 내재된 다양한 풍미와 아로마를 제공합니다.",
    "nameEn": "향긋한 흥분을 지닌 이 와인은 거의 이상적인 2018년 성장기에 대한 이야기를 들려줍니다. 포도는 과일의 신선도를 보존하기 위해 밤에 수확되었습니다. 신중한 분류와 길고 느린 발효 및 침용은 와인을 완성하고 이 고귀한 품종에 내재된 다양한 풍미와 아로마를 제공합니다."
  },
  {
    "nameKo": "To Kalon 설립자의 이름을 따서 명명된 H.W.C는 To Kalon 내에서 Cabernet Sauvignon의 단일 클론 선택에서 생산됩니다. 이 포도나무는 원래 로버트 몬다비가 1960년대에 포도원에서 만든 와인의 깊이와 풍부함에 매료되어 To Kalon에 의해 심어졌습니다. 믿을 수 없을 정도로 수확량이 적은 Cabernet Sauvignon 셀렉션은 고에너지",
    "nameEn": "To Kalon 설립자의 이름을 따서 명명된 H.W.C는 To Kalon 내에서 Cabernet Sauvignon의 단일 클론 선택에서 생산됩니다. 이 포도나무는 원래 로버트 몬다비가 1960년대에 포도원에서 만든 와인의 깊이와 풍부함에 매료되어 To Kalon에 의해 심어졌습니다. 믿을 수 없을 정도로 수확량이 적은 Cabernet Sauvignon 셀렉션은 고에너지"
  },
  {
    "nameKo": "흑자색",
    "nameEn": "흑자색"
  },
  {
    "nameKo": "뛰어난 향과 구개 강도를 지닌 와인을 생산합니다. 이 고귀한 품종의 태초 그대로의 모습입니다. 첫 빈티지는 2018년의 모든 최고의 특성을 훌륭한 균형",
    "nameEn": "뛰어난 향과 구개 강도를 지닌 와인을 생산합니다. 이 고귀한 품종의 태초 그대로의 모습입니다. 첫 빈티지는 2018년의 모든 최고의 특성을 훌륭한 균형"
  },
  {
    "nameKo": "순도 및 밀도로 포착합니다. 과도하게 익거나 추출되지는 않았지만 와인은 놀라운 신선도",
    "nameEn": "순도 및 밀도로 포착합니다. 과도하게 익거나 추출되지는 않았지만 와인은 놀라운 신선도"
  },
  {
    "nameKo": "질감",
    "nameEn": "질감"
  },
  {
    "nameKo": "풍부함 및 길이를 가지고 있습니다. 4개월의 추가 배럴 숙성으로 높은 수준의 광택과 부드러운 마감을 제공합니다.",
    "nameEn": "풍부함 및 길이를 가지고 있습니다. 4개월의 추가 배럴 숙성으로 높은 수준의 광택과 부드러운 마감을 제공합니다."
  },
  {
    "nameKo": "블랙베리",
    "nameEn": "블랙베리"
  },
  {
    "nameKo": "다크 초콜릿",
    "nameEn": "다크 초콜릿"
  },
  {
    "nameKo": "입 안에 꽉차게 느껴지는 풍부한 맛과 유연함을 보여주며 캘리포니아의 대표 포도 품종인 카버네 소비뇽의 특징과 동시에 기존 케이머스의 매력을 함께 보여 주는 케이머스의 야심찬 새로운 카버네 소비뇽 와인입니다.",
    "nameEn": "입 안에 꽉차게 느껴지는 풍부한 맛과 유연함을 보여주며 캘리포니아의 대표 포도 품종인 카버네 소비뇽의 특징과 동시에 기존 케이머스의 매력을 함께 보여 주는 케이머스의 야심찬 새로운 카버네 소비뇽 와인입니다."
  },
  {
    "nameKo": "기본급 와인임에도 불구하고 출시 직후 2번째 빈티지가 Wine Spectator 88점을 획득할 만큼 품질을 인정받았습니다. 나파 밸리를 비롯하여 산타 바바라",
    "nameEn": "기본급 와인임에도 불구하고 출시 직후 2번째 빈티지가 Wine Spectator 88점을 획득할 만큼 품질을 인정받았습니다. 나파 밸리를 비롯하여 산타 바바라"
  },
  {
    "nameKo": "몬터레이 지역의 포도를 고루 블렌딩하여 품질의 균일함을 유지하고 있습니다. ‘퍼즐’ 이라는 뜻의 와인명 코넌드럼 (Conundrum)은 각 품종의 개성과 블렌딩 와인만의 밸런스를 모두 추구하며 블렌딩 비율을 비밀스레 유지하고 있습니다.",
    "nameEn": "몬터레이 지역의 포도를 고루 블렌딩하여 품질의 균일함을 유지하고 있습니다. ‘퍼즐’ 이라는 뜻의 와인명 코넌드럼 (Conundrum)은 각 품종의 개성과 블렌딩 와인만의 밸런스를 모두 추구하며 블렌딩 비율을 비밀스레 유지하고 있습니다."
  },
  {
    "nameKo": "다섯 가지 화이트 품종의 이상적 조합",
    "nameEn": "다섯 가지 화이트 품종의 이상적 조합"
  },
  {
    "nameKo": "메르솔레이 실버 샤도네이는 스테인레스 스틸 및 프랑스 부르고뉴에서 수입된 콘크리트 탱크에서 발효 및 숙성하여 깨끗하고 순수한 품종 고유의 느낌을 강조한 언오크드 (Unoaked) 방식으로 만들어 집니다.",
    "nameEn": "메르솔레이 실버 샤도네이는 스테인레스 스틸 및 프랑스 부르고뉴에서 수입된 콘크리트 탱크에서 발효 및 숙성하여 깨끗하고 순수한 품종 고유의 느낌을 강조한 언오크드 (Unoaked) 방식으로 만들어 집니다."
  },
  {
    "nameKo": "반투명한 노란 빛깔을 지닌 이 와인은 젖은 돌",
    "nameEn": "반투명한 노란 빛깔을 지닌 이 와인은 젖은 돌"
  },
  {
    "nameKo": "감귤의 깨끗하고 맑은 향기를 지녔으며",
    "nameEn": "감귤의 깨끗하고 맑은 향기를 지녔으며"
  },
  {
    "nameKo": "천도복숭아",
    "nameEn": "천도복숭아"
  },
  {
    "nameKo": "잘 숙성된 꿀",
    "nameEn": "잘 숙성된 꿀"
  },
  {
    "nameKo": "구아바와 귤 등의 은은한 음색이 특징입니다. 첫 맛은 미미한 느낌이나 점차 입 안으로 라임의 향이 퍼지며 군침이 도는 감귤류의 맛으로 확장됩니다. 짜릿한 산도는 와인의 생기를 돋우는 신선함을 더하며 마지막은 뚜렷한 미네랄리티가 와인에 개성을 더합니다. 이는 품종 특성상 향이 강한 소비뇽 블랑이지만 과실미가 지배하는 것이 아닌",
    "nameEn": "구아바와 귤 등의 은은한 음색이 특징입니다. 첫 맛은 미미한 느낌이나 점차 입 안으로 라임의 향이 퍼지며 군침이 도는 감귤류의 맛으로 확장됩니다. 짜릿한 산도는 와인의 생기를 돋우는 신선함을 더하며 마지막은 뚜렷한 미네랄리티가 와인에 개성을 더합니다. 이는 품종 특성상 향이 강한 소비뇽 블랑이지만 과실미가 지배하는 것이 아닌"
  },
  {
    "nameKo": "그보다 미네랄리티가 이끄는 소비뇽 블랑에 대한 와인 메이커 제니 와그너의 양조 철학을 분명히 보여주고 있습니다.",
    "nameEn": "그보다 미네랄리티가 이끄는 소비뇽 블랑에 대한 와인 메이커 제니 와그너의 양조 철학을 분명히 보여주고 있습니다."
  },
  {
    "nameKo": "진판델은 케이머스의 설립자 찰리 와그너 (Charlie Wagner Sr.)가 가장 좋아했던 포도 품종입니다. 케이머스 빈야드는 1974년 진판델 첫 빈티지를 출시한 이후 찰리 와그너를 기리기 위해 꾸준히 진판델을 생산해 오고 있으며 나파 밸리",
    "nameEn": "진판델은 케이머스의 설립자 찰리 와그너 (Charlie Wagner Sr.)가 가장 좋아했던 포도 품종입니다. 케이머스 빈야드는 1974년 진판델 첫 빈티지를 출시한 이후 찰리 와그너를 기리기 위해 꾸준히 진판델을 생산해 오고 있으며 나파 밸리"
  },
  {
    "nameKo": "레이크 카운티",
    "nameEn": "레이크 카운티"
  },
  {
    "nameKo": "수이선 밸리",
    "nameEn": "수이선 밸리"
  },
  {
    "nameKo": "로다이",
    "nameEn": "로다이"
  },
  {
    "nameKo": "몬테레이 카운티에서 최상급 포도만을 선별하여    와인을 만들고 있습니다. 2021 빈티지 부터 척 와그너의 뒤를 이어 딸인 제니    와그너가 진판델 생산을 책임지고 있으며 프렌치 오크에서 21개월간 숙성을      거칩니다.",
    "nameEn": "몬테레이 카운티에서 최상급 포도만을 선별하여    와인을 만들고 있습니다. 2021 빈티지 부터 척 와그너의 뒤를 이어 딸인 제니    와그너가 진판델 생산을 책임지고 있으며 프렌치 오크에서 21개월간 숙성을      거칩니다."
  },
  {
    "nameKo": "UV-SL 빈야드는 소노마 코스트 서쪽 끝에 위치해 있으며 바다에 가깝게 위치해 있어 바다 공기의 미네랄리티를 가득 느낄 수 있습니다. 이러한 지형적 특징은 UV-SL 샤도네이만의 활발한 에너지가 돋보이는 독특한 품종을 만들어 냈습니다.",
    "nameEn": "UV-SL 빈야드는 소노마 코스트 서쪽 끝에 위치해 있으며 바다에 가깝게 위치해 있어 바다 공기의 미네랄리티를 가득 느낄 수 있습니다. 이러한 지형적 특징은 UV-SL 샤도네이만의 활발한 에너지가 돋보이는 독특한 품종을 만들어 냈습니다."
  },
  {
    "nameKo": "‘Exclusive Focus on Russian River Valley Wine’",
    "nameEn": "‘Exclusive Focus on Russian River Valley Wine’"
  },
  {
    "nameKo": "즉 러시안 리버 밸리에의 온전한 집중은 와인 스타일에 그만의 개성을 부여합니다. 파츠 와인메이킹의 방향성은 빈티지와 무관하게 지속적인 ‘Balanced",
    "nameEn": "즉 러시안 리버 밸리에의 온전한 집중은 와인 스타일에 그만의 개성을 부여합니다. 파츠 와인메이킹의 방향성은 빈티지와 무관하게 지속적인 ‘Balanced"
  },
  {
    "nameKo": "Elegant and Perfumed’ 로 요약되며",
    "nameEn": "Elegant and Perfumed’ 로 요약되며"
  },
  {
    "nameKo": "이는 특히 샤도네이에서 그 품종적 특징을 기반으로 완벽하게 표현됩니다.",
    "nameEn": "이는 특히 샤도네이에서 그 품종적 특징을 기반으로 완벽하게 표현됩니다."
  },
  {
    "nameKo": "카버네 소비뇽 96%",
    "nameEn": "카버네 소비뇽 96%"
  },
  {
    "nameKo": "카버네 프랑 4%",
    "nameEn": "카버네 프랑 4%"
  },
  {
    "nameKo": "대부분의 포도는 워싱턴주 콜럼비아 밸리의 핵심지역 Horse Heaven Hills 에서 조달되며",
    "nameEn": "대부분의 포도는 워싱턴주 콜럼비아 밸리의 핵심지역 Horse Heaven Hills 에서 조달되며"
  },
  {
    "nameKo": "이 중 카버네 프랑은 특히 품종 특유의 아름다운 풍미를 발현하게 해 줄 모든 조건을 지닌 Alder Ridge 빈야드에서 재배됩니다. 사질 토양의 빈야드는 남향으로 콜럼비아 강을 바라보며",
    "nameEn": "이 중 카버네 프랑은 특히 품종 특유의 아름다운 풍미를 발현하게 해 줄 모든 조건을 지닌 Alder Ridge 빈야드에서 재배됩니다. 사질 토양의 빈야드는 남향으로 콜럼비아 강을 바라보며"
  },
  {
    "nameKo": "이 곳의 미기후는 새벽과 밤 인접한 강으로부터 불어오는 시원한 바람으로 풍부하면서도 우아하게",
    "nameEn": "이 곳의 미기후는 새벽과 밤 인접한 강으로부터 불어오는 시원한 바람으로 풍부하면서도 우아하게"
  },
  {
    "nameKo": "섬세한 허브의 아로마가 살아나는 포도를 만듭니다. 양조 시 10%의 콘크리트 탱크 발효를 거치면서 미네랄 캐릭터가 잘 살아나는 와인으로 완성됩니다.",
    "nameEn": "섬세한 허브의 아로마가 살아나는 포도를 만듭니다. 양조 시 10%의 콘크리트 탱크 발효를 거치면서 미네랄 캐릭터가 잘 살아나는 와인으로 완성됩니다."
  },
  {
    "nameKo": "꿀",
    "nameEn": "꿀"
  },
  {
    "nameKo": "감귤류",
    "nameEn": "감귤류"
  },
  {
    "nameKo": "멜론 등의 향에 이어 복잡미묘한 미네랄과 풍부하고 크리미한 맛을 주는 고급 화이트 와인으로",
    "nameEn": "멜론 등의 향에 이어 복잡미묘한 미네랄과 풍부하고 크리미한 맛을 주는 고급 화이트 와인으로"
  },
  {
    "nameKo": "세미용 품종으로 만든 카테고리에서 미국을 대표할 만한 와인입니다.",
    "nameEn": "세미용 품종으로 만든 카테고리에서 미국을 대표할 만한 와인입니다."
  },
  {
    "nameKo": "1998년 린 패너 애쉬와 그녀의 남편 론 패너 애쉬가 설립한 와이너리로 피노 누아만을 생산하기 위해 만든 부티크 와이너리 입니다. 생산하는 와인의 90% 이상이 피노 누아 포도 품종으로 비오니에와 리슬링도 경작을 하고 있습니다. 오레곤의 윌라멧 밸리 북쪽에 와이너리는 위치하고 있으며",
    "nameEn": "1998년 린 패너 애쉬와 그녀의 남편 론 패너 애쉬가 설립한 와이너리로 피노 누아만을 생산하기 위해 만든 부티크 와이너리 입니다. 생산하는 와인의 90% 이상이 피노 누아 포도 품종으로 비오니에와 리슬링도 경작을 하고 있습니다. 오레곤의 윌라멧 밸리 북쪽에 와이너리는 위치하고 있으며"
  },
  {
    "nameKo": "포도밭은 윌라멧 밸리 AVA 안의 세부 산지에 해당하는 7개의 다른 AVA에서 포도밭을 가지고 있습니다. 가장 시그니쳐적인 포도밭은 얌힐 칼톤 AVA에 있는 ‘쉬어 빈야드’로 프랑스 부르고뉴의 그랑크뤼에 해당하는 포도밭이라고 말할 수 있습니다.",
    "nameEn": "포도밭은 윌라멧 밸리 AVA 안의 세부 산지에 해당하는 7개의 다른 AVA에서 포도밭을 가지고 있습니다. 가장 시그니쳐적인 포도밭은 얌힐 칼톤 AVA에 있는 ‘쉬어 빈야드’로 프랑스 부르고뉴의 그랑크뤼에 해당하는 포도밭이라고 말할 수 있습니다."
  },
  {
    "nameKo": "포도밭은 윌라멧 밸리 AVA 안의 세부 산지에 해당하는 7개의 다른 AVA에서 포도밭을 가지고 있습니다. 가장 시그니쳐적인 포도밭은 얌힐 칼톤 AVA에 있는 ‘쉐이 빈야드’로 프랑스 부르고뉴의 그랑크뤼에 해당하는 포도밭이라고 말할 수 있습니다.",
    "nameEn": "포도밭은 윌라멧 밸리 AVA 안의 세부 산지에 해당하는 7개의 다른 AVA에서 포도밭을 가지고 있습니다. 가장 시그니쳐적인 포도밭은 얌힐 칼톤 AVA에 있는 ‘쉐이 빈야드’로 프랑스 부르고뉴의 그랑크뤼에 해당하는 포도밭이라고 말할 수 있습니다."
  },
  {
    "nameKo": "그리고 이렇게 재배된 가르나차 품종의 포도는 비교적 건조하고 따뜻한 리오하 바하 지역의 성격을 온전히 반영하고 있다는 평가를 받고 있습니다.",
    "nameEn": "그리고 이렇게 재배된 가르나차 품종의 포도는 비교적 건조하고 따뜻한 리오하 바하 지역의 성격을 온전히 반영하고 있다는 평가를 받고 있습니다."
  },
  {
    "nameKo": "24%",
    "nameEn": "24%"
  },
  {
    "nameKo": "카버네 소비뇽(C",
    "nameEn": "카버네 소비뇽(C"
  },
  {
    "nameKo": "S) 17%",
    "nameEn": "S) 17%"
  },
  {
    "nameKo": "멀롯(Merlot) 10%",
    "nameEn": "멀롯(Merlot) 10%"
  },
  {
    "nameKo": "기타품종 3%",
    "nameEn": "기타품종 3%"
  },
  {
    "nameKo": "이들은 오래된 포도밭들을 재건하고 새로이 밭을 조성하면서 중요하게 취급되지 않았던 가르나차(=그레나슈)와 까리녜나(=카리냥) 품종을 주로 심었는데",
    "nameEn": "이들은 오래된 포도밭들을 재건하고 새로이 밭을 조성하면서 중요하게 취급되지 않았던 가르나차(=그레나슈)와 까리녜나(=카리냥) 품종을 주로 심었는데"
  },
  {
    "nameKo": "거의 흑색에 가까운 점판암(粘板岩)에서 재배된 저소출의 가르나차는 특히 빼어난 성과를 보였습니다. 그리고 카버네 소비뇽",
    "nameEn": "거의 흑색에 가까운 점판암(粘板岩)에서 재배된 저소출의 가르나차는 특히 빼어난 성과를 보였습니다. 그리고 카버네 소비뇽"
  },
  {
    "nameKo": "시라",
    "nameEn": "시라"
  },
  {
    "nameKo": "멀롯 등 국제종을 도입하고",
    "nameEn": "멀롯 등 국제종을 도입하고"
  },
  {
    "nameKo": "어린 나무들이 험한 산에서 고사하지 않게 방울 관개(Drip Irrigation) 방식으로 물을 주었습니다. 프리오랏의 비약적인 성공으로 초기 10개 정도에 불과한 와이너리의 숫자는 60개 이상으로 늘어난 지금 알바로 팔라시오스의 탁월성은 타 생산자들과의 보다 많은 대비에 의해 오히려 더 극명해 졌습니다.",
    "nameEn": "어린 나무들이 험한 산에서 고사하지 않게 방울 관개(Drip Irrigation) 방식으로 물을 주었습니다. 프리오랏의 비약적인 성공으로 초기 10개 정도에 불과한 와이너리의 숫자는 60개 이상으로 늘어난 지금 알바로 팔라시오스의 탁월성은 타 생산자들과의 보다 많은 대비에 의해 오히려 더 극명해 졌습니다."
  },
  {
    "nameKo": "2 ha에 불과한 프리오랏 최고의 포도밭으로 수령 75년이 넘은 가르나차 품종이 쎙쏘 등과 심어져 있습니다. ’93년 빈티지로 세계 와인계 정상에 데뷔한 스페인의 컬트 와인으로 베가 시실리아 우니코",
    "nameEn": "2 ha에 불과한 프리오랏 최고의 포도밭으로 수령 75년이 넘은 가르나차 품종이 쎙쏘 등과 심어져 있습니다. ’93년 빈티지로 세계 와인계 정상에 데뷔한 스페인의 컬트 와인으로 베가 시실리아 우니코"
  },
  {
    "nameKo": "핑구스와 함께 가장 구하기 힘든 스페인 와인입니다.",
    "nameEn": "핑구스와 함께 가장 구하기 힘든 스페인 와인입니다."
  },
  {
    "nameKo": "수령 60 ~ 100년의 멘시아 품종으로 양조된 와인으로",
    "nameEn": "수령 60 ~ 100년의 멘시아 품종으로 양조된 와인으로"
  },
  {
    "nameKo": "긴 수령을 거치며 나무 뿌리가 땅 속 깊이 미네랄이 풍부한 편암층까지 뻗어간 덕에 풍부한 광물질의 느낌과 좋은 산도를 지닙니다.",
    "nameEn": "긴 수령을 거치며 나무 뿌리가 땅 속 깊이 미네랄이 풍부한 편암층까지 뻗어간 덕에 풍부한 광물질의 느낌과 좋은 산도를 지닙니다."
  },
  {
    "nameKo": "긴 수령을 거치며 나무 뿌리가 땅 속 깊이 미네랄이 풍부한 편암층까지 뻗어간 덕에 풍부한 광물질의 느낌과 좋은 산도를 지닙니다. 싱글 빈야드의 포도로만 재배되어 여운이 깊고 장기간의 숙성 잠재력이 있는 와인입니다.",
    "nameEn": "긴 수령을 거치며 나무 뿌리가 땅 속 깊이 미네랄이 풍부한 편암층까지 뻗어간 덕에 풍부한 광물질의 느낌과 좋은 산도를 지닙니다. 싱글 빈야드의 포도로만 재배되어 여운이 깊고 장기간의 숙성 잠재력이 있는 와인입니다."
  },
  {
    "nameKo": "해발고도 730m에서 60-90년된 멘시아 품종으로 만들어진 몽세르발은 더 단단하고 더 견고하며 좋은 미네랄리티가 특징입니다.",
    "nameEn": "해발고도 730m에서 60-90년된 멘시아 품종으로 만들어진 몽세르발은 더 단단하고 더 견고하며 좋은 미네랄리티가 특징입니다."
  },
  {
    "nameKo": "스페인을 대표하는 두 가지 레드 품종인 가르나챠와 템프라니요의 블랜딩을 통해 스페인의 가장 전형적인 특징을 보여 주는 와인입니다. 뜨거운 태양이 내리쬐는 황무지와 같은 고통스러운 자연 환경 속에서 더욱 깊게 뿌리를 내리며 자라온 스페인 와인의 저력과 떼루아를 잘 표현하고 있는 와인입니다.",
    "nameEn": "스페인을 대표하는 두 가지 레드 품종인 가르나챠와 템프라니요의 블랜딩을 통해 스페인의 가장 전형적인 특징을 보여 주는 와인입니다. 뜨거운 태양이 내리쬐는 황무지와 같은 고통스러운 자연 환경 속에서 더욱 깊게 뿌리를 내리며 자라온 스페인 와인의 저력과 떼루아를 잘 표현하고 있는 와인입니다."
  },
  {
    "nameKo": "모나스트렐(Monastrell) 80%",
    "nameEn": "모나스트렐(Monastrell) 80%"
  },
  {
    "nameKo": "알바리뇨 100%",
    "nameEn": "알바리뇨 100%"
  },
  {
    "nameKo": "라 발은 1985년 설립된 리아스 바이사스 지역의 역사적인 와이너리로",
    "nameEn": "라 발은 1985년 설립된 리아스 바이사스 지역의 역사적인 와이너리로"
  },
  {
    "nameKo": "1988년 해당 D.O. 설립을 주도한 창립 멤버 중 하나입니다. 설립 초기부터 알바리뇨 품종의 고유한 개성과 품질을 가장 먼저 인식하고",
    "nameEn": "1988년 해당 D.O. 설립을 주도한 창립 멤버 중 하나입니다. 설립 초기부터 알바리뇨 품종의 고유한 개성과 품질을 가장 먼저 인식하고"
  },
  {
    "nameKo": "이를 바탕으로 품종의 품질과 개성을 세계 시장에 널리 알리는 데 큰 역할을 해왔습니다. 라 발의 가장 큰 특징은 모든 와인을 100% 와이너리 소유 밭에서 수확한 포도만을 사용한다는 점입니다. 리아스 바이사스 지역의 대부분 와이너리들이 외부 포도를 구입해 사용하는 반면",
    "nameEn": "이를 바탕으로 품종의 품질과 개성을 세계 시장에 널리 알리는 데 큰 역할을 해왔습니다. 라 발의 가장 큰 특징은 모든 와인을 100% 와이너리 소유 밭에서 수확한 포도만을 사용한다는 점입니다. 리아스 바이사스 지역의 대부분 와이너리들이 외부 포도를 구입해 사용하는 반면"
  },
  {
    "nameKo": "라 발은 알바리뇨 본연의 순수한 특성과 일관된 스타일 유지를 위해 철저히 자소유 포도 재배를 고집하고 있습니다.",
    "nameEn": "라 발은 알바리뇨 본연의 순수한 특성과 일관된 스타일 유지를 위해 철저히 자소유 포도 재배를 고집하고 있습니다."
  },
  {
    "nameKo": "페네데스 지역 고유 품종을 블렌딩하며",
    "nameEn": "페네데스 지역 고유 품종을 블렌딩하며"
  },
  {
    "nameKo": "차렐로 품종의 비중이 높습니다.",
    "nameEn": "차렐로 품종의 비중이 높습니다."
  },
  {
    "nameKo": "비우라",
    "nameEn": "비우라"
  },
  {
    "nameKo": "소비뇽 블랑",
    "nameEn": "소비뇽 블랑"
  },
  {
    "nameKo": "베르데호",
    "nameEn": "베르데호"
  },
  {
    "nameKo": "소비뇽 브랑",
    "nameEn": "소비뇽 브랑"
  },
  {
    "nameKo": "보발",
    "nameEn": "보발"
  },
  {
    "nameKo": "모나스트렐",
    "nameEn": "모나스트렐"
  },
  {
    "nameKo": "까베르네 소비뇽",
    "nameEn": "까베르네 소비뇽"
  },
  {
    "nameKo": "산다라 스파클링 로제는 로즈워터와 잘 익은 체리 풍미의 와인입니다. 라즈베리와 딸기의 감미로운 향이 퍼지며 부드러운 탄산과 기분 좋은 달콤함이 오래도록 지속됩니다.  스페인 토착 품종인 보발 100%로 만든 스위트 스파클링 와인으로 입안 가득 상큼함이 전해집니다.",
    "nameEn": "산다라 스파클링 로제는 로즈워터와 잘 익은 체리 풍미의 와인입니다. 라즈베리와 딸기의 감미로운 향이 퍼지며 부드러운 탄산과 기분 좋은 달콤함이 오래도록 지속됩니다.  스페인 토착 품종인 보발 100%로 만든 스위트 스파클링 와인으로 입안 가득 상큼함이 전해집니다."
  },
  {
    "nameKo": "샤도네이",
    "nameEn": "샤도네이"
  },
  {
    "nameKo": "빈야드에서 손수확을 통해 15kg의 적은 과실만을 모아 프렌치 오크에서 14개월",
    "nameEn": "빈야드에서 손수확을 통해 15kg의 적은 과실만을 모아 프렌치 오크에서 14개월"
  },
  {
    "nameKo": "병에서 22개월동안 숙성을 진행합니다. 오랜 숙성기간은 와인의 균형감을 잡아주며",
    "nameEn": "병에서 22개월동안 숙성을 진행합니다. 오랜 숙성기간은 와인의 균형감을 잡아주며"
  },
  {
    "nameKo": "각각의 포도품종을 하나의 와인으로 잘 조화되게 만듭니다.",
    "nameEn": "각각의 포도품종을 하나의 와인으로 잘 조화되게 만듭니다."
  },
  {
    "nameKo": "비나 레알 와인은 주로 리오하 알라베사의 세 지역",
    "nameEn": "비나 레알 와인은 주로 리오하 알라베사의 세 지역"
  },
  {
    "nameKo": "라바스티다(Labastida)",
    "nameEn": "라바스티다(Labastida)"
  },
  {
    "nameKo": "라과디아(Laguardia)",
    "nameEn": "라과디아(Laguardia)"
  },
  {
    "nameKo": "후에 마요르(Fuenmayor)의 포도를 사용하여 양조됩니다. 이 포도밭들은 해발 450~650m 고도에 위치해 있으며",
    "nameEn": "후에 마요르(Fuenmayor)의 포도를 사용하여 양조됩니다. 이 포도밭들은 해발 450~650m 고도에 위치해 있으며"
  },
  {
    "nameKo": "지중해성 기후의 영향을 받는 지역입니다. 포도나무는 수직 트렐리스 방식으로 재배되며",
    "nameEn": "지중해성 기후의 영향을 받는 지역입니다. 포도나무는 수직 트렐리스 방식으로 재배되며"
  },
  {
    "nameKo": "주요 품종은 비우라",
    "nameEn": "주요 품종은 비우라"
  },
  {
    "nameKo": "템프라니요",
    "nameEn": "템프라니요"
  },
  {
    "nameKo": "가르나차",
    "nameEn": "가르나차"
  },
  {
    "nameKo": "그라시아노",
    "nameEn": "그라시아노"
  },
  {
    "nameKo": "마수엘로입니다. 이 다양한 품종과 지형 조건은 와인에 뚜렷한 개성과 균형 잡힌 구조를 부여합니다.",
    "nameEn": "마수엘로입니다. 이 다양한 품종과 지형 조건은 와인에 뚜렷한 개성과 균형 잡힌 구조를 부여합니다."
  },
  {
    "nameKo": "발렌시아 지역 중심부에서 생산된 매우 트렌디하고 개성 있는 스타일의 모스카텔로 만든 베시토스(Besitos) 스파클링은 와인 만큼이나 라벨이 매력적인데 꽃이 활짝 피어 하트모양을 이루어 섬세하면서 우아한 것이 특징입니다. 모스카텔(Moscatell)품종을 압착한 주스에 템프라니요(Tempranillo)품종을 약간 블렌딩 함으로서 달콤한 산딸기의 캐릭터 뿐만 아니라 로제 와인의 가장 큰 특징인 연한 장미 빛 색을 표현 합니다.",
    "nameEn": "발렌시아 지역 중심부에서 생산된 매우 트렌디하고 개성 있는 스타일의 모스카텔로 만든 베시토스(Besitos) 스파클링은 와인 만큼이나 라벨이 매력적인데 꽃이 활짝 피어 하트모양을 이루어 섬세하면서 우아한 것이 특징입니다. 모스카텔(Moscatell)품종을 압착한 주스에 템프라니요(Tempranillo)품종을 약간 블렌딩 함으로서 달콤한 산딸기의 캐릭터 뿐만 아니라 로제 와인의 가장 큰 특징인 연한 장미 빛 색을 표현 합니다."
  },
  {
    "nameKo": "스페인을 대표하는 두 가지 레드 품종인 가르나챠와 템프라니요에 국제 품종 멀롯의 블랜딩을 통해 스페인의 가장 전형적인 특징과 현대적인 느낌을 동시에 보여 주는 와인입니다. 뜨거운 태양이 내리쬐는 황무지와 같은 매우 열악한 자연 환경 속에서 더욱 깊게 뿌리를 내리며 자라온 스페인 와인의 저력과 떼루아를 잘 표현합니다.",
    "nameEn": "스페인을 대표하는 두 가지 레드 품종인 가르나챠와 템프라니요에 국제 품종 멀롯의 블랜딩을 통해 스페인의 가장 전형적인 특징과 현대적인 느낌을 동시에 보여 주는 와인입니다. 뜨거운 태양이 내리쬐는 황무지와 같은 매우 열악한 자연 환경 속에서 더욱 깊게 뿌리를 내리며 자라온 스페인 와인의 저력과 떼루아를 잘 표현합니다."
  },
  {
    "nameKo": "스페인을 대표하는 두 가지 레드 품종인 가르나챠와 템프라니요에 국제 품종 멀롯의 블랜딩을 통해 스페인의 가장 전형적인 특징과 현대적인 느낌을 동시에 보여 주는 와인입니다.",
    "nameEn": "스페인을 대표하는 두 가지 레드 품종인 가르나챠와 템프라니요에 국제 품종 멀롯의 블랜딩을 통해 스페인의 가장 전형적인 특징과 현대적인 느낌을 동시에 보여 주는 와인입니다."
  },
  {
    "nameKo": "화사한 향과 달콤한 맛을 보여주는 모스카토 품종의 와인들은 국내 와인 소비시장의 한 축을 이루며 국제 시장에서 한국을 모스카토 킹덤이라고 부를 만큼 국내 소비자들의 사랑을 받고 있는 것으로 유명합니다. 모스카토 품종으로 만들어진 와인은 대부분 이태리에서 생산되는 것으로 알려져 있습니다. 하지만 이렇게 알려진 것과는 달리 프랑스에서는 뮈스캇(Muscat)이란 이름으로",
    "nameEn": "화사한 향과 달콤한 맛을 보여주는 모스카토 품종의 와인들은 국내 와인 소비시장의 한 축을 이루며 국제 시장에서 한국을 모스카토 킹덤이라고 부를 만큼 국내 소비자들의 사랑을 받고 있는 것으로 유명합니다. 모스카토 품종으로 만들어진 와인은 대부분 이태리에서 생산되는 것으로 알려져 있습니다. 하지만 이렇게 알려진 것과는 달리 프랑스에서는 뮈스캇(Muscat)이란 이름으로"
  },
  {
    "nameKo": "스페인에서는 모스카텔(Moscatel)이란 이름으로 널리 사랑 받으며 생산되고 있습니다.",
    "nameEn": "스페인에서는 모스카텔(Moscatel)이란 이름으로 널리 사랑 받으며 생산되고 있습니다."
  },
  {
    "nameKo": "카버네 소비뇽",
    "nameEn": "카버네 소비뇽"
  },
  {
    "nameKo": "멀롯을 비롯한 품종으로 그만의 보르도 스타일 블렌드를 만듭니다.",
    "nameEn": "멀롯을 비롯한 품종으로 그만의 보르도 스타일 블렌드를 만듭니다."
  },
  {
    "nameKo": "레드와 화이트 품종을 별도로 양조해서  8개월간 정제시킨 후 마법과도 같은 블렌딩을 창조합니다. 지하 셀러에서 12℃의 일정한 온도로 무려 30개월간 효모와 함께 숙성되는 까델 보스코의 로제 와인은 스파클링 와인이 보여 줄 수 있는 최상의 복합미와 품격",
    "nameEn": "레드와 화이트 품종을 별도로 양조해서  8개월간 정제시킨 후 마법과도 같은 블렌딩을 창조합니다. 지하 셀러에서 12℃의 일정한 온도로 무려 30개월간 효모와 함께 숙성되는 까델 보스코의 로제 와인은 스파클링 와인이 보여 줄 수 있는 최상의 복합미와 품격"
  },
  {
    "nameKo": "우아함을 갖추게 됩니다.",
    "nameEn": "우아함을 갖추게 됩니다."
  },
  {
    "nameKo": "셀바 델라 테사는 지역의 특성을 잘 살려 품종의 미세한 차이를 이끌어내는 동시에",
    "nameEn": "셀바 델라 테사는 지역의 특성을 잘 살려 품종의 미세한 차이를 이끌어내는 동시에"
  },
  {
    "nameKo": "와인메이커의 기술이 돋보이는 훌륭한 와인입니다.",
    "nameEn": "와인메이커의 기술이 돋보이는 훌륭한 와인입니다."
  },
  {
    "nameKo": "셀바 델라 테사는지역의 특성을 잘 살려 품종의 미세한 차이를 이끌어내는 동시에",
    "nameEn": "셀바 델라 테사는지역의 특성을 잘 살려 품종의 미세한 차이를 이끌어내는 동시에"
  },
  {
    "nameKo": "누스바우머(Nussbaumer)는 이탈리아에서 가장 많은 상을 받은 게뷔르츠트라미너(Gewürztraminer)이며",
    "nameEn": "누스바우머(Nussbaumer)는 이탈리아에서 가장 많은 상을 받은 게뷔르츠트라미너(Gewürztraminer)이며"
  },
  {
    "nameKo": "게뷔르츠트라미너 포도품종 특유의 우아함을 가장 잘 표현한 와인으로 평가받고 있습니다.",
    "nameEn": "게뷔르츠트라미너 포도품종 특유의 우아함을 가장 잘 표현한 와인으로 평가받고 있습니다."
  },
  {
    "nameKo": "치냘레는 이태리어로 “야생 멧돼지”라는 뜻으로 퀘르체토가 생산하는 수퍼 투스칸급의 와인입니다. 국제 품종인 카버네 소비뇽과 멀롯을 블랜딩하여 만들고 6본입 케이스에 각각 다른 6개의 멧돼지 드로잉을 라벨에서 잘 보여줍니다.",
    "nameEn": "치냘레는 이태리어로 “야생 멧돼지”라는 뜻으로 퀘르체토가 생산하는 수퍼 투스칸급의 와인입니다. 국제 품종인 카버네 소비뇽과 멀롯을 블랜딩하여 만들고 6본입 케이스에 각각 다른 6개의 멧돼지 드로잉을 라벨에서 잘 보여줍니다."
  },
  {
    "nameKo": "토스카나 지방의 유일한 DOCG 화이트 와인으로 피렌체 남서쪽",
    "nameEn": "토스카나 지방의 유일한 DOCG 화이트 와인으로 피렌체 남서쪽"
  },
  {
    "nameKo": "중세 분위기를 물씬 풍기는 산 지미냐노 마을에서 자라는 베르나차 품종으로 만듭니다.",
    "nameEn": "중세 분위기를 물씬 풍기는 산 지미냐노 마을에서 자라는 베르나차 품종으로 만듭니다."
  },
  {
    "nameKo": "레드베리와 말린 체리의 향이 풍부하게 느껴집니다. 코에서는 로즈마리등의 허브향과 함께 시라(Syrah) 포도품종이 추가되며 스파이시한 맛과 와인에 좀 더 복합미를 더해줍니다. 은은한 바닐라와 오크향이 와인에 깊은 풍미를 주는 퀘르체토의 토스카나 레드 블렌딩 와인입니다.",
    "nameEn": "레드베리와 말린 체리의 향이 풍부하게 느껴집니다. 코에서는 로즈마리등의 허브향과 함께 시라(Syrah) 포도품종이 추가되며 스파이시한 맛과 와인에 좀 더 복합미를 더해줍니다. 은은한 바닐라와 오크향이 와인에 깊은 풍미를 주는 퀘르체토의 토스카나 레드 블렌딩 와인입니다."
  },
  {
    "nameKo": "루비 빛을 띠며 블랙베리",
    "nameEn": "루비 빛을 띠며 블랙베리"
  },
  {
    "nameKo": "레드 베리와 말린 체리의 향이 풍부하게 느껴집니다. 로즈마리",
    "nameEn": "레드 베리와 말린 체리의 향이 풍부하게 느껴집니다. 로즈마리"
  },
  {
    "nameKo": "세이지 등의 허브향과 함께 시라(Syrah) 포도 품종 특유의 스파이시한 풍미가 와인에 복합미를 더해줍니다. 은은한 바닐라와 오크 터치가 우아한 여운을 남기는 와인입니다.",
    "nameEn": "세이지 등의 허브향과 함께 시라(Syrah) 포도 품종 특유의 스파이시한 풍미가 와인에 복합미를 더해줍니다. 은은한 바닐라와 오크 터치가 우아한 여운을 남기는 와인입니다."
  },
  {
    "nameKo": "체사리가 생산하는 와인은 아마로네(Amarone)",
    "nameEn": "체사리가 생산하는 와인은 아마로네(Amarone)"
  },
  {
    "nameKo": "레치오토(Recioto)",
    "nameEn": "레치오토(Recioto)"
  },
  {
    "nameKo": "발폴리첼라(Valpolicella)",
    "nameEn": "발폴리첼라(Valpolicella)"
  },
  {
    "nameKo": "바르돌리노(Bardolino)",
    "nameEn": "바르돌리노(Bardolino)"
  },
  {
    "nameKo": "소아베(Soave)와 같은 베네토 지역의 클래식한 와인들과 국제 품종인 멀롯",
    "nameEn": "소아베(Soave)와 같은 베네토 지역의 클래식한 와인들과 국제 품종인 멀롯"
  },
  {
    "nameKo": "샤도네이 등으로 다양한데",
    "nameEn": "샤도네이 등으로 다양한데"
  },
  {
    "nameKo": "이 모두는 높은 품질 기준을 충족시키며 양조되어 세계 최고의 주류 경연대회인 International Wine and Spirit Competition으로부터 2004년과 2006년 “올 해의 이태리 와인",
    "nameEn": "이 모두는 높은 품질 기준을 충족시키며 양조되어 세계 최고의 주류 경연대회인 International Wine and Spirit Competition으로부터 2004년과 2006년 “올 해의 이태리 와인"
  },
  {
    "nameKo": "시칠리아를 대표하는 포도 품종 네로 다볼라를 메인으로 쁘띠 베르도와 시라를 소량 블랜딩했습니다. 블랙베리와 블랙 멀버리 같은 잘 익은 검은 과실류의 풍성한 부케가 돋보이며",
    "nameEn": "시칠리아를 대표하는 포도 품종 네로 다볼라를 메인으로 쁘띠 베르도와 시라를 소량 블랜딩했습니다. 블랙베리와 블랙 멀버리 같은 잘 익은 검은 과실류의 풍성한 부케가 돋보이며"
  },
  {
    "nameKo": "발사믹과 약간의 코코아",
    "nameEn": "발사믹과 약간의 코코아"
  },
  {
    "nameKo": "바닐라 향이 느껴집니다.",
    "nameEn": "바닐라 향이 느껴집니다."
  },
  {
    "nameKo": "국제 품종을 사용한 새로운 시칠리아 와인",
    "nameEn": "국제 품종을 사용한 새로운 시칠리아 와인"
  },
  {
    "nameKo": "시칠리아 토착 품종 네로 다볼라를 메인으로 카버네 소비뇽과 멀롯",
    "nameEn": "시칠리아 토착 품종 네로 다볼라를 메인으로 카버네 소비뇽과 멀롯"
  },
  {
    "nameKo": "시라와 같은 국제 품종을 소량 블랜딩했습니다. 옅은 보라빛이 감도는 루비 컬러의 와인으로",
    "nameEn": "시라와 같은 국제 품종을 소량 블랜딩했습니다. 옅은 보라빛이 감도는 루비 컬러의 와인으로"
  },
  {
    "nameKo": "체리와 자두 같은 붉은 과일의 향기가 강렬하게 코를 휘감습니다. 약간의 발사믹과 민트 노트가 느껴지며 입에 머금으면 블랙베리와 체리의 매력적인 맛이 충만하게 느껴집니다. 약간의 담뱃잎 향과 세이지 등 허브류의 스파이시함",
    "nameEn": "체리와 자두 같은 붉은 과일의 향기가 강렬하게 코를 휘감습니다. 약간의 발사믹과 민트 노트가 느껴지며 입에 머금으면 블랙베리와 체리의 매력적인 맛이 충만하게 느껴집니다. 약간의 담뱃잎 향과 세이지 등 허브류의 스파이시함"
  },
  {
    "nameKo": "미네랄리티가 가득 느껴지는 가운데 부드러운 탄닌과 구조감이 강한 여운을 남깁니다. 4~5년 정도의 숙성 잠재력을 가집니다.",
    "nameEn": "미네랄리티가 가득 느껴지는 가운데 부드러운 탄닌과 구조감이 강한 여운을 남깁니다. 4~5년 정도의 숙성 잠재력을 가집니다."
  },
  {
    "nameKo": "2006년 빈티지로 처음 탄생한 돈나푸가타 세라자데는 시칠리아의 토착 품종이자 지역을 대표하는 품종인 네로 다볼라로 만들어집니다. 매력적인 밝은 루비 컬러가 매혹적인 첫 인상을 남기며",
    "nameEn": "2006년 빈티지로 처음 탄생한 돈나푸가타 세라자데는 시칠리아의 토착 품종이자 지역을 대표하는 품종인 네로 다볼라로 만들어집니다. 매력적인 밝은 루비 컬러가 매혹적인 첫 인상을 남기며"
  },
  {
    "nameKo": "자두와 체리의 신선한 뉘앙스와 약간의 스파이시한 향이 기억에 뚜렷하게 남습니다. 입 안에 꽉 차는 듯한 튼튼한 구조감과 놀라울 만큼 신선한 풍미",
    "nameEn": "자두와 체리의 신선한 뉘앙스와 약간의 스파이시한 향이 기억에 뚜렷하게 남습니다. 입 안에 꽉 차는 듯한 튼튼한 구조감과 놀라울 만큼 신선한 풍미"
  },
  {
    "nameKo": "훌륭한 탄닌을 가진 밸런스 좋은 와인으로",
    "nameEn": "훌륭한 탄닌을 가진 밸런스 좋은 와인으로"
  },
  {
    "nameKo": "피자나 스파게티 같은 이탈리아 음식은 물론 팟타이 등의 아시아 음식들과도 잘 어울립니다.",
    "nameEn": "피자나 스파게티 같은 이탈리아 음식은 물론 팟타이 등의 아시아 음식들과도 잘 어울립니다."
  },
  {
    "nameKo": "카타라토(Catarratto)와 기타 화이트 품종 블랜딩",
    "nameEn": "카타라토(Catarratto)와 기타 화이트 품종 블랜딩"
  },
  {
    "nameKo": "모스카토 달레산드리아(Moscato d’Alessandria)로도 알려진 시칠리아 토착 품종 지비보로 만들어진 와인입니다. 아카시아 꿀과 꽃",
    "nameEn": "모스카토 달레산드리아(Moscato d’Alessandria)로도 알려진 시칠리아 토착 품종 지비보로 만들어진 와인입니다. 아카시아 꿀과 꽃"
  },
  {
    "nameKo": "캐러멜 등의 화사한 향을 특징으로 하는 지비보의 특성을 100% 반영한 와인으로",
    "nameEn": "캐러멜 등의 화사한 향을 특징으로 하는 지비보의 특성을 100% 반영한 와인으로"
  },
  {
    "nameKo": "오렌지 꽃을 연상시키는 향이 매력적입니다.",
    "nameEn": "오렌지 꽃을 연상시키는 향이 매력적입니다."
  },
  {
    "nameKo": "비토리아(Vittoria) 지역의 토착 품종이자 강렬한 꽃 향기를 가진 품종인 프라파토(Frappato)를 사용한 와인입니다.",
    "nameEn": "비토리아(Vittoria) 지역의 토착 품종이자 강렬한 꽃 향기를 가진 품종인 프라파토(Frappato)를 사용한 와인입니다."
  },
  {
    "nameKo": "화산지대 토착 품종으로 만든 레드와인",
    "nameEn": "화산지대 토착 품종으로 만든 레드와인"
  },
  {
    "nameKo": "유럽에서 가장 크고 활발한 활화산으로 불리는 ‘에트나(Etna)’는 연중 포도밭을 뒤덮는 화산재와 높은 해발고도로 인한 낮은 기온",
    "nameEn": "유럽에서 가장 크고 활발한 활화산으로 불리는 ‘에트나(Etna)’는 연중 포도밭을 뒤덮는 화산재와 높은 해발고도로 인한 낮은 기온"
  },
  {
    "nameKo": "풍부한 일조량으로 놀랍도록 우아하고 미네랄리티가 강한 와인을 만들어냅니다. 로자는 이 지역의 대표 품종이자 좋은 산도와 프레시한 허브향",
    "nameEn": "풍부한 일조량으로 놀랍도록 우아하고 미네랄리티가 강한 와인을 만들어냅니다. 로자는 이 지역의 대표 품종이자 좋은 산도와 프레시한 허브향"
  },
  {
    "nameKo": "섬세한 미네랄리티를 가진 네렐로 마스칼레제와 풍부한 타닌과 구조감을 가진 노세라를 블랜딩한 와인입니다. 오묘하고 밝은 분홍빛의 컬러가 눈을 사로잡으며 자스민 꽃의 우아한 부케",
    "nameEn": "섬세한 미네랄리티를 가진 네렐로 마스칼레제와 풍부한 타닌과 구조감을 가진 노세라를 블랜딩한 와인입니다. 오묘하고 밝은 분홍빛의 컬러가 눈을 사로잡으며 자스민 꽃의 우아한 부케"
  },
  {
    "nameKo": "산딸기",
    "nameEn": "산딸기"
  },
  {
    "nameKo": "복숭아의 부드러운 과일향이 펼쳐집니다. 입 안에서는 베르가못의 신선하면서도 독특한 허브향이 차오르며 풍부한 미네랄리티와 가벼운 타닌이 훌륭한 밸런스를 선사합니다.",
    "nameEn": "복숭아의 부드러운 과일향이 펼쳐집니다. 입 안에서는 베르가못의 신선하면서도 독특한 허브향이 차오르며 풍부한 미네랄리티와 가벼운 타닌이 훌륭한 밸런스를 선사합니다."
  },
  {
    "nameKo": "시칠리아 대표 품종 네로 다볼라와 대표적인 레드와인 품종 카버네 소비뇽의 블랜딩을 통해 탄생한 세련되고 우아한 스타일의 와인입니다.",
    "nameEn": "시칠리아 대표 품종 네로 다볼라와 대표적인 레드와인 품종 카버네 소비뇽의 블랜딩을 통해 탄생한 세련되고 우아한 스타일의 와인입니다."
  },
  {
    "nameKo": "빈치 마을의 가장 유명한 화이트 품종인 베르멘티노를 통해 만든 와인으로",
    "nameEn": "빈치 마을의 가장 유명한 화이트 품종인 베르멘티노를 통해 만든 와인으로"
  },
  {
    "nameKo": "베르멘티노 단일 포도밭에서 만들어진 ‘크뤼’급 와인입니다.",
    "nameEn": "베르멘티노 단일 포도밭에서 만들어진 ‘크뤼’급 와인입니다."
  },
  {
    "nameKo": "자가 포도밭에서 손 수확된 최고급 품질의 산지오베제만을 사용하여 만든 와인으로 토스카나 지방에서 가장 유명한 포도 품종인 산지오베제가 어떻게 빈치 마을의 떼루아를 표현하는지 알 수 있는 와인입니다.",
    "nameEn": "자가 포도밭에서 손 수확된 최고급 품질의 산지오베제만을 사용하여 만든 와인으로 토스카나 지방에서 가장 유명한 포도 품종인 산지오베제가 어떻게 빈치 마을의 떼루아를 표현하는지 알 수 있는 와인입니다."
  },
  {
    "nameKo": "베르멘티노 단일 포도밭에서 만들어진 ‘크뤼’급 와인입니다. 스트레다는 빈치 마을을 가로지르는 시냇물의 이름으로 빌라 다 빈치      포도밭을 따라 흐르고 있습니다.",
    "nameEn": "베르멘티노 단일 포도밭에서 만들어진 ‘크뤼’급 와인입니다. 스트레다는 빈치 마을을 가로지르는 시냇물의 이름으로 빌라 다 빈치      포도밭을 따라 흐르고 있습니다."
  },
  {
    "nameKo": "포도밭에서 손 수확된 최고급 품질의 산지오베제와    콜로리노를 사용하여 만든 와인으로 토스카나 지방에서 가장 유명한 포도 품종인 산지오베제가 어떻게  빈치 마을의 떼루아를 표현하는지 알 수 있는 와인 입니다. 와인의 명칭인 산 지오는 빈치 마을의 포도밭과 올리브 나무 숲의 이름에서 따왔습니다.",
    "nameEn": "포도밭에서 손 수확된 최고급 품질의 산지오베제와    콜로리노를 사용하여 만든 와인으로 토스카나 지방에서 가장 유명한 포도 품종인 산지오베제가 어떻게  빈치 마을의 떼루아를 표현하는지 알 수 있는 와인 입니다. 와인의 명칭인 산 지오는 빈치 마을의 포도밭과 올리브 나무 숲의 이름에서 따왔습니다."
  },
  {
    "nameKo": "포도밭에서 손 수확된 최고급 품질의 산지오베제와 콜로리노를 사용하여 만든 와인으로 토스카나 지방에서 가장 유명한 포도 품종인 산지오베제가 어떻게 빈치 마을의 떼루아를 표현하는지 알 수 있는 와인입니다.",
    "nameEn": "포도밭에서 손 수확된 최고급 품질의 산지오베제와 콜로리노를 사용하여 만든 와인으로 토스카나 지방에서 가장 유명한 포도 품종인 산지오베제가 어떻게 빈치 마을의 떼루아를 표현하는지 알 수 있는 와인입니다."
  },
  {
    "nameKo": "100% 오가닉 방식으로 재배된 카타라토 품종으로 만들어진 이 와인은",
    "nameEn": "100% 오가닉 방식으로 재배된 카타라토 품종으로 만들어진 이 와인은"
  },
  {
    "nameKo": "와인 양조에 있어 최소한의 개입이 와인 본연의 맛을 살린다는 철학으로 이어져 최소한의 필터링만 진행하였습니다. 그 결과 병속에 미세한 세디먼트가 남아 와인이 클라우디 하지만 이 세디먼트는 와인에 풍미와 질감을 더해주며 입안을 더욱 풍부하게 만들어 줍니다.",
    "nameEn": "와인 양조에 있어 최소한의 개입이 와인 본연의 맛을 살린다는 철학으로 이어져 최소한의 필터링만 진행하였습니다. 그 결과 병속에 미세한 세디먼트가 남아 와인이 클라우디 하지만 이 세디먼트는 와인에 풍미와 질감을 더해주며 입안을 더욱 풍부하게 만들어 줍니다."
  },
  {
    "nameKo": "5대에 걸쳐 130년의 역사를 자랑하는 람브루스코의 명가",
    "nameEn": "5대에 걸쳐 130년의 역사를 자랑하는 람브루스코의 명가"
  },
  {
    "nameKo": "메디치 에르메테(Medici Ermete)는 이탈리아의 에밀리아 로마냐(Emilia Romagna) 지역에 위치하고 있습니다. 에밀리아 로마냐(Emilia Romagna)는 이탈리아에서 음식",
    "nameEn": "메디치 에르메테(Medici Ermete)는 이탈리아의 에밀리아 로마냐(Emilia Romagna) 지역에 위치하고 있습니다. 에밀리아 로마냐(Emilia Romagna)는 이탈리아에서 음식"
  },
  {
    "nameKo": "패션",
    "nameEn": "패션"
  },
  {
    "nameKo": "건축 등 문화의 중심지로 유명하며",
    "nameEn": "건축 등 문화의 중심지로 유명하며"
  },
  {
    "nameKo": "람브로기니",
    "nameEn": "람브로기니"
  },
  {
    "nameKo": "페라리",
    "nameEn": "페라리"
  },
  {
    "nameKo": "마세라티와 같은 세계적으로 유명한 자동차 브랜드를 탄생시킨 곳이기도 합니다. 특히 미식의 천국으로 유명한데",
    "nameEn": "마세라티와 같은 세계적으로 유명한 자동차 브랜드를 탄생시킨 곳이기도 합니다. 특히 미식의 천국으로 유명한데"
  },
  {
    "nameKo": "이 지역 사람들이 언제나 식사 테이블에 올리는 와인이 바로 이 람브루스코입니다. 포도 품종의 이름인 람브루스코는 세미 스파클링으로",
    "nameEn": "이 지역 사람들이 언제나 식사 테이블에 올리는 와인이 바로 이 람브루스코입니다. 포도 품종의 이름인 람브루스코는 세미 스파클링으로"
  },
  {
    "nameKo": "드라이-스위트",
    "nameEn": "드라이-스위트"
  },
  {
    "nameKo": "화이트-레드까지 아우르며 전세계인의 입맛을 사로잡고 있습니다.",
    "nameEn": "화이트-레드까지 아우르며 전세계인의 입맛을 사로잡고 있습니다."
  },
  {
    "nameKo": "오뇨스트로(O’gnostro)의 화이트 포도 품종인 피아노(Fiano)는 바로 이 지역에서 불과 몇 미터 떨어지지 않은 곳에 심어진 해당 포도 품종의 오래된 덩굴에서 수확됩니다. 이곳의 포도밭은 평균 30-60년을 자랑합니다.",
    "nameEn": "오뇨스트로(O’gnostro)의 화이트 포도 품종인 피아노(Fiano)는 바로 이 지역에서 불과 몇 미터 떨어지지 않은 곳에 심어진 해당 포도 품종의 오래된 덩굴에서 수확됩니다. 이곳의 포도밭은 평균 30-60년을 자랑합니다."
  },
  {
    "nameKo": "블랙체리와 같은 검은 과실의 향이 풍부하며",
    "nameEn": "블랙체리와 같은 검은 과실의 향이 풍부하며"
  },
  {
    "nameKo": "감귤류의 껍질",
    "nameEn": "감귤류의 껍질"
  },
  {
    "nameKo": "생강의 향이 복합적으로 느껴집니다. 포도 품종 특유의 깊고 풍부한 특징을 고려했을 때 입안에서 느껴지는 놀라울 정도의 신선함이 매력적으로 다가오는 레드 와인입니다.",
    "nameEn": "생강의 향이 복합적으로 느껴집니다. 포도 품종 특유의 깊고 풍부한 특징을 고려했을 때 입안에서 느껴지는 놀라울 정도의 신선함이 매력적으로 다가오는 레드 와인입니다."
  },
  {
    "nameKo": "오뇨스트로(O’gnostro)의 화이트 포도 품종인 피아노(Fiano)는 바로 이 지역에서 불과 몇 미터 떨어지지 않은 곳에 심어진 해당 포도 품종의 오래된 덩굴에서 수확되며 포도밭은 평균 수령은 30-60년을 자랑합니다.",
    "nameEn": "오뇨스트로(O’gnostro)의 화이트 포도 품종인 피아노(Fiano)는 바로 이 지역에서 불과 몇 미터 떨어지지 않은 곳에 심어진 해당 포도 품종의 오래된 덩굴에서 수확되며 포도밭은 평균 수령은 30-60년을 자랑합니다."
  },
  {
    "nameKo": "생강의 향이 복합적으로 느껴집니다. 포도 품종 특유의 깊고 풍부한 특징을 고려했을 때 입안에서 느껴지는 놀라울 정도의     신선함이 매력적으로 다가오는 레드 와인입니다.",
    "nameEn": "생강의 향이 복합적으로 느껴집니다. 포도 품종 특유의 깊고 풍부한 특징을 고려했을 때 입안에서 느껴지는 놀라울 정도의     신선함이 매력적으로 다가오는 레드 와인입니다."
  },
  {
    "nameKo": "Nubiola 이름의 역사는 1330년으로 거슬러 올라  갑니다. 역사적인 농업 조약 “De Ruralium Commodorum”에서 볼로냐의 법학자였던 Pier De Crescenzi(피에르 데 크레센지)는 당대 최고의 포도나무 중 하나라며 Nubiola (지금의 Nebbiolo)를 소개하였고 놀라울 정도로 파워풀하한 와인 양조에 최적화된 품종이라고 묘사하였습니다.",
    "nameEn": "Nubiola 이름의 역사는 1330년으로 거슬러 올라  갑니다. 역사적인 농업 조약 “De Ruralium Commodorum”에서 볼로냐의 법학자였던 Pier De Crescenzi(피에르 데 크레센지)는 당대 최고의 포도나무 중 하나라며 Nubiola (지금의 Nebbiolo)를 소개하였고 놀라울 정도로 파워풀하한 와인 양조에 최적화된 품종이라고 묘사하였습니다."
  },
  {
    "nameKo": "전체 생산량의 85%는 Nebbiolo",
    "nameEn": "전체 생산량의 85%는 Nebbiolo"
  },
  {
    "nameKo": "Barbera",
    "nameEn": "Barbera"
  },
  {
    "nameKo": "Dolcetto와 같은 피에몬테 토착 포도 품종으로 이루어져 있으며 피에몬테 테루아의 위대함과 가능성에 집중하고   있습니다. 이 철학은 3대에 걸쳐 변하지 않은 Pelissero의 자부심입니다. Treiso",
    "nameEn": "Dolcetto와 같은 피에몬테 토착 포도 품종으로 이루어져 있으며 피에몬테 테루아의 위대함과 가능성에 집중하고   있습니다. 이 철학은 3대에 걸쳐 변하지 않은 Pelissero의 자부심입니다. Treiso"
  },
  {
    "nameKo": "Barbaresco",
    "nameEn": "Barbaresco"
  },
  {
    "nameKo": "Neive",
    "nameEn": "Neive"
  },
  {
    "nameKo": "Neviglie 그리고 Alba에 총 42ha의 포도밭을 소유하고 있으며 전문가들로 구성된 팀이 포도의 전체 생산주기를 직접 감독하고 관리하고 있습니다.",
    "nameEn": "Neviglie 그리고 Alba에 총 42ha의 포도밭을 소유하고 있으며 전문가들로 구성된 팀이 포도의 전체 생산주기를 직접 감독하고 관리하고 있습니다."
  },
  {
    "nameKo": "네로 디 트로이아(Nero di Troia) 품종은 과거 이태리에 남부에서 많이 재배되던 품종이나 시간이 지나며 거의 잊혀진 품종이었습니다. 리베라는 카스텔 델 몬테 지역에서 가장 오래된 타푸리(Tafuri) 빈야드에서 재생산된 것으로 이 품종으로 와인을 생산하며",
    "nameEn": "네로 디 트로이아(Nero di Troia) 품종은 과거 이태리에 남부에서 많이 재배되던 품종이나 시간이 지나며 거의 잊혀진 품종이었습니다. 리베라는 카스텔 델 몬테 지역에서 가장 오래된 타푸리(Tafuri) 빈야드에서 재생산된 것으로 이 품종으로 와인을 생산하며"
  },
  {
    "nameKo": "잊혀진 품종을 다시 부활 시켰습니다.",
    "nameEn": "잊혀진 품종을 다시 부활 시켰습니다."
  },
  {
    "nameKo": "알리아니코는 세계에서 3",
    "nameEn": "알리아니코는 세계에서 3"
  },
  {
    "nameKo": "000년 전 고대 그리스에 의해 이태리 남부 지역에 전파된 역사가 오래된 포도품종입니다. 우아하고 숙성 잠재력이 높은 이 품종으로 남부 지역의 네비올로라는 별명으로도 불리고 있습니다.",
    "nameEn": "000년 전 고대 그리스에 의해 이태리 남부 지역에 전파된 역사가 오래된 포도품종입니다. 우아하고 숙성 잠재력이 높은 이 품종으로 남부 지역의 네비올로라는 별명으로도 불리고 있습니다."
  },
  {
    "nameKo": "프리미티보는 진한 과일의 풍미 덕분에 전 세계에 풀리아 지역의 와인을 널리 알린 포도 품종으로",
    "nameEn": "프리미티보는 진한 과일의 풍미 덕분에 전 세계에 풀리아 지역의 와인을 널리 알린 포도 품종으로"
  },
  {
    "nameKo": "응회질 토양에서 재배된 모스카토 포도 품종으로 만든 와인으로",
    "nameEn": "응회질 토양에서 재배된 모스카토 포도 품종으로 만든 와인으로"
  },
  {
    "nameKo": "일부분의 포도들은 말린 포도를 사용함으로써",
    "nameEn": "일부분의 포도들은 말린 포도를 사용함으로써"
  },
  {
    "nameKo": "풍미와 당분의 집약을 더욱 강화 하였습니다. 양조된 와인은 프렌치 오크통에서 숙성 과정을 거치면서 모스카토의 풍미를 더욱 강화 하게 됩니다.",
    "nameEn": "풍미와 당분의 집약을 더욱 강화 하였습니다. 양조된 와인은 프렌치 오크통에서 숙성 과정을 거치면서 모스카토의 풍미를 더욱 강화 하게 됩니다."
  },
  {
    "nameKo": "루비색을 가진 이 와인은 활력이 있고 매력이 넘칩니다. 와인의 주요 품종인 산지오베제가 주는 체리",
    "nameEn": "루비색을 가진 이 와인은 활력이 있고 매력이 넘칩니다. 와인의 주요 품종인 산지오베제가 주는 체리"
  },
  {
    "nameKo": "붉은 과일",
    "nameEn": "붉은 과일"
  },
  {
    "nameKo": "바이올렛 등 꽃 향이 매혹적이고",
    "nameEn": "바이올렛 등 꽃 향이 매혹적이고"
  },
  {
    "nameKo": "입안에서 탄력이 있는 탄닌과 우아한 질감이 조화롭게 느껴집니다.",
    "nameEn": "입안에서 탄력이 있는 탄닌과 우아한 질감이 조화롭게 느껴집니다."
  },
  {
    "nameKo": "선별된 3가지 포도품종은 각각 발효를 진행한 뒤 작은 프렌치 오크통과 아메리칸 오크통에 각각 1년간 숙성을 합니다. 그리고 스테인리스 스틸 탱크에서 블렌딩 한 뒤 6개월의 안정화를 거쳐 출시 됩니다.",
    "nameEn": "선별된 3가지 포도품종은 각각 발효를 진행한 뒤 작은 프렌치 오크통과 아메리칸 오크통에 각각 1년간 숙성을 합니다. 그리고 스테인리스 스틸 탱크에서 블렌딩 한 뒤 6개월의 안정화를 거쳐 출시 됩니다."
  },
  {
    "nameKo": "보통은 글레라 포도품종을 선별하여 발효 후 샤르망 방식(Charmat)을 통해 만들지만",
    "nameEn": "보통은 글레라 포도품종을 선별하여 발효 후 샤르망 방식(Charmat)을 통해 만들지만"
  },
  {
    "nameKo": "루피노가 만든 프로세코의 경우 과일주스와 화이트와인을 함께 혼합한 뒤 샤르망 방식을 사용합니다. 이 차이로 인해 포도 품종이 간직한 사과와 복숭아와 같은 싱그러운 느낌을 유지하게 되고",
    "nameEn": "루피노가 만든 프로세코의 경우 과일주스와 화이트와인을 함께 혼합한 뒤 샤르망 방식을 사용합니다. 이 차이로 인해 포도 품종이 간직한 사과와 복숭아와 같은 싱그러운 느낌을 유지하게 되고"
  },
  {
    "nameKo": "또 거품을 통해 입안을 즐겁게 만들어 줍니다.",
    "nameEn": "또 거품을 통해 입안을 즐겁게 만들어 줍니다."
  },
  {
    "nameKo": "글레라와 피노누아가 블렌딩 되어 탄탄한 구조감과 바디감을 가지고 있으며",
    "nameEn": "글레라와 피노누아가 블렌딩 되어 탄탄한 구조감과 바디감을 가지고 있으며"
  },
  {
    "nameKo": "샤르망(Charmat) 방식을 사용하고 있습니다. 샤르망(Charmat) 방식은 주로 아로마가 풍부한 포도 품종 특유의 캐릭터를 고스란히 보전하기 위해 사용되며 신선함",
    "nameEn": "샤르망(Charmat) 방식을 사용하고 있습니다. 샤르망(Charmat) 방식은 주로 아로마가 풍부한 포도 품종 특유의 캐릭터를 고스란히 보전하기 위해 사용되며 신선함"
  },
  {
    "nameKo": "과실의 향기로움을 와인 캐릭터에 그대로 나타납니다.",
    "nameEn": "과실의 향기로움을 와인 캐릭터에 그대로 나타납니다."
  },
  {
    "nameKo": "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
    "nameEn": "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데"
  },
  {
    "nameKo": "이는 1967년 멸종 될뻔한 아르네이스 포도 품종을 찾아내고 다시 개발하여",
    "nameEn": "이는 1967년 멸종 될뻔한 아르네이스 포도 품종을 찾아내고 다시 개발하여"
  },
  {
    "nameKo": "현재의 피에몬테의 대표 화이트 포도품종으로 만드는 역할을 하였습니다.",
    "nameEn": "현재의 피에몬테의 대표 화이트 포도품종으로 만드는 역할을 하였습니다."
  },
  {
    "nameKo": "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
    "nameEn": "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여"
  },
  {
    "nameKo": "현재 피에몬테를 대표하는 화이트 포도 품종으로    만드는 역할을 하였습니다.",
    "nameEn": "현재 피에몬테를 대표하는 화이트 포도 품종으로    만드는 역할을 하였습니다."
  },
  {
    "nameKo": "현재 피에몬테를 대표하는 화이트 포도 품종으로 만드는 역할을 하였습니다.",
    "nameEn": "현재 피에몬테를 대표하는 화이트 포도 품종으로 만드는 역할을 하였습니다."
  },
  {
    "nameKo": "Field blend (지역 품종 블렌드-Agronómica EN",
    "nameEn": "Field blend (지역 품종 블렌드-Agronómica EN"
  },
  {
    "nameKo": "Castelão",
    "nameEn": "Castelão"
  },
  {
    "nameKo": "Aragonez",
    "nameEn": "Aragonez"
  },
  {
    "nameKo": "Field blend (지역 품종 블렌드-Aragonês",
    "nameEn": "Field blend (지역 품종 블렌드-Aragonês"
  },
  {
    "nameKo": "Agronómica",
    "nameEn": "Agronómica"
  },
  {
    "nameKo": "도우루에서 재배되는 토착 품종 포도로 완성한 기본급 화이트 포트 와인 입니다. 다우의 화이트 포트는 3년간 에이징을 거쳐 출시되는데",
    "nameEn": "도우루에서 재배되는 토착 품종 포도로 완성한 기본급 화이트 포트 와인 입니다. 다우의 화이트 포트는 3년간 에이징을 거쳐 출시되는데"
  },
  {
    "nameKo": "대부분의 와인은 오크에서",
    "nameEn": "대부분의 와인은 오크에서"
  },
  {
    "nameKo": "나머지 일부는 스테인리스 탱크에서 숙성되어 풍부한 견과류의 아로마와 황금빛 컬러",
    "nameEn": "나머지 일부는 스테인리스 탱크에서 숙성되어 풍부한 견과류의 아로마와 황금빛 컬러"
  },
  {
    "nameKo": "신선한 과일류의 캐릭터가 복합적으로 나타납니다.",
    "nameEn": "신선한 과일류의 캐릭터가 복합적으로 나타납니다."
  },
  {
    "nameKo": "살트램 와인은 풍부함과 강렬함",
    "nameEn": "살트램 와인은 풍부함과 강렬함"
  },
  {
    "nameKo": "그리고 포도 품종 각각의 특성을 충실히 나타내는 와인으로 오랫동안 찬사를 받아 온 와인입니다.",
    "nameEn": "그리고 포도 품종 각각의 특성을 충실히 나타내는 와인으로 오랫동안 찬사를 받아 온 와인입니다."
  }
];

const WINES = [
  {
    "slug": "caymus-napa-valley-cabernet-sauvignon",
    "nameKo": "케이머스 나파 밸리 카베르네 소비뇽",
    "nameEn": "Caymus Napa Valley Cabernet Sauvignon",
    "subtitle": "KING of Cabernet",
    "type": "red",
    "country": "미국",
    "regionL1": "캘리포니아",
    "regionL2": "나파 밸리",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[\"소고기\",\"양고기\",\"숙성 치즈\",\"버섯 요리\",\"다크 초콜릿\"]",
    "sweetness": 2,
    "acidity": 3,
    "body": 5,
    "tannin": 4,
    "description": "케이머스 나파 밸리 카베르네 소비뇽은 나파 밸리를 대표하는 와인으로, 풍부하고 복합적인 풍미와 부드러운 타닌이 조화를 이루는 클래식한 나파 스타일의 와인입니다.",
    "wineStory": "케이머스 나파 밸리 카베르네 소비뇽은 단순히 와인이 아니라 나파 밸리의 역사 그 자체입니다. 1975년 첫 빈티지 이후, 이 와인은 매 빈티지마다 나파 밸리 테루아의 정수를 담아냅니다.\n\n척 와그너는 \"우리가 목표로 하는 것은 매년 일관되게 뛰어난 와인을 만드는 것\"이라고 말합니다. 이 철학은 케이머스를 카베르네 소비뇽의 왕으로 만든 핵심입니다.\n\n잘 익은 블랙 체리, 카시스, 다크 초콜릿, 그리고 오크의 바닐라 향이 어우러진 이 와인은 나파 밸리의 따뜻한 기후와 비옥한 토양이 만들어내는 풍요로움을 온전히 담고 있습니다.",
    "tastingNotes": "선명한 루비-퍼플 색상. 코에서는 잘 익은 블랙베리, 카시스, 블랙 체리의 진한 과실 향이 첫 번째로 다가옵니다. 이어서 다크 초콜릿, 커피, 삼나무, 바닐라의 향이 복합적으로 펼쳐집니다. 입에서는 풀 바디의 깊고 풍요로운 질감과 함께 벨벳처럼 부드러운 타닌이 느껴집니다. 과실의 풍미가 오래도록 지속되며, 긴 여운과 함께 마무리됩니다.",
    "productionMethod": "선별 수확한 카베르네 소비뇽을 스테인리스 스틸 탱크에서 발효합니다. 온도 조절을 통해 풍부한 과실 풍미를 최대한 추출하며, 이후 프렌치 오크와 아메리칸 오크 배럴에서 16~18개월간 숙성합니다. 병입 전 최소 6개월 추가 숙성 후 출시합니다.",
    "checkpoints": "[{\"label\":\"블렌딩의 예술\",\"text\":\"매 빈티지 나파 밸리 전역의 포도를 블렌딩하여 일관된 스타일과 품질을 유지합니다. 카베르네 소비뇽이 주품종이며, 소량의 메를로와 카베르네 프랑이 복합성을 더합니다.\"},{\"label\":\"오크 숙성\",\"text\":\"프렌치 오크와 아메리칸 오크 배럴을 혼합 사용하여 16~18개월 숙성합니다. 오크에서 나오는 바닐라, 토스트, 향신료 풍미가 과실 풍미와 완벽하게 통합됩니다.\"},{\"label\":\"나파 밸리 테루아\",\"text\":\"나파 밸리의 따뜻한 낮과 서늘한 밤의 기온 차이가 포도의 당도와 산도 균형을 완벽하게 만들어냅니다. 화산성 토양과 충적 토양이 복합적인 미네랄 풍미를 부여합니다.\"}]",
    "isPublished": 1,
    "wineryNameKo": "케이머스 빈야즈",
    "grapeNames": [
      "카베르네 소비뇽",
      "메를로",
      "카베르네 프랑",
      "쁘띠 베르도"
    ]
  },
  {
    "slug": "opus-one-2020",
    "nameKo": "오퍼스 원 2020",
    "nameEn": "Opus One 2020",
    "subtitle": "Napa Valley Red",
    "type": "red",
    "country": "미국",
    "regionL1": "캘리포니아",
    "regionL2": "나파 밸리",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 19,
    "foodPairing": "[\"필레 미뇽\",\"양갈비\",\"트러플 요리\",\"하드 치즈\"]",
    "sweetness": 1,
    "acidity": 3,
    "body": 5,
    "tannin": 5,
    "description": "오퍼스 원은 로버트 몬다비와 바론 필립 드 로트쉴드의 합작으로 탄생한 나파 밸리 최고의 와인입니다.",
    "wineStory": "1979년 로버트 몬다비와 샤토 무통 로쉴드의 바론 필립 드 로트쉴드가 공동으로 설립한 오퍼스 원은 신세계와 구세계 와인 철학의 완벽한 융합입니다.",
    "tastingNotes": "진한 루비색. 블랙 커런트, 블루베리, 제비꽃의 향기. 삼나무, 그래파이트, 다크 카카오의 미묘한 뉘앙스. 팔레트에서는 섬세하고 정교한 타닌과 함께 긴 여운이 느껴집니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": null,
    "grapeNames": [
      "카베르네 소비뇽",
      "메를로",
      "카베르네 프랑",
      "쁘띠 베르도"
    ]
  },
  {
    "slug": "foot-print-sauvignon-blanc",
    "nameKo": "Foot Print Sauvignon Blanc",
    "nameEn": "",
    "type": "white",
    "country": "South Africa",
    "regionL1": "웨스턴 케이프(Western Cape) - 남아공(South Africa)",
    "volume": 750,
    "foodPairing": "[]",
    "description": "풋 프린트 소비뇽 블랑은 남아공 케이프타운의 팔(Parr)지역 과실을 해가 뜨기 전 수확해 만듭니다. 낮은 온도에서의 손 수확을 통해 뚜렷한 신선함을 간직하고 있는 이 화이트 와인은 매우 가볍게 으깬 뒤 차가운 온도에서 자연스럽게 담근 후에 압착에 들어갑니다. 압착이 끝난 이후 36시간 안정기를 거쳐 가장 깔끔한 원액만을 골라 이스트와 함께 3~4주 발효하고 나면 병입을 진행합니다. 조심스럽게 그리고 충분한 안정을 주며 진행되는 양조 방식을 통해 깔끔하고 신선한 구스베리와 사과의 아로마가 풍부하게 피어오르는 것을 느낄 수 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "풋 프린트 소비뇽 블랑",
    "grapeNames": [
      "소비뇽 블랑 (Sauvignon Blanc)"
    ]
  },
  {
    "slug": "foot-print-cabernet-sauvignon",
    "nameKo": "Foot Print Cabernet Sauvignon",
    "nameEn": "",
    "type": "red",
    "country": "South Africa",
    "regionL1": "웨스턴 케이프(Western Cape) - 남아공(South Africa)",
    "volume": 750,
    "servingTempMin": 15,
    "servingTempMax": 17,
    "foodPairing": "[]",
    "description": "풋프린트 카버네 소비뇽은 로손빌 (Rawsonville) 지역의 빈야드에서 수확한 과실로 생산합니다. 손 수확을 통해 얻은 과실들을 가지를 잘 제거한 이후 매우 조심스럽게 으깬 뒤 찬 온도에 잠시 보관합니다. 10일 내 발효 온도가 28도가 되도록 매일 3~4번 펌프를 통해 원액을 혼합하며 3일 이상 침용 과정을 거친 후 껍질을 걸러내어 병입을 진행합니다. 블랙커런트, 신선한 허브, 검은 체리의 느낌을 간직한 이 와인은 우아하고 전형적인 과실미를 전달합니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "풋 프린트 카버네 소비뇽",
    "grapeNames": [
      "카버네 소비뇽 (Cabernet Sauvignon)"
    ]
  },
  {
    "slug": "foot-print-merlot-pinotage",
    "nameKo": "Foot Print Merlot-Pinotage",
    "nameEn": "",
    "type": "red",
    "country": "South Africa",
    "regionL1": "웨스턴 케이프(Western Cape) - 남아공(South Africa)",
    "volume": 750,
    "servingTempMin": 15,
    "servingTempMax": 17,
    "foodPairing": "[]",
    "description": "풋프린트 멀롯-피노타쥐는 2월과 3월에 수확한 멀롯과 피노타쥐를 28~30도 사이에서 온도를 유지하며 각각 발효를 진행합니다. 스테인레스 스틸 탱크에서 젖산 발효 (Malolactic Fermentation)가 완료된 때 블렌딩을 하며 병입 후 일정기간의 안정기를 거친 다음 가볍게 필터링을 진행합니다. 이러한 방식의 블렌딩을 통해 멀롯이 가진 잘 익은 검은 과실과 자두의 향, 그리고 피노타쥐가 간직한 향신료의 느낌이 어우러지고 입안에서 즐거운 과실미와 부드러움을 느낄 수 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "풋 프린트 멀롯-피노타쥐",
    "grapeNames": [
      "멀롯 (Merlot) 50%",
      "피노타쥐 (Pinotage) 50%"
    ]
  },
  {
    "slug": "foot-print-shiraz",
    "nameKo": "Foot Print Shiraz",
    "nameEn": "",
    "type": "red",
    "country": "South Africa",
    "regionL1": "웨스턴 케이프(Western Cape) - 남아공(South Africa)",
    "volume": 750,
    "servingTempMin": 15,
    "servingTempMax": 17,
    "foodPairing": "[]",
    "description": "풋프린트 쉬라즈는 로손빌(Rawsonville)지역과 팔(Paarl) 지역에서 선택된 과실만을 사용하여 만듭니다. 손 수확한 과실을 으깬 뒤에 스테인리스 스틸 탱크에서 9일 넘게 28~30도의 온도를 유지하며 발효합니다. 발효 이후 서서히 공기를 채워 압착을 하여 원액을 만든 뒤 가볍게 필터링을 진행합니다. 검은 후추와 베리류의 아로마에 이어 감초와 삼나무의 향이 복합적이고 진하게 느껴집니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "풋 프린트 쉬라즈",
    "grapeNames": [
      "쉬라즈 (Shiraz)"
    ]
  },
  {
    "slug": "ribshack",
    "nameKo": "Ribshack",
    "nameEn": "",
    "type": "red",
    "country": "South Africa",
    "regionL1": "남아프리카 공화국 (Western Cape - South Africa)",
    "volume": 750,
    "foodPairing": "[]",
    "description": "남아공 최대의 주류회사인 DGB(Douglas Green Bellingham)는 1991년 더글라스 그린과 유니온의 합병으로 탄생했습니다. 그 기원은 1685년 보쉔달(Boschendal)에서 시작된 만큼 오랜 역사를 지니고 있으며, 그만큼 와인 생산의 흉내낼 수 없는 노하우를 바탕으로 브랜드 가치를 지켜오고 있습니다. 전세계에 와인을 비롯한 여러 주류 브랜드를 수출하며 다수의 국가에서 남아공 주류 카테고리의 상위권을 지키고 있으며 해외에도 생산 베이스를 갖추고 있어 세계 유수의 대형 주류회사들과 어깨를 나란히 하고 있습니다. 남아공을 대표하는 보쉔달(Boschendal)과 벨링헴(Bellingham) 와인처럼 오랜 전통을 가진 브랜드와 함께 선키스트 (Sunkissed), 립쉑(Ribshack), 톨 홀스(Tall Horse), 비치하우스(Beachhouse) 등과 같이 참신하고 젊은 포트폴리오를 통해 남아공 와인의 역사는 물론 앞으로의 변화를 느낄 수 있습니다. 또한 DGB는 남아공 최대 주류회사로서, 어린 아이들에 대한 교육 지원과 공정무역을 위한 노력, 탄소배출 방지를 위한 지원 등을 통해 지역 사회에 대한 기업의 책임을 실천하고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "립쉑",
    "grapeNames": [
      "피노타쥐 60%",
      "쉬라즈 40% (피노타쥐 블렌드)"
    ]
  },
  {
    "slug": "sunkissed-sweet-red",
    "nameKo": "Sunkissed Sweet Red",
    "nameEn": "",
    "type": "red",
    "country": "South Africa",
    "regionL1": "남아공(South Africa)",
    "volume": 750,
    "servingTempMin": 7,
    "servingTempMax": 10,
    "foodPairing": "[\"▶ 매콤한 음식\", \"과일 케이크\", \"푸딩\"]",
    "description": "선키스트 레드 와인에서 느낄 수 있는 달콤한 자두 주스의 맛과 부드러운 오크의 향은 마치 달콤한 과일만을 모아 만든 주스를 마셨을 때 입안에서 느껴지는 달콤함과 부드러움을 상상하게 만들어줍니다. 뜨거운 여름 와인을 차갑게 칠링하여 가볍게 친구들과의 모임에서 즐기거나, 추운 겨울 친구들과 모닥불에 모여 기분 좋게 이야기 하기에 최고의 와인입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "선키스트 스위트 레드",
    "grapeNames": [
      "Cinsaut 50%; Ruby Cabernet(C",
      "S와 Carignan의 교배품종) 50%"
    ]
  },
  {
    "slug": "sunkissed-sweet-white",
    "nameKo": "Sunkissed Sweet White",
    "nameEn": "",
    "type": "red",
    "country": "South Africa",
    "regionL1": "남아공(South Africa)",
    "volume": 750,
    "servingTempMin": 7,
    "servingTempMax": 10,
    "foodPairing": "[\"▶ 바비큐 요리\", \"치킨\", \"립 요리\"]",
    "description": "선키스트 스위트 화이트와인은 잘 익은 레몬과 파인애플에서 느껴지는 화려한 향과 꿀과 스파이시한 느낌이 적절하게 균형을 이루는 맛과 함께 조화를 이룹니다.. 친구들과 집에서 배달음식을 먹거나, 소풍을 떠날 때 차갑게 칠링하여 치킨이나 햄버거와 함께 드신다면 정말 최고의 푸드매칭을 즐기실 수 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "선키스트 스위트 화이트",
    "grapeNames": []
  },
  {
    "slug": "sunkissed-sweet-rose",
    "nameKo": "Sunkissed Sweet Rose",
    "nameEn": "",
    "type": "red",
    "country": "South Africa",
    "regionL1": "남아공(South Africa)",
    "volume": 750,
    "servingTempMin": 7,
    "servingTempMax": 10,
    "foodPairing": "[\"▶ 매콤한 음식\", \"과일 케이크\", \"푸딩\"]",
    "description": "선키스트 스위트 로제는 딸기와 달콤한 과일젤리, 장미를 함께 모아놓은 듯한 향과 달콤한 체리의 맛이 느껴집니다. 즙이 많은 과일을 먹었을 때 느껴지는 달콤한 맛과 햡은 차갑게 칠링하여 수영장이나 해변가에서 사람들과 함께 즐기기 가장 좋은 와인입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "선키스트 스위트 로제",
    "grapeNames": []
  },
  {
    "slug": "clos-henri",
    "nameKo": "Clos Henri",
    "nameEn": "",
    "type": "red",
    "country": "New Zealand",
    "regionL1": "Marlborough < New Zealand",
    "volume": 750,
    "foodPairing": "[]",
    "description": "끌로 앙리의 기원은 프랑스 루아르(Loire) 지방 샤비뇰(Chavignol) 마을로 옮겨 갑니다. 프랑스 최고의 소비뇽 블랑 생산자 중 하나인 도멘 앙리 부르주아 (Domaine Henri Bourgeois)는 보다 넓은 세계로 눈을 돌려 천혜의 자연을 품은 뉴질랜드의 말보로(Marlborough)에서 그들의 2번째 성공 스토리를 쓰게 됩니다. 매입한 언덕들은 원래 양의 방목지였지만, 천연적으로 건강하며 토양 자체가 가진 유기물이 완벽한 비율로 배합되어 있습니다. 게다가 여타 다른 와이너리의 고질적인 문제들(Mildew, Oidium)이 발생하지 않기 때문에 화학적인 방법이 전혀 필요 없습니다. 끌로 앙리는 현재 재배면적만 65ha에 이르며, 아직도 끊임없는 연구를 통하여 최고의 와인을 생산하기 위해 노력하고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "끌로 앙리",
    "grapeNames": [
      "철저한 연구를 거듭한 끝에",
      "2002년 90ha에 달하는 언덕 부지를 매입해 소비뇽 블랑과 피노 누아를 심었습니다. 이 두 품종을 심은 계기는 이미 프랑스에서의 경험을 기반으로 하여 자갈",
      "충적토",
      "진흙 등으로 이루어진 토양이 두 품종에 큰 잠재력을 표현할 수 있는 떼루아라고 판단했기 때문입니다."
    ]
  },
  {
    "slug": "clos-henri-2",
    "nameKo": "Clos Henri",
    "nameEn": "",
    "type": "red",
    "country": "New Zealand",
    "regionL1": "Marlborough < New Zealand",
    "volume": 750,
    "foodPairing": "[]",
    "description": "끌로 앙리의 기원은 프랑스 루아르(Loire) 지방 샤비뇰(Chavignol) 마을로 옮겨 갑니다. 프랑스 최고의 소비뇽 블랑 생산자 중 하나인 도멘 앙리 부르주아 (Domaine Henri Bourgeois)는 보다 넓은 세계로 눈을 돌려 천혜의 자연을 품은 뉴질랜드의 말보로(Marlborough)에서 그들의 2번째 성공 스토리를 쓰게 됩니다. 매입한 언덕들은 원래 양의 방목지였지만, 천연적으로 건강하며 토양 자체가 가진 유기물이 완벽한 비율로 배합되어 있습니다. 게다가 여타 다른 와이너리의 고질적인 문제들(Mildew, Oidium)이 발생하지 않기 때문에 화학적인 방법이 전혀 필요 없습니다. 끌로 앙리는 현재 재배면적만 65ha에 이르며, 아직도 끊임없는 연구를 통하여 최고의 와인을 생산하기 위해 노력하고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "끌로 앙리",
    "grapeNames": [
      "철저한 연구를 거듭한 끝에",
      "2002년 90ha에 달하는 언덕 부지를 매입해 소비뇽 블랑과 피노 누아를 심었습니다. 이 두 품종을 심은 계기는 이미 프랑스에서의 경험을 기반으로 하여 자갈",
      "충적토",
      "진흙 등으로 이루어진 토양이 두 품종에 큰 잠재력을 표현할 수 있는 떼루아라고 판단했기 때문입니다."
    ]
  },
  {
    "slug": "clos-henri-3",
    "nameKo": "Clos Henri",
    "nameEn": "",
    "type": "red",
    "country": "New Zealand",
    "regionL1": "Marlborough < New Zealand",
    "volume": 750,
    "foodPairing": "[]",
    "description": "끌로 앙리의 기원은 프랑스 루아르(Loire) 지방 샤비뇰(Chavignol) 마을로 옮겨 갑니다. 프랑스 최고의 소비뇽 블랑 생산자 중 하나인 도멘 앙리 부르주아 (Domaine Henri Bourgeois)는 보다 넓은 세계로 눈을 돌려 천혜의 자연을 품은 뉴질랜드의 말보로(Marlborough)에서 그들의 2번째 성공 스토리를 쓰게 됩니다. 매입한 언덕들은 원래 양의 방목지였지만, 천연적으로 건강하며 토양 자체가 가진 유기물이 완벽한 비율로 배합되어 있습니다. 게다가 여타 다른 와이너리의 고질적인 문제들(Mildew, Oidium)이 발생하지 않기 때문에 화학적인 방법이 전혀 필요 없습니다. 끌로 앙리는 현재 재배면적만 65ha에 이르며, 아직도 끊임없는 연구를 통하여 최고의 와인을 생산하기 위해 노력하고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "끌로 앙리",
    "grapeNames": [
      "철저한 연구를 거듭한 끝에",
      "2002년 90ha에 달하는 언덕 부지를 매입해 소비뇽 블랑과 피노 누아를 심었습니다. 이 두 품종을 심은 계기는 이미 프랑스에서의 경험을 기반으로 하여 자갈",
      "충적토",
      "진흙 등으로 이루어진 토양이 두 품종에 큰 잠재력을 표현할 수 있는 떼루아라고 판단했기 때문입니다."
    ]
  },
  {
    "slug": "clos-henri-4",
    "nameKo": "Clos Henri",
    "nameEn": "",
    "type": "red",
    "country": "New Zealand",
    "regionL1": "Marlborough < New Zealand",
    "volume": 750,
    "foodPairing": "[]",
    "description": "끌로 앙리의 기원은 프랑스 루아르(Loire) 지방 샤비뇰(Chavignol) 마을로 옮겨 갑니다. 프랑스 최고의 소비뇽 블랑 생산자 중 하나인 도멘 앙리 부르주아 (Domaine Henri Bourgeois)는 보다 넓은 세계로 눈을 돌려 천혜의 자연을 품은 뉴질랜드의 말보로(Marlborough)에서 그들의 2번째 성공 스토리를 쓰게 됩니다. 매입한 언덕들은 원래 양의 방목지였지만, 천연적으로 건강하며 토양 자체가 가진 유기물이 완벽한 비율로 배합되어 있습니다. 게다가 여타 다른 와이너리의 고질적인 문제들(Mildew, Oidium)이 발생하지 않기 때문에 화학적인 방법이 전혀 필요 없습니다. 끌로 앙리는 현재 재배면적만 65ha에 이르며, 아직도 끊임없는 연구를 통하여 최고의 와인을 생산하기 위해 노력하고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "끌로 앙리",
    "grapeNames": [
      "철저한 연구를 거듭한 끝에",
      "2002년 90ha에 달하는 언덕 부지를 매입해 소비뇽 블랑과 피노 누아를 심었습니다. 이 두 품종을 심은 계기는 이미 프랑스에서의 경험을 기반으로 하여 자갈",
      "충적토",
      "진흙 등으로 이루어진 토양이 두 품종에 큰 잠재력을 표현할 수 있는 떼루아라고 판단했기 때문입니다."
    ]
  },
  {
    "slug": "clos-henri-5",
    "nameKo": "Clos Henri",
    "nameEn": "",
    "type": "red",
    "country": "New Zealand",
    "regionL1": "Marlborough < New Zealand",
    "volume": 750,
    "foodPairing": "[]",
    "description": "끌로 앙리의 기원은 프랑스 루아르(Loire) 지방 샤비뇰(Chavignol) 마을로 옮겨 갑니다. 프랑스 최고의 소비뇽 블랑 생산자 중 하나인 도멘 앙리 부르주아 (Domaine Henri Bourgeois)는 보다 넓은 세계로 눈을 돌려 천혜의 자연을 품은 뉴질랜드의 말보로(Marlborough)에서 그들의 2번째 성공 스토리를 쓰게 됩니다. 매입한 언덕들은 원래 양의 방목지였지만, 천연적으로 건강하며 토양 자체가 가진 유기물이 완벽한 비율로 배합되어 있습니다. 게다가 여타 다른 와이너리의 고질적인 문제들(Mildew, Oidium)이 발생하지 않기 때문에 화학적인 방법이 전혀 필요 없습니다. 끌로 앙리는 현재 재배면적만 65ha에 이르며, 아직도 끊임없는 연구를 통하여 최고의 와인을 생산하기 위해 노력하고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "끌로 앙리",
    "grapeNames": [
      "철저한 연구를 거듭한 끝에",
      "2002년 90ha에 달하는 언덕 부지를 매입해 소비뇽 블랑과 피노 누아를 심었습니다. 이 두 품종을 심은 계기는 이미 프랑스에서의 경험을 기반으로 하여 자갈",
      "충적토",
      "진흙 등으로 이루어진 토양이 두 품종에 큰 잠재력을 표현할 수 있는 떼루아라고 판단했기 때문입니다."
    ]
  },
  {
    "slug": "cloud-factory-marlborough-sauvignon-blanc",
    "nameKo": "클라우드 팩토리 말보루 소비뇽블랑",
    "nameEn": "Cloud Factory Marlborough Sauvignon Blanc",
    "type": "red",
    "country": "New Zealand",
    "regionL1": "말보루(Marlborough) – New Zealand",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 11,
    "foodPairing": "[\"▶ 아스파라가스\", \"아보카도 샐러드\", \"모든 해산물\", \"굴\"]",
    "description": "Cloud Factory Marlborough Sauvignon Blanc 클라우드 팩토리 소비뇽블랑은 뉴질랜드의 대표 와인산지인 말보루 지역의 대표적인 떼루아라 할 수 있는 Waihopai, Wairau, Awatere Valleys 3 지역의 소비뇽 블랑(Sauvignon Blanc)을 선별하여 만들었습니다. 이 와인을 테이스팅을 하면 잘익은 열대과일의 향과 풍부한 미네랄의 느낌이 있어 전형적인 뉴질랜드 소비뇽블랑 와인의 특징을 느낄 수 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "부티노",
    "grapeNames": []
  },
  {
    "slug": "jules-taylor",
    "nameKo": "Jules Taylor",
    "nameEn": "",
    "type": "red",
    "country": "New Zealand",
    "regionL1": "Marlborough < New Zealand",
    "volume": 750,
    "foodPairing": "[]",
    "description": "뉴질랜드 말보로 출신의 줄스 테일러는 태어난 해에 지역에 첫 포도나무가 심어질 만큼 와인과 인연이 깊은 인물입니다. 그녀는 말보로 지역 포도 재배 가족들과의 끈끈한 유대와 오랜 경험을 바탕으로, 독특한 풍미를 지닌 숨은 과실을 찾아내어 자신만의 스타일로 와인을 만듭니다. 특히 중심부 와이라우 밸리만이 아닌 다양한 소규모 밭에서 포도를 선별함으로써, 그녀의 소비뇽 블랑은 흔히 말보로 스타일로 알려진 풋고추나 구스베리 향보다는 열대과일과 감귤 향이 풍부하게 표현됩니다. 이탈리아 피에몬테와 시칠리아에서의 인생을 바꾼 빈티지를 통해 와인에 대한 철학을 더욱 확고히 다졌고, 귀국 후 뉴질랜드 대표 와이너리의 수석 와인메이커로 활동하다 2001년, 고작 200 케이스로 자신의 브랜드를 시작했습니다. 이후 남편 조지와 함께 안정된 직장을 그만두고, ‘줄스 테일러 와인즈’를 본격적으로 일구어내며 말보로를 대표하는 와인메이커로 자리잡았습니다. 2021년에는 Gourmet Traveller Wine에서 ‘뉴질랜드 올해의 와인메이커’로 선정되며 그 실력을 인정받았습니다. 모든 와인은 뉴질랜드 지속가능한 와인 재배 인증을 받은 포도밭에서 만들어지며, 환경을 고려한 경영, 직원들의 워라밸을 위한 주4일제 도입, 지역 생태 복원을 위한 오파와 강 재조림 프로젝트 등 지속가능성에도 깊은 책임감을 가지고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "줄스 테일러",
    "grapeNames": []
  },
  {
    "slug": "jules-taylor-2",
    "nameKo": "Jules Taylor",
    "nameEn": "",
    "type": "red",
    "country": "New Zealand",
    "regionL1": "Marlborough < New Zealand",
    "volume": 750,
    "foodPairing": "[]",
    "description": "뉴질랜드 말보로 출신의 줄스 테일러는 태어난 해에 지역에 첫 포도나무가 심어질 만큼 와인과 인연이 깊은 인물입니다. 그녀는 말보로 지역 포도 재배 가족들과의 끈끈한 유대와 오랜 경험을 바탕으로, 독특한 풍미를 지닌 숨은 과실을 찾아내어 자신만의 스타일로 와인을 만듭니다. 특히 중심부 와이라우 밸리만이 아닌 다양한 소규모 밭에서 포도를 선별함으로써, 그녀의 소비뇽 블랑은 흔히 말보로 스타일로 알려진 풋고추나 구스베리 향보다는 열대과일과 감귤 향이 풍부하게 표현됩니다. 이탈리아 피에몬테와 시칠리아에서의 인생을 바꾼 빈티지를 통해 와인에 대한 철학을 더욱 확고히 다졌고, 귀국 후 뉴질랜드 대표 와이너리의 수석 와인메이커로 활동하다 2001년, 고작 200 케이스로 자신의 브랜드를 시작했습니다. 이후 남편 조지와 함께 안정된 직장을 그만두고, ‘줄스 테일러 와인즈’를 본격적으로 일구어내며 말보로를 대표하는 와인메이커로 자리잡았습니다. 2021년에는 Gourmet Traveller Wine에서 ‘뉴질랜드 올해의 와인메이커’로 선정되며 그 실력을 인정받았습니다. 모든 와인은 뉴질랜드 지속가능한 와인 재배 인증을 받은 포도밭에서 만들어지며, 환경을 고려한 경영, 직원들의 워라밸을 위한 주4일제 도입, 지역 생태 복원을 위한 오파와 강 재조림 프로젝트 등 지속가능성에도 깊은 책임감을 가지고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "줄스 테일러",
    "grapeNames": []
  },
  {
    "slug": "marlborough-sauvignon-blanc",
    "nameKo": "Marlborough Sauvignon Blanc",
    "nameEn": "",
    "type": "red",
    "country": "New Zealand",
    "regionL1": "말보로(Marlborough)-남섬(South Island), 뉴질랜드",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 11,
    "foodPairing": "[\"▶ 아스파라가스\", \"샐러드\", \"모든 해산물\", \"특히 굴\"]",
    "description": "뉴질랜드 소비뇽 블랑의 대표주자로 미국에서 가장 많이 판매된 소비뇽 블랑 1위에 등록되었던 기록이 있습니다. 국내에서도 높은 인기를 누리고 있으며, Wine Spectator Top100에 4회 선정되었습니다. 이 같은 킴 크로포드 소비뇽 블랑 성공의 비밀은 모두 포도밭과 와이너리에 있습니다. 지속가능한 포도밭 경작, 소규모 블락 수확 그리고 소 배분 발효까지 전 과정에서의 작은 디테일들이 와인의 퀄리티를 좌우한다는 명제를 잘 인식하고 있기 때문에 아주 작은 과정도 허투로 넘어감 없이 완벽한 소비뇽 블랑을 매 해 양조하고 있습니다.다. 구스베리의 뉘앙스와 자른 풀의 향기가 정갈하며, 잘 익은 트로피칼 과일의 느낌과 적절한 조화를 이룬 산도가 돋보이며 좋은 질감을 갖추고 있습니다. 한국음식 중 해물파전, 해물찜과도 잘 어울리며,",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "말보로 소비뇽 블랑",
    "grapeNames": []
  },
  {
    "slug": "pinot-noir",
    "nameKo": "Pinot Noir",
    "nameEn": "",
    "type": "red",
    "country": "New Zealand",
    "regionL1": "말보로(Marlborough) 70% + 센트럴 오타고(Central Otago) 30%,",
    "volume": 750,
    "servingTempMin": 12,
    "servingTempMax": 15,
    "foodPairing": "[\"▶ 오리고기\", \"버섯 리조또\", \"참치회\"]",
    "description": "과일의 신선한 풍미를 보존하기 위하여 일몰 후 수확 한 뒤 5일 동안 스테인레스 발효조 온도를 6°C로 보전하여 풍부한 아로마를 얻어냈습니다. 천연효모를 사용하여 발효 와인에 풍부한 풍미를 부여하고 5개월 동안 프렌치 오크 50%, 스테인레스 50% 숙성을 하였습니다. 심홍색의 와인으로, 다크 체리 및 붉은 과일의 향과 함께 느껴지는 은은한 숲의 향기 그리고 섬세한 오크의 아로마가 완벽한 어울림을 보여줍니다. 생동감이 느껴지는 신선한 딸기, 다크 체리, 레드 커런트의 풍미가 말린 허브 잎과 감칠맛 나는 오크와 만나 복합적인 풍미를 가지게 되었습니다. 부드러운 목넘김을 가진 와인으로 그 여운이 오래 지속됩니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "피노누아",
    "grapeNames": []
  },
  {
    "slug": "chardonnay",
    "nameKo": "Chardonnay",
    "nameEn": "",
    "type": "red",
    "country": "New Zealand",
    "regionL1": "혹스베이(Hawke’s Bay) +  말보로(Marlborough),",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 11,
    "foodPairing": "[\"▶ 카망베르 치즈\", \"연어회\", \"돼지고기 요리\"]",
    "description": "킴크로포드 샤도네이는 북섬의 혹스베이와 남섬의 말보로 지역의 샤도네이를 블랜딩하여 만든 와인입니다. 이런 특징은 북섬이 간직한 단단한 복숭아의 향과 남섬이 간직한 시트러스한 풍미를 느낄 수 있게 합니다. 포도를 으깬 뒤 껍질을 제거하고 순수한 주스만을 가지고 젖산발효를 진행한 뒤 8개월 동안 스테인리스스틸탱크에서 숙성을 진행합니다. 인위적인 느낌 없이 열대과일의 향과 레몬파이에서 여운을 느낄 수 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "샤도네이",
    "grapeNames": [
      "샤도네이는 뉴질랜드를 대표하는 화이트 포도품종 중 하나로 주로 북섬에서 재배되던 품종입니다."
    ]
  },
  {
    "slug": "pinot-gris",
    "nameKo": "Pinot Gris",
    "nameEn": "",
    "type": "red",
    "country": "New Zealand",
    "regionL1": "뉴질랜드(New Zealand)",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 11,
    "foodPairing": "[\"▶ 생선회\", \"향신료를 사용한 동남아 음식 등\"]",
    "description": "킴크로포드 피노그리는 과실이 가진 상큼한 느낌을 유지시키기 위해 아주 서서히 착즙을 진행합니다. 착즙을 통해 나온 주스는 저온을 유지하며 서서히 발효를 진행하는데 이 과정에서 피노그리 특유의 풍미가 나타나게 됩니다. 나무와의 접촉을 최대한으로 줄인 킴크로포드 피노그리는 꿀과 같은 달콤한 느낌의 향과 시트러스한 향이 결합하여 강렬하게 느껴집니다. 그리고 입안을 사과향과 꽃향이 깔끔하고 신선하게 만들어 줍니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "피노그리",
    "grapeNames": [
      "피노그리는 최근 뉴질랜드에서 생산량이 급증하고 있어 소비뇽 블랑의 뒤를 이어 뉴질랜드를 대표하고 있는 품종입니다."
    ]
  },
  {
    "slug": "rose",
    "nameKo": "Rose",
    "nameEn": "",
    "type": "red",
    "country": "New Zealand",
    "regionL1": "뉴질랜드",
    "volume": 750,
    "foodPairing": "[\"▶ 샐러드\", \"식전주\", \"모든 식사\"]",
    "description": "아름다운 페일 핑크 빛의 킴 크로포드 로제는 양조 시 포도 껍질과의 접촉을 최소화하여 만들어지며, 그럼에도 불구하고 생동감 있고 깊은 색상을 띱니다. 생기 넘치는 베리 향과 열대 과일의 향이 피어 오르며, 입 안에서는 부드럽고 감미로운 수박, 딸기, 그리고 멜론의 신선한 맛이 풍부하게 느껴집니다. 식전주로 훌륭하며, 가벼운 샐러드와 식사에 잘 어울립니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "로제",
    "grapeNames": []
  },
  {
    "slug": "vertical-shoot-positioning-vsp",
    "nameKo": "뉴질랜드 말보로는 세계 어느 곳에서도 흉내 낼 수 없는 특유의 떼루아를 반영한 자른 풀 향과 자몽의 강렬한 뉘앙스를 가진 소비뇽 블랑으로 국제적인 명성을 쌓아왔습니다. 시크릿 스톤 소비뇽 블랑은 말보로 지역 중에서도 프리미엄 빈야드에서만 포도를 선별하여 양조하며, 시크릿 스톤 포도가 생산되는 모든 빈야드는 전통적인 Vertical Shoot Positioning (VSP) 방법으로 재배 했습니다.",
    "nameEn": "",
    "type": "red",
    "country": "New Zealand",
    "regionL1": "뉴질랜드",
    "volume": 750,
    "foodPairing": "[]",
    "description": "와인메이커 (Nikolai St George) 의 노트 2022년 말보로 지역은 North Bank 포도밭 전체가 아주 고르게 익은 훌륭한 한 해였습니다. 이곳에서는 포도의 맛이 일찍부터 올라와서 평소보다 일주일씩 일찍 포도를 수확했습니다. 이는 와인에 생동감있는 산도와 긴 피니쉬를 제공했으며, 우리는 이번 빈티지의 보석 같은 소비뇽블랑에 매우 만족합니다. 강한 풍미의 감귤류 과일이 지배적이며 과실의 신선한 산도가 코에서 느껴집니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "Secret Stone Marlborough Sauvignon Blanc",
    "grapeNames": []
  },
  {
    "slug": "urlar-gladstone",
    "nameKo": "Urlar Gladstone",
    "nameEn": "",
    "type": "red",
    "country": "New Zealand",
    "regionL1": "Gladstone < Wairarapa < New Zealand",
    "volume": 750,
    "foodPairing": "[]",
    "description": "URLAR(울라르)는 뉴질랜드 북섬의 프리미엄 와인 산지인 Wairarapa지역의 글래드스톤(Gladstone)에서 시작됩니다. 스코틀랜드어로 *“Of the Earth”*를 뜻하는 이름처럼, 자연과 땅을 존중하는 철학을 바탕으로 설립된 이 와이너리는 설립 초기부터 유기농 인증을 받으며 유기농 와인 생산에 전념해왔습니다. URLAR는 일본의 전통있는 주조 기업인 니시 슈조(Nishi Shuzo) 그룹이 인수한 이후, 최신 양조 설비와 발효 전문가 그룹과의 협업을 통해 더욱 품질 중심의 와인을 생산하고 있습니다. 모든 포도는 손으로 수확되며, 자연의 균형을 해치지 않는 방식으로 정성스럽게 양조됩니다.현재 URLAR는 유럽, 아시아, 북미 등 12개국에 수출되고 있으며, “정직한 와인”이라는 브랜드 이미지로 젊은 소비자층의 신뢰를 얻고 있습니다. 울라르 글래드스톤 소비뇽 블랑 쉬르 리",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "울라르 글래드스톤",
    "grapeNames": [
      "30헥타르에 달하는 단일 포도밭에는 약 10만 그루의 포도나무가 식재되어 있으며",
      "평균 수령은 약 25년입니다. 빙하와 퇴적층으로 형성된 자갈과 점토 기반의 토양은 배수가 뛰어나고 미네랄이 풍부하며",
      "연평균 13~15℃의 서늘한 기후는 피노 누아",
      "샤르도네",
      "피노 그리",
      "소비뇽 블랑 등 섬세한 품종 재배에 이상적입니다."
    ]
  },
  {
    "slug": "urlar-vineyard",
    "nameKo": "Urlar Vineyard",
    "nameEn": "",
    "type": "red",
    "country": "New Zealand",
    "regionL1": "Gladstone < Wairarapa < New Zealand",
    "volume": 750,
    "foodPairing": "[]",
    "description": "URLAR(울라르)는 뉴질랜드 북섬의 프리미엄 와인 산지인 Wairarapa지역의 글래드스톤(Gladstone)에서 시작됩니다. 스코틀랜드어로 *“Of the Earth”*를 뜻하는 이름처럼, 자연과 땅을 존중하는 철학을 바탕으로 설립된 이 와이너리는 설립 초기부터 유기농 인증을 받으며 유기농 와인 생산에 전념해왔습니다. URLAR는 일본의 전통있는 주조 기업인 니시 슈조(Nishi Shuzo) 그룹이 인수한 이후, 최신 양조 설비와 발효 전문가 그룹과의 협업을 통해 더욱 품질 중심의 와인을 생산하고 있습니다. 모든 포도는 손으로 수확되며, 자연의 균형을 해치지 않는 방식으로 정성스럽게 양조됩니다.현재 URLAR는 유럽, 아시아, 북미 등 12개국에 수출되고 있으며, “정직한 와인”이라는 브랜드 이미지로 젊은 소비자층의 신뢰를 얻고 있습니다. Urlar Pinot Noir는 글래드스톤 지역의 클론별 구획에서 최적의 숙성 시점에 손으로 수확한 포도로 만들어집니다. 발효는 토착 효모로 진행되어, 발효 중에는 매일 펀칭 다운 또는 펌프오버를 통해 섬세하게 관리됩니다. 프렌치 오크(20% New)에 담겨 자연적인 말로락틱 발효를 거친 이후 효모 찌꺼기와 함께 8개월간 숙성한 뒤 블렌딩 및 병입을 위해 탱크로 옮겨집니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "울라르 빈야드",
    "grapeNames": [
      "30헥타르에 달하는 단일 포도밭에는 약 10만 그루의 포도나무가 식재되어 있으며",
      "평균 수령은 약 25년입니다. 빙하와 퇴적층으로 형성된 자갈과 점토 기반의 토양은 배수가 뛰어나고 미네랄이 풍부하며",
      "연평균 13~15℃의 서늘한 기후는 피노 누아",
      "샤르도네",
      "피노 그리",
      "소비뇽 블랑 등 섬세한 품종 재배에 이상적입니다."
    ]
  },
  {
    "slug": "secret-stone",
    "nameKo": "Secret Stone",
    "nameEn": "",
    "type": "red",
    "country": "New Zealand",
    "regionL1": "Marlborough, New Zealand",
    "volume": 750,
    "foodPairing": "[]",
    "description": "Secret Stone은 뉴질랜드 남섬, 강바닥 깊은 곳에 숨겨져 있는 신비함과 아름다움을 상징하는 ‘ 그린스톤 ‘으로부터 유래 되었으며 그 이름만큼 일관성 있는 아름다운 와인을 선보이고 있습니다. 뉴질랜드 말보로는 세계 어느 곳에서도 흉내 낼 수 없는 특유의",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "시크릿 스톤",
    "grapeNames": [
      "2004년도 출시된 이후 매 빈티지와 새로운 품종에 대한 좋은 평가를 받으며 와인 전문 매체들의 주목을 받는 와인이자 호주에서 연간 *약 88",
      "000 케이스 (1",
      "056",
      "000병)의 높은 판매고를 기록하고 있는 와인입니다."
    ]
  },
  {
    "slug": "balthasar-ress-riesling-trocken",
    "nameKo": "Balthasar Ress Riesling trocken",
    "nameEn": "",
    "type": "red",
    "country": "Germany",
    "regionL1": "독일",
    "volume": 750,
    "foodPairing": "[]",
    "description": "와인 Von Unserm은 와이너리 Balthasar Ress가 1870년 처음 생산을 시작한 와이너리의 아이콘입니다. 130년이 넘는 시간 동안 생산되며 와인애호가들의 사랑을 받고 있습니다. »Von Unserm« Rheingau Riesling trocken",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "발타자 레스 리슬링 트로켄",
    "grapeNames": [
      "리슬링(Riesling)"
    ]
  },
  {
    "slug": "balthasar-ress-riesling-gg",
    "nameKo": "Balthasar Ress Riesling GG",
    "nameEn": "",
    "type": "red",
    "country": "Germany",
    "regionL1": "독일",
    "volume": 750,
    "foodPairing": "[]",
    "description": "Nussbrunnen 빈야드는 독일 남동쪽 라인가우 지역에 위치한 빈야드입니다. 빈야드의 주변은 개암나무가 심어져 있어 차가운 북풍으로 부터 과실을 보호해주며, 앞에는 라인강이 흐르고 있어 언제나 깨끗한 물을 공급하여 최고의 와인을 위한 포도가 생산되는 떼루아입니다. Hattenheim Nussbrunnen Rheingau Riesling GG trocken",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "발타자 레스 리슬링 그로세스 게벡스",
    "grapeNames": [
      "리슬링(Riesling)"
    ]
  },
  {
    "slug": "balthasar-ress-riesling-kabinett",
    "nameKo": "Balthasar Ress Riesling Kabinett",
    "nameEn": "",
    "type": "red",
    "country": "Germany",
    "regionL1": "독일",
    "volume": 750,
    "foodPairing": "[]",
    "description": "Schützenhaus 빈야드는 Hettenheim의 서쪽에 위치한 빈야드입니다. 빈야드의 이름은 과거 추운겨울이 오기전 포도를 수확하던 시기 새와 짐승들로 부터 포도를 보호하기 위해 이 지역에 설치한 오두막(Haus)과 이 지역을 향해 부는 차가운 동풍(Schutzen)으로 부터 유래되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "발타자 레스 리슬링 카비네트",
    "grapeNames": [
      "리슬링(Riesling)"
    ]
  },
  {
    "slug": "balthasar-ress-riesling-spatlese",
    "nameKo": "Balthasar Ress Riesling Spatlese",
    "nameEn": "",
    "type": "red",
    "country": "Germany",
    "regionL1": "독일",
    "volume": 750,
    "foodPairing": "[]",
    "description": "Nussbrunnen 빈야드는 독일 남동쪽 라인가우 지역에 위치한 빈야드입니다. 빈야드의 주변은 개암나무가 심어져 있어 차가운 북풍으로 부터 과실을 보호해주며, 앞에는 라인강이 흐르고 있어 언제나 깨끗한 물을 공급하여 최고의 와인을 위한 포도가 생산되는 떼루아입니다. Hattenheim Nussbrunnen Rheingau Riesling Spätlese",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "발타자 레스 리슬링 슈페트레제",
    "grapeNames": [
      "리슬링(Riesling)"
    ]
  },
  {
    "slug": "balthasar-ress-riesling-auslese",
    "nameKo": "Balthasar Ress Riesling Auslese",
    "nameEn": "",
    "type": "red",
    "country": "Germany",
    "regionL1": "독일",
    "volume": 750,
    "foodPairing": "[]",
    "description": "Berg Rottland 빈야드는 엄청난 경사의 슬로프에 위치해 있습니다. 빈야드의 이름은 1031년 마인츠 대주교에 의해 이 지역의 농부들에게 미경작지를 하사받은 땅에서 유래되어 ‘개간되어야 하는 언덕’의 의미의 독일어 Rotten이 빈야드의 이름으로 불리어졌습니다. 높은 경사는 항상 햇빛을 받아 포도가 잘 익을 수 있도록 해줍니다. Rüdesheim Berg Rottland",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "발타자 레스 리슬링 아우스레제",
    "grapeNames": [
      "리슬링(Riesling)"
    ]
  },
  {
    "slug": "dr-hermann",
    "nameKo": "Dr. Hermann",
    "nameEn": "",
    "type": "red",
    "country": "Germany",
    "regionL1": "Mosel < Germany",
    "volume": 750,
    "foodPairing": "[]",
    "description": "리슬링 대표 산지 모젤 위르찌히(Ürzig) 지역의 닥터 헤르만은 90도에 가까운 매우 가파른 슬로프에 포도밭이 위치하고 있습니다. 모젤 강에서 반사되는 햇빛과 점판암이 머금은 온기를 머금고 자란 최고급 리슬링을 생산하는 와이너리입니다. 또한 토양의 영향으로 미네랄리티와 함께 풍부한 아로마와 뚜렷한 산도가 잘 어우러지는 리슬링이 인상적입니다. 특히 닥터 헤르만의 트로켄베렌아우스레제(Trockenbeerenauslese, TBA)는 2년 연속 RP Point 100점 수상 내역을 기록할 정도로 훌륭한 퀄리티를 자랑합니다. 400년 넘는 포도 재배 전통 역사를 가지고 있으며 요한 요셉 크리스토펠 에르벤(Joh. Jos. Christoffel Erben)이 위르찌히 지역에 자리 잡고, 2001년부터는 현대 양조를 전공한 손자 크리스티안 헤르만(Christian Hermann)이 운영하고 있습니다. 수확과 포도 선별은 수차례에 걸쳐 수작업으로 진행합니다. 위르찌거 뷔르츠가르텐(Ürziger Würzgarten), 에르데너 프렐랏과 트렙혠(Erden Prälat et Treppchen) 등 약 13.5ha 규모의 포도밭을 소유하고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "닥터 헤르만",
    "grapeNames": []
  },
  {
    "slug": "dr-hermann-2",
    "nameKo": "Dr. Hermann",
    "nameEn": "",
    "type": "red",
    "country": "Germany",
    "regionL1": "Mosel < Germany",
    "volume": 750,
    "foodPairing": "[]",
    "description": "리슬링 대표 산지 모젤 위르찌히(Ürzig) 지역의 닥터 헤르만은 90도에 가까운 매우 가파른 슬로프에 포도밭이 위치하고 있습니다. 모젤 강에서 반사되는 햇빛과 점판암이 머금은 온기를 머금고 자란 최고급 리슬링을 생산하는 와이너리입니다. 또한 토양의 영향으로 미네랄리티와 함께 풍부한 아로마와 뚜렷한 산도가 잘 어우러지는 리슬링이 인상적입니다. 특히 닥터 헤르만의 트로켄베렌아우스레제(Trockenbeerenauslese, TBA)는 2년 연속 RP Point 100점 수상 내역을 기록할 정도로 훌륭한 퀄리티를 자랑합니다. 400년 넘는 포도 재배 전통 역사를 가지고 있으며 요한 요셉 크리스토펠 에르벤(Joh. Jos. Christoffel Erben)이 위르찌히 지역에 자리 잡고, 2001년부터는 현대 양조를 전공한 손자 크리스티안 헤르만(Christian Hermann)이 운영하고 있습니다. 수확과 포도 선별은 수차례에 걸쳐 수작업으로 진행합니다. 위르찌거 뷔르츠가르텐(Ürziger Würzgarten), 에르데너 프렐랏과 트렙혠(Erden Prälat et Treppchen) 등 약 13.5ha 규모의 포도밭을 소유하고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "닥터 헤르만",
    "grapeNames": []
  },
  {
    "slug": "dr-hermann-3",
    "nameKo": "Dr. Hermann",
    "nameEn": "",
    "type": "red",
    "country": "Germany",
    "regionL1": "Mosel < Germany",
    "volume": 750,
    "foodPairing": "[]",
    "description": "리슬링 대표 산지 모젤 위르찌히(Ürzig) 지역의 닥터 헤르만은 90도에 가까운 매우 가파른 슬로프에 포도밭이 위치하고 있습니다. 모젤 강에서 반사되는 햇빛과 점판암이 머금은 온기를 머금고 자란 최고급 리슬링을 생산하는 와이너리입니다. 또한 토양의 영향으로 미네랄리티와 함께 풍부한 아로마와 뚜렷한 산도가 잘 어우러지는 리슬링이 인상적입니다. 특히 닥터 헤르만의 트로켄베렌아우스레제(Trockenbeerenauslese, TBA)는 2년 연속 RP Point 100점 수상 내역을 기록할 정도로 훌륭한 퀄리티를 자랑합니다. 400년 넘는 포도 재배 전통 역사를 가지고 있으며 요한 요셉 크리스토펠 에르벤(Joh. Jos. Christoffel Erben)이 위르찌히 지역에 자리 잡고, 2001년부터는 현대 양조를 전공한 손자 크리스티안 헤르만(Christian Hermann)이 운영하고 있습니다. 수확과 포도 선별은 수차례에 걸쳐 수작업으로 진행합니다. 위르찌거 뷔르츠가르텐(Ürziger Würzgarten), 에르데너 프렐랏과 트렙혠(Erden Prälat et Treppchen) 등 약 13.5ha 규모의 포도밭을 소유하고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "닥터 헤르만",
    "grapeNames": []
  },
  {
    "slug": "dr-hermann-4",
    "nameKo": "Dr. Hermann",
    "nameEn": "",
    "type": "red",
    "country": "Germany",
    "regionL1": "Mosel < Germany",
    "volume": 750,
    "foodPairing": "[]",
    "description": "리슬링 대표 산지 모젤 위르찌히(Ürzig) 지역의 닥터 헤르만은 90도에 가까운 매우 가파른 슬로프에 포도밭이 위치하고 있습니다. 모젤 강에서 반사되는 햇빛과 점판암이 머금은 온기를 머금고 자란 최고급 리슬링을 생산하는 와이너리입니다. 또한 토양의 영향으로 미네랄리티와 함께 풍부한 아로마와 뚜렷한 산도가 잘 어우러지는 리슬링이 인상적입니다. 특히 닥터 헤르만의 트로켄베렌아우스레제(Trockenbeerenauslese, TBA)는 2년 연속 RP Point 100점 수상 내역을 기록할 정도로 훌륭한 퀄리티를 자랑합니다. 400년 넘는 포도 재배 전통 역사를 가지고 있으며 요한 요셉 크리스토펠 에르벤(Joh. Jos. Christoffel Erben)이 위르찌히 지역에 자리 잡고, 2001년부터는 현대 양조를 전공한 손자 크리스티안 헤르만(Christian Hermann)이 운영하고 있습니다. 수확과 포도 선별은 수차례에 걸쳐 수작업으로 진행합니다. 위르찌거 뷔르츠가르텐(Ürziger Würzgarten), 에르데너 프렐랏과 트렙혠(Erden Prälat et Treppchen) 등 약 13.5ha 규모의 포도밭을 소유하고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "닥터 헤르만",
    "grapeNames": []
  },
  {
    "slug": "dr-hermann-5",
    "nameKo": "Dr. Hermann",
    "nameEn": "",
    "type": "red",
    "country": "Germany",
    "regionL1": "Mosel < Germany",
    "volume": 750,
    "foodPairing": "[]",
    "description": "리슬링 대표 산지 모젤 위르찌히(Ürzig) 지역의 닥터 헤르만은 90도에 가까운 매우 가파른 슬로프에 포도밭이 위치하고 있습니다. 모젤 강에서 반사되는 햇빛과 점판암이 머금은 온기를 머금고 자란 최고급 리슬링을 생산하는 와이너리입니다. 또한 토양의 영향으로 미네랄리티와 함께 풍부한 아로마와 뚜렷한 산도가 잘 어우러지는 리슬링이 인상적입니다. 특히 닥터 헤르만의 트로켄베렌아우스레제(Trockenbeerenauslese, TBA)는 2년 연속 RP Point 100점 수상 내역을 기록할 정도로 훌륭한 퀄리티를 자랑합니다. 400년 넘는 포도 재배 전통 역사를 가지고 있으며 요한 요셉 크리스토펠 에르벤(Joh. Jos. Christoffel Erben)이 위르찌히 지역에 자리 잡고, 2001년부터는 현대 양조를 전공한 손자 크리스티안 헤르만(Christian Hermann)이 운영하고 있습니다. 수확과 포도 선별은 수차례에 걸쳐 수작업으로 진행합니다. 위르찌거 뷔르츠가르텐(Ürziger Würzgarten), 에르데너 프렐랏과 트렙혠(Erden Prälat et Treppchen) 등 약 13.5ha 규모의 포도밭을 소유하고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "닥터 헤르만",
    "grapeNames": []
  },
  {
    "slug": "fritz-zimmer-riesling",
    "nameKo": "Fritz Zimmer Riesling",
    "nameEn": "",
    "type": "red",
    "country": "Germany",
    "regionL1": "독일",
    "volume": 750,
    "foodPairing": "[]",
    "description": "리슬링을 사용하여 만든 테이블 와인입니다. 밝은 금색과 함께 파란 사과와 살구의 향이 코를 즐겁게 만들어 줍니다. 이런 과일의 향은",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "프리츠 짐머 리슬링",
    "grapeNames": [
      "가장 독일스러운 포도품종 리슬링(Riesling)은 모젤(Mosel)과 라인가우(Rhinegau)",
      "라인헤센(Rhinehessen) 지역에서 고품질의 와인을 생산하는 매우 중요한 품종입니다."
    ]
  },
  {
    "slug": "fritz-zimmer-riesling-kabinett",
    "nameKo": "Fritz Zimmer Riesling Kabinett",
    "nameEn": "",
    "type": "red",
    "country": "Germany",
    "regionL1": "독일",
    "volume": 750,
    "foodPairing": "[]",
    "description": "모젤의 리슬링을 사용한 프리츠 짐머는 가장 ‘모젤’ 프리츠 짐머 리슬링 카비넷는 드라이 와인으로 사과와 시트러스 향이 코를 먼저 즐겁게 해줍니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "프리츠 짐머 리슬링 카비넷",
    "grapeNames": [
      "가장 독일스러운 포도품종 리슬링(Riesling)은 모젤(Mosel)과 라인가우(Rhinegau)",
      "라인헤센(Rhinehessen) 지역에서 고품질의 와인을 생산하는 매우 중요한 품종입니다."
    ]
  },
  {
    "slug": "fritz-zimmer-riesling-spatlese",
    "nameKo": "Fritz Zimmer Riesling Spatlese",
    "nameEn": "",
    "type": "red",
    "country": "Germany",
    "regionL1": "독일",
    "volume": 750,
    "foodPairing": "[]",
    "description": "모젤 리슬링을 사용한 프리츠 짐머는 가장 ‘모젤’ 리슬링의 우아함을 잘 살린 슈페트레제는 살구와 복숭아의 향이 아주 감미롭게 오랫동안  남아",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "프리츠 짐머 리슬링 슈페트레제",
    "grapeNames": [
      "가장 독일스러운 포도품종 리슬링(Riesling)은 모젤(Mosel)과 라인가우(Rhinegau)",
      "라인헤센(Rhinehessen) 지역에서 고품질의 와인을 생산하는 매우 중요한 품종입니다."
    ]
  },
  {
    "slug": "fritz-zimmer-riesling-auslese",
    "nameKo": "Fritz Zimmer Riesling Auslese",
    "nameEn": "",
    "type": "red",
    "country": "Germany",
    "regionL1": "독일",
    "volume": 750,
    "foodPairing": "[]",
    "description": "모젤 리슬링을 사용한 프리츠 짐머는 가장 ‘모젤’ 아우스레제는 잘 익은 과실만을 골라 만들어 다른 와인보다도 리슬링의 달콤함을 잘 간직하고",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "프리츠 짐머 리슬링 아우스레제",
    "grapeNames": [
      "가장 독일스러운 포도품종 리슬링(Riesling)은 모젤(Mosel)과 라인가우(Rhinegau)",
      "라인헤센(Rhinehessen) 지역에서 고품질의 와인을 생산하는 매우 중요한 품종입니다."
    ]
  },
  {
    "slug": "fritz-zimmer-riesling-2",
    "nameKo": "Fritz Zimmer Riesling",
    "nameEn": "",
    "type": "red",
    "country": "Germany",
    "regionL1": "독일",
    "volume": 750,
    "foodPairing": "[]",
    "description": "리슬링을 사용하여 만든 테이블 와인입니다. 밝은 금색과 함께 파란 사과와 살구의 향이 코를 즐겁게 만들어 줍니다. 이런 과일의 향은",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "프리츠 짐머 리슬링",
    "grapeNames": [
      "가장 독일스러운 포도품종 리슬링(Riesling)은 모젤(Mosel)과 라인가우(Rhinegau)",
      "라인헤센(Rhinehessen) 지역에서 고품질의 와인을 생산하는 매우 중요한 품종입니다."
    ]
  },
  {
    "slug": "fritz-zimmer-riesling-kabinett-2",
    "nameKo": "Fritz Zimmer Riesling Kabinett",
    "nameEn": "",
    "type": "red",
    "country": "Germany",
    "regionL1": "독일",
    "volume": 750,
    "foodPairing": "[]",
    "description": "모젤의 리슬링을 사용한 프리츠 짐머는 가장 ‘모젤’ 프리츠 짐머 리슬링 카비넷는 드라이 와인으로 사과와 시트러스 향이 코를 먼저 즐겁게 해줍니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "프리츠 짐머 리슬링 카비넷",
    "grapeNames": [
      "가장 독일스러운 포도품종 리슬링(Riesling)은 모젤(Mosel)과 라인가우(Rhinegau)",
      "라인헤센(Rhinehessen) 지역에서 고품질의 와인을 생산하는 매우 중요한 품종입니다."
    ]
  },
  {
    "slug": "fritz-zimmer-riesling-spatlese-2",
    "nameKo": "Fritz Zimmer Riesling Spatlese",
    "nameEn": "",
    "type": "red",
    "country": "Germany",
    "regionL1": "독일",
    "volume": 750,
    "foodPairing": "[]",
    "description": "모젤 리슬링을 사용한 프리츠 짐머는 가장 ‘모젤’ 리슬링의 우아함을 잘 살린 슈페트레제는 살구와 복숭아의 향이 아주 감미롭게 오랫동안  남아",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "프리츠 짐머 리슬링 슈페트레제",
    "grapeNames": [
      "가장 독일스러운 포도품종 리슬링(Riesling)은 모젤(Mosel)과 라인가우(Rhinegau)",
      "라인헤센(Rhinehessen) 지역에서 고품질의 와인을 생산하는 매우 중요한 품종입니다."
    ]
  },
  {
    "slug": "fritz-zimmer-riesling-auslese-2",
    "nameKo": "Fritz Zimmer Riesling Auslese",
    "nameEn": "",
    "type": "red",
    "country": "Germany",
    "regionL1": "독일",
    "volume": 750,
    "foodPairing": "[]",
    "description": "모젤 리슬링을 사용한 프리츠 짐머는 가장 ‘모젤’ 아우스레제는 잘 익은 과실만을 골라 만들어 다른 와인보다도 리슬링의 달콤함을 잘 간직하고",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "프리츠 짐머 리슬링 아우스레제",
    "grapeNames": [
      "가장 독일스러운 포도품종 리슬링(Riesling)은 모젤(Mosel)과 라인가우(Rhinegau)",
      "라인헤센(Rhinehessen) 지역에서 고품질의 와인을 생산하는 매우 중요한 품종입니다."
    ]
  },
  {
    "slug": "100",
    "nameKo": "100년 전통의 독일 모젤의  ‘조셉 드라덴‘ 와이너리의 \u000b세미 스위트 골드 스파클링 와인",
    "nameEn": "",
    "type": "red",
    "country": "Germany",
    "regionL1": "아이렌 (Airen), 트레비아노 (Treviano) 블렌딩",
    "volume": 750,
    "servingTempMin": 8,
    "servingTempMax": 10,
    "foodPairing": "[]",
    "description": "*페어링 추천 : 디저트 와인 / 샐러드 / 치즈 옅은 노란색을 띠고 있으며 생동감 있는 버블을 지니고 있어 신선하고 활기찬 느낌을 줍니다. 약간의 당도를 지니고 있어 산미와 적절하게 분배되어 있으며 밸런스가 훌륭한 와인이며 사과, 배 등의 과실향이 매력적인 와인입니다. 독일어로 ‘황금의 꿈＇이라는 뜻을 지닌 골드 트라움 와인은 독일 모젤 지역에서 100년 넘게 가족이 경영하는 유서 깊은 와이너리인 조셉 드라덴 (Josef Drathen)에서 생산한 와인으로 실제 내부에 24K 금이 함유되어 있습니다. 순수한 금을 사용하여 식용이 가능하며 와인을 흔들면 금박이 눈처럼 흩날려서 파티나 기념일에 사용하기 적합한 세계적으로 인기가 있는 와인입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "골드트라움 24K (Goldtraum 24K)",
    "grapeNames": []
  },
  {
    "slug": "salwey",
    "nameKo": "Salwey",
    "nameEn": "",
    "type": "red",
    "country": "Germany",
    "regionL1": "Baden < Germany",
    "volume": 750,
    "foodPairing": "[]",
    "description": "VDP의 전신인 독일 천연 와인 경매 협회의 창립자 중 한 명인 하인리히 슈타이어트(Heinrich Nepomuk Steiert)의 사위 베노 살베이(Benno Salwey)가 1950년도에 와이너리를 설립했습니다. 이후 그의 아들 볼프-디트리히 살베이(Wolf-Dietrich Salwey)가 바덴 지역을 다시 독일 최고 피노 누아 산지로 만들며, 1972년 Salwey가 이 지역의 첫번째 VDP 회원이 되도록 이끌어냈습니다. 현재는 3대인 콘라드 살베이(Konrad Salwey)가 와인 메이킹과 와이너리 운영을 맡고 있습니다. 독일의 다양한 와인 산지에서 직접 경험을 쌓고, University of Geisenheim에서 양조를 전공한 콘라드는 브루군더(Burgunder) 전문가라고도 불리며, 전략적인 와인 개발과 새로운 양조 방식을 적극적으로 시도하며 Salwey만의 순수한 스타일을 향상시키고 있습니다. Spatburgunder Eichberg GG 아이히베르크는 화산암과 화산재 토양으로 구성되어 있으며, 최대 50°의 경사를 가진 지역입니다. 포도밭은 주로 남동쪽을 향하고 있어 뜨거운 태양으로부터 포도나무를 보호하여 이상적인 산도를 유지합니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "살베이",
    "grapeNames": [
      "Salwey는 자연 보호를 최우선 과제로 생각하며",
      "모든 포도를 손 수확하고",
      "포도 품종의 명확한 스타일과 떼루아의 미네랄리티를 보여주는 것이 특징입니다. 특히",
      "1997년 산 속에 건설한 지하 셀러는 Salwey의 자부심이며",
      "일년 내내 11.5~13℃ 시원한 온도를 유지하고",
      "내장된 스프링쿨러 시스템을 통해 습도를 조절하여 완벽한 숙성 환경을 조성하고 있습니다."
    ]
  },
  {
    "slug": "salwey-2",
    "nameKo": "Salwey",
    "nameEn": "",
    "type": "red",
    "country": "Germany",
    "regionL1": "Baden < Germany",
    "volume": 750,
    "foodPairing": "[]",
    "description": "VDP의 전신인 독일 천연 와인 경매 협회의 창립자 중 한 명인 하인리히 슈타이어트(Heinrich Nepomuk Steiert)의 사위 베노 살베이(Benno Salwey)가 1950년도에 와이너리를 설립했습니다. 이후 그의 아들 볼프-디트리히 살베이(Wolf-Dietrich Salwey)가 바덴 지역을 다시 독일 최고 피노 누아 산지로 만들며, 1972년 Salwey가 이 지역의 첫번째 VDP 회원이 되도록 이끌어냈습니다. 현재는 3대인 콘라드 살베이(Konrad Salwey)가 와인 메이킹과 와이너리 운영을 맡고 있습니다. 독일의 다양한 와인 산지에서 직접 경험을 쌓고, University of Geisenheim에서 양조를 전공한 콘라드는 브루군더(Burgunder) 전문가라고도 불리며, 전략적인 와인 개발과 새로운 양조 방식을 적극적으로 시도하며 Salwey만의 순수한 스타일을 향상시키고 있습니다. Spatburgunder Henkenberg GG 헨켄베르크는 화산암, 가넷, 그리고 일부 루스로 구성되어 있으며 이러한 다층의 거친 구조로 인해 포도나무가 깊은 뿌리를 내릴 수 있는 이상적인 환경이 조성되어 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "살베이",
    "grapeNames": [
      "Salwey는 자연 보호를 최우선 과제로 생각하며",
      "모든 포도를 손 수확하고",
      "포도 품종의 명확한 스타일과 떼루아의 미네랄리티를 보여주는 것이 특징입니다. 특히",
      "1997년 산 속에 건설한 지하 셀러는 Salwey의 자부심이며",
      "일년 내내 11.5~13℃ 시원한 온도를 유지하고",
      "내장된 스프링쿨러 시스템을 통해 습도를 조절하여 완벽한 숙성 환경을 조성하고 있습니다."
    ]
  },
  {
    "slug": "salwey-3",
    "nameKo": "Salwey",
    "nameEn": "",
    "type": "red",
    "country": "Germany",
    "regionL1": "Baden < Germany",
    "volume": 750,
    "foodPairing": "[]",
    "description": "VDP의 전신인 독일 천연 와인 경매 협회의 창립자 중 한 명인 하인리히 슈타이어트(Heinrich Nepomuk Steiert)의 사위 베노 살베이(Benno Salwey)가 1950년도에 와이너리를 설립했습니다. 이후 그의 아들 볼프-디트리히 살베이(Wolf-Dietrich Salwey)가 바덴 지역을 다시 독일 최고 피노 누아 산지로 만들며, 1972년 Salwey가 이 지역의 첫번째 VDP 회원이 되도록 이끌어냈습니다. 현재는 3대인 콘라드 살베이(Konrad Salwey)가 와인 메이킹과 와이너리 운영을 맡고 있습니다. 독일의 다양한 와인 산지에서 직접 경험을 쌓고, University of Geisenheim에서 양조를 전공한 콘라드는 브루군더(Burgunder) 전문가라고도 불리며, 전략적인 와인 개발과 새로운 양조 방식을 적극적으로 시도하며 Salwey만의 순수한 스타일을 향상시키고 있습니다. 2주간의 스킨 발효를 거친 뒤 오크 배럴(부르고뉴 스타일의 바리크)에서 숙성됩니다. 12개월 간 배럴 숙성 후 필터링 과정 없이 병입되기 때문에 와인의 복합성과 숙성 잠재력을 높이는 데에 기여합니다. 강렬한 레드 빛을 띄는 이 와인은 숙성된 검은 과실 향에 강하지만 부드러운 타닌이 입 안을 가득 채웁니다. 약간의 감초의 힌트와 샌달우드의 향이 매력을 더합니다. 긴 여운을 가지고 있으며, 10년 간의 숙성 잠재력을 가지고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "살베이",
    "grapeNames": [
      "Salwey는 자연 보호를 최우선 과제로 생각하며",
      "모든 포도를 손 수확하고",
      "포도 품종의 명확한 스타일과 떼루아의 미네랄리티를 보여주는 것이 특징입니다. 특히",
      "1997년 산 속에 건설한 지하 셀러는 Salwey의 자부심이며",
      "일년 내내 11.5~13℃ 시원한 온도를 유지하고",
      "내장된 스프링쿨러 시스템을 통해 습도를 조절하여 완벽한 숙성 환경을 조성하고 있습니다."
    ]
  },
  {
    "slug": "salwey-4",
    "nameKo": "Salwey",
    "nameEn": "",
    "type": "red",
    "country": "Germany",
    "regionL1": "Baden < Germany",
    "volume": 750,
    "foodPairing": "[]",
    "description": "VDP의 전신인 독일 천연 와인 경매 협회의 창립자 중 한 명인 하인리히 슈타이어트(Heinrich Nepomuk Steiert)의 사위 베노 살베이(Benno Salwey)가 1950년도에 와이너리를 설립했습니다. 이후 그의 아들 볼프-디트리히 살베이(Wolf-Dietrich Salwey)가 바덴 지역을 다시 독일 최고 피노 누아 산지로 만들며, 1972년 Salwey가 이 지역의 첫번째 VDP 회원이 되도록 이끌어냈습니다. 현재는 3대인 콘라드 살베이(Konrad Salwey)가 와인 메이킹과 와이너리 운영을 맡고 있습니다. 독일의 다양한 와인 산지에서 직접 경험을 쌓고, University of Geisenheim에서 양조를 전공한 콘라드는 브루군더(Burgunder) 전문가라고도 불리며, 전략적인 와인 개발과 새로운 양조 방식을 적극적으로 시도하며 Salwey만의 순수한 스타일을 향상시키고 있습니다. 키르히베르크는 4.5헥타르의 자연보호구역으로 바덴 지역의 자랑입니다. 척박한 화산암 지형으로 최대 45°의 가파른 경사지에서 남서쪽을 바라보고 있는 포도밭에서만 그랑크뤼(GG)를 재배합니다. 100% 손수확으로 고품질의 포도만 선별하여 일부 줄기를 포함해 2주간의 발효 과정을 거칩니다. 카이저슈툴 지역에서 자란 나무를 사용해 만든 부르고뉴 스타일의 오크 배럴에서 12개월 숙성을 마치면 여과 없이 병입됩니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "살베이",
    "grapeNames": [
      "Salwey는 자연 보호를 최우선 과제로 생각하며",
      "모든 포도를 손 수확하고",
      "포도 품종의 명확한 스타일과 떼루아의 미네랄리티를 보여주는 것이 특징입니다. 특히",
      "1997년 산 속에 건설한 지하 셀러는 Salwey의 자부심이며",
      "일년 내내 11.5~13℃ 시원한 온도를 유지하고",
      "내장된 스프링쿨러 시스템을 통해 습도를 조절하여 완벽한 숙성 환경을 조성하고 있습니다."
    ]
  },
  {
    "slug": "salwey-5",
    "nameKo": "Salwey",
    "nameEn": "",
    "type": "red",
    "country": "Germany",
    "regionL1": "Baden < Germany",
    "volume": 750,
    "foodPairing": "[]",
    "description": "VDP의 전신인 독일 천연 와인 경매 협회의 창립자 중 한 명인 하인리히 슈타이어트(Heinrich Nepomuk Steiert)의 사위 베노 살베이(Benno Salwey)가 1950년도에 와이너리를 설립했습니다. 이후 그의 아들 볼프-디트리히 살베이(Wolf-Dietrich Salwey)가 바덴 지역을 다시 독일 최고 피노 누아 산지로 만들며, 1972년 Salwey가 이 지역의 첫번째 VDP 회원이 되도록 이끌어냈습니다. 현재는 3대인 콘라드 살베이(Konrad Salwey)가 와인 메이킹과 와이너리 운영을 맡고 있습니다. 독일의 다양한 와인 산지에서 직접 경험을 쌓고, University of Geisenheim에서 양조를 전공한 콘라드는 브루군더(Burgunder) 전문가라고도 불리며, 전략적인 와인 개발과 새로운 양조 방식을 적극적으로 시도하며 Salwey만의 순수한 스타일을 향상시키고 있습니다. 화산 기원의 3개의 VDP.Grosse Lage 포도밭에서 자란 포도를 100% 손 수확 및 선별하여 양조합니다. 평균적으로 2주간 스킨 발효를 거치게 되며, 20%는 새 부르고뉴 배럴에, 80%는 사용된 배럴에서 숙성됩니다. 12개월 오크 숙성을 거쳐 필터링 없이 병입되어 복합미와 숙성 잠재력에 기여합니다. 짙은 루비 색을 띄며, 타닌이 강조된 스타일이지만, 쥬시하고 부드러운 벨벳 느낌이 인상적입니다. 전형적인 피노 누아의 풍미를 가지고 있으며, Young할 때도 즐기기 좋은 와인입니다. 15년 가량 훌륭한 숙성 잠재력을 가지고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "살베이",
    "grapeNames": [
      "Salwey는 자연 보호를 최우선 과제로 생각하며",
      "모든 포도를 손 수확하고",
      "포도 품종의 명확한 스타일과 떼루아의 미네랄리티를 보여주는 것이 특징입니다. 특히",
      "1997년 산 속에 건설한 지하 셀러는 Salwey의 자부심이며",
      "일년 내내 11.5~13℃ 시원한 온도를 유지하고",
      "내장된 스프링쿨러 시스템을 통해 습도를 조절하여 완벽한 숙성 환경을 조성하고 있습니다."
    ]
  },
  {
    "slug": "salwey-6",
    "nameKo": "Salwey",
    "nameEn": "",
    "type": "red",
    "country": "Germany",
    "regionL1": "Henckenberg < Baden < Germany",
    "volume": 750,
    "foodPairing": "[]",
    "description": "VDP의 전신인 독일 천연 와인 경매 협회의 창립자 중 한 명인 하인리히 슈타이어트(Heinrich Nepomuk Steiert)의 사위 베노 살베이(Benno Salwey)가 1950년도에 와이너리를 설립했습니다. 이후 그의 아들 볼프-디트리히 살베이(Wolf-Dietrich Salwey)가 바덴 지역을 다시 독일 최고 피노 누아 산지로 만들며, 1972년 Salwey가 이 지역의 첫번째 VDP 회원이 되도록 이끌어냈습니다. 현재는 3대인 콘라드 살베이(Konrad Salwey)가 와인 메이킹과 와이너리 운영을 맡고 있습니다. 독일의 다양한 와인 산지에서 직접 경험을 쌓고, University of Geisenheim에서 양조를 전공한 콘라드는 브루군더(Burgunder) 전문가라고도 불리며, 전략적인 와인 개발과 새로운 양조 방식을 적극적으로 시도하며 Salwey만의 순수한 스타일을 향상시키고 있습니다. 그라우부르군더 오베로트바일 헨켄베르크 GG 헨켄베르크는 화산암, 가넷, 그리고 일부 루스로 구성되어 있으며 이러한 다층의 거친 구조로 인해 포도나무가 깊은 뿌리를 내릴 수 있는 이상적인 환경이 조성되어 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "살베이",
    "grapeNames": [
      "Salwey는 자연 보호를 최우선 과제로 생각하며",
      "모든 포도를 손 수확하고",
      "포도 품종의 명확한 스타일과 떼루아의 미네랄리티를 보여주는 것이 특징입니다. 특히",
      "1997년 산 속에 건설한 지하 셀러는 Salwey의 자부심이며",
      "일년 내내 11.5~13℃ 시원한 온도를 유지하고",
      "내장된 스프링쿨러 시스템을 통해 습도를 조절하여 완벽한 숙성 환경을 조성하고 있습니다."
    ]
  },
  {
    "slug": "bend",
    "nameKo": "우리의 삶은 굴곡지고 굽이쳐 흐르며 조금씩 저마다의 형태를 만들어 갑니다. 직선이 지나온 길에서는 비밀스런 이야기를 찾기 어렵지만, 구부러지고 또 다른 곡선을 이어가는 BEND 에서는 병에 담겨진 와인의 아름다운 여정 - 포도밭에서부터 수확, 양조되어 병입되기까지 - 을 기대할 수 있습니다.",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "미국 - 캘리포니아 (US-CA)",
    "volume": 750,
    "foodPairing": "[]",
    "description": "“Embrace the bends in life’s journey.” BEND 를 음미하며, 와인과 함께 당신의 이야기도 함께 발견해 보세요. 벤드 샤도네이는 복숭아를 비롯한 핵과류를 중심으로 크리미한 버터, 오크가 부여하는 토스티한 느낌, 그리고 석회질 토양을 짐작케 하는 미네랄리티를 보여줍니다. 잘 숙성된 치즈, 살짝 구워낸 조개구이와 어울리며 특히 프라이드 치킨과 환상적 궁합을 자랑합니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "나파밸리에서의 명성에 이어 롱반으로 캘리포니아 최고 가성비 와인을 탄생시킨 카모미에서 2019년 신규 BEND 를 출시합니다.",
    "grapeNames": []
  },
  {
    "slug": "bend-2",
    "nameKo": "우리의 삶은 굴곡지고 굽이쳐 흐르며 조금씩 저마다의 형태를 만들어 갑니다. 직선이 지나온 길에서는 비밀스런 이야기를 찾기 어렵지만, 구부러지고 또 다른 곡선을 이어가는 BEND 에서는 병에 담겨진 와인의 아름다운 여정 - 포도밭에서부터 수확, 양조되어 병입되기까지 - 을 기대할 수 있습니다.",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "미국 - 캘리포니아 (US-CA)",
    "volume": 750,
    "foodPairing": "[]",
    "description": "“Embrace the bends in life’s journey.” BEND 를 음미하며, 와인과 함께 당신의 이야기도 함께 발견해 보세요. 데일리 와인으로 손색 없는 벤드 카버네 소비뇽은 풍부한 블랙 체리와 타바코 노트의 은은함이 조화로우며, 특히 블루치즈, 버섯요리, 갈비찜 등과의 패어링을 추천합니다. Bend Cabernet Sauvignon",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "나파밸리에서의 명성에 이어 롱반으로 캘리포니아 최고 가성비 와인을 탄생시킨 카모미에서 2019년 신규 BEND 를 출시합니다.",
    "grapeNames": []
  },
  {
    "slug": "bend-3",
    "nameKo": "우리의 삶은 굴곡지고 굽이쳐 흐르며 조금씩 저마다의 형태를 만들어 갑니다. 직선이 지나온 길에서는 비밀스런 이야기를 찾기 어렵지만, 구부러지고 또 다른 곡선을 이어가는 BEND 에서는 병에 담겨진 와인의 아름다운 여정 - 포도밭에서부터 수확, 양조되어 병입되기까지 - 을 기대할 수 있습니다.",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "미국 - 캘리포니아 (US-CA)",
    "volume": 750,
    "foodPairing": "[]",
    "description": "“Embrace the bends in life’s journey.” BEND 를 음미하며, 와인과 함께 당신의 이야기도 함께 발견해 보세요. Ca’Momi (카모미) 는 이태리 북부 출신의 와인메이커 3명이 (Dario De Conti, Stefano Migotto, Valentina Guolo-Migotto) 의기투합해 2006년, 나파밸리에 설립한 와이너리입니다. 30년 넘도록 이태리와 미국에서 와인메이킹에 몸담아 온 이들은 구세계 전통의 양조기법과 신세계 최고급 산지로 손꼽히는 나파밸리 포도의 조합으로, 합리적인 가격대의 고품질 와인을 선보이고 있습니다. 85% 이상 나파밸리 포도 사용 시 Napa로 기재할 수 있음에도 불구하고, 카모미는 역사가 깊은 산지인 러더포드, 오크빌을 포함하여 100% 나파밸리 포도만을 사용하여 품질 향상에 노력을 기하고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "나파밸리에서의 명성에 이어 롱반으로 캘리포니아 최고 가성비 와인을 탄생시킨 카모미에서 2019년 신규 BEND 를 출시합니다.",
    "grapeNames": [
      "벤드 멀롯은 미국인들이 가장 즐겨 마시는 품종답게",
      "레드 베리를 비롯한 붉은 과실의 향과 풍미",
      "제비꽃의 아로마",
      "미묘한 코코아의 느낌 등 마시기 쉬운 스타일로 완성되었습니다."
    ]
  },
  {
    "slug": "bend-4",
    "nameKo": "우리의 삶은 굴곡지고 굽이쳐 흐르며 조금씩 저마다의 형태를 만들어 갑니다. 직선이 지나온 길에서는 비밀스런 이야기를 찾기 어렵지만, 구부러지고 또 다른 곡선을 이어가는 BEND 에서는 병에 담겨진 와인의 아름다운 여정 - 포도밭에서부터 수확, 양조되어 병입되기까지 - 을 기대할 수 있습니다.",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "미국 - 캘리포니아 (US-CA)",
    "volume": 750,
    "foodPairing": "[]",
    "description": "“Embrace the bends in life’s journey.” BEND 를 음미하며, 와인과 함께 당신의 이야기도 함께 발견해 보세요. 벤드 레드블렌드는 흠 잡을 데 없이 부드러운 타닌의 질감과 함께 제비꽃, 달콤한 블랙베리를 비롯한 풍부한 과실미, 그리고 후추의 뉘앙스가 어우러집니다. 스튜, 소금에 절인 육류 (cured meat), 립, 베리 코블러 등 sweet & salty 한 음식과의 패어링을 특히 추천합니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "나파밸리에서의 명성에 이어 롱반으로 캘리포니아 최고 가성비 와인을 탄생시킨 카모미에서 2019년 신규 BEND 를 출시합니다.",
    "grapeNames": []
  },
  {
    "slug": "bend-5",
    "nameKo": "우리의 삶은 굴곡지고 굽이쳐 흐르며 조금씩 저마다의 형태를 만들어 갑니다. 직선이 지나온 길에서는 비밀스런 이야기를 찾기 어렵지만, 구부러지고 또 다른 곡선을 이어가는 BEND 에서는 병에 담겨진 와인의 아름다운 여정 - 포도밭에서부터 수확, 양조되어 병입되기까지 - 을 기대할 수 있습니다.",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "미국 - 캘리포니아 (US-CA)",
    "volume": 750,
    "foodPairing": "[]",
    "description": "“Embrace the bends in life’s journey.” BEND 를 음미하며, 와인과 함께 당신의 이야기도 함께 발견해 보세요. 로즈핑크 컬러가 돋보이는 벤드 화이트 진판델은 딸기 한 바구니를 담은 듯한 밝고 풍성한 과실미에 부드럽고 적당한 당도가 잘 조화된 사랑스러운 와인입니다. 플로럴 노트와 백후추의 느낌은 붉은 베리류의 과일이 주도하는 풍미에 깊이를 부여하며 와인을 완성합니다. 크리미한 브리 치즈, 그릴에 구워낸 돼지고기, 레몬 타르트 등과의 패어링을 추천합니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "나파밸리에서의 명성에 이어 롱반으로 캘리포니아 최고 가성비 와인을 탄생시킨 카모미에서 2019년 신규 BEND 를 출시합니다.",
    "grapeNames": []
  },
  {
    "slug": "bend-6",
    "nameKo": "우리의 삶은 굴곡지고 굽이쳐 흐르며 조금씩 저마다의 형태를 만들어 갑니다. 직선이 지나온 길에서는 비밀스런 이야기를 찾기 어렵지만, 구부러지고 또 다른 곡선을 이어가는 BEND 에서는 병에 담겨진 와인의 아름다운 여정 – 포도밭에서부터 수확, 양조되어 병입되기까지 – 을 기대할 수 있습니다.",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "미국 - 캘리포니아 (US-CA)",
    "volume": 750,
    "foodPairing": "[]",
    "description": "“Embrace the bends in life’s journey.” BEND 를 음미하며, 와인과 함께 당신의 이야기도 함께 발견해 보세요. Bend 의 기본급 카버네소비뇽을 추가 숙성하여 만든 리저브 카버네소비뇽으로 검은자두, 야생 블랙베리, 감초, 바닐라, 토바코의 향이 복합적으로 피어나오며, 입 안에서는 미디엄+ 바디감의  벨벳 같은 텍스쳐를 느낄 수 있습니다. 등심 스테이크, 양고기, 등갈비 등의 고기 요리와 토마토 베이스의 리조또, 파스타 요리와 잘 어울립니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "롱반으로 캘리포니아 최고 value와인을 만든 카모미 그룹에서 만든 Bend의 첫 리저브급 와인입니다.",
    "grapeNames": []
  },
  {
    "slug": "repandre",
    "nameKo": "Repandre",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Dry, Red",
    "volume": 750,
    "foodPairing": "[]",
    "description": "청징 및 여과하지 않음 (unfined/unfiltered) 2019 레팡드르 빈티지는 풍부한 비와 함께 그 해를 시작했고 비교적 시원한 기온을 유지한 1년 이었습니다. 덕분에 봉우리와 꽃이 최근 다른 해에 비해 천천히 피어났으며 일정한 온도의 여름을 보내고 난 뒤 수확철까지 온화한 온도를 유지했기 떄문에 정제된 탄닌감과 깊고 아름다운 맛과 향을 가진 포도를 수확할 수 있었습니다. 이 와인은 오크빌의 파워풀하고 강인한 생명력을 가장 잘 보여주고 있는 보르도 블렌딩 카버네 소비뇽 메인의 레드 블렌드 와인으로, 노즈에서는 말린 크랜베리와 세이지(허브류)의 노트가 잘 피어나며, 입 안에서는 체리, 스파이스, 코코아 파우더가 둥글둥글한 탄닌감과 함께 조화롭게 느껴집니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "레팡드르",
    "grapeNames": []
  },
  {
    "slug": "brand-napa-valley-n-95-cabernet-sauvignon",
    "nameKo": "BRAND Napa Valley N°95 Cabernet Sauvignon",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Dry, Red",
    "volume": 750,
    "foodPairing": "[]",
    "description": "배럴 셀렉션. 청징 및 여과하지 않음 (unfined/unfiltered) 와이너리 바로 아래에 위치한 N°95 빈야드는 일부 가장 오랜 수령의 포도나무들과 어린 포도나무들이 함께 자라는 독특한 조합의 포도밭 입니다. 해발고도 약 375m 지대에 위치한 이 곳은 화산재가 얇게 표토를 이루는 토양에서 자라며 생동감 넘치고 힘있는 카버네 소비뇽과 카버네 프랑, 쁘띠 베르도를 생산합니다. 활기차고 풍성한 이 카버네 소비뇽 베이스의 블렌드는 오픈하는 순간부터 존재감을 드러냅니다. 생생한 체리와 카시스, 깊고 부드러운 코코아 파우더 너머로 자두, 향긋한 삼나무, 베이킹 스파이스 등이 뒤따릅니다. N95는 풀바디의 힘있는 레드와인으로, 오랜 기간의 병 숙성을 통해 놀랍게 발전할 것입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "브랜드 나파밸리 N°95 카버네소비뇽",
    "grapeNames": []
  },
  {
    "slug": "brand-napa-valley-estate-cabernet-sauvignon",
    "nameKo": "BRAND Napa Valley Estate Cabernet Sauvignon",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Dry, Red",
    "volume": 750,
    "foodPairing": "[]",
    "description": "배럴 셀렉션. 청징 및 여과하지 않음 (unfined/unfiltered) 프리처드힐 꼭대기에 위치한 빈야드에서는 샌프란시스코 만에서 세인트헬레나 산까지의 파노라마가 펼쳐칩니다. 해발고도 430m, 안개 위에 앉은 포도밭은 카버네 소비뇽에게 적합한 돌이 많은 토양의 덕을 보며 따뜻한 햇볕에 노출되면서도 고도 덕분에 시원한 오후를 맞이합니다. 과실은 천천히 익어 농축미와 함께 산도가 조화를 이루며 탁월한 구조감의 레드와인이 완성됩니다. 이 플래그십 와인은 프리처드힐의 와인답게 힘과 아름다움, 고유의 특징들을 담아냅니다. 블랙베리와 세이지로 대표되는 허브의 아로마, 활력이 느껴지는 팔레트에서는 신선한 자두와 함께 코코아 파우더의 뉘앙스가 깊이감 있게 표현됩니다. 디캔팅 후 음용 시 더욱 매력적이며 5~10년 이후의 변화가 매우 기대되는 와인입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "브랜드 나파밸리 에스테이트 카버네소비뇽",
    "grapeNames": []
  },
  {
    "slug": "barnett-vineyards-cabernet-sauvignon",
    "nameKo": "Barnett Vineyards Cabernet Sauvignon",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Red",
    "volume": 750,
    "foodPairing": "[]",
    "description": "신선한 블랙베리와 제비꽃, 아니스, 모카가 먼저 코에서 감지되며 아사이베리와 민트가 뒤따릅니다. 단단한 타닌은 브리딩을 통해 실키한 질감으로 펼쳐지며, 다크 초콜릿, 삼나무, 갓 갈아낸 원두의 레이어가 느껴집니다. 마운틴 빈야드 와인답게 구조감이 출중하며, 산도는 인텐스한 풍미와 궁극의 밸런스를 이룹니다. 2018 빈티지의 경우 바로 즐겁게 음용 가능하며, 셀러링을 통해 2032년 정도까지의 발전이 기대되는 와인이며, 2019 빈티지는 2035년 까지 맛과 향의 발전을 기대 할 수 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바넷 빈야즈 카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "barnett-vineyards-merlot",
    "nameKo": "Barnett Vineyards Merlot",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Red",
    "volume": 750,
    "foodPairing": "[]",
    "description": "스프링 마운틴의 꼭대기, 암석이 많은 토양에서 자라는 멀롯은 생장을 위해 고군분투 합니다. 밤에서 새벽 사이 신선도를 보존해 수확된 과실은 마운틴 빈야드 특유의 긴 행타임 (hang time: 포도가 시간을 두고 천천히 익어 농밀하면서도 산도를 지키게 됨) 을 고려하여, 껍질로부터 타닌을 부드럽게 그리고 충분히 추출하기 위해 평균보다 긴 시간인 20일 동안의 침용을 거칩니다. 전체적으로 밝은 인상을 주며, 과실미가 활기찹니다. 블랙체리와 블루베리가 향기롭고 시나몬 토스트와 캬라멜의 오크 터치가 고소하게 깊이를 더합니다. 토양으로부터 오는 미네랄리티가 분명하며 유칼립투스의 힌트도 느껴집니다. 입에서 풍성하고 부드럽게 표현되는 타닌, 초콜릿과 체리가 어우러져 긴 여운을 남깁니다. 2018빈티지의 경우 과실미의 매력과 함께 바로 마시기 좋고 2029년 까지 병 숙성을 통해 발전이 기대되며, 2019 빈티지는 2033년까지 셀러링을 통해 맛과 향의 발전이 기대되는 와인입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바넷 빈야즈 멀롯",
    "grapeNames": []
  },
  {
    "slug": "wine",
    "nameKo": "상당한 타닌을 지닌 몸집이 큰 와인으로, 벨벳처럼 펼쳐지는 질감이 더없이 풍요롭고 다크 베리류의 에너지와 매력이 인상적입니다.",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Red",
    "volume": 750,
    "foodPairing": "[]",
    "description": "2018 빈티지의 경우 약 2035~2037년 정도까지 숙성을 통한 발전이 기대되며, 2019 빈티지는 2043년 까지 셀러링을 통해 맛과 향의 발전이 기대되는 와인입니다. 바넷 빈야즈 래틀스네이크 카버네 소비뇽 Barnett Vineyards Rattlesnake Cabernet Sauvignon",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "와이너리 주변에 자주 나타나는 ‘방울뱀’ 이라는 이름의 이 와인은 다크초콜릿과 커피, 블랙커런트와 갓 딴 블랙베리 등이 조화롭습니다. 미네랄과 유칼립투스의 힌트가 포도밭의 테루아를 짐작케 하며 살짝 더해지는 후추와 너트맥 스파이스, 감초 등이 복합미를 더합니다.",
    "grapeNames": []
  },
  {
    "slug": "ca-momi-napa-valley-cabernet-sauvignon",
    "nameKo": "CA’MOMI Napa Valley Cabernet Sauvignon",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "미국 / 나파 밸리 (Napa Valley / US)",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "로버트 파커가 합리적인 가격대의 카버네 소비뇽으로 평가하였으며, 12년 파커 포인트 90점을 받기도 하였습니다. 나파 밸리의 요지 러더포드를 비롯하여 아틀라스 피크 등 나파 밸리 포도만을 100% 사용하여 만든 카버네 소비뇽입니다. 미디엄 바디의 와인으로 오크 풍미와 함께 카시스, 체리 등 잘 익은 붉은 과실 아로마가 약간의 스파이시함, 초콜렛 아로마와 함께 느껴집니다. 부드러운 풍미를 지닌 나파 밸리 와인으로 가벼운 파스타부터 육류 등 다양한 음식과 잘 어울립니다. 2021 Vintage : Sunset International Wine Competition",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "카모미 나파밸리 카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "ca-momi-napa-valley-merlot",
    "nameKo": "CA’MOMI Napa Valley Merlot",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "미국 / 나파 밸리 (Napa Valley / US)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 17,
    "foodPairing": "[]",
    "description": "카모미의 멀롯은 나파밸리 내에서도 최고 품질의 포도를 생산해 내는 대표적 산지인 오크빌의 포도로 만들어 집니다. 붉은 체리와 모과잼, 자두의 향이 느껴지며, 오크 숙성을 짐작케 하는 구운 빵냄새와 바닐라 아로마가 어우러집니다. 소  유  주 : Valentina Guolo-Migotto,",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "카모미 나파밸리 멀롯",
    "grapeNames": [
      "유연한 질감과 풍부한 과실 풍미가 뛰어난 와인으로 멀롯 품종 특유의 부드러운 느낌을 잘 살렸으며",
      "잘 익은 탄닌과 균형 잡힌 산도",
      "복합미가 조화를 이룹니다."
    ]
  },
  {
    "slug": "wine-2",
    "nameKo": "황금빛을 띠며 파인애플, 사과, 배, 바닐라향과 함께 잘 익은 살구, 오크 숙성을 짐작케 하는 스파이스, 구운 향, 크리미한 카라멜, 바닐라 노트가 느껴집니다.",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "미국 / 나파 밸리 (Napa Valley / US)",
    "volume": 750,
    "foodPairing": "[]",
    "description": "처음에는 입 안에서 부드럽고 풍만한 질감을 찾을 수 있으며, 산도와 질감의 조화가 복합적으로 어우러져 긴 여운을 선사합니다. CA’MOMI Napa Valley Chardonnay 소  유  주 : Valentina Guolo-Migotto,",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "나파밸리에서 비교적 서늘한 카네로스 지역의 포도를 사용해 만든 와인으로 풍부한 과실 풍미와 산도가 어우러진 풀바디의 샤도네이 입니다.",
    "grapeNames": []
  },
  {
    "slug": "wine-3",
    "nameKo": "부드러운 타닌과 함께 편안하게 즐길 수 있는 미디엄 바디의 와인으로 유연한 풍미가 특징이며, 균형 잡힌 아로마가 입 안을 부드럽게 맴돕니다.",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "미국 / 캘리포니아",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "캘리포니아 레드 와인의 전형을 잘 보여주는 와인으로, 마치 여름 바캉스를 연상시키는 듯한 잘 익은 블루베리와 블랙베리 등의 과일에 스모키한 아로마가 함께 느껴지며, 진한 자두, 토스티한 풍미가 어우러집니다. 탄탄한 구조에 풍부한 여운이 따라오는, 품격 있는 데일리 와인으로 손색 없는 캘리포니아의 대표 레드 와인입니다. CA’MOMI California Rosso",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "캘리포니아의 선택된 AVA 지역에서의 다양한 포도 품종들로 양조한, 과일 풍미가 잘 살아있는 레드 블렌드 입니다.",
    "grapeNames": []
  },
  {
    "slug": "wine-4",
    "nameKo": "오크 처리를 거치지 않아 산뜻하고, 폭넓은 푸드 매칭이 가능해 대부분의 자리에 어울리는 와인입니다.",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "미국 / 몬터레이 (Monterey/ US)",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 12,
    "foodPairing": "[]",
    "description": "여러 과실 풍미가 신선한 산도와 함께 밸런스를 이루며, 특히 칩스 앤 딥스, 가벼운 해산물, 마일드한 치즈 등과 잘 어울립니다. 피크닉에서 편안하게 마시기 좋은 와인입니다. CA’MOMI Monterey Sauvignon Blanc 소  유  주 : Valentina Guolo-Migotto,",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "카모미 몬터레이 소비뇽 블랑은 활기찬 자몽과 향긋한 멜론의 아로마로 먼저 다가옵니다. 입에서는 밝고 상큼한 레몬과 달콤한 파인애플, 풍부하고 다채로운 캘리포니아 떼루아의 허브가 어우러져 생동감 넘치는 풍미를 느낄 수 있습니다.",
    "grapeNames": []
  },
  {
    "slug": "marcassin-bryant-family-92-herb-lamb-vineyard-5",
    "nameKo": "헬렌은 소노마의 컬트 와인 마카상(Marcassin)을 세우고, 다른 컬트 와인 브라 이언트 패밀리(Bryant Family)의 와인메이커를 지낸 거물로, 이들에게 포도밭을 사 볼 것을 권함은 물론 ’92년에는 친히 이들에게 나파 정상급 포도밭인 허브 램 빈야드(Herb Lamb Vineyard)에서 나온 포도를 구해 주고 양조까지 맡아주었습니다. 놀라운 품질의 이 와인은 출시와 함께 당시의 5대 컬트 와인이라는 날개를 달게 됩니다.",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "세인트 헬레나 (St. Helena)_나파 밸리 (Napa Valley) / 미국",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "현재는 앤 콜긴이 “놀라운 재능(Extremely Talented)”에 찬사를 보낸 여성 천재 와인메이커  앨리슨 토지에(Allison Tauziet)와 前 보르도 그랑크뤼협회장 알랭 레이노(Dr. Alain Reynaud)가 양조 컨설턴트로 활동 중입니다. 뿐만 아니라, 빈야드 매니저인 데이빗 에이브루(David Abreu)는 Screaming Eagle, Harlan, Bryant Family, Sloan 등 컬트 와이너리들의 포도밭을 책임지는 포도밭 조성 및 관리 분야의 대가입니다. 시작부터 최고의 팀과 함께 했지만 자신만의 포도밭이 없던 앤은 마침내 ’96년 St. Helena의 경사면에 1 ha 작은 땅을 매입 틱슨 힐 빈야드(Tychson Hill Vineyard)를 조성했는데, 여기서 만들어진 2002 빈티지 카버네 소비뇽은 로버트 파커로부터 100점 만점을 획득하는 놀라운 위업을 달성했습니다. Colgin IX Estate Red 2014",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "1992년 시작된 콜긴의 역사는 짧지만 그 안에는 와인 업계 최 정상급 인물들의 발자취가 생생합니다. 오너 앤 콜긴(Ann Colgin)은 대학 졸업 후 런던의 소더비 경매소에서 경매사 과정을 이수하면서 와인에 매료되었고, 1988년 나파 밸리 와인 옥션에 골동품 딜러인 남편과 참가하던 중 캘리포니아의 컬트 와인메이커 헬렌 털리(Helen Turley)를 만나게 됩니다.",
    "grapeNames": [
      "2000년에는 역시 St. Helena의 해발 280 ~ 430m 고지대에 바위를 밀고 8.3 ha 포도밭을 조성해 “나인 이스테이트(IX Estate)”라고 명명했는데",
      "높은 고도로 인한 선선한 기온과 미네랄이 풍부한 토양을 지닌 이 밭에는 보르도 품종인 카버네 소비뇽",
      "카버네 프랑",
      "멀롯",
      "쁘띠 베르도 외에 나파에서 매우 귀한 시라가 심겨져 있습니다. 또한 IX Estate의 북단에는 최첨단의 양조장이 지어져 2002 빈티지 부터 콜긴의 모든 와인이 양조되고 있습니다."
    ]
  },
  {
    "slug": "marcassin-bryant-family-92-herb-lamb-vineyard-5-2",
    "nameKo": "헬렌은 소노마의 컬트 와인 마카상(Marcassin)을 세우고, 다른 컬트 와인 브라 이언트 패밀리(Bryant Family)의 와인메이커를 지낸 거물로, 이들에게 포도밭을 사 볼 것을 권함은 물론 ’92년에는 친히 이들에게 나파 정상급 포도밭인 허브 램 빈야드(Herb Lamb Vineyard)에서 나온 포도를 구해 주고 양조까지 맡아주었습니다. 놀라운 품질의 이 와인은 출시와 함께 당시의 5대 컬트 와인이라는 날개를 달게 됩니다.",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "세인트 헬레나 (St. Helena)_나파 밸리 (Napa Valley) / 미국",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "현재는 앤 콜긴이 “놀라운 재능(Extremely Talented)”에 찬사를 보낸 여성 천재 와인메이커  앨리슨 토지에(Allison Tauziet)와 前 보르도 그랑크뤼협회장 알랭 레이노(Dr. Alain Reynaud)가 양조 컨설턴트로 활동 중입니다. 뿐만 아니라, 빈야드 매니저인 데이빗 에이브루(David Abreu)는 Screaming Eagle, Harlan, Bryant Family, Sloan 등 컬트 와이너리들의 포도밭을 책임지는 포도밭 조성 및 관리 분야의 대가입니다. 시작부터 최고의 팀과 함께 했지만 자신만의 포도밭이 없던 앤은 마침내 ’96년 St. Helena의 경사면에 1 ha 작은 땅을 매입 틱슨 힐 빈야드(Tychson Hill Vineyard)를 조성했는데, 여기서 만들어진 2002 빈티지 카버네 소비뇽은 로버트 파커로부터 100점 만점을 획득하는 놀라운 위업을 달성했습니다. Colgin IX Estate Red 2021",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "1992년 시작된 콜긴의 역사는 짧지만 그 안에는 와인 업계 최 정상급 인물들의 발자취가 생생합니다. 오너 앤 콜긴(Ann Colgin)은 대학 졸업 후 런던의 소더비 경매소에서 경매사 과정을 이수하면서 와인에 매료되었고, 1988년 나파 밸리 와인 옥션에 골동품 딜러인 남편과 참가하던 중 캘리포니아의 컬트 와인메이커 헬렌 털리(Helen Turley)를 만나게 됩니다.",
    "grapeNames": [
      "2000년에는 역시 St. Helena의 해발 280 ~ 430m 고지대에 바위를 밀고 8.3 ha 포도밭을 조성해 “나인 이스테이트(IX Estate)”라고 명명했는데",
      "높은 고도로 인한 선선한 기온과 미네랄이 풍부한 토양을 지닌 이 밭에는 보르도 품종인 카버네 소비뇽",
      "카버네 프랑",
      "멀롯",
      "쁘띠 베르도 외에 나파에서 매우 귀한 시라가 심겨져 있습니다. 또한 IX Estate의 북단에는 최첨단의 양조장이 지어져 2002 빈티지 부터 콜긴의 모든 와인이 양조되고 있습니다."
    ]
  },
  {
    "slug": "marcassin-bryant-family-92-herb-lamb-vineyard-5-3",
    "nameKo": "헬렌은 소노마의 컬트 와인 마카상(Marcassin)을 세우고, 다른 컬트 와인 브라 이언트 패밀리(Bryant Family)의 와인메이커를 지낸 거물로, 이들에게 포도밭을 사 볼 것을 권함은 물론 ’92년에는 친히 이들에게 나파 정상급 포도밭인 허브 램 빈야드(Herb Lamb Vineyard)에서 나온 포도를 구해 주고 양조까지 맡아주었습니다. 놀라운 품질의 이 와인은 출시와 함께 당시의 5대 컬트 와인이라는 날개를 달게 됩니다.",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "나파 밸리 (Napa Valley) / 미국",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "현재는 앤 콜긴이 “놀라운 재능(Extremely Talented)”에 찬사를 보낸 여성 천재 와인메이커  앨리슨 토지에(Allison Tauziet)와 前 보르도 그랑크뤼협회장 알랭 레이노(Dr. Alain Reynaud)가 양조 컨설턴트로 활동 중입니다. 뿐만 아니라, 빈야드 매니저인 데이빗 에이브루(David Abreu)는 Screaming Eagle, Harlan, Bryant Family, Sloan 등 컬트 와이너리들의 포도밭을 책임지는 포도밭 조성 및 관리 분야의 대가입니다. 시작부터 최고의 팀과 함께 했지만 자신만의 포도밭이 없던 앤은 마침내 ’96년 St. Helena의 경사면에 1 ha 작은 땅을 매입 틱슨 힐 빈야드(Tychson Hill Vineyard)를 조성했는데, 여기서 만들어진 2002 빈티지 카버네 소비뇽은 로버트 파커로부터 100점 만점을 획득하는 놀라운 위업을 달성했습니다. 카버네 프랑(Cabernet Franc) 12%, 쁘띠 베르도(Petit Verdot) 9%",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "1992년 시작된 콜긴의 역사는 짧지만 그 안에는 와인 업계 최 정상급 인물들의 발자취가 생생합니다. 오너 앤 콜긴(Ann Colgin)은 대학 졸업 후 런던의 소더비 경매소에서 경매사 과정을 이수하면서 와인에 매료되었고, 1988년 나파 밸리 와인 옥션에 골동품 딜러인 남편과 참가하던 중 캘리포니아의 컬트 와인메이커 헬렌 털리(Helen Turley)를 만나게 됩니다.",
    "grapeNames": [
      "캐리아드의 비전은 나파 밸리 심장부에 위치한 바위로 구성된 경사지 테루아에서 오는 풍부함과 힘을 표현하는 것으로",
      "이름만으로도 가치를 입증하는 빈야드 매니저",
      "데이빗 애브루(David Abreu)가 소유 및 관리하는 3개의 빼어난 포도밭(Madrona Ranch",
      "Thorevilos",
      "Howell Mountain)에서 나온 보르도 품종을 사용합니다."
    ]
  },
  {
    "slug": "marcassin-bryant-family-92-herb-lamb-vineyard-5-4",
    "nameKo": "헬렌은 소노마의 컬트 와인 마카상(Marcassin)을 세우고, 다른 컬트 와인 브라 이언트 패밀리(Bryant Family)의 와인메이커를 지낸 거물로, 이들에게 포도밭을 사 볼 것을 권함은 물론 ’92년에는 친히 이들에게 나파 정상급 포도밭인 허브 램 빈야드(Herb Lamb Vineyard)에서 나온 포도를 구해 주고 양조까지 맡아주었습니다. 놀라운 품질의 이 와인은 출시와 함께 당시의 5대 컬트 와인이라는 날개를 달게 됩니다.",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "나파 밸리 (Napa Valley) / 미국",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "현재는 앤 콜긴이 “놀라운 재능(Extremely Talented)”에 찬사를 보낸 여성 천재 와인메이커  앨리슨 토지에(Allison Tauziet)와 前 보르도 그랑크뤼협회장 알랭 레이노(Dr. Alain Reynaud)가 양조 컨설턴트로 활동 중입니다. 뿐만 아니라, 빈야드 매니저인 데이빗 에이브루(David Abreu)는 Screaming Eagle, Harlan, Bryant Family, Sloan 등 컬트 와이너리들의 포도밭을 책임지는 포도밭 조성 및 관리 분야의 대가입니다. 시작부터 최고의 팀과 함께 했지만 자신만의 포도밭이 없던 앤은 마침내 ’96년 St. Helena의 경사면에 1 ha 작은 땅을 매입 틱슨 힐 빈야드(Tychson Hill Vineyard)를 조성했는데, 여기서 만들어진 2002 빈티지 카버네 소비뇽은 로버트 파커로부터 100점 만점을 획득하는 놀라운 위업을 달성했습니다. 앤 콜긴은 경매에서 콜긴 와인을 낙찰 받은 사람이 그녀에게 싸인을 요청하면 싸인 대신 라벨에 키스를 해 입술무늬를 남기는 것으로도 유명하며, 또한 로버트 파커가 나파를 방문시 묵는 호텔로 와인을 보내도록 하여 시음을 하지만 유일하게 콜긴만은 항상 방문하는 것으로도 유명합니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "1992년 시작된 콜긴의 역사는 짧지만 그 안에는 와인 업계 최 정상급 인물들의 발자취가 생생합니다. 오너 앤 콜긴(Ann Colgin)은 대학 졸업 후 런던의 소더비 경매소에서 경매사 과정을 이수하면서 와인에 매료되었고, 1988년 나파 밸리 와인 옥션에 골동품 딜러인 남편과 참가하던 중 캘리포니아의 컬트 와인메이커 헬렌 털리(Helen Turley)를 만나게 됩니다.",
    "grapeNames": [
      "2000년에는 역시 St. Helena의 해발 280 ~ 430m 고지대에 바위를 밀고 8.3 ha 포도밭을 조성해 “나인 이스테이트(IX Estate)”라고 명명했는데",
      "높은 고도로 인한 선선한 기온과 미네랄이 풍부한 토양을 지닌 이 밭에는 보르도 품종인 카버네 소비뇽",
      "카버네 프랑",
      "멀롯",
      "쁘띠 베르도 외에 나파에서 매우 귀한 시라가 심겨져 있습니다. 또한 IX Estate의 북단에는 최첨단의 양조장이 지어져 2002 빈티지 부터 콜긴의 모든 와인이 양조되고 있습니다."
    ]
  },
  {
    "slug": "marcassin-bryant-family-92-herb-lamb-vineyard-5-5",
    "nameKo": "헬렌은 소노마의 컬트 와인 마카상(Marcassin)을 세우고, 다른 컬트 와인 브라 이언트 패밀리(Bryant Family)의 와인메이커를 지낸 거물로, 이들에게 포도밭을 사 볼 것을 권함은 물론 ’92년에는 친히 이들에게 나파 정상급 포도밭인 허브 램 빈야드(Herb Lamb Vineyard)에서 나온 포도를 구해 주고 양조까지 맡아주었습니다. 놀라운 품질의 이 와인은 출시와 함께 당시의 5대 컬트 와인이라는 날개를 달게 됩니다.",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "세인트 헬레나 (St. Helena)_나파 밸리 (Napa Valley) / 미국",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "현재는 앤 콜긴이 “놀라운 재능(Extremely Talented)”에 찬사를 보낸 여성 천재 와인메이커  앨리슨 토지에(Allison Tauziet)와 前 보르도 그랑크뤼협회장 알랭 레이노(Dr. Alain Reynaud)가 양조 컨설턴트로 활동 중입니다. 뿐만 아니라, 빈야드 매니저인 데이빗 에이브루(David Abreu)는 Screaming Eagle, Harlan, Bryant Family, Sloan 등 컬트 와이너리들의 포도밭을 책임지는 포도밭 조성 및 관리 분야의 대가입니다. 시작부터 최고의 팀과 함께 했지만 자신만의 포도밭이 없던 앤은 마침내 ’96년 St. Helena의 경사면에 1 ha 작은 땅을 매입 틱슨 힐 빈야드(Tychson Hill Vineyard)를 조성했는데, 여기서 만들어진 2002 빈티지 카버네 소비뇽은 로버트 파커로부터 100점 만점을 획득하는 놀라운 위업을 달성했습니다. Colgin IX Estate Syrah",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "1992년 시작된 콜긴의 역사는 짧지만 그 안에는 와인 업계 최 정상급 인물들의 발자취가 생생합니다. 오너 앤 콜긴(Ann Colgin)은 대학 졸업 후 런던의 소더비 경매소에서 경매사 과정을 이수하면서 와인에 매료되었고, 1988년 나파 밸리 와인 옥션에 골동품 딜러인 남편과 참가하던 중 캘리포니아의 컬트 와인메이커 헬렌 털리(Helen Turley)를 만나게 됩니다.",
    "grapeNames": [
      "2000년에는 역시 St. Helena의 해발 280 ~ 430m 고지대에 바위를 밀고 8.3 ha 포도밭을 조성해 “나인 이스테이트(IX Estate)”라고 명명했는데",
      "높은 고도로 인한 선선한 기온과 미네랄이 풍부한 토양을 지닌 이 밭에는 보르도 품종인 카버네 소비뇽",
      "카버네 프랑",
      "멀롯",
      "쁘띠 베르도 외에 나파에서 매우 귀한 시라가 심겨져 있습니다. 또한 IX Estate의 북단에는 최첨단의 양조장이 지어져 2002 빈티지 부터 콜긴의 모든 와인이 양조되고 있습니다."
    ]
  },
  {
    "slug": "district-napa-cabernet-sauvignon",
    "nameKo": "District Napa Cabernet Sauvignon",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "▶ 원산지 Napa Valley, California, USA",
    "volume": 750,
    "foodPairing": "[]",
    "description": "와인을 양조하기 위해 사용하는 모든 포도는 손으로 수확하였으며 나파 밸리 전역에서 선별되었습니다.10개월 동안 프렌치오크통에서 숙성되었으며 30%는 뉴오크를 사용하였습니다. 프리시젼(Precision) 와인은 이름에서 의미하듯이 정확, 정밀, 신중한 와인을 만든다는 신념으로 설립하였습니다. 포도를 수확하는 것부터 포장 및디자인 등 모든 와인 제조 과정을 신중하게 관리하여 고품질의 와인을 소비자에게 제공하고 있는 캘리포니아의 유명 생산자입니다. 현재 와이너리 소유주이자 양조업자인 Trevor Sheehan이 10년 전부터 와인메이킹을 하면서 수년에 걸쳐 와인메이커의 특징이 잘 드러나는 와인을 양조하고 있으며 복합미, 캘리포니아의 훌륭하고 독특한 떼루아를 보여주는 와인을 목표로 하고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "디스트릭트 나파 카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "60-12",
    "nameKo": "화이트와인의 프리미엄 산지로 손꼽히는 러시안 리버밸리의 포도를 선별하여 만들었습니다. 기분 좋은 산도와 신선함이 돋보이는 와인으로 60% 뉴 프렌치 오크통에서 12개월동안 숙성되었습니다.",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Russian River Valley, California, USA",
    "volume": 750,
    "foodPairing": "[]",
    "description": "프리시젼(Precision) 와인은 이름에서 의미하듯이 정확, 정밀, 신중한 와인을 만든다는 신념으로 설립하였습니다. 포도를 수확하는 것부터 포장 및디자인 등 모든 와인 제조 과정을 신중하게 관리하여 고품질의 와인을 소비자에게 제공하고 있는 캘리포니아의 유명 생산자입니다. 현재 와이너리 소유주이자 양조업자인 Trevor Sheehan이 10년 전부터 와인메이킹을 하면서 수년에 걸쳐 와인메이커의 특징이 잘 드러나는 와인을 양조하고 있으며 복합미, 캘리포니아의 훌륭하고 독특한 떼루아를 보여주는 와인을 목표로 하고 있습니다. ☆ 소유주 : Trevor Sheehan (트레버 쉬한)",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "디스트릭트 러시안리버밸리 샤도네이\u000bDistrict Russian River Valley Chardonnay",
    "grapeNames": []
  },
  {
    "slug": "eisele-vineyard-altagracia-cabernet-sauvignon",
    "nameKo": "Eisele Vineyard Altagracia Cabernet Sauvignon",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Napa Valley > California > USA",
    "volume": 750,
    "foodPairing": "[]",
    "description": "깊은 루비 빛을 띠며 농익은 블랙체리, 블랙커런트, 블랙베리와 같은 검붉은 과실 향을 중심으로 시나몬과 넛맥, 정향의 은은한 스파이스가 조화를 이룹니다. 시간이 지나며 바이올렛, 장미, 허브, 연필심, 그리고 시가와 같은 아로마가 층층이 드러납니다. 입안에서는 벨벳처럼 부드럽지만 생동감이 있으며, 고운 타닌감이 블랙커런트와 블랙베리의 풍성한 과실 풍미와 입안을 감싸줍니다. 다크초콜릿, 시나몬, 쿠민 등의 향신료 풍미가 긴 피니시로 이어집니다. 마지막까지 짭짤한 미네랄이 균형감을 잡아줍니다. 소고기 스테이크, 풀드 포크, 숙성 치즈와 훌륭한 페어링을 이룹니다. 품   종 :  카버네 소비뇽 88%, 카버네 프랑 7%, 쁘띠 베르도 5%",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "아이슬 빈야드 알타그라시아 카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "four-star-chardonnay",
    "nameKo": "Four star Chardonnay",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "캘리포니아, 미국",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 11,
    "foodPairing": "[]",
    "description": "옅은 금빛의 캘리포니아의 따뜻한 햇살 같은 색을 지닌 화이트 와인으로, 향긋한 버터스카치 캔디향과 갈라 애플향이 후각을 자극하며 기분 좋은 크리미한 토스트 풍미와 함께 바닐라, 패션후르츠의 노트가 팔레트에서 조화롭게 느껴집니다. 섬세한 미네랄 피니쉬와 오래 지속되는 살구의 향이 특징적이어서 과일 샐러드, 소프트 치즈, 그릴드 치킨과 마리아주를 이룰 수 있는 캘리포니아의 라이프 스타일을 한병의 와인으로 표현한 와인입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "포스타 샤도네이",
    "grapeNames": []
  },
  {
    "slug": "four-star-pinot-noir",
    "nameKo": "Four star Pinot Noir",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "캘리포니아, 미국",
    "volume": 750,
    "servingTempMin": 15,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "반짝이는 루비 빛을 띄는 캘리포니아 피노누아 와인으로 향기로운 부케가 특징인 레드와입니다. 석류, 마라치노 체리, 붉은 자두의 붉은 과실의 뉘앙스와 모카, 헤이즐넛 등의 오크 풍미가 조화롭게 느껴지며, 보이젠베리와 벌집향이 피니쉬를 장식합니다. 캐주얼하게 와인만 마시기에도 좋으며, 구운고기류와 메쉬드 감자와도 좋은 페어링을 보여줍니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "포스타 피노누아",
    "grapeNames": []
  },
  {
    "slug": "four-star-red-wine",
    "nameKo": "Four star Red Wine",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "캘리포니아, 미국",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "포스타 레드와인은 와인메이커 다리오 디 콘티의 블렌딩 작품으로, 훌륭한 밸런스를 자랑하는 캘리포니아 레드 블렌드 와인입니다. 설탕에 절인 자두와 빙 체리 (버찌열매), 그리고 시가박스와 스위트 오크의 향이 적절히 조화를 이루며, 입 안에서는 블랙커런트, 라벤더, 말린 라즈베리의 향기로운 풍미와 잘 익은 탄닌감, 육두구의 스파이시한 향이 마지막까지 느껴집니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "포스타 레드 와인",
    "grapeNames": []
  },
  {
    "slug": "decanter-50",
    "nameKo": "Decanter 선정, <죽기 전에 꼭 마셔봐야 할 와인 50선>",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "오크빌(Oakville) - 나파 밸리",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "WS 95점(2017) / WE 94점(2017) / WS 94점(2017) Martha’s Vineyard Cabernet Sauvignon 1961년 조 하이츠(Joe Heitz)에 의해 설립된 하이츠 셀라는 나파 밸리의 발전과 미국 와인의 근대화를 이끌어낸 1세대 생산자로서 오랜 세월 존경 받아왔습니다. 설립 초기부터 품질에 대한 헌신을 핵심 가치로 지켜왔으며 나파 밸리 Sub AVA 6곳에 걸쳐 분포하고 있는 포도밭은 모두 미 농무부 산하 기관 CCOF의 유기농 인증과 NAPA GREEN, FISH FRIENDLY FARMING 등의 친환경 인증을 획득했습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "Wine Spectator 선정, <20세기의 와인 12선> (1974)",
    "grapeNames": [
      "순수함과 농염함을 모두 지닌 와인으로",
      "나파 밸리 테루아의 유니크한 개성과 카버네 소비뇽 품종의 신선한 아로마를 잘 표현해내고 있습니다. 여러 가지 풍미가 서로 잘 융합된 와인으로",
      "풍부한 검붉은 과실의 맛이 이 와인의 시그니처인 민트 풍미와 잘 조화를 이룹니다."
    ]
  },
  {
    "slug": "heitz-cellar",
    "nameKo": "Heitz Cellar",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "하웰 마운틴(Howell Mountain) - 나파 밸리",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "Linda Falls Vineyard Cabernet Sauvignon 1961년 조 하이츠(Joe Heitz)에 의해 설립된 하이츠 셀라는 나파 밸리의 발전과 미국 와인의 근대화를 이끌어낸 1세대 생산자로서 오랜 세월 존경 받아왔습니다. 설립 초기부터 품질에 대한 헌신을 핵심 가치로 지켜왔으며 나파 밸리 Sub AVA 6곳에 걸쳐 분포하고 있는 포도밭은 모두 미 농무부 산하 기관 CCOF의 유기농 인증과 NAPA GREEN, FISH FRIENDLY FARMING 등의 친환경 인증을 획득했습니다. 2018년 4월, 미국의 유서 깊은 농업 기업 로렌스 패밀리(Lawrence Family)가 하이츠 셀라를 인수하면서 와이너리의 역사는 새로운 장을 맞이하였습니다. 이들은 하이츠가 고집해온 고급 와인 양조의 가치를 헌신적으로 지켜나가면서 미래 세대를 위해 하이츠라는 와인 업계의 위대한 유산을 발전시켜 나갈 적임자로 평가받고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "클래식은 영원하다 - 하이츠 셀라",
    "grapeNames": []
  },
  {
    "slug": "heitz-cellar-2",
    "nameKo": "Heitz Cellar",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "러더포드(Rutherford) - 나파 밸리",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "Trail Side Vineyard Cabernet Sauvignon 1961년 조 하이츠(Joe Heitz)에 의해 설립된 하이츠 셀라는 나파 밸리의 발전과 미국 와인의 근대화를 이끌어낸 1세대 생산자로서 오랜 세월 존경 받아왔습니다. 설립 초기부터 품질에 대한 헌신을 핵심 가치로 지켜왔으며 나파 밸리 Sub AVA 6곳에 걸쳐 분포하고 있는 포도밭은 모두 미 농무부 산하 기관 CCOF의 유기농 인증과 NAPA GREEN, FISH FRIENDLY FARMING 등의 친환경 인증을 획득했습니다. 2018년 4월, 미국의 유서 깊은 농업 기업 로렌스 패밀리(Lawrence Family)가 하이츠 셀라를 인수하면서 와이너리의 역사는 새로운 장을 맞이하였습니다. 이들은 하이츠가 고집해온 고급 와인 양조의 가치를 헌신적으로 지켜나가면서 미래 세대를 위해 하이츠라는 와인 업계의 위대한 유산을 발전시켜 나갈 적임자로 평가받고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "클래식은 영원하다 - 하이츠 셀라",
    "grapeNames": []
  },
  {
    "slug": "heitz-cellar-3",
    "nameKo": "Heitz Cellar",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "러더포드(Rutherford), 오크빌(Oakville), 세인트 헬레나(St. Helena),",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "Lot C-91 Cabernet Sauvignon 하이츠 셀라 창립 60주년을 기념하는 퀴베 와인 Lot C-91은 설립자 조 하이츠(Joe Heitz)가 1969년 나파 밸리의 여러 밭에서 수확한 포도를 조합해 만들어낸 프리미엄 와인에 기원을 두고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "클래식은 영원하다 - 하이츠 셀라",
    "grapeNames": []
  },
  {
    "slug": "heitz-cellar-4",
    "nameKo": "Heitz Cellar",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "나파 밸리 - 캘리포니아",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "Napa Valley Cabernet Sauvignon 하이츠가 만드는 기본급 와인으로, 나파 밸리 카버네 소비뇽 와인에서 기대할 수 있는 모든 것을 가장 완벽하게 대변합니다. 동일 산지의 다른 생산자들보다 월등히 긴 숙성 기간을 거쳐 출시되며 장기 숙성에 적합한 와인이면서 동시에 구매 후 바로 마셔도 전혀 손색이 없는 와인입니다. 러더포드, 하웰 마운틴, 세인트 헬레나, 오크빌, 오크놀에 위치한 하이츠 셀라의 빈야드에서 수확한 카버네 소비뇽 포도을 개별적으로 양조, 숙성한 후 블랜딩하여 완성합니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "클래식은 영원하다 - 하이츠 셀라",
    "grapeNames": []
  },
  {
    "slug": "inglenook-rubicon",
    "nameKo": "Inglenook Rubicon",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Red wine",
    "volume": 750,
    "servingTempMin": 15,
    "servingTempMax": 17,
    "foodPairing": "[]",
    "description": "영화 ‘대부’의 감독으로 알려진 ‘프란시스 포드 코폴라’는 1978년, 보르도 스타일의 ‘루비콘’을 첫 빈티지로 출시 합니다. 루비콘은 Inglenook 이스테이트 최고의 레드 와인이었으며, 보르도 스타일의 정상급 와인을 만들고자 하는 프란시스 코폴라의 바램이 드러나는 와인입니다. ‘루비콘(Rubicon)’이라는 이름은 기원전 49년 율리우스 카이사르가 로마를 장악하겠다고 선언하고 반대 세력 사이에 내전을 일으켰던 작은 강의 이름을 따서 붙여졌습니다. 시간이 지남에 따라 \"루비콘 강을 건너다\"라는 문구는 ‘되돌릴 수 없는 행동이나 그 결과가 큰 위험을 안고 가는 혁명적인 행위’를 의미하게 되었습니다. 진홍색, 바이올렛과 농익은 체리 향이 전반적인 아로마를 형성하며 길게 이어지는 감초향과 오크 숙성에서 오는 바닐라 향이 절묘한 조화를 이룹니다. 다크 베리류의 풍부한 미감과 부드러운 탄닌, 탄탄한 구조감이 적당한 무게감과 우아한 밸런스를 이루는 매력적인 와인입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "잉글 눅 루비콘",
    "grapeNames": []
  },
  {
    "slug": "inglenook-blancaneaux",
    "nameKo": "Inglenook Blancaneaux",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "White wine",
    "volume": 750,
    "servingTempMin": 11,
    "servingTempMax": 13,
    "foodPairing": "[]",
    "description": "Rubicon과 마찬가지로 Blancaneaux는 포도의 개성을 한 가지로 설명하지 않고 다양한 복잡미묘한 풍미, 아로마틱 하면서도 다양한 맛과 촘촘한 팔렛을 지향하고 있습니다. 눈부신 황금빛을 띤 이 와인은 레몬 커드, 인동덩굴, 백도의 매력적인 악센트로 시작됩니다. 입 안에서 매끄럽고 크리미한 미감으로 다가오는 농축된 와인으로 카모마일과 과즙이 풍부한 배의 여운으로 마무리되며 전체적으로 활기찬 뉘앙스가 입 안에서 지속됩니다. Wine Enthusiast - 93point (2018)",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "잉글 눅 블랑카누",
    "grapeNames": [
      "벨리즈(Belize)에 있는 호텔 중 하나의 이름에서 따온   Blancaneaux는 프랑스어로 \"하얀 물\"을 의미합니다. Inglenook의 뛰어난 화이트 와인으로 1999년 첫 빈티지부터 2002년 빈티지까지 블랑코는 론 밸리의 세 가지 품종(비오니에",
      "루산",
      "마르산)과 함께 샤도네이를 블렌딩 했지만",
      "2003년 이후부터는 오로지 이 세 가지 론 품종 만을 블렌딩합니다."
    ]
  },
  {
    "slug": "inglenook-cabernet-sauvignon",
    "nameKo": "Inglenook Cabernet Sauvignon",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Red wine",
    "volume": 750,
    "servingTempMin": 15,
    "servingTempMax": 17,
    "foodPairing": "[]",
    "description": "잉글눅 카버네쇼비뇽은 설립자 Gustave Niebaum이 보르도에서 직접 발견한 포도나무를 Inglenook 이스테이트로 가져와 꺾꽂이하여 재배한 포도나무에서 탄생하였습니다. 이 와인은 1941년 \"역대 최고의 레드 와인 중 하나\"라는 명성을 얻기 시작하며, Inglenook Cabernet Sauvignon을 창조한 John Daniel Jr.를 기리며 현재까지도 꾸준히 소량 생산되고있는 잉글눅의 정상급 와인입니다. 1990년 이 빈티지는 Wine Spectator에서 100점 만점을 평가받기 시작하여 현재까지도 여러 매체에서 고득점을 이어나가고 있습니다. 과거부터 오늘날 까지도 이 와인은 ​Inglenook에서 독점적으로 재배된 자체생산 유기농 포도로만 양조됩니다. 짙은 루비색. 검붉은 체리, 블루베리, 초콜릿, 타바코와 함께 느낄 수 있는 달콤하고 토스티한 오크의 향이 매력적인 모습을 보여줍니다. 잘 익은 과실 향과 스파이스의 풍미는 부드러운 미감과 함께 긴 피니쉬로 이어집니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "잉글 눅 까버네쇼비뇽",
    "grapeNames": []
  },
  {
    "slug": "cellartracker-91point-2017",
    "nameKo": "Inglenook 1882",
    "nameEn": "CellarTracker - 91point (2017)",
    "type": "red",
    "country": "USA",
    "regionL1": "Red wine",
    "volume": 750,
    "servingTempMin": 15,
    "servingTempMax": 17,
    "foodPairing": "[]",
    "description": "CellarTracker - 91point (2017) Wine Advocate - 95 point (2017) Robert Parker - 95 point (2017)",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "잉글 눅 1882",
    "grapeNames": []
  },
  {
    "slug": "2018-demeine-estates-2020-ink-grade-matt-taylor",
    "nameKo": "잉크 그레이드는 2018년 하이츠 셀라를 인수한 더마인 이스테이트(Demeine Estates)가 2020년 하이츠 셀라 소유의 빈야드 ‘잉크 그레이드(Ink Grade)’를 바탕으로 와인메이커 맷 테일러(Matt Taylor)를 통해 독립 프로젝트로서 시작한 와이너리입니다.",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "하웰 마운틴 AVA",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "와이너리 자체는 새롭게 설립되었지만, 잉크 그레이드 빈야드의 역사는 나파 밸리의 시작과 함께합니다. 1873년 나파 밸리의 초기 정착자 중 하나였던 테론 잉크(Theron Ink)가 하웰 마운틴의 땅에 포도 나무를 심으면서 시작된 잉크 그레이드 빈야드는 1989년 하이츠 셀라에 인수되었고 이후 하이츠 셀라의 나파 밸리 카버네 소비뇽 와인 생산에 사용되었습니다. 더마인 이스테이트는 이 빈야드가 가진 가능성에 주목하여 이를 하이츠 셀라와는 다른 별개의 브랜드로 독립시켰으며,  아로호 이스테이트와 도멘 뒤작에서 와인 양조 경험을 쌓은 맷 테일러를 통해 하웰 마운틴 AVA의 카버네 소비뇽을 비롯 다양한 와인을 소량 생산하고 있습니다. 나파 카운티 최대의 바이오 다이나믹 인증 빈야드(Demeter Certified Biodynamic Ranch)이기도 한 잉크 그레이드 빈야드는 하웰 마운틴 AVA의 북동쪽, 바카 산맥의 꼭대기에 위치하고 있습니다. 빈야드의 주변은 세콰이아 나무와 소나무가 빽빽하게 숲을 이루고 있는데, 잉크 그레이드는 이러한 자연과 그 속에 살고 있는 여러 생명체들에 대한 감사의 마음을 레이블에 그려내고 있습니다. - 설립연도: 2020년                                     - 소유주: Demeine Estates",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "잉크 그레이드",
    "grapeNames": []
  },
  {
    "slug": "2018-demeine-estates-2020-ink-grade-matt-taylor-2",
    "nameKo": "잉크 그레이드는 2018년 하이츠 셀라를 인수한 더마인 이스테이트(Demeine Estates)가 2020년 하이츠 셀라 소유의 빈야드 ‘잉크 그레이드(Ink Grade)’를 바탕으로 와인메이커 맷 테일러(Matt Taylor)를 통해 독립 프로젝트로서 시작한 와이너리입니다.",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "나파 밸리 AVA (88% 나파 밸리, 12% 하웰 마운틴)",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "와이너리 자체는 새롭게 설립되었지만, 잉크 그레이드 빈야드의 역사는 나파 밸리의 시작과 함께합니다. 1873년 나파 밸리의 초기 정착자 중 하나였던 테론 잉크(Theron Ink)가 하웰 마운틴의 땅에 포도 나무를 심으면서 시작된 잉크 그레이드 빈야드는 1989년 하이츠 셀라에 인수되었고 이후 하이츠 셀라의 나파 밸리 카버네 소비뇽 와인 생산에 사용되었습니다. 더마인 이스테이트는 이 빈야드가 가진 가능성에 주목하여 이를 하이츠 셀라와는 다른 별개의 브랜드로 독립시켰으며,  아로호 이스테이트와 도멘 뒤작에서 와인 양조 경험을 쌓은 맷 테일러를 통해 하웰 마운틴 AVA의 카버네 소비뇽을 비롯 다양한 와인을 소량 생산하고 있습니다. 나파 카운티 최대의 바이오 다이나믹 인증 빈야드(Demeter Certified Biodynamic Ranch)이기도 한 잉크 그레이드 빈야드는 하웰 마운틴 AVA의 북동쪽, 바카 산맥의 꼭대기에 위치하고 있습니다. 빈야드의 주변은 세콰이아 나무와 소나무가 빽빽하게 숲을 이루고 있는데, 잉크 그레이드는 이러한 자연과 그 속에 살고 있는 여러 생명체들에 대한 감사의 마음을 레이블에 그려내고 있습니다. - 설립연도: 2020년                                     - 소유주: Demeine Estates",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "잉크 그레이드",
    "grapeNames": []
  },
  {
    "slug": "2018-demeine-estates-2020-ink-grade-matt-taylor-3",
    "nameKo": "잉크 그레이드는 2018년 하이츠 셀라를 인수한 더마인 이스테이트(Demeine Estates)가 2020년 하이츠 셀라 소유의 빈야드 ‘잉크 그레이드(Ink Grade)’를 바탕으로 와인메이커 맷 테일러(Matt Taylor)를 통해 독립 프로젝트로서 시작한 와이너리입니다.",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "나파 밸리 AVA (87% 나파 밸리, 13% 하웰 마운틴)",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "와이너리 자체는 새롭게 설립되었지만, 잉크 그레이드 빈야드의 역사는 나파 밸리의 시작과 함께합니다. 1873년 나파 밸리의 초기 정착자 중 하나였던 테론 잉크(Theron Ink)가 하웰 마운틴의 땅에 포도 나무를 심으면서 시작된 잉크 그레이드 빈야드는 1989년 하이츠 셀라에 인수되었고 이후 하이츠 셀라의 나파 밸리 카버네 소비뇽 와인 생산에 사용되었습니다. 더마인 이스테이트는 이 빈야드가 가진 가능성에 주목하여 이를 하이츠 셀라와는 다른 별개의 브랜드로 독립시켰으며,  아로호 이스테이트와 도멘 뒤작에서 와인 양조 경험을 쌓은 맷 테일러를 통해 하웰 마운틴 AVA의 카버네 소비뇽을 비롯 다양한 와인을 소량 생산하고 있습니다. 나파 카운티 최대의 바이오 다이나믹 인증 빈야드(Demeter Certified Biodynamic Ranch)이기도 한 잉크 그레이드 빈야드는 하웰 마운틴 AVA의 북동쪽, 바카 산맥의 꼭대기에 위치하고 있습니다. 빈야드의 주변은 세콰이아 나무와 소나무가 빽빽하게 숲을 이루고 있는데, 잉크 그레이드는 이러한 자연과 그 속에 살고 있는 여러 생명체들에 대한 감사의 마음을 레이블에 그려내고 있습니다. - 설립연도: 2020년                                     - 소유주: Demeine Estates",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "잉크 그레이드",
    "grapeNames": []
  },
  {
    "slug": "2018-demeine-estates-2020-ink-grade-matt-taylor-4",
    "nameKo": "잉크 그레이드는 2018년 하이츠 셀라를 인수한 더마인 이스테이트(Demeine Estates)가 2020년 하이츠 셀라 소유의 빈야드 ‘잉크 그레이드(Ink Grade)’를 바탕으로 와인메이커 맷 테일러(Matt Taylor)를 통해 독립 프로젝트로서 시작한 와이너리입니다.",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "나파 밸리 AVA",
    "volume": 750,
    "servingTempMin": 8,
    "servingTempMax": 10,
    "foodPairing": "[]",
    "description": "와이너리 자체는 새롭게 설립되었지만, 잉크 그레이드 빈야드의 역사는 나파 밸리의 시작과 함께합니다. 1873년 나파 밸리의 초기 정착자 중 하나였던 테론 잉크(Theron Ink)가 하웰 마운틴의 땅에 포도 나무를 심으면서 시작된 잉크 그레이드 빈야드는 1989년 하이츠 셀라에 인수되었고 이후 하이츠 셀라의 나파 밸리 카버네 소비뇽 와인 생산에 사용되었습니다. 더마인 이스테이트는 이 빈야드가 가진 가능성에 주목하여 이를 하이츠 셀라와는 다른 별개의 브랜드로 독립시켰으며,  아로호 이스테이트와 도멘 뒤작에서 와인 양조 경험을 쌓은 맷 테일러를 통해 하웰 마운틴 AVA의 카버네 소비뇽을 비롯 다양한 와인을 소량 생산하고 있습니다. 나파 카운티 최대의 바이오 다이나믹 인증 빈야드(Demeter Certified Biodynamic Ranch)이기도 한 잉크 그레이드 빈야드는 하웰 마운틴 AVA의 북동쪽, 바카 산맥의 꼭대기에 위치하고 있습니다. 빈야드의 주변은 세콰이아 나무와 소나무가 빽빽하게 숲을 이루고 있는데, 잉크 그레이드는 이러한 자연과 그 속에 살고 있는 여러 생명체들에 대한 감사의 마음을 레이블에 그려내고 있습니다. - 설립연도: 2020년                                     - 소유주: Demeine Estates",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "잉크 그레이드",
    "grapeNames": []
  },
  {
    "slug": "iter-chardonnay",
    "nameKo": "Iter Chardonnay",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "캘리포니아, 미국",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 11,
    "foodPairing": "[]",
    "description": "오픈하자마자 풍겨오는 오렌지와 살구, 꽃다발향이 향기롭게 후각을 자극하며 새콤달콤한 레몬과 꿀을 바른듯한 복숭아향이 한층 더 풍부한 향을 만듭니다. 크리스피하여 기분 좋은 산도가 입 안에서 청사과, 오렌지 그리고 바닐라와 어우러지며, 버터스카치의 달콤함이 피니쉬까지 이어집니다. 밸런스가 매우 뛰어나며 입을 즐겁게 하는 신선한 과일의 풍미가 살아있어, 가볍게 마시기에 부담이 없는 와인입니다. 해산물 요리와 카망베르 치즈 혹은 다른 부드러운 치즈와 함께 즐기기 좋습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "이터 샤도네이",
    "grapeNames": []
  },
  {
    "slug": "iter-pinot-noir",
    "nameKo": "Iter Pinot Noir",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "캘리포니아, 미국",
    "volume": 750,
    "servingTempMin": 14,
    "servingTempMax": 15,
    "foodPairing": "[]",
    "description": "제일 먼저 설탕에 절인 오렌지, 붉은 자두 그리고 향신료의 향이 느껴지고 그 후에 붉은 과실의 풍부한 향이 듬뿍 더해집니다. 경쾌한 산도와 잘 짜여진 뼈대의 구조감을 가졌으며, 피노누아 특유의 벨벳 같은 탄닌은 와인의 맛을 더욱 풍부하게 합니다. 체리껍질의 향이 감싸여진 부드러운 바닐라향이 피니쉬의 여운을 더욱 길게 느낄 수 있도록 합니다. 가볍게 즐기기 좋은 피노누아로 빠에야 혹은 향이 진하지 않은 치즈와 함께 페어링 하는 것을 추천합니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "이터 피노누아",
    "grapeNames": []
  },
  {
    "slug": "iter-cabernet-suavignon",
    "nameKo": "Iter Cabernet Suavignon",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "캘리포니아, 미국",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 17,
    "foodPairing": "[]",
    "description": "캘리포니아의 포도로 만들어진 이터 카버네 소비뇽은 카버네 특유의 블랙베리와 은은한 향신료의 향이 오크로 인한 바닐라향과 조화롭게 어우러집니다. 입 안에서 미끄러지듯 부드럽게 느껴지는 탄닌은 향신료의 뉘앙스와 균형을 이루며 더욱 풍부한 맛을 선사합니다. 꿀 바른 블랙베리와 구운 파이의 맛이 긴 피니쉬의 여운을 함께합니다. 구운 스테이크, 양고기와 잘 어울리는 이터의 카버네 소비뇽입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "이터 카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "10-15-20",
    "nameKo": "포도는 잘 익어 풍미가 절정에 이른 시점에 수확되어 10~15일간 발효 과정을 거칩니다. 이후 말로락틱 발효를 거쳐 산미를 부드럽게 조정하고, 입안의 질감을 한층 풍부하게 만듭니다. 전체의 20%를 새 프렌치 오크 배럴에서 숙성시켜 균형감과 복합미를 더했습니다.",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "California, USA",
    "volume": 750,
    "foodPairing": "[]",
    "description": "향에서는 진한 다크 프루트, 시나몬, 정향, 은은한 오크의 아로마가 풍성하게 피어나며, 입안에서는 블랙체리와 블랙베리의 농축된 풍미가 바닐라와 토스티 오크 뉘앙스와 어우러져 긴 여운과 부드러운 타닌감을 남깁니다. 풀바디 와인으로 풍미가 진한 요리와 잘 어울리며, 풍부한 타닌이 기름진 음식의 느끼함을 잡아줍니다. 양념이 잘 배인 스테이크나 향신료를 더한 로스트 요리와 함께 즐기기에 이상적입니다. Deutsch Family Wine & Spirits(DFWS)는 1981년 설립된 가족 경영 와인·스피릿 전문 기업으로, 9개국에서 Josh Cellars 포함 22개의 와인·스피릿 브랜드를 수입·유통하며, 미국 내 전체 와인 회사 중 3위, 프리미엄 테이블 와인 부문에서는 1위를 차지한 글로벌 주류 기업입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "Josh Cellars의 카버네 소비뇽은 브랜드의 시작을 알린 첫 번째 와인으로, 이후 조쉬의 모든 와인에 적용되는 높은 품질 기준을 세운 상징적인 제품입니다.",
    "grapeNames": []
  },
  {
    "slug": "wine-5",
    "nameKo": "열대 과일과 시트러스의 향에 은은한 오크 뉘앙스가 조화를 이루며, 입안에서는 상큼한 시트러스와 달콤한 허니, 부드러운 오크 캐릭터가 균형을 이룹니다. 잘 익은 복숭아, 레몬 오일, 크림 브륄레의 섬세한 뉘앙스가 어우러지며, 어느 한 가지 풍미도 과하지 않게 완벽한 밸런스를 자랑하는 와인입니다.",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "California, USA",
    "volume": 750,
    "foodPairing": "[]",
    "description": "세심하게 빚어진 이 와인은 그 자체로도 매력적입니다. 버터와 허브를 사용한 요리의 풍미를 한층 살려주며, 구운 생선이나 신선한 채소를 곁들인 로스트 치킨과도 잘 어울립니다. Deutsch Family Wine & Spirits(DFWS)는 1981년 설립된 가족 경영 와인·스피릿 전문 기업으로, 9개국에서 Josh Cellars 포함 22개의 와인·스피릿 브랜드를 수입·유통하며, 미국 내 전체 와인 회사 중 3위, 프리미엄 테이블 와인 부문에서는 1위를 차지한 글로벌 주류 기업입니다. 2007년 미국 캘리포니아에서 설립된 프리미엄 와인 브랜드 Josh Cellars는 창립자 조셉 카(Joseph Carr)가 평생 자신을 위해 헌신한 아버지 조쉬(Josh)를 기리며 만든 브랜드입니다. 젊은 시절의 조쉬는 목수, 군인, 소방관 등 다양한 삶을 살았으며, 조셉은 뉴욕주의 작은 마을에서 넉넉지 않은 형편 속에 성장했습니다. Josh는 자녀들에게 성실함과 가족의 가치를 심어주었고, 오늘날까지 Joseph에게 영감을 주고 있습니다. 와인 업계에서 흔치 않은 ‘겸손한 시작’의 배경은 Josh Cellars만의 진정성과 공감대를 만들어냈습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "이른 아침에 시원한 상태로 수확되어 바로 압착되며, 스테인리스 스틸 탱크에서 침전 과정을 거치고 약 3~4주간의 저온 발효를 통해 품종 고유의 개성과 향을 극대화합니다. 일부는 리즈 컨택과 말로락틱 발효를 거쳐 질감과 풍미를 더했습니다. 전체의 10%는 새 프렌치 오크 배럴에서 숙성시켜 균형감과 부드러움을 완성했습니다.",
    "grapeNames": []
  },
  {
    "slug": "2007-josh-cellars-joseph-carr-josh-josh-joseph-josh-cellars",
    "nameKo": "2007년 미국 캘리포니아에서 설립된 프리미엄 와인 브랜드 Josh Cellars는 창립자 조셉 카(Joseph Carr)가 평생 자신을 위해 헌신한 아버지 조쉬(Josh)를 기리며 만든 브랜드입니다. 젊은 시절의 조쉬는 목수, 군인, 소방관 등 다양한 삶을 살았으며, 조셉은 뉴욕주의 작은 마을에서 넉넉지 않은 형편 속에 성장했습니다. Josh는 자녀들에게 성실함과 가족의 가치를 심어주었고, 오늘날까지 Joseph에게 영감을 주고 있습니다. 와인 업계에서 흔치 않은 ‘겸손한 시작’의 배경은 Josh Cellars만의 진정성과 공감대를 만들어냈습니다.",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "California, USA",
    "volume": 750,
    "foodPairing": "[]",
    "description": "Josh Cellars는 부드럽고 풍부한 과일향, 친화적인 스타일과 뛰어난 가성비를 바탕으로, 일상 속에서도 부담 없이 즐길 수 있는 ‘데일리 프리미엄 와인’으로 자리잡았습니다. 특별한 날은 물론, 소소한 순간에도 어울리는 Josh Cellars는 미국 내 $11 이상 테이블 와인 시장에서 판매율 1위를 비롯해, 전체 와인 브랜드 중 매출 성장률 1위, 카베르네 소비뇽 부문 오프라인 판매 1위, 샤도네이 부문 판매 2위 등 뛰어난 성과를 보이고 있습니다. 또한 2021 Wine Enthusiast 선정 ‘American Winery of the Year’로 선정되며 브랜드 가치를 인정받았습니다. Josh Cellars Sauvignon Blanc 마치 잔 속에 담긴 햇살처럼 생동감 넘칩니다. 향에서는 시트러스 블라섬, 허니듀 멜론, 키 라임 파이의 달콤한 아로마가 복숭아, 크림 브륄레, 생강의 섬세한 뉘앙스 위에 겹겹이 펼쳐집니다. 입안에서는 레몬과 키위, 그린 애플의 산뜻한 풍미가 어우러지며, 전반적으로 향긋하고 밝으며, 깔끔하고 청량한 피니시가 인상적입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "Deutsch Family Wine & Spirits(DFWS)는 1981년 설립된 가족 경영 와인·스피릿 전문 기업으로, 9개국에서 Josh Cellars 포함 22개의 와인·스피릿 브랜드를 수입·유통하며, 미국 내 전체 와인 회사 중 3위, 프리미엄 테이블 와인 부문에서는 1위를 차지한 글로벌 주류 기업입니다.",
    "grapeNames": [
      "과실의 풍미와 산도의 긴장감이 완벽한 균형을 이르면",
      "이른 아침에 시원한 상태로 수확되어 바로 압착되며",
      "스테인리스 스틸 탱크로 옮겨져 약 3~4주간의 저온 발효를 거칩니다. 이 과정은 포도 품종 고유의 개성과 향을 극대화하고 아로마를 온전히 보존할 수 있도록 도와줍니다."
    ]
  },
  {
    "slug": "10-14",
    "nameKo": "각 포도는 완전히 익은 시점에 수확되어 스테인리스 스틸 탱크에서 10~14일간 발효 과정을 거칩니다. 이후 말로락틱 발효를 거쳐 산미를 부드럽게 조정하고, 입안의 질감을 한층 풍부하게 만듭니다.",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "California, USA",
    "volume": 750,
    "foodPairing": "[]",
    "description": "와인은 블루베리와 자두의 풍부한 향에 후추와 바닐라가 어우러져 깊이 있는 아로마를 선사합니다. 입 안에서는 구운 자두와 다크 체리의 농익은 과실 맛이 중심을 이루고, 뒤이어 구운 아몬드, 토스트한 시더우드, 헤이즐넛 같은 섬세한 뉘앙스가 이어지며 부드러운 타닌과 긴 여운으로 마무리됩니다. 풍미가 풍부한 풀바디 스타일로 향신료가 가미된 마리네이드나 바비큐 요리와 특히 잘 어울리며, 그릴에 구운 고기, 특히 립 요리와 탁월한 페어링을 보여줍니다. Deutsch Family Wine & Spirits(DFWS)는 1981년 설립된 가족 경영 와인·스피릿 전문 기업으로, 9개국에서 Josh Cellars 포함 22개의 와인·스피릿 브랜드를 수입·유통하며, 미국 내 전체 와인 회사 중 3위, 프리미엄 테이블 와인 부문에서는 1위를 차지한 글로벌 주류 기업입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "캘리포니아는 포도 재배에 이상적인 환경을 갖추고 있습니다. 이 지역의 토양은 모래, 점토, 양토, 화강암, 화산재, 해양 퇴적층, 강 자갈층 등 매우 다양해, 포도 품종의 특성을 잘 살릴 수 있는 조건을 갖추고 있습니다.",
    "grapeNames": []
  },
  {
    "slug": "white-wine",
    "nameKo": "▶ 종    류 : White Wine",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Napa Valley",
    "volume": 750,
    "foodPairing": "[]",
    "description": "Seaswept는 햇살 가득한 야외에서 친구들과 어울리며 마시기에 딱 어울리는 와인입니다. 상쾌함과 즐거움을 위한 순간을 위해 탄생한 이 와인은, 기존의 전통적인 와인 소비 방식에서 벗어나 여름 오후의 활기찬 분위기 속에서 즐기는 새로운 와인 경험을 제안합니다. 테이블 밖에서 더 빛나는 이 와인은, 가볍고 마시기 편해 오랜 시간 동안 여러 잔 마셔도 부담 없는 스타일로, 하루 종일 기분 좋은 시간을 이어가고 싶을 때 함께하기에 제격입니다. Deutsch Family Wine & Spirits(DFWS)는 1981년 설립된 가족 경영 와인·스피릿 전문 기업으로, 9개국에서 Josh Cellars 포함 22개의 와인·스피릿 브랜드를 수입·유통하며, 미국 내 전체 와인 회사 중 3위, 프리미엄 테이블 와인 부문에서는 1위를 차지한 글로벌 주류 기업입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "▶ 원산지 : California, USA",
    "grapeNames": [
      "캘리포니아의 대표적인 산뜻한 화이트 품종인 소비뇽 블랑과 피노 그리지오를 블렌딩해",
      "시트러스와 꽃향기를 중심으로 잘 익은 풀과 그린 멜론의 생생한 뉘앙스를 담아냈습니다. 입안에서는 상쾌하고 밝은 시트러스 풍미가 퍼지며",
      "따사로운 햇살 아래에서 마시기 좋은 와인입니다."
    ]
  },
  {
    "slug": "wine-6",
    "nameKo": "잘 익은 자두, 블랙체리, 블랙베리의 풍부한 풍미가 조화롭게 어우러진 풀바디 레드 와인입니다. 잼처럼 진한 과실향과 함께 일반 카베르네 소비뇽보다 높은 알코올 도수로 인해 더욱 묵직한 질감과 긴 여운, 그리고 따뜻하고 만족스러운 마무리를 선사합니다.",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "California, USA",
    "volume": 750,
    "foodPairing": "[]",
    "description": "Hearth는 사랑하는 이들과 함께하는 순간, 서로의 존재에 집중하고 싶은 시간에 가장 잘 어울립니다. 따뜻한 대화와 편안한 분위기를 완성시켜주는 와인입니다. Deutsch Family Wine & Spirits(DFWS)는 1981년 설립된 가족 경영 와인·스피릿 전문 기업으로, 9개국에서 Josh Cellars 포함 22개의 와인·스피릿 브랜드를 수입·유통하며, 미국 내 전체 와인 회사 중 3위, 프리미엄 테이블 와인 부문에서는 1위를 차지한 글로벌 주류 기업입니다. 2007년 미국 캘리포니아에서 설립된 프리미엄 와인 브랜드 Josh Cellars는 창립자 조셉 카(Joseph Carr)가 평생 자신을 위해 헌신한 아버지 조쉬(Josh)를 기리며 만든 브랜드입니다. 젊은 시절의 조쉬는 목수, 군인, 소방관 등 다양한 삶을 살았으며, 조셉은 뉴욕주의 작은 마을에서 넉넉지 않은 형편 속에 성장했습니다. Josh는 자녀들에게 성실함과 가족의 가치를 심어주었고, 오늘날까지 Joseph에게 영감을 주고 있습니다. 와인 업계에서 흔치 않은 ‘겸손한 시작’의 배경은 Josh Cellars만의 진정성과 공감대를 만들어냈습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "우리는 모든 가정에 Hearth — 사람들이 모여 따뜻함과 위로를 나누는 공간 — 이 있기를 바랐습니다. Hearth는 단순히 식탁 위의 와인 경험을 넘어, 저녁 식사 이후 친구들이 머물며 진정한 교감을 나누는 특별한 순간까지 이어지는 새로운 와인 문화를 제안합니다.",
    "grapeNames": []
  },
  {
    "slug": "josh-cellars-reserve-north-coast-chardonnay",
    "nameKo": "Josh Cellars Reserve North Coast Chardonnay",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "North Coast, California, USA",
    "volume": 750,
    "foodPairing": "[]",
    "description": "캘리포니아 노스 코스트의 다채로운 테루아가 빚어낸 샤도네이로, 소노마, 레이크, 멘도시노 카운티에서 포도를 선별합니다. Red Hills AVA의 큰 일교차는 균형 잡힌 숙성과 복합미를 더하며, 멘도시노의 시원한 해양성 기후는 우아함, 섬세함, 그리고 싱그러운 산도를 제공합니다. 포도를 압착한 뒤 3-4주 간의 저온 발효를 통해 신선한 과실 향을 살렸으며, 일부는 프렌치 오크 배럴에서 숙성해 와인에 깊이와 구조감을 더했습니다. 이 와인은 밝은 시트러스, 레몬, 복숭아 향이 두드러지게 느껴집니다. 입 안에서는 레몬 제스트와 복숭아, 바닐라의 풍미가 어우러지며, 길게 이어지는 산뜻하고 기분 좋은 여운을 남깁니다. 와인의 산미가 크리미한 소스의 무거움을 잡아주며, 버터 소스를 곁들여 구운 생선이나 신선한 채소를 곁들인 로스트 치킨 같은 가벼운 단백질 요리와도 훌륭한 조화를 이룹니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "조쉬 셀라 리저브 노스 코스트 샤도네이",
    "grapeNames": []
  },
  {
    "slug": "josh-cellars-reserve-north-coast-cabernet-sauvignon",
    "nameKo": "Josh Cellars Reserve North Coast Cabernet Sauvignon",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "North Coast, California, USA",
    "volume": 750,
    "foodPairing": "[]",
    "description": "캘리포니아 노스 코스트의 다채로운 테루아가 빚어낸 카버네 소비뇽으로, 소노마, 레이크, 멘도시노 카운티에서 포도를 선별합니다. Red Hills AVA의 큰 일교차는 균형 잡힌 숙성과 복합미를 더하며, 멘도시노의 시원한 해양성 기후는 우아함, 섬세함을 더해줍니다. 포도를 압착한 뒤 약 10–15일간의 발효 및 침용 과정을 거쳐 색과 구조감을 극대화했으며, 말로락틱 발효로 질감을 부드럽게 하고 일부를 새 프렌치 오크에서 숙성해 균형과 깊이를 더했습니다. 잘 익은 다크 프루트와 구운 견과류의 향이 풍성하게 피어나며, 신선한 블랙 체리, 카시스(블랙커런트), 장미 꽃잎, 구운 호두의 뉘앙스가 느껴집니다. 입 안에서는 블랙 체리, 구운 헤이즐넛, 신선한 세이지, 모카, 은은한 바닐라와 오크 풍미가 어우러집니다. 숙성을 거치면서 부드러워지는 타닌이 매력적입니다. 풍성한 타닌은 기름지고 진한 음식의 느끼함을 잡아줍니다. 특히 잘 양념된 소갈비 스테이크와 함께 즐기기에 이상적입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "조쉬 셀라 리저브 노스 코스트 카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "wine-7",
    "nameKo": "잘 익은 블랙베리와 바닐라의 풍부한 향에 크랙 블랙페퍼와 감초의 스파이시한 뉘앙스가 어우러집니다. 입안에서는 부드럽고 벨벳 같은 타닌감과 함께 풀바디한 질감, 그리고 길고 매끄러운 피니시가 이어집니다.",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "California, USA",
    "volume": 750,
    "foodPairing": "[]",
    "description": "그릴에 구운 소시지, 바비큐 치킨, 또는 훈제한 가지 요리와 완벽한 조화를 이룹니다. 풍미 가득한 요리와 함께 즐기면 와인의 깊은 향과 따뜻한 여운을 더욱 느낄 수 있습니다 Deutsch Family Wine & Spirits(DFWS)는 1981년 설립된 가족 경영 와인·스피릿 전문 기업으로, 9개국에서 Josh Cellars 포함 22개의 와인·스피릿 브랜드를 수입·유통하며, 미국 내 전체 와인 회사 중 3위, 프리미엄 테이블 와인 부문에서는 1위를 차지한 글로벌 주류 기업입니다. 2007년 미국 캘리포니아에서 설립된 프리미엄 와인 브랜드 Josh Cellars는 창립자 조셉 카(Joseph Carr)가 평생 자신을 위해 헌신한 아버지 조쉬(Josh)를 기리며 만든 브랜드입니다. 젊은 시절의 조쉬는 목수, 군인, 소방관 등 다양한 삶을 살았으며, 조셉은 뉴욕주의 작은 마을에서 넉넉지 않은 형편 속에 성장했습니다. Josh는 자녀들에게 성실함과 가족의 가치를 심어주었고, 오늘날까지 Joseph에게 영감을 주고 있습니다. 와인 업계에서 흔치 않은 ‘겸손한 시작’의 배경은 Josh Cellars만의 진정성과 공감대를 만들어냈습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "포도는 풍미가 절정에 이른 시기에 수확되며, 압착 후 24~48시간 동안 콜드 소킹 과정을 거칩니다. 이후 약 10~15일간의 발효를 통해 포도 껍질로부터 풍미, 색상, 타닌을 최대한 끌어낸 뒤, 말로락틱 발효를 거쳐 산미를 부드럽게 하고 질감을 향상시킵니다. 마지막으로, 최근 비워낸 버번 위스키 배럴에서 2개월간 숙성시켜 독특한 풍미를 더했습니다.",
    "grapeNames": []
  },
  {
    "slug": "la-crema-russian-river-valley-chardonnay",
    "nameKo": "La Crema Russian River Valley Chardonnay",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "White",
    "volume": 750,
    "foodPairing": "[]",
    "description": "1983년 지정된 Russian River Valley AVA는 라 크레마의 고향입니다. 세계적으로 최고 레벨의 와인 생산지로 인정받는 이 곳은 따뜻한 환경과 이를 미세하게 조절하는 바다의 영향을 함께 받아 포도알이 천천히 그리고 충분히 여물도록 합니다. 이 독특한 기후 패턴은 배수가 잘 되는 토양과 만나 프리미엄 샤르도네와 피노누아를 만듭니다. 서양 배와 레몬, 부드럽고 달콤한 크렘블레의 향에 이어 천도복숭아, 그린 파인애플, 목련꽃의 향기가 뒤따릅니다. 입에서는 조화를 이루는 산도와 함께 섬세하고 다층적인 미각적 경험을 선사합니다. 복합미와 질감을 위해 가끔 Lees 저어주기 (Bâtonnage)",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "라 크레마 러시안 리버 밸리 샤도네이",
    "grapeNames": []
  },
  {
    "slug": "la-crema-russian-river-valley-pinot-noir",
    "nameKo": "La Crema Russian River Valley Pinot Noir",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Red",
    "volume": 750,
    "foodPairing": "[]",
    "description": "1983년 지정된 Russian River Valley AVA는 라 크레마의 고향입니다. 세계적으로 최고 레벨의 와인 생산지로 인정받는 이 곳은 따뜻한 환경과 이를 미세하게 조절하는 바다의 영향을 함께 받아 포도알이 천천히 그리고 충분히 여물도록 합니다. 이 독특한 기후 패턴은 배수가 잘 되는 토양과 만나 프리미엄 샤르도네와 피노누아를 만듭니다. 딸기, 보이즌베리, 블랙체리와 블랙베리 등 다양한 스펙트럼의 베리가 풍부하며 삼나무의 향긋함도 느껴집니다. 벨벳처럼 표현되는 타닌이 우아하며, 균형잡힌 산도와 함께 전반적으로 세련된 인상을 주는 피노누아 입니다. 2016 Vintage : WE 90점",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "라 크레마 러시안 리버 밸리 피노누아",
    "grapeNames": []
  },
  {
    "slug": "la-crema-sonoma-coast-chardonnay",
    "nameKo": "La Crema Sonoma Coast Chardonnay",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "White",
    "volume": 750,
    "foodPairing": "[]",
    "description": "소노마 카운티에서 가장 큰 AVA인 Sonoma Coast AVA 는 남단의 산 파블로 베이로부터 북단의 멘도치노 카운티까지 거슬러 올라갑니다. 태평양 연안의 산악 지형을 따라 조성되어 있는 이 지역은 여름을 포함해 연중 해양성 안개의 영향을 받으며 이러한 독특한 지형과 기후로 인해 1987년 AVA 지정 이래 세계의 손꼽히는 샤르도네와 피노누아의 산지 중 하나로 이름을 알려 왔습니다. 향긋한 레몬, 사과, 쟈스민과 함께 배, 오렌지의 아로마가 감지됩니다. 입에서는 넘치는 과즙미와 함께 집중도 있는 느낌, 긴 피니시를 경험할 수 있습니다. 복합미와 질감을 위해 매월 1~2회 Lees 저어주기 (Bâtonnage)",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "라 크레마 소노마 코스트 샤도네이",
    "grapeNames": []
  },
  {
    "slug": "la-crema-sonoma-coast-pinot-noir",
    "nameKo": "La Crema Sonoma Coast Pinot Noir",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Red",
    "volume": 750,
    "foodPairing": "[]",
    "description": "소노마 카운티에서 가장 큰 AVA인 Sonoma Coast AVA 는 남단의 산 파블로 베이로부터 북단의 멘도치노 카운티까지 거슬러 올라갑니다. 태평양 연안의 산악 지형을 따라 조성되어 있는 이 지역은 여름을 포함해 연중 해양성 안개의 영향을 받으며 이러한 독특한 지형과 기후로 인해 1987년 AVA 지정 이래 세계의 손꼽히는 샤르도네와 피노누아의 산지 중 하나로 이름을 알려 왔습니다. 레드 체리, 석류, 달콤한 타바코 향과 다양한 베리류, 자두, 토스트 등이 느껴집니다. 매끄럽게 표현되는 타닌과 균형잡힌 산도가 입에서 전체적인 조화를 이끌어냅니다. 2017 Vintage : RP 91점, WS 90점",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "라 크레마 소노마 코스트 피노누아",
    "grapeNames": []
  },
  {
    "slug": "la-crema-monterey-chardonnay",
    "nameKo": "La Crema Monterey Chardonnay",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "White",
    "volume": 750,
    "foodPairing": "[]",
    "description": "캘리포니아 중부 해안가의 Monterey AVA는 북부 몬터레이 베이로부터 남동쪽으로 사선을 그리는 길쭉한 형상의 지역입니다. 이곳은 바다의 영향을 받아 서늘하고 안개 낀 기후에 와인의 당도를 높여주는 햇살 또한 충분하여 과실미와 산도, 그리고 미네랄이 동시에 잘 느껴지는 밸런스가 좋은 와인을 만들어 냅니다. 코에서 구운 사과와 파인애플의 향이 감돌고 브리오슈의 고소함이 살짝 어우러집니다. 과즙 많은 배의 향긋하고 신선한 아로마, 레몬과 귤 등의 청량함이 미네랄과 만나 조화롭습니다. 중심을 잡아주는 산도와 충분히 지속되는 피니시를 느낄 수 있는 화이트 와인입니다. 과실미를 위해 15% 스테인리스 발효액 블렌드",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "라 크레마 몬터레이 샤도네이",
    "grapeNames": []
  },
  {
    "slug": "la-crema-monterey-pinot-noir",
    "nameKo": "La Crema Monterey Pinot Noir",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Red",
    "volume": 750,
    "foodPairing": "[]",
    "description": "캘리포니아 중부 해안가의 Monterey AVA는 북부 몬터레이 베이로부터 남동쪽으로 사선을 그리는 길쭉한 형상의 지역입니다. 이곳은 바다의 영향을 받아 서늘하고 안개 낀 기후에 와인의 당도를 높여주는 햇살 또한 충분하여 과실미와 산도, 그리고 미네랄이 동시에 잘 느껴지는 밸런스가 좋은 와인을 만들어 냅니다. 몬터레이 내 여러 빈야드들로부터 과실이 조달되며 북부의 포도는 즙이 많고 산뜻, 신선한 과실미를 표현, 그리고 남부의 포도는 보다 인텐스한 과일의 느낌을 표현합니다. 대표적으로 체리 향이 풍성하며 입에서는 붉은 자두, 크랜베리와 라즈베리 등이 느껴집니다. 뚜렷한 미네랄과 입맛을 돋우는 산도, 다양한 배럴 스파이스가 감지됩니다. 2017 Vintage : WE 90점",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "라 크레마 몬터레이 피노누아",
    "grapeNames": []
  },
  {
    "slug": "st-helena-star-circa-1880",
    "nameKo": "- ST. HELENA STAR, CIRCA 1880",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Napa Valley",
    "volume": 750,
    "foodPairing": "[]",
    "description": "하웰 마운틴 AVA는 분명한 테루아의 특성과 매력으로 나파 밸리의 세부 산지 중에서도 아주 초기에 sub-appellation 으로 지정되었습니다. 여름이면 아침마다 하얀 담요와 같은 바다 안개가 나파 밸리를 감싸곤 하는데, 하웰 마운틴은 높은 고도로 인해 안개선 위로 우아하게 솟아있어 평균보다 따스한 밤 기온과 비교적 서늘한 한낮의 기온을 제공합니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "\"If any grape growing region in California deserves to be called a well-defined district, it is Howell Mountain.\"",
    "grapeNames": []
  },
  {
    "slug": "howell-mountain-cabernet-sauvignon",
    "nameKo": "하웰 마운틴 카버네 소비뇽",
    "nameEn": "(Howell Mountain Cabernet Sauvignon)",
    "type": "red",
    "country": "USA",
    "regionL1": "Dry, Red",
    "volume": 750,
    "foodPairing": "[]",
    "description": "(Howell Mountain Cabernet Sauvignon) Petit Verdot 4.5%, Malbec 2% Chris Carpenter, Winemaker",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "크리스 카펜터는 일리노이 주립대에서 생물학을 전공하고 국제 비즈니스/마케팅 MBA 를 취득 후 우연히 나파 밸리를 방문하게 됩니다. 와인의 세계에서 영감을 받은 그는 명문 UC Davis 에서 포도 재배학과 양조학 석사를 이수하며 본격적인 양조가의 길로 접어듭니다. 졸업 후 이태리 토스카나의 유서 깊은 와이너리인 안티노리에서 근무, 페루자 대학교에서 양조학에 대한 보다 깊은 배움을 얻었으며, 이후 도멘 카네로스, 도멘 샹동, 카디날 등 나파 밸리의 유수 와이너리에서 양조가로 활동하며 명성을 쌓습니다. 또한 일리노이대학의 풋볼 플레이어/나파 밸리 유스 심포니 회장으로도 활동했으며 자상한 남편이자 모범적인 아빠인 그를 세상은 와인 평론가 로버트 파커로부터 100점을 세 번이나 받은 ‘천재 와인 메이커’ 로 부릅니다.",
    "grapeNames": [
      "“고립되고 전원적인 느낌을 주는 라 호타의 포도원과 양조장의 모습은 1800년대와 크게 다르지 않지만",
      "이 지역은 역사 속 다양한 이야기를 품고 있습니다. 수 세기 전 토착 부족민인 와포 족 (Wappo tribe) 이 이곳에 자리 잡았고 이어 멕시코의 장군은 노스 캐롤라이나에서 온 개척자에게 토지를 내어주었으며",
      "훗날 스위스에서 온 사업가는 이 땅에 와이너리를 설립하게 됩니다. 이태리 출신의 석공은 지역 고유의 화성암을 이용해 석조 와이너리를 설계",
      "중국인들은 이를 완성시켰고 빈야드에는 프랑스 포도 품종이 심어졌으며 이것이 바로 ‘미국’ 의 이야기 입니다.”"
    ]
  },
  {
    "slug": "howell-mountain-merlot",
    "nameKo": "(Howell Mountain Merlot)",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Dry, Red",
    "volume": 750,
    "foodPairing": "[]",
    "description": "매우 촘촘한 밀도의 와인으로, 흑연과 모카가 향기롭고 블랙 체리와 플럼이 감지됩니다. 농후한 살집의 풀바디 와인이지만 부담스럽지 않고 입에 착 붙는 느낌으로 입맛을 돌게 합니다. 바로 마시기에도 좋으나 10년 이상의 숙성 또한 기대되는 잠재력 있는 와인입니다. 하웰 마운틴 와인지역의 토양은 뚜렷이 구분되는 두 타입의 화산토 - 밝은색을 띠는 규장질의 유문암과 다량의 철분을 함유해 붉은 빛을 띠는 점토질 화산암 - 의 조합입니다. 다공질의 배수가 원활하고 양분이 부족한 토양은 포도 넝쿨이 깊은 뿌리를 내고 생존을 위해 더 고군분투 하도록 합니다. 그 결과 아주 작은 열매와 군락을 만들어 내고, 농축미로 가득 찬 고품질의 양조용 포도가 완성됩니다. 크리스 카펜터는 일리노이 주립대에서 생물학을 전공하고 국제 비즈니스/마케팅 MBA 를 취득 후 우연히 나파 밸리를 방문하게 됩니다. 와인의 세계에서 영감을 받은 그는 명문 UC Davis 에서 포도 재배학과 양조학 석사를 이수하며 본격적인 양조가의 길로 접어듭니다. 졸업 후 이태리 토스카나의 유서 깊은 와이너리인 안티노리에서 근무, 페루자 대학교에서 양조학에 대한 보다 깊은 배움을 얻었으며, 이후 도멘 카네로스, 도멘 샹동, 카디날 등 나파 밸리의 유수 와이너리에서 양조가로 활동하며 명성을 쌓습니다. 또한 일리노이대학의 풋볼 플레이어/나파 밸리 유스 심포니 회장으로도 활동했으며 자상한 남편이자 모범적인 아빠인 그를 세상은 와인 평론가 로버트 파커로부터 100점을 세 번이나 받은 ‘천재 와인 메이커’ 로 부릅니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "하웰 마운틴 멀롯",
    "grapeNames": [
      "“고립되고 전원적인 느낌을 주는 라 호타의 포도원과 양조장의 모습은 1800년대와 크게 다르지 않지만",
      "이 지역은 역사 속 다양한 이야기를 품고 있습니다. 수 세기 전 토착 부족민인 와포 족 (Wappo tribe) 이 이곳에 자리 잡았고 이어 멕시코의 장군은 노스 캐롤라이나에서 온 개척자에게 토지를 내어주었으며",
      "훗날 스위스에서 온 사업가는 이 땅에 와이너리를 설립하게 됩니다. 이태리 출신의 석공은 지역 고유의 화성암을 이용해 석조 와이너리를 설계",
      "중국인들은 이를 완성시켰고 빈야드에는 프랑스 포도 품종이 심어졌으며 이것이 바로 ‘미국’ 의 이야기 입니다.”"
    ]
  },
  {
    "slug": "howell-mountain-cabernet-franc",
    "nameKo": "(Howell Mountain Cabernet Franc)",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Dry, Red",
    "volume": 750,
    "foodPairing": "[]",
    "description": "하웰 마운틴 와인지역의 토양은 뚜렷이 구분되는 두 타입의 화산토 - 밝은색을 띠는 규장질의 유문암과 다량의 철분을 함유해 붉은 빛을 띠는 점토질 화산암 - 의 조합입니다. 다공질의 배수가 원활하고 양분이 부족한 토양은 포도 넝쿨이 깊은 뿌리를 내고 생존을 위해 더 고군분투 하도록 합니다. 그 결과 아주 작은 열매와 군락을 만들어 내고, 농축미로 가득 찬 고품질의 양조용 포도가 완성됩니다. 크리스 카펜터는 일리노이 주립대에서 생물학을 전공하고 국제 비즈니스/마케팅 MBA 를 취득 후 우연히 나파 밸리를 방문하게 됩니다. 와인의 세계에서 영감을 받은 그는 명문 UC Davis 에서 포도 재배학과 양조학 석사를 이수하며 본격적인 양조가의 길로 접어듭니다. 졸업 후 이태리 토스카나의 유서 깊은 와이너리인 안티노리에서 근무, 페루자 대학교에서 양조학에 대한 보다 깊은 배움을 얻었으며, 이후 도멘 카네로스, 도멘 샹동, 카디날 등 나파 밸리의 유수 와이너리에서 양조가로 활동하며 명성을 쌓습니다. 또한 일리노이대학의 풋볼 플레이어/나파 밸리 유스 심포니 회장으로도 활동했으며 자상한 남편이자 모범적인 아빠인 그를 세상은 와인 평론가 로버트 파커로부터 100점을 세 번이나 받은 ‘천재 와인 메이커’ 로 부릅니다. Chris Carpenter, Winemaker",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "하웰 마운틴 카버네 프랑",
    "grapeNames": [
      "“고립되고 전원적인 느낌을 주는 라 호타의 포도원과 양조장의 모습은 1800년대와 크게 다르지 않지만",
      "이 지역은 역사 속 다양한 이야기를 품고 있습니다. 수 세기 전 토착 부족민인 와포 족 (Wappo tribe) 이 이곳에 자리 잡았고 이어 멕시코의 장군은 노스 캐롤라이나에서 온 개척자에게 토지를 내어주었으며",
      "훗날 스위스에서 온 사업가는 이 땅에 와이너리를 설립하게 됩니다. 이태리 출신의 석공은 지역 고유의 화성암을 이용해 석조 와이너리를 설계",
      "중국인들은 이를 완성시켰고 빈야드에는 프랑스 포도 품종이 심어졌으며 이것이 바로 ‘미국’ 의 이야기 입니다.”"
    ]
  },
  {
    "slug": "mount-veeder-howell-mountain-spring-mountain-and-diamond-mountain",
    "nameKo": "Lokoya is a collection of four distinct Cabernet Sauvignons from four of Napa Valley’s most celebrated mountain appellations:",
    "nameEn": "Mount Veeder, Howell Mountain, Spring Mountain and Diamond Mountain.",
    "type": "red",
    "country": "USA",
    "regionL1": "Napa Valley",
    "volume": 750,
    "foodPairing": "[]",
    "description": "Mount Veeder, Howell Mountain, Spring Mountain and Diamond Mountain.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "Established in 1995,",
    "grapeNames": []
  },
  {
    "slug": "100-2",
    "nameKo": "로코야는 100% 카버네 소비뇽으로, 가장 순수한 품종의 표현이자 테루아의 표현입니다.",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Napa Valley",
    "volume": 750,
    "foodPairing": "[]",
    "description": "카버네 소비뇽을 위한 네 곳의 마운틴 AVA - Mount Veeder, Howell Mountain, Spring Mountain, 그리고 Diamond Mountain. 로코야는 이 천혜의 조건에서 자라난 과실을 자연의 잠재력 그대로 순수하게 드러냅니다. Mount Veeder  ∙  Howell Mountain  ∙  Spring Mountain  ∙  Diamond Mountain",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "나파 마운틴 카버네. 그 순수의 극치",
    "grapeNames": []
  },
  {
    "slug": "mount-veeder-cabernet-sauvignon",
    "nameKo": "(Mount Veeder Cabernet Sauvignon)",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Dry, Red",
    "volume": 750,
    "foodPairing": "[]",
    "description": "1993년에 AVA 로 지정된 마운트 비더 와인지역은 마야카마스 산맥의 남단에 위치합니다. 면적상으로는 나파밸리 내 가장 큰 AVA 중 한 곳이지만, 이 중 단 2% 미만의 가파른 비탈 지역에서만 양조용 포도가 재배됩니다. 로코야의 빈야드는 마운트 비더 AVA 북단 550m 해발고도에 위치하며, 이 지역의 포도는 특징적으로 파워풀한 구조감을 형성합니다. 화성암 기반의 양분이 부족한 토양은 포도 덩굴들이 생존을 위해 더 깊게 뿌리 내리게 하며 그 열매는 뛰어난 농축미를 보이게 됩니다. 몸집이 크고 호화로운 이 와인은 제비꽃, 블루베리 등의 아로마와 충분한 타닌을 특징으로 하며 놀라운 숙성 잠재력을 지녔습니다. 로버트 파커는 특히 2013 빈티지를 ‘아주 오랫동안 지속되는 와인의 피니시는 하웰 마운틴 그 자체에 비견할 만 하다' 라고 극찬하였습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "마운트 비더 카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "howell-mountain-cabernet-sauvignon-2",
    "nameKo": "(Howell Mountain Cabernet Sauvignon)",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Dry, Red",
    "volume": 750,
    "foodPairing": "[]",
    "description": "비교적 이른 1983년에 AVA 로 지정된 하웰 마운틴와인지역은 나파밸리의 동쪽 경계를 따라 흐르는 바카 (Vaca) 산맥의 북동편에 위치합니다. 이 곳의 토양은 뚜렷이 구분되는 두 타입의 화산토 (유문암, 화산암) 의 조합입니다. 다공질이며 배수가 원활하고 양분이 부족한 이 토양은 포도 넝쿨이 깊은 뿌리를 내고 생존을 위해 더 노력하도록 합니다. 그 결과 아주 작은 열매와 군락을 만들어 내고, 농축미로 꽉 찬 고품질의 양조용 포도가 완성됩니다. 로코야의 빈야드는 안개선보다 높은 550m 이상의 해발고도에 위치하며 소나무 숲이 포도원 주위를 둘러싸고 군락을 이룹니다. 포도알이 천천히 익어 집중도가 뛰어나며 특유의 화산토는 미네랄감이 출중한 와인을 만듭니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "하웰 마운틴 카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "spring-mountain-cabernet-sauvignon",
    "nameKo": "(Spring Mountain Cabernet Sauvignon)",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Dry, Red",
    "volume": 750,
    "foodPairing": "[]",
    "description": "1993년 지정된 스프링 마운틴 AVA는 나파 밸리와 소노마 카운티를 나누는 경계인 마야캬마스 산맥의 동편 경사면에 위치합니다. 로코야의 빈야드는 해발고도 300~640m 에 위치하며 선선한 낮 기온, 양분이 부족한 토양, 급경사의 지형은 카버네 소비뇽의 재배에 매우 적합합니다. 와인은 제비꽃과 흰 꽃을 비롯한 스프링 마운틴 특유의 플로럴 계열 아로마, 블루베리, 블랙베리 등 순수하고 풍부한 과실류의 맛, 단단한 타닌을 표현합니다. 입체적 구조감은 신선한 느낌을 줌과 동시에 와인의 풍부한 잠재력을 느끼게 하며 마무리 됩니다. 로버트 파커는 ‘아름답고 순수한, 세련된 스타일의 와인’ 이라 평하였습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "스프링 마운틴 카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "diamond-mountain-cabernet-sauvignon",
    "nameKo": "(Diamond Mountain Cabernet Sauvignon)",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Dry, Red",
    "volume": 750,
    "foodPairing": "[]",
    "description": "2001년에 AVA 지정된 다이아몬드 마운틴 디스트릭트는 나파밸리 최북단 칼리스토가를 내려다보고 있으며 계곡의 서쪽 가장자리를 이루는 마야카마스 산맥의 일부입니다. 이 지대는 화산재처럼 고운 화산토로 조성되어 있으며, 화산 유리의 작은 파편인 입자들이 반짝이는 모습에 ‘다이아몬드’ 라는 이름을 갖게 되었습니다. 로코야의 빈야드는 해발고도 360~550m에 위치합니다. 안개선 위의 포도밭은 포도알이 오래 매달려있도록 하여 농축미 있으면서도 우아한 산미를 형성합니다. 아주 농도 짙은 컬러의 풀바디한 이 와인은 입에서는 블랙체리가 생생하고, 코에서는 다크초콜릿이 향기롭습니다. 이 밖에 블랙베리, 카시스, 감초, 화산재의 느낌 등 겹겹이 드러나는 아로마가 감각을 일깨웁니다. 로버트 파커는 ‘언뜻 타닌과 구조감을 살짝 숨긴 듯한, 실제로 엄청난 몸매의 와인’ 이라 평했습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "다이아몬드 마운틴 카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "long-barn-chardonnay",
    "nameKo": "Long Barn Chardonnay",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "캘리포니아, 미국",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 11,
    "foodPairing": "[]",
    "description": "카모미의 설립자 겸 와인메이커인 Dario와 Stefano가 와인에 대한 소박하고 진솔한 열정을 담아, 캘리포니아 최고의 가성비 와인 ‘롱반’을 선보입니다. 사과와 밝은 시트러스의 달콤한 아로마에 크리미한 버터, 바닐라, 구운 아몬드의 풍미도 느껴집니다. 프렌치 오크와 스테인레스 발효조를 동시에 사용하고 절제된 2차 발효(MLF)를 통해 부드러운 질감과 과하지 않은 오크 풍미를 보여줍니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "롱반 샤도네이",
    "grapeNames": []
  },
  {
    "slug": "long-barn-merlot",
    "nameKo": "Long Barn Merlot",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "캘리포니아, 미국",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 17,
    "foodPairing": "[]",
    "description": "카모미의 설립자 겸 와인메이커인 Dario와 Stefano가 와인에 대한 소박하고 진솔한 열정을 담아, 캘리포니아 최고의 가성비 와인 ‘롱반’을 선보입니다. 감미로운 블랙베리, 라즈베리, 달콤한 향신료 아로마가 느껴지며 입에서는 과실 풍미와 함께 스모키함, 삼나무, 옅은 가죽 풍미도 느껴집니다. 적절한 프렌치 오크 숙성을 통해 과실과 오크 풍미간의 밸런스, 복합적인 풍미, 다층적인 구조를 보여주며 긴 여운을 남깁니다. 불고기, 양념갈비, 제육볶음, 족발, 훈제오리, 치킨 등 다양한 육류 요리는 물론 토마토나 크림 소스의 피자, 파스타와도 잘 어울립니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "롱반 멀롯",
    "grapeNames": []
  },
  {
    "slug": "long-barn-pinot-noir",
    "nameKo": "Long Barn Pinot Noir",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "캘리포니아, 미국",
    "volume": 750,
    "servingTempMin": 14,
    "servingTempMax": 15,
    "foodPairing": "[]",
    "description": "미국 현지 소비자 리뷰 - 롱반 피노누아 \"빼어난 피노, 특히 가격은 놀랍다! 풀바디한 진한 풍미의 인텐스한 피노 누아” (Amazing Pinot, especially for this price! Full bodied, darker and more intense then most Pinot Noir's. - ★★★★☆, Mark Derksen, Vivino)",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "롱반 피노누아",
    "grapeNames": []
  },
  {
    "slug": "long-barn-zinfandel",
    "nameKo": "Long Barn Zinfandel",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "캘리포니아, 미국",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 17,
    "foodPairing": "[]",
    "description": "미국 현지 소비자 리뷰 - 롱반 진판델 \"이 진판델을 만난 것은 정말이지 행운! 뛰어난 가성비의 아름다운 와인. 지금은 나의 데일리 와인“ (So lucky I could experience this Zin, great value for cost with beautiful flavour. Now my daily wine!!! - ★★★★★, Janecis Robinson, Vivino)",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "롱반 진판델",
    "grapeNames": []
  },
  {
    "slug": "long-barn-cabernet-sauvignon",
    "nameKo": "Long Barn Cabernet Sauvignon",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "캘리포니아, 미국",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 17,
    "foodPairing": "[]",
    "description": "카모미의 설립자 겸 와인메이커인 Dario와 Stefano가 와인에 대한 소박하고 진솔한 열정을 담아, 캘리포니아 최고의 가성비 와인 ‘롱반’을 선보입니다. 코에서는 아주 잘 익은 자두, 비에 젖은 흙 내음, 그리고 토스티한 오크의 존재감이 향기롭고, 갓 딴 체리, 진한 자두를 비롯한 풍부한 과실 풍미와 적절한 산도, 미네랄의 느낌이 입안에서 조화를 이룹니다. 전체적으로 부드러운 탄닌의 질감과 카다멈을 비롯한 스파이스가 은은한 피니시를 장식합니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "롱반 카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "long-barn-red",
    "nameKo": "Long Barn Red",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "캘리포니아, 미국",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 17,
    "foodPairing": "[]",
    "description": "카모미의 설립자 겸 와인메이커인 Dario와 Stefano가 와인에 대한 소박하고 진솔한 열정을 담아, 캘리포니아 최고의 가성비 와인 ‘롱반’을 선보입니다. 롱반 레드는 풍부하고 부드러운 스타일의 캘리포니아 레드 블렌드로, 산지 특유의 표현력이 좋은 와인입니다. 각종 레드 베리, 자두 등의 과실미가 풍미를 리드하며 초콜릿 그리고 약간의 스파이스도 느껴집니다. 붉은 육류부터 가금류 까지 폭넓은 푸드 매칭이 가능하며, 특히 비프, 양고기와의 패어링을 추천합니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "롱반 레드",
    "grapeNames": []
  },
  {
    "slug": "long-barn-reserve-chardonnay",
    "nameKo": "Long Barn Reserve Chardonnay",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "캘리포니아, 미국",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 11,
    "foodPairing": "[]",
    "description": "카모미의 설립자 겸 와인메이커인 Dario와 Stefano가 와인에 대한 소박하고 진솔한 열정을 담아, 캘리포니아 최고의 가성비 와인 ‘롱반’을 선보입니다. 롱반 리저브에 사용되는 포도는 좀 더 서늘한 기후에 속한 나파 밸리에 인접해있는 북쪽 지역에서 수확된 포도를 사용하여 더 높은 퀄리티의 리저브 와인을 만듭니다. 달콤한 바닐라, 구운 아몬드와 버터의 풍미가 주를 이루고 그와 동시에 시트러스향과 사과의 아로마가 감싸며 와인의 향을 더욱 풍부하게 만들어 줍니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "롱반 리저브 샤도네이",
    "grapeNames": []
  },
  {
    "slug": "long-barn-reserve-cabernet-sauvignon",
    "nameKo": "Long Barn Reserve Cabernet Sauvignon",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "캘리포니아, 미국",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 17,
    "foodPairing": "[]",
    "description": "카모미의 설립자 겸 와인메이커인 Dario와 Stefano가 와인에 대한 소박하고 진솔한 열정을 담아, 캘리포니아 최고의 가성비 와인 ‘롱반’을 선보입니다. 롱반 리저브에 사용되는 포도는 좀 더 서늘한 기후에 속한 나파 밸리에 인접해있는 북쪽 지역에서 수확된 포도를 사용하여 더 높은 퀄리티의 리저브 와인을 만듭니다. 매우 풍부한 향을 가진 와인으로, 잘 잡힌 텍스처와 탄닌이 라운드하며 특히 신선한 자두, 체리와 같은 과일향과 오크숙성으로 인한 토스티함이 와인의 맛을 더욱 풍부하게 만들어줍니다. 기분 좋은 산도감과 미네랄리티한 느낌이 피니쉬까지 이어지는 롱반 리저브 카버네 소비뇽입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "롱반 리저브 카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "long-barn-reserve-pinot-noir",
    "nameKo": "Long Barn Reserve Pinot Noir",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "캘리포니아, 미국",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "카모미의 설립자 겸 와인메이커인 Dario와 Stefano가 와인에 대한 소박하고 진솔한 열정을 담아, 캘리포니아 최고의 가성비 와인 ‘롱반’을 선보입니다. 롱반 리저브에 사용되는 포도는 좀 더 서늘한 기후에 속한 나파 밸리에 인접해있는 북쪽 지역에서 수확된 포도를 사용하여 더 높은 퀄리티의 리저브 와인을 만듭니다. 다크한 가넷 색깔의 이 아름다운 와인은 붉은 체리, 산딸기, 라즈베리 등의 섬세하고 여리여리한 붉은 과실류의 향과 콜라, 베이킹 스파이스 등의 풍부한 2,3차 뉘앙스가 밸런스를 이루며, 오크숙성으로 인한 바닐라 터치와 실키하고 토스티한 피니쉬가 매우 인상적입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "롱반 리저브 피노누아",
    "grapeNames": []
  },
  {
    "slug": "pinot-noir-2",
    "nameKo": "Pinot Noir",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "소노마 카운티(Sonoma County) + 몬테레이 카운티(Monterey County)",
    "volume": 750,
    "servingTempMin": 13,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 토마토 베이스 파스타\", \"피자\", \"양고기 요리 등\"]",
    "description": "+ 산타 바바라 카운티(Santa Barbara County), USA 밝은 태양과 열을 식혀주는 안개가 공존하는 캘리포니아 해안에 위치한 3곳의 피노누아를 블랜딩한 와인입니다. 빈야드에서 포도를 수확한뒤 구분하여 각 빈야드의 느낌이 충분히 나타날 수 있도록 다르게 양조를 진행합니다. 다르게 양조를 진행한 원액들은 함께 모여 조화를 이룰 수 있도록 프렌치 오크에서 숙성을 진행합니다. 이 과정으로 인하여 잘익은 붉은 과일에서 느낄수 있는 밝은 루비빛과 향을 느낄 수 있게 되며, 동시에 모카의 향이 어울려져 복합적이면서 깊은 피니쉬를 느끼게 해줍니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "피노누아",
    "grapeNames": []
  },
  {
    "slug": "chardonnay-2",
    "nameKo": "Chardonnay",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "소노마 카운티(Sonoma County) + 몬테레이 카운티(Monterey County)",
    "volume": 750,
    "servingTempMin": 7,
    "servingTempMax": 13,
    "foodPairing": "[\"▶ 찐 생선요리\", \"양념하지 않은 바베큐 요리\", \"딤섬 요리 등\"]",
    "description": "+ 산타 바바라 카운티(Santa Barbara County), USA 뜨거운 태양과 시원한 바다의 바람으로 인해 잘 익은 과실만을 선별하여 양조를 시작합니다. 스틸탱크에서 젖산발효를 진행하며, 프렌치 오크에서 숙성을 진행합니다. 이 과정에서 메이오미 샤도네이 만의 독특한 캐릭터가 만들어 집니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "샤도네이",
    "grapeNames": []
  },
  {
    "slug": "cabernet-sauvignon",
    "nameKo": "Cabernet Sauvignon",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "몬테레이 카운티(Monterey County), 소노마 카운티(Sonoma County),",
    "volume": 750,
    "servingTempMin": 13,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 스테이크\", \"숙성치즈\", \"라구 파스타 등\"]",
    "description": "산타 바바라 카운티(Santa Barbara County), USA 메이오미 카버네 소비뇽은 캘리포니아 해안가의 짙은 안개와 강렬한 태양, 서늘한 공기속에서 자란 각각의 특징이 다른 3곳의 카버네 소비뇽을 블렌딩 하여 만든 와인입니다. 짙은 루비 컬러의 이 와인은 블랙베리, 검은 라즈베리의 향과 함께 바닐라의 토스트향등이 풍부하게 느껴집니다. 벨벳과 같은 탄닌은 긴 피니쉬와 함께 입안에서 오래도록 지속됩니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "cabernet-sauvignon-2",
    "nameKo": "(Cabernet Sauvignon)",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "마운틴 비더 AVA (Mt. Veeder) / 나파 밸리 (Napa Valley)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "마운틴 브레이브의 포도밭은 비더 산의 가장 꼭대기인 해수면 550m 지점에 위치하고 있습니다. 비더 산은 선구자 와인메이커인 찰스 크뤼그, 프레드릭 헤스등에 의해 그 명성을 이미 증명 받은 명품 와인산지 입니다. 마운틴 브레이브의 포도밭은 1841년에 구매했던 포도밭으로 현재는 마운틴 비더 AVA에 속하는 지역입니다. 크리스토퍼 카펜터 (Christopher Carpenter) ※나파밸리의 스타와인 메이커※ [Cardinale(미국), Lokoya(미국), Mt. Brave(미국), Hichinbotham(호주)]",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "카버네 소비뇽",
    "grapeNames": [
      "높은 고도의 포도밭은 항상 고도의 노동력이 필요합니다. 얇은 암석으로 이루어진 토양과 가파른 경사면에 위치하고 있어 배수 능력은 좋지만",
      "항상 붕괴의 위험을 가지고 있습니다. 높은 고도로 인해 늘 서늘한 기후를 가지고 있으며",
      "태양광 노출을 산 아래 지역보다 더 많이 받을 수 있습니다. 이러한 떼루아를 통해 포도는 최적의 숙성과 품종의 복잡미를 최상으로 가지게 됩니다."
    ]
  },
  {
    "slug": "cabernet-franc",
    "nameKo": "(Cabernet Franc)",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "마운틴 비더 AVA (Mt. Veeder) / 나파 밸리 (Napa Valley)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "마운틴 브레이브의 포도밭은 비더 산의 가장 꼭대기인 해수면 550m 지점에 위치하고 있습니다. 비더 산은 선구자 와인메이커인 찰스 크뤼그, 프레드릭 헤스등에 의해 그 명성을 이미 증명 받은 명품 와인산지 입니다. 마운틴 브레이브의 포도밭은 1841년에 구매했던 포도밭으로 현재는 마운틴 비더 AVA에 속하는 지역입니다. 크리스토퍼 카펜터 (Christopher Carpenter) ※나파밸리의 스타와인 메이커※ [Cardinale(미국), Lokoya(미국), Mt. Brave(미국), Hichinbotham(호주)]",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "카버네 프랑",
    "grapeNames": [
      "높은 고도의 포도밭은 항상 고도의 노동력이 필요합니다. 얇은 암석으로 이루어진 토양과 가파른 경사면에 위치하고 있어 배수 능력은 좋지만",
      "항상 붕괴의 위험을 가지고 있습니다. 높은 고도로 인해 늘 서늘한 기후를 가지고 있으며",
      "태양광 노출을 산 아래 지역보다 더 많이 받을 수 있습니다. 이러한 떼루아를 통해 포도는 최적의 숙성과 품종의 복잡미를 최상으로 가지게 됩니다."
    ]
  },
  {
    "slug": "merlot",
    "nameKo": "(Merlot)",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "마운틴 비더 AVA (Mt. Veeder) / 나파 밸리 (Napa Valley)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "마운틴 브레이브의 포도밭은 비더 산의 가장 꼭대기인 해수면 550m 지점에 위치하고 있습니다. 비더 산은 선구자 와인메이커인 찰스 크뤼그, 프레드릭 헤스등에 의해 그 명성을 이미 증명 받은 명품 와인산지 입니다. 마운틴 브레이브의 포도밭은 1841년에 구매했던 포도밭으로 현재는 마운틴 비더 AVA에 속하는 지역입니다. 크리스토퍼 카펜터 (Christopher Carpenter) ※나파밸리의 스타와인 메이커※ [Cardinale(미국), Lokoya(미국), Mt. Brave(미국), Hichinbotham(호주)]",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "멀롯",
    "grapeNames": [
      "높은 고도의 포도밭은 항상 고도의 노동력이 필요합니다. 얇은 암석으로 이루어진 토양과 가파른 경사면에 위치하고 있어 배수 능력은 좋지만",
      "항상 붕괴의 위험을 가지고 있습니다. 높은 고도로 인해 늘 서늘한 기후를 가지고 있으며",
      "태양광 노출을 산 아래 지역보다 더 많이 받을 수 있습니다. 이러한 떼루아를 통해 포도는 최적의 숙성과 품종의 복잡미를 최상으로 가지게 됩니다."
    ]
  },
  {
    "slug": "old-soul-chardonnay",
    "nameKo": "Old Soul Chardonnay",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "로다이(Lodi) - 캘리포니아(California) - 미국(USA)",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 12,
    "foodPairing": "[\"▶ 연어 회\", \"후라이드 치킨\", \"훈제 오리\", \"그린샐러드 등\"]",
    "description": "오랜 시간을 견뎌낸 나무는 깊은 뿌리를 뻗어 가뭄에 강합니다. 위로는 높게 가지를 내기 때문에 과실이 골고루 익어 어린 나무에 비해 보다 진하고 깊이 있는 맛을 내며, 품질에 기복이 적은 포도를 만들어 냅니다. 과거의 사람들은 이러한 올드 바인에 영혼이 있다고 믿으며, 지난 날에 대한 감사와 미래에 대한 기원을 담아 나무에 빌었습니다. 와인 병에 그려진 나무 모양의 라벨은, 나무가 훌륭한 열매를 맺도록 하기 위하여 오랜 세월에 걸쳐 깊은 뿌리와 높은 가지를 지니게 되었음을 표현하고 있습니다. 올드 소울 샤도네이는 스테인리스 스틸 탱크에서 발효 후 살짝 토스트한 오크통에서 숙성을 진행 합니다. 아메리칸 / 프렌치 오크 숙성액의 블렌딩 및 와인에 꼭 맞는 기간 동안 숙성 함으로써 과실이 간직한 열대 과일의 상큼함과 오크가 주는 풍부한 부드러움을 모두 담아냈습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "올드 소울 샤도네이",
    "grapeNames": []
  },
  {
    "slug": "old-soul-old-vine-zinfandel",
    "nameKo": "Old Soul Old Vine Zinfandel",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "로다이(Lodi) - 캘리포니아(California) - 미국(USA)",
    "volume": 750,
    "servingTempMin": 15,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 마가리타 피자\", \"돼지 수육 등\"]",
    "description": "오랜 시간을 견뎌낸 나무는 깊은 뿌리를 뻗어 가뭄에 강합니다. 위로는 높게 가지를 내기 때문에 과실이 골고루 익어 어린 나무에 비해 보다 진하고 깊이 있는 맛을 내며, 품질에 기복이 적은 포도를 만들어 냅니다. 과거의 사람들은 이러한 올드 바인에 영혼이 있다고 믿으며, 지난 날에 대한 감사와 미래에 대한 기원을 담아 나무에 빌었습니다. 와인 병에 그려진 나무 모양의 라벨은, 나무가 훌륭한 열매를 맺도록 하기 위하여 오랜 세월에 걸쳐 깊은 뿌리와 높은 가지를 지니게 되었음을 표현하고 있습니다. 올드 소울 올드바인 진판델은 와이너리 소유의 50~75년 수령을 지닌 진판델 나무의 과실을 선별하여 만든 와인입니다. 라즈베리, 블렉베리, 체리의 향과 함께 초콜릿의 향이 은은하게 맴돕니다. 와인이 가진 부드러운 탄닌이 오랫동안 입안에서 느껴지는, 피니시가 좋은 와인입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "올드 소울 올드바인 진판델",
    "grapeNames": []
  },
  {
    "slug": "old-soul-cabernet-sauvignon",
    "nameKo": "Old Soul Cabernet Sauvignon",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "로다이(Lodi) - 캘리포니아(California) - 미국(USA)",
    "volume": 750,
    "servingTempMin": 15,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 구운 소고기 및 돼지고기 요리\"]",
    "description": "오랜 시간을 견뎌낸 나무는 깊은 뿌리를 뻗어 가뭄에 강합니다. 위로는 높게 가지를 내기 때문에 과실이 골고루 익어 어린 나무에 비해 보다 진하고 깊이 있는 맛을 내며, 품질에 기복이 적은 포도를 만들어 냅니다. 과거의 사람들은 이러한 올드 바인에 영혼이 있다고 믿으며, 지난 날에 대한 감사와 미래에 대한 기원을 담아 나무에 빌었습니다. 와인 병에 그려진 나무 모양의 라벨은, 나무가 훌륭한 열매를 맺도록 하기 위하여 오랜 세월에 걸쳐 깊은 뿌리와 높은 가지를 지니게 되었음을 표현하고 있습니다. 올드 소울 카버네 소비뇽은 부드러운 질감과 달콤하게 익은 검은 과실, 바닐라의 향이 조화로우며, 입 안을 기분 좋게 감싸는 탄닌과 블랙베리의 여운으로 마무리 됩니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "올드 소울 카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "t-n-t-zinfandel",
    "nameKo": "T.N.T Zinfandel",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "로다이(Lodi) - 캘리포니아(California) - 미국(USA)",
    "volume": 750,
    "servingTempMin": 15,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 바비큐\", \"양 스테이크\", \"페퍼로니 피자\"]",
    "description": "로다이 지역 100% 와이너리 소유의 포도밭에서 재배한 포도로 만들어집니다. 색과 타닌을 추출하면서도 신선한 과일 향을 유지하기 위해 저온 온도에서 발효 후 8개월간 숙성합니다. 자두, 블랙베리와 같은 검은 과실 향이 중심을 이루며, 은은한 스모키 뉘앙스가 느껴집니다. 입안에서는 잼 같은 질감과 함께 농익은 검은 과실 미가 풍성하게 퍼지며, 감초, 후추의 향신료 뉘앙스가 마무리에 길게 이어집니다. 로다이 진판델 특유의 파워풀한 개성을 즐길 수 있는",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "티.앤.티 진판델",
    "grapeNames": []
  },
  {
    "slug": "opus-one-2019",
    "nameKo": "Opus One 2019",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Napa Valley",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 스테이크\", \"비프 스튜\", \"갈비\", \"양고기 등\"]",
    "description": "2019년의 나파 밸리는 비가 많았던 해로 기억됩니다. 봄철 평년의 두 배에 가까운 비가 내리면서 토양이 충분한 비를 머금었고 포도 나무의 새싹이 평년보다 보름이나 늦게 돋아나면서 전체적인 성장이 늦어졌습니다. 그러나 여름이 끝날 무렵 더위가 찾아오면서 포도의 성숙이 가속화되었고, 오히려 평년보다 이른 시기에 수확을 시작할 수 있게 되었습니다. 4주간의 수확 기간을 거친 후 와인은 뉴 프렌치 오크에서 19개월간의 숙성을 거쳤습니다. 2019 빈티지의 오퍼스 원은 검은 자두와 블랙베리, 블랙 커런트 등 검은 과실류와 말린 장미 꽃잎의 아로마가 강렬하게 느껴집니다.  은은한 미네랄리티가 이를 더욱 두드러지게 하는 가운데 크리미하고 매끈한 텍스쳐가 잘 정리된 세련된 타닌과 함께 나타납니다. 신선하면서도 부드럽게 빛나는 산도가 진한 과일향과 고소한 허브,  에스프레소, 코코아 등에 어우러지면서 은은한 긴장감을 자아내며 섬세한 다크 초콜릿의 씁쓸한 달콤함이 긴 피니시로 이어집니다. 샤또 무똥 로쉴드의 와인 메이커 Lucien Sionneau와 로버트 몬다비의 아들 Timothy는 1979년 몬다비 와이너리에서 첫 합작 와인을 만들었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "오퍼스 원 2019",
    "grapeNames": [
      "Cabernet Sauvignon 78%",
      "Merlot 8%",
      "Petit Verdot 6%",
      "Cabernet Franc 6%",
      "Malbec 2%"
    ]
  },
  {
    "slug": "overture",
    "nameKo": "Overture",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Napa Valley",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 스테이크\", \"갈비찜\", \"불고기\"]",
    "description": "오버츄어의 뜻은 ‘서곡’으로 위대한 오페라의 막이 오르기 전 연주되는 서곡같은 와인으로 여러해의 빈티지를 블렌딩 해서 만들어 집니다. 오퍼스 원은 빈얀드 각각의 섹션(lot)을 세심하게 재배하고 배럴 숙성 하는 와인으로 재배된 포도 중 오퍼스 원으로 생산하지 않는 와인을 추가적인 숙성과 블렌딩을 통해 프리미엄 세컨트 와인 오버츄어로 만들어 집니다. 우아하고 복합미를 가진 롱 피니쉬를 선사하는 와인입니다. 여러 빈티지 블렌딩하여 유연하고 바로 음용 하기에 좋습니다",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "오버츄어",
    "grapeNames": [
      "Cabernet Sauvignon 80%",
      "Cabernet Franc 6%"
    ]
  },
  {
    "slug": "schrader-cabernet-sauvignon",
    "nameKo": "Schrader Cabernet Sauvignon",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Beckstoffer To Kalon Vineyard-Napa Valley, Oakville",
    "volume": 750,
    "foodPairing": "[]",
    "description": "블랙 베리, 체리, 올리브 등 검은 과실의 향이 클래식하게 입안 가득 어우러집니다. 검은 과실의 밀도 있는 맛과 동시에 은은한 달콤한 떡갈나무의 향으로 균형 잡힌 맛을 제공합니다. Schrader Cabernet Sauvignon은 장기 숙성 시 진가를 발휘하지만 지금 드셔도 좋은 와인입니다. 단단하면서도 거친 탄닌을 가진 이 와인은 미디엄 풀바디로, 각 층마다 풍부한 미네랄 향과 흙 내음을 느낄 수 있으며 신선하면서도 1시간 이상 지속되는 긴 여운을 가져다 줍니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "슈레이더 카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "schrader-ccs-cabernet-sauvignon",
    "nameKo": "SCHRADER CCS CABERNET SAUVIGNON",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Beckstoffer To Kalon Vineyard-Napa Valley, Oakville",
    "volume": 750,
    "foodPairing": "[]",
    "description": "슈레이더 CCS는 블랙베리, 토스트우드, 향신료, 블랙 감초가 어우러진 아로마를 제공합니다. 탄닌과 진한 커피의 향, 검은 과일의 마무리가 어우러져 이국적인 느낌의 강한 향을 느낄 수 있습니다. 달콤한 과일, 참나무, 그리고 균형 잡힌 산미의 이상적인 조합은 바로 드시는 것 보다 장기 숙성을 권장합니다. 미디엄 풀 바디로 흙이 뭍은 듯한 검은 과일의 아로마가 입안을 가득 채우며 마치 씹는 듯한 식감의 고소한 마무리가 인상적인 와인입니다. 골동품 딜러였던 프레드 슈레이더(Fred Schrader)는 그의 친구 Brian Cole의 초대로 참석한 1988년 나파 밸리 와인 경매 행사를 시작으로 와인 제조업자로서의 인생을 시작하였습니다. 그는 세계 최고의 카버네 소비뇽을 찾기 위해 고군분투 했으며 2000년에 그는 결국 밸런스는 물론 풍미, 독특함을 지닌 오크빌의 Beckstoffer To Kalon 빈야드를 발견하였습니다. 최고의 포도에 걸맞은 최고의 와인 메이커를 찾아 나선 Fred는 Calistoga의 한 와인샵에서 세심함과 와인에 대한 열정을 가진 Thomas Rivers를 만나면서 지금의 Schrader가 탄생하게 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "슈레이더 CCS 카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "cabernet-sauvignon-3",
    "nameKo": "SCHRADER “COLESWORTHY”",
    "nameEn": "CABERNET SAUVIGNON",
    "type": "red",
    "country": "USA",
    "regionL1": "Beckstoffer Las Piedras Vineyard-Napa Valley, St. Helena",
    "volume": 750,
    "foodPairing": "[]",
    "description": "Beckstoffer Las Piedras 빈야드의 최고의 배럴에서 숙성된 슈레이더 콜스워시는 카시스, 바닐라, 블랙베리의 아로마와 동시에 입맛을 돋우는 연필심, 미네랄의 향이 어우러집니다. 굉장히 관능적인 와인으로 과실의 향과 부드러운 탄닌이 입안에서 마치 강렬한 춤을 추는 것과 같은 느낌을 제공합니다. 길고 선명하게 마무리되어 강렬한 쾌감을 선사합니다. 미디엄 풀바디로 신선함이 잘 드러나며 부드러운 탄닌이 화사하면서도 붉은 과일과 검은 과일의 맛을 받쳐줘 활기찬 긴 여운을 가져다 줍니다. 골동품 딜러였던 프레드 슈레이더(Fred Schrader)는 그의 친구 Brian Cole의 초대로 참석한 1988년 나파 밸리 와인 경매 행사를 시작으로 와인 제조업자로서의 인생을 시작하였습니다. 그는 세계 최고의 카버네 소비뇽을 찾기 위해 고군분투 했으며 2000년에 그는 결국 밸런스는 물론 풍미, 독특함을 지닌 오크빌의 Beckstoffer To Kalon 빈야드를 발견하였습니다. 최고의 포도에 걸맞은 최고의 와인 메이커를 찾아 나선 Fred는 Calistoga의 한 와인샵에서 세심함과 와인에 대한 열정을 가진 Thomas Rivers를 만나면서 지금의 Schrader가 탄생하게 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "슈레이더 콜스월시 카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "schrader-rbs-cabernet-sauvignon",
    "nameKo": "SCHRADER RBS CABERNET SAUVIGNON",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Beckstoffer To Kalon Vineyard-Napa Valley, Oakville",
    "volume": 750,
    "foodPairing": "[]",
    "description": "매우 풍부하면서 밀도가 강하며 집중력이 뛰어난 와인입니다. Pure Clone 337이 제공하는 라즈베리와 블루베리의 맛이 어우러지며 입 안 가득 차는 것을 느낄 수 있습니다. 미묘하게 느껴지는 오크 나무의 스파이시하면서도 달콤한 감초의 향으로 마무리됩니다. 골동품 딜러였던 프레드 슈레이더(Fred Schrader)는 그의 친구 Brian Cole의 초대로 참석한 1988년 나파 밸리 와인 경매 행사를 시작으로 와인 제조업자로서의 인생을 시작하였습니다. 그는 세계 최고의 카버네 소비뇽을 찾기 위해 고군분투 했으며 2000년에 그는 결국 밸런스는 물론 풍미, 독특함을 지닌 오크빌의 Beckstoffer To Kalon 빈야드를 발견하였습니다. 최고의 포도에 걸맞은 최고의 와인 메이커를 찾아 나선 Fred는 Calistoga의 한 와인샵에서 세심함과 와인에 대한 열정을 가진 Thomas Rivers를 만나면서 지금의 Schrader가 탄생하게 되었습니다. 오크빌의 Beckstoffer To Kalon 빈야드는 높은 미네랄 함량과 동시에 배수가 잘 되는 것으로 유명합니다. 특히, 남북에서 비추는 햇빛과 밤에 부는 시원한 해풍은 카베네 소비뇽을 재배하기에 이상적인 환경을 제공합니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "슈레이더 RBS 카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "schrader-old-sparky-cabernet-sauvignon",
    "nameKo": "SCHRADER “OLD SPARKY” CABERNET SAUVIGNON",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Beckstoffer To Kalon Vineyard-Napa Valley, Oakville",
    "volume": 750,
    "foodPairing": "[]",
    "description": "가장 훌륭한 배럴에서 숙성된 올드 스파키는 검은 과실, 블루베리, 에스프레소의 향과 동시에 다크 초콜릿블랙 베리의 노트가 느껴집니다. 잘 짜여진 탄닌이 과실의 향에 어우러져 균형을 잡아줍니다. 건포도 향과 동시에 타바코의 맛으로 마무리 되며 장기 숙성 했을 때 올드 스파키의 복합적이면서도 탁월한 맛을 가장 잘 즐길 수 있습니다. 풀바디의 와인으로 단단하면서도 벨벳 텍스처의 탄닌이 입안 가득 어우러지며 풍부하면서도 스파이시한 검은 과실의 긴 여운을 느낄 수 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "슈레이더 “올드 스파키” 카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "schrader-t6-cabernet-sauvignon",
    "nameKo": "SCHRADER T6 CABERNET SAUVIGNON",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Beckstoffer To Kalon Vineyard-Napa Valley, Oakville",
    "volume": 750,
    "foodPairing": "[]",
    "description": "슈레이더 와인 중 가장 특별한 와인으로 꼽히는 슈레이더 T6는 Pure clone 6에서 제공하는 뛰어난 과실과 향신료 풍미로 어우러져 있습니다. 블랙 체리와 라즈베리 향이 조화를 이루고 있으며, 검은 감초와 말린 허브의 고소한 향이 미각 전체에 퍼지는 것을 느낄 수 있습니다. 탄닌이 강하게 드러나기보다 긴 여운과 함께 매력적으로 마무리되어 어우러집니다. 미디엄 풀바디로 거친 텍스처의 탄닌과 동시에 느껴지는 사랑스러운 상큼함이 자극적으로 알싸한 블랙베리의 향을 더욱 자극합니다. 마무리는 달인 차의 향을 느낄 수 있습니다. 골동품 딜러였던 프레드 슈레이더(Fred Schrader)는 그의 친구 Brian Cole의 초대로 참석한 1988년 나파 밸리 와인 경매 행사를 시작으로 와인 제조업자로서의 인생을 시작하였습니다. 그는 세계 최고의 카버네 소비뇽을 찾기 위해 고군분투 했으며 2000년에 그는 결국 밸런스는 물론 풍미, 독특함을 지닌 오크빌의 Beckstoffer To Kalon 빈야드를 발견하였습니다. 최고의 포도에 걸맞은 최고의 와인 메이커를 찾아 나선 Fred는 Calistoga의 한 와인샵에서 세심함과 와인에 대한 열정을 가진 Thomas Rivers를 만나면서 지금의 Schrader가 탄생하게 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "슈레이더 T6 카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "cabernet-sauvignon-4",
    "nameKo": "DOUBLE DIAMOND",
    "nameEn": "CABERNET SAUVIGNON",
    "type": "red",
    "country": "USA",
    "regionL1": "Napa Valley, Oakville",
    "volume": 750,
    "foodPairing": "[]",
    "description": "Oakville AVA는 Vaca와 Mayacamas 산맥 사이에 자리잡고 있어 회복력이 강한 토양을 자랑하며 햇빛, 시원한 바람, 비가 이상적인 조화를 이뤄 최고의 카버네 소비뇽을 생산합니다. 강렬한 과일의 향과 이국적인 향신료의 향이 조화롭게 어우러지는 와인으로 바로 드셔도 되지만 셀러에서 3-5년 정도 보관하시면 더욱 풍부한 맛을 즐기실 수 있을 것입니다. 2022년 Wine Spectator 1위",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "더블 다이아몬드 카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "schrader-lpv-cabernet-sauvignon",
    "nameKo": "Schrader LPV Cabernet Sauvignon",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "▶ 원산지 Beckstoffer Las Piedras Vineyard-Napa Valley, Oakville",
    "volume": 750,
    "foodPairing": "[]",
    "description": "St. Helena의 북서쪽에 위치하는 Las Piedras Vineyard는 150년 이상된 유서깊은 와이너리로, “Las Piedras”는 스페인어로 “돌＂을 의미하는데 이것은 토양의 구성을 표현한 것입니다. 포도밭의 바위와 조약돌은 배수를 쉽게 하고 포도 덩굴의 뿌리가 물과 영양분을 찾아 깊에 자라게 합니다. 골동품 딜러였던 프레드 슈레이더(Fred Schrader)는 그의 친구 Brian Cole의 초대로 참석한 1988년 나파 밸리 와인 경매 행사를 시작으로 와인 제조업자로서의 인생을 시작하였습니다. 그는 세계 최고의 카버네 소비뇽을 찾기 위해 고군분투 했으며 2000년에 그는 결국 밸런스는 물론 풍미, 독특함을 지닌 오크빌의 Beckstoffer To Kalon 빈야드를 발견하였습니다. 최고의 포도에 걸맞은 최고의 와인 메이커를 찾아 나선 Fred는 Calistoga의 한 와인샵에서 세심함과 와인에 대한 열정을 가진 Thomas Rivers를 만나면서 지금의 Schrader가 탄생하게 되었습니다. 오크빌의 Beckstoffer To Kalon 빈야드는 높은 미네랄 함량과 동시에 배수가 잘 되는 것으로 유명합니다. 특히, 남북에서 비추는 햇빛과 밤에 부는 시원한 해풍은 카베네 소비뇽을 재배하기에 이상적인 환경을 제공합니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "슈레이더 LPV 카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "schrader-gii-cabernet-sauvignon",
    "nameKo": "Schrader GII Cabernet Sauvignon",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "▶ 원산지 Beckstoffer Georges III Vineyard-Napa Valley, Oakville",
    "volume": 750,
    "foodPairing": "[]",
    "description": "1800년대에 심어진 Beckstoffer Georges III 빈야드는 가장 역사가 깊은 포도밭 중 하나였으며, 원래 나파강의 일부에 속해 있었습니다. 20세기 중반 홍수 방지를 위해 강둑을 옮겼고 결과적으로 이 포도밭은 강바닥에 남겨진 바위가 많은 지형적 조건을 가져 미네랄이 풍부한 와인을 생산하게 되었습니다. 골동품 딜러였던 프레드 슈레이더(Fred Schrader)는 그의 친구 Brian Cole의 초대로 참석한 1988년 나파 밸리 와인 경매 행사를 시작으로 와인 제조업자로서의 인생을 시작하였습니다. 그는 세계 최고의 카버네 소비뇽을 찾기 위해 고군분투 했으며 2000년에 그는 결국 밸런스는 물론 풍미, 독특함을 지닌 오크빌의 Beckstoffer To Kalon 빈야드를 발견하였습니다. 최고의 포도에 걸맞은 최고의 와인 메이커를 찾아 나선 Fred는 Calistoga의 한 와인샵에서 세심함과 와인에 대한 열정을 가진 Thomas Rivers를 만나면서 지금의 Schrader가 탄생하게 되었습니다. 오크빌의 Beckstoffer To Kalon 빈야드는 높은 미네랄 함량과 동시에 배수가 잘 되는 것으로 유명합니다. 특히, 남북에서 비추는 햇빛과 밤에 부는 시원한 해풍은 카베네 소비뇽을 재배하기에 이상적인 환경을 제공합니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "슈레이더 GII 카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "double-diamond-cabernet-sauvignon",
    "nameKo": "DOUBLE DIAMOND CABERNET SAUVIGNON",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Napa Valley, Oakville",
    "volume": 750,
    "foodPairing": "[]",
    "description": "Oakville AVA는 Vaca와 Mayacamas 산맥 사이에 자리잡고 있어 회복력이 강한 토양을 자랑하며 햇빛, 시원한 바람, 비가 이상적인 조화를 이뤄 최고의 카버네 소비뇽을 생산합니다. 강렬한 과일의 향과 이국적인 향신료의 향이 조화롭게 어우러지는 와인으로 바로 드셔도 되지만 셀러에서 3-5년 정도 보관하시면 더욱 풍부한 맛을 즐기실 수 있을 것입니다. 골동품 딜러였던 프레드 슈레이더(Fred Schrader)는 그의 친구 Brian Cole의 초대로 참석한 1988년 나파 밸리 와인 경매 행사를 시작으로 와인 제조업자로서의 인생을 시작하였습니다. 그는 세계 최고의 카버네 소비뇽을 찾기 위해 고군분투 했으며 2000년에 그는 결국 밸런스는 물론 풍미, 독특함을 지닌 오크빌의 Beckstoffer To Kalon 빈야드를 발견하였습니다. 최고의 포도에 걸맞은 최고의 와인 메이커를 찾아 나선 Fred는 Calistoga의 한 와인샵에서 세심함과 와인에 대한 열정을 가진 Thomas Rivers를 만나면서 지금의 Schrader가 탄생하게 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "더블 다이아몬드 카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "double-diamond-red",
    "nameKo": "DOUBLE DIAMOND RED",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Napa Valley, Oakville",
    "volume": 750,
    "foodPairing": "[]",
    "description": "2021년 빈티지로 새로이 출시된 더블 다이아몬드 레드는 토마스 리버스 브라운 (Thomas Rivers Brown)의 야심작으로, 타고난 능력과 와인 양조에 대한 변함없는 헌신으로 포도밭 관리부터 와인 양조 전반적으로 감독 관리하여 태어난 와인입니다. 석류와 피망, 철분, 바닐라빈이 섞인 향기로운 향을 보여줍니다. 입안에서는 풍부한 레드와 블루 과일이 블랙베리 콩포트, 다크 초콜릿, 에스프레소 풍미와 만납니다. 이 풀바디 와인은 실크처럼 매끄러운 탄닌과 어느 음식에도 잘 어울리는 산도, 오래 지속되는 피니시를 갖추었으며, 출시와 동시에 바로 마실 수도 있으나 앞으로 몇 년간 셀러에 보관해도 더욱 멋진 와인이 될 것입니다. 카버네 프랑 (Cabernet Franc) 24%",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "더블 다이아몬드 레드",
    "grapeNames": []
  },
  {
    "slug": "schrader-ccs-cabernet-sauvignon-2",
    "nameKo": "SCHRADER CCS CABERNET SAUVIGNON",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Beckstoffer To Kalon Vineyard-Napa Valley, Oakville",
    "volume": 750,
    "foodPairing": "[]",
    "description": "슈레이더 CCS는 블랙베리, 토스트우드, 향신료, 블랙 감초가 어우러진 아로마를 제공합니다. 탄닌과 진한 커피의 향, 검은 과일의 마무리가 어우러져 이국적인 느낌의 강한 향을 느낄 수 있습니다. 달콤한 과일, 참나무, 그리고 균형 잡힌 산미의 이상적인 조합은 바로 드시는 것 보다 장기 숙성을 권장합니다. 미디엄 풀 바디로 흙이 뭍은 듯한 검은 과일의 아로마가 입안을 가득 채우며 마치 씹는 듯한 식감의 고소한 마무리가 인상적인 와인입니다. 골동품 딜러였던 프레드 슈레이더(Fred Schrader)는 그의 친구 Brian Cole의 초대로 참석한 1988년 나파 밸리 와인 경매 행사를 시작으로 와인 제조업자로서의 인생을 시작하였습니다. 그는 세계 최고의 카버네 소비뇽을 찾기 위해 고군분투 했으며 2000년에 그는 결국 밸런스는 물론 풍미, 독특함을 지닌 오크빌의 Beckstoffer To Kalon 빈야드를 발견하였습니다. 최고의 포도에 걸맞은 최고의 와인 메이커를 찾아 나선 Fred는 Calistoga의 한 와인샵에서 세심함과 와인에 대한 열정을 가진 Thomas Rivers를 만나면서 지금의 Schrader가 탄생하게 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "슈레이더 CCS 카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "schrader-rbs-cabernet-sauvignon-2",
    "nameKo": "SCHRADER RBS CABERNET SAUVIGNON",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Beckstoffer To Kalon Vineyard-Napa Valley, Oakville",
    "volume": 750,
    "foodPairing": "[]",
    "description": "매우 풍부하면서 밀도가 강하며 집중력이 뛰어난 와인입니다. Pure Clone 337이 제공하는 라즈베리와 블루베리의 맛이 어우러지며 입 안 가득 차는 것을 느낄 수 있습니다. 미묘하게 느껴지는 오크 나무의 스파이시하면서도 달콤한 감초의 향으로 마무리됩니다. 골동품 딜러였던 프레드 슈레이더(Fred Schrader)는 그의 친구 Brian Cole의 초대로 참석한 1988년 나파 밸리 와인 경매 행사를 시작으로 와인 제조업자로서의 인생을 시작하였습니다. 그는 세계 최고의 카버네 소비뇽을 찾기 위해 고군분투 했으며 2000년에 그는 결국 밸런스는 물론 풍미, 독특함을 지닌 오크빌의 Beckstoffer To Kalon 빈야드를 발견하였습니다. 최고의 포도에 걸맞은 최고의 와인 메이커를 찾아 나선 Fred는 Calistoga의 한 와인샵에서 세심함과 와인에 대한 열정을 가진 Thomas Rivers를 만나면서 지금의 Schrader가 탄생하게 되었습니다. 오크빌의 Beckstoffer To Kalon 빈야드는 높은 미네랄 함량과 동시에 배수가 잘 되는 것으로 유명합니다. 특히, 남북에서 비추는 햇빛과 밤에 부는 시원한 해풍은 카베네 소비뇽을 재배하기에 이상적인 환경을 제공합니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "슈레이더 RBS 카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "schrader-heritage-clone-cabernet-sauvignon",
    "nameKo": "카버네 소비뇽",
    "nameEn": "Schrader Heritage Clone Cabernet Sauvignon",
    "type": "red",
    "country": "USA",
    "regionL1": "▶ 원산지 To Kalon Vineyard-Napa Valley, Oakville",
    "volume": 750,
    "foodPairing": "[]",
    "description": "Schrader Heritage Clone Cabernet Sauvignon To Kalon 빈야드의 한 블록에서 만들어진 이 “Heritage Clone”은 매우 작은 베리와 매우 낮은 수확량으로 아주 적은 수량의 와인만 생산합니다. 그러나 포도 과실의 품질은 논쟁의 여지가 없습니다. 뛰어난 밸런스와 생기 있는 산미의 이 와인은 우아하고 표현력이 매우 뛰어난 레드와인입니다. 골동품 딜러였던 프레드 슈레이더(Fred Schrader)는 그의 친구 Brian Cole의 초대로 참석한 1988년 나파 밸리 와인 경매 행사를 시작으로 와인 제조업자로서의 인생을 시작하였습니다. 그는 세계 최고의 카버네 소비뇽을 찾기 위해 고군분투 했으며 2000년에 그는 결국 밸런스는 물론 풍미, 독특함을 지닌 오크빌의 Beckstoffer To Kalon 빈야드를 발견하였습니다. 최고의 포도에 걸맞은 최고의 와인 메이커를 찾아 나선 Fred는 Calistoga의 한 와인샵에서 세심함과 와인에 대한 열정을 가진 Thomas Rivers를 만나면서 지금의 Schrader가 탄생하게 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "슈레이더 헤리티지 클론",
    "grapeNames": []
  },
  {
    "slug": "schrader-monastery-block-cabernet-sauvignon",
    "nameKo": "카버네 소비뇽",
    "nameEn": "Schrader Monastery Block Cabernet Sauvignon",
    "type": "red",
    "country": "USA",
    "regionL1": "▶ 원산지 To Kalon Vineyard-Napa Valley, Oakville",
    "volume": 750,
    "foodPairing": "[]",
    "description": "Schrader Monastery Block Cabernet Sauvignon 1868년 와인 양조의 아이콘인 Hamilton Crabb에 의해 처음으로 포도나무를 심은 To Kalon은 오랫동안 나파 밸리의 가장 훌륭한 카버네 소비뇽을 만드는 포도밭으로 찬양을 받아왔습니다. 포도밭 내 충적토는 다양한 해저퇴적물이 풍부하며 와인에 개성을 제공합니다. 골동품 딜러였던 프레드 슈레이더(Fred Schrader)는 그의 친구 Brian Cole의 초대로 참석한 1988년 나파 밸리 와인 경매 행사를 시작으로 와인 제조업자로서의 인생을 시작하였습니다. 그는 세계 최고의 카버네 소비뇽을 찾기 위해 고군분투 했으며 2000년에 그는 결국 밸런스는 물론 풍미, 독특함을 지닌 오크빌의 Beckstoffer To Kalon 빈야드를 발견하였습니다. 최고의 포도에 걸맞은 최고의 와인 메이커를 찾아 나선 Fred는 Calistoga의 한 와인샵에서 세심함과 와인에 대한 열정을 가진 Thomas Rivers를 만나면서 지금의 Schrader가 탄생하게 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "슈레이더 모나스트리 블록",
    "grapeNames": []
  },
  {
    "slug": "schrader-wappo-hill-cabernet-sauvignon",
    "nameKo": "카버네 소비뇽",
    "nameEn": "Schrader Wappo Hill Cabernet Sauvignon",
    "type": "red",
    "country": "USA",
    "regionL1": "▶ 원산지 To Kalon Vineyard-Napa Valley, Oakville",
    "volume": 750,
    "foodPairing": "[]",
    "description": "Schrader Wappo Hill Cabernet Sauvignon 스택스립 지역에 있는 와포 힐 포도밭은 1969년에 처음으로 포도를 재배하기 시작하였습니다. 이 곳은 배수가 잘 되고 자갈이 깔린 흙 위에 포도나무를 심었습니다. 시원한 아침, 따뜻한 오후, 다시 한번 시원한 저녁으로 끝나는 하루를 고스란히 느끼며 유난히 균형잡힌 산미를 가진 강렬한 맛의 과일을 생산합니다. 골동품 딜러였던 프레드 슈레이더(Fred Schrader)는 그의 친구 Brian Cole의 초대로 참석한 1988년 나파 밸리 와인 경매 행사를 시작으로 와인 제조업자로서의 인생을 시작하였습니다. 그는 세계 최고의 카버네 소비뇽을 찾기 위해 고군분투 했으며 2000년에 그는 결국 밸런스는 물론 풍미, 독특함을 지닌 오크빌의 Beckstoffer To Kalon 빈야드를 발견하였습니다. 최고의 포도에 걸맞은 최고의 와인 메이커를 찾아 나선 Fred는 Calistoga의 한 와인샵에서 세심함과 와인에 대한 열정을 가진 Thomas Rivers를 만나면서 지금의 Schrader가 탄생하게 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "슈레이더 와포 힐",
    "grapeNames": []
  },
  {
    "slug": "schrader-old-sparky-cabernet-sauvignon-2",
    "nameKo": "SCHRADER “OLD SPARKY” CABERNET SAUVIGNON",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Beckstoffer To Kalon Vineyard-Napa Valley, Oakville",
    "volume": 750,
    "foodPairing": "[]",
    "description": "가장 훌륭한 배럴에서 숙성된 올드 스파키는 검은 과실, 블루베리, 에스프레소의 향과 동시에 다크 초콜릿블랙 베리의 노트가 느껴집니다. 잘 짜여진 탄닌이 과실의 향에 어우러져 균형을 잡아줍니다. 건포도 향과 동시에 타바코의 맛으로 마무리 되며 장기 숙성 했을 때 올드 스파키의 복합적이면서도 탁월한 맛을 가장 잘 즐길 수 있습니다. 풀바디의 와인으로 단단하면서도 벨벳 텍스처의 탄닌이 입안 가득 어우러지며 풍부하면서도 스파이시한 검은 과실의 긴 여운을 느낄 수 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "슈레이더 “올드 스파키” 카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "red-wine",
    "nameKo": "▶ 종    류 : Red Wine",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Napa Valley",
    "volume": 750,
    "foodPairing": "[]",
    "description": "“스크리밍 이글은 완벽함 그 자체(Utter Perfection)이다” – by 로버트 파커 검붉은 베리, 꽃, 민트, 양념류의 향이 아름답게 어우러져 있습니다. 다층적인 과실 풍미는 길고 매혹적인 여운으로 매끈히 이어집니다. 넋을 빼놓을 정도로 아름다운 모든 요소는 완벽히 적재적소에 놓여져 있다. 또한 위대한 뮈지니를 연상시키는 부케가 긴 피니쉬로 이어집니다. 섬세하면서도 우아한 텍스쳐가 담긴 탄닌이 나파 특유의 풍부한 과실미와 함께 완벽한 조화를 선사합니다. 특히 스크리밍 이글과 같은 탑 컬트 와인들은 셀러에서의 충분한 숙성 잠재력이 보장되며, 세월과 함께 눈부신 아름다움을 선사할 것입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "▶ 원산지 : 오크빌(Oakville) - 나파 밸리(Napa Valley)",
    "grapeNames": []
  },
  {
    "slug": "red-wine-2",
    "nameKo": "▶ 종  류 : Red Wine",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Napa Valley",
    "volume": 750,
    "foodPairing": "[]",
    "description": "극히 적은 생산량에 열광적인 추종자가 찾는다는 ‘컬트 와인’ 가운데에서도 스크리밍 이글은 유독 희귀한 와인으로 알려져 있습니다. 하나의 컬트 와인을 수집한다면 스크리밍 이글을 꼽는다는 업계의 정론이 만들어진 이유는 무엇일까요. 스크리밍 이글의 양조 팀은 가히 별들의 잔치라 칭할 수 있습니다. 포도밭의 장인 데이빗 애브루(David Abreu)와 슈퍼 스타 컨설턴트 미셸 롤랑(Michel Rolland)의 조력, 천재 와인메이커 엔디 에릭슨(Andy Erickson)에 이어 2010년 혜성처럼 등장한 닉 기스레슨(Nick Gislason)까지. 이보다 더 중요한 것은 1986년 설립하여 포도밭을 개간하고 첫 빈티지(1992)를 출시한 1995년부터 오늘날까지 그들의 철학과 품질을 변함 없이 유지해 왔다는 사실입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "▶ 원산지 : 오크빌(Oakville) - 나파 밸리(Napa Valley)",
    "grapeNames": []
  },
  {
    "slug": "white-wine-2",
    "nameKo": "▶ 종  류 : White Wine",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Napa Valley",
    "volume": 750,
    "foodPairing": "[]",
    "description": "Screaming Eagle Sauvignon Blanc 극히 적은 생산량에 열광적인 추종자가 찾는다는 ‘컬트 와인’ 가운데에서도 스크리밍 이글은 유독 희귀한 와인으로 알려져 있습니다. 하나의 컬트 와인을 수집한다면 스크리밍 이글을 꼽는다는 업계의 정론이 만들어진 이유는 무엇일까요. 스크리밍 이글의 양조 팀은 가히 별들의 잔치라 칭할 수 있습니다. 포도밭의 장인 데이빗 애브루(David Abreu)와 슈퍼 스타 컨설턴트 미셸 롤랑(Michel Rolland)의 조력, 천재 와인메이커 엔디 에릭슨(Andy Erickson)에 이어 2010년 혜성처럼 등장한 닉 기스레슨(Nick Gislason)까지.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "▶ 원산지 : 오크빌(Oakville) - 나파 밸리(Napa Valley)",
    "grapeNames": []
  },
  {
    "slug": "to-kalon-vineyard-co-eliza-s-red",
    "nameKo": "To Kalon Vineyard Co. Eliza’s Red",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Dry, Red",
    "volume": 750,
    "foodPairing": "[]",
    "description": "2018V - RP 94 pts / JS 97 pts/WS 97 pts 2019V - RP 95 pts/ JS 98 pts/ WS 95 pts 미국 컬트 와인계를 이끄는 장본인이며, 나파의 여왕이라 불리는 하이디 바렛이 자신의 와인을 만들기 위해 스크리밍 이글을 떠난 뒤 잠시 주춤했던 그들의 와인을 다시 100점짜리로 만든 와인메이커이기도 하다. 할란과 스파츠우드 등 나파밸리 최고의 와이너리에서 경험을 쌓은 그의 손에서는 무수한 100점 와인들이 탄생되었고, 토칼론 빈야드 컴퍼니 와인 또한 포스트 나파컬트의 역사를 쓰고 있는 중이다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "토칼론 빈야드 컴퍼니 엘리자스 레드 블랜드",
    "grapeNames": [
      "To Kalon Vineyard Company의 \"Eliza's\" 뀌베는 마야카마스 산맥 기슭에 있는 역사적 장소의 힘과 정신을 가장 잘 보여주는 두 가지 품종인 까베르네 프랑과 까베르네 소비뇽을 블렌딩한 와인입니다. 이 와인의 이름은 Napa에서 가장 잘 알려진 초기 개척자 중 한 명이자 Yountville 설립자의 미망인인 한때  최고의 까베르네 소비뇽의 재배지가 있는 Walnut Lane에 있는 To Kalon의 조용한 모퉁이를 한때 소유했던 Eliza Yount의 이름을 따서 명명되었습니다. 이 블렌드는 Napa Valley 와인의 가장 매력적인 예 중 하나를 생산하며",
      "Cabernet Franc은 이국적인 스파이스 노트와 꽃 향을 제공하고 Cabernet Sauvignon은 무게감",
      "구조 및 깊고 풍부한 검은 과일 특성을 제공합니다. 이 조합은 드물고 독특한 To Kalon입니다. 지금은 활기차고 활기차지만 앞으로 수십 년 동안 숙성될 와인입니다. 이 와인의 첫 번째 빈티지 제품인 2018년은 이미 밸리에서 벤치마크의 해로 인정받고 있습니다."
    ]
  },
  {
    "slug": "to-kalon-vineyard-co-highest-beauty-cabernet-sauvignon",
    "nameKo": "To Kalon Vineyard Co. Highest Beauty Cabernet Sauvignon",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Dry, Red",
    "volume": 750,
    "foodPairing": "[]",
    "description": "2018V - RP 93 pts / JS 99 points/ WS 98 pts 2019V - RP 95 pts/ JS 98 points / WS 97 pts 미국 컬트 와인계를 이끄는 장본인이며, 나파의 여왕이라 불리는 하이디 바렛이 자신의 와인을 만들기 위해 스크리밍 이글을 떠난 뒤 잠시 주춤했던 그들의 와인을 다시 100점짜리로 만든 와인메이커이기도 하다. 할란과 스파츠우드 등 나파밸리 최고의 와이너리에서 경험을 쌓은 그의 손에서는 무수한 100점 와인들이 탄생되었고, 토칼론 빈야드 컴퍼니 와인 또한 포스트 나파컬트의 역사를 쓰고 있는 중이다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "토칼론 빈야드 컴퍼니 하이스트 뷰티 카버네 소비뇽",
    "grapeNames": [
      "우리 이름을 딴 와인의 목표는 To Kalon Vineyard 전체와 협력하여 100% Cabernet Sauvignon으로 와인을 만드는 동시에 이 특별한 떼루아의 순수함",
      "강도 및 다양성을 포착하는 것입니다. 부드러운 탄닌",
      "풍부한 구조감",
      "풍부함",
      "향긋한 흥분을 지닌 이 와인은 거의 이상적인 2018년 성장기에 대한 이야기를 들려줍니다. 포도는 과일의 신선도를 보존하기 위해 밤에 수확되었습니다. 신중한 분류와 길고 느린 발효 및 침용은 와인을 완성하고 이 고귀한 품종에 내재된 다양한 풍미와 아로마를 제공합니다."
    ]
  },
  {
    "slug": "to-kalon-vineyard-co-h-w-c-cabernet-sauvignon",
    "nameKo": "To Kalon Vineyard Co. H.W.C Cabernet Sauvignon",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Dry, Red",
    "volume": 750,
    "foodPairing": "[]",
    "description": "2018V - RP 94 pts / JS 98 pts/ WS 96 pts 2019V - RP 98 pts/ JS 100 pts/ WS 96 pts 미국 컬트 와인계를 이끄는 장본인이며, 나파의 여왕이라 불리는 하이디 바렛이 자신의 와인을 만들기 위해 스크리밍 이글을 떠난 뒤 잠시 주춤했던 그들의 와인을 다시 100점짜리로 만든 와인메이커이기도 하다. 할란과 스파츠우드 등 나파밸리 최고의 와이너리에서 경험을 쌓은 그의 손에서는 무수한 100점 와인들이 탄생되었고, 토칼론 빈야드 컴퍼니 와인 또한 포스트 나파컬트의 역사를 쓰고 있는 중이다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "토칼론 빈야드 컴퍼니 H.W.C 카버네 소비뇽",
    "grapeNames": [
      "To Kalon 설립자의 이름을 따서 명명된 H.W.C는 To Kalon 내에서 Cabernet Sauvignon의 단일 클론 선택에서 생산됩니다. 이 포도나무는 원래 로버트 몬다비가 1960년대에 포도원에서 만든 와인의 깊이와 풍부함에 매료되어 To Kalon에 의해 심어졌습니다. 믿을 수 없을 정도로 수확량이 적은 Cabernet Sauvignon 셀렉션은 고에너지",
      "흑자색",
      "뛰어난 향과 구개 강도를 지닌 와인을 생산합니다. 이 고귀한 품종의 태초 그대로의 모습입니다. 첫 빈티지는 2018년의 모든 최고의 특성을 훌륭한 균형",
      "순도 및 밀도로 포착합니다. 과도하게 익거나 추출되지는 않았지만 와인은 놀라운 신선도",
      "질감",
      "풍부함 및 길이를 가지고 있습니다. 4개월의 추가 배럴 숙성으로 높은 수준의 광택과 부드러운 마감을 제공합니다."
    ]
  },
  {
    "slug": "caymus-special-selection-cabernet-sauvignon",
    "nameKo": "CAYMUS Special Selection Cabernet Sauvignon",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "나파 밸리(Napa Valley) / 미국",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "보기 드물 정도로 진한 농도와 빛깔을 지닌 이 와인은 일부러 절제하지 않은 힘 있는 오크향과 함께 겹겹이 나타나는 블랙커런트, 모카, 검은 체리, 자두 등의 향이 박진감 넘치게 펼쳐집니다. 상당한 양의 탄닌을 지녔음에도 관대하리만치 부드러우며, 놀랄 만큼 긴 여운과 뛰어난 질감을 보여줍니다. 거침없는 파워와 직설적 캐릭터, 다른 와인이 따라올 수 없는 짙은 농도는 나파밸리 카버네 소비뇽의 진정한 클래스를 느끼게 합니다. 이 와인을 맛보는 순간, 왜 케이머스가 ‘카버네 소비뇽의 제왕’ (King of Cabernet) 으로 군림하는지 인정하게 될 것입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "케이머스 스페셜 셀렉션 카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "caymus-california-cabernet-sauvignon",
    "nameKo": "CAYMUS California Cabernet Sauvignon",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "캘리포니아 (California) / 미국",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "파소 로블레스(Paso Robles)에서부터 몬터레이(Monterey), 산 베니토(San Benito)에 이르기까지 다양한 지역에서 생산된 카버네 소비뇽으로 케이머스 캘리포니아를 만들며, 캘리포니아의 따뜻한 낮과 서늘한 밤이 이루는 특별한 와인 산지 조건으로 풍부하고 농축된 와인이 만들어집니다. “이 와인은 캘리포니아의 위대함과 카버네 소비뇽 재배에 적합한 숨어있는 보석같은 지역을 보여주고 있다고 생각합니다. 캘리포니아 지역을 따라 흐르는 차가운 태평양과 동쪽으로 갈수록 따뜻해지는 기후, 돌이 많은 토양, 남쪽을 향한 경사면, 적당히 따뜻한 환경은 Dark하고 풍부하면 좋은 퀄리티의 카버네 소비뇽을 생산하는 열쇠입니다.”                                                                 By Chuck Wagner",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "케이머스 캘리포니아 카버네 소비뇽",
    "grapeNames": [
      "블랙베리",
      "다크 초콜릿",
      "입 안에 꽉차게 느껴지는 풍부한 맛과 유연함을 보여주며 캘리포니아의 대표 포도 품종인 카버네 소비뇽의 특징과 동시에 기존 케이머스의 매력을 함께 보여 주는 케이머스의 야심찬 새로운 카버네 소비뇽 와인입니다."
    ]
  },
  {
    "slug": "bonanza-cabernet-sauvignon-by-caymus",
    "nameKo": "Bonanza Cabernet Sauvignon by CAYMUS",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "캘리포니아 / 미국",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "케이머스의 첫번째 캘리포니아 카버네 소비뇽인 보난자 (노다지, 카버네를 위한 땅) 는 그 이름에서 연상되듯 적합한 빈야드의 발견을 의미합니다. 1972년, 케이머스 와이너리 설립 이래 포도밭의 탐색은 와그너 일가의 중요한 과업 중 하나였습니다. Wine Country 로 알려진 캘리포니아 대부분의 지역들은 이미 포도밭으로 경작되고 있거나 포화 상태로 여겨졌습니다. 하지만 척 와그너는 특히 고품질의 카버네를 위한, 아직 잘 알려지지 않았을 뿐 뛰어난 잠재력을 보유한 땅이 있다고 믿었고, 맛있는 카버네가 다양한 사람들에게 접근 가능해야 한다는 그의 지론에 충실, 곳곳에 숨겨진 빈야드들을 발견, 보난자 와인을 탄생시키게 되었습니다. 루비 레드 컬러가 아름다운 이 와인은 말린 장미꽃과 건포도 향, 신선한 토양의 존재감으로 먼저 열립니다. 토스티한 오크에 훈연한 육류의 뉘앙스가 코에 살짝 감지되고, 입에서는 블루베리와 블랙베리가 주는 풍부한 과실 풍미에 바닐라, 구워낸 토스트 등의 따스함이 조화롭습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "보난자 카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "conundrum-red-blend-by-caymus",
    "nameKo": "Conundrum Red blend by CAYMUS",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "캘리포니아 / 미국",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "복합적 아로마를 지닌 미디엄 바디 와인으로, 블랙 체리, 자두 등 검은 과실 아로마에 시나몬, 라벤더, 코코아 뉘앙스와 약간의 스파이시함 바닐라, 오크 풍미도 느껴집니다. 진한 과실미, 무게감 있는 탄닌과 유연하면서도 부드러운 질감이 조화롭게 어우러져 마시기 편하고 다양한 음식과 잘 어우러집니다. 특히 매콤한 소스의 파스타 또는 그릴 소시지 등 캠핑 음식과도 탁월한 조화를 보여줍니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "코넌드럼 레드 블렌드",
    "grapeNames": [
      "기본급 와인임에도 불구하고 출시 직후 2번째 빈티지가 Wine Spectator 88점을 획득할 만큼 품질을 인정받았습니다. 나파 밸리를 비롯하여 산타 바바라",
      "몬터레이 지역의 포도를 고루 블렌딩하여 품질의 균일함을 유지하고 있습니다. ‘퍼즐’ 이라는 뜻의 와인명 코넌드럼 (Conundrum)은 각 품종의 개성과 블렌딩 와인만의 밸런스를 모두 추구하며 블렌딩 비율을 비밀스레 유지하고 있습니다."
    ]
  },
  {
    "slug": "conundrum-white-by-caymus",
    "nameKo": "Conundrum White by CAYMUS",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "캘리포니아 / 미국",
    "volume": 750,
    "servingTempMin": 6,
    "servingTempMax": 8,
    "foodPairing": "[]",
    "description": "뮈스카는 꽃과 열대과일 향을, 비오니에와 세미용은 스파이스한 성격과 꽃의 느낌을 더합니다. 소비뇽 블랑은 레몬류의 맛과 맑고 청량한 느낌으로, 샤도네이는 사과나 배의 풍미와 크리미한 느낌으로 와인의 골격을 이루고 있습니다. 스테인리스 탱크에서 발효시킨 후 프렌치 & 아메리칸 오크통에서 7개월간 숙성하여 신선함과 생동감이 살아있으며 매우 다채로운 풍미를 지닌 와인입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "코넌드럼 화이트",
    "grapeNames": [
      "다섯 가지 화이트 품종의 이상적 조합"
    ]
  },
  {
    "slug": "wine-spectator-top-100",
    "nameKo": "빈티지 별 Wine Spectator Top 100 수상 내역",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "몬터레이 카운티(Monterey County) / 미국 캘리포니아",
    "volume": 750,
    "foodPairing": "[]",
    "description": "- 1998 :  Top23 (2001년) - 1997 :  Top32 (2000년) Mer-soleil Reserve Chardonnay by CAYMUS",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바다와 태양의 에너지가 담긴 샤도네이",
    "grapeNames": []
  },
  {
    "slug": "mer-soleil-silver-chardonnay-by-caymus",
    "nameKo": "Mer-soleil Silver Chardonnay by CAYMUS",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Monterey County (몬터레이 카운티) / 미국 캘리포니아",
    "volume": 750,
    "servingTempMin": 6,
    "servingTempMax": 8,
    "foodPairing": "[]",
    "description": "콘크리트 탱크에서 발효를 진행하는 동안 아주 적은 산소 접촉이 자연스럽게 이뤄지는데, 이를 통해 오크 배럴에서 숙성한 것과 같이 풍미가 한층 깊어지는 -하지만 오크 특유의 풍미는 없이 프레쉬한- 효과를 얻게 됩니다. 처음부터 끝까지 깨끗함을 느낄수 있는 샤도네이로, 키위, 감귤 제스트, 레몬의 산미가 피어 오르며, 오크를 사용하지 않아 더 깊이 있는 산도와 동굴의 암석에서 느낄 수 있는 미네랄리티의 조화가 입안에서 부드러운 질감으로 느껴집니다. 약간의 스모키한 아로마도 느껴지는데 이는 바람이 많이 부는 몬터레이 카운티에서 자란 포도들의 특징 중 하나 입니다. 발효와 숙성 과정에서 오크처리 없이 완성되어 훌륭하게 전달되는 미네랄리티와 활력 있는 산도는 새벽 안개와 한낮의 햇살이 가득한 샤도네이의 천국 몬터레이의 순수한 테루아를 그대로 표현합니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "메르솔레이 실버 샤도네이",
    "grapeNames": [
      "메르솔레이 실버 샤도네이는 스테인레스 스틸 및 프랑스 부르고뉴에서 수입된 콘크리트 탱크에서 발효 및 숙성하여 깨끗하고 순수한 품종 고유의 느낌을 강조한 언오크드 (Unoaked) 방식으로 만들어 집니다."
    ]
  },
  {
    "slug": "emmolo-merlot-by-caymus",
    "nameKo": "Emmolo Merlot by CAYMUS",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "나파 밸리(Napa Valley) / 미국",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "에멀로 (Emmolo)는 케이머스 오너 척 와그너 (Chuck Wagner) 의 딸인, 3세대 제니 와그너 (Jenny Wagner)가 이끌어가는 와이너리 입니다. 제니의 외증조부인 살바토레 에멀로 (Salvatore Emmolo) 는 1923년, 이탈리아에서 나파의 러더포드로 이주하고 빈야드를 매입합니다. 이후 제니의 어머니 셰릴 (Cheryl)이 1994년 에멀로 와인을 론칭, 2011년부터는 딸 제니가 와이너리를 이어받아 운영해 오고 있습니다. 젊은 여성 와인메이커 답게 우아하고 감각적인 레이블의 레드 (멀롯) & 화이트 (소비뇽 블랑) 2종을 선보입니다. 에멀로 멀롯은 마치 케이머스 카버네 소비뇽을 연상시키는 풍부한 과실, 부드러운 탄닌, 짙은 색상을 지닌 탁월한 밸런스의 레드와인 입니다. 이는 와그너 패밀리의 전매 특허라고 할 수 있는 긴 행 타임 (Hang time : 포도의 당도 뿐 아니라 탄닌까지 충분히 숙성되도록 늦수확) 을 유지하는 기술에서 비롯되며, 특히 멀롯의 경우 비교적 빨리 익는 조생종이기 때문에 나파에서 비교적 서늘한 오크놀 (Oak Knoll) 의 포도를 사용합니다. 검은 자두, 가죽, 꽃과 코코아, 달콤한 훈연의 향이 풍부하며, 부드럽게 퍼지는 맛에서는 구운 과일과 초콜릿, 흙, 그리고 오크의 토스트를 느낄 수 있습니다. 부드러운 탄닌과 베리의 향이 함께 긴 여운을 드리우는, 풍만하고 농밀한 멀롯입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "에멀로 멀롯",
    "grapeNames": []
  },
  {
    "slug": "emmolo-sauvignon-blanc-by-caymus",
    "nameKo": "Emmolo Sauvignon Blanc by CAYMUS",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "나파 카운티&솔라노 카운티 / 미국",
    "volume": 750,
    "servingTempMin": 6,
    "servingTempMax": 8,
    "foodPairing": "[]",
    "description": "에멀로 (Emmolo)는 케이머스 오너 척 와그너 (Chuck Wagner) 의 딸인, 3세대 제니 와그너 (Jenny Wagner)가 이끌어가는 와이너리 입니다. 제니의 외증조부인 살바토레 에멀로 (Salvatore Emmolo) 는 1923년, 이탈리아에서 나파의 러더포드로 이주하고 빈야드를 매입합니다. 이후 제니의 어머니 셰릴 (Cheryl)이 1994년 에멀로 와인을 론칭, 2011년부터는 딸 제니가 와이너리를 이어받아 운영해 오고 있습니다. 젊은 여성 와인메이커 답게 우아하고 감각적인 레이블의 레드 (멀롯) & 화이트 (소비뇽 블랑) 2종을 선보입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "에멀로 소비뇽 블랑",
    "grapeNames": [
      "반투명한 노란 빛깔을 지닌 이 와인은 젖은 돌",
      "감귤의 깨끗하고 맑은 향기를 지녔으며",
      "천도복숭아",
      "잘 숙성된 꿀",
      "구아바와 귤 등의 은은한 음색이 특징입니다. 첫 맛은 미미한 느낌이나 점차 입 안으로 라임의 향이 퍼지며 군침이 도는 감귤류의 맛으로 확장됩니다. 짜릿한 산도는 와인의 생기를 돋우는 신선함을 더하며 마지막은 뚜렷한 미네랄리티가 와인에 개성을 더합니다. 이는 품종 특성상 향이 강한 소비뇽 블랑이지만 과실미가 지배하는 것이 아닌",
      "그보다 미네랄리티가 이끄는 소비뇽 블랑에 대한 와인 메이커 제니 와그너의 양조 철학을 분명히 보여주고 있습니다."
    ]
  },
  {
    "slug": "caymus-special-selection-cabernet-sauvignon-2",
    "nameKo": "CAYMUS Special Selection Cabernet Sauvignon",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "나파 밸리(Napa Valley) / 미국",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "보기 드물 정도로 진한 농도와 빛깔을 지닌 이 와인은 일부러 절제하지 않은 힘 있는 오크향과 함께 겹겹이 나타나는 블랙커런트, 모카, 검은 체리, 자두 등의 향이 박진감 넘치게 펼쳐집니다. 상당한 양의 탄닌을 지녔음에도 관대하리만치 부드러우며, 놀랄 만큼 긴 여운과 뛰어난 질감을 보여줍니다. 거침없는 파워와 직설적 캐릭터, 다른 와인이 따라올 수 없는 짙은 농도는 나파밸리 카버네 소비뇽의 진정한 클래스를 느끼게 합니다. 이 와인을 맛보는 순간, 왜 케이머스가 ‘카버네 소비뇽의 제왕’ (King of Cabernet) 으로 군림하는지 인정하게 될 것입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "케이머스 스페셜 셀렉션 카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "caymus-napa-valley-cabernet-sauvignon-2",
    "nameKo": "CAYMUS Napa Valley Cabernet Sauvignon",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "나파 밸리(Napa Valley) / 미국",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "케이머스 나파밸리 카버네 소비뇽은 짙은 색상, 풍부한 과실맛과 복합적인 풍미, 벨벳 같은 탄닌으로 요약되는 ‘투박하고도 귀족적인’ 시그니처 스타일로 세계인의 입맛을 사로잡은 케이머스 신드롬의 주역입니다. 나파 밸리 16개 sub-appellations 중 개성이 다른 8개의 지역에서 수확한 포도를 블렌딩하여 복합성과 빈티지 기복 없이 한결같은 스타일을 유지하며, 포도 재배에 있어 밀식재배로 우수한 과실을 생산하고 포도를 늦게까지 충분히 익혀 진한 색상과 부드럽고 풍부한 탄닌을 얻어냅니다. 다크 체리, 블랙베리 류의 진한 과실 향이 풍부하고 섬세한 바닐라 노트와 코코아, 다크 초콜릿, 스위트 타바코 등의 복합적인 맛, 부드러운 탄닌감, 완벽한 균형미를 자랑하며 입 안에 오래 남아 긴 여운을 선사합니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "케이머스 나파밸리 카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "caymus-california-cabernet-sauvignon-2",
    "nameKo": "CAYMUS California Cabernet Sauvignon",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "캘리포니아 (California) / 미국",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "파소 로블레스(Paso Robles)에서부터 몬터레이(Monterey), 산 베니토(San Benito)에 이르기까지 다양한 지역에서 생산된 카버네 소비뇽으로 케이머스 캘리포니아를 만들며, 캘리포니아의 따뜻한 낮과 서늘한 밤이 이루는 특별한 와인 산지 조건으로 풍부하고 농축된 와인이 만들어집니다. “이 와인은 캘리포니아의 위대함과 카버네 소비뇽 재배에 적합한 숨어있는 보석같은 지역을 보여주고 있다고 생각합니다. 캘리포니아 지역을 따라 흐르는 차가운 태평양과 동쪽으로 갈수록 따뜻해지는 기후, 돌이 많은 토양, 남쪽을 향한 경사면, 적당히 따뜻한 환경은 Dark하고 풍부하면 좋은 퀄리티의 카버네 소비뇽을 생산하는 열쇠입니다.”                                                                 By Chuck Wagner",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "케이머스 캘리포니아 카버네 소비뇽",
    "grapeNames": [
      "블랙베리",
      "다크 초콜릿",
      "입 안에 꽉차게 느껴지는 풍부한 맛과 유연함을 보여주며 캘리포니아의 대표 포도 품종인 카버네 소비뇽의 특징과 동시에 기존 케이머스의 매력을 함께 보여 주는 케이머스의 야심찬 새로운 카버네 소비뇽 와인입니다."
    ]
  },
  {
    "slug": "caymus-california-zinfandel",
    "nameKo": "Caymus California Zinfandel",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "캘리포니아 / 미국",
    "volume": 750,
    "servingTempMin": 12,
    "servingTempMax": 15,
    "foodPairing": "[]",
    "description": "케이머스 진판델은 케이머스의 오리지널 와인 레이블을 떠올리게 하는 디자인   으로 전체적으로 둥근 형태에 잎사귀 끝이 뾰족한 특징을 지닌 진판델 잎을       레이블 중앙에 배치하여 정체성을 표현하고 있습니다. 와인은 짙은 보라색 및 자두색을 띠며 검붉은 체리, 삼나무, 육두구와 바닐라 빈의    아로마가 어우러집니다. 향기로우면서도 우아한 포푸리와 흑연의 뉘앙스가 오크 터치와 함께 조화를 이루며 입 안에서는 부드러우면서도 구조감 있는 탄닌이 잘 익은 석류, 체리, 다크 초콜릿의 풍미와 함께 긴 여운을 남깁니다. “The most high-quality Zin in California.”",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "케이머스 캘리포니아 진판델",
    "grapeNames": [
      "진판델은 케이머스의 설립자 찰리 와그너 (Charlie Wagner Sr.)가 가장 좋아했던 포도 품종입니다. 케이머스 빈야드는 1974년 진판델 첫 빈티지를 출시한 이후 찰리 와그너를 기리기 위해 꾸준히 진판델을 생산해 오고 있으며 나파 밸리",
      "레이크 카운티",
      "수이선 밸리",
      "로다이",
      "몬테레이 카운티에서 최상급 포도만을 선별하여    와인을 만들고 있습니다. 2021 빈티지 부터 척 와그너의 뒤를 이어 딸인 제니    와그너가 진판델 생산을 책임지고 있으며 프렌치 오크에서 21개월간 숙성을      거칩니다."
    ]
  },
  {
    "slug": "bonanza-cabernet-sauvignon-by-caymus-2",
    "nameKo": "Bonanza Cabernet Sauvignon by CAYMUS",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "캘리포니아 / 미국",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "케이머스의 첫번째 캘리포니아 카버네 소비뇽인 보난자 (노다지, 카버네를 위한 땅) 는 그 이름에서 연상되듯 적합한 빈야드의 발견을 의미합니다. 1972년, 케이머스 와이너리 설립 이래 포도밭의 탐색은 와그너 일가의 중요한 과업 중 하나였습니다. Wine Country 로 알려진 캘리포니아 대부분의 지역들은 이미 포도밭으로 경작되고 있거나 포화 상태로 여겨졌습니다. 하지만 척 와그너는 특히 고품질의 카버네를 위한, 아직 잘 알려지지 않았을 뿐 뛰어난 잠재력을 보유한 땅이 있다고 믿었고, 맛있는 카버네가 다양한 사람들에게 접근 가능해야 한다는 그의 지론에 충실, 곳곳에 숨겨진 빈야드들을 발견, 보난자 와인을 탄생시키게 되었습니다. 루비 레드 컬러가 아름다운 이 와인은 말린 장미꽃과 건포도 향, 신선한 토양의 존재감으로 먼저 열립니다. 토스티한 오크에 훈연한 육류의 뉘앙스가 코에 살짝 감지되고, 입에서는 블루베리와 블랙베리가 주는 풍부한 과실 풍미에 바닐라, 구워낸 토스트 등의 따스함이 조화롭습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "보난자 카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "conundrum-red-blend-by-caymus-2",
    "nameKo": "Conundrum Red blend by CAYMUS",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "캘리포니아 / 미국",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "복합적 아로마를 지닌 미디엄 바디 와인으로, 블랙 체리, 자두 등 검은 과실 아로마에 시나몬, 라벤더, 코코아 뉘앙스와 약간의 스파이시함 바닐라, 오크 풍미도 느껴집니다. 진한 과실미, 무게감 있는 탄닌과 유연하면서도 부드러운 질감이 조화롭게 어우러져 마시기 편하고 다양한 음식과 잘 어우러집니다. 특히 매콤한 소스의 파스타 또는 그릴 소시지 등 캠핑 음식과도 탁월한 조화를 보여줍니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "코넌드럼 레드 블렌드",
    "grapeNames": [
      "기본급 와인임에도 불구하고 출시 직후 2번째 빈티지가 Wine Spectator 88점을 획득할 만큼 품질을 인정받았습니다. 나파 밸리를 비롯하여 산타 바바라",
      "몬터레이 지역의 포도를 고루 블렌딩하여 품질의 균일함을 유지하고 있습니다. ‘퍼즐’ 이라는 뜻의 와인명 코넌드럼 (Conundrum)은 각 품종의 개성과 블렌딩 와인만의 밸런스를 모두 추구하며 블렌딩 비율을 비밀스레 유지하고 있습니다."
    ]
  },
  {
    "slug": "conundrum-white-by-caymus-2",
    "nameKo": "Conundrum White by CAYMUS",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "캘리포니아 / 미국",
    "volume": 750,
    "servingTempMin": 6,
    "servingTempMax": 8,
    "foodPairing": "[]",
    "description": "뮈스카는 꽃과 열대과일 향을, 비오니에와 세미용은 스파이스한 성격과 꽃의 느낌을 더합니다. 소비뇽 블랑은 레몬류의 맛과 맑고 청량한 느낌으로, 샤도네이는 사과나 배의 풍미와 크리미한 느낌으로 와인의 골격을 이루고 있습니다. 스테인리스 탱크에서 발효시킨 후 프렌치 & 아메리칸 오크통에서 7개월간 숙성하여 신선함과 생동감이 살아있으며 매우 다채로운 풍미를 지닌 와인입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "코넌드럼 화이트",
    "grapeNames": [
      "다섯 가지 화이트 품종의 이상적 조합"
    ]
  },
  {
    "slug": "wine-spectator-top-100-2",
    "nameKo": "빈티지 별 Wine Spectator Top 100 수상 내역",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "몬터레이 카운티(Monterey County) / 미국 캘리포니아",
    "volume": 750,
    "foodPairing": "[]",
    "description": "- 1998 :  Top23 (2001년) - 1997 :  Top32 (2000년) Mer-soleil Reserve Chardonnay by CAYMUS",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바다와 태양의 에너지가 담긴 샤도네이",
    "grapeNames": []
  },
  {
    "slug": "mer-soleil-silver-chardonnay-by-caymus-2",
    "nameKo": "Mer-soleil Silver Chardonnay by CAYMUS",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Monterey County (몬터레이 카운티) / 미국 캘리포니아",
    "volume": 750,
    "servingTempMin": 6,
    "servingTempMax": 8,
    "foodPairing": "[]",
    "description": "콘크리트 탱크에서 발효를 진행하는 동안 아주 적은 산소 접촉이 자연스럽게 이뤄지는데, 이를 통해 오크 배럴에서 숙성한 것과 같이 풍미가 한층 깊어지는 -하지만 오크 특유의 풍미는 없이 프레쉬한- 효과를 얻게 됩니다. 처음부터 끝까지 깨끗함을 느낄수 있는 샤도네이로, 키위, 감귤 제스트, 레몬의 산미가 피어 오르며, 오크를 사용하지 않아 더 깊이 있는 산도와 동굴의 암석에서 느낄 수 있는 미네랄리티의 조화가 입안에서 부드러운 질감으로 느껴집니다. 약간의 스모키한 아로마도 느껴지는데 이는 바람이 많이 부는 몬터레이 카운티에서 자란 포도들의 특징 중 하나 입니다. 발효와 숙성 과정에서 오크처리 없이 완성되어 훌륭하게 전달되는 미네랄리티와 활력 있는 산도는 새벽 안개와 한낮의 햇살이 가득한 샤도네이의 천국 몬터레이의 순수한 테루아를 그대로 표현합니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "메르솔레이 실버 샤도네이",
    "grapeNames": [
      "메르솔레이 실버 샤도네이는 스테인레스 스틸 및 프랑스 부르고뉴에서 수입된 콘크리트 탱크에서 발효 및 숙성하여 깨끗하고 순수한 품종 고유의 느낌을 강조한 언오크드 (Unoaked) 방식으로 만들어 집니다."
    ]
  },
  {
    "slug": "emmolo-merlot-by-caymus-2",
    "nameKo": "Emmolo Merlot by CAYMUS",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "나파 밸리(Napa Valley) / 미국",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "에멀로 (Emmolo)는 케이머스 오너 척 와그너 (Chuck Wagner) 의 딸인, 3세대 제니 와그너 (Jenny Wagner)가 이끌어가는 와이너리 입니다. 제니의 외증조부인 살바토레 에멀로 (Salvatore Emmolo) 는 1923년, 이탈리아에서 나파의 러더포드로 이주하고 빈야드를 매입합니다. 이후 제니의 어머니 셰릴 (Cheryl)이 1994년 에멀로 와인을 론칭, 2011년부터는 딸 제니가 와이너리를 이어받아 운영해 오고 있습니다. 젊은 여성 와인메이커 답게 우아하고 감각적인 레이블의 레드 (멀롯) & 화이트 (소비뇽 블랑) 2종을 선보입니다. 에멀로 멀롯은 마치 케이머스 카버네 소비뇽을 연상시키는 풍부한 과실, 부드러운 탄닌, 짙은 색상을 지닌 탁월한 밸런스의 레드와인 입니다. 이는 와그너 패밀리의 전매 특허라고 할 수 있는 긴 행 타임 (Hang time : 포도의 당도 뿐 아니라 탄닌까지 충분히 숙성되도록 늦수확) 을 유지하는 기술에서 비롯되며, 특히 멀롯의 경우 비교적 빨리 익는 조생종이기 때문에 나파에서 비교적 서늘한 오크놀 (Oak Knoll) 의 포도를 사용합니다. 검은 자두, 가죽, 꽃과 코코아, 달콤한 훈연의 향이 풍부하며, 부드럽게 퍼지는 맛에서는 구운 과일과 초콜릿, 흙, 그리고 오크의 토스트를 느낄 수 있습니다. 부드러운 탄닌과 베리의 향이 함께 긴 여운을 드리우는, 풍만하고 농밀한 멀롯입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "에멀로 멀롯",
    "grapeNames": []
  },
  {
    "slug": "emmolo-sauvignon-blanc-by-caymus-2",
    "nameKo": "Emmolo Sauvignon Blanc by CAYMUS",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "나파 카운티&솔라노 카운티 / 미국",
    "volume": 750,
    "servingTempMin": 6,
    "servingTempMax": 8,
    "foodPairing": "[]",
    "description": "에멀로 (Emmolo)는 케이머스 오너 척 와그너 (Chuck Wagner) 의 딸인, 3세대 제니 와그너 (Jenny Wagner)가 이끌어가는 와이너리 입니다. 제니의 외증조부인 살바토레 에멀로 (Salvatore Emmolo) 는 1923년, 이탈리아에서 나파의 러더포드로 이주하고 빈야드를 매입합니다. 이후 제니의 어머니 셰릴 (Cheryl)이 1994년 에멀로 와인을 론칭, 2011년부터는 딸 제니가 와이너리를 이어받아 운영해 오고 있습니다. 젊은 여성 와인메이커 답게 우아하고 감각적인 레이블의 레드 (멀롯) & 화이트 (소비뇽 블랑) 2종을 선보입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "에멀로 소비뇽 블랑",
    "grapeNames": [
      "반투명한 노란 빛깔을 지닌 이 와인은 젖은 돌",
      "감귤의 깨끗하고 맑은 향기를 지녔으며",
      "천도복숭아",
      "잘 숙성된 꿀",
      "구아바와 귤 등의 은은한 음색이 특징입니다. 첫 맛은 미미한 느낌이나 점차 입 안으로 라임의 향이 퍼지며 군침이 도는 감귤류의 맛으로 확장됩니다. 짜릿한 산도는 와인의 생기를 돋우는 신선함을 더하며 마지막은 뚜렷한 미네랄리티가 와인에 개성을 더합니다. 이는 품종 특성상 향이 강한 소비뇽 블랑이지만 과실미가 지배하는 것이 아닌",
      "그보다 미네랄리티가 이끄는 소비뇽 블랑에 대한 와인 메이커 제니 와그너의 양조 철학을 분명히 보여주고 있습니다."
    ]
  },
  {
    "slug": "us-california-sonoma-county-sonoma-coast",
    "nameKo": "(US / California / Sonoma County / Sonoma Coast )",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Sonoma",
    "volume": 750,
    "foodPairing": "[]",
    "description": "2023년 오베르 샤도네이는 앞으로 수십년간 소장가치가 높은 보물로 여겨질 것입니다. 활기차고 매력적인 와인으로 살구와 감귤껍질, 화이트 페퍼와 꿀향기 가득한 꽃의 캐릭터를 느낄 수 있습니다. 입 안에서는 생동감있고 에너지가 넘치지만 동시에 복합미를 느낄 수 있어 향후 10~15년간의 장기 숙성을 기대할 수 있습니다. 빛깔에서 보여지는 약간의 탁함은 모든 양조과정에서 최소한으로 개입하는 Aubert의 신념을 드러냅니다. 2022 Vintage:  RP 95점 / WS 96점",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "▶ 원산지 :  미국 / 캘리포니아 / 소노마 카운티 / 소노마 코스트",
    "grapeNames": [
      "UV-SL 빈야드는 소노마 코스트 서쪽 끝에 위치해 있으며 바다에 가깝게 위치해 있어 바다 공기의 미네랄리티를 가득 느낄 수 있습니다. 이러한 지형적 특징은 UV-SL 샤도네이만의 활발한 에너지가 돋보이는 독특한 품종을 만들어 냈습니다."
    ]
  },
  {
    "slug": "us-california-sonama-carneros",
    "nameKo": "(US / California / Sonama / Carneros)",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Sonoma",
    "volume": 750,
    "foodPairing": "[]",
    "description": "“A warm spot in a cool place.” (시원한 지역의 따스한 자리) 라는 래리 하이드 앤 선즈의 테루아는 매우 특별합니다. 이 곳의 기후는 오랜 숙성이 가능한 *vin-de-garde 와인을 위한, 아주 이상적인 포도를 만들어 냅니다. *Vin de Garde (뱅 드 가르드) 는 오래 숙성시켜 마시는 와인, 즉 시간이 지날수록 좋아지는 와인을 가리키는 용어 독특한 기후가 만들어내는 다양한 과일의 향과 미네랄의 느낌이 풍부하고 복합적으로 느껴지는 와인이며, 알코올 함량이 다소 높은 편이지만 상큼하고 부드러운 느낌 때문에 와인 전문가들로부터 에로틱한 와인이라고 평가를 받고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "▶ 원산지 :  미국 / 캘리포니아 / 소노마 / 카네로스",
    "grapeNames": []
  },
  {
    "slug": "us-california-sonoma-county-sonoma-coast-2",
    "nameKo": "(US / California / Sonoma County / Sonoma Coast )",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Sonoma",
    "volume": 750,
    "foodPairing": "[]",
    "description": "CIX 빈야드는 자신의 딸 이름을 붙인 Lauren 빈야드에 이어 오베르의 두번째로 구입한 빈야드로, 포도밭의 지번인 109를 로마자 CIX로 표현한 것으로 이름을 지었습니다. CIX 빈야드는 동쪽으로 Lauren 빈야드와 인접하고 있으며 Goldridge Soil(골드리지 토양: 사암을 기본으로 한 점토, 모래로 이루어진 비옥한 토양)과 옆의 사진과 같은 바다소금과 같은 하얗고 얇은 토양의 특징을 가지고 있습니다. 살구, 감, 사과, 꿀의 풍부한 아로마와 함께 흰 화산재 같은 미네랄 향이 조화를 이룹니다. 입안에서는 사과 갈레트와 알프스 허브의 풍미가 부드럽게 퍼지며, 구조감과 밸런스를 함께 갖췄습니다. 점진적으로 복합미가 드러나는 스타일로 10~15년 이상의 숙성 잠재력을 지녔습니다. 약간의 탁함은 모든 양조과정에서 최소한으로 개입하는 Aubert의 신념을 드러냅니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "▶ 원산지 :  미국 / 캘리포니아 / 소노마 카운티 / 소노마 코스트",
    "grapeNames": []
  },
  {
    "slug": "2023-powder-house-aubert",
    "nameKo": "2023년 Powder House는 생기 넘치고 세련된 스타일의 와인입니다. 라임, 복숭아, 허브차 같은 향이 풍부하게 퍼지며, 조개껍질과 짠 내음은 토양의 특징을 잘 보여줍니다. 라임 커스터드와 넥타린 풍미가 입안을 가득 채우고, 미네랄감과 신선한 산미가 조화를 이루며 깔끔하고 긴 여운으로 마무리됩니다. 빛깔에서 보여지는 약간의 탁함은 모든 양조과정에서 최소한으로 개입하는 Aubert의 신념을 드러냅니다.",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "미국 / 캘리포니아 / 소노마 카운티 / 소노마 코스트",
    "volume": 750,
    "foodPairing": "[]",
    "description": "Powder House Estate Vineyard Sonoma Coast Chardonnay 2022 Vintage: RP 97점 / WS 97점",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "파우더 하우스 빈야드 샤도네이는 오베르의 4번째 이스테이트 샤도네이로 30년이상 샤르도네 와인을 만든 스타 와인 메이커 마크 오베르의 정점에 도달한 와인입니다. 파우더 하우스는 예전에 산비탈에 화약을 저장했던 화약 저장고의 이름에서 유래했으며 보올, 원형 경기장과 같은 오목한 모양의 Forestville (포레스트빌)의 구 시가지에 위치하며, 오베르의 샤도네이 중 엘레강스하면서도 파워풀한 와인으로 소개되고 있습니다",
    "grapeNames": []
  },
  {
    "slug": "2023",
    "nameKo": "2023년 로렌 샤도네이는 오래된 포도나무, 그랑 크뤼급 테루아, 그리고 완벽한 생장 시즌이 빚어낸 집약체로, 완성도 높고 기억에 남는 와인입니다. 와인은 자연스럽게 피어오르듯 가벼우면서도 깊이 있는 농축미를 지니며, 섬세한 우아함과 풍부한 집중도의 균형을 이룹니다. 복합적인 사과 오일 향을 비롯해, 스위트 앨리섬 꽃, 카다멈, 그리고 비 온 뒤의 흙 내음이 은은하게 펼쳐지고, 입안에서는 잘 익은 과일을 증류한 듯한 풍미가 가득합니다. 탄탄하고 명확한 산미가 와인을 또렷하게 마무리하며, 생동감과 표현력이 극대화된 피니시로 이어집니다.",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "미국 / 캘리포니아 / 소노마 카운티 / 소노마 코스트",
    "volume": 750,
    "foodPairing": "[]",
    "description": "오베르 로렌 이스테이트 빈야드 샤도네이 Lauren Estate Vineyard Sonoma Coast Chardonnay (US / California / Sonoma County / Sonoma Coast )",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "2003년 첫 빈티지가 탄생하며 세상에 알려진 로렌 빈야드는 ‘완벽함’에 대한 오베르의 정의 입니다. Mark Aubert의 딸 Lauren의 이름을 따 지은 로렌 빈야드는 포레스트빌의 “황금 언덕＂이라 불리는 곳에 위치합니다. 오베르의 가장 좋은 4 가지 클론으로 구성되어 놀라운 집중력과 밀도를 보여주며 우아한 마우스필로 소노마 코스트 샤도네이의 정점을 선사합니다. 2015년, 2017년, 2018년 빈티지는 연속으로 Robert Parker 100점을 받은 쾌거를 이루며 시간이 흐를수록 진화하는 품질을 증명하고 있습니다.",
    "grapeNames": []
  },
  {
    "slug": "us-california-sonoma-county-sonoma-coast-3",
    "nameKo": "(US / California / Sonoma County / Sonoma Coast )",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Sonoma",
    "volume": 750,
    "foodPairing": "[]",
    "description": "Aubert의 Eastside에 대한 열정은 바위가 많은 경사면과 자갈로 이루어진 토양에서 시작됩니다. 이곳은 척박한 환경 속에서 집중력있는 포도를 생산하며, 이는 Aubert 샤르도네의 특성을 잘 보여주는 독특한 미묘한 향과 복합적인 과일 향으로 표현됩니다. 2023년 오베르 샤도네이는 앞으로 수십년간 소장가치가 높은 보물로 여겨질 것입니다. Eastside는 자갈과 부싯돌의 미네랄 아로마에 패션프루트와 파인애플 향이 조화를 이룹니다. 은은한 백후추와 아몬드의 고소한 뉘앙스가 복합미를 더하며, 입안에서는 생동감 있는 산미로 마무리됩니다. 밀도감과 에너지를 함께 지닌 와인으로, 10~15년 이상의 숙성 잠재력을 갖추고 있습니다. 빛깔에서 보여지는 약간의 탁함은 모든 양조과정에서 최소한으로 개입하는 Aubert의 신념을 드러냅니다. 2022 Vintage: RP 96점 / WS 94점",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "▶ 원산지 :  미국 / 캘리포니아 / 소노마 카운티 / 소노마 코스트",
    "grapeNames": []
  },
  {
    "slug": "uv-sl",
    "nameKo": "UV-SL 피노누아는 집중도 있는 균형감을 보여줍니다. 굉장히 멋진 이 와인은 우아함과 동시에 응축된, 그리고 매력적인 토양의 향을 선사합니다.",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "미국 / 캘리포니아 / 소노마 카운티 / 소노마 코스트",
    "volume": 750,
    "foodPairing": "[]",
    "description": "세이지, 송진, 가벼운 철의 느낌을 찾을 수 있으며, 뒤이어 다크베리, 블랙 체리, 석류의 풍미가 복합적으로 어우러져 입안을 맴돕니다. 수정같이 맑은 퀄리티의 부드러운 탄닌과 발랄한 산미가 매끄럽게 어우러지며 긴 피니쉬로 이어집니다. 지금 드셔도 좋지만 장기 숙성 가능한 와인으로 권장음용 기간은 2021년부터 2033년까지입니다. UV-SL Vineyard Pinot Noir",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "가장 남성적인 피노누아로 꼽히는 UV-SL은 풍부한 향과 맛으로 미각 전체에 걸쳐 가시적인 충만함을 보여줍니다. 포도밭이 바다에서 가깝다고 생각하기 쉽지만, 이 지역의 따뜻한 기후는 포도가 최적의 숙성 상태에 도달하는데 매우 적합합니다.",
    "grapeNames": []
  },
  {
    "slug": "wine-8",
    "nameKo": "소노마코스트 아펠라시옹 샤도네이는 싱글 빈야드 포도의 최고 퀄리티를 반영하며 빈티지의 다양한 측면을 보여줍니다.  다가올 싱글 빈야드에 대한 거대한 통찰력을 보여주며, 어린 포도에서만 느낄 수 있는 매력들을 담고 있습니다.",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "미국 / 캘리포니아 / 소노마 카운티 / 소노마 코스트",
    "volume": 750,
    "foodPairing": "[]",
    "description": "소노마 코스트 샤도네이는 레몬 머랭, 인동덩굴, 설탕에 절인 청사과의 아름다운 향이 매력적으로 어우러집니다. 풍부하고 진한 풍미는 산뜻한 산도와 함께 절묘한 발란스를 이룹니다. 바다 공기의 내음이 미각 전체에 걸쳐 전달되며 감귤류를 비롯한 과일의 맛을 보완해 줍니다. 특히, 유리병 가장자리의 녹색 빛깔은 와인의 훌륭한 상태를 보여줍니다. 이 와인은 와인 제조에 있어 최소한의 개입을 가장 잘 보여주고 있습니다. Sonoma Coast Chardonnay",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "소노마 코스트 샤도네이는 싱글 빈야드 지역의 어린 포도나무로 구성되어 있습니다. 클래식한 빈티지와 오베르만의 스타일이 두드러지며, 우아한 텍스쳐와 아로마를 선사합니다.",
    "grapeNames": []
  },
  {
    "slug": "us-california-sonoma-county-sonoma-coast-4",
    "nameKo": "(US / California / Sonoma County / Sonoma Coast )",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Sonoma",
    "volume": 750,
    "foodPairing": "[]",
    "description": "오베르의 시그니처 싱글 빈야드 피노누아만큼 오베르만의 우아한 맛과 향을 제공하는 와인입니다. 2019 빈티지의 경우, 겨울에 내린 많은 양의 비 덕분에 영양분이 땅 깊숙이 퍼져 풍부한 맛을 가진 포도가 수확되었습니다. 또한 초가을까지 따뜻했던 날씨가 완숙된 포도를 만들어 이후 가을의 바람이 포도의 산미를 끌어올려 10월 초에 수확을 진행하였습니다. 소노마 코스트 피노누아는 우아하면서도 동시에 응축된, 그리고 매력적인 토양의 향기를 풍깁니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "▶ 원산지 :  미국 / 캘리포니아 / 소노마 카운티 / 소노마 코스트",
    "grapeNames": []
  },
  {
    "slug": "us-california-sonama-carneros-2",
    "nameKo": "(US / California / Sonama / Carneros)",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Sonoma",
    "volume": 750,
    "foodPairing": "[]",
    "description": "파크 애비뉴 이스테이트는 오베르의 첫 번째 빈야드인 로렌과 CIX 이스테이트 빈야드 사이에 위치합니다. 로렌 이스테이트 빈야드와 같은 언덕에 위치하며 노출 방향이 동일하지만 고대 해저면을 구성하던 토양으로 이루어져 있다는 점에서 차이가 있습니다. 레몬 파우더와 그린 망고, 라임 소르베, 쇼트 브레드의 유혹적인 향으로 시작해 중간 중간 약간의 짭짤함이 느껴집니다. 인상적인 에너지와 미네랄리티, 완벽하게 어우러진 산도로 가득한 와인으로 시간이 지남에 따라 그 풍미가 느리지만 흥미롭게 발전해갑니다. 와인의 색은 약간 흐릿한데 이는 정제와 여과 단계를 거치지 않기 때문으로, 제조 단계에서 개입을 최소화하겠다는 와이너리의 의지를 보여줍니다. 오베르 특유의 스타일을 완벽하게 반영, 2019년 첫 빈티지부터 매끄러운 균형감과 높은 집중력으로 평론가들로부터 높은 점수를 받으며 주목을 모은 스타일리시한 와인입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "▶ 원산지 :  미국 / 캘리포니아 / 소노마 / 카네로스",
    "grapeNames": []
  },
  {
    "slug": "us-california-sonoma-county-russian-river-valley",
    "nameKo": "(US / California / Sonoma County / Russian River Valley )",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Sonoma",
    "volume": 750,
    "foodPairing": "[]",
    "description": "2023 빈티지는 러시안 리버 밸리 지역을 대표하는 와인의 명성을 이어갈 것으로 기대되는 와인입니다. 오베르는 싱글빈야드에 대한 아이덴티티를 유지하면서도 AVA 와인역시 품질에 있어 타협하지 않는 일관성을 보여줍니다. 독보적인 개성을 지닌 이 와인은 우아한 질감과 섬세한 아로마, 또렷한 개성이 잔에서 살아납니다. 오랜 시간 햇빛을 받으며 복합적이면서도 풍성한 스타일로 완성된 러시안 리버 피노누아는 잘 익은 체리, 레드 플럼, 블루베리의 향이 가득합니다. 시원한 민트와 샌들우드의 은은한 향이 과일의 아로마를 더욱 돋보이게 하며 부드러운 질감과 균형잡힌 탄닌은 농축미와 함께 앞으로 장기 숙성을 하며 즐기기에도 훌륭한 와인 입니다. ★ 2018년 7월호 Wine Spectator California Chardonnay",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "▶ 원산지 :  미국 / 캘리포니아 / 소노마 카운티 / 러시안 리버 밸리",
    "grapeNames": []
  },
  {
    "slug": "us-california-sonoma-county-carneros",
    "nameKo": "(US / California / Sonoma County / Carneros )",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Sonoma",
    "volume": 750,
    "foodPairing": "[]",
    "description": "2022 카네로스 샤도네이는 앞으로 싱글 빈야드로 자리잡을 어린 포도나무에서 탄생했습니다. 이번 빈티지는 오베르 특유의 스타일을 그대로 담아 우아한 질감과 향을 선사합니다. 풍부하고 매력적인 질감이 돋보이며, 살구, 캐모마일의 따뜻한 향으로 시작됩니다. 입안에서는 잘 익은 프렌치 버터 배와 레몬 오일의 풍미가 더해져 빈티지 특유의 풍성함과 감칠맛을 느낄 수 있습니다. 오베르 스타일의 탄탄한 구조감과 미네랄이 어우러져 있으며, 앞으로 5~10년 동안 우아하게 숙성될 수 있습니다.빛깔에서 보여지는 약간의 탁함은 모든 양조과정에서 최소한으로 개입하는 Aubert의 신념을 드러냅니다. ★ 2018년 7월호 Wine Spectator California Chardonnay",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "▶ 원산지 :  미국 / 캘리포니아 / 소노마 카운티 / 카네로스",
    "grapeNames": []
  },
  {
    "slug": "hirsch-vineyards-san-andreas-fault-pinot-noir",
    "nameKo": "Hirsch Vineyards San Andreas Fault Pinot Noir",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "미국 / 소노마 / 포트 로스 (Fort Ross / Sonoma / US)",
    "volume": 750,
    "foodPairing": "[]",
    "description": "허쉬 빈야드는 60 개가 넘는 구획 (block) 으로 이루어진 단일 포도원 (Single Vineyard) 입니다. 각 구획에서 100% 손 수확한 포도를 병입 전까지 어떠한 블렌딩도 하지 않으며 포도밭 본연의 복합적인 매력 그대로를 드러내고자 합니다. 또한 비정제, 비여과로 깊고 고유한 풍미를 지니는 소노마 피노 누아의 아이콘 입니다. 산 안드레아스 폴트는 피노 누아 전문가 허쉬의 대표 피노 누아로, 우아하고 복합적인 구조미가 돋보이는 와인입니다. 높은 산도감과 낮은 알코올, 정제된 과실미가 훌륭한 조화를 이룹니다. 미디엄 바디의 전체적으로 우아한 느낌을 주는 와인으로, 생생 한 과일 풍미가 토스트, 훈제의 아로마와 만나 어우러집니다. 레드 체리와 라즈베리의 풍미에 결이 고운 탄닌과 짜릿한 산도가 더해져 탄탄한 구조감과 훌륭한 밸런스를 느낄 수 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "허쉬 빈야드 산 안드레아스  폴트 피노 누아",
    "grapeNames": []
  },
  {
    "slug": "hirsch-vineyards-east-ridge-pinot-noir",
    "nameKo": "Hirsch Vineyards East Ridge Pinot Noir",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "미국 / 소노마 / 포트 로스 (Fort Ross / Sonoma / US)",
    "volume": 750,
    "foodPairing": "[]",
    "description": "허쉬 빈야드는 60개가 넘는 구획 (block) 으로 이루어진 단일 포도원 (Single Vineyard) 입니다. 각 구획에서 100% 손 수확한 포도를 병입 전까지 어떠한 블렌딩도 하지 않으며 포도밭 본연의 복합적인 매력 그대로를 드러내고자 합니다. 또한 비정제, 비여과로 깊고 고유한 풍미를 지니는 소노마 피노 누아의 아이콘 입니다. 이스트 릿지는 허쉬의 포도밭 중 오전의 햇살을 충분히 받는 구획에 부르고뉴 뽀마르 (Pommard) 클론을 식재하여 과실미와 품질이 뛰어난 포도만을 엄선, 친환경적인 방식으로 양조됩니다. 허쉬 빈야드의 모든 피노 누아 가운데 가장 파워풀하며 농축미가 느껴지는 피노 누아라 할 수 있습니다. 따르는 순간 마치 사워 체리, 크랜베리 등의 과일들이 잔에서 튀어 나오는 듯한 생생한 부케가 인상적인, 향기로움으로 가득찬 와인입니다. 입에서는 복합미와 탄닌의 조화로 지금부터 즐길 수도 있고, 셀러링 후 2020년 이후의 음용도 추천합니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "허쉬 빈야드 이스트 릿지 피노 누아",
    "grapeNames": []
  },
  {
    "slug": "hirsch-vineyards-east-ridge-pinot-noir-2",
    "nameKo": "Hirsch Vineyards East Ridge Pinot Noir",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "미국 / 소노마 / 포트 로스 (Fort Ross / Sonoma / US)",
    "volume": 750,
    "foodPairing": "[]",
    "description": "허쉬 빈야드는 60개가 넘는 구획 (block) 으로 이루어진 단일 포도원 (Single Vineyard) 입니다. 각 구획에서 100% 손 수확한 포도를 병입 전까지 어떠한 블렌딩도 하지 않으며 포도밭 본연의 복합적인 매력 그대로를 드러내고자 합니다. 또한 비정제, 비여과로 깊고 고유한 풍미를 지니는 소노마 피노 누아의 아이콘 입니다. 허쉬 리저브 피노 누아는 허쉬의 11개의 포도밭 중에서도 가장 숙성이 잘 되고 뛰어난 구획에서 엄격히 선별한 포도로만 양조한 와인으로, 굉장히 한정적인 생산량의 리저브급 피노 누아 입니다. 2013 Vintage : Vinous 93점 /",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "허쉬 빈야드 리저브 피노 누아",
    "grapeNames": []
  },
  {
    "slug": "kosta-browne-cerise-vineyard-pinot-noir",
    "nameKo": "Kosta Browne Cerise Vineyard Pinot Noir",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "미국 / 멘도치노 /앤더슨 밸리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "(Anderson Valley / Mendocino / US) 흙내음이 섞인 싱싱한 체리와 크랜베리가 은은한 바닐라 향과 함께 피어 오릅니다. 입안에서 느껴지는 와인의 우아한 구조감과 매끄러운 탄닌은 생생한 산미와 함께 트라이앵글의 완벽한 조화를 이루어 냅니다. 코스타 브라운이 2016년 매입한 앤더슨 밸리의 싱글 빈야드로, 멘도치노 (소노마보다 북쪽에 위치) 지역으로의 첫 진출이라는 의미가 있습니다. 매우 서늘한 기후, 210~520m 고도에서 남서향으로 급격한 경사를 이루고 있으며 활기찬 에너지를 지닌 빈야드 입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "코스타 브라운 세리즈 빈야드 피노 누아",
    "grapeNames": []
  },
  {
    "slug": "kosta-browne-gap-s-crown-pinot-noir",
    "nameKo": "Kosta Browne Gap’s Crown Pinot Noir",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "미국 / 소노마 코스트 (Sonoma Coast / US)",
    "volume": 750,
    "foodPairing": "[]",
    "description": "갭스 크라운은 가파른 경사면을 따라 1988년 식재된, *페탈루마 갭 (Petaluma Gap_서늘한 해풍의 통로가 되는 소노마 코스트 내의 침하구역) 에 위치한 싱글 빈야드 입니다. 코스타 브라운은 2006 년 부터 Estate Producer 로서, 소노마 코스트 피노 누아의 중추인 이 곳을 관리해 오고 있습니다. Gap’s Crown Vineyard_ Sonoma Coast 2% 뉴 오스트리안 오크에서 17개월 숙성,",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "코스타 브라운 갭스 크라운 피노 누아",
    "grapeNames": []
  },
  {
    "slug": "kosta-browne-sta-rita-hills-pinot-noir",
    "nameKo": "Kosta Browne Sta. Rita Hills Pinot Noir",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "미국 / 산타바바라 / 산타 리타 힐즈 (Sta. Rita Hills / Sta. Barbara / US)",
    "volume": 750,
    "foodPairing": "[]",
    "description": "캘리포니아 남단 산타바바라 카운티에 위치한 산타리타 힐즈는 캘리포니아에서 가장 작은 AVA (미국의 와인 생산지역) 중 한 곳입니다. 산타 리타 힐즈는 안개와 바닷바람으로 냉각효과를 주는 해양성 기후와 풍부한 해양 퇴적물을 함유한 석회질 토양 등으로 세계적 피노누아 산지로 알려져 있습니다. 블랙베리와 딸기가 어우러진 매력적인 향과 은은한 스파이스의 힌트가 돋보입니다. 우아한 구조감속에 야생적은 베리류의 풍미가 돋보이며 탄탄한 탄닌이 이를 받쳐줍니다. 2021 Vintage : RP 93점 / JS 93점 / WS 92점 / WE 94점 2020 Vintage : WE 95점 / WS 93점",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "코스타 브라운 산타 리타 힐즈 피노 누아",
    "grapeNames": []
  },
  {
    "slug": "kosta-browne-russian-river-valley-pinot-noir",
    "nameKo": "Kosta Browne Russian River Valley Pinot Noir",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "미국 / 소노마 / 러시안 리버 밸리 (Russian River Valley / Sonoma / US)",
    "volume": 750,
    "foodPairing": "[]",
    "description": "구조감과 응집력이 뛰어나면서도 조화로운 산미를 가진 피노누아를 추구하는 코스타 브라운은 생명력이 가득한 러시안 리버 밸리의 테루아를 가장 잘 이해하는 와이너리 중 하나입니다. 짙은 레드 체리와 블랙베리의 풍부한 레이어가 어우러집니다. 석류와 베리류의 풍미가 신선한 산도와 완벽한 균형을 이루며 긴 여운으로 마무리 됩니다. 2021 Vintage : RP 94점 / JD 94점 / JS 94점 2020 Vintage : RP 90점 / JD 93점 / JS 93점",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "코스타 브라운 러시안 리버 밸리 피노 누아",
    "grapeNames": []
  },
  {
    "slug": "kosta-browne-sonoma-coast-pinot-noir",
    "nameKo": "Kosta Browne Sonoma Coast Pinot Noir",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "미국 / 소노마 코스트 (Sonoma Coast / US)",
    "volume": 750,
    "foodPairing": "[]",
    "description": "태평양으로부터 불어오는 차가운 바람의 영향을 바로 받는 소노마 코스트 지역에서 코스타 브라운은 누구보다 진지하고, 집중도 있는 피노 누아를 만듭니다. 잘 익은 체리, 라즈베리와 신선한 바질, 석류의 아로마가 매력적으로 어우러집니다. 풍부한 과실향과 인상적인 산미 그리고 역동적인 구조감이 엿보이는 3박자가 완벽한 피노누아 입니다. “I don’t believe a 100% of wine. There is always a room for improvement.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "코스타 브라운 소노마 코스트 피노 누아",
    "grapeNames": []
  },
  {
    "slug": "kosta-browne-one-sixteen-chardonnay",
    "nameKo": "Kosta Browne One Sixteen Chardonnay",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "미국 / 소노마 / 러시안 리버 밸리 (Russian River Valley / Sonoma / US)",
    "volume": 750,
    "foodPairing": "[]",
    "description": "원 식스틴은 러시아 밸리의 핫 스팟이자, 청정의 고급 포도 지역으로 유명한 세바스토폴 (Sebastopol) 을 지나는 Gravenstein 고속도로 116 에서 유래한 이름입니다. 싱그러운 시트러스의 풍미와 라벤더, 그리고 크림브륄레의 아로마가 정교하게 어우러집니다. 키위, 레몬 그리고 스파이스의 섬세한 노트가 매력적인 산미와 깊이있는 풍미를 보여줍니다. 2022 Vintage : JS 95점 2021 Vintage : JS 96점 / RP 91점 / JD 90점",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "코스타 브라운 원 식스틴 샤도네이",
    "grapeNames": []
  },
  {
    "slug": "mt-carmel-sta-rita-hills-pinot-noir",
    "nameKo": "Mt. Carmel, Sta. Rita Hills Pinot Noir",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "미국 / 산타바바라 / 산타 리타 힐즈 (Sta. Rita Hills / Sta. Barbara / US)",
    "volume": 750,
    "foodPairing": "[]",
    "description": "2021 Vintage : JS 96점 / D 96점 2020 Vintage : WE 95점 2019 Vintage : RP 94점",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "코스타 브라운 마운트 카멜 피노누아",
    "grapeNames": []
  },
  {
    "slug": "wine-enthusiast-93-pts",
    "nameKo": "Anderson Valley Pinot Noir",
    "nameEn": "Wine Enthusiast 93 pts.",
    "type": "red",
    "country": "USA",
    "regionL1": "Anderson Valley > Mendocino County > USA",
    "volume": 750,
    "foodPairing": "[]",
    "description": "Wine Enthusiast 93 pts. “I don’t believe a 100% of wine. There is always a room for improvement.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "코스타 브라운 앤더슨 밸리 피노누아",
    "grapeNames": []
  },
  {
    "slug": "wine-enthusiast-93-pts-2",
    "nameKo": "Willamette Valley Pinot  Noir",
    "nameEn": "Wine Enthusiast 93 pts.",
    "type": "red",
    "country": "USA",
    "regionL1": "Willamette Valley > Oregon  > USA",
    "volume": 750,
    "foodPairing": "[]",
    "description": "Wine Enthusiast 93 pts. “I don’t believe a 100% of wine. There is always a room for improvement.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "코스타 브라운 윌라매트 밸리 피노누아",
    "grapeNames": []
  },
  {
    "slug": "kosta-browne-keefer-ranch-pinot-noir",
    "nameKo": "Kosta Browne Keefer Ranch Pinot Noir",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "미국 / 소노마 / 러시안 리버 밸리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "(Russian River Valley / Sonoma / US) 갓 수확한 산딸기, 블랙베리, 레드베리의 아로마가 화사하게 느껴지며 입안에서 느껴지는 부드럽고 둥근 탄닌과 정밀하고 집중적인 구조감을 가진 와인은 목넘김 이후 긴 시간동안 여운을 남겨줍니다. 키퍼 랜치는 코스타 브라운 최초의 자가소유 싱글 빈야드 입니다. 러시안 리버 밸리의 남서부에 자리하며 안개와 미풍, 서늘한 밤, 따뜻한 오후 기온과 햇빛이 충만한 곳으로, 조화로운 밸런스의 와인을 위한 포도를 완성하게 합니다. 2005년 빈야드 취득 이래 키퍼 랜치의 피노 누아는 줄곧 놀라운 천연의 산도와 우아함을 보여주고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "코스타 브라운 키퍼 랜치 피노 누아 2018",
    "grapeNames": []
  },
  {
    "slug": "maritana-la-rivi-re-chardonnay",
    "nameKo": "MARITANA La Rivière Chardonnay",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "White",
    "volume": 750,
    "foodPairing": "[]",
    "description": "강을 뜻하는 ‘라 리비에르’ 에서 알 수 있듯, 와인메이커는 이 와인을 러시안 리버 밸리의 텍스트북으로 완성하고자 했습니다. 손수확과 선별을 거쳐 개입을 최소화 한 양조 방식을 통해 테루아의 순수성을 표현했으며, 레몬과 사과의 청량함 뒤로 토양의 특성에서 오는 미네랄, 짚과 화약의 힌트가 미묘한 복합미를 더합니다. 풀바디하고 깊은 풍미에 층층이 펼쳐지는 과실의 레이어가 다채롭습니다. 리치하며 동시에 경쾌한 산도의 균형이 탁월하고 집중도 있는 화이트 와인입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "마리타나 라 리비에르 샤도네이",
    "grapeNames": [
      "‘Exclusive Focus on Russian River Valley Wine’",
      "즉 러시안 리버 밸리에의 온전한 집중은 와인 스타일에 그만의 개성을 부여합니다. 파츠 와인메이킹의 방향성은 빈티지와 무관하게 지속적인 ‘Balanced",
      "Elegant and Perfumed’ 로 요약되며",
      "이는 특히 샤도네이에서 그 품종적 특징을 기반으로 완벽하게 표현됩니다."
    ]
  },
  {
    "slug": "maritana-shop-block-1967-chardonnay",
    "nameKo": "MARITANA Shop Block 1967 Chardonnay",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Dutton Ranch < Russian River Valley < Sonoma County",
    "volume": 750,
    "foodPairing": "[]",
    "description": "와인명의 1967은 포도나무가 식재된 연도를 의미합니다. 레몬과 라임 등의 표현력 좋은 아로마가 이국적 느낌을 주며 팔레트에서는 넘치는 풍미와 농밀함이 미각을 사로잡습니다. 매력적인 과실미와 함께 순수하며 그득한 흰 꽃다발의 향기가 섬세하고 미네랄과 산도는 와인의 구조감을 돋보이게 합니다. 처음에는 상큼하고 생기 있는 느낌으로 다가와 입안에서 긴 여운을 남기는 와인입니다. 2019년 빈티지의 경우 2023년 부터 음용을 추천하며, 이후 수년 간의 셀러링을 통한 병숙성으로 더욱 발전된 복합미를 기대할 수 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "마리타나 샵 블록 샤도네이",
    "grapeNames": [
      "‘Exclusive Focus on Russian River Valley Wine’",
      "즉 러시안 리버 밸리에의 온전한 집중은 와인 스타일에 그만의 개성을 부여합니다. 파츠 와인메이킹의 방향성은 빈티지와 무관하게 지속적인 ‘Balanced",
      "Elegant and Perfumed’ 로 요약되며",
      "이는 특히 샤도네이에서 그 품종적 특징을 기반으로 완벽하게 표현됩니다."
    ]
  },
  {
    "slug": "maritana-hansen-hill-chardonnay",
    "nameKo": "MARITANA Hansen Hill Chardonnay",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Dutton Ranch < Russian River Valley < Sonoma County",
    "volume": 750,
    "foodPairing": "[]",
    "description": "핸슨힐은 그 이름처럼 경사진 힐사이드의 빈야드입니다. 풍성한 꽃다발의 부케, 바다의 영향이 짐작되는 미네랄, 복숭아, 금귤, 구아바와 망고, 파인애플 등의 열대과일, 베이킹 스파이스 등이 강약을 이루며 농축미 있는 에너지를 발산합니다. 입안에서 긴장감을 느끼게 하는 밸런스와 복합미가 인상적인 샤도네이로, 기억에 남을 피니시를 선사합니다. 2019년 빈티지의 경우 2023년 부터 음용을 추천하며, 이후 수년 간의 셀러링을 통한 병숙성으로 더욱 발전된 복합미를 기대할 수 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "마리타나 핸슨힐 샤도네이",
    "grapeNames": [
      "‘Exclusive Focus on Russian River Valley Wine’",
      "즉 러시안 리버 밸리에의 온전한 집중은 와인 스타일에 그만의 개성을 부여합니다. 파츠 와인메이킹의 방향성은 빈티지와 무관하게 지속적인 ‘Balanced",
      "Elegant and Perfumed’ 로 요약되며",
      "이는 특히 샤도네이에서 그 품종적 특징을 기반으로 완벽하게 표현됩니다."
    ]
  },
  {
    "slug": "maritana-le-russe-pinot-noir",
    "nameKo": "MARITANA Le Russe Pinot Noir",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Russian River Valley < Sonoma County",
    "volume": 750,
    "foodPairing": "[]",
    "description": "2018빈티지의 경우, 러시안 리버밸리의 마르텔라 빈야드, 브라운 과 마르티넬리 리버로드 에서 재배한 고품질 피노누아를 블렌딩 했으며, 프렌치 오크배럴 (뉴오크 75%, 한번 쓴 오크 25%)에서 숙성 되었습니다. 2019년 빈티지의 경우 10-15년 후까지 셀러링이 가능한 잠재성을 지닌 레드와인입니다. < California < US\u000b▶ 타   입 :  Red",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "마리타나 레 루스 피노누아",
    "grapeNames": [
      "‘Exclusive Focus on Russian River Valley Wine’",
      "즉 러시안 리버 밸리에의 온전한 집중은 와인 스타일에 그만의 개성을 부여합니다. 파츠 와인메이킹의 방향성은 빈티지와 무관하게 지속적인 ‘Balanced",
      "Elegant and Perfumed’ 로 요약되며",
      "이는 특히 샤도네이에서 그 품종적 특징을 기반으로 완벽하게 표현됩니다."
    ]
  },
  {
    "slug": "maritana-jenkins-ranch-single-vineyard-pinot-noir",
    "nameKo": "MARITANA Jenkins Ranch Single Vineyard Pinot Noir",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Jenkins Ranch < Russian River Valley < Sonoma County",
    "volume": 750,
    "foodPairing": "[]",
    "description": "젠킨스 랜치 싱글빈야드는 러시안 리버밸리 안에서도 가장 쿨한 마이크로 클리마 이며, 소노마 내에서 가장 아로마틱하고 섬세한 피노누아를 만들 수 있는 지역으로 불립니다. 붉고 밝은 빛을 띄는 과실류의 향이 지배적이며, 말린 딸기, 토스트한 오크, 토피 캐릭터가 조화롭게 피어납니다. 다양한 과실의 캐릭터가 인상적이며 섬세하고 복합적인 맛이 피니쉬까지 이어지는 와인입니다. 2019년 빈티지의 경우, 2022년부터 마시기에도 적합하지만 20년 후까지 셀러링이 가능한 잠재성을 지닌 레드와인입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "마리타나 젠킨스 랜치 싱글빈야드 피노누아",
    "grapeNames": [
      "‘Exclusive Focus on Russian River Valley Wine’",
      "즉 러시안 리버 밸리에의 온전한 집중은 와인 스타일에 그만의 개성을 부여합니다. 파츠 와인메이킹의 방향성은 빈티지와 무관하게 지속적인 ‘Balanced",
      "Elegant and Perfumed’ 로 요약되며",
      "이는 특히 샤도네이에서 그 품종적 특징을 기반으로 완벽하게 표현됩니다."
    ]
  },
  {
    "slug": "royal-st-robert-cuv-e",
    "nameKo": "RAEN Sonoma Coast Pinot Noir",
    "nameEn": "Royal St. Robert Cuvée",
    "type": "red",
    "country": "USA",
    "regionL1": "Red",
    "volume": 750,
    "foodPairing": "[]",
    "description": "Royal St. Robert Cuvée 레드 체리와 딸기, 장미 꽃잎, 제비꽃의 아로마가 섬세합니다. 이내 잔을 채우며 피어오르는 레드베리와 블랙베리에 홍차와 허브, 꽃다발의 노트가 어우러집니다. 테루아를 짐작케 하는 미네랄의 존재감, 타이트하며 단단한 타닌, 긴 피니시와 깊이를 보여줍니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "레인 소노마 코스트 피노누아",
    "grapeNames": []
  },
  {
    "slug": "sea-field-vineyard",
    "nameKo": "RAEN Fort Ross-Seaview Pinot Noir",
    "nameEn": "Sea Field Vineyard",
    "type": "red",
    "country": "USA",
    "regionL1": "Fort Ross-Seaview < Sonoma Coast < California < US",
    "volume": 750,
    "foodPairing": "[]",
    "description": "*Fort Ross : 'True Sonoma Coast'라 불리며 2012년 지정된 소노마 카운티의 AVA\u000b▶ 타   입 :  Red 빈야드가 위치한 Fort Ross의 토질은 66~200만년 전 바다의 기반암으로부터 부서져 나온 다양한 해저 토양으로 이뤄져 있습니다. 이 곳은 태평양에서 불과 약 3Km 거리에 위치한 해발 고도 460m의 고지대로, 포트로스 테루아의 표본이자 RAEN에서 가장 우아한 스타일의 피노누아를 생산합니다. 장미 꽃잎, 블러드 오렌지, 라즈베리, 야생딸기, 젖은 돌과 이끼, 허브티 등을 표현하며 또한 입에서 다양한 꽃의 뉘앙스를 느낄 수 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "레인 포트 로스-씨뷰 피노누아",
    "grapeNames": []
  },
  {
    "slug": "bodega-vineyard",
    "nameKo": "RAEN Freestone Occidental Pinot Noir",
    "nameEn": "Bodega Vineyard",
    "type": "red",
    "country": "USA",
    "regionL1": "Red",
    "volume": 750,
    "foodPairing": "[]",
    "description": "보데가 빈야드는 레인의 빈야드 중 가장 서늘하면서 이국적인 테루아를 지닌 곳입니다. 가파르고 야생적이며 힘있는 보데가 빈야드는 보데가 베이의 동쪽 -프리스톤과 옥시덴탈 마을 사이- 에 위치합니다. 지역 전통에 따라 가로세로 미터 단위로 식재된 이 곳의 포도는 와인에서 그 인텐스함을 보여줍니다. 블랙 체리, 야생 딸기, 장미 꽃잎, 홍차, 젖은 돌과 흙, 이국적 스파이스 등이 잔을 채웁니다. 입에서는 좋은 구조감을 주는 산도에 매끈한 타닌, 검고 붉은 야생 베리들, 미네랄 등이 조화되며 여운을 남깁니다. 선도유지를 위한 밤 수확, 이후 2차 선별을 거쳐 토착효모를 사용해 전송이 발효하였으며 정제 및 여과를 하지 않고 완성되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "레인 프리스톤 옥시덴탈 피노누아",
    "grapeNames": []
  },
  {
    "slug": "raen-sonoma-coast-lady-marjorie-chardonnay",
    "nameKo": "RAEN Sonoma Coast Lady Marjorie Chardonnay",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "White",
    "volume": 750,
    "foodPairing": "[]",
    "description": "이 와인은 카를로와 단테 몬다비의 할머니인 마조리의 헌신과 노력, 결단력과 카리스마에 대한 존경심을 담아 만들어졌습니다. 이 병에 담기는 포도는 소노마 코스트 해안가를 따라서 있는 포트 로스 씨뷰 지역 안에 2곳의 구역에서 수확했으며, 바다와 가까운 포도밭인 만큼 시원한 바다의 미네랄리티가 잘 표현되어있습니다. 으깬 젖은 자갈, 잘 익은 천도 복숭아와 살구, 감귤의 향이 지속적으로 피어나오며, 허니써클(인동덩굴)과 젖은 바위의 뉘앙스는 특히 지속적으로 우리를 이 포도밭의 떼루아로 데려다 줍니다. 우아하면서도 섬세하며 밸런스가 잘 잡혀있고 과실의향, 꽃향, 미네랄리티 뉘앙스가 아주 긴 마무리를 선사합니다. 포도는 오가닉하고 비오다이나믹한 방식으로 길러졌으며 수확 후 2차 선별을 거쳐 토착효모를 사용해 전송이 발효했습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "레인 소노마 코스트 레이디 마조리 샤도네이",
    "grapeNames": []
  },
  {
    "slug": "wine-9",
    "nameKo": "코에서는 보울에 흰꽃을 가득 채운 듯한 향이 인상적이며, 흰꽃, 감귤 꽃, 천도복숭아, 젖은 바위, 엘더플라워, 리치, 으깬 조개껍질의 뉘앙스가 긴 여운을 남깁니다. 활기차고 짜릿한 산미가 밸런스 있게 입안에서 우아하고 긴 피니쉬를 장식합니다.",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "White",
    "volume": 750,
    "foodPairing": "[]",
    "description": "포도는 오가닉하고 비오다이나믹한 방식으로 길러졌으며 수확 후 2차 선별을 거쳐 토착효모를 사용해 전송이 발효했습니다. 레인 포트 로스-씨뷰 찰스랜치 샤도네이 RAEN Fort Ross-Seaview Chardonnay",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "이곳의 포도밭은 바위가 많은 언덕 위에 있으며, 포트로스의 시원한 태평양 해안선에서 3km 떨어진 곳에 위치해 있습니다. 이 곳의 토양은 갈라진 암석 사이로 배수가 원활하며, 40년 전에 이곳에 심어진 포도나무는 토양에 단단히 뿌리를 내리고 있습니다.",
    "grapeNames": []
  },
  {
    "slug": "senses-sonoma-coast-chardonnay",
    "nameKo": "Senses Sonoma Coast Chardonnay",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Dry, White",
    "volume": 750,
    "foodPairing": "[]",
    "description": "2020 빈티지 소노마 코스트 샤도네이의 포도는 대부분 Charles Heintz (찰스 하인츠) 빈야드에서 왔으며, 중성적인 프랑스산 오크배럴에서 에이징 하였습니다. 이 와인은 생동감 있는 레몬과 풋사과, 신선한 건초, 구운 아몬드, 버터 스카치의 힌트를 가진 스파이스 뉘앙스의 미디엄+바디를 가졌으며, 팔렛에서는 감귤류, 사과, 베이킹 스파이스가 층층히 느껴지면서 피니쉬까지 강렬하고 길게 마무리 됩니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "센시즈 소노마 코스트 샤도네이",
    "grapeNames": []
  },
  {
    "slug": "senses-russian-river-valley-chardonnay",
    "nameKo": "Senses Russian River Valley Chardonnay",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Dry, White",
    "volume": 750,
    "foodPairing": "[]",
    "description": "2020 빈티지 러시안 리버밸리 샤도네이의 포도는 대부분 Dutton Ranch 에서 왔으며, 2019년도가 첫번째 빈티지인 만큼 다양한 시도를 거쳐가고 있는 와인입니다. 이 와인은 신선한 자몽, 백도 복숭아, 허니써클, 라임 블라썸, 밀랍(beewax) 향이 잔에서 피어오르며, 미디엄+ 바디감으로 매끈한 질감을 훌륭하게 표현했습니다. 팔렛에서는 아삭한 과일들의 뉘앙스와 진저리(생강의 느낌)한 킥으로 피니쉬까지 이어집니다. 2020 Vintage : RP 93점",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "센시즈 러시안 리버밸리 샤도네이",
    "grapeNames": []
  },
  {
    "slug": "senses-uv-el-diablo-chardonnay",
    "nameKo": "Senses UV – EL Diablo Chardonnay",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Dry, White",
    "volume": 750,
    "foodPairing": "[]",
    "description": "엘 디아블로 빈야드는 2008년에 매우 숙련된 로컬 빈야드 관리자 였던 Ulises Valdez (UV)에 의해 심어졌습니다. 이 지역은 러시안 리버밸이 지역 중에서도 좀 더 내륙에 위치해 있어 따뜻한 기온을 유지합니다. 2020 UV – 엘 디아블로 샤도네이는 화려한 향과 뉘앙스들로 가득합니다. 파인애플, 구아바, 오렌지 꽃 향과 고수 씨의 터치감, 마지팬, 레몬그라스 의 향과 함께 미각에서는 사랑스러운 긴장감을 피니쉬까지 팽팽하게 표현합니다. 2020 Vintage : RP 95점",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "센시즈 엘 디아블로 샤도네이",
    "grapeNames": []
  },
  {
    "slug": "senses-b-a-thieriot-chardonnay",
    "nameKo": "Senses B.A. Thieriot Chardonnay",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Dry, White",
    "volume": 750,
    "foodPairing": "[]",
    "description": "B.A 티에리엇 빈야드는 센시즈 와인의 창립자 중 1명인 맥스 티에리엇의 부모님이었던 카메론 과 브리짓 티에리엇이 1988년도에 매입한 땅입니다. 현재 소노마에서 최고의 프리미엄 와인 빈야드 중 하나로 주목 받고 있는 곳입니다. 2020 빈티지 B.A 티에리엇 샤도네이는 에너제틱한 금귤, 파인애플 페이스트, 분필, 젖은 자갈, 브리오슈, 데친 아몬드의 향이 피어오르며, 미각에서는 풀바디 샤도네이의 강인하고 긴 피니쉬가 인상적입니다. B.A.는 Max의 어머니인 Brigit Ann의 약자",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "센시즈 티에리엇 샤도네이",
    "grapeNames": []
  },
  {
    "slug": "senses-kanzler-vineyard-pinot-noir",
    "nameKo": "Senses Kanzler Vineyard Pinot Noir",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Dry, Red",
    "volume": 750,
    "foodPairing": "[]",
    "description": "칸츨러 빈야드는 소노마 카운티에서 처음으로 개발된 빈야드 중 하나이며(1996년 시작), 클래식한 버건디 스타일의 피노누아를 생산하기에 가장 적합한 뗴루아로 평가받고 있습니다. 이 와인은 잘 익은 빙체리, 멀버리, 베이킹 향신료, 콜라 향이 나며, 러시아 리버 밸리 프리미엄 피노누아의 캐릭터인 부드러운 탄닌감과 좋은 산도를 잘 표현했습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "센시즈 칸츨러 빈야드 피노누아",
    "grapeNames": []
  },
  {
    "slug": "senses-sonoma-coast-chardonnay-2",
    "nameKo": "Senses Sonoma Coast Chardonnay",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Dry, White",
    "volume": 750,
    "foodPairing": "[]",
    "description": "2020 빈티지 소노마 코스트 샤도네이의 포도는 대부분 Charles Heintz (찰스 하인츠) 빈야드에서 왔으며, 중성적인 프랑스산 오크배럴에서 에이징 하였습니다. 이 와인은 생동감 있는 레몬과 풋사과, 신선한 건초, 구운 아몬드, 버터 스카치의 힌트를 가진 스파이스 뉘앙스의 미디엄+바디를 가졌으며, 팔렛에서는 감귤류, 사과, 베이킹 스파이스가 층층히 느껴지면서 피니쉬까지 강렬하고 길게 마무리 됩니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "센시즈 소노마 코스트 샤도네이",
    "grapeNames": []
  },
  {
    "slug": "senses-russian-river-valley-chardonnay-2",
    "nameKo": "Senses Russian River Valley Chardonnay",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Dry, White",
    "volume": 750,
    "foodPairing": "[]",
    "description": "2020 빈티지 러시안 리버밸리 샤도네이의 포도는 대부분 Dutton Ranch 에서 왔으며, 2019년도가 첫번째 빈티지인 만큼 다양한 시도를 거쳐가고 있는 와인입니다. 이 와인은 신선한 자몽, 백도 복숭아, 허니써클, 라임 블라썸, 밀랍(beewax) 향이 잔에서 피어오르며, 미디엄+ 바디감으로 매끈한 질감을 훌륭하게 표현했습니다. 팔렛에서는 아삭한 과일들의 뉘앙스와 진저리(생강의 느낌)한 킥으로 피니쉬까지 이어집니다. 2021 Vintage : RP 93점",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "센시즈 러시안 리버밸리 샤도네이",
    "grapeNames": []
  },
  {
    "slug": "senses-uv-el-diablo-chardonnay-2",
    "nameKo": "Senses UV – EL Diablo Chardonnay",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Dry, White",
    "volume": 750,
    "foodPairing": "[]",
    "description": "엘 디아블로 빈야드는 2008년에 매우 숙련된 로컬 빈야드 관리자 였던 Ulises Valdez (UV)에 의해 심어졌습니다. 이 지역은 러시안 리버밸이 지역 중에서도 좀 더 내륙에 위치해 있어 따뜻한 기온을 유지합니다. 2020 UV – 엘 디아블로 샤도네이는 화려한 향과 뉘앙스들로 가득합니다. 파인애플, 구아바, 오렌지 꽃 향과 고수 씨의 터치감, 마지팬, 레몬그라스 의 향과 함께 미각에서는 사랑스러운 긴장감을 피니쉬까지 팽팽하게 표현합니다. 2020 Vintage : RP 95점",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "센시즈 엘 디아블로 샤도네이",
    "grapeNames": []
  },
  {
    "slug": "senses-charles-heintz-chardonnay",
    "nameKo": "Senses Charles Heintz Chardonnay",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Dry, White",
    "volume": 750,
    "foodPairing": "[]",
    "description": "하인츠(Heintz) 패밀리는 100년이 넘는 시간동안 이 빈야드를 일궈 왔습니다. 이상적인 Golden ridge 토양, 건강한 올드바인, 따뜻한 낮과 시원한 밤의 균형이 로버트파커의 한마디로 정리가 됩니다. “ 이 빈야드는 캘리포니아 최고의 그랑크뤼 샤도네이 생산지 중 하나“. 코에서는 아몬드 향, 크루아상, 감, 설탕에 절인 생강과 버터 스카치의 뉘앙스가 풍겨져 오며, 시트러스의 향이 폭팔적입니다. 입에서는 미디엄 + 바디감의 미네랄과 윤기나는 질감이 오래도록 피니쉬까지 이어집니다. 2021 Vintage : RP 94점, JS 95점",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "센시즈 찰스 하인츠 샤도네이",
    "grapeNames": []
  },
  {
    "slug": "senses-b-a-thieriot-chardonnay-2",
    "nameKo": "Senses B.A. Thieriot Chardonnay",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Dry, White",
    "volume": 750,
    "foodPairing": "[]",
    "description": "B.A 티에리엇 빈야드는 센시즈 와인의 창립자 중 1명인 맥스 티에리엇의 부모님이었던 카메론 과 브리짓 티에리엇이 1988년도에 매입한 땅입니다. 현재 소노마에서 최고의 프리미엄 와인 빈야드 중 하나로 주목 받고 있는 곳입니다. 2020 빈티지 B.A 티에리엇 샤도네이는 에너제틱한 금귤, 파인애플 페이스트, 분필, 젖은 자갈, 브리오슈, 데친 아몬드의 향이 피어오르며, 미각에서는 풀바디 샤도네이의 강인하고 긴 피니쉬가 인상적입니다. B.A.는 Max의 어머니인 Brigit Ann의 약자",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "센시즈 비에이 티에리엇 샤도네이",
    "grapeNames": []
  },
  {
    "slug": "senses-day-one-pinot-noir",
    "nameKo": "Senses Day One Pinot Noir",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Dry, Red",
    "volume": 750,
    "foodPairing": "[]",
    "description": "데이원 피노누아는 3명의 창립자가 센시즈를 창립하고 말 그대로 Day One (첫째날) 에 출시한 피노누아입니다. 이 와인을 양조할 때 쓰이는 포도는 센시즈가 소유한 에스테이트 밭에서 재배를 하며, 이 밭은 바다에서 불과 15km 떨어진 곳에 있어서 매일 저녁 안개에 잠겨있기도 한 곳입니다. 코에서는 라즈베리 파이, 빙 체리, 빨간 장미의 화려한 향과 라벤더, 생강, 숲의 바닥에서 날 법한 나무의 향이 집약적이며, 입 안에서는 놀라울 만큼 긴장감있는 탄닌감과 긴 피니쉬를 느낄수 있습니다. 2021 Vintage : RP 94점, JS 95점",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "센시즈 데이원 피노누아",
    "grapeNames": []
  },
  {
    "slug": "senses-kanzler-vineyard-pinot-noir-2",
    "nameKo": "Senses Kanzler Vineyard Pinot Noir",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Dry, Red",
    "volume": 750,
    "foodPairing": "[]",
    "description": "칸츨러 빈야드는 소노마 카운티에서 처음으로 개발된 빈야드 중 하나이며(1996년 시작), 클래식한 버건디 스타일의 피노누아를 생산하기에 가장 적합한 뗴루아로 평가받고 있습니다. 이 와인은 잘 익은 빙체리, 멀버리, 베이킹 향신료, 콜라 향이 나며, 러시아 리버 밸리 프리미엄 피노누아의 캐릭터인 부드러운 탄닌감과 좋은 산도를 잘 표현했습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "센시즈 칸츨러 빈야드 피노누아",
    "grapeNames": []
  },
  {
    "slug": "senses-mcm-88-pinot-noir",
    "nameKo": "Senses MCM 88 Pinot Noir",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Dry, Red",
    "volume": 750,
    "foodPairing": "[]",
    "description": "MCM은 Max(맥스), Chris(크리스), Myles(마일즈)를 의미하며 뒤의 숫자 88은 3명 창립자들의 생년(1988)을 뜻하며 싱글빈야드인 키퍼 랜치 피노누아 100%로 양조합니다. 코에서는 체리파이, 블랙베리 잼, 블루베리, 초콜릿 민트의 매력적인 향이 인상적이며, 입안에서는 풀 바디감과 함께 젖은 슬레이트, 스타 아니스와 벨벳같은 질감이 느껴집니다. 2021 Vintage : JS 95점",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "센시즈 엠씨엠 88 피노누아",
    "grapeNames": []
  },
  {
    "slug": "senses-bodega-thieriot-pinot-noir",
    "nameKo": "Senses Bodega Thieriot Pinot Noir",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "Dry, Red",
    "volume": 750,
    "foodPairing": "[]",
    "description": "센시즈의 창립자 중 한명인 Max 와 그의 아내 Lexi Thieriot 은 수년간의 탐색 끝에 2016년 이 싱글빈야드에 포도나무를 심게 되었습니다. 태평양 바다에서 불과 8km 떨어진 이 밭은 Senses의 모든 포도밭 중에서 가장 시원한 날씨를 가지고 있으며, 키슬러의 옥시덴탈 포도밭 바로 옆에 위치하고 있습니다. 코에서는 석류나무, 오디 등 작고 붉은 과실의 향과 라일락, 베르가못, 자스민 차 의 뉘앙스가 지배적이며, 입안에서는 미세한 입자의 탄닌이 오래도록 부드럽게 느껴짐과 동시에 미네랄리티가 피니쉬까지 깊고 강렬하게 남습니다. 2021 Vintage : RP 95점",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "센시즈 보데가 티에리엇 피노누아",
    "grapeNames": []
  },
  {
    "slug": "columbia-valley",
    "nameKo": "Borne of Fire Cabernet Sauvignon",
    "nameEn": "Columbia Valley",
    "type": "red",
    "country": "USA",
    "regionL1": "미국 / 워싱턴 / 콜럼비아 밸리 (Columbia Valley / Washington / US)",
    "volume": 750,
    "foodPairing": "[]",
    "description": "점토질 토양과 열기가 만나는 곳, “The Burn” area 에서는 전세계적으로 흔치 않은 특별한 테루아를 경험할 수 있습니다. 찬 기운을 머금으며 일반적으로는 조생종인 멀롯의 생육에 적합하다고 알려진 찰진 점토질 토양, 그러나 그와 상반되는 긴 성장 기간과 행잉 타임 (hanging time: 포도 과실이 매달려 있는 시간) 은 카버네 소비뇽에 이례적이면서도 이상적인 독특한 환경을 제공합니다. ‘복합적 요인의 천혜의 조합.’ 이것이 본 오브 파이어의 매력의 근원이며, 수석양조자 Juan Muñoz-Oca 는 모든 양조기법을 이를 전달하는 데 집중합니다. “The Burn” 의 복합적 테루아를 충분히 발현시키기 위한 줄기압착, 그리고 과하지 않은 오크 풍미를 위한 큰 오크통의 사용. 그 결과는 구세계 와인의 우아함과 신세계 와인의 과실미를 동시에 보여주면서도 “The Burn” 지역만의 테루아를 고스란히 간직한 독창적 와인입니다. 베리류와 체리, 야생의 꽃향기. 석류와 미네랄, 허브의 뉘앙스, 고추 등이 복합적이며 둥글고 부드러운 파우더리한 탄닌을 입안에서 느낄 수 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "본 오브 파이어 카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "columbia-valley-2",
    "nameKo": "Intrinsic Cabernet Sauvignon",
    "nameEn": "Columbia Valley",
    "type": "red",
    "country": "USA",
    "regionL1": "미국-워싱턴-콜럼비아 밸리 (Columbia Valley - Washington - US)",
    "volume": 750,
    "foodPairing": "[]",
    "description": "인트린직은 워싱턴 카버네 소비뇽의 진면목을 새롭고 독창적인 방법으로 보여줍니다. 극소량만을 생산해내는 Beverly Vineyard, 그리고 Horse Heaven Hills의 심장인 Eagle & Plow Vineyard 의 지정된 밭 안에서도 엄선된 포도의 선별은 예상을 뛰어넘는 매끄러운 질감을 만들어내며, 10%의 콘크리트 탱크 발효를 거치면서 미네랄 캐릭터가 잘 살아납니다. 마지막 단계에 프렌치 오크 숙성액과의 블렌딩을 통해 아방가르드 하면서도 클래식의 품위를 잃지 않는 세련된 와인이 완성됩니다. 대표적으로 과하지 않은 가죽과 체리의 풍미 위에 블루베리 잼, 석류와 초콜릿의 레이어가 얹혀진 풍부함을 느낄 수 있으며, 실키한 질감과 입맛을 돋우는 긴 피니시를 선사합니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "인트린직 카버네 소비뇽",
    "grapeNames": [
      "카버네 소비뇽 96%",
      "카버네 프랑 4%"
    ]
  },
  {
    "slug": "columbia-valley-3",
    "nameKo": "Intrinsic Red Blend",
    "nameEn": "Columbia Valley",
    "type": "red",
    "country": "USA",
    "regionL1": "미국-워싱턴-콜럼비아 밸리 (Columbia Valley - Washington - US)",
    "volume": 750,
    "foodPairing": "[]",
    "description": "교차 침용 -카버네 프랑 쥬스는 말벡 스킨에서, 말벡 쥬스는 카버네 프랑 스킨에서 침용- 하여 밸런스의 극치에 도전 인트린직 레드블렌드는 워싱턴 레드와인의 진면목을 새롭고 독창적인 방법으로 보여줍니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "인트린직 레드 블렌드",
    "grapeNames": [
      "대부분의 포도는 워싱턴주 콜럼비아 밸리의 핵심지역 Horse Heaven Hills 에서 조달되며",
      "이 중 카버네 프랑은 특히 품종 특유의 아름다운 풍미를 발현하게 해 줄 모든 조건을 지닌 Alder Ridge 빈야드에서 재배됩니다. 사질 토양의 빈야드는 남향으로 콜럼비아 강을 바라보며",
      "이 곳의 미기후는 새벽과 밤 인접한 강으로부터 불어오는 시원한 바람으로 풍부하면서도 우아하게",
      "섬세한 허브의 아로마가 살아나는 포도를 만듭니다. 양조 시 10%의 콘크리트 탱크 발효를 거치면서 미네랄 캐릭터가 잘 살아나는 와인으로 완성됩니다."
    ]
  },
  {
    "slug": "body-medium-to-full-body",
    "nameKo": "▶ 품   종 :  샤도네이 (Chardonnay) 100%",
    "nameEn": "▶ BODY :  Medium to Full Body",
    "type": "red",
    "country": "USA",
    "regionL1": "Washington/Oregon",
    "volume": 750,
    "foodPairing": "[]",
    "description": "새 오크통과 2년 된 오크통이 적절한 비율로 섞여 있는, 프렌치 오크통에서 7개월간 앙금 위(Sur Lie) 숙성 과정을 거쳤으며, 젖산 발효(Malolactic Fermentation) 를 통해 풍부하고 감미로우며 바닐라 향이 감도는 뒷맛을 이끌어 내었습니다. 배와 열대 과일의 풍미와 함께 자연적 환경에서 온 정확하고 깔끔한 산도, 그리고 미네랄의 터치가 조화를 이루는 부르고뉴 스타일의 준수한 화이트 와인입니다. 레꼴 No.41 콜럼비아 밸리 샤도네이",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "▶ 원산지 :  미국 / 워싱턴 / 콜럼비아 밸리 (Columbia Valley / Washington / US)",
    "grapeNames": []
  },
  {
    "slug": "body-medium-body",
    "nameKo": "▶ 품   종 :  세미용 86%, 소비뇽 블랑 14%",
    "nameEn": "▶ BODY :  Medium Body",
    "type": "red",
    "country": "USA",
    "regionL1": "Washington/Oregon",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 12,
    "foodPairing": "[]",
    "description": "L’Ecole No.41 Semillon 2017, 2016, 2014, 2013 Wine & Spirits Top 100 Values of the Year",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "▶ 원산지 :  미국 / 워싱턴 / 콜럼비아 밸리 (Columbia Valley / Washington / US)",
    "grapeNames": [
      "꿀",
      "감귤류",
      "멜론 등의 향에 이어 복잡미묘한 미네랄과 풍부하고 크리미한 맛을 주는 고급 화이트 와인으로",
      "세미용 품종으로 만든 카테고리에서 미국을 대표할 만한 와인입니다."
    ]
  },
  {
    "slug": "l-ecole-no-41-old-vines-chenin-blanc",
    "nameKo": "레꼴 No.41  야키마 밸리 올드바인 슈냉 블랑",
    "nameEn": "L’Ecole No.41 old vines Chenin Blanc",
    "type": "red",
    "country": "USA",
    "regionL1": "미국 / 워싱턴 / 야키마 밸리 (Yakima Valley / Washington / US)",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 12,
    "foodPairing": "[]",
    "description": "L’Ecole No.41 old vines Chenin Blanc 1987년부터 양조해 온 레꼴 No.41의 슈냉블랑은 40년 이상 수령의 올드바인이 표현하는 농축미 있고 풍부한 아로마와 바삭한 산도가 생동감 넘치는 프랑스 부브레 (Vouvray) 스타일의 와인입니다. 와이너리에서는 이른 아침의 수확, 포도의 부드러운 맛을 이끌어내는 전송이 압착, 발효시 철저한 온도관리 시스템과 같은 프리미엄 와인에 적용되는 양조기법을 활용해 슈냉 블랑 포도 본연의 신선함을 이끌어 냅니다. 핑크 자몽과 복숭아, 시트러스꽃, 감귤류 열매의 뉘앙스가 상큼함을 느끼게 하며 적당한 달콤함에 어우러지는 미네랄리티의 유질감이 산뜻한 피니시로 연결되어 만족을 주는 와인입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "2017, 2016, 2014, 2013 Wine & Spirits Top 100 Values of the Year",
    "grapeNames": []
  },
  {
    "slug": "columbia-valley-4",
    "nameKo": "L’Ecole No.41 Cabernet Sauvignon",
    "nameEn": "Columbia Valley",
    "type": "red",
    "country": "USA",
    "regionL1": "미국 / 워싱턴 / 콜럼비아 밸리 (Columbia Valley / Washington / US)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "레꼴 No.41 콜럼비아 밸리 카버네 소비뇽은 워싱턴 최대의 포도 재배지역인 콜럼비아 밸리에 위치한 포도밭 중에서 수령이 20년 이상 되는, 깊게 뿌리내린 포도나무에서 재배된 포도만으로 양조하였습니다. 오크통에서 22개월 동안 숙성 후 필터링 없이 그대로 병입 됩니다. 이 과정은 와인이 자연 그대로의 풍미를 간직하도록 하는 데 큰 역할을 합니다. 카버네 소비뇽의 전형을 느낄 수 있는 향기를 풍부하게 머금은 와인으로, 잘 익은 자두와 블랙체리, 커런트 등의 검은 열매 과일과 허브, 초콜릿의 풍미가 잘 드러납니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "레꼴 No.41 콜럼비아 밸리 카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "body-medium-to-full-body-2",
    "nameKo": "▶ 품  종 :  멀롯 80%, 카버네 프랑 12%, 쁘띠 베르도 6%, 카버네 소비뇽 2%",
    "nameEn": "▶ BODY :  Medium to Full Body",
    "type": "red",
    "country": "USA",
    "regionL1": "Washington/Oregon",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "워싱턴 주 최대의 포도 재배지인 콜럼비아 밸리 최상의 포도밭들에서 재배된 멀롯에, 출중한 포도의 질로 유명한 왈라 왈라 밸리의 Seven Hills Vineyard에서 재배된 소량의 카버네 소비뇽을 블렌딩하여 풍미의 복잡미묘함을 이끌어 냈습니다. 오크통에서 18개월 숙성 후, 자연 그대로의 풍미를 담고 있도록 필터링 없이 병입 하였습니다. 계피를 비롯한 다양한 향신료의 향이 달콤한 블랙베리, 잘 익은 자두, 크랜베리의 풍미와 함께 조화롭게 어울리며, 약간의 가죽 향과 달콤한 담뱃잎의 풍미에 이어 끝무렵에는 스모키한 블랙체리를 느낄 수 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "▶ 원산지 :  미국 / 워싱턴 / 콜럼비아 밸리 (Columbia Valley / Washington / US)",
    "grapeNames": []
  },
  {
    "slug": "body-full-body",
    "nameKo": "▶ 품   종 :  시라 93~98%, 그르나슈 7~2%",
    "nameEn": "▶ BODY :  Full Body",
    "type": "red",
    "country": "USA",
    "regionL1": "Washington/Oregon",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "콜럼비아 밸리 6~7개 포도밭에 속한 최상의 구획으로부터 최고의 포도를 모아 만들었으며 모든 추수는 수작업으로 진행되었습니다. 레꼴 No.41 콜럼비아 밸리 시라는 프랑스 북부 론의 고급 에르미따쥬 와인이 연상될 정도의 잘 짜여진 구조에 풍부한 질감, 무엇보다 산도와 부드러움의 밸런스가 잘 갖추어져 있는 와인입니다. 과일향이 지배적인 가운데 모카, 후추 향의 뉘앙스가 잘 살아 있습니다. 오크통에서 18개월 숙성하였으며(30% New Oak) 필터링 없이 병입하여 자연적 풍미를 그대로 전달합니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "▶ 원산지 :  미국 / 워싱턴 / 콜럼비아 밸리 (Columbia Valley / Washington / US)",
    "grapeNames": []
  },
  {
    "slug": "body-full-body-2",
    "nameKo": "▶ 품   종 : 멀롯 45%, 카버네 소비뇽 45%, 카버네 프랑 5%, 말벡 5%",
    "nameEn": "▶ BODY :  Full Body",
    "type": "red",
    "country": "USA",
    "regionL1": "Washington/Oregon",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "페퍼 브릿지 빈야드는 왈라왈라 밸리 및 전 워싱턴 지역에서 가장 훌륭한 포도밭 중 하나입니다. 애퍼지(Apogee)란 달의 궤도 상에서 지구에서 가장 먼 지점 또는 정점을 뜻하며, 최고의 품질을 가진 와인을 만들려는 레꼴 No.41의 노력을 상징합니다. 향신료와 강렬한 느낌의 검은 과일, 담배, 가죽 등의 풍미를 지니고 있으며, 잘 조화된 탄닌의 풍미와 길게 이어지는 초콜릿, 민트, 스모크의 긴 피니쉬를 느낄 수 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "▶ 원산지 : 미국 / 워싱턴 / 왈라왈라 밸리 (Walla Walla Valley / Washington / US)",
    "grapeNames": []
  },
  {
    "slug": "oregon-viognier",
    "nameKo": "(Oregon Viognier)",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "오레곤 (Oregon)",
    "volume": 750,
    "servingTempMin": 9,
    "servingTempMax": 13,
    "foodPairing": "[]",
    "description": "라임과 사과향이 지배적이지만 동시에 꿀과 자스민 향이 매우 매력적으로 나는 와인으로 바스라지는듯한 산도와 우아미 그리고 소금을 머금은 듯한 미네랄 감이 입안에서 맴돕니다. 풀 바디한 느낌을 주는 화이트 와인으로 미국이라는 테루아에 어울리는 열대 과일의 풍미와 스파이스 풍미를 느끼실수 있습니다. 지금 드셔도 좋지만 앞으로 5~7년 정도 더 숙성하여 마셔도 훌륭한 와입니다. ▪  2019 vintage : <Robert Parker> 91점 ▪  2018 vintage : <Robert Parker> 91점",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "오레곤 비오니에",
    "grapeNames": [
      "1998년 린 패너 애쉬와 그녀의 남편 론 패너 애쉬가 설립한 와이너리로 피노 누아만을 생산하기 위해 만든 부티크 와이너리 입니다. 생산하는 와인의 90% 이상이 피노 누아 포도 품종으로 비오니에와 리슬링도 경작을 하고 있습니다. 오레곤의 윌라멧 밸리 북쪽에 와이너리는 위치하고 있으며",
      "포도밭은 윌라멧 밸리 AVA 안의 세부 산지에 해당하는 7개의 다른 AVA에서 포도밭을 가지고 있습니다. 가장 시그니쳐적인 포도밭은 얌힐 칼톤 AVA에 있는 ‘쉬어 빈야드’로 프랑스 부르고뉴의 그랑크뤼에 해당하는 포도밭이라고 말할 수 있습니다."
    ]
  },
  {
    "slug": "willamette-valley-pinot-noir",
    "nameKo": "(Willamette Valley Pinot Noir)",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "윌라멧 밸리 AVA (Willamette Valley) / 오레곤 (Oregon)",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 15,
    "foodPairing": "[]",
    "description": "♥ 소  유  주 : Ron Penner Ash (Jackson Family) ♥ 와인메이커 : Lynn Penner Ash 린 패너 애쉬 (Lynn Penner Ash)",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "윌라멧 밸리 피노 누아",
    "grapeNames": [
      "1998년 린 패너 애쉬와 그녀의 남편 론 패너 애쉬가 설립한 와이너리로 피노 누아만을 생산하기 위해 만든 부티크 와이너리 입니다. 생산하는 와인의 90% 이상이 피노 누아 포도 품종으로 비오니에와 리슬링도 경작을 하고 있습니다. 오레곤의 윌라멧 밸리 북쪽에 와이너리는 위치하고 있으며",
      "포도밭은 윌라멧 밸리 AVA 안의 세부 산지에 해당하는 7개의 다른 AVA에서 포도밭을 가지고 있습니다. 가장 시그니쳐적인 포도밭은 얌힐 칼톤 AVA에 있는 ‘쉬어 빈야드’로 프랑스 부르고뉴의 그랑크뤼에 해당하는 포도밭이라고 말할 수 있습니다."
    ]
  },
  {
    "slug": "shea-vineyard-pinot-noir",
    "nameKo": "(Shea Vineyard Pinot Noir)",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "얌힐 칼톤 AVA (Yamhill-Carlton) – Sub Region\u000b               윌라멧 밸리 AVA (Willamette Valley) / 오레곤 (Oregon)",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 15,
    "foodPairing": "[]",
    "description": "♥ 소  유  주 : Ron Penner Ash (Jackson Family) ♥ 와인메이커 : Lynn Penner Ash 린 패너 애쉬 (Lynn Penner Ash)",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "쉐이 빈야드 피노 누아",
    "grapeNames": [
      "1998년 린 패너 애쉬와 그녀의 남편 론 패너 애쉬가 설립한 와이너리로 피노 누아만을 생산하기 위해 만든 부티크 와이너리 입니다. 생산하는 와인의 90% 이상이 피노 누아 포도 품종으로 비오니에와 리슬링도 경작을 하고 있습니다. 오레곤의 윌라멧 밸리 북쪽에 와이너리는 위치하고 있으며",
      "포도밭은 윌라멧 밸리 AVA 안의 세부 산지에 해당하는 7개의 다른 AVA에서 포도밭을 가지고 있습니다. 가장 시그니쳐적인 포도밭은 얌힐 칼톤 AVA에 있는 ‘쉐이 빈야드’로 프랑스 부르고뉴의 그랑크뤼에 해당하는 포도밭이라고 말할 수 있습니다."
    ]
  },
  {
    "slug": "grand-estates-gold-limited-release",
    "nameKo": "(Grand Estates Gold , Limited  Release)",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "콜럼비아 밸리(Columbia Valley) - 워싱턴주",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 스테이크\", \"라자냐\", \"붉은 소스를 곁들인 파스타\"]",
    "description": "Columbia Crest Winery 캘리포니아와 함께 미국 와인산업의 쌍두마차 역할을 하고 있는 워싱턴주의 최대 생산자로 자리잡은 콜럼비아 크레스트는 1982년에 샤또 생 미셸 와이너리(Chateau Ste. Michelle Winery)의 리버 릿지(River Ridge)라는 이름으로 처음 시장에 출시되었습니다. 1985년에 지금과 같은 콜럼비아 크레스트 이름으로 첫 와인을 선 보인 후, 비약적 성장을 거듭해 지금은 북미 대륙 최대의 와이너리의 하나로 성장하였습니다. 미국 5대 와인 프로듀서의 하나인 생 미셸 와인 이스테이츠(Ste. Michelle Wine Estates)를 모회사로 하는 이 와이너리는 품질과 대량 생산이란 화두를 절묘히",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "그랜드 이스테이트 골드",
    "grapeNames": []
  },
  {
    "slug": "cabernet-sauvignon-reserve",
    "nameKo": "(Cabernet Sauvignon Reserve)",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "콜럼비아 밸리(Columbia Valley) - 워싱턴주",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 스테이크\", \"구운 육류\", \"양고기를 비롯한 모든 붉은 육류\"]",
    "description": "Columbia Crest Winery 캘리포니아와 함께 미국 와인산업의 쌍두마차 역할을 하고 있는 워싱턴주의 최대 생산자로 자리잡은 콜럼비아 크레스트는 1982년에 샤또 생 미셸 와이너리(Chateau Ste. Michelle Winery)의 리버 릿지(River Ridge)라는 이름으로 처음 시장에 출시되었습니다. 1985년에 지금과 같은 콜럼비아 크레스트 이름으로 첫 와인을 선 보인 후, 비약적 성장을 거듭해 지금은 북미 대륙 최대의 와이너리의 하나로 성장하였습니다. 미국 5대 와인 프로듀서의 하나인 생 미셸 와인 이스테이츠(Ste. Michelle Wine Estates)를 모회사로 하는 이 와이너리는 품질과 대량 생산이란 화두를 절묘히",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "카버네 소비뇽 리저브",
    "grapeNames": []
  },
  {
    "slug": "h3-cabernet-sauvignon",
    "nameKo": "(H3 Cabernet Sauvignon)",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "콜럼비아 밸리(Columbia Valley) - 워싱턴주",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 양념 갈비\", \"양꼬치 구이\", \"햄버거\", \"진한 소스의 바비큐\", \"스테이크\"]",
    "description": "훈제 쇠고기/오리고기, 토마토 소스 피자 & 파스타, 브뤼 치즈 Columbia Crest Winery 캘리포니아와 함께 미국 와인산업의 쌍두마차 역할을 하고 있는 워싱턴주의 최대 생산자로 자리잡은 콜럼비아 크레스트는 1982년에 샤또 생 미셸 와이너리(Chateau Ste. Michelle Winery)의 리버 릿지(River Ridge)라는 이름으로 처음 시장에 출시되었습니다. 1985년에 지금과 같은 콜럼비아 크레스트 이름으로 첫 와인을 선 보인 후, 비약적 성장을 거듭해 지금은 북미 대륙 최대의 와이너리의 하나로 성장하였습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "H3 카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "h3-merlot",
    "nameKo": "(H3 Merlot)",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "콜럼비아 밸리(Columbia Valley) - 워싱턴주",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 불고기\", \"갈비찜\", \"햄버거\", \"삼겹살\", \"닭갈비\", \"비빔밥\", \"감자탕\", \"훈제 오\"]",
    "description": "리, 양념이 강한 해산물 요리, 토마토 소스 피자 & 파스타, 훈제 Columbia Crest Winery 캘리포니아와 함께 미국 와인산업의 쌍두마차 역할을 하고 있는 워싱턴주의 최대 생산자로 자리잡은 콜럼비아 크레스트는 1982년에 샤또 생 미셸 와이너리(Chateau Ste. Michelle Winery)의 리버 릿지(River Ridge)라는 이름으로 처음 시장에 출시되었습니다. 1985년에 지금과 같은 콜럼비아 크레스트 이름으로 첫 와인을 선 보인 후, 비약적 성장을 거듭해 지금은 북미 대륙 최대의 와이너리의 하나로 성장하였습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "H3 멀롯",
    "grapeNames": []
  },
  {
    "slug": "h3-chardonnay",
    "nameKo": "(H3 Chardonnay)",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "콜럼비아 밸리(Columbia Valley) - 워싱턴주",
    "volume": 750,
    "servingTempMin": 11,
    "servingTempMax": 12,
    "foodPairing": "[\"▶ 전(부침개)\", \"간장 양념 치킨\", \"훈제 치킨\", \"삼계탕\", \"잡채\", \"스파이시한\"]",
    "description": "태국, 인도 요리, 양념이 약한 해산물 요리, 대하, 게찜, 생선 구이, 조개 구이, 훈제 치킨, 크림 소스 피자 & 파스타, 오일 소스 Columbia Crest Winery",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "H3 샤도네이",
    "grapeNames": []
  },
  {
    "slug": "grand-estates-cabernet-sauvignon",
    "nameKo": "(Grand Estates Cabernet Sauvignon)",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "콜럼비아 밸리(Columbia Valley) - 워싱턴주",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 스테이크\", \"라자냐\", \"붉은 소스를 곁들인 파스타\"]",
    "description": "시라(Syrah) 2%, 그 외(Other Varietals) 2% Columbia Crest Winery 캘리포니아와 함께 미국 와인산업의 쌍두마차 역할을 하고 있는 워싱턴주의 최대 생산자로 자리잡은 콜럼비아 크레스트는 1982년에 샤또 생 미셸 와이너리(Chateau Ste. Michelle Winery)의 리버 릿지(River Ridge)라는 이름으로 처음 시장에 출시되었습니다. 1985년에 지금과 같은 콜럼비아 크레스트 이름으로 첫 와인을 선 보인 후, 비약적 성장을 거듭해 지금은 북미 대륙 최대의 와이너리의 하나로 성장하였습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "그랜드 이스테이트 카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "grand-estates-merlot",
    "nameKo": "(Grand Estates Merlot)",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "콜럼비아 밸리(Columbia Valley) - 워싱턴주",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 석쇠에 구운 치킨 및 연어\", \"미트볼 스파게티\", \"양고기\", \"불고기\"]",
    "description": "Columbia Crest Winery 캘리포니아와 함께 미국 와인산업의 쌍두마차 역할을 하고 있는 워싱턴주의 최대 생산자로 자리잡은 콜럼비아 크레스트는 1982년에 샤또 생 미셸 와이너리(Chateau Ste. Michelle Winery)의 리버 릿지(River Ridge)라는 이름으로 처음 시장에 출시되었습니다. 1985년에 지금과 같은 콜럼비아 크레스트 이름으로 첫 와인을 선 보인 후, 비약적 성장을 거듭해 지금은 북미 대륙 최대의 와이너리의 하나로 성장하였습니다. 미국 5대 와인 프로듀서의 하나인 생 미셸 와인 이스테이츠(Ste. Michelle Wine Estates)를 모회사로 하는 이 와이너리는 품질과 대량 생산이란 화두를 절묘히",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "그랜드 이스테이트 멀롯",
    "grapeNames": []
  },
  {
    "slug": "grand-estates-chardonnay",
    "nameKo": "(Grand Estates Chardonnay)",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "콜럼비아 밸리(Columbia Valley) - 워싱턴주",
    "volume": 750,
    "servingTempMin": 11,
    "servingTempMax": 12,
    "foodPairing": "[\"▶ 레몬과 후추를 뿌려 조리한 구운 치킨\", \"클램 차우더 수프\"]",
    "description": "Columbia Crest Winery 캘리포니아와 함께 미국 와인산업의 쌍두마차 역할을 하고 있는 워싱턴주의 최대 생산자로 자리잡은 콜럼비아 크레스트는 1982년에 샤또 생 미셸 와이너리(Chateau Ste. Michelle Winery)의 리버 릿지(River Ridge)라는 이름으로 처음 시장에 출시되었습니다. 1985년에 지금과 같은 콜럼비아 크레스트 이름으로 첫 와인을 선 보인 후, 비약적 성장을 거듭해 지금은 북미 대륙 최대의 와이너리의 하나로 성장하였습니다. 미국 5대 와인 프로듀서의 하나인 생 미셸 와인 이스테이츠(Ste. Michelle Wine Estates)를 모회사로 하는 이 와이너리는 품질과 대량 생산이란 화두를 절묘히",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "그랜드 이스테이트 샤도네이",
    "grapeNames": []
  },
  {
    "slug": "two-vines-cabernet-sauvignon",
    "nameKo": "(Two Vines Cabernet Sauvignon)",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "콜럼비아 밸리(Columbia Valley) - 워싱턴주",
    "volume": 750,
    "foodPairing": "[\"▶ 스테이크\", \"라자냐\", \"붉은 소스를 곁들인 파스타\"]",
    "description": "Columbia Crest Winery 캘리포니아와 함께 미국 와인산업의 쌍두마차 역할을 하고 있는 워싱턴주의 최대 생산자로 자리잡은 콜럼비아 크레스트는 1982년에 샤또 생 미셸 와이너리(Chateau Ste. Michelle Winery)의 리버 릿지(River Ridge)라는 이름으로 처음 시장에 출시되었습니다. 1985년에 지금과 같은 콜럼비아 크레스트 이름으로 첫 와인을 선 보인 후, 비약적 성장을 거듭해 지금은 북미 대륙 최대의 와이너리의 하나로 성장하였습니다. 미국 5대 와인 프로듀서의 하나인 생 미셸 와인 이스테이츠(Ste. Michelle Wine Estates)를 모회사로 하는 이 와이너리는 품질과 대량 생산이란 화두를 절묘히",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "투바인 카버네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "two-vines-merlot",
    "nameKo": "(Two Vines Merlot)",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "콜럼비아 밸리(Columbia Valley) - 워싱턴주",
    "volume": 750,
    "foodPairing": "[\"▶ 테리야키 치킨\", \"구운 연어\", \"소시지\", \"피자\", \"토마토 소스 파스타\"]",
    "description": "Columbia Crest Winery 캘리포니아와 함께 미국 와인산업의 쌍두마차 역할을 하고 있는 워싱턴주의 최대 생산자로 자리잡은 콜럼비아 크레스트는 1982년에 샤또 생 미셸 와이너리(Chateau Ste. Michelle Winery)의 리버 릿지(River Ridge)라는 이름으로 처음 시장에 출시되었습니다. 1985년에 지금과 같은 콜럼비아 크레스트 이름으로 첫 와인을 선 보인 후, 비약적 성장을 거듭해 지금은 북미 대륙 최대의 와이너리의 하나로 성장하였습니다. 미국 5대 와인 프로듀서의 하나인 생 미셸 와인 이스테이츠(Ste. Michelle Wine Estates)를 모회사로 하는 이 와이너리는 품질과 대량 생산이란 화두를 절묘히",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "투바인 카버네 멀롯",
    "grapeNames": []
  },
  {
    "slug": "two-vines-shiraz",
    "nameKo": "(Two Vines Shiraz)",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "콜럼비아 밸리(Columbia Valley) - 워싱턴주",
    "volume": 750,
    "foodPairing": "[\"▶ 구운 육류\", \"등갈비\", \"스테이크\", \"순대\", \"곱창 볶음\"]",
    "description": "Columbia Crest Winery 캘리포니아와 함께 미국 와인산업의 쌍두마차 역할을 하고 있는 워싱턴주의 최대 생산자로 자리잡은 콜럼비아 크레스트는 1982년에 샤또 생 미셸 와이너리(Chateau Ste. Michelle Winery)의 리버 릿지(River Ridge)라는 이름으로 처음 시장에 출시되었습니다. 1985년에 지금과 같은 콜럼비아 크레스트 이름으로 첫 와인을 선 보인 후, 비약적 성장을 거듭해 지금은 북미 대륙 최대의 와이너리의 하나로 성장하였습니다. 미국 5대 와인 프로듀서의 하나인 생 미셸 와인 이스테이츠(Ste. Michelle Wine Estates)를 모회사로 하는 이 와이너리는 품질과 대량 생산이란 화두를 절묘히",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "투바인 카버네 쉬라즈",
    "grapeNames": []
  },
  {
    "slug": "two-vines-chardonnay",
    "nameKo": "(Two Vines Chardonnay)",
    "nameEn": "",
    "type": "red",
    "country": "USA",
    "regionL1": "콜럼비아 밸리(Columbia Valley) - 워싱턴주",
    "volume": 750,
    "foodPairing": "[\"▶ 구운 야채\", \"크림 소스 파스타\", \"익힌 가리비\", \"전복\"]",
    "description": "Columbia Crest Winery 캘리포니아와 함께 미국 와인산업의 쌍두마차 역할을 하고 있는 워싱턴주의 최대 생산자로 자리잡은 콜럼비아 크레스트는 1982년에 샤또 생 미셸 와이너리(Chateau Ste. Michelle Winery)의 리버 릿지(River Ridge)라는 이름으로 처음 시장에 출시되었습니다. 1985년에 지금과 같은 콜럼비아 크레스트 이름으로 첫 와인을 선 보인 후, 비약적 성장을 거듭해 지금은 북미 대륙 최대의 와이너리의 하나로 성장하였습니다. 미국 5대 와인 프로듀서의 하나인 생 미셸 와인 이스테이츠(Ste. Michelle Wine Estates)를 모회사로 하는 이 와이너리는 품질과 대량 생산이란 화두를 절묘히",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "투바인 카버네 샤도네이",
    "grapeNames": []
  },
  {
    "slug": "3-priorat-bierzo-2015-decanter-man-of-the-year-2016-master-of-wine-winemakers-winemaker",
    "nameKo": "베가 시실리아, 핑구스와 함께 스페인 3대 와이너리로 꼽히는 알바로 팔라시오스는 최근 스페인에서 가장 주목받는 프리오랏(Priorat), 비에르조(Bierzo) 지역을 세계적인 와인 생산 지역으로 만든 물오른 대가로 2015년 Decanter 선정 ‘Man of the Year’, 2016년 Master of Wine 선정 ‘Winemakers’ winemaker’에 선정되며 최고의 명예를 얻었습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "스페인",
    "volume": 750,
    "foodPairing": "[]",
    "description": "샤또 페트뤼스와 나파 밸리 유수의 와이너리에서의 경험을 토대로 1980년대 후반 알바로 팔라시오스와 일군의 양조가들은 프리오랏에 건너가 불과 10년여 만에 와인 스타일과 위상을 드라마틱하게 바꾸는 데 성공, 오늘날 스페인에서 가장 빼어난 레드 와인산지로 탈바꿈시켰고 또한 비에르조 지역의 성공 가능성을 간파하고 90년대 초 그의 조카와 함께 꼬루욘(Corullon)이라는 산악마을에 밭을 매입하여 현재의 명성을 이루었습니다. 알바로 팔라시오스는 스페인의 유서 깊은 와인 생산지 리오하(Rioja), 프리오랏, 비에르조 이 세 지역에 자리하고 있는데 그들만의 개성 있는 와인 양조 방법에는 각각의 지형적, 기후적 특징이 요약되어 있고 포도 나무의 토양적 특성을 반영하며 과거로부터 전해져 온 역사를 보여줍니다. 포도밭 대부분이 수도원, 예배당, 성지 순례길 가까운 곳에 위치해 있고 실존했던 영성의 흔적, 수도원 문화 등을 통해 드러나는 종교적인 특징과 형언 할 수 없는 아름다운 풍경과 기후, 고대의 토양과 미네랄과 같은 자연적 요소들은 세 와이너리의 개성을 보여주는 중요한 요인으로 작용합니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "천재 와인메이커의 와인 ‘알바로 팔라시오스’",
    "grapeNames": []
  },
  {
    "slug": "la-vendimia",
    "nameKo": "<SKU>",
    "nameEn": "La Vendimia,",
    "type": "red",
    "country": "Spain",
    "regionL1": "스페인",
    "volume": 750,
    "foodPairing": "[]",
    "description": "스페인 동부의 프리오랏 지역은 지중해로부터 20km 떨어진 거친 산악지대로 산 높이는 1,100m에 달하고 토양이 매우 척박하고 가파른 위치에 있습니다. 1980년대 후반 알바로 팔라시오스와 일군의 양조가들은 이 지역에 건너가 불과 10년여 만에 와인 스타일과 위상을 드라마틱하게 바꾸는데 성공, 프리오랏을 오늘날 스페인에서 가장 빼어난 레드 와인산지로 탈바꿈시켰습니다. Les Terrasses, Gratallops Vi de Vila 알바로 팔라시오스는 1980년대 후반 스페인 북서부의 끝자락의 비에르조를 방문하여 이 지역의 성공 가능성을 간파하고 10년 뒤 비에르조의 꼬루욘(Corullon)이라는 산악마을에 밭을 매입했습니다. 이 지역은 부르고뉴의 꼬뜨도르나 피에몬테의 랑게 언덕에 비견되는데 해발 500~900m의 높이에 전문가용 스키 슬로프 정도의 경사로 수확을 하는데 농기계 이용이 불가능 하기 때문에 100% 사람의 손과 노새를 이용하여 작업이 이뤄지고 더불어 모든 경작은 바이오 다이나믹(Biodynamic)방식으로 행해진다고 합니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "팔라시오스 레몬도는 2,000년 이상 된 포도 재배지이고 150년 넘게 와인을 생산한 곳으로 알바로의 아버지 호세 팔라시오스가 1960년대부터 가업과 전통을 기반으로 와인 생산의 터를 잡았고 2000년대 이후 알바로가 양조 책임을 맡게 되면서 비약적으로 발전했습니다.",
    "grapeNames": []
  },
  {
    "slug": "2015-man-of-year",
    "nameKo": "2015 Man of Year",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "리오하(Rioja) – 스페인 중부",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 가볍게 요리한 붉은 육류 요리\", \"붉은 소스 파스타\", \"치즈\"]",
    "description": "2016 Winemakers’ Winemaker 40대 중반에 스페인 와인의 르네상스와 미래의 상징이 된 알바로 팔라시오스는 실력과 전략적 비전을 갖춘 인물로 프리오랏(Priorat)과 비에르조(Bierzo)와 같이 숨어 있던 뛰어난 지역을 세계 와인 지도에 올려 놓은 젊은 대가 입니다. 샤또 페트뤼스와 나파 밸리 유수의 와이너리에서 견습을 거친 개방적 사고의 소유자인 그는 아버지가 스페인 최고의 전통과 권위의 와인산지 리오하에 이룩해 둔 안정적 터전을 떠나와 그의 이름이 프리오랏과 동의어로 여겨질 만큼의 절대적 권위를 이룩하였고, 세계적 와인미디어들은 그의 와인에 매년 놀라운 점수를 부여하고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "<천재 와인메이커 “알바로 팔라시오스”>",
    "grapeNames": []
  },
  {
    "slug": "2015-man-of-year-2",
    "nameKo": "2015 Man of Year",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "리오하(Rioja) – 스페인 중부",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 가볍게 요리한 붉은 육류 요리\", \"약간 매콤하게 조리된 생선\"]",
    "description": "2016 Winemakers’ Winemaker 40대 중반에 스페인 와인의 르네상스와 미래의 상징이 된 알바로 팔라시오스는 실력과 전략적 비전을 갖춘 인물로 프리오랏(Priorat)과 비에르조(Bierzo)와 같이 숨어 있던 뛰어난 지역을 세계 와인 지도에 올려 놓은 젊은 대가 입니다. 샤또 페트뤼스와 나파 밸리 유수의 와이너리에서 견습을 거친 개방적 사고의 소유자인 그는 아버지가 스페인 최고의 전통과 권위의 와인산지 리오하에 이룩해 둔 안정적 터전을 떠나와 그의 이름이 프리오랏과 동의어로 여겨질 만큼의 절대적 권위를 이룩하였고, 세계적 와인미디어들은 그의 와인에 매년 놀라운 점수를 부여하고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "<천재 와인메이커 “알바로 팔라시오스”>",
    "grapeNames": []
  },
  {
    "slug": "2015-man-of-year-3",
    "nameKo": "2015 Man of Year",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "리오하(Rioja) – 스페인 중부",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 타르타르 스테이크\", \"소고기\", \"꿩과 칠면조 등의 조류\"]",
    "description": "2016 Winemakers’ Winemaker 40대 중반에 스페인 와인의 르네상스와 미래의 상징이 된 알바로 팔라시오스는 실력과 전략적 비전을 갖춘 인물로 프리오랏(Priorat)과 비에르조(Bierzo)와 같이 숨어 있던 뛰어난 지역을 세계 와인 지도에 올려 놓은 젊은 대가 입니다. 샤또 페트뤼스와 나파 밸리 유수의 와이너리에서 견습을 거친 개방적 사고의 소유자인 그는 아버지가 스페인 최고의 전통과 권위의 와인산지 리오하에 이룩해 둔 안정적 터전을 떠나와 그의 이름이 프리오랏과 동의어로 여겨질 만큼의 절대적 권위를 이룩하였고, 세계적 와인미디어들은 그의 와인에 매년 놀라운 점수를 부여하고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "<천재 와인메이커 “알바로 팔라시오스”>",
    "grapeNames": [
      "그리고 이렇게 재배된 가르나차 품종의 포도는 비교적 건조하고 따뜻한 리오하 바하 지역의 성격을 온전히 반영하고 있다는 평가를 받고 있습니다."
    ]
  },
  {
    "slug": "2015-man-of-year-4",
    "nameKo": "2015 Man of Year",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "프리오랏(Priorat) – 스페인 동부",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "2016 Winemakers’ Winemaker 40대 중반에 스페인 와인의 르네상스와 미래의 상징이 된 알바로 팔라시오스는 실력과 전략적 비전을 갖춘 인물로 프리오랏(Priorat)과 비에르조(Bierzo)와 같이 숨어 있던 뛰어난 지역을 세계 와인 지도에 올려 놓은 젊은 대가 입니다. 스페인 동부의 프리오랏은 지중해로부터 20km 떨어진 거친 산악지대로 산 높이는 1,100m에 달하고 토양이 척박해 10여년 전만 해도 주민 수는 점점 줄고 거칠고 알코올이 강한 매력 없는 와인이 나오던 지역이었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "<천재 와인메이커 “알바로 팔라시오스”>",
    "grapeNames": [
      "24%",
      "카버네 소비뇽(C",
      "S) 17%",
      "멀롯(Merlot) 10%",
      "기타품종 3%"
    ]
  },
  {
    "slug": "2015-man-of-year-5",
    "nameKo": "2015 Man of Year",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "프리오랏(Priorat) – 스페인 동부",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "2016 Winemakers’ Winemaker 40대 중반에 스페인 와인의 르네상스와 미래의 상징이 된 알바로 팔라시오스는 실력과 전략적 비전을 갖춘 인물로 프리오랏(Priorat)과 비에르조(Bierzo)와 같이 숨어 있던 뛰어난 지역을 세계 와인 지도에 올려 놓은 젊은 대가 입니다. 스페인 동부의 프리오랏은 지중해로부터 20km 떨어진 거친 산악지대로 산 높이는 1,100m에 달하고 토양이 척박해 10여년 전만 해도 주민 수는 점점 줄고 거칠고 알코올이 강한 매력 없는 와인이 나오던 지역이었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "<천재 와인메이커 “알바로 팔라시오스”>",
    "grapeNames": [
      "이들은 오래된 포도밭들을 재건하고 새로이 밭을 조성하면서 중요하게 취급되지 않았던 가르나차(=그레나슈)와 까리녜나(=카리냥) 품종을 주로 심었는데",
      "거의 흑색에 가까운 점판암(粘板岩)에서 재배된 저소출의 가르나차는 특히 빼어난 성과를 보였습니다. 그리고 카버네 소비뇽",
      "시라",
      "멀롯 등 국제종을 도입하고",
      "어린 나무들이 험한 산에서 고사하지 않게 방울 관개(Drip Irrigation) 방식으로 물을 주었습니다. 프리오랏의 비약적인 성공으로 초기 10개 정도에 불과한 와이너리의 숫자는 60개 이상으로 늘어난 지금 알바로 팔라시오스의 탁월성은 타 생산자들과의 보다 많은 대비에 의해 오히려 더 극명해 졌습니다."
    ]
  },
  {
    "slug": "2015-man-of-year-6",
    "nameKo": "2015 Man of Year",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "프리오랏(Priorat) – 스페인 동부",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "2016 Winemakers’ Winemaker 40대 중반에 스페인 와인의 르네상스와 미래의 상징이 된 알바로 팔라시오스는 실력과 전략적 비전을 갖춘 인물로 프리오랏(Priorat)과 비에르조(Bierzo)와 같이 숨어 있던 뛰어난 지역을 세계 와인 지도에 올려 놓은 젊은 대가 입니다. 스페인 동부의 프리오랏은 지중해로부터 20km 떨어진 거친 산악지대로 산 높이는 1,100m에 달하고 토양이 척박해 10여년 전만 해도 주민 수는 점점 줄고 거칠고 알코올이 강한 매력 없는 와인이 나오던 지역이었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "<천재 와인메이커 “알바로 팔라시오스”>",
    "grapeNames": [
      "이들은 오래된 포도밭들을 재건하고 새로이 밭을 조성하면서 중요하게 취급되지 않았던 가르나차(=그레나슈)와 까리녜나(=카리냥) 품종을 주로 심었는데",
      "거의 흑색에 가까운 점판암(粘板岩)에서 재배된 저소출의 가르나차는 특히 빼어난 성과를 보였습니다. 그리고 카버네 소비뇽",
      "시라",
      "멀롯 등 국제종을 도입하고",
      "어린 나무들이 험한 산에서 고사하지 않게 방울 관개(Drip Irrigation) 방식으로 물을 주었습니다. 프리오랏의 비약적인 성공으로 초기 10개 정도에 불과한 와이너리의 숫자는 60개 이상으로 늘어난 지금 알바로 팔라시오스의 탁월성은 타 생산자들과의 보다 많은 대비에 의해 오히려 더 극명해 졌습니다."
    ]
  },
  {
    "slug": "2015-man-of-year-7",
    "nameKo": "2015 Man of Year",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "프리오랏(Priorat) – 스페인 동부",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "2016 Winemakers’ Winemaker 40대 중반에 스페인 와인의 르네상스와 미래의 상징이 된 알바로 팔라시오스는 실력과 전략적 비전을 갖춘 인물로 프리오랏(Priorat)과 비에르조(Bierzo)와 같이 숨어 있던 뛰어난 지역을 세계 와인 지도에 올려 놓은 젊은 대가 입니다. 스페인 동부의 프리오랏은 지중해로부터 20km 떨어진 거친 산악지대로 산 높이는 1,100m에 달하고 토양이 척박해 10여년 전만 해도 주민 수는 점점 줄고 거칠고 알코올이 강한 매력 없는 와인이 나오던 지역이었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "<천재 와인메이커 “알바로 팔라시오스”>",
    "grapeNames": [
      "이들은 오래된 포도밭들을 재건하고 새로이 밭을 조성하면서 중요하게 취급되지 않았던 가르나차(=그레나슈)와 까리녜나(=카리냥) 품종을 주로 심었는데",
      "거의 흑색에 가까운 점판암(粘板岩)에서 재배된 저소출의 가르나차는 특히 빼어난 성과를 보였습니다. 그리고 카버네 소비뇽",
      "시라",
      "멀롯 등 국제종을 도입하고",
      "어린 나무들이 험한 산에서 고사하지 않게 방울 관개(Drip Irrigation) 방식으로 물을 주었습니다. 프리오랏의 비약적인 성공으로 초기 10개 정도에 불과한 와이너리의 숫자는 60개 이상으로 늘어난 지금 알바로 팔라시오스의 탁월성은 타 생산자들과의 보다 많은 대비에 의해 오히려 더 극명해 졌습니다."
    ]
  },
  {
    "slug": "2015-man-of-year-8",
    "nameKo": "2015 Man of Year",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "프리오랏(Priorat) – 스페인 동부",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "2016 Winemakers’ Winemaker 40대 중반에 스페인 와인의 르네상스와 미래의 상징이 된 알바로 팔라시오스는 실력과 전략적 비전을 갖춘 인물로 프리오랏(Priorat)과 비에르조(Bierzo)와 같이 숨어 있던 뛰어난 지역을 세계 와인 지도에 올려 놓은 젊은 대가 입니다. 스페인 동부의 프리오랏은 지중해로부터 20km 떨어진 거친 산악지대로 산 높이는 1,100m에 달하고 토양이 척박해 10여년 전만 해도 주민 수는 점점 줄고 거칠고 알코올이 강한 매력 없는 와인이 나오던 지역이었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "<천재 와인메이커 “알바로 팔라시오스”>",
    "grapeNames": [
      "이들은 오래된 포도밭들을 재건하고 새로이 밭을 조성하면서 중요하게 취급되지 않았던 가르나차(=그레나슈)와 까리녜나(=카리냥) 품종을 주로 심었는데",
      "거의 흑색에 가까운 점판암(粘板岩)에서 재배된 저소출의 가르나차는 특히 빼어난 성과를 보였습니다. 그리고 카버네 소비뇽",
      "시라",
      "멀롯 등 국제종을 도입하고",
      "어린 나무들이 험한 산에서 고사하지 않게 방울 관개(Drip Irrigation) 방식으로 물을 주었습니다. 프리오랏의 비약적인 성공으로 초기 10개 정도에 불과한 와이너리의 숫자는 60개 이상으로 늘어난 지금 알바로 팔라시오스의 탁월성은 타 생산자들과의 보다 많은 대비에 의해 오히려 더 극명해 졌습니다."
    ]
  },
  {
    "slug": "2015-man-of-year-9",
    "nameKo": "2015 Man of Year",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "프리오랏(Priorat) – 스페인 동부",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "2016 Winemakers’ Winemaker 40대 중반에 스페인 와인의 르네상스와 미래의 상징이 된 알바로 팔라시오스는 실력과 전략적 비전을 갖춘 인물로 프리오랏(Priorat)과 비에르조(Bierzo)와 같이 숨어 있던 뛰어난 지역을 세계 와인 지도에 올려 놓은 젊은 대가 입니다. 스페인 동부의 프리오랏은 지중해로부터 20km 떨어진 거친 산악지대로 산 높이는 1,100m에 달하고 토양이 척박해 10여년 전만 해도 주민 수는 점점 줄고 거칠고 알코올이 강한 매력 없는 와인이 나오던 지역이었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "<천재 와인메이커 “알바로 팔라시오스”>",
    "grapeNames": [
      "2 ha에 불과한 프리오랏 최고의 포도밭으로 수령 75년이 넘은 가르나차 품종이 쎙쏘 등과 심어져 있습니다. ’93년 빈티지로 세계 와인계 정상에 데뷔한 스페인의 컬트 와인으로 베가 시실리아 우니코",
      "핑구스와 함께 가장 구하기 힘든 스페인 와인입니다."
    ]
  },
  {
    "slug": "2015-man-of-year-10",
    "nameKo": "2015 Man of Year",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "비에르조(Bierzo) – 스페인 서부",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 17,
    "foodPairing": "[]",
    "description": "2016 Winemakers’ Winemaker 40대 중반에 스페인 와인의 르네상스와 미래의 상징이 된 알바로 팔라시오스는 실력과 전략적 비전을 갖춘 인물로 프리오랏(Priorat)과 비에르조(Bierzo)와 같이 숨어 있던 뛰어난 지역을 세계 와인 지도에 올려 놓은 젊은 대가 입니다. 그는 ’80년대 후반 스페인 북서부의 끝자락의 비에르조를 방문하여 이 지역의 성공가능성을 간파하고 10년 뒤 보르도에서 양조학을 공부하고 돌아온 그의 조카 리카르도 팔라시오스(Ricardo Palacios)와 함께 비에르조의 꼬루욘(Corullon)이라는 산악마을에 밭을 매입하였습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "<천재 와인메이커 “알바로 팔라시오스”>",
    "grapeNames": [
      "수령 60 ~ 100년의 멘시아 품종으로 양조된 와인으로",
      "긴 수령을 거치며 나무 뿌리가 땅 속 깊이 미네랄이 풍부한 편암층까지 뻗어간 덕에 풍부한 광물질의 느낌과 좋은 산도를 지닙니다."
    ]
  },
  {
    "slug": "2015-man-of-year-11",
    "nameKo": "2015 Man of Year",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "비에르조(Bierzo) – 스페인 서부",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 17,
    "foodPairing": "[]",
    "description": "2016 Winemakers’ Winemaker 40대 중반에 스페인 와인의 르네상스와 미래의 상징이 된 알바로 팔라시오스는 실력과 전략적 비전을 갖춘 인물로 프리오랏(Priorat)과 비에르조(Bierzo)와 같이 숨어 있던 뛰어난 지역을 세계 와인 지도에 올려 놓은 젊은 대가 입니다. 그는 ’80년대 후반 스페인 북서부의 끝자락의 비에르조를 방문하여 이 지역의 성공가능성을 간파하고 10년 뒤 보르도에서 양조학을 공부하고 돌아온 그의 조카 리카르도 팔라시오스(Ricardo Palacios)와 함께 비에르조의 꼬루욘(Corullon)이라는 산악마을에 밭을 매입하였습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "<천재 와인메이커 “알바로 팔라시오스”>",
    "grapeNames": [
      "수령 60 ~ 100년의 멘시아 품종으로 양조된 와인으로",
      "긴 수령을 거치며 나무 뿌리가 땅 속 깊이 미네랄이 풍부한 편암층까지 뻗어간 덕에 풍부한 광물질의 느낌과 좋은 산도를 지닙니다. 싱글 빈야드의 포도로만 재배되어 여운이 깊고 장기간의 숙성 잠재력이 있는 와인입니다."
    ]
  },
  {
    "slug": "2015-man-of-year-12",
    "nameKo": "2015 Man of Year",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "비에르조(Bierzo) – 스페인 서부",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 17,
    "foodPairing": "[]",
    "description": "2016 Winemakers’ Winemaker 40대 중반에 스페인 와인의 르네상스와 미래의 상징이 된 알바로 팔라시오스는 실력과 전략적 비전을 갖춘 인물로 프리오랏(Priorat)과 비에르조(Bierzo)와 같이 숨어 있던 뛰어난 지역을 세계 와인 지도에 올려 놓은 젊은 대가 입니다. 그는 ’80년대 후반 스페인 북서부의 끝자락의 비에르조를 방문하여 이 지역의 성공가능성을 간파하고 10년 뒤 보르도에서 양조학을 공부하고 돌아온 그의 조카 리카르도 팔라시오스(Ricardo Palacios)와 함께 비에르조의 꼬루욘(Corullon)이라는 산악마을에 밭을 매입하였습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "<천재 와인메이커 “알바로 팔라시오스”>",
    "grapeNames": [
      "수령 60 ~ 100년의 멘시아 품종으로 양조된 와인으로",
      "긴 수령을 거치며 나무 뿌리가 땅 속 깊이 미네랄이 풍부한 편암층까지 뻗어간 덕에 풍부한 광물질의 느낌과 좋은 산도를 지닙니다. 싱글 빈야드의 포도로만 재배되어 여운이 깊고 장기간의 숙성 잠재력이 있는 와인입니다."
    ]
  },
  {
    "slug": "2015-man-of-year-13",
    "nameKo": "2015 Man of Year",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "비에르조(Bierzo) – 스페인 서부",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 17,
    "foodPairing": "[]",
    "description": "2016 Winemakers’ Winemaker 40대 중반에 스페인 와인의 르네상스와 미래의 상징이 된 알바로 팔라시오스는 실력과 전략적 비전을 갖춘 인물로 프리오랏(Priorat)과 비에르조(Bierzo)와 같이 숨어 있던 뛰어난 지역을 세계 와인 지도에 올려 놓은 젊은 대가 입니다. 그는 ’80년대 후반 스페인 북서부의 끝자락의 비에르조를 방문하여 이 지역의 성공가능성을 간파하고 10년 뒤 보르도에서 양조학을 공부하고 돌아온 그의 조카 리카르도 팔라시오스(Ricardo Palacios)와 함께 비에르조의 꼬루욘(Corullon)이라는 산악마을에 밭을 매입하였습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "<천재 와인메이커 “알바로 팔라시오스”>",
    "grapeNames": [
      "해발고도 730m에서 60-90년된 멘시아 품종으로 만들어진 몽세르발은 더 단단하고 더 견고하며 좋은 미네랄리티가 특징입니다."
    ]
  },
  {
    "slug": "2015-man-of-year-14",
    "nameKo": "2015 Man of Year",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "비에르조(Bierzo) – 스페인 서부",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 17,
    "foodPairing": "[]",
    "description": "2016 Winemakers’ Winemaker 40대 중반에 스페인 와인의 르네상스와 미래의 상징이 된 알바로 팔라시오스는 실력과 전략적 비전을 갖춘 인물로 프리오랏(Priorat)과 비에르조(Bierzo)와 같이 숨어 있던 뛰어난 지역을 세계 와인 지도에 올려 놓은 젊은 대가 입니다. 그는 ’80년대 후반 스페인 북서부의 끝자락의 비에르조를 방문하여 이 지역의 성공가능성을 간파하고 10년 뒤 보르도에서 양조학을 공부하고 돌아온 그의 조카 리카르도 팔라시오스(Ricardo Palacios)와 함께 비에르조의 꼬루욘(Corullon)이라는 산악마을에 밭을 매입하였습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "<천재 와인메이커 “알바로 팔라시오스”>",
    "grapeNames": [
      "수령 60 ~ 100년의 멘시아 품종으로 양조된 와인으로",
      "긴 수령을 거치며 나무 뿌리가 땅 속 깊이 미네랄이 풍부한 편암층까지 뻗어간 덕에 풍부한 광물질의 느낌과 좋은 산도를 지닙니다. 싱글 빈야드의 포도로만 재배되어 여운이 깊고 장기간의 숙성 잠재력이 있는 와인입니다."
    ]
  },
  {
    "slug": "gran-meigallo",
    "nameKo": "Gran Meigallo",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "스페인",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[\"붉은 육류\", \"파스타\", \"타파스\", \"빠에야와 같은 쌀요리\"]",
    "description": "♥ 제 조 사 : Bodegas Milenium, SL ♥ 등     급 : Vino de Espana ♥ 품     종 : 가르나챠, 템프라니요(Garnacha and Tempranillo)",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "그랑 미갈로",
    "grapeNames": [
      "스페인을 대표하는 두 가지 레드 품종인 가르나챠와 템프라니요의 블랜딩을 통해 스페인의 가장 전형적인 특징을 보여 주는 와인입니다. 뜨거운 태양이 내리쬐는 황무지와 같은 고통스러운 자연 환경 속에서 더욱 깊게 뿌리를 내리며 자라온 스페인 와인의 저력과 떼루아를 잘 표현하고 있는 와인입니다."
    ]
  },
  {
    "slug": "campo-san-victorio",
    "nameKo": "Campo San Victorio",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "스페인",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[\"붉은 육류\", \"파스타\", \"타파스\", \"빠에야와 같은 쌀요리\"]",
    "description": "♥ 제 조 사 : Bodegas Milenium, SL ♥ 등     급 : Vino de Espana ♥ 품     종 : 가르나챠, 템프라니요(Garnacha and Tempranillo)",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "깜포 산 빅토리오",
    "grapeNames": [
      "스페인을 대표하는 두 가지 레드 품종인 가르나챠와 템프라니요의 블랜딩을 통해 스페인의 가장 전형적인 특징을 보여 주는 와인입니다. 뜨거운 태양이 내리쬐는 황무지와 같은 고통스러운 자연 환경 속에서 더욱 깊게 뿌리를 내리며 자라온 스페인 와인의 저력과 떼루아를 잘 표현하고 있는 와인입니다."
    ]
  },
  {
    "slug": "top-15-top-100",
    "nameKo": "비센테 간디아 와이너리는 현재 발렌시아 지방에서 가장 큰 와이너리이며 더불어 Top 15 스페니쉬 와이너리, Top 100 유럽 와이너리로 선정 되었습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "스페인",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 17,
    "foodPairing": "[]",
    "description": "와이너리의 철학은 그 떼루아에 맞는 개성을 가진 와인을 만드는 것으로 이러한 이유로 발렌시아의 다른 두 지역에 각각 와이너리를 설립하고 그 지역의 개성이 담긴 와인을 생산하고 있습니다. 쁘띠베르도(Petit Verdot) 20% Con un Par Monastrell",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "비센테 간디아(Vicente Gandia) 는 1885년 스페인 발렌시아 지방에 설립된 와이너리로 올해로 131년을 맞이하는 역사와 전통의 와인기업 입니다.  비센테 간디아는 긴 전통과 함께 혁신을 추구하는 와이너리로 늘 품질향상, 와인문화 선도와 사회복지 실현에도 깊은 관심을 가지고 있습니다.",
    "grapeNames": [
      "모나스트렐(Monastrell) 80%"
    ]
  },
  {
    "slug": "top-15-top-100-2",
    "nameKo": "비센테 간디아 와이너리는 현재 발렌시아 지방에서 가장 큰 와이너리이며 더불어 Top 15 스페니쉬 와이너리, Top 100 유럽 와이너리로 선정 되었습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "스페인",
    "volume": 750,
    "servingTempMin": 8,
    "servingTempMax": 9,
    "foodPairing": "[]",
    "description": "와이너리의 철학은 그 떼루아에 맞는 개성을 가진 와인을 만드는 것으로 이러한 이유로 발렌시아의 다른 두 지역에 각각 와이너리를 설립하고 그 지역의 개성이 담긴 와인을 생산하고 있습니다. 스페인의 떠오르는 화이트 와인 산지인 리아스 바이사스에서 생산된 알바리뇨로 만든 ‘콘운파 알바리뇨’는 볏짚 같은 노란 빛을 띠고 있습니다. 귤, 오렌지 꽃, 신선한 페스츄리, 배, 백도의 아로마가 가득하며 입에서는 배, 멜론 그리고 감귤류의 맛이 느껴집니다. 해산물, 가금류, 리조또, 신선한 치즈와 잘 어울립니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "비센테 간디아(Vicente Gandia) 는 1885년 스페인 발렌시아 지방에 설립된 와이너리로 올해로 131년을 맞이하는 역사와 전통의 와인기업 입니다.  비센테 간디아는 긴 전통과 함께 혁신을 추구하는 와이너리로 늘 품질향상, 와인문화 선도와 사회복지 실현에도 깊은 관심을 가지고 있습니다.",
    "grapeNames": [
      "알바리뇨 100%"
    ]
  },
  {
    "slug": "la-val-albarino",
    "nameKo": "La Val Albarino",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "리아스 바이사스(RIAX BAIXAS) – 스페인(SPAIN)",
    "volume": 750,
    "foodPairing": "[]",
    "description": "라 발은 리아스 바이사스 내 서로 다른 떼루아를 지닌 3개의 핵심 포도밭을 보유하고 있습니다. 아란 테이(ARANTEI)와 포르토(PORTO) 밭들은 자갈 풍부한 충적토 토양의 미네랄과 복합성이 특징이며, 타보에사(TABOEXA) 밭은 화강암 토양의 강한 산도감이 특징입니다. 각 밭은 고도, 토양, 기후 등에서 독특한 개성을 지니며, 이들을 조합하여 라 발만의 정밀하고 균형 잡힌 알바리뇨 스타일을 완성합니다. 현 수석 와인 메이커인 호세 마리아 우레타(Jose Maria Ureta)는 떠오르는 차세대 양조가로 평가받고 있으며, 그는 와인의 본질을 해치지 않는 정밀함과 섬세함, 그리고 전통 양조 방식의 재해석을 통해 라 발의 스타일을 현대적으로 발전시키고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "라 발 알바리뇨",
    "grapeNames": [
      "라 발은 1985년 설립된 리아스 바이사스 지역의 역사적인 와이너리로",
      "1988년 해당 D.O. 설립을 주도한 창립 멤버 중 하나입니다. 설립 초기부터 알바리뇨 품종의 고유한 개성과 품질을 가장 먼저 인식하고",
      "이를 바탕으로 품종의 품질과 개성을 세계 시장에 널리 알리는 데 큰 역할을 해왔습니다. 라 발의 가장 큰 특징은 모든 와인을 100% 와이너리 소유 밭에서 수확한 포도만을 사용한다는 점입니다. 리아스 바이사스 지역의 대부분 와이너리들이 외부 포도를 구입해 사용하는 반면",
      "라 발은 알바리뇨 본연의 순수한 특성과 일관된 스타일 유지를 위해 철저히 자소유 포도 재배를 고집하고 있습니다."
    ]
  },
  {
    "slug": "la-val-finca-arantei-albarino",
    "nameKo": "La Val Finca Arantei Albarino",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "리아스 바이사스(RIAX BAIXAS) – 스페인(SPAIN)",
    "volume": 750,
    "foodPairing": "[]",
    "description": "라 발은 리아스 바이사스 내 서로 다른 떼루아를 지닌 3개의 핵심 포도밭을 보유하고 있습니다. 아란 테이(ARANTEI)와 포르토(PORTO) 밭들은 자갈 풍부한 충적토 토양의 미네랄과 복합성이 특징이며, 타보에사(TABOEXA) 밭은 화강암 토양의 강한 산도감이 특징입니다. 각 밭은 고도, 토양, 기후 등에서 독특한 개성을 지니며, 이들을 조합하여 라 발만의 정밀하고 균형 잡힌 알바리뇨 스타일을 완성합니다. 현 수석 와인 메이커인 호세 마리아 우레타(Jose Maria Ureta)는 떠오르는 차세대 양조가로 평가받고 있으며, 그는 와인의 본질을 해치지 않는 정밀함과 섬세함, 그리고 전통 양조 방식의 재해석을 통해 라 발의 스타일을 현대적으로 발전시키고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "라 발 핀카 아란테이 알바리뇨",
    "grapeNames": [
      "라 발은 1985년 설립된 리아스 바이사스 지역의 역사적인 와이너리로",
      "1988년 해당 D.O. 설립을 주도한 창립 멤버 중 하나입니다. 설립 초기부터 알바리뇨 품종의 고유한 개성과 품질을 가장 먼저 인식하고",
      "이를 바탕으로 품종의 품질과 개성을 세계 시장에 널리 알리는 데 큰 역할을 해왔습니다. 라 발의 가장 큰 특징은 모든 와인을 100% 와이너리 소유 밭에서 수확한 포도만을 사용한다는 점입니다. 리아스 바이사스 지역의 대부분 와이너리들이 외부 포도를 구입해 사용하는 반면",
      "라 발은 알바리뇨 본연의 순수한 특성과 일관된 스타일 유지를 위해 철저히 자소유 포도 재배를 고집하고 있습니다."
    ]
  },
  {
    "slug": "marques-de-toledo-gran-reserva",
    "nameKo": "Marques de Toledo Gran Reserva",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "D.O. La Mancha – 스페인 (Spain)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 양념을 하지 않은 소고기 및 돼지고기 요리\", \"하몽 등\"]",
    "description": "빈야드에서 포도를 수확한 뒤 24개월 동안 미국(80%)과 프랑스(20%) 오크통에서 숙성을 진행합니다. 진한 붉은 체리 색을 가지고 있는 이 와인은 향신료의 향과 숙성에서 오는 오크의 향이 함께 복합적으로 느껴집니다. 입안에서는 적당한 산도가 와인의 향과 함께 잘 조화되어 느껴집니다. 이 와인과 음식을 함께 드신다면 오랫동안 입안에서 우아함을 느낄 수 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "마르께스 데 톨레도 그랑 레세르바",
    "grapeNames": []
  },
  {
    "slug": "marques-de-toledo-reserva",
    "nameKo": "Marques de Toledo Reserva",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "D.O. La Mancha – 스페인 (Spain)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 소불고기\", \"돼지 주물럭\", \"고기 스튜 등\"]",
    "description": "빈야드에서 포도를 수확한 뒤 18개월 동안 미국(70%)과 프랑스(30%) 오크통에서 숙성을 진행합니다. 루비색을 가지고 있는 이 와인은 잘 익은 검은 과일의 향과 가죽, 향신료, 오크의 향이 복합적으로 느껴집니다. 입안에서는 산도와 탄닌으로 인해 와인이 좀더 풍부하게 느껴집니다. 길게 느껴지는 여운은 고기 요리를 먹는 자리를 좀더 아름답게 만들어줍니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "마르께스 데 톨레도 레세르바",
    "grapeNames": []
  },
  {
    "slug": "marques-de-toledo-crianza",
    "nameKo": "Marques de Toledo Crianza",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "D.O. La Mancha – 스페인 (Spain)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 버섯 요리\", \"BBQ 요리(소고기\", \"돼지)\", \"빠에야 등\"]",
    "description": "빈야드에서 포도를 수확한 뒤 미국(70%)과 프랑스(30%) 오크통에서 9개월 동안 숙성을 진행합니다. 진한 붉은 체리색을 가지고 있는 이 와인은 잘 익은 과일과 초콜릿, 담뱃잎의 향이 함께 잘 어울려져 느껴집니다. 와인이 가진 특유의 구조감으로 인해 입안에서 음식과 잘 어울리며 향신료의 향과 함께 균형 잡힌 산도로 마무리를 느낄 수 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "마르께스 데 톨레도 크리안자",
    "grapeNames": []
  },
  {
    "slug": "marques-de-toledo-verdejo",
    "nameKo": "Marques de Toledo Verdejo",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "D.O. La Mancha – 스페인 (Spain)",
    "volume": 750,
    "servingTempMin": 8,
    "servingTempMax": 10,
    "foodPairing": "[\"▶ 닭고기 샐러드\", \"문어요리\", \"생선 회 등\"]",
    "description": "옅은 짚색을 가지고 있는 이 와인은 열대 과일에서 느낄 수 있는 강렬한 시트러스한 향을 느낄 수 있습니다. 입안에서는 시트너스 향과 산도가 좋은 균형을 이루어 느껴져 식사에 처음 드시는 와인으로 정말 잘 어울리는 와인입니다. 하지만 우아하고 부드러운 느낌이 오래 지속 되는 느낌으로 인해 음식 없이도 즐길 수 있는 와인입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "마르께스 데 톨레도 베르데호",
    "grapeNames": []
  },
  {
    "slug": "0-53-ha-280-ha",
    "nameKo": "부르고뉴처럼 생산자별 평균 재배 면적이 0.53 ha로 지극히 제한된 리오하 지방에서 마르티네즈 부한다는 총 280 ha에 달하는 대규모 포도밭을 직접 소유하며, 이 포도밭들로부터 매년 안정적으로 와인을 만들 수 있는 차별적 우월성을 누리고 있습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "라 만차 (La Mancha) - 스페인",
    "volume": 750,
    "servingTempMin": 9,
    "servingTempMax": 10,
    "foodPairing": "[\"▶ 생선회\", \"흰색 육류\", \"대부분의 치즈\", \"파스타류\"]",
    "description": "특히 이들이 리오하에 소유한 80 ha 면적의 Finca Valpiedra(핀카 발피에드라)는 보르도의 그랑 크뤼 샤또처럼 중앙의 샤또에 양조장과 셀라를 두고, 이를 포도밭이 둘러 싸고 있는 단일 포도밭 와이너리(Single Vineyard Estate)로 지어진 유일한 리오하 와이너리로 모더니즘과 품질 혁명의 기수로 인식되고 있습니다. 또한 스페인 중부 라만차 지방에도 Finca Antigua(핀카 안티구아)라는 이름의 1,000 ha 규모의 큰 포도밭을 소유해 저렴한 가격에 만나볼 수 있는 고품질의 와인을 생산하고 있으며 수확에서 와인의 출하에 이르기까지 신기술과 첨단장비를 채용하여 완벽한 위생과 꾸준한 품질을 보장해 주고 있습니다. 최근에는 죠지 부시 Sr. 前 미국 대통령이 자신의 서재에서 주최했던 저녁 만찬에서 핀카 발피에드라 레세르바 1997을 선보여 귀빈들의 격찬 속에 만족스럽게 행사를 끝마친 후 이례적인 감사 서한을 마르티네즈 부한다 패밀리에 보낸 바 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "전통이 살아있는 고품질의 현대적 와인을 생산한다는 사명으로 5대째 꾸준한 혁신을 통해 이어나가고 있는 이 패밀리 와이너리는 스페인 와인 모더니즘의 성공 사례로 맹위를 떨치고 있습니다.",
    "grapeNames": []
  },
  {
    "slug": "0-53-ha-280-ha-2",
    "nameKo": "부르고뉴처럼 생산자별 평균 재배 면적이 0.53 ha로 지극히 제한된 리오하 지방에서 마르티네즈 부한다는 총 280 ha에 달하는 대규모 포도밭을 직접 소유하며, 이 포도밭들로부터 매년 안정적으로 와인을 만들 수 있는 차별적 우월성을 누리고 있습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "라 만차 (La Mancha) - 스페인",
    "volume": 750,
    "servingTempMin": 15,
    "servingTempMax": 17,
    "foodPairing": "[\"▶ 가볍게 조리한 붉은 육류\", \"흰색 육류\", \"볶음밥\", \"순한 치즈\"]",
    "description": "특히 이들이 리오하에 소유한 80 ha 면적의 Finca Valpiedra(핀카 발피에드라)는 보르도의 그랑 크뤼 샤또처럼 중앙의 샤또에 양조장과 셀라를 두고, 이를 포도밭이 둘러 싸고 있는 단일 포도밭 와이너리(Single Vineyard Estate)로 지어진 유일한 리오하 와이너리로 모더니즘과 품질 혁명의 기수로 인식되고 있습니다. 또한 스페인 중부 라만차 지방에도 Finca Antigua(핀카 안티구아)라는 이름의 1,000 ha 규모의 큰 포도밭을 소유해 저렴한 가격에 만나볼 수 있는 고품질의 와인을 생산하고 있으며 수확에서 와인의 출하에 이르기까지 신기술과 첨단장비를 채용하여 완벽한 위생과 꾸준한 품질을 보장해 주고 있습니다. 최근에는 죠지 부시 Sr. 前 미국 대통령이 자신의 서재에서 주최했던 저녁 만찬에서 핀카 발피에드라 레세르바 1997을 선보여 귀빈들의 격찬 속에 만족스럽게 행사를 끝마친 후 이례적인 감사 서한을 마르티네즈 부한다 패밀리에 보낸 바 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "전통이 살아있는 고품질의 현대적 와인을 생산한다는 사명으로 5대째 꾸준한 혁신을 통해 이어나가고 있는 이 패밀리 와이너리는 스페인 와인 모더니즘의 성공 사례로 맹위를 떨치고 있습니다.",
    "grapeNames": []
  },
  {
    "slug": "0-53-ha-280-ha-3",
    "nameKo": "부르고뉴처럼 생산자별 평균 재배 면적이 0.53 ha로 지극히 제한된 리오하 지방에서 마르티네즈 부한다는 총 280 ha에 달하는 대규모 포도밭을 직접 소유하며, 이 포도밭들로부터 매년 안정적으로 와인을 만들 수 있는 차별적 우월성을 누리고 있습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "라 만차 (La Mancha) - 스페인",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 17,
    "foodPairing": "[\"▶ 닭고기\", \"돼지고기 등의 육류 요리\", \"생선 조림\", \"숙성 치즈\"]",
    "description": "특히 이들이 리오하에 소유한 80 ha 면적의 Finca Valpiedra(핀카 발피에드라)는 보르도의 그랑 크뤼 샤또처럼 중앙의 샤또에 양조장과 셀라를 두고, 이를 포도밭이 둘러 싸고 있는 단일 포도밭 와이너리(Single Vineyard Estate)로 지어진 유일한 리오하 와이너리로 모더니즘과 품질 혁명의 기수로 인식되고 있습니다. 또한 스페인 중부 라만차 지방에도 Finca Antigua(핀카 안티구아)라는 이름의 1,000 ha 규모의 큰 포도밭을 소유해 저렴한 가격에 만나볼 수 있는 고품질의 와인을 생산하고 있으며 수확에서 와인의 출하에 이르기까지 신기술과 첨단장비를 채용하여 완벽한 위생과 꾸준한 품질을 보장해 주고 있습니다. 최근에는 죠지 부시 Sr. 前 미국 대통령이 자신의 서재에서 주최했던 저녁 만찬에서 핀카 발피에드라 레세르바 1997을 선보여 귀빈들의 격찬 속에 만족스럽게 행사를 끝마친 후 이례적인 감사 서한을 마르티네즈 부한다 패밀리에 보낸 바 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "전통이 살아있는 고품질의 현대적 와인을 생산한다는 사명으로 5대째 꾸준한 혁신을 통해 이어나가고 있는 이 패밀리 와이너리는 스페인 와인 모더니즘의 성공 사례로 맹위를 떨치고 있습니다.",
    "grapeNames": []
  },
  {
    "slug": "0-53-ha-280-ha-4",
    "nameKo": "부르고뉴처럼 생산자별 평균 재배 면적이 0.53 ha로 지극히 제한된 리오하 지방에서 마르티네즈 부한다는 총 280 ha에 달하는 대규모 포도밭을 직접 소유하며, 이 포도밭들로부터 매년 안정적으로 와인을 만들 수 있는 차별적 우월성을 누리고 있습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "리오하 (Rioja) - 스페인",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 붉은 육류\", \"가금류\", \"스튜\", \"구운 생선(연어\", \"농어)\", \"치즈\"]",
    "description": "특히 이들이 리오하에 소유한 80 ha 면적의 Finca Valpiedra(핀카 발피에드라)는 보르도의 그랑 크뤼 샤또처럼 중앙의 샤또에 양조장과 셀라를 두고, 이를 포도밭이 둘러 싸고 있는 단일 포도밭 와이너리(Single Vineyard Estate)로 지어진 유일한 리오하 와이너리로 모더니즘과 품질 혁명의 기수로 인식되고 있습니다. 또한 스페인 중부 라만차 지방에도 Finca Antigua(핀카 안티구아)라는 이름의 1,000 ha 규모의 큰 포도밭을 소유해 저렴한 가격에 만나볼 수 있는 고품질의 와인을 생산하고 있으며 수확에서 와인의 출하에 이르기까지 신기술과 첨단장비를 채용하여 완벽한 위생과 꾸준한 품질을 보장해 주고 있습니다. 최근에는 죠지 부시 Sr. 前 미국 대통령이 자신의 서재에서 주최했던 저녁 만찬에서 핀카 발피에드라 레세르바 1997을 선보여 귀빈들의 격찬 속에 만족스럽게 행사를 끝마친 후 이례적인 감사 서한을 마르티네즈 부한다 패밀리에 보낸 바 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "전통이 살아있는 고품질의 현대적 와인을 생산한다는 사명으로 5대째 꾸준한 혁신을 통해 이어나가고 있는 이 패밀리 와이너리는 스페인 와인 모더니즘의 성공 사례로 맹위를 떨치고 있습니다.",
    "grapeNames": []
  },
  {
    "slug": "0-53-ha-280-ha-5",
    "nameKo": "부르고뉴처럼 생산자별 평균 재배 면적이 0.53 ha로 지극히 제한된 리오하 지방에서 마르티네즈 부한다는 총 280 ha에 달하는 대규모 포도밭을 직접 소유하며, 이 포도밭들로부터 매년 안정적으로 와인을 만들 수 있는 차별적 우월성을 누리고 있습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "라 만차 (La Mancha) - 스페인",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 17,
    "foodPairing": "[\"▶ 양고기\", \"사슴고기\", \"멧돼지 등의 육류 요리 및 치즈류\"]",
    "description": "특히 이들이 리오하에 소유한 80 ha 면적의 Finca Valpiedra(핀카 발피에드라)는 보르도의 그랑 크뤼 샤또처럼 중앙의 샤또에 양조장과 셀라를 두고, 이를 포도밭이 둘러 싸고 있는 단일 포도밭 와이너리(Single Vineyard Estate)로 지어진 유일한 리오하 와이너리로 모더니즘과 품질 혁명의 기수로 인식되고 있습니다. 또한 스페인 중부 라만차 지방에도 Finca Antigua(핀카 안티구아)라는 이름의 1,000 ha 규모의 큰 포도밭을 소유해 저렴한 가격에 만나볼 수 있는 고품질의 와인을 생산하고 있으며 수확에서 와인의 출하에 이르기까지 신기술과 첨단장비를 채용하여 완벽한 위생과 꾸준한 품질을 보장해 주고 있습니다. 최근에는 죠지 부시 Sr. 前 미국 대통령이 자신의 서재에서 주최했던 저녁 만찬에서 핀카 발피에드라 레세르바 1997을 선보여 귀빈들의 격찬 속에 만족스럽게 행사를 끝마친 후 이례적인 감사 서한을 마르티네즈 부한다 패밀리에 보낸 바 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "전통이 살아있는 고품질의 현대적 와인을 생산한다는 사명으로 5대째 꾸준한 혁신을 통해 이어나가고 있는 이 패밀리 와이너리는 스페인 와인 모더니즘의 성공 사례로 맹위를 떨치고 있습니다.",
    "grapeNames": []
  },
  {
    "slug": "0-53-ha-280-ha-6",
    "nameKo": "부르고뉴처럼 생산자별 평균 재배 면적이 0.53 ha로 지극히 제한된 리오하 지방에서 마르티네즈 부한다는 총 280 ha에 달하는 대규모 포도밭을 직접 소유하며, 이 포도밭들로부터 매년 안정적으로 와인을 만들 수 있는 차별적 우월성을 누리고 있습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "라 만차 (La Mancha) - 스페인",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 17,
    "foodPairing": "[\"▶ 양고기\", \"소고기\"]",
    "description": "특히 이들이 리오하에 소유한 80 ha 면적의 Finca Valpiedra(핀카 발피에드라)는 보르도의 그랑 크뤼 샤또처럼 중앙의 샤또에 양조장과 셀라를 두고, 이를 포도밭이 둘러 싸고 있는 단일 포도밭 와이너리(Single Vineyard Estate)로 지어진 유일한 리오하 와이너리로 모더니즘과 품질 혁명의 기수로 인식되고 있습니다. 또한 스페인 중부 라만차 지방에도 Finca Antigua(핀카 안티구아)라는 이름의 1,000 ha 규모의 큰 포도밭을 소유해 저렴한 가격에 만나볼 수 있는 고품질의 와인을 생산하고 있으며 수확에서 와인의 출하에 이르기까지 신기술과 첨단장비를 채용하여 완벽한 위생과 꾸준한 품질을 보장해 주고 있습니다. 최근에는 죠지 부시 Sr. 前 미국 대통령이 자신의 서재에서 주최했던 저녁 만찬에서 핀카 발피에드라 레세르바 1997을 선보여 귀빈들의 격찬 속에 만족스럽게 행사를 끝마친 후 이례적인 감사 서한을 마르티네즈 부한다 패밀리에 보낸 바 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "전통이 살아있는 고품질의 현대적 와인을 생산한다는 사명으로 5대째 꾸준한 혁신을 통해 이어나가고 있는 이 패밀리 와이너리는 스페인 와인 모더니즘의 성공 사례로 맹위를 떨치고 있습니다.",
    "grapeNames": []
  },
  {
    "slug": "0-53-ha-280-ha-7",
    "nameKo": "부르고뉴처럼 생산자별 평균 재배 면적이 0.53 ha로 지극히 제한된 리오하 지방에서 마르티네즈 부한다는 총 280 ha에 달하는 대규모 포도밭을 직접 소유하며, 이 포도밭들로부터 매년 안정적으로 와인을 만들 수 있는 차별적 우월성을 누리고 있습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "라 만차 (La Mancha) - 스페인",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 17,
    "foodPairing": "[\"▶ 비프\", \"토마토 파스타\", \"송아지 고기에 잘 어울리는 와인\"]",
    "description": "특히 이들이 리오하에 소유한 80 ha 면적의 Finca Valpiedra(핀카 발피에드라)는 보르도의 그랑 크뤼 샤또처럼 중앙의 샤또에 양조장과 셀라를 두고, 이를 포도밭이 둘러 싸고 있는 단일 포도밭 와이너리(Single Vineyard Estate)로 지어진 유일한 리오하 와이너리로 모더니즘과 품질 혁명의 기수로 인식되고 있습니다. 또한 스페인 중부 라만차 지방에도 Finca Antigua(핀카 안티구아)라는 이름의 1,000 ha 규모의 큰 포도밭을 소유해 저렴한 가격에 만나볼 수 있는 고품질의 와인을 생산하고 있으며 수확에서 와인의 출하에 이르기까지 신기술과 첨단장비를 채용하여 완벽한 위생과 꾸준한 품질을 보장해 주고 있습니다. 최근에는 죠지 부시 Sr. 前 미국 대통령이 자신의 서재에서 주최했던 저녁 만찬에서 핀카 발피에드라 레세르바 1997을 선보여 귀빈들의 격찬 속에 만족스럽게 행사를 끝마친 후 이례적인 감사 서한을 마르티네즈 부한다 패밀리에 보낸 바 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "전통이 살아있는 고품질의 현대적 와인을 생산한다는 사명으로 5대째 꾸준한 혁신을 통해 이어나가고 있는 이 패밀리 와이너리는 스페인 와인 모더니즘의 성공 사례로 맹위를 떨치고 있습니다.",
    "grapeNames": []
  },
  {
    "slug": "verdejo",
    "nameKo": "Verdejo",
    "nameEn": "",
    "type": "white",
    "country": "Spain",
    "regionL1": "루에다 (Rueda) D.O., 스페인",
    "volume": 750,
    "servingTempMin": 6,
    "servingTempMax": 10,
    "foodPairing": "[]",
    "description": "옅은 노란색, 녹색 테두리를 띱니다. 레몬, 라임, 흰 꽃다발 그리고 송진 향이 나며, 입안에서는 미네랄의 존재감이 분명합니다. 드라이하며, 산도와 풍미가 적절한 밸런스를 이루는 와인입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "베르데호",
    "grapeNames": []
  },
  {
    "slug": "wine-10",
    "nameKo": "구아바, 패션후르츠, 키위를 비롯한 열대과일의 향과 복숭아 향이 두드러집니다. 신선한 풍미와 산도 그리고 당도가 어우러져 입안에서 조화로운 밸런스를 만들며, 부드러우며 긴 여운을 줍니다.",
    "nameEn": "",
    "type": "white",
    "country": "Spain",
    "regionL1": "루에다 (Rueda) D.O., 스페인",
    "volume": 750,
    "servingTempMin": 6,
    "servingTempMax": 10,
    "foodPairing": "[]",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "자연효모로 발효가 진행되며, 잔여당분이 약 80g/L 남았을 때 온도 조절을 통해 발효를 중단합니다.",
    "grapeNames": []
  },
  {
    "slug": "wine-11",
    "nameKo": "노란빛을 띠며, 꽃, 젖은 땅의 아로마가 느껴집니다. 입안에서는 풍성한 꽃과 빵 풍미가 긴 여운으로 남습니다.",
    "nameEn": "",
    "type": "white",
    "country": "Spain",
    "regionL1": "루에다 (Rueda) D.O., 스페인",
    "volume": 750,
    "servingTempMin": 6,
    "servingTempMax": 10,
    "foodPairing": "[]",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "스테인리스 탱크 발효 및 자연적 젖산발효를 거치는 이 와인은 3개월 동안 앙금과의 숙성 기간을 거쳐 더욱 진한 풍미를 지니게 됩니다.",
    "grapeNames": []
  },
  {
    "slug": "10mg-l",
    "nameKo": "이산화황 함유량 : 10mg/L",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "토로 (Toro) D.O., 스페인",
    "volume": 750,
    "foodPairing": "[]",
    "description": "Clandestino Tempranillo",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "제비꽃과 같은 보랏빛을 띠며, 인텐스한 체리와 블루베리향이 뚜렷합니다. 복합미를 더하는 흑후추의 풍미 그리고 흙의 존재감도 느껴집니다. 입안에서는 부드러운 타닌과 단단하면서 신선한 과실 풍미가 긴 여운을 이끕니다.",
    "grapeNames": []
  },
  {
    "slug": "wine-12",
    "nameKo": "절제된 과실미와 허브향을 느낄 수 있으며, 입안에서는 우아한 오크 풍미가 복합적으로 표현되어 섬세함과 독창성을 보여줍니다.",
    "nameEn": "",
    "type": "white",
    "country": "Spain",
    "regionL1": "루에다 (Rueda) D.O., 스페인",
    "volume": 750,
    "servingTempMin": 6,
    "servingTempMax": 10,
    "foodPairing": "[]",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "수령이 130년 이상 된 포도나무에서 수확된, 풍미가 집약된 포도만을 사용한 와인입니다. 오크통과 진흙탱크에서 약 11개월 가량 숙성을 진행하고, 2년 동안의 병숙성 후 출시됩니다.",
    "grapeNames": []
  },
  {
    "slug": "wine-13",
    "nameKo": "금빛을 띠며, 잘 익은 사과, 구운 사과, 커스타드와 같은 향이 있습니다. 입안을 가득 채우는 풍미가 만족스럽고 당도와 산도가 균형을 이루는 와인입니다.",
    "nameEn": "",
    "type": "white",
    "country": "Spain",
    "regionL1": "루에다 (Rueda) D.O., 스페인",
    "volume": 750,
    "servingTempMin": 6,
    "servingTempMax": 10,
    "foodPairing": "[]",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "자연 효모와 박테리아를 통해 자연적 발효와 젖산발효를 진행합니다. 산화가 이뤄지는 오크통에서 3년의 숙성을 거치고 6개월간 병에서 안정기간을 지내고 출시됩니다.",
    "grapeNames": []
  },
  {
    "slug": "wine-14",
    "nameKo": "보데가스 메나데 와이너리 전경",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "스페인",
    "volume": 750,
    "foodPairing": "[]",
    "description": "메나데를 이끄는 오너 남매 마르코, 알레한드라, 리차드 산즈 그리고 유기농 포도재배에 일조하는 당나귀 >",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "< 친환경 재료로 만든 건축물과 다양한 생물이 공존하는",
    "grapeNames": []
  },
  {
    "slug": "wine-15",
    "nameKo": "오가닉 와인은 오가닉 재배를 통해 수확한 포도를 통해 만든 와인을 뜻하며, 일반적으로 재배 과정에서 사용하는 인위적인 화학비료, 살충제, 살진균제 등을 사용하지 않는 것을 뜻합니다.",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "스페인",
    "volume": 750,
    "foodPairing": "[]",
    "description": "지역마다 국가마다 오가닉 와인 & 오가닉 재배의 기준은 다르나, 통상적으로 와인 생산 과정이 아닌 포도 재배 과정에 집중되어 있습니다. (좌측부터 EU, Australia, France, USA)",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "오가닉 와인 (A.K.A 유기농 와인)",
    "grapeNames": []
  },
  {
    "slug": "wine-16",
    "nameKo": "바이오다이나믹 와인은 흔히 바이오다이나믹 방식을 통해 생산된 와인을 지칭하는 것으로, 유기농 재배와 더불어 ‘루돌프 슈타이너’ 박사가 고안한 음력 달력에 기반한 포도 재배 방식을 따른 것입니다. 이는 천체의 흐름에 순응하는 생산 방식인데 유기농 비료를 생산할 때도 태양계의 흐름과 리듬을 따릅니다.",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "스페인",
    "volume": 750,
    "foodPairing": "[]",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바이오다이나믹 와인",
    "grapeNames": []
  },
  {
    "slug": "wine-17",
    "nameKo": "내추럴 와인은 일반적으로 유기농 그리고 바이오다이나믹 와인에서 한 단계 더 나아간 방식으로 만들어진 와인으로 유기농, 바이오다이나믹 방식으로 재배한 포도를 와인으로 생산하는 과정에서 ‘어떠한 첨가물’ 혹은 ‘어떠한 제거 과정’ 없이 만들어진 와인을 뜻합니다.",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "스페인",
    "volume": 750,
    "foodPairing": "[]",
    "description": "하지만, 통상적으로 내추럴 와인의 구분은 SO2 (이산화황, 산화방지제)의 소량 첨가 혹은 미첨가 여부가 가장 큰 차이를 준다고 할 수 있는데 이는 국가 혹은 지역마다 다른 기준을 가지고 있어, 세계적으로 정의할 수 있는 하나의 합의된 공통 기준은 없습니다. 지역 및 기관별 SO2 함유량 관련 차트 EU Law: 유럽 내 생산되는 와인 기준",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "내추럴 와인",
    "grapeNames": []
  },
  {
    "slug": "roger-goulart-brut-millesime",
    "nameKo": "Roger Goulart Brut Millesime",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "Penedes > Catalunya > Spain",
    "volume": 750,
    "foodPairing": "[]",
    "description": "연한 황금색이 감돌며, 밝고 고운 기포가 표면 위로 올라옵니다. 사과, 배, 감귤류, 파인애플 등 신선한 과일의 강렬한 아로마가 드러나며 뒤에는 가볍게 효모와 빵의 향이 느껴집니다. 입안에서는 약간의 단맛과 산도가 균형을 이루며, 둥글고 실키한 질감이 느껴집니다. 사과, 배, 시트러스의 과실 풍미와 토스티한 뉘앙스가 어우러지며 여운으로 길게 이어집니다. 식전주로도 매우 훌륭하며, 연어, 스시 등 해산물이나 소스가 진한 닭고기 요리와도 잘 어울립니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "로저 구라트 브뤼 밀레짐",
    "grapeNames": [
      "페네데스 지역 고유 품종을 블렌딩하며",
      "차렐로 품종의 비중이 높습니다."
    ]
  },
  {
    "slug": "5-90",
    "nameKo": "비센테 간디아는 현재 발렌시아 지방에서 가장 큰 와이너리이며 , 5 대륙 90개 이상의 국가의 다양한 입맛을 만족시키는 와인을 생산하고 있습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "스페인",
    "volume": 750,
    "servingTempMin": 6,
    "servingTempMax": 8,
    "foodPairing": "[]",
    "description": "와이너리의 철학은 그 떼루아에 맞는 개성을 가진 와인을 만드는 것으로 이러한 이유로 발렌시아의 다른 두 지역에 각각 와이너리를 설립하고 그 지역의 개성이 담긴 와인을 생산하고 있습니다. 산다라 와인 모히토는 와인을 즐기는 새로운 방법입니다. 산다라 와인 모히토는 매력적인 라임 그린 컬러에 레몬빛이 살짝 감돕니다.  상쾌한 민트, 스피아민트 향과 함께 상큼한 시트러스류와 초록 사과의 향기가 전해집니다.  새콤한 과일의 풍미를 더욱 힘있게 만들어 주는 우아한 기포와 달콤함, 산미가 조화롭게 어우러지며 민트의 여운이 길게 이어집니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "비센테 간디아(Vicente Gandia) 는 1885년 스페인 발렌시아 지방에 설립된 와이너리로 올해로 131년을 맞이하는 역사와 전통의 와인 기업 입니다.  비센테 간디아는 긴 전통과 함께 혁신을 추구하며 늘 품질향상, 와인문화 선도와 사회복지 실현에도 깊은 관심을 가지고 있습니다.",
    "grapeNames": [
      "비우라",
      "소비뇽 블랑",
      "베르데호"
    ]
  },
  {
    "slug": "wine-18",
    "nameKo": "▶ 종     류 : 약발포성 가향 와인",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "스페인",
    "volume": 750,
    "servingTempMin": 6,
    "servingTempMax": 8,
    "foodPairing": "[]",
    "description": "SANDARA SPARKLING WHITE 산다라 스파클링 화이트는 섬세한 꽃향기를 지녔습니다.  기분을 상쾌하게 하는 시트러스와 함께 포도, 망고와 같은 여름철 과일의 감미로운 풍미를 느끼실 수 있습니다. 섬세한 기포와 부드러운 풍미가 신선함을 선사합니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "▶ 원 산 지 : 스페인 (Valencia)",
    "grapeNames": [
      "베르데호",
      "소비뇽 브랑",
      "비우라"
    ]
  },
  {
    "slug": "wine-19",
    "nameKo": "▶ 종     류 : 약발포성 가향 와인",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "스페인",
    "volume": 750,
    "servingTempMin": 6,
    "servingTempMax": 8,
    "foodPairing": "[]",
    "description": "SANDARA SPARKLING RED 산다라 스파클링 레드는 과일과 꽃, 다크 초콜릿, 시나몬, 그리고 넛맥의 풍미를 가진 짙은 가넷 빛의 와인입니다. 상큼한 산도와 육감적인 탄닌이 강한 단맛을 중화시켜 주며 끊임없이 피어오르는 섬세한 기포와 함께 오래도록 여운이 남습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "▶ 원 산 지 : 스페인 (Valencia)",
    "grapeNames": [
      "보발",
      "모나스트렐",
      "까베르네 소비뇽"
    ]
  },
  {
    "slug": "wine-20",
    "nameKo": "▶ 종     류 : 약발포성 가향 와인",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "스페인",
    "volume": 750,
    "servingTempMin": 6,
    "servingTempMax": 8,
    "foodPairing": "[]",
    "description": "SANDARA SPARKLING ROSE 식전주로 매우 훌륭하며 케이크, 과일 타르트 등과 같은 디저트와도 잘 어울립니다. 비센테 간디아(Vicente Gandia) 는 1885년 스페인 발렌시아 지방에 설립된 와이너리로 올해로 131년을 맞이하는 역사와 전통의 와인 기업 입니다.  비센테 간디아는 긴 전통과 함께 혁신을 추구하며 늘 품질향상, 와인문화 선도와 사회복지 실현에도 깊은 관심을 가지고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "▶ 원 산 지 : 스페인 (Valencia)",
    "grapeNames": [
      "산다라 스파클링 로제는 로즈워터와 잘 익은 체리 풍미의 와인입니다. 라즈베리와 딸기의 감미로운 향이 퍼지며 부드러운 탄산과 기분 좋은 달콤함이 오래도록 지속됩니다.  스페인 토착 품종인 보발 100%로 만든 스위트 스파클링 와인으로 입안 가득 상큼함이 전해집니다."
    ]
  },
  {
    "slug": "wine-21",
    "nameKo": "▶ 종     류 : 약발포성 가향 와인",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "스페인",
    "volume": 750,
    "servingTempMin": 6,
    "servingTempMax": 8,
    "foodPairing": "[]",
    "description": "SANDARA SPARKLING SANGRIA 상그리아 와인은 지중해 문화의 보석이라할 수 있습니다. 산다라 스파클링 상그리아는 발렌시아 지방 최고의 감귤원(레몬과 오렌지)와 붉은 과일(라즈베리, 딸기, 체리) 셀렉션으로 부터 얻은 네츄럴 추출액으로 만든 프리미엄 와인입니다. 체리와 같은 매우 밝은 레드빛을 띄며 강렬한 감귤계의 아로마와 잘 익은 붉은 과실의 향과 함께 오렌지 꽃의 향도 느끼실 수 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "▶ 원 산 지 : 스페인 (Valencia)",
    "grapeNames": [
      "보발",
      "까베르네 소비뇽",
      "모나스트렐"
    ]
  },
  {
    "slug": "top-15-top-100-3",
    "nameKo": "비센테 간디아 와이너리는 현재 발렌시아 지방에서 가장 큰 와이너리이며 더불어 Top 15 스페니쉬 와이너리, Top 100 유럽 와이너리로 선정 되었습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "스페인",
    "volume": 750,
    "servingTempMin": 6,
    "servingTempMax": 8,
    "foodPairing": "[]",
    "description": "와이너리의 철학은 그 떼루아에 맞는 개성을 가진 와인을 만드는 것으로 이러한 이유로 발렌시아의 다른 두 지역에 각각 와이너리를 설립하고 그 지역의 개성이 담긴 와인을 생산하고 있습니다. SANDARA Chardonnay Sake Sparkling 산다라 샤도네이 사케는 이제껏 보지 못한 전혀 새로운 와인입니다. 샤도네이로 만든 스파클링 와인에 일본산 사케와 벚꽃향을 더해 세상에 하나뿐인 샤도네이 사케가 만들어 졌습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "비센테 간디아(Vicente Gandia) 는 1885년 스페인 발렌시아 지방에 설립된 와이너리로 올해로 131년을 맞이하는 역사와 전통의 와인기업 입니다.  비센테 간디아는 긴 전통과 함께 혁신을 추구하는 와이너리로 늘 품질향상, 와인문화 선도와 사회복지 실현에도 깊은 관심을 가지고 있습니다.",
    "grapeNames": [
      "샤도네이"
    ]
  },
  {
    "slug": "santes",
    "nameKo": "Santes",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "DO Monsant - 프리오랏(Priorat) – Spain(스페인)",
    "volume": 750,
    "servingTempMin": 13,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 그릴 된 돼지고기\", \"로스트 치킨\", \"연한 치즈 등\"]",
    "description": "Cabernet Sauvignon 8%, Syrah 8% 지중해성 기후의 영향을 많이 받는 DO Monsant지역 남부의 과실을 손 수확 하여 만든 와인입니다. 서늘한 기후를 가지고 있어 다른 지역에 비해 과실에서 좀더 인상적이 산도를 느낄 수 있습니다. 이에 와인 산테스 역시 지역적 특징인 산도를 좀더 효과적으로 만들 수 있는 양조 방식을 사용 합니다. 탄닌 보다는 산도를 좀더 살리기 위해 12일간의 짧은 침용을 진행하며, 배럴에서의 숙성을 과감히 생략한 라이트 바디의 와인입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "산테스",
    "grapeNames": []
  },
  {
    "slug": "tionio-reserva",
    "nameKo": "Tionio Reserva",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "리베라 델 듀에로(Ribera del Duero) – Spain(스페인)",
    "volume": 750,
    "servingTempMin": 13,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 양념된 소고기 요리\", \"숙성된 치즈 등\"]",
    "description": "신비한 느낌의 루비빛을 볼 수 있으며, 블루베리와 향신료의 향이 오크의 향과 어우러져 느껴집니다. 입안에서 큰 꽃다발의 향이 느껴지며, 견과류와 헤이즐넛의 고소하고 우아한 피니쉬는 고기와 함께 먹었을때 기분좋게 해줄 것입니다. 와인을 통해 티오니오 레세르바의 별명 “포도로 만든 하나의 꽃다발” 을 느껴보시기 바랍니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "티오니오 레세르바",
    "grapeNames": [
      "빈야드에서 손수확을 통해 15kg의 적은 과실만을 모아 프렌치 오크에서 14개월",
      "병에서 22개월동안 숙성을 진행합니다. 오랜 숙성기간은 와인의 균형감을 잡아주며",
      "각각의 포도품종을 하나의 와인으로 잘 조화되게 만듭니다."
    ]
  },
  {
    "slug": "vi-a-real-crianza",
    "nameKo": "Viña Real Crianza",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "리오하(RIOJA) – 스페인(SPAIN)",
    "volume": 750,
    "foodPairing": "[]",
    "description": "비나 레알은 1920년에 시작된 리오하 알라베사의 대표적인 와이너리로, 지역에서 오크 숙성 와인을 선도적으로 생산한 와이너리 중 하나입니다. 비나 레알은 전통과 현대성 사이의 섬세한 균형을 바탕으로 정체성과 스타일을 구축해 왔습니다. 2004년까지 비나 레알 와인은 리오하 알라베사 지역 포도로 하로에 위치한 CVNE 와이너리에서 생산되었습니다. 2004년에는 비나 레알 와이너리의 공식 건물이 라과디아에 완공되었으며, 이곳에서 포도 수확부터 병입 및 출하까지 전 과정이 이루어집니다. 건물은 세로 데라 메사(Cerro de la Mesa) 언덕을 따라 조화를 이루며 지어진 30,000㎡ 규모의 현대적인 설비로, 리오하 지역의 지형과 아름답게 어우러지는 상징적인 건축물로 알려져 있습니다. 비나 레알 와인 양조를 책임지고 있는 에바 데 베니토(Eva de Benito)는 와이너리 팀과 함께 과실미가 강조되고, 숙성 잠재력과 구조감, 아로마의 집중도가 뛰어난 와인을 만들어내고 있습니다. 그녀의 지휘 아래, 비나 레알은 리오하 알라베사의 떼루아 특성을 정교하게 표현하는 와인으로 꾸준한 명성을 이어가고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "비나 레알 크리안자",
    "grapeNames": [
      "비나 레알 와인은 주로 리오하 알라베사의 세 지역",
      "라바스티다(Labastida)",
      "라과디아(Laguardia)",
      "후에 마요르(Fuenmayor)의 포도를 사용하여 양조됩니다. 이 포도밭들은 해발 450~650m 고도에 위치해 있으며",
      "지중해성 기후의 영향을 받는 지역입니다. 포도나무는 수직 트렐리스 방식으로 재배되며",
      "주요 품종은 비우라",
      "템프라니요",
      "가르나차",
      "그라시아노",
      "마수엘로입니다. 이 다양한 품종과 지형 조건은 와인에 뚜렷한 개성과 균형 잡힌 구조를 부여합니다."
    ]
  },
  {
    "slug": "vi-a-real-reserva",
    "nameKo": "Viña Real Reserva",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "리오하(RIOJA) – 스페인(SPAIN)",
    "volume": 750,
    "foodPairing": "[]",
    "description": "비나 레알은 1920년에 시작된 리오하 알라베사의 대표적인 와이너리로, 지역에서 오크 숙성 와인을 선도적으로 생산한 와이너리 중 하나입니다. 비나 레알은 전통과 현대성 사이의 섬세한 균형을 바탕으로 정체성과 스타일을 구축해 왔습니다. 2004년까지 비나 레알 와인은 리오하 알라베사 지역 포도로 하로에 위치한 CVNE 와이너리에서 생산되었습니다. 2004년에는 비나 레알 와이너리의 공식 건물이 라과디아에 완공되었으며, 이곳에서 포도 수확부터 병입 및 출하까지 전 과정이 이루어집니다. 건물은 세로 데라 메사(Cerro de la Mesa) 언덕을 따라 조화를 이루며 지어진 30,000㎡ 규모의 현대적인 설비로, 리오하 지역의 지형과 아름답게 어우러지는 상징적인 건축물로 알려져 있습니다. 비나 레알 와인 양조를 책임지고 있는 에바 데 베니토(Eva de Benito)는 와이너리 팀과 함께 과실미가 강조되고, 숙성 잠재력과 구조감, 아로마의 집중도가 뛰어난 와인을 만들어내고 있습니다. 그녀의 지휘 아래, 비나 레알은 리오하 알라베사의 떼루아 특성을 정교하게 표현하는 와인으로 꾸준한 명성을 이어가고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "비나 레알 리제르바",
    "grapeNames": [
      "비나 레알 와인은 주로 리오하 알라베사의 세 지역",
      "라바스티다(Labastida)",
      "라과디아(Laguardia)",
      "후에 마요르(Fuenmayor)의 포도를 사용하여 양조됩니다. 이 포도밭들은 해발 450~650m 고도에 위치해 있으며",
      "지중해성 기후의 영향을 받는 지역입니다. 포도나무는 수직 트렐리스 방식으로 재배되며",
      "주요 품종은 비우라",
      "템프라니요",
      "가르나차",
      "그라시아노",
      "마수엘로입니다. 이 다양한 품종과 지형 조건은 와인에 뚜렷한 개성과 균형 잡힌 구조를 부여합니다."
    ]
  },
  {
    "slug": "vi-a-real-gran-reserva",
    "nameKo": "Viña Real Gran Reserva",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "리오하(RIOJA) – 스페인(SPAIN)",
    "volume": 750,
    "foodPairing": "[]",
    "description": "비나 레알은 1920년에 시작된 리오하 알라베사의 대표적인 와이너리로, 지역에서 오크 숙성 와인을 선도적으로 생산한 와이너리 중 하나입니다. 비나 레알은 전통과 현대성 사이의 섬세한 균형을 바탕으로 정체성과 스타일을 구축해 왔습니다. 2004년까지 비나 레알 와인은 리오하 알라베사 지역 포도로 하로에 위치한 CVNE 와이너리에서 생산되었습니다. 2004년에는 비나 레알 와이너리의 공식 건물이 라과디아에 완공되었으며, 이곳에서 포도 수확부터 병입 및 출하까지 전 과정이 이루어집니다. 건물은 세로 데라 메사(Cerro de la Mesa) 언덕을 따라 조화를 이루며 지어진 30,000㎡ 규모의 현대적인 설비로, 리오하 지역의 지형과 아름답게 어우러지는 상징적인 건축물로 알려져 있습니다. 비나 레알 와인 양조를 책임지고 있는 에바 데 베니토(Eva de Benito)는 와이너리 팀과 함께 과실미가 강조되고, 숙성 잠재력과 구조감, 아로마의 집중도가 뛰어난 와인을 만들어내고 있습니다. 그녀의 지휘 아래, 비나 레알은 리오하 알라베사의 떼루아 특성을 정교하게 표현하는 와인으로 꾸준한 명성을 이어가고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "비나 레알 그랑 리제르바",
    "grapeNames": [
      "비나 레알 와인은 주로 리오하 알라베사의 세 지역",
      "라바스티다(Labastida)",
      "라과디아(Laguardia)",
      "후에 마요르(Fuenmayor)의 포도를 사용하여 양조됩니다. 이 포도밭들은 해발 450~650m 고도에 위치해 있으며",
      "지중해성 기후의 영향을 받는 지역입니다. 포도나무는 수직 트렐리스 방식으로 재배되며",
      "주요 품종은 비우라",
      "템프라니요",
      "가르나차",
      "그라시아노",
      "마수엘로입니다. 이 다양한 품종과 지형 조건은 와인에 뚜렷한 개성과 균형 잡힌 구조를 부여합니다."
    ]
  },
  {
    "slug": "vi-a-real-fermented-blanco",
    "nameKo": "Viña Real Fermented Blanco",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "리오하(RIOJA) – 스페인(SPAIN)",
    "volume": 750,
    "foodPairing": "[]",
    "description": "비나 레알은 1920년에 시작된 리오하 알라베사의 대표적인 와이너리로, 지역에서 오크 숙성 와인을 선도적으로 생산한 와이너리 중 하나입니다. 비나 레알은 전통과 현대성 사이의 섬세한 균형을 바탕으로 정체성과 스타일을 구축해 왔습니다. 2004년까지 비나 레알 와인은 리오하 알라베사 지역 포도로 하로에 위치한 CVNE 와이너리에서 생산되었습니다. 2004년에는 비나 레알 와이너리의 공식 건물이 라과디아에 완공되었으며, 이곳에서 포도 수확부터 병입 및 출하까지 전 과정이 이루어집니다. 건물은 세로 데라 메사(Cerro de la Mesa) 언덕을 따라 조화를 이루며 지어진 30,000㎡ 규모의 현대적인 설비로, 리오하 지역의 지형과 아름답게 어우러지는 상징적인 건축물로 알려져 있습니다. 비나 레알 와인 양조를 책임지고 있는 에바 데 베니토(Eva de Benito)는 와이너리 팀과 함께 과실미가 강조되고, 숙성 잠재력과 구조감, 아로마의 집중도가 뛰어난 와인을 만들어내고 있습니다. 그녀의 지휘 아래, 비나 레알은 리오하 알라베사의 떼루아 특성을 정교하게 표현하는 와인으로 꾸준한 명성을 이어가고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "비나 레알 퍼멘티드 블랑코",
    "grapeNames": [
      "비나 레알 와인은 주로 리오하 알라베사의 세 지역",
      "라바스티다(Labastida)",
      "라과디아(Laguardia)",
      "후에 마요르(Fuenmayor)의 포도를 사용하여 양조됩니다. 이 포도밭들은 해발 450~650m 고도에 위치해 있으며",
      "지중해성 기후의 영향을 받는 지역입니다. 포도나무는 수직 트렐리스 방식으로 재배되며",
      "주요 품종은 비우라",
      "템프라니요",
      "가르나차",
      "그라시아노",
      "마수엘로입니다. 이 다양한 품종과 지형 조건은 와인에 뚜렷한 개성과 균형 잡힌 구조를 부여합니다."
    ]
  },
  {
    "slug": "vi-a-real-la-virgen",
    "nameKo": "Viña Real La Virgen",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "리오하(RIOJA) – 스페인(SPAIN)",
    "volume": 750,
    "foodPairing": "[]",
    "description": "비나 레알은 1920년에 시작된 리오하 알라베사의 대표적인 와이너리로, 지역에서 오크 숙성 와인을 선도적으로 생산한 와이너리 중 하나입니다. 비나 레알은 전통과 현대성 사이의 섬세한 균형을 바탕으로 정체성과 스타일을 구축해 왔습니다. 2004년까지 비나 레알 와인은 리오하 알라베사 지역 포도로 하로에 위치한 CVNE 와이너리에서 생산되었습니다. 2004년에는 비나 레알 와이너리의 공식 건물이 라과디아에 완공되었으며, 이곳에서 포도 수확부터 병입 및 출하까지 전 과정이 이루어집니다. 건물은 세로 데라 메사(Cerro de la Mesa) 언덕을 따라 조화를 이루며 지어진 30,000㎡ 규모의 현대적인 설비로, 리오하 지역의 지형과 아름답게 어우러지는 상징적인 건축물로 알려져 있습니다. 비나 레알 와인 양조를 책임지고 있는 에바 데 베니토(Eva de Benito)는 와이너리 팀과 함께 과실미가 강조되고, 숙성 잠재력과 구조감, 아로마의 집중도가 뛰어난 와인을 만들어내고 있습니다. 그녀의 지휘 아래, 비나 레알은 리오하 알라베사의 떼루아 특성을 정교하게 표현하는 와인으로 꾸준한 명성을 이어가고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "비나 레알 라 비르헨",
    "grapeNames": [
      "비나 레알 와인은 주로 리오하 알라베사의 세 지역",
      "라바스티다(Labastida)",
      "라과디아(Laguardia)",
      "후에 마요르(Fuenmayor)의 포도를 사용하여 양조됩니다. 이 포도밭들은 해발 450~650m 고도에 위치해 있으며",
      "지중해성 기후의 영향을 받는 지역입니다. 포도나무는 수직 트렐리스 방식으로 재배되며",
      "주요 품종은 비우라",
      "템프라니요",
      "가르나차",
      "그라시아노",
      "마수엘로입니다. 이 다양한 품종과 지형 조건은 와인에 뚜렷한 개성과 균형 잡힌 구조를 부여합니다."
    ]
  },
  {
    "slug": "vi-a-real-bakeder",
    "nameKo": "Viña Real Bakeder",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "리오하(RIOJA) – 스페인(SPAIN)",
    "volume": 750,
    "foodPairing": "[]",
    "description": "비나 레알은 1920년에 시작된 리오하 알라베사의 대표적인 와이너리로, 지역에서 오크 숙성 와인을 선도적으로 생산한 와이너리 중 하나입니다. 비나 레알은 전통과 현대성 사이의 섬세한 균형을 바탕으로 정체성과 스타일을 구축해 왔습니다. 2004년까지 비나 레알 와인은 리오하 알라베사 지역 포도로 하로에 위치한 CVNE 와이너리에서 생산되었습니다. 2004년에는 비나 레알 와이너리의 공식 건물이 라과디아에 완공되었으며, 이곳에서 포도 수확부터 병입 및 출하까지 전 과정이 이루어집니다. 건물은 세로 데라 메사(Cerro de la Mesa) 언덕을 따라 조화를 이루며 지어진 30,000㎡ 규모의 현대적인 설비로, 리오하 지역의 지형과 아름답게 어우러지는 상징적인 건축물로 알려져 있습니다. 비나 레알 와인 양조를 책임지고 있는 에바 데 베니토(Eva de Benito)는 와이너리 팀과 함께 과실미가 강조되고, 숙성 잠재력과 구조감, 아로마의 집중도가 뛰어난 와인을 만들어내고 있습니다. 그녀의 지휘 아래, 비나 레알은 리오하 알라베사의 떼루아 특성을 정교하게 표현하는 와인으로 꾸준한 명성을 이어가고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "비나 레알 바케데르",
    "grapeNames": [
      "비나 레알 와인은 주로 리오하 알라베사의 세 지역",
      "라바스티다(Labastida)",
      "라과디아(Laguardia)",
      "후에 마요르(Fuenmayor)의 포도를 사용하여 양조됩니다. 이 포도밭들은 해발 450~650m 고도에 위치해 있으며",
      "지중해성 기후의 영향을 받는 지역입니다. 포도나무는 수직 트렐리스 방식으로 재배되며",
      "주요 품종은 비우라",
      "템프라니요",
      "가르나차",
      "그라시아노",
      "마수엘로입니다. 이 다양한 품종과 지형 조건은 와인에 뚜렷한 개성과 균형 잡힌 구조를 부여합니다."
    ]
  },
  {
    "slug": "valencia-spain",
    "nameKo": "원산지 : 발렌시아(Valencia), 스페인(Spain)",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "스페인",
    "volume": 750,
    "foodPairing": "[]",
    "description": "등   급 : D.O 발렌시아(Valencia) 종   류 : Semi-Sparkling Sweet 품   종 : 100% 모스카텔(Moscatel)",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "베시토스 모스카토 Besitos Moscato",
    "grapeNames": []
  },
  {
    "slug": "valencia-spain-2",
    "nameKo": "원산지 : 발렌시아(Valencia), 스페인(Spain)",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "스페인",
    "volume": 750,
    "foodPairing": "[]",
    "description": "등   급 : D.O 발렌시아(Valencia) 종   류 : Semi-Sparkling Sweet 품   종 : 모스카텔(Moscatel) 96%, 템프라니요(Tempranillo) 4%",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "베시토스 로제 Besitos Rose",
    "grapeNames": [
      "발렌시아 지역 중심부에서 생산된 매우 트렌디하고 개성 있는 스타일의 모스카텔로 만든 베시토스(Besitos) 스파클링은 와인 만큼이나 라벨이 매력적인데 꽃이 활짝 피어 하트모양을 이루어 섬세하면서 우아한 것이 특징입니다. 모스카텔(Moscatell)품종을 압착한 주스에 템프라니요(Tempranillo)품종을 약간 블렌딩 함으로서 달콤한 산딸기의 캐릭터 뿐만 아니라 로제 와인의 가장 큰 특징인 연한 장미 빛 색을 표현 합니다."
    ]
  },
  {
    "slug": "dagda",
    "nameKo": "Dagda",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "스페인",
    "volume": 750,
    "foodPairing": "[]",
    "description": "자두, 체리, 딸기 같은 잘 익은 과일 향과 함께 육류요리의 느끼함을 상쾌하게 해주는 깔끔한 스파이시 향과 구운 아몬드, 초코렛 향이 좋습니다. 순수하고 솔직한 스페인 사람들의 성격을 닮아 잘 갖춰진 균형감 속에 편안한 과일 향이 입안을 가득 채워주며, 부드러움과 여운을 갖춘 가격대비 탁월한 밸류 입니다. 라 만차(La Mancha)는 세르반테스의 소설 돈키호테(Don Quixote)로 세계적인 주목을 받은 스페인 중부지역으로서, 스페인 와인생산의 중심지로 부상하고 있는 대표적인 와인 산지입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "다그다",
    "grapeNames": [
      "스페인을 대표하는 두 가지 레드 품종인 가르나챠와 템프라니요에 국제 품종 멀롯의 블랜딩을 통해 스페인의 가장 전형적인 특징과 현대적인 느낌을 동시에 보여 주는 와인입니다. 뜨거운 태양이 내리쬐는 황무지와 같은 매우 열악한 자연 환경 속에서 더욱 깊게 뿌리를 내리며 자라온 스페인 와인의 저력과 떼루아를 잘 표현합니다."
    ]
  },
  {
    "slug": "marquest-d-algo",
    "nameKo": "Marquest d’Algo",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "스페인",
    "volume": 750,
    "foodPairing": "[]",
    "description": "자두, 체리, 딸기 같은 잘 익은 과일 향과 함께 육류요리의 느끼함을 상쾌하게 해주는 깔끔한 스파이시 향과 구운 아몬드, 초코렛 향이 좋습니다. 순수하고 솔직한 스페인 사람들의 성격을 닮아 잘 갖춰진 균형감 속에 편안한 과일 향이 입안을 가득 채워주며, 부드러움과 여운을 갖춘 가격대비 탁월한 밸류 입니다. 라 만차(La Mancha)는 세르반테스의 소설 돈키호테(Don Quixote)로 세계적인 주목을 받은 스페인 중부지역으로서, 스페인 와인생산의 중심지로 부상하고 있는 대표적인 와인 산지입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "마르께스 달고",
    "grapeNames": [
      "스페인을 대표하는 두 가지 레드 품종인 가르나챠와 템프라니요에 국제 품종 멀롯의 블랜딩을 통해 스페인의 가장 전형적인 특징과 현대적인 느낌을 동시에 보여 주는 와인입니다."
    ]
  },
  {
    "slug": "opera-prima-sweet-moscato-sparkling",
    "nameKo": "OPERA PRIMA Sweet Moscato Sparkling",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "스페인",
    "volume": 750,
    "servingTempMin": 6,
    "servingTempMax": 8,
    "foodPairing": "[\"♥ 신선한 과일\", \"푸딩\", \"생크림 케익\"]",
    "description": "♥ 제 조 사 : J. Garcia Carrion(제이 가르시아 까리옹) ♥ 종     류 : Sweet Sparkling Wine  (발포성 감미 백포도주) ♥ 향(Nose) : 매우 상쾌한 청포도 향, 꽃, 꿀 향 등",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "오페라 프리마 스위트 모스카토 스파클링",
    "grapeNames": [
      "화사한 향과 달콤한 맛을 보여주는 모스카토 품종의 와인들은 국내 와인 소비시장의 한 축을 이루며 국제 시장에서 한국을 모스카토 킹덤이라고 부를 만큼 국내 소비자들의 사랑을 받고 있는 것으로 유명합니다. 모스카토 품종으로 만들어진 와인은 대부분 이태리에서 생산되는 것으로 알려져 있습니다. 하지만 이렇게 알려진 것과는 달리 프랑스에서는 뮈스캇(Muscat)이란 이름으로",
      "스페인에서는 모스카텔(Moscatel)이란 이름으로 널리 사랑 받으며 생산되고 있습니다."
    ]
  },
  {
    "slug": "opera-prima-pink-moscato-sparkling",
    "nameKo": "OPERA PRIMA Pink Moscato Sparkling",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "스페인",
    "volume": 750,
    "servingTempMin": 6,
    "servingTempMax": 8,
    "foodPairing": "[\"♥ 신선한 과일\", \"푸딩\", \"생크림 케익\"]",
    "description": "♥ 제 조 사 : J. Garcia Carrion(제이 가르시아 까리옹) ♥ 종     류 : Sweet Sparkling Rose Wine ( 발포성 감미 로제 포도주) ♥ 색(Color) : 화사하면서도 밝은 로제 빛",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "오페라 프리마 핑크 모스카토 스파클링",
    "grapeNames": [
      "화사한 향과 달콤한 맛을 보여주는 모스카토 품종의 와인들은 국내 와인 소비시장의 한 축을 이루며 국제 시장에서 한국을 모스카토 킹덤이라고 부를 만큼 국내 소비자들의 사랑을 받고 있는 것으로 유명합니다. 모스카토 품종으로 만들어진 와인은 대부분 이태리에서 생산되는 것으로 알려져 있습니다. 하지만 이렇게 알려진 것과는 달리 프랑스에서는 뮈스캇(Muscat)이란 이름으로",
      "스페인에서는 모스카텔(Moscatel)이란 이름으로 널리 사랑 받으며 생산되고 있습니다."
    ]
  },
  {
    "slug": "la-chula-sangria",
    "nameKo": "La Chula Sangria",
    "nameEn": "",
    "type": "red",
    "country": "Spain",
    "regionL1": "스페인",
    "volume": 750,
    "servingTempMin": 6,
    "servingTempMax": 8,
    "foodPairing": "[\"♥ 신선한 과일\", \"푸딩\", \"생크림 케익 등의 디져트류와 잘 어울리며\"]",
    "description": "♥ 제 조 사 : PARA SELECT WIEN S.L. (파라 셀렉트 와인) ♥ 종     류 : Sangria  (와인 칵테일) ♥ 향(Nose) : 사과, 오렌지, 복숭아 등의 달콤한 과일향과 함께 짙은 시나몬의",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "라 츌라 상그리아",
    "grapeNames": []
  },
  {
    "slug": "mursa-yellow-muscat",
    "nameKo": "(MURSA Yellow Muscat)",
    "nameEn": "",
    "type": "red",
    "country": "Slovenia",
    "regionL1": "Štajerska (스타예르스카) Kakovostno vino *ZGP",
    "volume": 750,
    "foodPairing": "[]",
    "description": "황금빛의 와인은 아로마의 표현력이 뛰어나며 특히 감귤류, 레몬 제스트의 청량함과 상큼함이 돋보입니다. 입에서는 우아하고 세련되게 표현되는 풍부한 바디와 부드러운 감미가 젠틀하게 미각을 지배합니다. (Zasciteno Geografsko Poreklo = PDO, Protected Designation of Origin) < Podravje (포드라브예) < Slovenija (슬로베니아)\u000b▶ 타   입 :  Semi-Sweet (=Polsladko), White",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "무르사 옐로우 무스캇",
    "grapeNames": []
  },
  {
    "slug": "ozmec-sauvignon-blanc",
    "nameKo": "(OZMEC Sauvignon Blanc)",
    "nameEn": "",
    "type": "red",
    "country": "Slovenia",
    "regionL1": "Štajerska (스타예르스카) Vrhunsko vino *ZGP",
    "volume": 750,
    "foodPairing": "[]",
    "description": "연둣빛이 감도는 눈부신 노란색 컬러의 이 와인은 글라스 안에서 회양목, 쐐기풀 등 다양한 풀잎의 향기를 싱그럽게 뿜어냅니다. 입에서는 경쾌하고 에너지 넘치는 짜릿함이 잘 느껴지며 오래 기억될 피니시를 선사합니다. (Zasciteno Geografsko Poreklo = PDO, Protected Designation of Origin) < Podravje (포드라브예) < Slovenija (슬로베니아) \u000b▶ 타   입 :  Semi-Dry (=Polsuho), White",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "오즈메츠 소비뇽 블랑",
    "grapeNames": []
  },
  {
    "slug": "arcanum-elixir",
    "nameKo": "arcanum = 비밀; 신비, 불가사의; 비결; 비약, 영약(elixir); (연금술사가 발견하려고 노력했던) 자연계의 대신비",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "끼안티 클라시코 남동쪽 구석에 위치한 아카넘의 빈야드는 토스카나에서 가장 귀하게 여겨지는 땅 중 한 곳입니다. 이 곳에서 세계적 와인메이커 피에르 세이양 (Pierre Seillan) 은 보르도, 캘리포니아에서의 오랜 양조경험을 바탕으로",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "풍요의 땅 ‘토스카나’의 정수, 아카넘",
    "grapeNames": [
      "카버네 프랑",
      "카버네 소비뇽",
      "멀롯을 비롯한 품종으로 그만의 보르도 스타일 블렌드를 만듭니다."
    ]
  },
  {
    "slug": "2014-vintage-rp-94-js-93",
    "nameKo": "2014 Vintage : RP 94점, JS 93점",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "2015 Vintage : RP 97점, JS 93점",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "2013 Vintage:  RP 96+점",
    "grapeNames": []
  },
  {
    "slug": "2014-vintage-rp-91",
    "nameKo": "2014 Vintage : RP 91점,",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "2015 Vintage : RP 95+점, JS 92점",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "2013 Vintage:  RP 95점, JS 94점",
    "grapeNames": []
  },
  {
    "slug": "il-fauno-arcanum",
    "nameKo": "(Il Fauno, Arcanum)",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "Dry, Red",
    "volume": 750,
    "foodPairing": "[]",
    "description": "일 파우노의 멀롯은 이스테이트 내 따스하고 점토질이 풍부한 빈야드에서 수확, 특히 살집있는 풍만한 느낌의 멀롯을 만들어내기에 적합 합니다 풍성한 블랙 체리, 바닐라, 그리고 카버네 프랑으로부터의 삼나무 향이 가득합니다. 인텐스하고 집중도 있는 이 블렌드는 입안에서는 잘 익은 딸기, 초콜릿을 느끼게 하고, 섬세한 타닌이 선사하는 질감의 즐거움을 안겨줍니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "아카넘 일 파우노 2019",
    "grapeNames": []
  },
  {
    "slug": "ca-del-bosco-cuv-e-prestige-extra-brut",
    "nameKo": "Ca’ del Bosco  Cuvée Prestige Extra Brut",
    "nameEn": "",
    "type": "sparkling",
    "country": "Italy",
    "regionL1": "프란치아코르타(Franciacorta) - Italy",
    "volume": 750,
    "servingTempMin": 8,
    "servingTempMax": 9,
    "foodPairing": "[\"▶ 아페리티프\", \"샐러드\", \"각종 해산물 요리\", \"흰 살 육류\"]",
    "description": "까델 보스코의 기준을 가장 완벽히 표현한 와인으로 까델 보스코의 하우스 스타일과 프란치아코르타의 떼루아를 표현하는 우아한 와인입니다. 이는 다년 간의 경험, 근면함, 열정과 셀라에서의 긴 기다림이 만들어낸 결과로 와인에 풍부함과 개성이 가득 차있습니다. 매우 조화롭고 신선하여 어떤 음식과 장소에도 잘 어울리는 고급 프란치아코르타 입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "까델 보스코 뀌베 프레스티지 엑스트라 브륏",
    "grapeNames": []
  },
  {
    "slug": "ca-del-bosco-cuv-e-prestige-rose",
    "nameKo": "Ca’ del Bosco  Cuvée Prestige Rose",
    "nameEn": "",
    "type": "sparkling",
    "country": "Italy",
    "regionL1": "프란치아코르타(Franciacorta) - Italy",
    "volume": 750,
    "servingTempMin": 8,
    "servingTempMax": 9,
    "foodPairing": "[\"▶ 샐러드\", \"각종 해산물 요리 및 육류 요리\"]",
    "description": "이태리 최고의 스파클링 와인을 생산하는 까델 보스코의 기준을 완벽히 표현한 와인으로 화이트 스파클링의 섬세함과 레드 와인의 구조감과 깊은 풍미를 담은 아름다운 와인입니다. 레드 와인의 깊은 풍미가 우아하게 담겨있는 이 로제 스파클링 와인은 해산물, 육류 요리 등 매우 다양한 음식과 잘 어울립니다. 이태리 최고 스파클링과 동의어가 되어 버린 까델 보스코는 세련되고 우아한 스파클링 와인의 산지 프란치아코르타의 대표적 생산자입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "까델 보스코 뀌베 프레스티지 로제",
    "grapeNames": [
      "레드와 화이트 품종을 별도로 양조해서  8개월간 정제시킨 후 마법과도 같은 블렌딩을 창조합니다. 지하 셀러에서 12℃의 일정한 온도로 무려 30개월간 효모와 함께 숙성되는 까델 보스코의 로제 와인은 스파클링 와인이 보여 줄 수 있는 최상의 복합미와 품격",
      "우아함을 갖추게 됩니다."
    ]
  },
  {
    "slug": "ca-del-bosco-dosage-zero",
    "nameKo": "Ca’ del Bosco  Dosage Zero",
    "nameEn": "",
    "type": "sparkling",
    "country": "Italy",
    "regionL1": "프란치아코르타(Franciacorta) - Italy",
    "volume": 750,
    "servingTempMin": 9,
    "servingTempMax": 12,
    "foodPairing": "[\"▶ 아페리티프\", \"샐러드\", \"각종 해산물 요리\", \"흰 살 육류\"]",
    "description": "도자쥬는 긴 병 숙성으로 생긴 효모 침전물을 냉각시켜 병 밖으로 순간 배출시키는 데고르쥬망(Degorgement)과정에서 생긴 로스를 보충하는 보주 과정에서 최종 와인의 당도를 결정하기 위해 약간의 리큐어 와인을 집어 넣는 것을 말합니다. 도자쥬 제로는 이를 하지 않았다는 것으로 이는 원 재료인 과실 자체가 매우 이상적으로 완숙해져 있을 때만 가능하여 함부로 행하기 어려운 제조법입니다. 최고 포도밭에서 엄선된 포도를 압착하여 처음 착즙된 양질의 쥬스만으로 양조됩니다. 길게 지속되는 풍부하고 섬세한 기포가 거품 띠를 형성하며, 우아하고 복합적이며 단아한 향기가 특징적인 와인입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "까델 보스코 도자쥬 제로",
    "grapeNames": []
  },
  {
    "slug": "7",
    "nameKo": "까델보스코 빈티지 컬렉션 와인들은 까델 보스코의 양조 방식을 잘 보여주는 빈티지 프란치아코르타 레인지입니다. 엄선된 포도를 베리 스파라는 까델보스코 특유의 포도 세척 시스템을 거친 후 복합미를 위하여 작은 오크 오크통에서 7개월 동안 침용 합니다.",
    "nameEn": "",
    "type": "sparkling",
    "country": "Italy",
    "regionL1": "프란치아코르타(Franciacorta) - Italy",
    "volume": 750,
    "servingTempMin": 8,
    "servingTempMax": 9,
    "foodPairing": "[\"▶ 아페리티프\", \"샐러드\", \"각종 해산물 요리\", \"흰 살 육류\"]",
    "description": "이태리 최고 스파클링과 동의어가 되어 버린 까델 보스코는 세련되고 우아한 스파클링 와인의 산지 프란치아코르타의 대표적 생산자입니다. 이태리 북중부의 프란치아코르타는 “이태리의 샴페인”이라고 할 수 있는 지역으로, 샴페인 지역에서 생산된 스파클링 와인을 샴페인이라고 총칭하듯이 이 지역에서 생산된 스파클링 와인은 프란치아코르타 라고 총칭합니다. 스파클링 와인 이외의 와인 생산이 사실상 전무한 샴페인 지역과 달리, 프란치아코르타 지역은 일반 스틸와인(Still Wine)도 중요한 비중을 차지하는데, 까델 보스코는 스파클링과 스틸 와인 양자에 있어 두루 매우 중요한 비중을 차지하고 있으며, 이는 이들이 이태리 최고의 와인 명가들의 그룹인 그란디 마르끼(Grandi Marchi)의 멤버라는 점에서 확인되고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "까델보스코 빈티지 컬렉션 엑스트라 브륏\u000b Ca’del Bosco Vintage Collection Extra Brut",
    "grapeNames": []
  },
  {
    "slug": "annamaria-clementi-maurizio-zanella-8-sur-lie",
    "nameKo": "가장 좋은 빈티지의 포도들을 선별해서 만든 까델보스코의 가장 프리미엄와인입니다. 안나마리아 클레멘티(Annamaria Clementi)는 와이너리 설립자인 마우리치오 자넬라(Maurizio Zanella)의 어머니를 기리는 의미를 담았습니다. 약 8년 간 쉬르 리(Sur Lie) 숙성을 하여 독특한 풍미와 복합미를 더하였습니다.",
    "nameEn": "",
    "type": "sparkling",
    "country": "Italy",
    "regionL1": "프란치아코르타(Franciacorta) - Italy",
    "volume": 750,
    "servingTempMin": 8,
    "servingTempMax": 9,
    "foodPairing": "[\"▶ 아페리티프\", \"샐러드\", \"각종 해산물 요리\", \"흰 살 육류\"]",
    "description": "이태리 최고 스파클링과 동의어가 되어 버린 까델 보스코는 세련되고 우아한 스파클링 와인의 산지 프란치아코르타의 대표적 생산자입니다. 이태리 북중부의 프란치아코르타는 “이태리의 샴페인”이라고 할 수 있는 지역으로, 샴페인 지역에서 생산된 스파클링 와인을 샴페인이라고 총칭하듯이 이 지역에서 생산된 스파클링 와인은 프란치아코르타 라고 총칭합니다. 스파클링 와인 이외의 와인 생산이 사실상 전무한 샴페인 지역과 달리, 프란치아코르타 지역은 일반 스틸와인(Still Wine)도 중요한 비중을 차지하는데, 까델 보스코는 스파클링과 스틸 와인 양자에 있어 두루 매우 중요한 비중을 차지하고 있으며, 이는 이들이 이태리 최고의 와인 명가들의 그룹인 그란디 마르끼(Grandi Marchi)의 멤버라는 점에서 확인되고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "까델보스코 안나마리아 클레멘티\u000b Ca’del Bosco Annamaria Clementi",
    "grapeNames": []
  },
  {
    "slug": "ca-del-bosco",
    "nameKo": "까델보스코",
    "nameEn": "Ca’del Bosco",
    "type": "red",
    "country": "Italy",
    "regionL1": "Sebino, Lombardy, Italy",
    "volume": 750,
    "servingTempMin": 11,
    "servingTempMax": 13,
    "foodPairing": "[]",
    "description": "이태리 최고 스파클링과 동의어가 되어 버린 까델 보스코는 세련되고 우아한 스파클링 와인의 산지 프란치아코르타의 대표적 생산자입니다. 이태리 북중부의 프란치아코르타는 “이태리의 샴페인”이라고 할 수 있는 지역으로, 샴페인 지역에서 생산된 스파클링 와인을 샴페인이라고 총칭하듯이 이 지역에서 생산된 스파클링 와인은 프란치아코르타 라고 총칭합니다. 스파클링 와인 이외의 와인 생산이 사실상 전무한 샴페인 지역과 달리, 프란치아코르타 지역은 일반 스틸와인(Still Wine)도 중요한 비중을 차지하는데, 까델 보스코는 스파클링과 스틸 와인 양자에 있어 두루 매우 중요한 비중을 차지하고 있으며, 이는 이들이 이태리 최고의 와인 명가들의 그룹인 그란디 마르끼(Grandi Marchi)의 멤버라는 점에서 확인되고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "까델 보스코 셀바 델라 테사 \u000b Ca'del Bosco Selva della Tesa",
    "grapeNames": [
      "셀바 델라 테사는 지역의 특성을 잘 살려 품종의 미세한 차이를 이끌어내는 동시에",
      "와인메이커의 기술이 돋보이는 훌륭한 와인입니다."
    ]
  },
  {
    "slug": "ca-del-bosco-2",
    "nameKo": "까델보스코",
    "nameEn": "Ca’del Bosco",
    "type": "red",
    "country": "Italy",
    "regionL1": "Sebino, Lombardy, Italy",
    "volume": 750,
    "servingTempMin": 15,
    "servingTempMax": 17,
    "foodPairing": "[]",
    "description": "이태리 최고 스파클링과 동의어가 되어 버린 까델 보스코는 세련되고 우아한 스파클링 와인의 산지 프란치아코르타의 대표적 생산자입니다. 이태리 북중부의 프란치아코르타는 “이태리의 샴페인”이라고 할 수 있는 지역으로, 샴페인 지역에서 생산된 스파클링 와인을 샴페인이라고 총칭하듯이 이 지역에서 생산된 스파클링 와인은 프란치아코르타 라고 총칭합니다. 스파클링 와인 이외의 와인 생산이 사실상 전무한 샴페인 지역과 달리, 프란치아코르타 지역은 일반 스틸와인(Still Wine)도 중요한 비중을 차지하는데, 까델 보스코는 스파클링과 스틸 와인 양자에 있어 두루 매우 중요한 비중을 차지하고 있으며, 이는 이들이 이태리 최고의 와인 명가들의 그룹인 그란디 마르끼(Grandi Marchi)의 멤버라는 점에서 확인되고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "까델 보스코 피네로 \u000b Ca'del Bosco Pinéro",
    "grapeNames": [
      "셀바 델라 테사는지역의 특성을 잘 살려 품종의 미세한 차이를 이끌어내는 동시에",
      "와인메이커의 기술이 돋보이는 훌륭한 와인입니다."
    ]
  },
  {
    "slug": "ca-del-bosco-cuv-e-prestige-extra-brut-2",
    "nameKo": "Ca’ del Bosco  Cuvée Prestige Extra Brut",
    "nameEn": "",
    "type": "sparkling",
    "country": "Italy",
    "regionL1": "프란치아코르타(Franciacorta) - Italy",
    "volume": 750,
    "servingTempMin": 8,
    "servingTempMax": 9,
    "foodPairing": "[\"▶ 아페리티프\", \"샐러드\", \"각종 해산물 요리\", \"흰 살 육류\"]",
    "description": "까델 보스코의 기준을 가장 완벽히 표현한 와인으로 까델 보스코의 하우스 스타일과 프란치아코르타의 떼루아를 표현하는 우아한 와인입니다. 이는 다년 간의 경험, 근면함, 열정과 셀라에서의 긴 기다림이 만들어낸 결과로 와인에 풍부함과 개성이 가득 차있습니다. 매우 조화롭고 신선하여 어떤 음식과 장소에도 잘 어울리는 고급 프란치아코르타 입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "까델 보스코 뀌베 프레스티지 엑스트라 브륏",
    "grapeNames": []
  },
  {
    "slug": "ca-del-bosco-cuv-e-prestige-rose-2",
    "nameKo": "Ca’ del Bosco  Cuvée Prestige Rose",
    "nameEn": "",
    "type": "sparkling",
    "country": "Italy",
    "regionL1": "프란치아코르타(Franciacorta) - Italy",
    "volume": 750,
    "servingTempMin": 8,
    "servingTempMax": 9,
    "foodPairing": "[\"▶ 샐러드\", \"각종 해산물 요리 및 육류 요리\"]",
    "description": "이태리 최고의 스파클링 와인을 생산하는 까델 보스코의 기준을 완벽히 표현한 와인으로 화이트 스파클링의 섬세함과 레드 와인의 구조감과 깊은 풍미를 담은 아름다운 와인입니다. 레드 와인의 깊은 풍미가 우아하게 담겨있는 이 로제 스파클링 와인은 해산물, 육류 요리 등 매우 다양한 음식과 잘 어울립니다. 이태리 최고 스파클링과 동의어가 되어 버린 까델 보스코는 세련되고 우아한 스파클링 와인의 산지 프란치아코르타의 대표적 생산자입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "까델 보스코 뀌베 프레스티지 로제",
    "grapeNames": [
      "레드와 화이트 품종을 별도로 양조해서  8개월간 정제시킨 후 마법과도 같은 블렌딩을 창조합니다. 지하 셀러에서 12℃의 일정한 온도로 무려 30개월간 효모와 함께 숙성되는 까델 보스코의 로제 와인은 스파클링 와인이 보여 줄 수 있는 최상의 복합미와 품격",
      "우아함을 갖추게 됩니다."
    ]
  },
  {
    "slug": "ca-del-bosco-dosage-zero-2",
    "nameKo": "Ca’ del Bosco Dosage Zero",
    "nameEn": "",
    "type": "sparkling",
    "country": "Italy",
    "regionL1": "프란치아코르타(Franciacorta) - Italy",
    "volume": 750,
    "servingTempMin": 9,
    "servingTempMax": 12,
    "foodPairing": "[\"▶ 아페리티프\", \"샐러드\", \"각종 해산물 요리\", \"흰 살 육류\"]",
    "description": "도자쥬는 긴 병 숙성으로 생긴 효모 침전물을 냉각시켜 병 밖으로 순간 배출시키는 데고르쥬망(Degorgement)과정에서 생긴 로스를 보충하는 보주 과정에서 최종 와인의 당도를 결정하기 위해 약간의 리큐어 와인을 집어 넣는 것을 말합니다. 도자쥬 제로는 이를 하지 않았다는 것으로 이는 원 재료인 과실 자체가 매우 이상적으로 완숙해져 있을 때만 가능하여 함부로 행하기 어려운 제조법입니다. 최고 포도밭에서 엄선된 포도를 압착하여 처음 착즙된 양질의 쥬스만으로 양조됩니다. 길게 지속되는 풍부하고 섬세한 기포가 거품 띠를 형성하며, 우아하고 복합적이며 단아한 향기가 특징적인 와인입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "까델 보스코 도자쥬 제로",
    "grapeNames": []
  },
  {
    "slug": "7-2",
    "nameKo": "까델보스코 빈티지 컬렉션 와인들은 까델 보스코의 양조 방식을 잘 보여주는 빈티지 프란치아 코르타 레인지입니다. 엄선된 포도를 베리 스파라는 까델보스코 특유의 포도 세척 시스템을 거친 후 복합미를 위하여 작은 오크 오크통에서 7개월 동안 침용을 합니다.",
    "nameEn": "",
    "type": "sparkling",
    "country": "Italy",
    "regionL1": "프란치아코르타(Franciacorta) - Italy",
    "volume": 750,
    "servingTempMin": 8,
    "servingTempMax": 9,
    "foodPairing": "[\"▶ 아페리티프\", \"샐러드\", \"각종 해산물 요리\", \"흰 살 육류\"]",
    "description": "이태리 최고 스파클링과 동의어가 되어 버린 까델 보스코는 세련되고 우아한 스파클링 와인의 산지 프란치아코르타의 대표적 생산자입니다. 이태리 북중부의 프란치아코르타는 “이태리의 샴페인”이라고 할 수 있는 지역으로, 샴페인 지역에서 생산된 스파클링 와인을 샴페인이라고 총칭하듯이 이 지역에서 생산된 스파클링 와인은 프란치아코르타 라고 총칭합니다. 스파클링 와인 이외의 와인 생산이 사실상 전무한 샴페인 지역과 달리, 프란치아코르타 지역은 일반 스틸와인(Still Wine)도 중요한 비중을 차지하는데, 까델 보스코는 스파클링과 스틸 와인 양자에 있어 두루 매우 중요한 비중을 차지하고 있으며, 이는 이들이 이태리 최고의 와인 명가들의 그룹인 그란디 마르끼(Grandi Marchi)의 멤버라는 점에서 확인되고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "까델보스코 빈티지 컬렉션 엑스트라 브륏\u000b Ca’del Bosco Vintage Collection Extra Brut",
    "grapeNames": []
  },
  {
    "slug": "annamaria-clementi-maurizio-zanella-8-sur-lie-2",
    "nameKo": "가장 좋은 빈티지의 포도들을 선별해서 만든 까델보스코의 가장 프리미엄와인입니다. 안나마리아 클레멘티(Annamaria Clementi)는 와이너리 설립자인 마우리치오 자넬라(Maurizio Zanella)의 어머니를 기리는 의미를 담았습니다. 약 8년 간 쉬르 리(Sur Lie) 숙성을 하여 독특한 풍미와 복합미를 더하였습니다.",
    "nameEn": "",
    "type": "sparkling",
    "country": "Italy",
    "regionL1": "프란치아코르타(Franciacorta) - Italy",
    "volume": 750,
    "servingTempMin": 8,
    "servingTempMax": 9,
    "foodPairing": "[\"▶ 아페리티프\", \"샐러드\", \"각종 해산물 요리\", \"흰 살 육류\"]",
    "description": "이태리 최고 스파클링과 동의어가 되어 버린 까델 보스코는 세련되고 우아한 스파클링 와인의 산지 프란치아코르타의 대표적 생산자입니다. 이태리 북중부의 프란치아코르타는 “이태리의 샴페인”이라고 할 수 있는 지역으로, 샴페인 지역에서 생산된 스파클링 와인을 샴페인이라고 총칭하듯이 이 지역에서 생산된 스파클링 와인은 프란치아코르타 라고 총칭합니다. 스파클링 와인 이외의 와인 생산이 사실상 전무한 샴페인 지역과 달리, 프란치아코르타 지역은 일반 스틸와인(Still Wine)도 중요한 비중을 차지하는데, 까델 보스코는 스파클링과 스틸 와인 양자에 있어 두루 매우 중요한 비중을 차지하고 있으며, 이는 이들이 이태리 최고의 와인 명가들의 그룹인 그란디 마르끼(Grandi Marchi)의 멤버라는 점에서 확인되고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "까델보스코 안나마리아 클레멘티\u000b Ca’del Bosco Annamaria Clementi",
    "grapeNames": []
  },
  {
    "slug": "cantina-tramin",
    "nameKo": "Cantina Tramin",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "알토 아디제(Alto Adige), 이탈리아",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 12,
    "foodPairing": "[]",
    "description": "(Trentino-Alto Adige) : Trentino-Alto Adige는 이탈리아 최북단의 와인 산지로 오스트리아와 국경을 접합니다. 지리상 남쪽이 Trentino, 북쪽이 Alto Adige 지역이며, Alto Adige 지역이 1919년 이전에는 오스트리아-헝가리 제국의 일부였기에 현지에서는 독일어인 Südtirol로 부릅니다. 북위 46도로 부르고뉴 위도와 동일하지만 기후 차이가 존재합니다. 가파른 산에 둘러 쌓인 계곡 바닥은 여름 아침에 빠르게 가열되어 포도밭의 경사면을 따뜻하게 만들어 동일 위도 상의 타 지역과 비교했을 때, 고도가 높은 지역임에도 불구하고 잘 익은 스타일의 풍부함을 갖춘 와인이 만들어집니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "칸티나 트라민",
    "grapeNames": []
  },
  {
    "slug": "cantina-tramin-2",
    "nameKo": "Cantina Tramin",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "알토 아디제(Alto Adige), 이탈리아",
    "volume": 750,
    "servingTempMin": 8,
    "servingTempMax": 10,
    "foodPairing": "[]",
    "description": "(Trentino-Alto Adige) : Trentino-Alto Adige는 이탈리아 최북단의 와인 산지로 오스트리아와 국경을 접합니다. 지리상 남쪽이 Trentino, 북쪽이 Alto Adige 지역이며, Alto Adige 지역이 1919년 이전에는 오스트리아-헝가리 제국의 일부였기에 현지에서는 독일어인 Südtirol로 부릅니다. 북위 46도로 부르고뉴 위도와 동일하지만 기후 차이가 존재합니다. 가파른 산에 둘러 쌓인 계곡 바닥은 여름 아침에 빠르게 가열되어 포도밭의 경사면을 따뜻하게 만들어 동일 위도 상의 타 지역과 비교했을 때, 고도가 높은 지역임에도 불구하고 잘 익은 스타일의 풍부함을 갖춘 와인이 만들어집니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "칸티나 트라민",
    "grapeNames": []
  },
  {
    "slug": "cantina-tramin-3",
    "nameKo": "Cantina Tramin",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "알토 아디제(Alto Adige), 이탈리아",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 12,
    "foodPairing": "[]",
    "description": "(Trentino-Alto Adige) : Trentino-Alto Adige는 이탈리아 최북단의 와인 산지로 오스트리아와 국경을 접합니다. 지리상 남쪽이 Trentino, 북쪽이 Alto Adige 지역이며, Alto Adige 지역이 1919년 이전에는 오스트리아-헝가리 제국의 일부였기에 현지에서는 독일어인 Südtirol로 부릅니다. 북위 46도로 부르고뉴 위도와 동일하지만 기후 차이가 존재합니다. 가파른 산에 둘러 쌓인 계곡 바닥은 여름 아침에 빠르게 가열되어 포도밭의 경사면을 따뜻하게 만들어 동일 위도 상의 타 지역과 비교했을 때, 고도가 높은 지역임에도 불구하고 잘 익은 스타일의 풍부함을 갖춘 와인이 만들어집니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "칸티나 트라민",
    "grapeNames": []
  },
  {
    "slug": "cantina-tramin-4",
    "nameKo": "Cantina Tramin",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "알토 아디제(Alto Adige), 이탈리아",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 12,
    "foodPairing": "[]",
    "description": "(Trentino-Alto Adige) : Trentino-Alto Adige는 이탈리아 최북단의 와인 산지로 오스트리아와 국경을 접합니다. 지리상 남쪽이 Trentino, 북쪽이 Alto Adige 지역이며, Alto Adige 지역이 1919년 이전에는 오스트리아-헝가리 제국의 일부였기에 현지에서는 독일어인 Südtirol로 부릅니다. 북위 46도로 부르고뉴 위도와 동일하지만 기후 차이가 존재합니다. 가파른 산에 둘러 쌓인 계곡 바닥은 여름 아침에 빠르게 가열되어 포도밭의 경사면을 따뜻하게 만들어 동일 위도 상의 타 지역과 비교했을 때, 고도가 높은 지역임에도 불구하고 잘 익은 스타일의 풍부함을 갖춘 와인이 만들어집니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "칸티나 트라민",
    "grapeNames": []
  },
  {
    "slug": "cantina-tramin-5",
    "nameKo": "Cantina Tramin",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "알토 아디제(Alto Adige), 이탈리아",
    "volume": 750,
    "servingTempMin": 8,
    "servingTempMax": 10,
    "foodPairing": "[]",
    "description": "(Trentino-Alto Adige) : Trentino-Alto Adige는 이탈리아 최북단의 와인 산지로 오스트리아와 국경을 접합니다. 지리상 남쪽이 Trentino, 북쪽이 Alto Adige 지역이며, Alto Adige 지역이 1919년 이전에는 오스트리아-헝가리 제국의 일부였기에 현지에서는 독일어인 Südtirol로 부릅니다. 북위 46도로 부르고뉴 위도와 동일하지만 기후 차이가 존재합니다. 가파른 산에 둘러 쌓인 계곡 바닥은 여름 아침에 빠르게 가열되어 포도밭의 경사면을 따뜻하게 만들어 동일 위도 상의 타 지역과 비교했을 때, 고도가 높은 지역임에도 불구하고 잘 익은 스타일의 풍부함을 갖춘 와인이 만들어집니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "칸티나 트라민",
    "grapeNames": []
  },
  {
    "slug": "cantina-tramin-6",
    "nameKo": "Cantina Tramin",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "알토 아디제(Alto Adige), 이탈리아",
    "volume": 750,
    "servingTempMin": 8,
    "servingTempMax": 10,
    "foodPairing": "[]",
    "description": "(Trentino-Alto Adige) : Trentino-Alto Adige는 이탈리아 최북단의 와인 산지로 오스트리아와 국경을 접합니다. 지리상 남쪽이 Trentino, 북쪽이 Alto Adige 지역이며, Alto Adige 지역이 1919년 이전에는 오스트리아-헝가리 제국의 일부였기에 현지에서는 독일어인 Südtirol로 부릅니다. 북위 46도로 부르고뉴 위도와 동일하지만 기후 차이가 존재합니다. 가파른 산에 둘러 쌓인 계곡 바닥은 여름 아침에 빠르게 가열되어 포도밭의 경사면을 따뜻하게 만들어 동일 위도 상의 타 지역과 비교했을 때, 고도가 높은 지역임에도 불구하고 잘 익은 스타일의 풍부함을 갖춘 와인이 만들어집니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "칸티나 트라민",
    "grapeNames": []
  },
  {
    "slug": "cantina-tramin-7",
    "nameKo": "Cantina Tramin",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "알토 아디제(Alto Adige), 이탈리아",
    "volume": 750,
    "servingTempMin": 12,
    "servingTempMax": 14,
    "foodPairing": "[]",
    "description": "(Trentino-Alto Adige) : Trentino-Alto Adige는 이탈리아 최북단의 와인 산지로 오스트리아와 국경을 접합니다. 지리상 남쪽이 Trentino, 북쪽이 Alto Adige 지역이며, Alto Adige 지역이 1919년 이전에는 오스트리아-헝가리 제국의 일부였기에 현지에서는 독일어인 Südtirol로 부릅니다. 북위 46도로 부르고뉴 위도와 동일하지만 기후 차이가 존재합니다. 가파른 산에 둘러 쌓인 계곡 바닥은 여름 아침에 빠르게 가열되어 포도밭의 경사면을 따뜻하게 만들어 동일 위도 상의 타 지역과 비교했을 때, 고도가 높은 지역임에도 불구하고 잘 익은 스타일의 풍부함을 갖춘 와인이 만들어집니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "칸티나 트라민",
    "grapeNames": []
  },
  {
    "slug": "cantina-tramin-8",
    "nameKo": "Cantina Tramin",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "알토 아디제(Alto Adige), 이탈리아",
    "volume": 750,
    "servingTempMin": 12,
    "servingTempMax": 14,
    "foodPairing": "[]",
    "description": "(Trentino-Alto Adige) : Trentino-Alto Adige는 이탈리아 최북단의 와인 산지로 오스트리아와 국경을 접합니다. 지리상 남쪽이 Trentino, 북쪽이 Alto Adige 지역이며, Alto Adige 지역이 1919년 이전에는 오스트리아-헝가리 제국의 일부였기에 현지에서는 독일어인 Südtirol로 부릅니다. 북위 46도로 부르고뉴 위도와 동일하지만 기후 차이가 존재합니다. 가파른 산에 둘러 쌓인 계곡 바닥은 여름 아침에 빠르게 가열되어 포도밭의 경사면을 따뜻하게 만들어 동일 위도 상의 타 지역과 비교했을 때, 고도가 높은 지역임에도 불구하고 잘 익은 스타일의 풍부함을 갖춘 와인이 만들어집니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "칸티나 트라민",
    "grapeNames": [
      "누스바우머(Nussbaumer)는 이탈리아에서 가장 많은 상을 받은 게뷔르츠트라미너(Gewürztraminer)이며",
      "게뷔르츠트라미너 포도품종 특유의 우아함을 가장 잘 표현한 와인으로 평가받고 있습니다."
    ]
  },
  {
    "slug": "cantina-tramin-9",
    "nameKo": "Cantina Tramin",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "알토 아디제(Alto Adige), 이탈리아",
    "volume": 750,
    "servingTempMin": 8,
    "servingTempMax": 10,
    "foodPairing": "[]",
    "description": "(Trentino-Alto Adige) : Trentino-Alto Adige는 이탈리아 최북단의 와인 산지로 오스트리아와 국경을 접합니다. 지리상 남쪽이 Trentino, 북쪽이 Alto Adige 지역이며, Alto Adige 지역이 1919년 이전에는 오스트리아-헝가리 제국의 일부였기에 현지에서는 독일어인 Südtirol로 부릅니다. 북위 46도로 부르고뉴 위도와 동일하지만 기후 차이가 존재합니다. 가파른 산에 둘러 쌓인 계곡 바닥은 여름 아침에 빠르게 가열되어 포도밭의 경사면을 따뜻하게 만들어 동일 위도 상의 타 지역과 비교했을 때, 고도가 높은 지역임에도 불구하고 잘 익은 스타일의 풍부함을 갖춘 와인이 만들어집니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "칸티나 트라민",
    "grapeNames": []
  },
  {
    "slug": "cantina-tramin-10",
    "nameKo": "Cantina Tramin",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "알토 아디제(Alto Adige), 이탈리아",
    "volume": 750,
    "servingTempMin": 12,
    "servingTempMax": 14,
    "foodPairing": "[]",
    "description": "(Trentino-Alto Adige) : Trentino-Alto Adige는 이탈리아 최북단의 와인 산지로 오스트리아와 국경을 접합니다. 지리상 남쪽이 Trentino, 북쪽이 Alto Adige 지역이며, Alto Adige 지역이 1919년 이전에는 오스트리아-헝가리 제국의 일부였기에 현지에서는 독일어인 Südtirol로 부릅니다. 북위 46도로 부르고뉴 위도와 동일하지만 기후 차이가 존재합니다. 가파른 산에 둘러 쌓인 계곡 바닥은 여름 아침에 빠르게 가열되어 포도밭의 경사면을 따뜻하게 만들어 동일 위도 상의 타 지역과 비교했을 때, 고도가 높은 지역임에도 불구하고 잘 익은 스타일의 풍부함을 갖춘 와인이 만들어집니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "칸티나 트라민",
    "grapeNames": []
  },
  {
    "slug": "cantina-tramin-11",
    "nameKo": "Cantina Tramin",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "알토 아디제(Alto Adige), 이탈리아",
    "volume": 750,
    "servingTempMin": 12,
    "servingTempMax": 14,
    "foodPairing": "[]",
    "description": "(Trentino-Alto Adige) : Trentino-Alto Adige는 이탈리아 최북단의 와인 산지로 오스트리아와 국경을 접합니다. 지리상 남쪽이 Trentino, 북쪽이 Alto Adige 지역이며, Alto Adige 지역이 1919년 이전에는 오스트리아-헝가리 제국의 일부였기에 현지에서는 독일어인 Südtirol로 부릅니다. 북위 46도로 부르고뉴 위도와 동일하지만 기후 차이가 존재합니다. 가파른 산에 둘러 쌓인 계곡 바닥은 여름 아침에 빠르게 가열되어 포도밭의 경사면을 따뜻하게 만들어 동일 위도 상의 타 지역과 비교했을 때, 고도가 높은 지역임에도 불구하고 잘 익은 스타일의 풍부함을 갖춘 와인이 만들어집니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "칸티나 트라민",
    "grapeNames": []
  },
  {
    "slug": "wine-22",
    "nameKo": "카스텔로 디 퀘르체토는 ‘참나무 숲속의 성’을 의미하는데 실제 그레베 마을은 아름다운 참나무 숲과 올리브 나무가 무성하며 또한 중세풍의 망루가 세워져 있어 매우 고풍스런 자태를 자랑하고 있습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나 (Toscana) - 이태리",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "끼안티가 국제적 인기를 끌자 본래 끼안티가 아닌 지역이 끼안티란 이름을 사용해 본질을 훼손하는 일이 늘자, 원조 끼안티를 뜻하는 ‘끼안티 클라시코’ 지역 생산자들이 검은 수탉을 문장으로 사용하는 ‘끼안티 클라시코 콘소시움’을 결성해 와인의 품질과 가치를 높이려는 활동을 하고 있는데, 카스텔로 디 퀘르체토는 이 콘소시움의 창립멤버이며 대표적 와이너리입니다. 카스텔로 디 퀘르체토는 평이한 와인부터 지역을 대표하는 최상품에 이르는 다양한 와인을 생산하는데, 특히 끼안티 클라시코 리제르바는 전통을 지키면서도 현대 소비자의 취향에 부합하는 매우 질 높은 와인으로 인기가 높습니다. 하지만 이들의 진수는 서로 다른 떼루아를 지닌 4개의 매우 작은 단일포도밭에서 만들어지는 싱글 빈야드(Single Vineyard) 와인들로서 그 희소성과 우수한 품질로 국제적 명성을 확고히 하고 있습니다. 이 와인은 그리스 로마 신화 속 신 제우스(Zeus)와 인간 세멜레(Semele) 간의 사랑(romance)을 모티브로 하고 있으며, 이 둘 사이에 잉태된 디오니소스(Dionysus)가 태어난 곳이 바로 이 와인을 생산하는 포도밭이 위치한 곳입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "1897년 프랑스계 이주민인 프랑수아(Francois) 가문이  설립한 이 포도원은 토스카나(Toscana) 및 이태리 전체에서 가장 잘 알려진 끼안티(Chianti) 와인이 생산되는 지역 중 자갈이 풍부한 그레베(Greve) 마을에 위치하고 있습니다.",
    "grapeNames": []
  },
  {
    "slug": "wine-23",
    "nameKo": "카스텔로 디 퀘르체토는 ‘참나무 숲속의 성’을 의미하는데 실제 그레베 마을은 아름다운 참나무 숲과 올리브 나무가 무성하며 또한 중세풍의 망루가 세워져 있어 매우 고풍스런 자태를 자랑하고 있습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나(Toscana) - 이태리",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "끼안티가 국제적 인기를 끌자 본래 끼안티가 아닌 지역이 끼안티란 이름을 사용해 본질을 훼손하는 일이 늘자, 원조 끼안티를 뜻하는 ‘끼안티 클라시코’ 지역 생산자들이 검은 수탉을 문장으로 사용하는 ‘끼안티 클라시코 콘소시움’을 결성해 와인의 품질과 가치를 높이려는 활동을 하고 있는데, 카스텔로 디 퀘르체토는 이 콘소시움의 창립멤버이며 대표적 와이너리입니다. 카스텔로 디 퀘르체토는 평이한 와인부터 지역을 대표하는 최상품에 이르는 다양한 와인을 생산하는데, 특히 끼안티 클라시코 리제르바는 전통을 지키면서도 현대 소비자의 취향에 부합하는 매우 질 높은 와인으로 인기가 높습니다. 하지만 이들의 진수는 서로 다른 떼루아를 지닌 4개의 매우 작은 단일포도밭에서 만들어지는 싱글 빈야드(Single Vineyard) 와인들로서 그 희소성과 우수한 품질로 국제적 명성을 확고히 하고 있습니다. Castello di Querceto Cignale",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "1897년 프랑스계 이주민인 프랑수아(Francois) 가문이  설립한 이 포도원은 토스카나(Toscana) 및 이태리 전체에서 가장 잘 알려진 끼안티(Chianti) 와인이 생산되는 지역 중 자갈이 풍부한 그레베(Greve) 마을에 위치하고 있습니다.",
    "grapeNames": [
      "치냘레는 이태리어로 “야생 멧돼지”라는 뜻으로 퀘르체토가 생산하는 수퍼 투스칸급의 와인입니다. 국제 품종인 카버네 소비뇽과 멀롯을 블랜딩하여 만들고 6본입 케이스에 각각 다른 6개의 멧돼지 드로잉을 라벨에서 잘 보여줍니다."
    ]
  },
  {
    "slug": "wine-24",
    "nameKo": "카스텔로 디 퀘르체토는 ‘참나무 숲속의 성’을 의미하는데 실제 그레베 마을은 아름다운 참나무 숲과 올리브 나무가 무성하며 또한 중세풍의 망루가 세워져 있어 매우 고풍스런 자태를 자랑하고 있습니다.",
    "nameEn": "",
    "type": "white",
    "country": "Italy",
    "regionL1": "토스카나(Toscana) – 이태리",
    "volume": 750,
    "servingTempMin": 18,
    "servingTempMax": 20,
    "foodPairing": "[]",
    "description": "끼안티가 국제적 인기를 끌자 본래 끼안티가 아닌 지역이 끼안티란 이름을 사용해 본질을 훼손하는 일이 늘자, 원조 끼안티를 뜻하는 ‘끼안티 클라시코’ 지역 생산자들이 검은 수탉을 문장으로 사용하는 ‘끼안티 클라시코 콘소시움’을 결성해 와인의 품질과 가치를 높이려는 활동을 하고 있는데, 카스텔로 디 퀘르체토는 이 콘소시움의 창립멤버이며 대표적 와이너리입니다. 카스텔로 디 퀘르체토는 평이한 와인부터 지역을 대표하는 최상품에 이르는 다양한 와인을 생산하는데, 특히 끼안티 클라시코 리제르바는 전통을 지키면서도 현대 소비자의 취향에 부합하는 매우 질 높은 와인으로 인기가 높습니다. 하지만 이들의 진수는 서로 다른 떼루아를 지닌 4개의 매우 작은 단일포도밭에서 만들어지는 싱글 빈야드(Single Vineyard) 와인들로서 그 희소성과 우수한 품질로 국제적 명성을 확고히 하고 있습니다. 깊고 우아함의 대명사인 이 와인은 플로랄, 레드베리, 야생 허브와 함께 복합적이고 우아한 향기를 내 뿜습니다. 입 안에서는 드라이하면서 관능적인 느낌이 상당히 개성적으로 느껴지는 와인으로 풍부한 풍미, 부드러운 탄닌은 와인을 특히 감미롭게 만듭니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "1897년 프랑스계 이주민인 프랑수아(Francois) 가문이  설립한 이 포도원은 토스카나(Toscana) 및 이태리 전체에서 가장 잘 알려진 끼안티(Chianti) 와인이 생산되는 지역 중 자갈이 풍부한 그레베(Greve) 마을에 위치하고 있습니다.",
    "grapeNames": []
  },
  {
    "slug": "wine-25",
    "nameKo": "카스텔로 디 퀘르체토는 ‘참나무 숲속의 성’을 의미하는데 실제 그레베 마을은 아름다운 참나무 숲과 올리브 나무가 무성하며 또한 중세풍의 망루가 세워져 있어 매우 고풍스런 자태를 자랑하고 있습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나(Toscana) – 이태리",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "끼안티가 국제적 인기를 끌자 본래 끼안티가 아닌 지역이 끼안티란 이름을 사용해 본질을 훼손하는 일이 늘자, 원조 끼안티를 뜻하는 ‘끼안티 클라시코’ 지역 생산자들이 검은 수탉을 문장으로 사용하는 ‘끼안티 클라시코 콘소시움’을 결성해 와인의 품질과 가치를 높이려는 활동을 하고 있는데, 카스텔로 디 퀘르체토는 이 콘소시움의 창립멤버이며 대표적 와이너리입니다. 카스텔로 디 퀘르체토는 평이한 와인부터 지역을 대표하는 최상품에 이르는 다양한 와인을 생산하는데, 특히 끼안티 클라시코 리제르바는 전통을 지키면서도 현대 소비자의 취향에 부합하는 매우 질 높은 와인으로 인기가 높습니다. 하지만 이들의 진수는 서로 다른 떼루아를 지닌 4개의 매우 작은 단일포도밭에서 만들어지는 싱글 빈야드(Single Vineyard) 와인들로서 그 희소성과 우수한 품질로 국제적 명성을 확고히 하고 있습니다. 끼안티 클라시코 그란 셀레지오네 “일 피키오＂",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "1897년 프랑스계 이주민인 프랑수아(Francois) 가문이  설립한 이 포도원은 토스카나(Toscana) 및 이태리 전체에서 가장 잘 알려진 끼안티(Chianti) 와인이 생산되는 지역 중 자갈이 풍부한 그레베(Greve) 마을에 위치하고 있습니다.",
    "grapeNames": []
  },
  {
    "slug": "wine-26",
    "nameKo": "카스텔로 디 퀘르체토는 ‘참나무 숲속의 성’을 의미하는데 실제 그레베 마을은 아름다운 참나무 숲과 올리브 나무가 무성하며 또한 중세풍의 망루가 세워져 있어 매우 고풍스런 자태를 자랑하고 있습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나(Toscana) – 이태리",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "끼안티가 국제적 인기를 끌자 본래 끼안티가 아닌 지역이 끼안티란 이름을 사용해 본질을 훼손하는 일이 늘자, 원조 끼안티를 뜻하는 ‘끼안티 클라시코’ 지역 생산자들이 검은 수탉을 문장으로 사용하는 ‘끼안티 클라시코 콘소시움’을 결성해 와인의 품질과 가치를 높이려는 활동을 하고 있는데, 카스텔로 디 퀘르체토는 이 콘소시움의 창립멤버이며 대표적 와이너리입니다. 카스텔로 디 퀘르체토는 평이한 와인부터 지역을 대표하는 최상품에 이르는 다양한 와인을 생산하는데, 특히 끼안티 클라시코 리제르바는 전통을 지키면서도 현대 소비자의 취향에 부합하는 매우 질 높은 와인으로 인기가 높습니다. 하지만 이들의 진수는 서로 다른 떼루아를 지닌 4개의 매우 작은 단일포도밭에서 만들어지는 싱글 빈야드(Single Vineyard) 와인들로서 그 희소성과 우수한 품질로 국제적 명성을 확고히 하고 있습니다. 투명도가 좋은 밝은 루비 빛의 레드 와인으로 여러 가지 과일 향과 신선한 체리, 후추 등의 Spicy한 향들이 조화를 이루고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "1897년 프랑스계 이주민인 프랑수아(Francois) 가문이  설립한 이 포도원은 토스카나(Toscana) 및 이태리 전체에서 가장 잘 알려진 끼안티(Chianti) 와인이 생산되는 지역 중 자갈이 풍부한 그레베(Greve) 마을에 위치하고 있습니다.",
    "grapeNames": []
  },
  {
    "slug": "wine-27",
    "nameKo": "카스텔로 디 퀘르체토는 ‘참나무 숲속의 성’을 의미하는데 실제 그레베 마을은 아름다운 참나무 숲과 올리브 나무가 무성하며 또한 중세풍의 망루가 세워져 있어 매우 고풍스런 자태를 자랑하고 있습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나(Toscana) - 이태리",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "끼안티가 국제적 인기를 끌자 본래 끼안티가 아닌 지역이 끼안티란 이름을 사용해 본질을 훼손하는 일이 늘자, 원조 끼안티를 뜻하는 ‘끼안티 클라시코’ 지역 생산자들이 검은 수탉을 문장으로 사용하는 ‘끼안티 클라시코 콘소시움’을 결성해 와인의 품질과 가치를 높이려는 활동을 하고 있는데, 카스텔로 디 퀘르체토는 이 콘소시움의 창립멤버이며 대표적 와이너리입니다. 카스텔로 디 퀘르체토는 평이한 와인부터 지역을 대표하는 최상품에 이르는 다양한 와인을 생산하는데, 특히 끼안티 클라시코 리제르바는 전통을 지키면서도 현대 소비자의 취향에 부합하는 매우 질 높은 와인으로 인기가 높습니다. 하지만 이들의 진수는 서로 다른 떼루아를 지닌 4개의 매우 작은 단일포도밭에서 만들어지는 싱글 빈야드(Single Vineyard) 와인들로서 그 희소성과 우수한 품질로 국제적 명성을 확고히 하고 있습니다. Chianti Classico Riserva",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "1897년 프랑스계 이주민인 프랑수아(Francois) 가문이  설립한 이 포도원은 토스카나(Toscana) 및 이태리 전체에서 가장 잘 알려진 끼안티(Chianti) 와인이 생산되는 지역 중 자갈이 풍부한 그레베(Greve) 마을에 위치하고 있습니다.",
    "grapeNames": []
  },
  {
    "slug": "wine-28",
    "nameKo": "카스텔로 디 퀘르체토는 ‘참나무 숲속의 성’을 의미하는데 실제 그레베 마을은 아름다운 참나무 숲과 올리브 나무가 무성하며 또한 중세풍의 망루가 세워져 있어 매우 고풍스런 자태를 자랑하고 있습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나(Toscana) - 이태리",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 17,
    "foodPairing": "[]",
    "description": "끼안티가 국제적 인기를 끌자 본래 끼안티가 아닌 지역이 끼안티란 이름을 사용해 본질을 훼손하는 일이 늘자, 원조 끼안티를 뜻하는 ‘끼안티 클라시코’ 지역 생산자들이 검은 수탉을 문장으로 사용하는 ‘끼안티 클라시코 콘소시움’을 결성해 와인의 품질과 가치를 높이려는 활동을 하고 있는데, 카스텔로 디 퀘르체토는 이 콘소시움의 창립멤버이며 대표적 와이너리입니다. 카스텔로 디 퀘르체토는 평이한 와인부터 지역을 대표하는 최상품에 이르는 다양한 와인을 생산하는데, 특히 끼안티 클라시코 리제르바는 전통을 지키면서도 현대 소비자의 취향에 부합하는 매우 질 높은 와인으로 인기가 높습니다. 하지만 이들의 진수는 서로 다른 떼루아를 지닌 4개의 매우 작은 단일포도밭에서 만들어지는 싱글 빈야드(Single Vineyard) 와인들로서 그 희소성과 우수한 품질로 국제적 명성을 확고히 하고 있습니다. 퀘르체토의 가장 기본적인 와인으로 깔끔하고 신선한 붉은 과일 풍미를 지니고 있지만 특히 딸기 느낌이 인상적입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "1897년 프랑스계 이주민인 프랑수아(Francois) 가문이  설립한 이 포도원은 토스카나(Toscana) 및 이태리 전체에서 가장 잘 알려진 끼안티(Chianti) 와인이 생산되는 지역 중 자갈이 풍부한 그레베(Greve) 마을에 위치하고 있습니다.",
    "grapeNames": []
  },
  {
    "slug": "wine-29",
    "nameKo": "카스텔로 디 퀘르체토는 ‘참나무 숲속의 성’을 의미하는데 실제 그레베 마을은 아름다운 참나무 숲과 올리브 나무가 무성하며 또한 중세풍의 망루가 세워져 있어 매우 고풍스런 자태를 자랑하고 있습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나(Toscana) - 이태리",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 11,
    "foodPairing": "[]",
    "description": "끼안티가 국제적 인기를 끌자 본래 끼안티가 아닌 지역이 끼안티란 이름을 사용해 본질을 훼손하는 일이 늘자, 원조 끼안티를 뜻하는 ‘끼안티 클라시코’ 지역 생산자들이 검은 수탉을 문장으로 사용하는 ‘끼안티 클라시코 콘소시움’을 결성해 와인의 품질과 가치를 높이려는 활동을 하고 있는데, 카스텔로 디 퀘르체토는 이 콘소시움의 창립멤버이며 대표적 와이너리입니다. 카스텔로 디 퀘르체토는 평이한 와인부터 지역을 대표하는 최상품에 이르는 다양한 와인을 생산하는데, 특히 끼안티 클라시코 리제르바는 전통을 지키면서도 현대 소비자의 취향에 부합하는 매우 질 높은 와인으로 인기가 높습니다. 하지만 이들의 진수는 서로 다른 떼루아를 지닌 4개의 매우 작은 단일포도밭에서 만들어지는 싱글 빈야드(Single Vineyard) 와인들로서 그 희소성과 우수한 품질로 국제적 명성을 확고히 하고 있습니다. Vernaccia di San Gimignano",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "1897년 프랑스계 이주민인 프랑수아(Francois) 가문이  설립한 이 포도원은 토스카나(Toscana) 및 이태리 전체에서 가장 잘 알려진 끼안티(Chianti) 와인이 생산되는 지역 중 자갈이 풍부한 그레베(Greve) 마을에 위치하고 있습니다.",
    "grapeNames": [
      "토스카나 지방의 유일한 DOCG 화이트 와인으로 피렌체 남서쪽",
      "중세 분위기를 물씬 풍기는 산 지미냐노 마을에서 자라는 베르나차 품종으로 만듭니다."
    ]
  },
  {
    "slug": "wine-30",
    "nameKo": "카스텔로 디 퀘르체토는 ‘참나무 숲속의 성’을 의미하는데 실제 그레베 마을은 아름다운 참나무 숲과 올리브 나무가 무성하며 또한 중세풍의 망루가 세워져 있어 매우 고풍스런 자태를 자랑하고 있습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나(Toscana) - 이태리",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "끼안티가 국제적 인기를 끌자 본래 끼안티가 아닌 지역이 끼안티란 이름을 사용해 본질을 훼손하는 일이 늘자, 원조 끼안티를 뜻하는 ‘끼안티 클라시코’ 지역 생산자들이 검은 수탉을 문장으로 사용하는 ‘끼안티 클라시코 콘소시움’을 결성해 와인의 품질과 가치를 높이려는 활동을 하고 있는데, 카스텔로 디 퀘르체토는 이 콘소시움의 창립멤버이며 대표적 와이너리입니다. 카스텔로 디 퀘르체토는 평이한 와인부터 지역을 대표하는 최상품에 이르는 다양한 와인을 생산하는데, 특히 끼안티 클라시코 리제르바는 전통을 지키면서도 현대 소비자의 취향에 부합하는 매우 질 높은 와인으로 인기가 높습니다. 하지만 이들의 진수는 서로 다른 떼루아를 지닌 4개의 매우 작은 단일포도밭에서 만들어지는 싱글 빈야드(Single Vineyard) 와인들로서 그 희소성과 우수한 품질로 국제적 명성을 확고히 하고 있습니다. Chianti Classico “Unicorn”",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "1897년 프랑스계 이주민인 프랑수아(Francois) 가문이  설립한 이 포도원은 토스카나(Toscana) 및 이태리 전체에서 가장 잘 알려진 끼안티(Chianti) 와인이 생산되는 지역 중 자갈이 풍부한 그레베(Greve) 마을에 위치하고 있습니다.",
    "grapeNames": []
  },
  {
    "slug": "wine-31",
    "nameKo": "카스텔로 디 퀘르체토는 ‘참나무 숲속의 성’을 의미하는데 실제 그레베 마을은 아름다운 참나무 숲과 올리브 나무가 무성하며 또한 중세풍의 망루가 세워져 있어 매우 고풍스런 자태를 자랑하고 있습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나(Toscana) - 이태리",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 17,
    "foodPairing": "[]",
    "description": "끼안티가 국제적 인기를 끌자 본래 끼안티가 아닌 지역이 끼안티란 이름을 사용해 본질을 훼손하는 일이 늘자, 원조 끼안티를 뜻하는 ‘끼안티 클라시코’ 지역 생산자들이 검은 수탉을 문장으로 사용하는 ‘끼안티 클라시코 콘소시움’을 결성해 와인의 품질과 가치를 높이려는 활동을 하고 있는데, 카스텔로 디 퀘르체토는 이 콘소시움의 창립멤버이며 대표적 와이너리입니다. 카스텔로 디 퀘르체토는 평이한 와인부터 지역을 대표하는 최상품에 이르는 다양한 와인을 생산하는데, 특히 끼안티 클라시코 리제르바는 전통을 지키면서도 현대 소비자의 취향에 부합하는 매우 질 높은 와인으로 인기가 높습니다. 하지만 이들의 진수는 서로 다른 떼루아를 지닌 4개의 매우 작은 단일포도밭에서 만들어지는 싱글 빈야드(Single Vineyard) 와인들로서 그 희소성과 우수한 품질로 국제적 명성을 확고히 하고 있습니다. 새로운 퀘르체토의 토스카나 레드는 신선하고 과실향이 풍부하며 약간의 잔당감이 있어, 마시기 편한 스타일을 선호하는 고객들의 니즈를 반영하여 새로이 리뉴얼되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "1897년 프랑스계 이주민인 프랑수아(Francois) 가문이  설립한 이 포도원은 토스카나(Toscana) 및 이태리 전체에서 가장 잘 알려진 끼안티(Chianti) 와인이 생산되는 지역 중 자갈이 풍부한 그레베(Greve) 마을에 위치하고 있습니다.",
    "grapeNames": [
      "블랙베리",
      "레드베리와 말린 체리의 향이 풍부하게 느껴집니다. 코에서는 로즈마리등의 허브향과 함께 시라(Syrah) 포도품종이 추가되며 스파이시한 맛과 와인에 좀 더 복합미를 더해줍니다. 은은한 바닐라와 오크향이 와인에 깊은 풍미를 주는 퀘르체토의 토스카나 레드 블렌딩 와인입니다."
    ]
  },
  {
    "slug": "wine-32",
    "nameKo": "카스텔로 디 퀘르체토는 ‘참나무 숲속의 성’을 의미하는데 실제 그레베 마을은 아름다운 참나무 숲과 올리브 나무가 무성하며 또한 중세풍의 망루가 세워져 있어 매우 고풍스런 자태를 자랑하고 있습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나 (Toscana) - 이태리",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "끼안티가 국제적 인기를 끌자 본래 끼안티가 아닌 지역이 끼안티란 이름을 사용해 본질을 훼손하는 일이 늘자, 원조 끼안티를 뜻하는 ‘끼안티 클라시코’ 지역 생산자들이 검은 수탉을 문장으로 사용하는 ‘끼안티 클라시코 콘소시움’을 결성해 와인의 품질과 가치를 높이려는 활동을 하고 있는데, 카스텔로 디 퀘르체토는 이 콘소시움의 창립멤버이며 대표적 와이너리입니다. 카스텔로 디 퀘르체토는 평이한 와인부터 지역을 대표하는 최상품에 이르는 다양한 와인을 생산하는데, 특히 끼안티 클라시코 리제르바는 전통을 지키면서도 현대 소비자의 취향에 부합하는 매우 질 높은 와인으로 인기가 높습니다. 하지만 이들의 진수는 서로 다른 떼루아를 지닌 4개의 매우 작은 단일포도밭에서 만들어지는 싱글 빈야드(Single Vineyard) 와인들로서 그 희소성과 우수한 품질로 국제적 명성을 확고히 하고 있습니다. 이 와인은 그리스 로마 신화 속 신 제우스(Zeus)와 인간 세멜레(Semele) 간의 사랑(romance)을 모티브로 하고 있으며, 이 둘 사이에 잉태된 디오니소스(Dionysus)가 태어난 곳이 바로 이 와인을 생산하는 포도밭이 위치한 곳입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "1897년 프랑스계 이주민인 프랑수아(Francois) 가문이  설립한 이 포도원은 토스카나(Toscana) 및 이태리 전체에서 가장 잘 알려진 끼안티(Chianti) 와인이 생산되는 지역 중 자갈이 풍부한 그레베(Greve) 마을에 위치하고 있습니다.",
    "grapeNames": []
  },
  {
    "slug": "wine-33",
    "nameKo": "카스텔로 디 퀘르체토는 ‘참나무 숲속의 성’을 의미하는데 실제 그레베 마을은 아름다운 참나무 숲과 올리브 나무가 무성하며 또한 중세풍의 망루가 세워져 있어 매우 고풍스런 자태를 자랑하고 있습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나(Toscana) - 이태리",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "끼안티가 국제적 인기를 끌자 본래 끼안티가 아닌 지역이 끼안티란 이름을 사용해 본질을 훼손하는 일이 늘자, 원조 끼안티를 뜻하는 ‘끼안티 클라시코’ 지역 생산자들이 검은 수탉을 문장으로 사용하는 ‘끼안티 클라시코 콘소시움’을 결성해 와인의 품질과 가치를 높이려는 활동을 하고 있는데, 카스텔로 디 퀘르체토는 이 콘소시움의 창립멤버이며 대표적 와이너리입니다. 카스텔로 디 퀘르체토는 평이한 와인부터 지역을 대표하는 최상품에 이르는 다양한 와인을 생산하는데, 특히 끼안티 클라시코 리제르바는 전통을 지키면서도 현대 소비자의 취향에 부합하는 매우 질 높은 와인으로 인기가 높습니다. 하지만 이들의 진수는 서로 다른 떼루아를 지닌 4개의 매우 작은 단일포도밭에서 만들어지는 싱글 빈야드(Single Vineyard) 와인들로서 그 희소성과 우수한 품질로 국제적 명성을 확고히 하고 있습니다. Castello di Querceto Cignale",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "1897년 프랑스계 이주민인 프랑수아(Francois) 가문이  설립한 이 포도원은 토스카나(Toscana) 및 이태리 전체에서 가장 잘 알려진 끼안티(Chianti) 와인이 생산되는 지역 중 자갈이 풍부한 그레베(Greve) 마을에 위치하고 있습니다.",
    "grapeNames": [
      "치냘레는 이태리어로 “야생 멧돼지”라는 뜻으로 퀘르체토가 생산하는 수퍼 투스칸급의 와인입니다. 국제 품종인 카버네 소비뇽과 멀롯을 블랜딩하여 만들고 6본입 케이스에 각각 다른 6개의 멧돼지 드로잉을 라벨에서 잘 보여줍니다."
    ]
  },
  {
    "slug": "wine-34",
    "nameKo": "카스텔로 디 퀘르체토는 ‘참나무 숲속의 성’을 의미하는데 실제 그레베 마을은 아름다운 참나무 숲과 올리브 나무가 무성하며 또한 중세풍의 망루가 세워져 있어 매우 고풍스런 자태를 자랑하고 있습니다.",
    "nameEn": "",
    "type": "white",
    "country": "Italy",
    "regionL1": "토스카나(Toscana) – 이태리",
    "volume": 750,
    "servingTempMin": 18,
    "servingTempMax": 20,
    "foodPairing": "[]",
    "description": "끼안티가 국제적 인기를 끌자 본래 끼안티가 아닌 지역이 끼안티란 이름을 사용해 본질을 훼손하는 일이 늘자, 원조 끼안티를 뜻하는 ‘끼안티 클라시코’ 지역 생산자들이 검은 수탉을 문장으로 사용하는 ‘끼안티 클라시코 콘소시움’을 결성해 와인의 품질과 가치를 높이려는 활동을 하고 있는데, 카스텔로 디 퀘르체토는 이 콘소시움의 창립멤버이며 대표적 와이너리입니다. 카스텔로 디 퀘르체토는 평이한 와인부터 지역을 대표하는 최상품에 이르는 다양한 와인을 생산하는데, 특히 끼안티 클라시코 리제르바는 전통을 지키면서도 현대 소비자의 취향에 부합하는 매우 질 높은 와인으로 인기가 높습니다. 하지만 이들의 진수는 서로 다른 떼루아를 지닌 4개의 매우 작은 단일포도밭에서 만들어지는 싱글 빈야드(Single Vineyard) 와인들로서 그 희소성과 우수한 품질로 국제적 명성을 확고히 하고 있습니다. 깊고 우아함의 대명사인 이 와인은 플로랄, 레드베리, 야생 허브와 함께 복합적이고 우아한 향기를 내 뿜습니다. 입 안에서는 드라이하면서 관능적인 느낌이 상당히 개성적으로 느껴지는 와인으로 풍부한 풍미, 부드러운 탄닌은 와인을 특히 감미롭게 만듭니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "1897년 프랑스계 이주민인 프랑수아(Francois) 가문이  설립한 이 포도원은 토스카나(Toscana) 및 이태리 전체에서 가장 잘 알려진 끼안티(Chianti) 와인이 생산되는 지역 중 자갈이 풍부한 그레베(Greve) 마을에 위치하고 있습니다.",
    "grapeNames": []
  },
  {
    "slug": "wine-35",
    "nameKo": "카스텔로 디 퀘르체토는 ‘참나무 숲속의 성’을 의미하는데 실제 그레베 마을은 아름다운 참나무 숲과 올리브 나무가 무성하며 또한 중세풍의 망루가 세워져 있어 매우 고풍스런 자태를 자랑하고 있습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나(Toscana) – 이태리",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "끼안티가 국제적 인기를 끌자 본래 끼안티가 아닌 지역이 끼안티란 이름을 사용해 본질을 훼손하는 일이 늘자, 원조 끼안티를 뜻하는 ‘끼안티 클라시코’ 지역 생산자들이 검은 수탉을 문장으로 사용하는 ‘끼안티 클라시코 콘소시움’을 결성해 와인의 품질과 가치를 높이려는 활동을 하고 있는데, 카스텔로 디 퀘르체토는 이 콘소시움의 창립멤버이며 대표적 와이너리입니다. 카스텔로 디 퀘르체토는 평이한 와인부터 지역을 대표하는 최상품에 이르는 다양한 와인을 생산하는데, 특히 끼안티 클라시코 리제르바는 전통을 지키면서도 현대 소비자의 취향에 부합하는 매우 질 높은 와인으로 인기가 높습니다. 하지만 이들의 진수는 서로 다른 떼루아를 지닌 4개의 매우 작은 단일포도밭에서 만들어지는 싱글 빈야드(Single Vineyard) 와인들로서 그 희소성과 우수한 품질로 국제적 명성을 확고히 하고 있습니다. 끼안티 클라시코 그란 셀레지오네 “일 피키오＂",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "1897년 프랑스계 이주민인 프랑수아(Francois) 가문이  설립한 이 포도원은 토스카나(Toscana) 및 이태리 전체에서 가장 잘 알려진 끼안티(Chianti) 와인이 생산되는 지역 중 자갈이 풍부한 그레베(Greve) 마을에 위치하고 있습니다.",
    "grapeNames": []
  },
  {
    "slug": "wine-36",
    "nameKo": "카스텔로 디 퀘르체토는 ‘참나무 숲속의 성’을 의미하는데 실제 그레베 마을은 아름다운 참나무 숲과 올리브 나무가 무성하며 또한 중세풍의 망루가 세워져 있어 매우 고풍스런 자태를 자랑하고 있습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나(Toscana) – 이태리",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "끼안티가 국제적 인기를 끌자 본래 끼안티가 아닌 지역이 끼안티란 이름을 사용해 본질을 훼손하는 일이 늘자, 원조 끼안티를 뜻하는 ‘끼안티 클라시코’ 지역 생산자들이 검은 수탉을 문장으로 사용하는 ‘끼안티 클라시코 콘소시움’을 결성해 와인의 품질과 가치를 높이려는 활동을 하고 있는데, 카스텔로 디 퀘르체토는 이 콘소시움의 창립멤버이며 대표적 와이너리입니다. 카스텔로 디 퀘르체토는 평이한 와인부터 지역을 대표하는 최상품에 이르는 다양한 와인을 생산하는데, 특히 끼안티 클라시코 리제르바는 전통을 지키면서도 현대 소비자의 취향에 부합하는 매우 질 높은 와인으로 인기가 높습니다. 하지만 이들의 진수는 서로 다른 떼루아를 지닌 4개의 매우 작은 단일포도밭에서 만들어지는 싱글 빈야드(Single Vineyard) 와인들로서 그 희소성과 우수한 품질로 국제적 명성을 확고히 하고 있습니다. 투명도가 좋은 밝은 루비 빛의 레드 와인으로 여러 가지 과일 향과 신선한 체리, 후추 등의 Spicy한 향들이 조화를 이루고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "1897년 프랑스계 이주민인 프랑수아(Francois) 가문이  설립한 이 포도원은 토스카나(Toscana) 및 이태리 전체에서 가장 잘 알려진 끼안티(Chianti) 와인이 생산되는 지역 중 자갈이 풍부한 그레베(Greve) 마을에 위치하고 있습니다.",
    "grapeNames": []
  },
  {
    "slug": "wine-37",
    "nameKo": "카스텔로 디 퀘르체토는 ‘참나무 숲속의 성’을 의미하는데 실제 그레베 마을은 아름다운 참나무 숲과 올리브 나무가 무성하며 또한 중세풍의 망루가 세워져 있어 매우 고풍스런 자태를 자랑하고 있습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나(Toscana) - 이태리",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "끼안티가 국제적 인기를 끌자 본래 끼안티가 아닌 지역이 끼안티란 이름을 사용해 본질을 훼손하는 일이 늘자, 원조 끼안티를 뜻하는 ‘끼안티 클라시코’ 지역 생산자들이 검은 수탉을 문장으로 사용하는 ‘끼안티 클라시코 콘소시움’을 결성해 와인의 품질과 가치를 높이려는 활동을 하고 있는데, 카스텔로 디 퀘르체토는 이 콘소시움의 창립멤버이며 대표적 와이너리입니다. 카스텔로 디 퀘르체토는 평이한 와인부터 지역을 대표하는 최상품에 이르는 다양한 와인을 생산하는데, 특히 끼안티 클라시코 리제르바는 전통을 지키면서도 현대 소비자의 취향에 부합하는 매우 질 높은 와인으로 인기가 높습니다. 하지만 이들의 진수는 서로 다른 떼루아를 지닌 4개의 매우 작은 단일포도밭에서 만들어지는 싱글 빈야드(Single Vineyard) 와인들로서 그 희소성과 우수한 품질로 국제적 명성을 확고히 하고 있습니다. Chianti Classico Riserva",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "1897년 프랑스계 이주민인 프랑수아(Francois) 가문이  설립한 이 포도원은 토스카나(Toscana) 및 이태리 전체에서 가장 잘 알려진 끼안티(Chianti) 와인이 생산되는 지역 중 자갈이 풍부한 그레베(Greve) 마을에 위치하고 있습니다.",
    "grapeNames": []
  },
  {
    "slug": "wine-38",
    "nameKo": "카스텔로 디 퀘르체토는 ‘참나무 숲속의 성’을 의미하는데 실제 그레베 마을은 아름다운 참나무 숲과 올리브 나무가 무성하며 또한 중세풍의 망루가 세워져 있어 매우 고풍스런 자태를 자랑하고 있습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나(Toscana) - 이태리",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 17,
    "foodPairing": "[]",
    "description": "끼안티가 국제적 인기를 끌자 본래 끼안티가 아닌 지역이 끼안티란 이름을 사용해 본질을 훼손하는 일이 늘자, 원조 끼안티를 뜻하는 ‘끼안티 클라시코’ 지역 생산자들이 검은 수탉을 문장으로 사용하는 ‘끼안티 클라시코 콘소시움’을 결성해 와인의 품질과 가치를 높이려는 활동을 하고 있는데, 카스텔로 디 퀘르체토는 이 콘소시움의 창립멤버이며 대표적 와이너리입니다. 카스텔로 디 퀘르체토는 평이한 와인부터 지역을 대표하는 최상품에 이르는 다양한 와인을 생산하는데, 특히 끼안티 클라시코 리제르바는 전통을 지키면서도 현대 소비자의 취향에 부합하는 매우 질 높은 와인으로 인기가 높습니다. 하지만 이들의 진수는 서로 다른 떼루아를 지닌 4개의 매우 작은 단일포도밭에서 만들어지는 싱글 빈야드(Single Vineyard) 와인들로서 그 희소성과 우수한 품질로 국제적 명성을 확고히 하고 있습니다. 퀘르체토의 가장 기본적인 와인으로 깔끔하고 신선한 붉은 과일 풍미를 지니고 있지만 특히 딸기 느낌이 인상적입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "1897년 프랑스계 이주민인 프랑수아(Francois) 가문이  설립한 이 포도원은 토스카나(Toscana) 및 이태리 전체에서 가장 잘 알려진 끼안티(Chianti) 와인이 생산되는 지역 중 자갈이 풍부한 그레베(Greve) 마을에 위치하고 있습니다.",
    "grapeNames": []
  },
  {
    "slug": "wine-39",
    "nameKo": "카스텔로 디 퀘르체토는 ‘참나무 숲속의 성’을 의미하는데 실제 그레베 마을은 아름다운 참나무 숲과 올리브 나무가 무성하며 또한 중세풍의 망루가 세워져 있어 매우 고풍스런 자태를 자랑하고 있습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나(Toscana) - 이태리",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 11,
    "foodPairing": "[]",
    "description": "끼안티가 국제적 인기를 끌자 본래 끼안티가 아닌 지역이 끼안티란 이름을 사용해 본질을 훼손하는 일이 늘자, 원조 끼안티를 뜻하는 ‘끼안티 클라시코’ 지역 생산자들이 검은 수탉을 문장으로 사용하는 ‘끼안티 클라시코 콘소시움’을 결성해 와인의 품질과 가치를 높이려는 활동을 하고 있는데, 카스텔로 디 퀘르체토는 이 콘소시움의 창립멤버이며 대표적 와이너리입니다. 카스텔로 디 퀘르체토는 평이한 와인부터 지역을 대표하는 최상품에 이르는 다양한 와인을 생산하는데, 특히 끼안티 클라시코 리제르바는 전통을 지키면서도 현대 소비자의 취향에 부합하는 매우 질 높은 와인으로 인기가 높습니다. 하지만 이들의 진수는 서로 다른 떼루아를 지닌 4개의 매우 작은 단일포도밭에서 만들어지는 싱글 빈야드(Single Vineyard) 와인들로서 그 희소성과 우수한 품질로 국제적 명성을 확고히 하고 있습니다. Vernaccia di San Gimignano",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "1897년 프랑스계 이주민인 프랑수아(Francois) 가문이  설립한 이 포도원은 토스카나(Toscana) 및 이태리 전체에서 가장 잘 알려진 끼안티(Chianti) 와인이 생산되는 지역 중 자갈이 풍부한 그레베(Greve) 마을에 위치하고 있습니다.",
    "grapeNames": [
      "토스카나 지방의 유일한 DOCG 화이트 와인으로 피렌체 남서쪽",
      "중세 분위기를 물씬 풍기는 산 지미냐노 마을에서 자라는 베르나차 품종으로 만듭니다."
    ]
  },
  {
    "slug": "wine-40",
    "nameKo": "카스텔로 디 퀘르체토는 ‘참나무 숲속의 성’을 의미하는데 실제 그레베 마을은 아름다운 참나무 숲과 올리브 나무가 무성하며 또한 중세풍의 망루가 세워져 있어 매우 고풍스런 자태를 자랑하고 있습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나(Toscana) - 이태리",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "끼안티가 국제적 인기를 끌자 본래 끼안티가 아닌 지역이 끼안티란 이름을 사용해 본질을 훼손하는 일이 늘자, 원조 끼안티를 뜻하는 ‘끼안티 클라시코’ 지역 생산자들이 검은 수탉을 문장으로 사용하는 ‘끼안티 클라시코 콘소시움’을 결성해 와인의 품질과 가치를 높이려는 활동을 하고 있는데, 카스텔로 디 퀘르체토는 이 콘소시움의 창립멤버이며 대표적 와이너리입니다. 카스텔로 디 퀘르체토는 평이한 와인부터 지역을 대표하는 최상품에 이르는 다양한 와인을 생산하는데, 특히 끼안티 클라시코 리제르바는 전통을 지키면서도 현대 소비자의 취향에 부합하는 매우 질 높은 와인으로 인기가 높습니다. 하지만 이들의 진수는 서로 다른 떼루아를 지닌 4개의 매우 작은 단일포도밭에서 만들어지는 싱글 빈야드(Single Vineyard) 와인들로서 그 희소성과 우수한 품질로 국제적 명성을 확고히 하고 있습니다. Chianti Classico “Unicorn”",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "1897년 프랑스계 이주민인 프랑수아(Francois) 가문이  설립한 이 포도원은 토스카나(Toscana) 및 이태리 전체에서 가장 잘 알려진 끼안티(Chianti) 와인이 생산되는 지역 중 자갈이 풍부한 그레베(Greve) 마을에 위치하고 있습니다.",
    "grapeNames": []
  },
  {
    "slug": "wine-41",
    "nameKo": "카스텔로 디 퀘르체토는 ‘참나무 숲속의 성’을 의미하는데 실제 그레베 마을은 아름다운 참나무 숲과 올리브 나무가 무성하며 또한 중세풍의 망루가 세워져 있어 매우 고풍스런 자태를 자랑하고 있습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나(Toscana) - 이태리",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 17,
    "foodPairing": "[]",
    "description": "끼안티가 국제적 인기를 끌자 본래 끼안티가 아닌 지역이 끼안티란 이름을 사용해 본질을 훼손하는 일이 늘자, 원조 끼안티를 뜻하는 ‘끼안티 클라시코’ 지역 생산자들이 검은 수탉을 문장으로 사용하는 ‘끼안티 클라시코 콘소시움’을 결성해 와인의 품질과 가치를 높이려는 활동을 하고 있는데, 카스텔로 디 퀘르체토는 이 콘소시움의 창립멤버이며 대표적 와이너리입니다. 카스텔로 디 퀘르체토는 평이한 와인부터 지역을 대표하는 최상품에 이르는 다양한 와인을 생산하는데, 특히 끼안티 클라시코 리제르바는 전통을 지키면서도 현대 소비자의 취향에 부합하는 매우 질 높은 와인으로 인기가 높습니다. 하지만 이들의 진수는 서로 다른 떼루아를 지닌 4개의 매우 작은 단일포도밭에서 만들어지는 싱글 빈야드(Single Vineyard) 와인들로서 그 희소성과 우수한 품질로 국제적 명성을 확고히 하고 있습니다. 새로운 퀘르체토의 토스카나 레드는 신선하고 과실향이 풍부하며 약간의 잔당감이 있어, 마시기 편한 스타일을 선호하는 고객들의 니즈를 반영하여 새로이 리뉴얼되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "1897년 프랑스계 이주민인 프랑수아(Francois) 가문이  설립한 이 포도원은 토스카나(Toscana) 및 이태리 전체에서 가장 잘 알려진 끼안티(Chianti) 와인이 생산되는 지역 중 자갈이 풍부한 그레베(Greve) 마을에 위치하고 있습니다.",
    "grapeNames": [
      "블랙베리",
      "레드베리와 말린 체리의 향이 풍부하게 느껴집니다. 코에서는 로즈마리등의 허브향과 함께 시라(Syrah) 포도품종이 추가되며 스파이시한 맛과 와인에 좀 더 복합미를 더해줍니다. 은은한 바닐라와 오크향이 와인에 깊은 풍미를 주는 퀘르체토의 토스카나 레드 블렌딩 와인입니다."
    ]
  },
  {
    "slug": "romantic",
    "nameKo": "Romantic",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나 (Toscana) - 이태리",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "이 와인은 그리스 로마 신화 속 신 제우스(Zeus)와 인간 세멜레(Semele) 간의 사랑(romance)을 모티브로 하고 있으며, 이 둘 사이에 잉태된 디오니소스(Dionysus)가 태어난 곳이 바로 이      와인을 생산하는 포도밭이 위치한 곳(Lena region in Chianti)입니다. 2009년이 첫 빈티지로 약 4,000병 정도의 극소량만 생산되며 작황이 매우 뛰어난 해에만 생산이 됩니다. 최소 36개월 프렌치 배럴에서 숙성 후 병입이 이루어집니다. 아름다운 짙은 루비색을 띠고 있으며, 서양 자두, 검은 체리, 달지 않은 초콜렛, 후추 등의 향이 느껴집니다. 부드럽지만 묵직한 탄닌이 긴 여운을 남기며 20~25년 이상의 장기 숙성이 가능한 와인입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "로맨틱",
    "grapeNames": []
  },
  {
    "slug": "castello-di-querceto-cignale",
    "nameKo": "Castello di Querceto Cignale",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나(Toscana) - 이태리",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "달콤하게 잘 익은 윤택한 검은 체리와 열매과일의 느낌이 입 안으로 미끄러지듯 흐르며, 담배향과 토양적 흙 내음, 미네랄과 감초  풍미도 느낄 수 있습니다. 파워풀하며 농축미가 뛰어나 충만한 느낌을 주지만 뉴 월드의     카버네 소비뇽에 비하여 복합미가 돋보입니다. 시간이 흐름에     따라 복잡하고 오묘한 맛의 조화가 두드러지며 20~25년 이상    장기 숙성이 가능합니다. 2019 Vintage : RP 95점, JS 94점, Vinous 92점",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "카스텔로 디 퀘르체토 치냘레",
    "grapeNames": [
      "치냘레는 이태리어로 “야생 멧돼지”라는 뜻으로 퀘르체토가 생산하는 수퍼 투스칸급의 와인입니다. 국제 품종인 카버네 소비뇽과 멀롯을 블랜딩하여 만들고 6본입 케이스에 각각 다른 6개의 멧돼지 드로잉을 라벨에서 잘 보여줍니다."
    ]
  },
  {
    "slug": "red-wine-3",
    "nameKo": "▶ 종   류 : Red Wine",
    "nameEn": "",
    "type": "white",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "servingTempMin": 18,
    "servingTempMax": 20,
    "foodPairing": "[]",
    "description": "깊고 우아함의 대명사인 이 와인은 플로랄, 레드베리, 야생     허브와 함께 복합적이고 우아한 향기를 내 뿜습니다. 입 안에서는 드라이하면서 관능적인 느낌이 상당히 개성적으로 느껴지는 와인으로 풍부한 아로마와 부드러운 탄닌이 긴 여운을 남깁니다. 와인은 최소 30개월 숙성을 거친 후 출시됩니다. 2020 Vintage : RP 94점, JS 94점, JR 17.5점, Vinous 92점, WS 93점, WE 92점",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "▶ 원산지 : 토스카나(Toscana) – 이태리",
    "grapeNames": []
  },
  {
    "slug": "chianti-classico-gran-selezione-il-picchio",
    "nameKo": "Chianti Classico Gran Selezione “Il Picchio”",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나(Toscana) – 이태리",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "퀘르체토 그란 셀레지오네 일 피키오는 해발고도 450미터의 동남향 포도밭에서 자란 포도로 만든 와인으로 포도밭 주변을 에워싸고 있는 참나무와 밤나무 숲에 서식하는 딱따구리 (일 피키오)에서 와인의 이름을 따왔습니다. 일 피키오 포도밭은 주변의 숲이 차가운 북풍을 막아주어 포도가 냉해 피해를 입지 않도록 보호해주며 철분과 마그네슘이    풍부한 토양 덕분에 아로마와 미네랄리티가 농축 된 과실을 얻을 수 있습니다. 강렬한 루비 빛의 레드 컬러와 함께 보랏빛을 띄는 일 피키오는 체리와 잘 익은 산딸기의 아로마가 전면에 느껴집니다. 과일 향과 함께 삼나무와 약초, 향나무 등의 부케도 느끼실 수 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "끼안티 클라시코 그란 셀레지오네 “일 피키오＂",
    "grapeNames": []
  },
  {
    "slug": "chianti-classico",
    "nameKo": "Chianti Classico",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나(Toscana) – 이태리",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "끼안티 클라시코의 창립 멤버인 퀘르체토의 노하우가 담긴    정통 끼안티 클라시코 와인으로 10일간 섭씨 28도에서 발효 후 스테인레스 스틸 탱크에서 18개월, 오크 배럴에서 추가 4개월의 숙성 과정을 거칩니다. 투명도가 좋은 밝은 루비 빛의 레드 와인으로 여러 가지 과일 향과 신선한 체리, 후추 등의 Spicy한 향들이 조화를 이루고  있습니다. 무거움 보다는 생기와 활력을 감상하는 것이 포인트로써 Crispy하다고 표현하는 끼안티 특유의 산도와 부드러운 탄닌의 조화를 느낄 수 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "끼안티 클라시코",
    "grapeNames": []
  },
  {
    "slug": "chianti-classico-riserva",
    "nameKo": "Chianti Classico Riserva",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나(Toscana) - 이태리",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "까나이올로(Canaiolo), 콜로리노(Colorino), 실리지올로(Ciliegiolo) 8% 보석과 같이 반짝이는 빛깔에 체리, 라즈베리, 연초의 아름답고 풍부한 향으로 시작하여 무겁지 않은 느낌의 탄닌과 산뜻한   여운을 주는 고급 끼안티 와인의 전형성을 보여줍니다. 15일간 섭씨 28도에서 발효 후 스테인레스 스틸 탱크에서    최소 24개월간 숙성 과정을 거칩니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "끼안티 클라시코 리제르바",
    "grapeNames": []
  },
  {
    "slug": "querceto-chianti",
    "nameKo": "Querceto Chianti",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나(Toscana) - 이태리",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 17,
    "foodPairing": "[]",
    "description": "퀘르체토의 가장 기본적인 와인으로 깔끔하고 신선한 붉은    과일 풍미 증 특히 딸기 느낌이 인상적인 와인입니다. 밝게 빛나는 루비 색을 띠며 아몬드, 흙, 버섯의 뉘앙스를 느낄 수 있고, 여운은 깔끔하게 마무리 됩니다. 신선한 느낌과 산미, 과하지 않은 무게감으로 거의 모든 음식과 어울릴 만큼 음식 궁합의 폭이 넓습니다. 모든 끼안티 와인들 중에 가격 대비 가장 훌륭한 풍미를 지닌 와인이라고 자신 있게 추천할 수 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "퀘르체토 끼안티",
    "grapeNames": []
  },
  {
    "slug": "vernaccia-di-san-gimignano",
    "nameKo": "Vernaccia di San Gimignano",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나(Toscana) - 이태리",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 11,
    "foodPairing": "[]",
    "description": "전통적으로 황금 빛깔과 풍부하고 묵직한 풍미를 나타내며 약간 씁쓸한 뒷맛을 나타내나 최근에는 좀 더 연하고 상큼하며 가벼운 스타일로 양조됩니다. 물씬 피어나는 꽃 향기와 아몬드의 고소한 풍미와 만나    세련미를 더하며 깔끔한 뒷맛이 인상적인 와인입니다.    식전주(Aperitif)는 물론 생선이나 갑각류 요리와 궁합이 잘 맞습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "베르나차 디 산지미냐노",
    "grapeNames": [
      "토스카나 지방의 유일한 DOCG 화이트 와인으로 피렌체 남서쪽",
      "중세 분위기를 물씬 풍기는 산 지미냐노 마을에서 자라는 베르나차 품종으로 만듭니다."
    ]
  },
  {
    "slug": "toscana-red",
    "nameKo": "Toscana Red",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나(Toscana) - 이태리",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 17,
    "foodPairing": "[]",
    "description": "퀘르체토의 토스카나 레드는 끼안티 지역 내에서도 농축미가 돋보이는 포도 재배가 이루어지는 발다르노 언덕(Valdarno hills)에서 탄생합니다. 발다르노는 피렌체와 시에나 아레쪼 사이에 위치하고 있으며 토스카나 주에서 가장 중요한 아르노 강 (Arno River)이 흐르는 곳이기도 합니다. 새로운 퀘르체토의 토스카나 레드는 신선하고 과실향이 풍부하며 약간의 잔당감이 있어, 마시기 편한 스타일을 선호하는 고객들의 니즈를 반영하여 새롭게 리뉴얼 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "토스카나 레드",
    "grapeNames": [
      "루비 빛을 띠며 블랙베리",
      "레드 베리와 말린 체리의 향이 풍부하게 느껴집니다. 로즈마리",
      "세이지 등의 허브향과 함께 시라(Syrah) 포도 품종 특유의 스파이시한 풍미가 와인에 복합미를 더해줍니다. 은은한 바닐라와 오크 터치가 우아한 여운을 남기는 와인입니다."
    ]
  },
  {
    "slug": "valpolicella-40-ha-amarone",
    "nameKo": "체사리의 주요 포도밭은 발폴리첼라(Valpolicella) 지역의 완만한 언덕에 자리하며, 이곳에 조성된 회사 소유의 40 ha 포도밭에서 베네토의 상징적 존재인 Amarone(아마로네)가 빚어집니다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "발폴리첼라(Valpolicella)-베네토(Veneto)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 그릴이나 장작불로 구운 육류\", \"훈제 육류\", \"하드 치즈\"]",
    "description": "1960년대 초, 제라르도의 아들인 Franco(프랑코)는 회사에 전격적으로 합류하여 와인의 수출을 시작하였으며, 처음에 영국, 이후에 독일을 비롯한 세계 주요 와인소비국으로 수출을 개시하여 수 년만에 국제적인 와이너리로 도약하였습니다. 생산자(Italian Wine Producer of the year)”로 지정되는 영예를 누렸습니다. 특히 이들은 아마로네와 레치오토를 만들기위한 포도 건조 과정에서 강제 통풍 없이 자연풍 만을 고집하는 등 큰 생산자이면서도정밀한 관리와 세심한 노력을 아끼지 않는 양조를 고집하고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "Gerardo Cesari(제라르도 체사리)에 의해 1936년 설립된 베네토 와인의 강자 체사리는 전통을 살린 혼이 담긴 와인을 현대적으로 해석하여 ’40년대에 이미 이태리 전역에서 성공적을 거두면서 베네토의 핵심 생산자로 자리하게 되었습니다.",
    "grapeNames": [
      "체사리가 생산하는 와인은 아마로네(Amarone)",
      "레치오토(Recioto)",
      "발폴리첼라(Valpolicella)",
      "바르돌리노(Bardolino)",
      "소아베(Soave)와 같은 베네토 지역의 클래식한 와인들과 국제 품종인 멀롯",
      "샤도네이 등으로 다양한데",
      "이 모두는 높은 품질 기준을 충족시키며 양조되어 세계 최고의 주류 경연대회인 International Wine and Spirit Competition으로부터 2004년과 2006년 “올 해의 이태리 와인"
    ]
  },
  {
    "slug": "amarone-della-valpolicella-classico",
    "nameKo": "Amarone della Valpolicella Classico",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "발폴리첼라(Valpolicella)-베네토(Veneto)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 그릴이나 장작불로 구운 육류\", \"훈제 육류\", \"하드 치즈\"]",
    "description": "이태리 최고 명주로 손 꼽는 “아마로네”는 영어로 쓰다(Bitter)는 뜻이나, 사실은 쓰지 않고 살짝 달콤한 기운이 감돌며 완전히 Dry 하지는 않습니다. 발폴리첼라 클라시코 지역에서 자란 포도를 나무 건조틀에서 1월 말까지 자연통풍으로 말리면 포도는 40% 정도 수분을 잃고 농축되며 그 결과, 높은 알콜 함량에 말린 과일의 농후한 풍미와 견과류의 고소함, 부드럽고  유려한 탄닌을 지닌 아마로네 와인이 탄생합니다. 체리향이 뚜렷하며 충만한 바디감과 긴 여운을 남깁니다. 풍미의 스케일이 크지만 섬세하고 부드러운 탄닌이 따뜻한 느낌을 줍니다. 바디감과 우아함을 동시에 가져 남성적 특징과 여성적 특징이 공존하고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "아마로네 클라시코",
    "grapeNames": [
      "체사리가 생산하는 와인은 아마로네(Amarone)",
      "레치오토(Recioto)",
      "발폴리첼라(Valpolicella)",
      "바르돌리노(Bardolino)",
      "소아베(Soave)와 같은 베네토 지역의 클래식한 와인들과 국제 품종인 멀롯",
      "샤도네이 등으로 다양한데",
      "이 모두는 높은 품질 기준을 충족시키며 양조되어 세계 최고의 주류 경연대회인 International Wine and Spirit Competition으로부터 2004년과 2006년 “올 해의 이태리 와인"
    ]
  },
  {
    "slug": "mara-vino-di-ripasso",
    "nameKo": "“MARA” vino di Ripasso",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "발폴리첼라(Valpolicella)-베네토(Veneto)",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 19,
    "foodPairing": "[\"▶ 굽거나 훈제한 붉은 육류/가금류\", \"하드 치즈\"]",
    "description": "‘MARA’는 ‘외할머니’라는 뜻으로 이 와인이 주는 자애롭고 전통적인 이미지와 잘 부합합니다. 이 와인은 베네토 특유의 Ripasso 테크닉으로 만들어 지는데, 이는 이 와인을 어느 정도 발효시킨 후에 같은 해 혹은 전년도의 아마로네를 발효시키고 남은 찌꺼기를 넣고 재 발효를 시켜 복합적이고 농축된 풍미를 얻는 매우 흥미로운 양조 방식이라고 할 수 있습니다. 잘 익은 과실의 향이 넘치고 특히 체리와 붉은 열매류 과일의 특징이 뛰어납니다. Powerful하며 우아한 Body 감과 은은한 힘이 오래 남습니다. 아마로네와 유사하나 가격은 훨씬 저렴하며 품질이 뛰어난 아마로네의 동생격 와인으로 매우 Value가 뛰어납니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "“마라” 비노 디 리파소",
    "grapeNames": [
      "체사리가 생산하는 와인은 아마로네(Amarone)",
      "레치오토(Recioto)",
      "발폴리첼라(Valpolicella)",
      "바르돌리노(Bardolino)",
      "소아베(Soave)와 같은 베네토 지역의 클래식한 와인들과 국제 품종인 멀롯",
      "샤도네이 등으로 다양한데",
      "이 모두는 높은 품질 기준을 충족시키며 양조되어 세계 최고의 주류 경연대회인 International Wine and Spirit Competition으로부터 2004년과 2006년 “올 해의 이태리 와인"
    ]
  },
  {
    "slug": "valpolicella-classico",
    "nameKo": "Valpolicella Classico",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "발폴리첼라(Valpolicella)-베네토(Veneto)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 모든 구운 육류\", \"파스타\", \"중간 정도 숙성 치즈\"]",
    "description": "발포리첼라(Valpolicella)는 Val(계곡 Valley) + Poli(여럿 Many)는 Cella(와인저장고 Cellar)가 합쳐진 말로서 옛부터 많은 와인이 만들어지고 저장되었던 와인의 계곡입니다. 지리적으로 베로나(Verona) 북쪽으로 넓게 펼쳐진 이 곳에서는 지역명과 동일한 발폴리첼라(Valpolicella) 이외에도 아마로네(Amarone)와 레치오토(Recioto)와 같은 베네토 최고 명주들이 생산됩니다. 고운 체리 풍미, 향기로운 붉은 열매 과일과 신선한 향이 돋보이는 고운 드라이 와인입니다. 오크 숙성을 하지 않았으므로 깔끔한 미감을 지니며 부드러운 탄닌과 미디엄 바디를 지녀 거의 모든 음식과 즐겁게 드실 수 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "발폴리첼라 클라시코",
    "grapeNames": [
      "체사리가 생산하는 와인은 아마로네(Amarone)",
      "레치오토(Recioto)",
      "발폴리첼라(Valpolicella)",
      "바르돌리노(Bardolino)",
      "소아베(Soave)와 같은 베네토 지역의 클래식한 와인들과 국제 품종인 멀롯",
      "샤도네이 등으로 다양한데",
      "이 모두는 높은 품질 기준을 충족시키며 양조되어 세계 최고의 주류 경연대회인 International Wine and Spirit Competition으로부터 2004년과 2006년 “올 해의 이태리 와인"
    ]
  },
  {
    "slug": "soave-classico",
    "nameKo": "Soave Classico",
    "nameEn": "",
    "type": "white",
    "country": "Italy",
    "regionL1": "소아베(Soave)-베네토(Veneto)",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 12,
    "foodPairing": "[\"▶ 아페리티프\", \"모든 해산물\", \"가벼운 파스타\", \"가금류\", \"찬 햄\"]",
    "description": "소아베 중에서 예로부터 소아베란 이름으로 와인을 만들어온 소아베 ‘클라시코’ 지역에서 자란 양질의 포도로 만들어집니다. 녹색음영이 감도는 연한 담황색 와인으로, 잘 익은 과일 향, 성숙한 꽃 향이 가득한 매우 경쾌하고 발랄한 와인입니다. 첫 맛은 약간 톡 쏘는 듯하며 뒷 맛은 약간 쌉쌀한 Dry 와인으로 누구든 기분 좋게 음용 할 수 있습니다. Gerardo Cesari(제라르도 체사리)에 의해 1936년 설립된 베네토 와인의 강자 체사리는 전통을 살린 혼이 담긴 와인을 현대적으로 해석하여 ’40년대에 이미 이태리 전역에서 성공적을 거두면서 베네토의 핵심 생산자로 자리하게 되었습니다. 체사리의 주요 포도밭은 발폴리첼라(Valpolicella) 지역의 완만한 언덕에 자리하며, 이곳에 조성된 회사 소유의 40 ha 포도밭에서 베네토의 상징적 존재인 Amarone(아마로네)가 빚어집니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "소아베 클라시코",
    "grapeNames": [
      "체사리가 생산하는 와인은 아마로네(Amarone)",
      "레치오토(Recioto)",
      "발폴리첼라(Valpolicella)",
      "바르돌리노(Bardolino)",
      "소아베(Soave)와 같은 베네토 지역의 클래식한 와인들과 국제 품종인 멀롯",
      "샤도네이 등으로 다양한데",
      "이 모두는 높은 품질 기준을 충족시키며 양조되어 세계 최고의 주류 경연대회인 International Wine and Spirit Competition으로부터 2004년과 2006년 “올 해의 이태리 와인"
    ]
  },
  {
    "slug": "valpolicella-40-ha-amarone-2",
    "nameKo": "체사리의 주요 포도밭은 발폴리첼라(Valpolicella) 지역의 완만한 언덕에 자리하며, 이곳에 조성된 회사 소유의 40 ha 포도밭에서 베네토의 상징적 존재인 Amarone(아마로네)가 빚어집니다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "발폴리첼라(Valpolicella)-베네토(Veneto)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 그릴이나 장작불로 구운 육류\", \"훈제 육류\", \"하드 치즈\"]",
    "description": "1960년대 초, 제라르도의 아들인 Franco(프랑코)는 회사에 전격적으로 합류하여 와인의 수출을 시작하였으며, 처음에 영국, 이후에 독일을 비롯한 세계 주요 와인소비국으로 수출을 개시하여 수 년만에 국제적인 와이너리로 도약하였습니다. 생산자(Italian Wine Producer of the year)”로 지정되는 영예를 누렸습니다. 특히 이들은 아마로네와 레치오토를 만들기위한 포도 건조 과정에서 강제 통풍 없이 자연풍 만을 고집하는 등 큰 생산자이면서도정밀한 관리와 세심한 노력을 아끼지 않는 양조를 고집하고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "Gerardo Cesari(제라르도 체사리)에 의해 1936년 설립된 베네토 와인의 강자 체사리는 전통을 살린 혼이 담긴 와인을 현대적으로 해석하여 ’40년대에 이미 이태리 전역에서 성공적을 거두면서 베네토의 핵심 생산자로 자리하게 되었습니다.",
    "grapeNames": [
      "체사리가 생산하는 와인은 아마로네(Amarone)",
      "레치오토(Recioto)",
      "발폴리첼라(Valpolicella)",
      "바르돌리노(Bardolino)",
      "소아베(Soave)와 같은 베네토 지역의 클래식한 와인들과 국제 품종인 멀롯",
      "샤도네이 등으로 다양한데",
      "이 모두는 높은 품질 기준을 충족시키며 양조되어 세계 최고의 주류 경연대회인 International Wine and Spirit Competition으로부터 2004년과 2006년 “올 해의 이태리 와인"
    ]
  },
  {
    "slug": "amarone-della-valpolicella-classico-2",
    "nameKo": "Amarone della Valpolicella Classico",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "발폴리첼라(Valpolicella)-베네토(Veneto)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 그릴이나 장작불로 구운 육류\", \"훈제 육류\", \"하드 치즈\"]",
    "description": "이태리 최고 명주로 손 꼽는 “아마로네”는 영어로 쓰다(Bitter)는 뜻이나, 사실은 쓰지 않고 살짝 달콤한 기운이 감돌며 완전히 Dry 하지는 않습니다. 발폴리첼라 클라시코 지역에서 자란 포도를 나무 건조틀에서 1월 말까지 자연통풍으로 말리면 포도는 40% 정도 수분을 잃고 농축되며 그 결과, 높은 알콜 함량에 말린 과일의 농후한 풍미와 견과류의 고소함, 부드럽고  유려한 탄닌을 지닌 아마로네 와인이 탄생합니다. 체리향이 뚜렷하며 충만한 바디감과 긴 여운을 남깁니다. 풍미의 스케일이 크지만 섬세하고 부드러운 탄닌이 따뜻한 느낌을 줍니다. 바디감과 우아함을 동시에 가져 남성적 특징과 여성적 특징이 공존하고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "아마로네 클라시코",
    "grapeNames": [
      "체사리가 생산하는 와인은 아마로네(Amarone)",
      "레치오토(Recioto)",
      "발폴리첼라(Valpolicella)",
      "바르돌리노(Bardolino)",
      "소아베(Soave)와 같은 베네토 지역의 클래식한 와인들과 국제 품종인 멀롯",
      "샤도네이 등으로 다양한데",
      "이 모두는 높은 품질 기준을 충족시키며 양조되어 세계 최고의 주류 경연대회인 International Wine and Spirit Competition으로부터 2004년과 2006년 “올 해의 이태리 와인"
    ]
  },
  {
    "slug": "valpolicella-ripasso-superiore",
    "nameKo": "Valpolicella Ripasso Superiore",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "발폴리첼라(Valpolicella)-베네토(Veneto)",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 19,
    "foodPairing": "[\"▶ 굽거나 훈제한 붉은 육류/가금류\", \"하드 치즈\"]",
    "description": "이 와인은 베네토 특유의 Ripasso 테크닉으로 만들어 지는데, 이는 이 와인을 어느 정도 발효시킨 후에 같은 해 혹은 전년도의 아마로네를 발효시키고 남은 찌꺼기를 넣고 재 발효를 시켜 복합적이고 농축된 풍미를 얻는 매우 흥미로운 양조 방식이라고 할 수 있습니다. 잘 익은 과실의 향이 넘치고 특히 체리와 붉은 열매류 과일의 특징이 뛰어납니다. Powerful하며 우아한 Body 감과 은은한 힘이 오래 남습니다. 아마로네와 유사하나 가격은 훨씬 저렴하며 품질이 뛰어난 아마로네의 동생격 와인으로 매우 Value가 뛰어납니다. Gerardo Cesari(제라르도 체사리)에 의해 1936년 설립된 베네토 와인의 강자 체사리는 전통을 살린 혼이 담긴 와인을 현대적으로 해석하여 ’40년대에 이미 이태리 전역에서 성공적을 거두면서 베네토의 핵심 생산자로 자리하게 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "발폴리첼라 리파소 수페리오레",
    "grapeNames": [
      "체사리가 생산하는 와인은 아마로네(Amarone)",
      "레치오토(Recioto)",
      "발폴리첼라(Valpolicella)",
      "바르돌리노(Bardolino)",
      "소아베(Soave)와 같은 베네토 지역의 클래식한 와인들과 국제 품종인 멀롯",
      "샤도네이 등으로 다양한데",
      "이 모두는 높은 품질 기준을 충족시키며 양조되어 세계 최고의 주류 경연대회인 International Wine and Spirit Competition으로부터 2004년과 2006년 “올 해의 이태리 와인"
    ]
  },
  {
    "slug": "valpolicella-classico-2",
    "nameKo": "Valpolicella Classico",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "발폴리첼라(Valpolicella)-베네토(Veneto)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 모든 구운 육류\", \"파스타\", \"중간 정도 숙성 치즈\"]",
    "description": "발포리첼라(Valpolicella)는 Val(계곡 Valley) + Poli(여럿 Many)는 Cella(와인저장고 Cellar)가 합쳐진 말로서 옛부터 많은 와인이 만들어지고 저장되었던 와인의 계곡입니다. 지리적으로 베로나(Verona) 북쪽으로 넓게 펼쳐진 이 곳에서는 지역명과 동일한 발폴리첼라(Valpolicella) 이외에도 아마로네(Amarone)와 레치오토(Recioto)와 같은 베네토 최고 명주들이 생산됩니다. 고운 체리 풍미, 향기로운 붉은 열매 과일과 신선한 향이 돋보이는 고운 드라이 와인입니다. 오크 숙성을 하지 않았으므로 깔끔한 미감을 지니며 부드러운 탄닌과 미디엄 바디를 지녀 거의 모든 음식과 즐겁게 드실 수 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "발폴리첼라 클라시코",
    "grapeNames": [
      "체사리가 생산하는 와인은 아마로네(Amarone)",
      "레치오토(Recioto)",
      "발폴리첼라(Valpolicella)",
      "바르돌리노(Bardolino)",
      "소아베(Soave)와 같은 베네토 지역의 클래식한 와인들과 국제 품종인 멀롯",
      "샤도네이 등으로 다양한데",
      "이 모두는 높은 품질 기준을 충족시키며 양조되어 세계 최고의 주류 경연대회인 International Wine and Spirit Competition으로부터 2004년과 2006년 “올 해의 이태리 와인"
    ]
  },
  {
    "slug": "soave-classico-2",
    "nameKo": "Soave Classico",
    "nameEn": "",
    "type": "white",
    "country": "Italy",
    "regionL1": "소아베(Soave)-베네토(Veneto)",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 12,
    "foodPairing": "[\"▶ 아페리티프\", \"모든 해산물\", \"가벼운 파스타\", \"가금류\", \"찬 햄\"]",
    "description": "소아베 중에서 예로부터 소아베란 이름으로 와인을 만들어온 소아베 ‘클라시코’ 지역에서 자란 양질의 포도로 만들어집니다. 녹색음영이 감도는 연한 담황색 와인으로, 잘 익은 과일 향, 성숙한 꽃 향이 가득한 매우 경쾌하고 발랄한 와인입니다. 첫 맛은 약간 톡 쏘는 듯하며 뒷 맛은 약간 쌉쌀한 Dry 와인으로 누구든 기분 좋게 음용 할 수 있습니다. Gerardo Cesari(제라르도 체사리)에 의해 1936년 설립된 베네토 와인의 강자 체사리는 전통을 살린 혼이 담긴 와인을 현대적으로 해석하여 ’40년대에 이미 이태리 전역에서 성공적을 거두면서 베네토의 핵심 생산자로 자리하게 되었습니다. 체사리의 주요 포도밭은 발폴리첼라(Valpolicella) 지역의 완만한 언덕에 자리하며, 이곳에 조성된 회사 소유의 40 ha 포도밭에서 베네토의 상징적 존재인 Amarone(아마로네)가 빚어집니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "소아베 클라시코",
    "grapeNames": [
      "체사리가 생산하는 와인은 아마로네(Amarone)",
      "레치오토(Recioto)",
      "발폴리첼라(Valpolicella)",
      "바르돌리노(Bardolino)",
      "소아베(Soave)와 같은 베네토 지역의 클래식한 와인들과 국제 품종인 멀롯",
      "샤도네이 등으로 다양한데",
      "이 모두는 높은 품질 기준을 충족시키며 양조되어 세계 최고의 주류 경연대회인 International Wine and Spirit Competition으로부터 2004년과 2006년 “올 해의 이태리 와인"
    ]
  },
  {
    "slug": "donnafugata-mille-e-una-notte",
    "nameKo": "Donnafugata, Mille e una Notte",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "입 안에서는 부드러우면서도 실크 같이 매끄러운 탄닌이 돋보이며, 레드 체리와 감초를 연상케하는 풍미가 복합적으로 다가옵니다.  프렌치 오크 배럴에서 13~14개월간 숙성 후 24개월의 병 숙성을 거쳐 출시하는 매우 길고 아름다운 피니시를 가진 와인으로 20년 이상 장기 보관이 가능합니다. 밀레 에 우나 노떼는 천 하루의 밤(Thousand and one nights)을 의미합니다. 와인의 레이블에는 시칠리아로 피난 온 마리아 카롤리나 왕비의 궁전과 아라비안 나이트에서 영감을 받은 반짝이는 별이 그려져 있습니다. 그란디 마르끼의 멤버이자 시칠리아 최고의 와이너리",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "돈나푸가타  밀레 에 우나 노떼",
    "grapeNames": [
      "시칠리아를 대표하는 포도 품종 네로 다볼라를 메인으로 쁘띠 베르도와 시라를 소량 블랜딩했습니다. 블랙베리와 블랙 멀버리 같은 잘 익은 검은 과실류의 풍성한 부케가 돋보이며",
      "발사믹과 약간의 코코아",
      "바닐라 향이 느껴집니다."
    ]
  },
  {
    "slug": "donnafugata-angheli",
    "nameKo": "Donnafugata, Angheli",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "시칠리아의 현대적인 와인 메이킹을 대표할만한 와인으로, 정열적인 지중해의 햇빛을 받고 자란 멀롯과 카버네 소비뇽을 블랜딩 해 완성했습니다. 짙은 루비 컬러와 체리, 자두, 빌베리와 같은 잘 익은 붉은 과일의 아로마, 감초 향이 느껴지며 약간의 코코아와 바닐라 향이 매력을 더합니다. 부드러운 탄닌과 짭짤한 감칠맛을 가진 와인으로 12개월간 프렌치 오크에서 숙성하며 병입 후 18개월의 추가 숙성을 거칩니다. 8년 이상의 지속력을 가지고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "돈나푸가타  앙겔리",
    "grapeNames": [
      "국제 품종을 사용한 새로운 시칠리아 와인"
    ]
  },
  {
    "slug": "donnafugata-sedara",
    "nameKo": "Donnafugata, Sedara",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "멀롯(Merlot), 시라(Syrah) 등 쥬세페 토마시의 소설이자 루키노 비스콘티의 명작 영화 레오파드에 등장하는 여주인공 안젤리카에서 그 이름을 빌려왔습니다. 돈나푸가타는 레이블의 여인을 통해 영화 속 아름답고 당당한 안젤리카 세다라의 모습을 담아냈습니다. 그란디 마르끼의 멤버이자 시칠리아 최고의 와이너리",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "돈나푸가타  세다라",
    "grapeNames": [
      "시칠리아 토착 품종 네로 다볼라를 메인으로 카버네 소비뇽과 멀롯",
      "시라와 같은 국제 품종을 소량 블랜딩했습니다. 옅은 보라빛이 감도는 루비 컬러의 와인으로",
      "체리와 자두 같은 붉은 과일의 향기가 강렬하게 코를 휘감습니다. 약간의 발사믹과 민트 노트가 느껴지며 입에 머금으면 블랙베리와 체리의 매력적인 맛이 충만하게 느껴집니다. 약간의 담뱃잎 향과 세이지 등 허브류의 스파이시함",
      "미네랄리티가 가득 느껴지는 가운데 부드러운 탄닌과 구조감이 강한 여운을 남깁니다. 4~5년 정도의 숙성 잠재력을 가집니다."
    ]
  },
  {
    "slug": "donnafugata-sherazade",
    "nameKo": "Donnafugata, Sherazade",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "아라비안 나이트의 주인공 세라자데 왕비의 이름을 따서 만들어진 와인입니다. 이국적인 와인의 레이블은 와인 생산에 영감을 주었던 이야기에 바치는 찬사임과 동시에 이 와인이 세라자데 왕비의 이야기만큼 매혹적임을 나타냅니다. 그란디 마르끼의 멤버이자 시칠리아 최고의 와이너리 1851년 설립되어 현재 시칠리아 최고의 와이너리로 평가 받는 돈나푸가타는 160년의 전통을 가진 유서 깊은 가족 회사이자 이탈리아의 프리미엄 와인 생산자 모임 ‘그란디 마르끼(Grandi Marci)’의 멤버로 이탈리아 와인의 품질을 세계에 알리고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "돈나푸가타  세라자데",
    "grapeNames": [
      "2006년 빈티지로 처음 탄생한 돈나푸가타 세라자데는 시칠리아의 토착 품종이자 지역을 대표하는 품종인 네로 다볼라로 만들어집니다. 매력적인 밝은 루비 컬러가 매혹적인 첫 인상을 남기며",
      "자두와 체리의 신선한 뉘앙스와 약간의 스파이시한 향이 기억에 뚜렷하게 남습니다. 입 안에 꽉 차는 듯한 튼튼한 구조감과 놀라울 만큼 신선한 풍미",
      "훌륭한 탄닌을 가진 밸런스 좋은 와인으로",
      "피자나 스파게티 같은 이탈리아 음식은 물론 팟타이 등의 아시아 음식들과도 잘 어울립니다."
    ]
  },
  {
    "slug": "donnafugata-lumera",
    "nameKo": "Donnafugata, Lumera",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "사랑이 넘치는 봄과 같은 로맨틱한 로제 와인 시칠리아 섬의 남서쪽 콘테사 엔텔리나 빈야드에서 재배한 포도로 생산하는 와인으로, 신선한 과일향을 유지하기 위해 저온 압착 후 자동 온도 조절이 가능한 스테인리스 통에서 숙성합니다. 투명한 장미빛 컬러에 석류와 건포도, 산딸기와 같은 과일향과 아카시아 꽃 향이 생생하게 느껴집니다. 상큼한 산도와 부드러움이 완벽하게 균형을 이루는 와인으로, 식전 뿐 아니라 다양한 요리와 함께 점심, 저녁 식사에도 즐길 수 있는 매력적인 로제 와인입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "돈나푸가타  루메라",
    "grapeNames": []
  },
  {
    "slug": "donnafugata-la-fuga",
    "nameKo": "Donnafugata, La Fuga",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "콘테사 엔텔리나 언덕에서 성장한 샤도네이 포도로 만든 와인으로, 가장 훌륭한 시칠리아 화이트 와인의 표준으로 일컬어지는 돈나푸가타의 대표 와인 중 하나이기도 합니다. 볕 짚과 같은 황금빛 컬러와 파인애플을 비롯한 열대 과일의 노트가 풍성하게 느껴집니다. 약간의 삼나무 향과 오렌지 껍질의 향이 피어오르는 가운데 은은하고 우아한 흰 꽃의 힌트가 더해집니다. 매력적인 감칠맛이 입 안을 가득 채우며 생생한 산도가 느껴지는, 드라이하면서도 부드럽고 우아한 와인입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "돈나푸가타  라푸가",
    "grapeNames": []
  },
  {
    "slug": "donnafugata-anthilia",
    "nameKo": "Donnafugata, Anthilia",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "신선함과 상쾌함을 가득 담은 돈나푸가타의 대표 와인 향긋한 아로마와 함께 드라이하면서 신선한 느낌이 가득 들어차 있습니다. 과즙이 풍부한 복숭아와 같은 달콤하면서도 기품 있는 과일의 느낌이 인상적이며 약간의 들꽃 향기도 피어오릅니다. 입 안에서는 과일의 맛이 한층 더 강하게 선명하게 느껴지며 신선함과 여운이 오래 지속됩니다. 시원하게 마시기 좋은 와인으로 식전주로는 물론, 해산물 파스타와 토마토 바질 부스르게타 등의 가벼운 요리와 함께하기 매우 좋습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "돈나푸가타  안띨리아",
    "grapeNames": [
      "카타라토(Catarratto)와 기타 화이트 품종 블랜딩"
    ]
  },
  {
    "slug": "donnafugata-lighea",
    "nameKo": "Donnafugata, Lighea",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "지중해의 햇살과 향기를 담은 휴식 같은 와인 그란디 마르끼의 멤버이자 시칠리아 최고의 와이너리 1851년 설립되어 현재 시칠리아 최고의 와이너리로 평가 받는 돈나푸가타는 160년의 전통을 가진 유서 깊은 가족 회사이자 이탈리아의 프리미엄 와인 생산자 모임 ‘그란디 마르끼(Grandi Marci)’의 멤버로 이탈리아 와인의 품질을 세계에 알리고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "돈나푸가타  리게아",
    "grapeNames": [
      "모스카토 달레산드리아(Moscato d’Alessandria)로도 알려진 시칠리아 토착 품종 지비보로 만들어진 와인입니다. 아카시아 꿀과 꽃",
      "캐러멜 등의 화사한 향을 특징으로 하는 지비보의 특성을 100% 반영한 와인으로",
      "오렌지 꽃을 연상시키는 향이 매력적입니다."
    ]
  },
  {
    "slug": "donnafugata-ben-rye",
    "nameKo": "Donnafugata, Ben Rye",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "‘바람의 아들’ 이탈리아 최고의 스위트 와인 1989년 처음 출시된 벤 리에는 지비보 포도를 햇빛과 바람 등을 사용해 자연적으로 건조하는 ‘파시토(Passito)’ 방식으로 만들어진 이탈리아 최고의 스위트 와인 중 하나입니다. 멋진 황금빛 컬러를 띄고 있으며 입 안에서는 말린 살구와 대추야자, 말린 무화과 등의 이국적이고 매력적인 풍미가 가득 느껴집니다. 너무 부담스럽지 않은 달콤함이 독특하고 긴 여운을 남기는 와인으로 디저트로 마시기에 훌륭하며, 케이크나 치즈 등과도 잘 어울립니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "돈나푸가타  벤 리에",
    "grapeNames": []
  },
  {
    "slug": "donnafugata-bell-assai",
    "nameKo": "Donnafugata, Bell’Assai",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "봄 바람의 설레임을 가득 담은 레드 와인 ‘매우 아름답다(Bell’Assai)’라는 그 이름처럼 풍부한 아로마를 가진 와인으로, 바이올렛과 장미꽃 향기가 와인 잔 가득 넘쳐흐르며 입 안에서는 신선한 딸기와 라즈베리의 과즙을 마시는 듯한 풍성한 맛이 느껴집니다. 부드러운 탄닌과 실크 같은 질감을 가진 신선한 스타일의 레드 와인입니다. 그란디 마르끼의 멤버이자 시칠리아 최고의 와이너리",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "돈나푸가타  벨아사이",
    "grapeNames": [
      "비토리아(Vittoria) 지역의 토착 품종이자 강렬한 꽃 향기를 가진 품종인 프라파토(Frappato)를 사용한 와인입니다."
    ]
  },
  {
    "slug": "etna-sicilia",
    "nameKo": "▶ 원 산 지 : 에트나(Etna) - 시칠리아 (Sicilia), 이탈리아",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "금빛으로 익은 과일과 지중해 허브의 은은한 향이 와인에 우아함을 더하며 입 안에서는 신선하고 풍성한 느낌이 가득합니다. 화산재 토양에서 태어난 에트나 와인 특유의 풍부한 미네랄리티가 매력적입니다. 스테인리스 스틸에서 발효했으며 재사용 프렌치 오크와 스테인리스 탱크로 나누어 10개월간 숙성했습니다. 이후 9개월간 병에서 안정화를 거친 후 출시됩니다. 5년 이상의 숙성 잠재력을 가지고 있으며, 샐러드, 포르치니 버섯, 생선 요리와 잘 어울립니다. 그란디 마르끼의 멤버이자 시칠리아 최고의 와이너리",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "돈나푸가타  술 불카노 비앙코\u000bDonnafugata, Sul Vulcano Bianco",
    "grapeNames": []
  },
  {
    "slug": "etna-sicilia-2",
    "nameKo": "▶ 원 산 지 : 에트나(Etna) – 시칠리아 (Sicilia), 이탈리아",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "옅은 핑크 컬러가 눈길을 사로잡습니다. 에트나의 화산재에서 자란 네렐로 마스칼레제 포도의 미네랄리티와 신선함이 돋보이는 와인으로, 마치 꽃이 활짝 핀 등나무 밑에 서있는 듯한 은은한 향기가 주위를 감쌉니다. 자두와 핑크 자몽의 맛이 느껴집니다. 스테인리스 스틸 탱크에서 발효, 3개월간의 숙성을 거칩니다. 이후 2개월간 병에서 추가 숙성 후 출시됩니다. 샐러드나 신선한 치즈와 같은 지중해식 음식은 물론 맵지 않은 아시아 요리와도 잘 어울립니다. 그란디 마르끼의 멤버이자 시칠리아 최고의 와이너리",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "돈나푸가타  술 불카노 로사토\u000bDonnafugata, Sul Vulcano Rosato",
    "grapeNames": []
  },
  {
    "slug": "etna-sicilia-3",
    "nameKo": "▶ 원 산 지 : 에트나(Etna) – 시칠리아 (Sicilia), 이탈리아",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "네렐로 카푸치오(Nerello Cappuiccio) 에트나 와인의 특징을 그대로 담아낸 옅은 루비 컬러의 레드 와인입니다. 딸기와 체리 등 붉은 과일과 제비꽃을 중심으로 한 꽃향기가 짙은 인상을 남기며, 시나몬, 넛맥 등의 따뜻한 향신료 뉘앙스가 은은하게 풍겨납니다. 입 안에서는 부드러운 질감과 더불어 아로마와 맛이 완벽한 하모니를 이루며 화산 지형에서 자란 포도 특유의 미네랄리티와 신선함이 매끄러운 탄닌과 어우러집니다. 스테인리스 스틸 탱크에서 발효 후 2~3회 사용한 프렌치 오크와 탱크로 나누어 14개월간 숙성합니다. 7개월 이상 병에서 추가 숙성을 거친 후 출시됩니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "돈나푸가타  술 불카노 로쏘\u000bDonnafugata, Sul Vulcano Rosso",
    "grapeNames": [
      "화산지대 토착 품종으로 만든 레드와인"
    ]
  },
  {
    "slug": "etna-sicilia-4",
    "nameKo": "▶ 원 산 지 : 에트나(Etna) - 시칠리아 (Sicilia), 이탈리아",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "돈나푸가타의 크뤼급 레드와인으로 에트나 빈야드에서도 가장 좋은 포도만을 선별해 만들어집니다. 아름다운 루비 컬러와 더불어 블랙베리와 레드 커런트 등 매혹적인 붉은 과일의 향이 나타나며, 약간의 담뱃잎과 넛맥의 뉘앙스가 발사믹, 깨진 돌과 같은 미네랄리티와 어우러집니다. 입 안에서는 특별한 복합미와 우아한 캐릭터가 드러나며 매끄러운 탄닌이 긴 피니쉬로 이어집니다. 스테인리스 스틸 탱크에서 발효 후 2~3회 사용한 프렌치 오크에서 14개월간 숙성됩니다. 이후 12개월간 병 숙성을 거쳐 출시되며, 10년 이상 장기 보관이 가능합니다. 레이블의 이미지는 화산이 폭발할 때의 굉음을 묘사한 것입니다. 와인의 우아한 캐릭터 속에 감춰진 파워와 입 안에서 펼쳐지는 다채로운 맛과 향을 레이블의 이미지에 담아냈습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "돈나푸가타 프라고레 에트나 로쏘\u000bDonnafugata, Fragore Etna Rosso",
    "grapeNames": []
  },
  {
    "slug": "donnafugata-rosa",
    "nameKo": "Donnafugata, Rosa",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 12,
    "foodPairing": "[]",
    "description": "돌체앤가바나와 돈나푸가타의 콜라보레이션 와인 돈나푸가타가 와인의 생산을, 돌체&가바나가 레이블과 바틀 디자인을 담당했습니다. 와인의 이름인 로자는 ‘로제 와인’을 의미하는 것으로, 와인의 아름다운 분홍빛 컬러를 상징합니다. 2020년 첫 빈티지(2019) 출시 직후 뜨거운 화제를 모으며 전 세계적으로 품귀 현상을 일으 킨 와인입니다. 그란디 마르끼의 멤버이자 시칠리아 최고의 와이너리",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "돈나푸가타 로사",
    "grapeNames": [
      "유럽에서 가장 크고 활발한 활화산으로 불리는 ‘에트나(Etna)’는 연중 포도밭을 뒤덮는 화산재와 높은 해발고도로 인한 낮은 기온",
      "풍부한 일조량으로 놀랍도록 우아하고 미네랄리티가 강한 와인을 만들어냅니다. 로자는 이 지역의 대표 품종이자 좋은 산도와 프레시한 허브향",
      "섬세한 미네랄리티를 가진 네렐로 마스칼레제와 풍부한 타닌과 구조감을 가진 노세라를 블랜딩한 와인입니다. 오묘하고 밝은 분홍빛의 컬러가 눈을 사로잡으며 자스민 꽃의 우아한 부케",
      "산딸기",
      "복숭아의 부드러운 과일향이 펼쳐집니다. 입 안에서는 베르가못의 신선하면서도 독특한 허브향이 차오르며 풍부한 미네랄리티와 가벼운 타닌이 훌륭한 밸런스를 선사합니다."
    ]
  },
  {
    "slug": "donnafugata-isolano",
    "nameKo": "Donnafugata Isolano",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 12,
    "foodPairing": "[]",
    "description": "돌체앤가바나와 돈나푸가타의 콜라보레이션 와인 돈나푸가타가 와인의 생산을, 돌체&가바나가 레이블과 바틀 디자인을 담당했습니다. 2020년 출시된 이들의 첫 콜라보레이션 와인 Rosa와 Tancredi Limited Edition은 출시 직후 전 세계에서 품귀현상을 일으켰고, 이러한 호응에 힘입어 2021년 9월, 시칠리아의 심장 에트나를 무대로 화이트와 레드 두 가지 와인이 새롭게 출시되었습니다. 유럽에서 가장 크고 활발한 활화산으로 불리는 ‘에트나(Etna)’는 연중 포도밭을 뒤덮는 화산재와 높은 해발고도로 인한 낮은 기온, 풍부한 일조량으로 놀랍도록 우아하고 미네랄리티가 강한 와인을 만들어냅니다. 감귤류의 신선한 시트러스 아로마가 코 끝을 맴돌며 활짝 핀 꽃, 지중해 허브의 복합적이고 우아한 노트가 주변을 감쌉니다. 놀라운 미네랄리티와 긴 여운을 가진 와인으로 ‘에트나 와인’의 매력을 있는 그대로 보여줍니다. 스테인리스 탱크와 재사용한 프렌치오크에서 10개월간 숙성 후 12개월간의 추가 병 숙성을 거쳤습니다. 10년 이상의 숙성 잠재력을 가진 와인입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "돈나푸가타 이졸라노",
    "grapeNames": []
  },
  {
    "slug": "donnafugata-cuordilava",
    "nameKo": "Donnafugata Cuordilava",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "돌체앤가바나와 돈나푸가타의 콜라보레이션 와인 돈나푸가타가 와인의 생산을, 돌체&가바나가 레이블과 바틀 디자인을 담당했습니다. 2020년 출시된 이들의 첫 콜라보레이션 와인 Rosa와 Tancredi Limited Edition은 출시 직후 전 세계에서 품귀현상을 일으켰고, 이러한 호응에 힘입어 2021년 9월, 시칠리아의 심장 에트나를 무대로 화이트와 레드 두 가지 와인이 새롭게 출시되었습니다. 유럽에서 가장 크고 활발한 활화산으로 불리는 ‘에트나(Etna)’는 연중 포도밭을 뒤덮는 화산재와 높은 해발고도로 인한 낮은 기온, 풍부한 일조량으로 놀랍도록 우아하고 미네랄리티가 강한 와인을 만들어냅니다. 밝은 루비 컬러의 와인으로 라즈베리와 크랜베리와 같은 붉은 과일의 향이 피어납니다. 스파이시한 노트와 더불어 덤불에서 느껴지는 약간의 earthy함도 가지고 있습니다. 입 안에서는 깊은 과실의 향취와 잘 정리된 타닌, 우아한 미네랄리티가 긴 여운을 남깁니다. 프렌치 오크에서 14개월간 숙성 후 30개월간 병 숙성을 거쳐 출시됩니다. 10년 이상의 장기 숙성 능력을 갖춘 와인입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "돈나푸가타 꾸오르디라바",
    "grapeNames": []
  },
  {
    "slug": "donnafugata-tancredi",
    "nameKo": "Donnafugata, Tancredi",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "그란디 마르끼의 멤버이자 시칠리아 최고의 와이너리 1851년 설립되어 현재 시칠리아 최고의 와이너리로 평가 받는 돈나푸가타는 160년의 전통을 가진 유서 깊은 가족 회사이자 이탈리아의 프리미엄 와인 생산자 모임 ‘그란디 마르끼(Grandi Marci)’의 멤버로 이탈리아 와인의 품질을 세계에 알리고 있습니다. 와이너리의 이름인 돈나푸가타는 ‘피난처의 여인’이라는 뜻을 담고 있습니다. 이는 나폴리의 왕이었던 페르디난도(Ferdinando) 4세의 아내이자 낭만주의의 상징으로 여겨지는 마리아 카롤리나가 나폴레옹의 군대를 피해 시칠리아로 피난을 와 현재는 돈나푸가타 와이너리가 된 콘테사 엔텔리나의 건물에 머물렀던 일화에서 비롯되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "돈나푸가타  탄크레디",
    "grapeNames": [
      "시칠리아 대표 품종 네로 다볼라와 대표적인 레드와인 품종 카버네 소비뇽의 블랜딩을 통해 탄생한 세련되고 우아한 스타일의 와인입니다."
    ]
  },
  {
    "slug": "donnafugata-mille-e-una-notte-2",
    "nameKo": "Donnafugata, Mille e una Notte",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "입 안에서는 부드러우면서도 실크 같이 매끄러운 탄닌이 돋보이며, 레드 체리와 감초를 연상케하는 풍미가 복합적으로 다가옵니다.  프렌치 오크 배럴에서 13~14개월간 숙성 후 24개월의 병 숙성을 거쳐 출시하는 매우 길고 아름다운 피니시를 가진 와인으로 20년 이상 장기 보관이 가능합니다. 밀레 에 우나 노떼는 천 하루의 밤(Thousand and one nights)을 의미합니다. 와인의 레이블에는 시칠리아로 피난 온 마리아 카롤리나 왕비의 궁전과 아라비안 나이트에서 영감을 받은 반짝이는 별이 그려져 있습니다. 그란디 마르끼의 멤버이자 시칠리아 최고의 와이너리",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "돈나푸가타  밀레 에 우나 노떼",
    "grapeNames": [
      "시칠리아를 대표하는 포도 품종 네로 다볼라를 메인으로 쁘띠 베르도와 시라를 소량 블랜딩했습니다. 블랙베리와 블랙 멀버리 같은 잘 익은 검은 과실류의 풍성한 부케가 돋보이며",
      "발사믹과 약간의 코코아",
      "바닐라 향이 느껴집니다."
    ]
  },
  {
    "slug": "donnafugata-angheli-2",
    "nameKo": "Donnafugata, Angheli",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "시칠리아의 현대적인 와인 메이킹을 대표할만한 와인으로, 정열적인 지중해의 햇빛을 받고 자란 멀롯과 카버네 소비뇽을 블랜딩 해 완성했습니다. 짙은 루비 컬러와 체리, 자두, 빌베리와 같은 잘 익은 붉은 과일의 아로마, 감초 향이 느껴지며 약간의 코코아와 바닐라 향이 매력을 더합니다. 부드러운 탄닌과 짭짤한 감칠맛을 가진 와인으로 12개월간 프렌치 오크에서 숙성하며 병입 후 18개월의 추가 숙성을 거칩니다. 8년 이상의 지속력을 가지고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "돈나푸가타  앙겔리",
    "grapeNames": [
      "국제 품종을 사용한 새로운 시칠리아 와인"
    ]
  },
  {
    "slug": "donnafugata-sedara-2",
    "nameKo": "Donnafugata, Sedara",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "멀롯(Merlot), 시라(Syrah) 등 쥬세페 토마시의 소설이자 루키노 비스콘티의 명작 영화 레오파드에 등장하는 여주인공 안젤리카에서 그 이름을 빌려왔습니다. 돈나푸가타는 레이블의 여인을 통해 영화 속 아름답고 당당한 안젤리카 세다라의 모습을 담아냈습니다. 그란디 마르끼의 멤버이자 시칠리아 최고의 와이너리",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "돈나푸가타  세다라",
    "grapeNames": [
      "시칠리아 토착 품종 네로 다볼라를 메인으로 카버네 소비뇽과 멀롯",
      "시라와 같은 국제 품종을 소량 블랜딩했습니다. 옅은 보라빛이 감도는 루비 컬러의 와인으로",
      "체리와 자두 같은 붉은 과일의 향기가 강렬하게 코를 휘감습니다. 약간의 발사믹과 민트 노트가 느껴지며 입에 머금으면 블랙베리와 체리의 매력적인 맛이 충만하게 느껴집니다. 약간의 담뱃잎 향과 세이지 등 허브류의 스파이시함",
      "미네랄리티가 가득 느껴지는 가운데 부드러운 탄닌과 구조감이 강한 여운을 남깁니다. 4~5년 정도의 숙성 잠재력을 가집니다."
    ]
  },
  {
    "slug": "donnafugata-sherazade-2",
    "nameKo": "Donnafugata, Sherazade",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "아라비안 나이트의 주인공 세라자데 왕비의 이름을 따서 만들어진 와인입니다. 이국적인 와인의 레이블은 와인 생산에 영감을 주었던 이야기에 바치는 찬사임과 동시에 이 와인이 세라자데 왕비의 이야기만큼 매혹적임을 나타냅니다. 그란디 마르끼의 멤버이자 시칠리아 최고의 와이너리 1851년 설립되어 현재 시칠리아 최고의 와이너리로 평가 받는 돈나푸가타는 160년의 전통을 가진 유서 깊은 가족 회사이자 이탈리아의 프리미엄 와인 생산자 모임 ‘그란디 마르끼(Grandi Marci)’의 멤버로 이탈리아 와인의 품질을 세계에 알리고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "돈나푸가타  세라자데",
    "grapeNames": [
      "2006년 빈티지로 처음 탄생한 돈나푸가타 세라자데는 시칠리아의 토착 품종이자 지역을 대표하는 품종인 네로 다볼라로 만들어집니다. 매력적인 밝은 루비 컬러가 매혹적인 첫 인상을 남기며",
      "자두와 체리의 신선한 뉘앙스와 약간의 스파이시한 향이 기억에 뚜렷하게 남습니다. 입 안에 꽉 차는 듯한 튼튼한 구조감과 놀라울 만큼 신선한 풍미",
      "훌륭한 탄닌을 가진 밸런스 좋은 와인으로",
      "피자나 스파게티 같은 이탈리아 음식은 물론 팟타이 등의 아시아 음식들과도 잘 어울립니다."
    ]
  },
  {
    "slug": "donnafugata-lumera-2",
    "nameKo": "Donnafugata, Lumera",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "사랑이 넘치는 봄과 같은 로맨틱한 로제 와인 시칠리아 섬의 남서쪽 콘테사 엔텔리나 빈야드에서 재배한 포도로 생산하는 와인으로, 신선한 과일향을 유지하기 위해 저온 압착 후 자동 온도 조절이 가능한 스테인리스 통에서 숙성합니다. 투명한 장미빛 컬러에 석류와 건포도, 산딸기와 같은 과일향과 아카시아 꽃 향이 생생하게 느껴집니다. 상큼한 산도와 부드러움이 완벽하게 균형을 이루는 와인으로, 식전 뿐 아니라 다양한 요리와 함께 점심, 저녁 식사에도 즐길 수 있는 매력적인 로제 와인입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "돈나푸가타  루메라",
    "grapeNames": []
  },
  {
    "slug": "donnafugata-la-fuga-2",
    "nameKo": "Donnafugata, La Fuga",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "콘테사 엔텔리나 언덕에서 성장한 샤도네이 포도로 만든 와인으로, 가장 훌륭한 시칠리아 화이트 와인의 표준으로 일컬어지는 돈나푸가타의 대표 와인 중 하나이기도 합니다. 볕 짚과 같은 황금빛 컬러와 파인애플을 비롯한 열대 과일의 노트가 풍성하게 느껴집니다. 약간의 삼나무 향과 오렌지 껍질의 향이 피어오르는 가운데 은은하고 우아한 흰 꽃의 힌트가 더해집니다. 매력적인 감칠맛이 입 안을 가득 채우며 생생한 산도가 느껴지는, 드라이하면서도 부드럽고 우아한 와인입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "돈나푸가타  라푸가",
    "grapeNames": []
  },
  {
    "slug": "donnafugata-anthilia-2",
    "nameKo": "Donnafugata, Anthilia",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "신선함과 상쾌함을 가득 담은 돈나푸가타의 대표 와인 향긋한 아로마와 함께 드라이하면서 신선한 느낌이 가득 들어차 있습니다. 과즙이 풍부한 복숭아와 같은 달콤하면서도 기품 있는 과일의 느낌이 인상적이며 약간의 들꽃 향기도 피어오릅니다. 입 안에서는 과일의 맛이 한층 더 강하게 선명하게 느껴지며 신선함과 여운이 오래 지속됩니다. 시원하게 마시기 좋은 와인으로 식전주로는 물론, 해산물 파스타와 토마토 바질 부스르게타 등의 가벼운 요리와 함께하기 매우 좋습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "돈나푸가타  안띨리아",
    "grapeNames": [
      "카타라토(Catarratto)와 기타 화이트 품종 블랜딩"
    ]
  },
  {
    "slug": "donnafugata-lighea-2",
    "nameKo": "Donnafugata, Lighea",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "지중해의 햇살과 향기를 담은 휴식 같은 와인 그란디 마르끼의 멤버이자 시칠리아 최고의 와이너리 1851년 설립되어 현재 시칠리아 최고의 와이너리로 평가 받는 돈나푸가타는 160년의 전통을 가진 유서 깊은 가족 회사이자 이탈리아의 프리미엄 와인 생산자 모임 ‘그란디 마르끼(Grandi Marci)’의 멤버로 이탈리아 와인의 품질을 세계에 알리고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "돈나푸가타  리게아",
    "grapeNames": [
      "모스카토 달레산드리아(Moscato d’Alessandria)로도 알려진 시칠리아 토착 품종 지비보로 만들어진 와인입니다. 아카시아 꿀과 꽃",
      "캐러멜 등의 화사한 향을 특징으로 하는 지비보의 특성을 100% 반영한 와인으로",
      "오렌지 꽃을 연상시키는 향이 매력적입니다."
    ]
  },
  {
    "slug": "donnafugata-ben-rye-2",
    "nameKo": "Donnafugata, Ben Rye",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "‘바람의 아들’ 이탈리아 최고의 스위트 와인 1989년 처음 출시된 벤 리에는 지비보 포도를 햇빛과 바람 등을 사용해 자연적으로 건조하는 ‘파시토(Passito)’ 방식으로 만들어진 이탈리아 최고의 스위트 와인 중 하나입니다. 멋진 황금빛 컬러를 띄고 있으며 입 안에서는 말린 살구와 대추야자, 말린 무화과 등의 이국적이고 매력적인 풍미가 가득 느껴집니다. 너무 부담스럽지 않은 달콤함이 독특하고 긴 여운을 남기는 와인으로 디저트로 마시기에 훌륭하며, 케이크나 치즈 등과도 잘 어울립니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "돈나푸가타  벤 리에",
    "grapeNames": []
  },
  {
    "slug": "donnafugata-bell-assai-2",
    "nameKo": "Donnafugata, Bell’Assai",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "봄 바람의 설레임을 가득 담은 레드 와인 ‘매우 아름답다(Bell’Assai)’라는 그 이름처럼 풍부한 아로마를 가진 와인으로, 바이올렛과 장미꽃 향기가 와인 잔 가득 넘쳐흐르며 입 안에서는 신선한 딸기와 라즈베리의 과즙을 마시는 듯한 풍성한 맛이 느껴집니다. 부드러운 탄닌과 실크 같은 질감을 가진 신선한 스타일의 레드 와인입니다. 그란디 마르끼의 멤버이자 시칠리아 최고의 와이너리",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "돈나푸가타  벨아사이",
    "grapeNames": [
      "비토리아(Vittoria) 지역의 토착 품종이자 강렬한 꽃 향기를 가진 품종인 프라파토(Frappato)를 사용한 와인입니다."
    ]
  },
  {
    "slug": "etna-sicilia-5",
    "nameKo": "▶ 원 산 지 : 에트나(Etna) - 시칠리아 (Sicilia), 이탈리아",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "금빛으로 익은 과일과 지중해 허브의 은은한 향이 와인에 우아함을 더하며 입 안에서는 신선하고 풍성한 느낌이 가득합니다. 화산재 토양에서 태어난 에트나 와인 특유의 풍부한 미네랄리티가 매력적입니다. 스테인리스 스틸에서 발효했으며 재사용 프렌치 오크와 스테인리스 탱크로 나누어 10개월간 숙성했습니다. 이후 9개월간 병에서 안정화를 거친 후 출시됩니다. 5년 이상의 숙성 잠재력을 가지고 있으며, 샐러드, 포르치니 버섯, 생선 요리와 잘 어울립니다. 그란디 마르끼의 멤버이자 시칠리아 최고의 와이너리",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "돈나푸가타  술 불카노 비앙코\u000bDonnafugata, Sul Vulcano Bianco",
    "grapeNames": []
  },
  {
    "slug": "etna-sicilia-6",
    "nameKo": "▶ 원 산 지 : 에트나(Etna) – 시칠리아 (Sicilia), 이탈리아",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "옅은 핑크 컬러가 눈길을 사로잡습니다. 에트나의 화산재에서 자란 네렐로 마스칼레제 포도의 미네랄리티와 신선함이 돋보이는 와인으로, 마치 꽃이 활짝 핀 등나무 밑에 서있는 듯한 은은한 향기가 주위를 감쌉니다. 자두와 핑크 자몽의 맛이 느껴집니다. 스테인리스 스틸 탱크에서 발효, 3개월간의 숙성을 거칩니다. 이후 2개월간 병에서 추가 숙성 후 출시됩니다. 샐러드나 신선한 치즈와 같은 지중해식 음식은 물론 맵지 않은 아시아 요리와도 잘 어울립니다. 그란디 마르끼의 멤버이자 시칠리아 최고의 와이너리",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "돈나푸가타  술 불카노 로사토\u000bDonnafugata, Sul Vulcano Rosato",
    "grapeNames": []
  },
  {
    "slug": "etna-sicilia-7",
    "nameKo": "▶ 원 산 지 : 에트나(Etna) – 시칠리아 (Sicilia), 이탈리아",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "네렐로 카푸치오(Nerello Cappuiccio) 에트나 와인의 특징을 그대로 담아낸 옅은 루비 컬러의 레드 와인입니다. 딸기와 체리 등 붉은 과일과 제비꽃을 중심으로 한 꽃향기가 짙은 인상을 남기며, 시나몬, 넛맥 등의 따뜻한 향신료 뉘앙스가 은은하게 풍겨납니다. 입 안에서는 부드러운 질감과 더불어 아로마와 맛이 완벽한 하모니를 이루며 화산 지형에서 자란 포도 특유의 미네랄리티와 신선함이 매끄러운 탄닌과 어우러집니다. 스테인리스 스틸 탱크에서 발효 후 2~3회 사용한 프렌치 오크와 탱크로 나누어 14개월간 숙성합니다. 7개월 이상 병에서 추가 숙성을 거친 후 출시됩니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "돈나푸가타  술 불카노 로쏘\u000bDonnafugata, Sul Vulcano Rosso",
    "grapeNames": [
      "화산지대 토착 품종으로 만든 레드와인"
    ]
  },
  {
    "slug": "etna-sicilia-8",
    "nameKo": "▶ 원 산 지 : 에트나(Etna) - 시칠리아 (Sicilia), 이탈리아",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "돈나푸가타의 크뤼급 레드와인으로 에트나 빈야드에서도 가장 좋은 포도만을 선별해 만들어집니다. 아름다운 루비 컬러와 더불어 블랙베리와 레드 커런트 등 매혹적인 붉은 과일의 향이 나타나며, 약간의 담뱃잎과 넛맥의 뉘앙스가 발사믹, 깨진 돌과 같은 미네랄리티와 어우러집니다. 입 안에서는 특별한 복합미와 우아한 캐릭터가 드러나며 매끄러운 탄닌이 긴 피니쉬로 이어집니다. 스테인리스 스틸 탱크에서 발효 후 2~3회 사용한 프렌치 오크에서 14개월간 숙성됩니다. 이후 12개월간 병 숙성을 거쳐 출시되며, 10년 이상 장기 보관이 가능합니다. 레이블의 이미지는 화산이 폭발할 때의 굉음을 묘사한 것입니다. 와인의 우아한 캐릭터 속에 감춰진 파워와 입 안에서 펼쳐지는 다채로운 맛과 향을 레이블의 이미지에 담아냈습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "돈나푸가타 프라고레 에트나 로쏘\u000bDonnafugata, Fragore Etna Rosso",
    "grapeNames": []
  },
  {
    "slug": "donnafugata-rosa-2",
    "nameKo": "Donnafugata, Rosa",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 12,
    "foodPairing": "[]",
    "description": "돌체앤가바나와 돈나푸가타의 콜라보레이션 와인 돈나푸가타가 와인의 생산을, 돌체&가바나가 레이블과 바틀 디자인을 담당했습니다. 와인의 이름인 로자는 ‘로제 와인’을 의미하는 것으로, 와인의 아름다운 분홍빛 컬러를 상징합니다. 2020년 첫 빈티지(2019) 출시 직후 뜨거운 화제를 모으며 전 세계적으로 품귀 현상을 일으 킨 와인입니다. 그란디 마르끼의 멤버이자 시칠리아 최고의 와이너리",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "돈나푸가타 로사",
    "grapeNames": [
      "유럽에서 가장 크고 활발한 활화산으로 불리는 ‘에트나(Etna)’는 연중 포도밭을 뒤덮는 화산재와 높은 해발고도로 인한 낮은 기온",
      "풍부한 일조량으로 놀랍도록 우아하고 미네랄리티가 강한 와인을 만들어냅니다. 로자는 이 지역의 대표 품종이자 좋은 산도와 프레시한 허브향",
      "섬세한 미네랄리티를 가진 네렐로 마스칼레제와 풍부한 타닌과 구조감을 가진 노세라를 블랜딩한 와인입니다. 오묘하고 밝은 분홍빛의 컬러가 눈을 사로잡으며 자스민 꽃의 우아한 부케",
      "산딸기",
      "복숭아의 부드러운 과일향이 펼쳐집니다. 입 안에서는 베르가못의 신선하면서도 독특한 허브향이 차오르며 풍부한 미네랄리티와 가벼운 타닌이 훌륭한 밸런스를 선사합니다."
    ]
  },
  {
    "slug": "donnafugata-isolano-2",
    "nameKo": "Donnafugata Isolano",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 12,
    "foodPairing": "[]",
    "description": "돌체앤가바나와 돈나푸가타의 콜라보레이션 와인 돈나푸가타가 와인의 생산을, 돌체&가바나가 레이블과 바틀 디자인을 담당했습니다. 2020년 출시된 이들의 첫 콜라보레이션 와인 Rosa와 Tancredi Limited Edition은 출시 직후 전 세계에서 품귀현상을 일으켰고, 이러한 호응에 힘입어 2021년 9월, 시칠리아의 심장 에트나를 무대로 화이트와 레드 두 가지 와인이 새롭게 출시되었습니다. 유럽에서 가장 크고 활발한 활화산으로 불리는 ‘에트나(Etna)’는 연중 포도밭을 뒤덮는 화산재와 높은 해발고도로 인한 낮은 기온, 풍부한 일조량으로 놀랍도록 우아하고 미네랄리티가 강한 와인을 만들어냅니다. 감귤류의 신선한 시트러스 아로마가 코 끝을 맴돌며 활짝 핀 꽃, 지중해 허브의 복합적이고 우아한 노트가 주변을 감쌉니다. 놀라운 미네랄리티와 긴 여운을 가진 와인으로 ‘에트나 와인’의 매력을 있는 그대로 보여줍니다. 스테인리스 탱크와 재사용한 프렌치오크에서 10개월간 숙성 후 12개월간의 추가 병 숙성을 거쳤습니다. 10년 이상의 숙성 잠재력을 가진 와인입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "돈나푸가타 이졸라노",
    "grapeNames": []
  },
  {
    "slug": "donnafugata-cuordilava-2",
    "nameKo": "Donnafugata Cuordilava",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "돌체앤가바나와 돈나푸가타의 콜라보레이션 와인 돈나푸가타가 와인의 생산을, 돌체&가바나가 레이블과 바틀 디자인을 담당했습니다. 2020년 출시된 이들의 첫 콜라보레이션 와인 Rosa와 Tancredi Limited Edition은 출시 직후 전 세계에서 품귀현상을 일으켰고, 이러한 호응에 힘입어 2021년 9월, 시칠리아의 심장 에트나를 무대로 화이트와 레드 두 가지 와인이 새롭게 출시되었습니다. 유럽에서 가장 크고 활발한 활화산으로 불리는 ‘에트나(Etna)’는 연중 포도밭을 뒤덮는 화산재와 높은 해발고도로 인한 낮은 기온, 풍부한 일조량으로 놀랍도록 우아하고 미네랄리티가 강한 와인을 만들어냅니다. 밝은 루비 컬러의 와인으로 라즈베리와 크랜베리와 같은 붉은 과일의 향이 피어납니다. 스파이시한 노트와 더불어 덤불에서 느껴지는 약간의 earthy함도 가지고 있습니다. 입 안에서는 깊은 과실의 향취와 잘 정리된 타닌, 우아한 미네랄리티가 긴 여운을 남깁니다. 프렌치 오크에서 14개월간 숙성 후 30개월간 병 숙성을 거쳐 출시됩니다. 10년 이상의 장기 숙성 능력을 갖춘 와인입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "돈나푸가타 꾸오르디라바",
    "grapeNames": []
  },
  {
    "slug": "donnafugata-tancredi-2",
    "nameKo": "Donnafugata, Tancredi",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "그란디 마르끼의 멤버이자 시칠리아 최고의 와이너리 1851년 설립되어 현재 시칠리아 최고의 와이너리로 평가 받는 돈나푸가타는 160년의 전통을 가진 유서 깊은 가족 회사이자 이탈리아의 프리미엄 와인 생산자 모임 ‘그란디 마르끼(Grandi Marci)’의 멤버로 이탈리아 와인의 품질을 세계에 알리고 있습니다. 와이너리의 이름인 돈나푸가타는 ‘피난처의 여인’이라는 뜻을 담고 있습니다. 이는 나폴리의 왕이었던 페르디난도(Ferdinando) 4세의 아내이자 낭만주의의 상징으로 여겨지는 마리아 카롤리나가 나폴레옹의 군대를 피해 시칠리아로 피난을 와 현재는 돈나푸가타 와이너리가 된 콘테사 엔텔리나의 건물에 머물렀던 일화에서 비롯되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "돈나푸가타  탄크레디",
    "grapeNames": [
      "시칠리아 대표 품종 네로 다볼라와 대표적인 레드와인 품종 카버네 소비뇽의 블랜딩을 통해 탄생한 세련되고 우아한 스타일의 와인입니다."
    ]
  },
  {
    "slug": "romagna-trebbiano",
    "nameKo": "Romagna Trebbiano",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "에밀리아 로마냐 (Emilia-Romagna) - 토스카나",
    "volume": 750,
    "foodPairing": "[\"▶ 해산물 샐러드\", \"오일 파스타\", \"숙성회\"]",
    "description": "최고의 로마냐 빈야드에서 만들어진 와인으로, 각 레이블은 레오나르도 다빈치가 여행 중 아름다운 5개의 도시의 베스트샷을 직접 드로잉한 것으로 그의 여행기를 와인 레이블에 담고 있습니다. 와인을 오픈했을 때 가장 먼저 레몬, 라임향이 느껴지고 그리고 풋사과와 살구의 향이 후각을 자극합니다. 입안 가득 느껴지는 풍부한 풍미와 어우러지는 산도 그리고 깔끔하게 느껴지는 신선함이 매력적인 와인입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "로마냐 트레비아노",
    "grapeNames": []
  },
  {
    "slug": "romagna-sangiovese-riserva",
    "nameKo": "Romagna Sangiovese Riserva",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "에밀리아 로마냐 (Emilia-Romagna) - 토스카나",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 17,
    "foodPairing": "[\"▶ 토마토 베이스 파스타\", \"피자\", \"붉은 고기류\"]",
    "description": "최고의 로마냐 빈야드에서 만들어진 와인으로, 각 레이블은 레오나르도 다빈치가 여행 중 아름다운 5개의 도시의 베스트샷을 직접 드로잉한 것으로 그의 여행기를 와인 레이블에 담고 있습니다. 제비꽃, 장미등 꽃향기가 지배적이며, 블랙베리, 체리와 같은 과실 향과 검은 후추향이 와인의 향을 더욱 풍부하게 합니다. 적절한 산도와 풍미가 어우러지며 부드러운 탄닌의 긴 여운을 느낄 수 있습니다. ‘칸티네 레오나르도 다 빈치’는 1961년 천재 미술가이자 과학자인 레오나르도 다 빈치의 고향인 Vinci 마을에 약 70헥타르의 포도원으로 그 역사를 시작하여 현재 50년이 지난 현재는 총 750헥타르의 포도원을 소유하고 있습니다. Chianti, Brunello di Montalcino 와인으로도 각종 평론지, 와인대회에서 수상을 받고, 이를 통한 명성도 매년 쌓아가고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "로마냐 산지오베제 리제르바",
    "grapeNames": []
  },
  {
    "slug": "romagna-sangiovese-appassimento",
    "nameKo": "Romagna Sangiovese Appassimento",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "에밀리아 로마냐 (Emilia-Romagna) - 토스카나",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 17,
    "foodPairing": "[\"▶ 붉은 고기류 로스트감자\"]",
    "description": "최고의 로마냐 빈야드에서 만들어진 와인으로, 각 레이블은 레오나르도 다빈치가 여행 중 아름다운 5개의 도시의 베스트샷을 직접 드로잉한 것으로 그의 여행기를 와인 레이블에 담고 있습니다. 바닐라, 체리, 익은 자두, 그리고 스파이스 향과 담배향. 오크 숙성으로 인한 둥글둥글한 탄닌과 아파시멘토 공법으로 만들어졌기 때문에 더욱 풍부한 과실 풍미를 가지고 있는 와인입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "로마냐 산지오베제 아파시멘토",
    "grapeNames": []
  },
  {
    "slug": "da-vinci-in-romagna",
    "nameKo": "칸티네 레오나르도 다 빈치에서는 아래 4개의 브랜드를 생산합니다.",
    "nameEn": "- Da Vinci In Romagna",
    "type": "red",
    "country": "Italy",
    "regionL1": "빈치(Vinci) - 토스카나",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 12,
    "foodPairing": "[\"▶ 야채볶음\", \"파스타\", \"오븐에서 구운 생선요리\"]",
    "description": "- Da Vinci In Romagna - Da Vinci (I Capolavori) 크뤼급의 ‘다빈치 인 로마냐(Da Vinci in Romagna)‘와 ‘빌라 다빈치(Villa Da Vinci)’, 프리미엄급의 ‘다 빈치(Da Vinci)’ 그리고 데일리급의 ‘모나리자(Monnalisa)’로 다양하게 상황에 맞는 와인을 즐기실수 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "‘칸티네 레오나르도 다 빈치’는 1961년 천재 미술가이자 과학자인 레오나르도 다 빈치의 고향인 Vinci 마을에 약 70헥타르의 포도원으로 그 역사를 시작하여 현재 50년이 지난 현재는 총 750헥타르의 포도원을 소유하고 있습니다. Chianti, Brunello di Montalcino 와인으로도 각종 평론지, 와인대회에서 수상을 받고, 이를 통한 명성도 매년 쌓아가고 있습니다.",
    "grapeNames": [
      "빈치 마을의 가장 유명한 화이트 품종인 베르멘티노를 통해 만든 와인으로",
      "베르멘티노 단일 포도밭에서 만들어진 ‘크뤼’급 와인입니다."
    ]
  },
  {
    "slug": "villa-da-vinci-san-zio",
    "nameKo": "Villa Da Vinci San Zio",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "빈치(Vinci) - 토스카나",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 파스타\", \"그릴스테이크\"]",
    "description": "산지오베제의 집약적 풍미, 숙성력 그리고 우아한 아로마를 보여줍니다. 오크통에서의 2~4개월 간의 숙성을 통해 와인의 색과 풍미 그리고 아로마를 발현 시켰으며, 산지오베제라고 믿을 수 없는 부드러운 산미와 풍미로 놀라움을 선사합니다. ‘레오나르도 다 빈치’ – ‘수태고지’ 1472年作 ‘칸티네 레오나르도 다 빈치’는 1961년 천재 미술가이자 과학자인 레오나르도 다 빈치의 고향인 Vinci 마을에 약 70헥타르의 포도원으로 그 역사를 시작하여 현재 50년이 지난 현재는 총 750헥타르의 포도원을 소유하고 있습니다. Chianti, Brunello di Montalcino 와인으로도 각종 평론지, 와인대회에서 수상을 받고, 이를 통한 명성도 매년 쌓아가고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "빌라 다 빈치 산 지오",
    "grapeNames": [
      "자가 포도밭에서 손 수확된 최고급 품질의 산지오베제만을 사용하여 만든 와인으로 토스카나 지방에서 가장 유명한 포도 품종인 산지오베제가 어떻게 빈치 마을의 떼루아를 표현하는지 알 수 있는 와인입니다."
    ]
  },
  {
    "slug": "villa-da-vinci-santo-ippolito",
    "nameKo": "Villa Da Vinci Santo Ippolito",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "빈치(Vinci) - 토스카나",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 육회\", \"페포소스튜\", \"로스트포크\"]",
    "description": "시라 (Syrah) 30%, 멀롯(Merlot) 30% 자가 포도밭에서 손수확한 산지오베제, 멀롯, 쉬라즈를 블렌딩하여 만든 와인입니다. 블렌딩을 통해 멀롯의 밸런스, 시라의 탄닌과 알코올 그리고 산지오베제의 풍미가 만드는 조화를 이끌어 냈습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "빌라 다 빈치 산토 이폴리토",
    "grapeNames": []
  },
  {
    "slug": "da-vinci-chianti",
    "nameKo": "Da Vinci Chianti",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "빈치(Vinci) - 토스카나",
    "volume": 750,
    "foodPairing": "[\"▶ 미트베이스 소스의 파스타\", \"그릴에서 구운 고기 (BBQ)\"]",
    "description": "15~20년된 포도나무에서 수확하였으며 프렌치&아메리칸 오크통에서 10개월이상 숙성 시킵니다. 진한 루비색과 과실향과 스파이시한 풍미가 나며, 특히 체리, 바닐라, 시나몬의 풍미가 두드러집니다. 입안에서는 적당한 바디감과 함께 풍부하지만 부드러운 타닌이 조화를 이루며 긴 여운을 남깁니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "다 빈치 끼안티",
    "grapeNames": []
  },
  {
    "slug": "da-vinci-chianti-riserva",
    "nameKo": "Da Vinci Chianti Riserva",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "빈치(Vinci) - 토스카나",
    "volume": 750,
    "foodPairing": "[\"▶ 미트베이스 소스의 파스타\", \"그릴에서 구운 고기 (BBQ)\"]",
    "description": "15~20년된 포도나무에서 수확하였으며 프렌치&아메리칸 오크통에서 10개월이상 숙성 시킵니다. 진한 보랏빛색과 과실향과 스파이시한 풍미가 나며, 특히 체리, 바닐라, 시나몬 등의 진한 과실 풍미가 두드러집니다. 입안에 꽉 차는 바디감과 함께 풍부하지만 부드러운 타닌이 조화를 이루며 긴 여운을 남기는 와인입니다. ‘칸티네 레오나르도 다 빈치’는 1961년 천재 미술가이자 과학자인 레오나르도 다 빈치의 고향인 Vinci 마을에 약 70헥타르의 포도원으로 그 역사를 시작하여 현재 50년이 지난 현재는 총 750헥타르의 포도원을 소유하고 있습니다. Chianti, Brunello di Montalcino 와인으로도 각종 평론지, 와인대회에서 수상을 받고, 이를 통한 명성도 매년 쌓아가고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "다 빈치 끼안티 리제르바",
    "grapeNames": []
  },
  {
    "slug": "da-vinci-brunello-di-montalcino",
    "nameKo": "Da Vinci Brunello di Montalcino",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "빈치(Vinci) - 토스카나",
    "volume": 750,
    "foodPairing": "[\"▶ 붉은 고기\", \"숙성된 치즈\"]",
    "description": "최고의 빈티지 중 하나인 2012년은 매우 덥고 건조하였고 이는 최고의 퀄리티와 장기숙성이 가능한 BDM을 생산하기에 매우 적합한 해였습니다. 블랙베리, 블랙 커런트와 체리향이 두드러지며 입안에 가득 차는 진한 과실맛은 와인의 향과 동일합니다. 밸런스가 좋고 기분좋은 신선함을 가져 목넘김이 부드럽고 마시기 편한 스타일의 브루넬로 디 몬탈치노 입니다. ‘칸티네 레오나르도 다 빈치’는 1961년 천재 미술가이자 과학자인 레오나르도 다 빈치의 고향인 Vinci 마을에 약 70헥타르의 포도원으로 그 역사를 시작하여 현재 50년이 지난 현재는 총 750헥타르의 포도원을 소유하고 있습니다. Chianti, Brunello di Montalcino 와인으로도 각종 평론지, 와인대회에서 수상을 받고, 이를 통한 명성도 매년 쌓아가고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "다 빈치 브루넬로 디 몬탈치노",
    "grapeNames": []
  },
  {
    "slug": "monnalisa-vino-rosso-d-italia",
    "nameKo": "Monnalisa Vino Rosso D’Italia",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "에밀리아 로마냐 (Emilia-Romagna) - 토스카나",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 17,
    "foodPairing": "[\"▶ 토마토 베이스 파스타\", \"피자\", \"붉은 고기류\"]",
    "description": "제비꽃, 장미 등의 꽃향기를 제일 먼저 만날 수 있으며, 그 뒤로 블랙 베리, 블루 베리와 같은 과실향 및 검은 후추향이 와인의 향을 더욱 풍부하게 만듭니다. 풍부한 풍미와 조화로운 탄닌, 부드럽고 긴 여운과 함께 느껴지는 깊은 맛이 이 와인의 특징입니다. 모나리자의 모나는 이탈리아어로 유부녀에 대한 경칭, 리자는 피렌체의 부유한 상인 조콘다의 부인 이름으로 레오나르도 다 빈치가 피렌체의 부호 프란체스코 델 조콘다를 위하여 그 부인을 그린 초상화이다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "모나리자 비노 로쏘 디 이탈리아",
    "grapeNames": []
  },
  {
    "slug": "monnalisa-romagna-sangiovese-superiore",
    "nameKo": "Monnalisa  Romagna Sangiovese Superiore",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "에밀리아 로마냐 (Emilia-Romagna) - 토스카나",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 17,
    "foodPairing": "[\"▶ 토마토 베이스 파스타\", \"피자\", \"붉은 고기류\"]",
    "description": "라즈베리와 , 시트러스향이 기분좋게 후각을 자극하며 블랙베리와 같은 과실향 또한 만날 수 있습니다. 미디엄 바디의 와인으로 산지오베제 와인 특유의 높은 산도가 입 안에서 감칠맛을 더 합니다. 데일리로 마시기 좋은 다빈치의 모나리자 로마냐 산지오베제 수페리오레 와인입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "모나리자 로마냐 산지오베제 수페리오레",
    "grapeNames": []
  },
  {
    "slug": "romagna-sangiovese-riserva-2",
    "nameKo": "Romagna Sangiovese Riserva",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "에밀리아 로마냐 (Emilia-Romagna)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 17,
    "foodPairing": "[\"▶ 토마토 베이스 파스타\", \"피자\", \"붉은 고기류\", \"구운 감자\"]",
    "description": "최고의 로마냐 지역 빈야드에서 만들어진 와인으로,       각 레이블은 레오나르도 다빈치의 6개월간의 여행 기록을 담고 있습니다. 레오나르도 다 빈치는 체사레 보르자(Cesare Borgia)    추기경의 초청으로 1502년 로마냐 지역을 방문하였고, 군대 지휘관이기도 했던 체사레 경의 요청에 의해      체세나(Cesena) 마을의 요새(fortress)를 설계하기도   하였습니다. 로마냐 산지오베제 리제르바의 레이블에는 레오나르도 다 빈치가 직접 설계한 요새의 모습이 담겨있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "로마냐 산지오베제 리제르바",
    "grapeNames": []
  },
  {
    "slug": "romagna-sangiovese-appassimento-2",
    "nameKo": "Romagna Sangiovese Appassimento",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "에밀리아 로마냐 (Emilia-Romagna)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 17,
    "foodPairing": "[\"▶ BBQ\", \"구운 감자\", \"초콜릿 케익\"]",
    "description": "최고의 로마냐 지역 빈야드에서 만들어진 와인으로,       각 레이블은 레오나르도 다빈치의 6개월간의 여행  기록을 담고 있습니다. 레오나르도 다 빈치는 체사레 보르자(Cesare Borgia)    추기경의 초청으로 1502년 로마냐 지역을 방문         하였습니다. 로마냐의 뛰어난 와인 품질과 독자적인   양조 방식인 아파시멘토 기법에 감동을 받아 여러  장의 드로잉을 완성하였는데, 산지오베제 아파시멘토의 레이블에는 건조 중인 포도 송이가 그려져        있습니다.  레이블에 적힌 글귀인 ‘Uve Portate a Cesena’는 ‘체세나에서 가져온 포도’라는 뜻입니다. 깊은 루비색을 띠며 바닐라, 체리, 자두의 아로마와 담배, 향신료의 뉘앙스를 강렬하게 풍깁니다. .",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "로마냐 산지오베제 아파시멘토",
    "grapeNames": []
  },
  {
    "slug": "da-vinci-in-romagna-2",
    "nameKo": "칸티네 레오나르도 다 빈치에서는 아래 4개의 브랜드를 생산합니다.",
    "nameEn": "- Da Vinci In Romagna",
    "type": "red",
    "country": "Italy",
    "regionL1": "빈치(Vinci) - 토스카나",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 12,
    "foodPairing": "[\"▶ 야채볶음\", \"파스타\", \"오븐에서 구운 생선요리\"]",
    "description": "- Da Vinci In Romagna - Da Vinci (I Capolavori) 크뤼급의 ‘다빈치 인 로마냐(Da Vinci in Romagna)‘와 ‘빌라 다빈치(Villa Da Vinci)’, 프리미엄급의 ‘다 빈치(Da Vinci)’ 그리고 데일리급의 ‘모나리자(Monnalisa)’로 다양하게 상황에 맞는 와인을 즐기실수 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "‘칸티네 레오나르도 다 빈치’는 1961년 천재 미술가이자 과학자인 레오나르도 다 빈치의 고향인 Vinci 마을에 약 70헥타르의 포도원으로 그 역사를 시작하여 현재 50년이 지난 현재는 총 750헥타르의 포도원을 소유하고 있습니다. Chianti, Brunello di Montalcino 와인으로도 각종 평론지, 와인대회에서 수상을 받고, 이를 통한 명성도 매년 쌓아가고 있습니다.",
    "grapeNames": [
      "빈치 마을의 가장 유명한 화이트 품종인 베르멘티노를 통해 만든 와인으로",
      "베르멘티노 단일 포도밭에서 만들어진 ‘크뤼’급 와인입니다. 스트레다는 빈치 마을을 가로지르는 시냇물의 이름으로 빌라 다 빈치      포도밭을 따라 흐르고 있습니다."
    ]
  },
  {
    "slug": "villa-da-vinci-san-zio-2",
    "nameKo": "Villa Da Vinci San Zio",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "빈치(Vinci) - 토스카나",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 파스타\", \"그릴스테이크\"]",
    "description": "산지오베제의 집약적 풍미, 숙성력 그리고 검붉은   과일의 우아한 아로마를 보여줍니다. 오크통에서 2~4개월 간의 숙성을 통해 와인의 색과 풍미를 발현    시켰으며, 산지오베제라고 믿을 수 없는 부드러운   산미와 풍미로 놀라움을 선사합니다. ‘칸티네 레오나르도 다 빈치’는 1961년 천재 미술가이자 과학자인 레오나르도 다 빈치의 고향인 Vinci 마을에 약 70헥타르의 포도원으로 그 역사를 시작하여 현재 50년이 지난 현재는 총 750헥타르의 포도원을 소유하고 있습니다. Chianti, Brunello di Montalcino 와인으로도 각종 평론지, 와인대회에서 수상을 받고, 이를 통한 명성도 매년 쌓아가고 있습니다. 칸티네 레오나르도 다 빈치에서는 아래 4개의 브랜드를 생산합니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "빌라 다 빈치 산 지오",
    "grapeNames": [
      "포도밭에서 손 수확된 최고급 품질의 산지오베제와    콜로리노를 사용하여 만든 와인으로 토스카나 지방에서 가장 유명한 포도 품종인 산지오베제가 어떻게  빈치 마을의 떼루아를 표현하는지 알 수 있는 와인 입니다. 와인의 명칭인 산 지오는 빈치 마을의 포도밭과 올리브 나무 숲의 이름에서 따왔습니다."
    ]
  },
  {
    "slug": "villa-da-vinci-santo-ippolito-2",
    "nameKo": "Villa Da Vinci Santo Ippolito",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "빈치(Vinci) - 토스카나",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 육회\", \"토스카나 스타일 비프 스튜\", \"로스트 포크\"]",
    "description": "포도밭에서 손 수확한 산지오베제, 시라, 멀롯을 블렌딩하여 만든 와인입니다. 블렌딩을 통해 멀롯의 과일 농축미, 시라의 복합적인  아로마, 산지오베제의 우아한 탄닌의 질감과 신선한 산미의 조화를 이끌어 냈습니다. 빈치 마을에서 만들어지는 와인 중 가장 특출난 풍미를 지닌 와인으로 지역 떼루아의 특성을 잘 반영한 와인입니다. 산토 이폴리토는 빈치 마을에 있는 고대 로마     네스크 양식의 성당 이름이기도 합니다. 스테인리스 탱크에서 양조 후 뉴 프렌치 오크통에서 12~18개월 동안 숙성을 진행하여, 과실의 향 뿐만      아니라 블랙베리 잼 그리고 발사믹과 같은 향을 더했습니다. 입안에서는 멘톨과 바닐라의 풍미가 긴 여운을  남깁니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "빌라 다 빈치 산토 이폴리토",
    "grapeNames": []
  },
  {
    "slug": "da-vinci-chianti-2",
    "nameKo": "Da Vinci Chianti",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "빈치(Vinci) - 토스카나",
    "volume": 750,
    "foodPairing": "[\"▶ 미트베이스 소스의 파스타\", \"그릴에서 구운 고기 (BBQ)\"]",
    "description": "다 빈치(Da Vinci) 이 카폴라보리(I Capolavori) 시리즈는 레오나르도 다 빈치의 명화를 레이블에 담고 있습니다. I CAPOLAVORI는 마스터 피스라는 뜻을 가지고 있으며, 1483년 작(作) 암굴의 성모 작품을 끼안티와 끼안티    리제르바에서 찾아볼 수 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "다 빈치 끼안티",
    "grapeNames": []
  },
  {
    "slug": "da-vinci-chianti-riserva-2",
    "nameKo": "Da Vinci Chianti Riserva",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "빈치(Vinci) - 토스카나",
    "volume": 750,
    "foodPairing": "[\"▶ 미트베이스 소스의 파스타\", \"그릴에서 구운 고기 (BBQ)\"]",
    "description": "다 빈치(Da Vinci) 이 카폴라보리(I Capolavori) 시리즈는 레오나르도 다 빈치의 명화를 레이블에 담고 있습니다. I CAPOLAVORI는 마스터 피스라는 뜻을 가지고 있으며, 1483년 작(作) 암굴의 성모 작품을 끼안티와 끼안티    리제르바에서 찾아볼 수 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "다 빈치 끼안티 리제르바",
    "grapeNames": []
  },
  {
    "slug": "da-vinci-brunello-di-montalcino-2",
    "nameKo": "Da Vinci Brunello di Montalcino",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "빈치(Vinci) - 토스카나",
    "volume": 750,
    "foodPairing": "[\"▶ 붉은 고기\", \"숙성된 치즈\"]",
    "description": "다 빈치(Da Vinci) 이 카폴라보리(I Capolavori) 시리즈는 레오나르도 다 빈치의 명화를 레이블에 담고 있습니다. I CAPOLAVORI는 마스터 피스라는 뜻을 가지고 있으며, 브루넬로 디 몬탈치노에서는 1508년에서 1513년 사이에 완성된 것으로 여겨지는 세례 요한(San Giovanni Battista)의 모습을 찾아볼 수 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "다 빈치 브루넬로 디 몬탈치노",
    "grapeNames": []
  },
  {
    "slug": "streda-2017-vermentino",
    "nameKo": "▶ 빌라 다 빈치 스트레다 (Streda) 2017 - Vermentino",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "(S.to Ippolito) 2016 – Sangiovese, Syrah, Merlot ‘칸티네 레오나르도 다 빈치’는 1961년 천재 예술가이자 과학자인 레오나르도 다 빈치의     고향인 Vinci 마을에 약 70헥타르의 포도원으로 그 역사를 시작하여 60년이 지난 현재는 총 750헥타르의 포도원을 소유하고 있습니다. (* 레오나르도 다 빈치의 이름은 ‘Vinci 마을의 레오나르도’ 라는 뜻을 가지고 있습니다. )",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "500주년 기념 에디션 구성",
    "grapeNames": []
  },
  {
    "slug": "leonardo-da-vinci-uffizi-gallery-florence",
    "nameKo": "Leonardo Da Vinci, Uffizi Gallery Florence",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "수태고지 (The Annunciation), 1472년 作",
    "grapeNames": []
  },
  {
    "slug": "villa-da-vinci-streda-2017",
    "nameKo": "Villa Da Vinci Streda 2017",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "빈치(Vinci) - 토스카나",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 12,
    "foodPairing": "[\"▶ 야채 볶음 또는 튀김\", \"오일 파스타\", \"오븐에서 구운 생선요리\"]",
    "description": "투명한 볏짚색을 가지고 있으며, 잘 익은 복숭아 아로마와 꽃 향이 풍부하게  느껴집니다. 균형 잡힌 산도와 미네랄리티가 긴 여운을 남깁니다. 과실의 향을 충분히 보여주기 위해 스테인리스를 제외한 어떤 다른 과정도 거치지 않았습니다. 순수함을 상징하는 백합을 들고 있는 대천사 가브리엘",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "빌라 다 빈치 스트레다 2017",
    "grapeNames": [
      "빈치 마을의 가장 유명한 화이트 품종인 베르멘티노를 통해 만든 와인으로",
      "베르멘티노 단일 포도밭에서 만들어진 ‘크뤼’급 와인입니다."
    ]
  },
  {
    "slug": "villa-da-vinci-san-zio-2017",
    "nameKo": "Villa Da Vinci San Zio 2017",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "빈치(Vinci) - 토스카나",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 파스타\", \"그릴 스테이크\", \"파스트라미\", \"숙성 치즈\"]",
    "description": "산지오베제의 집약적 풍미, 숙성력 그리고 검붉은 과일의 우아한 아로마를   보여줍니다. 오크통에서 2~4개월 간의 숙성을 통해 와인의 색과 풍미 그리고 아로마를 발현 시켰으며, 산지오베제라고 믿을 수 없는 부드러운 산미와 풍미로 놀라움을 선사합니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "빌라 다 빈치 산 지오 2017",
    "grapeNames": [
      "포도밭에서 손 수확된 최고급 품질의 산지오베제와 콜로리노를 사용하여 만든 와인으로 토스카나 지방에서 가장 유명한 포도 품종인 산지오베제가 어떻게 빈치 마을의 떼루아를 표현하는지 알 수 있는 와인입니다."
    ]
  },
  {
    "slug": "villa-da-vinci-linarius-2016",
    "nameKo": "Villa Da Vinci Linarius 2016",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "빈치(Vinci) - 토스카나",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ BBQ\", \"볼로네제 파스타\", \"토스카나 페코리노 외 숙성 치즈\"]",
    "description": "포도밭에서 손 수확한 시라, 산지오베제를 블렌딩하여 만든 와인입니다. 시라 고유의 향신료 풍미, 바닐라와 커피의 향이 돋보이며 잘 익은 붉은 과일과    자두, 꽃 향이 이어집니다. 실크 처럼 부드럽고 균형 잡힌 탄닌이 입 안을 가득 메우고 긴 여운을 남깁니다. . 스테인리스 탱크에서 양조 후 프렌치 오크통에서 4~6개월 동안 숙성을 진행하여 라즈베리와 딸기 같은 붉은 과실의 풍미 뿐 아니라 바닐라와 달콤한 향신료의      뉘앙스가 조화를 이룹니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "빌라 다 빈치 리나리우스 2016",
    "grapeNames": []
  },
  {
    "slug": "villa-da-vinci-santo-ippolito-2016",
    "nameKo": "Villa Da Vinci Santo Ippolito 2016",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "빈치(Vinci) - 토스카나",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 육회\", \"비프 부르기뇽\", \"로스트 포크\", \"숙성 치즈\"]",
    "description": "포도밭에서 손 수확한 산지오베제, 시라, 멀롯을 블렌딩하여 만든 와인입니다. 블렌딩을 통해 멀롯의 과일 농축미, 시라의 복합적인 아로마, 산지오베제의 우아한 탄닌의 질감과 신선한 산미의 조화를 이끌어 냈습니다. 빈치 마을에서 만들어지는 와인 중 가장 특출난 풍미를 지닌 와인으로 지역 떼루아의 특성을 잘 반영한 와인입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "빌라 다 빈치 산토 이폴리토 2016",
    "grapeNames": []
  },
  {
    "slug": "lucia-bianco",
    "nameKo": "루치아 비앙코",
    "nameEn": "(Lucia Bianco)",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "servingTempMin": 12,
    "servingTempMax": 13,
    "foodPairing": "[]",
    "description": "루치아 비앙코 2021은 2022년 갓 병입한 신선한 내추럴 와인입니다. 루치아 비앙코의 빈야드는 팔레르모의 서쪽에 위치한 알카모(Alcamo)에 위치해 있습니다. 이곳의 토양은 모래로 이루어져 있으며 해발 300m 에 해당합니다. 카타라토는 산도와 그 신선함을 유지하기 위해 일찍 수확되어 와인은 보다 밝고 크런치한 느낌을 줍니다. 짧은 마세라시옹을 통해 와인에 깊이와 약간의 골드 컬러를 전달해줍니다. 베스코 패밀리는 Ciello 와이너리의 원동력이며 21세기에 시칠리아 와인의 방향을 선도하고자 하는 역동적인 가족경영 그룹입니다. 양조 과정에 있어서의 매우적은 개입과 자연적인 포도 재배에 대한 그들의 믿음은 세계 와인 매니아들에게 시칠리아 와인에 대한 믿음을 더욱 확고히 하고 있습니다.  여기에 더하여 신선하고 밝은 풍미와 전통과 현대 방식을 개방적으로 사용하여 새로운 와인 팬들의 상상력을 사로잡았습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "☆☆내추럴 와인은 와인 본연의 맛을 살리기 위해 필터링을 최소화 하여 주석 및 병내 부유물이 있을 수 있습니다.",
    "grapeNames": [
      "100% 오가닉 방식으로 재배된 카타라토 품종으로 만들어진 이 와인은",
      "와인 양조에 있어 최소한의 개입이 와인 본연의 맛을 살린다는 철학으로 이어져 최소한의 필터링만 진행하였습니다. 그 결과 병속에 미세한 세디먼트가 남아 와인이 클라우디 하지만 이 세디먼트는 와인에 풍미와 질감을 더해주며 입안을 더욱 풍부하게 만들어 줍니다."
    ]
  },
  {
    "slug": "medici-ermete",
    "nameKo": "Medici Ermete",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "에밀리아 로마냐(Emilia Romagna), 이탈리아",
    "volume": 750,
    "servingTempMin": 14,
    "servingTempMax": 15,
    "foodPairing": "[]",
    "description": "메디치 에르메테(Medici Ermete)는 1890년대에 설립된 가장 오래된 람브루스코 생산자 중 하나이자, 세계적인 명성을 이끌어낸 와이너리입니다. 기존의 람브루스코가 저렴한 스위트 스파클링 버전으로 미국에서 엄청난 인기를 끌었다가 점차 그 유명세가 시들해졌을 때, 메디치 에르메테(Medici Ermte)는 품질 좋은 포도를 생산하여 와인 양조 과정을 엄격하게 통제하고 생산량을 줄여 람브루스코의 위상을 높였습니다. 그를 따라 다른 람브루스코도 고급 품질의 와인을 생산하기 시작했으며 결과적으로 람브루스코의 품질향상이라는 결과를 끌어냈습니다. 메디치 에르메테(Medici Ermete)에서 만드는 와인 중 하나인 콘체르토(Concerto)는 죽기 전에 마셔봐야 할 와인 1001에 선정되었고, 감베로 로쏘에서 2010년부터 2023년까지 14년 연속으로 3글라스(Tre Bicchieri)를 수상한 유일무이한 람브루스코 와인입니다. 메디치 에르메테 퀘르치올리 람브루스코 세코",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "메디치 에르메테",
    "grapeNames": [
      "5대에 걸쳐 130년의 역사를 자랑하는 람브루스코의 명가",
      "메디치 에르메테(Medici Ermete)는 이탈리아의 에밀리아 로마냐(Emilia Romagna) 지역에 위치하고 있습니다. 에밀리아 로마냐(Emilia Romagna)는 이탈리아에서 음식",
      "패션",
      "건축 등 문화의 중심지로 유명하며",
      "람브로기니",
      "페라리",
      "마세라티와 같은 세계적으로 유명한 자동차 브랜드를 탄생시킨 곳이기도 합니다. 특히 미식의 천국으로 유명한데",
      "이 지역 사람들이 언제나 식사 테이블에 올리는 와인이 바로 이 람브루스코입니다. 포도 품종의 이름인 람브루스코는 세미 스파클링으로",
      "드라이-스위트",
      "화이트-레드까지 아우르며 전세계인의 입맛을 사로잡고 있습니다."
    ]
  },
  {
    "slug": "medici-ermete-2",
    "nameKo": "Medici Ermete",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "에밀리아 로마냐(Emilia Romagna), 이탈리아",
    "volume": 750,
    "servingTempMin": 8,
    "servingTempMax": 10,
    "foodPairing": "[]",
    "description": "메디치 에르메테 퀘르치올리 람브루스코 돌체 Medici Ermete Quercioli Lambrusco Dolce 람부르스코 마라니(Lambrusco Marani)",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "메디치 에르메테",
    "grapeNames": [
      "5대에 걸쳐 130년의 역사를 자랑하는 람브루스코의 명가",
      "메디치 에르메테(Medici Ermete)는 이탈리아의 에밀리아 로마냐(Emilia Romagna) 지역에 위치하고 있습니다. 에밀리아 로마냐(Emilia Romagna)는 이탈리아에서 음식",
      "패션",
      "건축 등 문화의 중심지로 유명하며",
      "람브로기니",
      "페라리",
      "마세라티와 같은 세계적으로 유명한 자동차 브랜드를 탄생시킨 곳이기도 합니다. 특히 미식의 천국으로 유명한데",
      "이 지역 사람들이 언제나 식사 테이블에 올리는 와인이 바로 이 람브루스코입니다. 포도 품종의 이름인 람브루스코는 세미 스파클링으로",
      "드라이-스위트",
      "화이트-레드까지 아우르며 전세계인의 입맛을 사로잡고 있습니다."
    ]
  },
  {
    "slug": "medici-ermete-3",
    "nameKo": "Medici Ermete",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "에밀리아 로마냐(Emilia Romagna), 이탈리아",
    "volume": 750,
    "servingTempMin": 8,
    "servingTempMax": 9,
    "foodPairing": "[]",
    "description": "Medici Ermete Concerto Lambrusco 신선한 레드 베리, 딸리, 라즈베리, 체리의 강렬한 뉘앙스가 특징입니다. 드라이하고 과실향이 풍부하며 신선함, 활기참과 함께 섬세함이 조화로운 풍미를 이룹니다. 산도와 탄닌의 완벽한 밸런스로 매우 깔끔하게 마실 수 있습니다. 이탈리아 현지 요리인, 라자냐, 미트 소스를 넣은 파스타등과도 잘 어울리지만, 딤섬, 바비큐, 햄버거 및 칩스등과도 좋은 페어링을 보여줍니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "메디치 에르메테",
    "grapeNames": [
      "5대에 걸쳐 130년의 역사를 자랑하는 람브루스코의 명가",
      "메디치 에르메테(Medici Ermete)는 이탈리아의 에밀리아 로마냐(Emilia Romagna) 지역에 위치하고 있습니다. 에밀리아 로마냐(Emilia Romagna)는 이탈리아에서 음식",
      "패션",
      "건축 등 문화의 중심지로 유명하며",
      "람브로기니",
      "페라리",
      "마세라티와 같은 세계적으로 유명한 자동차 브랜드를 탄생시킨 곳이기도 합니다. 특히 미식의 천국으로 유명한데",
      "이 지역 사람들이 언제나 식사 테이블에 올리는 와인이 바로 이 람브루스코입니다. 포도 품종의 이름인 람브루스코는 세미 스파클링으로",
      "드라이-스위트",
      "화이트-레드까지 아우르며 전세계인의 입맛을 사로잡고 있습니다."
    ]
  },
  {
    "slug": "medici-ermete-4",
    "nameKo": "Medici Ermete",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "에밀리아 로마냐(Emilia Romagna), 이탈리아",
    "volume": 750,
    "servingTempMin": 8,
    "servingTempMax": 10,
    "foodPairing": "[]",
    "description": "메디치 에르메테 페르멘토 람브루스코 디 소르바라 Medici Ermete Phermento Lambrusco di Sorbara 라즈베리, 붉은 과실향이 지배적으로 나며 입 안 가득 꽉 차는 진한 풍미를 느낄 수 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "메디치 에르메테",
    "grapeNames": [
      "5대에 걸쳐 130년의 역사를 자랑하는 람브루스코의 명가",
      "메디치 에르메테(Medici Ermete)는 이탈리아의 에밀리아 로마냐(Emilia Romagna) 지역에 위치하고 있습니다. 에밀리아 로마냐(Emilia Romagna)는 이탈리아에서 음식",
      "패션",
      "건축 등 문화의 중심지로 유명하며",
      "람브로기니",
      "페라리",
      "마세라티와 같은 세계적으로 유명한 자동차 브랜드를 탄생시킨 곳이기도 합니다. 특히 미식의 천국으로 유명한데",
      "이 지역 사람들이 언제나 식사 테이블에 올리는 와인이 바로 이 람브루스코입니다. 포도 품종의 이름인 람브루스코는 세미 스파클링으로",
      "드라이-스위트",
      "화이트-레드까지 아우르며 전세계인의 입맛을 사로잡고 있습니다."
    ]
  },
  {
    "slug": "o-gnostro-white",
    "nameKo": "O’gnostro White",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "라피오(Lapio) - 캄파니아 (Campania), 이탈리아",
    "volume": 750,
    "foodPairing": "[]",
    "description": "말로락틱 발효를 거쳐 콘크리트/세라믹 암포라에서 최소 7개월 동안 숙성되고 병입 후 6개월간의 추가 숙성 기간을 더 거칩니다. 잘 익은 살구와 같은 노란 과실, 발사믹, 약간의 스파이시함을 가지고 있습니다. 입 안에서 신선함이 향긋한 와인의 향과 우아하게 어우러져 피니쉬까지 이어지며 마지막에 약간의 스모키한 미네랄이 얹어집니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "오뇨스트로 화이트",
    "grapeNames": [
      "오뇨스트로(O’gnostro)의 화이트 포도 품종인 피아노(Fiano)는 바로 이 지역에서 불과 몇 미터 떨어지지 않은 곳에 심어진 해당 포도 품종의 오래된 덩굴에서 수확됩니다. 이곳의 포도밭은 평균 30-60년을 자랑합니다."
    ]
  },
  {
    "slug": "o-gnostro-red",
    "nameKo": "O’gnostro Red",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "몬테마라노(Montemarano) - 캄파니아 (Campania), 이탈리아",
    "volume": 750,
    "foodPairing": "[]",
    "description": "몬테마라노(Montemarano)와 카스텔프란시(Castelfranci) 사이에 있는 두개의 작은 포도밭의 알리아니코(Aglianico)만을 사용해 만들어진 레드 와인입니다. 몬테마라노(Montemarano)의 포도나무는 수령 30년, 카스텔프란시(Castelfranci) 포도밭은 수령 50-90년 된 올드 바인으로 모든 포도들은 손 수확으로 수확되어집니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "오뇨스트로 레드",
    "grapeNames": [
      "블랙베리",
      "블랙체리와 같은 검은 과실의 향이 풍부하며",
      "감귤류의 껍질",
      "생강의 향이 복합적으로 느껴집니다. 포도 품종 특유의 깊고 풍부한 특징을 고려했을 때 입안에서 느껴지는 놀라울 정도의 신선함이 매력적으로 다가오는 레드 와인입니다."
    ]
  },
  {
    "slug": "o-gnostro-white-2",
    "nameKo": "O’gnostro White",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "라피오(Lapio) < 캄파니아 (Campania) < 이탈리아",
    "volume": 750,
    "foodPairing": "[]",
    "description": "젖산 발효를 거쳐 콘크리트/세라믹 암포라에서 최소 7개월 동안 숙성하며 병입 후 6개월간의 추가 숙성 기간을 더 거칩니다. 잘 익은 살구와 같은 노란 과실, 발사믹, 약간의 스파이시함을 가지고 있습니다. 입 안에서 신선함이 향긋한 와인의 향과 우아하게 어우러져 피니쉬까지 이어지며  마지막에 약간의 스모키한 미네랄이 더해집니다. La Torre del Saracino(2 star), All’Oro(1 star) 외 다수",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "오뇨스트로 화이트",
    "grapeNames": [
      "오뇨스트로(O’gnostro)의 화이트 포도 품종인 피아노(Fiano)는 바로 이 지역에서 불과 몇 미터 떨어지지 않은 곳에 심어진 해당 포도 품종의 오래된 덩굴에서 수확되며 포도밭은 평균 수령은 30-60년을 자랑합니다."
    ]
  },
  {
    "slug": "o-gnostro-red-2",
    "nameKo": "O’gnostro Red",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "몬테마라노(Montemarano) < 캄파니아 (Campania) < 이탈리아",
    "volume": 750,
    "foodPairing": "[]",
    "description": "몬테마라노(Montemarano)와 카스텔프란시(Castelfranci)   사이에 있는 두개의 작은 포도밭의 알리아니코(Aglianico)만을 사용해 만들어진 레드 와인입니다. 몬테마라노(Montemarano)의 포도나무는 수령 30년, 카스텔프란시(Castelfranci) 포도밭은 수령 50-90년 된 올드 바인으로 모든 포도들은 손 수확으로 수확되어집니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "오뇨스트로 레드",
    "grapeNames": [
      "블랙베리",
      "블랙체리와 같은 검은 과실의 향이 풍부하며",
      "감귤류의 껍질",
      "생강의 향이 복합적으로 느껴집니다. 포도 품종 특유의 깊고 풍부한 특징을 고려했을 때 입안에서 느껴지는 놀라울 정도의     신선함이 매력적으로 다가오는 레드 와인입니다."
    ]
  },
  {
    "slug": "https-www-instagram-com-ognostro-p-cpws-hrnk62",
    "nameKo": "https://www.instagram.com/ognostro/p/Cpws_HRNK62/",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "오뇨스트로 인스타그램 주소",
    "grapeNames": []
  },
  {
    "slug": "giovanni-pelissero-barbaresco-giovanni-pelissero-giorgio-pelissero",
    "nameKo": "Giovanni Pelissero가 Barbaresco에서 포도 재배를 시작하면서 와이너리를 설립헸고 현재는 Giovanni Pelissero의 손자인 Giorgio Pelissero가 와이너리의 운영과 양조를 맡고 있습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 13,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "또한 온도 조절이 가능한 발효조에서 알코올 발효를 진행하고 숙성 용기로 배럴을 도입하는 등 모던 스타일의 양조법을 적극적으로 도입하였으며, 현재는 양조할 때 소형 배럴과 대형 오크 캐스크를 혼합하여 사용하고 있습니다. Pelissero Barbaresco Nubiola 강렬한 루비 색상을 띠며 잘 익은 붉은 과일, 꽃과 허브에 이르는 복합적인 향을 모두 가지고 있습니다. 부드럽고 벨벳과 같은 탄닌의 텍스처와 동시에 잘 익은 자두, 에스프레소, 우아한 바닐라의 풍미가 긴 여운을 남기며 마무리 됩니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "피에몬테의 작은 마을인 Treiso에 베이스에 둔 Pelissero는 1957년 설립 이후    3대째 이어져 오고 있는 가족 경영 와이너리입니다.",
    "grapeNames": [
      "Nubiola 이름의 역사는 1330년으로 거슬러 올라  갑니다. 역사적인 농업 조약 “De Ruralium Commodorum”에서 볼로냐의 법학자였던 Pier De Crescenzi(피에르 데 크레센지)는 당대 최고의 포도나무 중 하나라며 Nubiola (지금의 Nebbiolo)를 소개하였고 놀라울 정도로 파워풀하한 와인 양조에 최적화된 품종이라고 묘사하였습니다."
    ]
  },
  {
    "slug": "pelissero",
    "nameKo": "Pelissero",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 13,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "Pelissero Barbaresco Tulin Tulin은 2001 빈티지 이후 새롭게 이름이 붙여진 와인입니다. 이전에는 Annata(이탈리이어로 1년, 또는 빈티지를 뜻하는 단어) 라는 이름으로 불리웠으나 대중과 와인 비평가들의 찬사에 힘입어 와인의 이름을 포도밭의 명칭과 동일한 Tulin으로 변경하였습니다. 지역 방언에서 Tulin은 양초에서 녹은 밀랍을 보관하거나 마구간에 있는 소들에게 음식을 분배하기 위해 교회에서 사용했던 작은 원형 모양의 금속 용기를 뜻합니다. 작은 용기(와인병) 안에 펠리세로 포도재배자들의 장인 정신과 영혼이 담겨있다는 의미로 Tulin으로 명명하였습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "펠리세로",
    "grapeNames": [
      "전체 생산량의 85%는 Nebbiolo",
      "Barbera",
      "Dolcetto와 같은 피에몬테 토착 포도 품종으로 이루어져 있으며 피에몬테 테루아의 위대함과 가능성에 집중하고   있습니다. 이 철학은 3대에 걸쳐 변하지 않은 Pelissero의 자부심입니다. Treiso",
      "Barbaresco",
      "Neive",
      "Neviglie 그리고 Alba에 총 42ha의 포도밭을 소유하고 있으며 전문가들로 구성된 팀이 포도의 전체 생산주기를 직접 감독하고 관리하고 있습니다."
    ]
  },
  {
    "slug": "red-wine-4",
    "nameKo": "▶ 종    류 :  Red Wine",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "servingTempMin": 13,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "바노투(Vanotu)는 현 와이너리 경영자인 Giorgio의       할아버지이자 펠리세로의 설립자인 지오반니(Giovanni)를 부르는 피에몬테의 방언입니다. 설립자인 할아버지에게 감사와 존경의 마음을 담아    생산하는 와인으로 펠리세로의 최상급 바르바레스코   입니다. 이 포도밭의 특별한 테루아 조건으로 인해 빈티지가 좋지 않은 해에도 훌륭한 특성과 개성의 와인을 얻을 수 있었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "▶ 원산지  :  피에몬테(Piemonte), 이탈리아(Italy)",
    "grapeNames": [
      "전체 생산량의 85%는 Nebbiolo",
      "Barbera",
      "Dolcetto와 같은 피에몬테 토착 포도 품종으로 이루어져 있으며 피에몬테 테루아의 위대함과 가능성에 집중하고   있습니다. 이 철학은 3대에 걸쳐 변하지 않은 Pelissero의 자부심입니다. Treiso",
      "Barbaresco",
      "Neive",
      "Neviglie 그리고 Alba에 총 42ha의 포도밭을 소유하고 있으며 전문가들로 구성된 팀이 포도의 전체 생산주기를 직접 감독하고 관리하고 있습니다."
    ]
  },
  {
    "slug": "puer-apuliae",
    "nameKo": "Puer Apuliae",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "Castel del Monte D.O.C. 풀리아(Puglia), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 13,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 스테이크\", \"허브를 곁들인 소고기 요리\", \"숙성된 치즈 등\"]",
    "description": "푸에르 아풀리에는 신성 로마 제국을 이끌었던 프레데릭 2세가 카스텔 델 몬테 지역을 풀리아의 아들(Son of Puglia)로 부른 것에서 유래된 이름입니다. 과일을 수확한 뒤 20일 동안 스테인레스 스틸 탱크에서 침용을 하며, 그 후 프렌치 오크에서 14개월 간 젖산 발효를 진행 합니다. 그리고 과실의 색깔과 풍미를 그대로 유지하기 위해 필터링 없이 병입한 뒤 1년의 병 숙성을 거쳐 출시 합니다. 진한 보라색을 띄고 있으며 잘익은 검은 베리류의 향과 아니스 등 스파이스에 향이 어우러져 있습니다.. 부드러운 탄닌과 긴 피니쉬를 자랑하는 풀바디 와인입니다. 2016 Vintage : JS 93점",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "푸에르 아풀리에",
    "grapeNames": [
      "네로 디 트로이아(Nero di Troia) 품종은 과거 이태리에 남부에서 많이 재배되던 품종이나 시간이 지나며 거의 잊혀진 품종이었습니다. 리베라는 카스텔 델 몬테 지역에서 가장 오래된 타푸리(Tafuri) 빈야드에서 재생산된 것으로 이 품종으로 와인을 생산하며",
      "잊혀진 품종을 다시 부활 시켰습니다."
    ]
  },
  {
    "slug": "il-falcone",
    "nameKo": "Il Falcone",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "Castel del Monte D.O.C. 풀리아(Puglia), 이태리(Italy)",
    "volume": 750,
    "servingTempMin": 13,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 양념을 많이 한 고기요리\"]",
    "description": "리베라 와이너리를 대표하는 와인으로 독수리(Falcone)는 카스텔 델 몬테 지역을 사랑했던 신성로마제국의 프레데릭 2세의 상징입니다. 네로 디 트로이아와 몬테풀치아노를 수확한 뒤 15일 동안 침용을 한 후 14개월간 50%는 3,000L의, 나머지는 225리터의 프렌치 오크에서 숙성을 진행합니다. 석류석 색(어두운 루비색)을 지닌 이 와인은 잘 익은 산딸기등 다양한 붉은 과일의 아로마가 층층이 피어 오르며, 부드러운 탄닌과 함께 매혹적인 뛰어난 복합미를 보여줍니다. 병입 후 10년에서 12년까지 숙성이 가능합니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "일 팔코네",
    "grapeNames": []
  },
  {
    "slug": "cappellaccio",
    "nameKo": "Cappellaccio",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "Castel del Monte D.O.C. 풀리아(Puglia), 이태리(Italy)",
    "volume": 750,
    "servingTempMin": 13,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 짭짜름한 소스를 곁들인 파스타\", \"치즈\"]",
    "description": "카펠라쵸는 DOC 카스텔 델 몬테 언덕의 석회암 지대에서 뿌리 내리고 있는 알리아니코의 잠재력을 최대한 끌어내기 위해 12개월 동안 프렌치 오크통에서 숙성을 진행합니다. 이 과정을 통해 알리아니코의 탄탄한 구조감과 신선한 산도를 만들어내고 있습니다. 짙은 루비색 와인으로 풍부한 과일 향과 스파이시한 아로마가 함께 느껴집니다. 여타의 이태리 레드 와인에 비해 부드럽지만 꽉찬 탄닌감이 매력적인 와인입니다. 병입 후 8년에서 10년까지 숙성이 가능합니다. 2015 Vintage : WS 90점",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "카펠라쵸",
    "grapeNames": [
      "알리아니코는 세계에서 3",
      "000년 전 고대 그리스에 의해 이태리 남부 지역에 전파된 역사가 오래된 포도품종입니다. 우아하고 숙성 잠재력이 높은 이 품종으로 남부 지역의 네비올로라는 별명으로도 불리고 있습니다."
    ]
  },
  {
    "slug": "primitivo",
    "nameKo": "Primitivo",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "servingTempMin": 11,
    "servingTempMax": 16,
    "foodPairing": "[\"▶ 파스타\", \"스프\", \"고기 요리 (대부분의 음식과 잘 어울림)\"]",
    "description": "진판델이라는 이름으로 잘 알려져 있습니다. 리베라가 만든 프리미티보 역시 편하게 즐길 수 있는 와인입니다. 풀리아 남부에 위치한 살렌토 반도에서 재배되는 포도를 사용해 일주일 정도 스테인리스 스틸탱크에서 침용을 진행합니다. 그리고 타원형의 시멘트 통에서 9개월 동안 숙성과정을 거치는데 전 양조 과정에서 오크의 영향을 받지않아 다른 와인에 비해 과실의 맛과 향이 더 풍부하게 느껴집니다. 진한 보라색과 다양한 베리류 아로마가 인상적이며, 과일의 풍미를 더 잘 즐기기 위해 다른 레드 와인에 비해 조금 차갑게 드시기를 추천합니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "프리미티보",
    "grapeNames": [
      "프리미티보는 진한 과일의 풍미 덕분에 전 세계에 풀리아 지역의 와인을 널리 알린 포도 품종으로"
    ]
  },
  {
    "slug": "preludio-n-1-chardonnay",
    "nameKo": "Preludio N.1 Chardonnay",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "Castel del Monte D.O.C. 풀리아(Puglia), 이태리(Italy)",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 12,
    "foodPairing": "[\"▶ 소고기 요리\", \"생선 찜\", \"크림 파스타\"]",
    "description": "프렐루디오 넘버원 샤도네이는 풀리아 지역에 처음으로 심어진 샤도네이(N.1)를 뜻하며, 카스텔 델 몬테 DOC 지역에 위치한 Murgia 언덕에 위치한 빈야드에서 재배되는 샤도네이를 사용하고 있습니다. 이 와인은 18도로 유지된 스테인리스 스틸 탱크에서 효모와 함께 3~4개월 동안 젖산발효를 하는 과정을 거치며 이태리 남부 샤도네이 특유의 상큼함을 지닌 와인으로 탄생하게 됩니다. 다른 지역의 샤도네이가 단순히 산도만 강조한 것에 반해 리베라의 샤도네이는 복합미와 신선함이 균형을 이루고 있으며 복숭아 꽃과 배의 아로마가 인상적입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "프렐루디오 넘버 원 샤도네이",
    "grapeNames": []
  },
  {
    "slug": "lama-dei-corvi",
    "nameKo": "Lama Dei Corvi",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "Lama Dei Corvi (Single Vinyard), Castel del Monte D.O.C.\u000b                풀리아(Puglia), 이태리(Italy)",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 12,
    "foodPairing": "[\"▶ 소고기 요리\", \"생선 찜\", \"크림 파스타\"]",
    "description": "Lama Dei Corvi는 '까마귀의 부리'라고 불리는 Castel del Monte D.O.C. 지역의 '싱글 빈야드' 포도밭 입니다. Castel del Monte D.O.C. 지역내의 가장 높은 지역으로 원래는 석회암으로 이루어졌던 포도 밭을 모두 파쇄하여 만든 석회질 포도밭 입니다. 석회질 포도밭의 특성 답게 와인내에서 느껴지는 미네랄 감은 그 어떠한 이태리 화이트 와인보다 훌륭하며, 혹자는 부르고뉴의 몽라셰와 비견 하였습니다. 오크통에서 8개월간 숙성 과정을 통해 입안에서 느껴지는 푹 익은 배와 사과향 그리고 샤프론과 시나몬 풍미는 입안을 즐겁게 만들어 줍니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "라마 데이 코르비",
    "grapeNames": []
  },
  {
    "slug": "piani-di-tufara",
    "nameKo": "PIANI DI TUFARA",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "▶ 원산지 Moscato di Trani D.O.C. 풀리아(Puglia), 이태리(Italy)",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 12,
    "foodPairing": "[]",
    "description": "말린 과일과 시트러스 향이 지배적이며, 입안에서는 다양한 풍미와 적절한 산도와 어우러지는 당도를 통해 긴 여운을 줍니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "피아니 디 투파라",
    "grapeNames": [
      "응회질 토양에서 재배된 모스카토 포도 품종으로 만든 와인으로",
      "일부분의 포도들은 말린 포도를 사용함으로써",
      "풍미와 당분의 집약을 더욱 강화 하였습니다. 양조된 와인은 프렌치 오크통에서 숙성 과정을 거치면서 모스카토의 풍미를 더욱 강화 하게 됩니다."
    ]
  },
  {
    "slug": "here-we-make-ideal-wine",
    "nameKo": "“Here we make ideal Wine” / 토스카나에서 가장 이상적인 와인을 만든다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "움브리아(Umbria) – 이탈리아",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 13,
    "foodPairing": "[\"▶ 올리브 오일을 곁들인 생선 그릴 요리\", \"모짜렐라 치즈 등\"]",
    "description": "천혜의 테루아를 가진 토스카나 지역을 근간으로 최상의 와인을 만들고자한 루피노는 1881년 밀란 와인 전시회에서 ‘루피노 끼안티‘가 금메달을 받는 것을 시작으로, 1884년 니스 와인 전시회, 1885년 앤트워프 와인 전시회에서 상을 휩쓸며 세계적인 평론가들의 주목을 받게 됩니다. 1890년에는 당시 이태리 왕실 가문, 하우스 오브 사보이아(House of Savoy)가 루피노의 명성과 품질을 인정하며 “왕실 공식 납품 와이너리＂로 지정하였고, 당시 왕실의 직권자 “Duke of Aosta(아오스타 공작)”에 대한 헌사로 1927년 “Ducale(두칼레)”와인을 출시하기도 하였습니다. 루피노는 최고의 와인을 생산하기 위한 품질 관리를 멈추지 않았고, 그 결과 “미국 시장에 수출한 첫 번째 끼안티 와인＂으로 기록되었을 뿐만 아니라, 이태리 첫번째 끼안티 DOCG (보증번호 #AAA00000001) 로 인정받는 괄목할만한 수상을 하게 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "이태리의 와인 명가 ‘루피노’ 는 1877년 일라리오 루피노(Ilario Ruffino)와 레오폴도 루피노(Leopoldo Ruffino)가 플로렌스 근교에 위치한 폰타씨에베(Pontassieve)에 와이너리를 설립하며 그 역사가 시작되었습니다.",
    "grapeNames": []
  },
  {
    "slug": "here-we-make-ideal-wine-2",
    "nameKo": "“Here we make ideal Wine” / 토스카나에서 가장 이상적인 와인을 만든다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나(Toscana) – 이탈리아",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 13,
    "foodPairing": "[\"▶ 해산물 샐러드\", \"구운 치킨 요리\", \"크림 스프 등\"]",
    "description": "천혜의 테루아를 가진 토스카나 지역을 근간으로 최상의 와인을 만들고자한 루피노는 1881년 밀란 와인 전시회에서 ‘루피노 끼안티‘가 금메달을 받는 것을 시작으로, 1884년 니스 와인 전시회, 1885년 앤트워프 와인 전시회에서 상을 휩쓸며 세계적인 평론가들의 주목을 받게 됩니다. 1890년에는 당시 이태리 왕실 가문, 하우스 오브 사보이아(House of Savoy)가 루피노의 명성과 품질을 인정하며 “왕실 공식 납품 와이너리＂로 지정하였고, 당시 왕실의 직권자 “Duke of Aosta(아오스타 공작)”에 대한 헌사로 1927년 “Ducale(두칼레)”와인을 출시하기도 하였습니다. 루피노는 최고의 와인을 생산하기 위한 품질 관리를 멈추지 않았고, 그 결과 “미국 시장에 수출한 첫 번째 끼안티 와인＂으로 기록되었을 뿐만 아니라, 이태리 첫번째 끼안티 DOCG (보증번호 #AAA00000001) 로 인정받는 괄목할만한 수상을 하게 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "이태리의 와인 명가 ‘루피노’ 는 1877년 일라리오 루피노(Ilario Ruffino)와 레오폴도 루피노(Leopoldo Ruffino)가 플로렌스 근교에 위치한 폰타씨에베(Pontassieve)에 와이너리를 설립하며 그 역사가 시작되었습니다.",
    "grapeNames": []
  },
  {
    "slug": "here-we-make-ideal-wine-3",
    "nameKo": "“Here we make ideal Wine” / 토스카나에서 가장 이상적인 와인을 만든다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나(Toscana) – 이탈리아",
    "volume": 750,
    "servingTempMin": 12,
    "servingTempMax": 15,
    "foodPairing": "[\"▶ 라구 파스타\", \"마게리타 피자\", \"스트링 치즈 등\"]",
    "description": "천혜의 테루아를 가진 토스카나 지역을 근간으로 최상의 와인을 만들고자한 루피노는 1881년 밀란 와인 전시회에서 ‘루피노 끼안티‘가 금메달을 받는 것을 시작으로, 1884년 니스 와인 전시회, 1885년 앤트워프 와인 전시회에서 상을 휩쓸며 세계적인 평론가들의 주목을 받게 됩니다. 1890년에는 당시 이태리 왕실 가문, 하우스 오브 사보이아(House of Savoy)가 루피노의 명성과 품질을 인정하며 “왕실 공식 납품 와이너리＂로 지정하였고, 당시 왕실의 직권자 “Duke of Aosta(아오스타 공작)”에 대한 헌사로 1927년 “Ducale(두칼레)”와인을 출시하기도 하였습니다. 루피노는 최고의 와인을 생산하기 위한 품질 관리를 멈추지 않았고, 그 결과 “미국 시장에 수출한 첫 번째 끼안티 와인＂으로 기록되었을 뿐만 아니라, 이태리 첫번째 끼안티 DOCG (보증번호 #AAA00000001) 로 인정받는 괄목할만한 수상을 하게 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "이태리의 와인 명가 ‘루피노’ 는 1877년 일라리오 루피노(Ilario Ruffino)와 레오폴도 루피노(Leopoldo Ruffino)가 플로렌스 근교에 위치한 폰타씨에베(Pontassieve)에 와이너리를 설립하며 그 역사가 시작되었습니다.",
    "grapeNames": []
  },
  {
    "slug": "here-we-make-ideal-wine-4",
    "nameKo": "“Here we make ideal Wine” / 토스카나에서 가장 이상적인 와인을 만든다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나(Toscana) – 이탈리아",
    "volume": 750,
    "servingTempMin": 15,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 오븐에 구운 닭 요리\", \"토마토 리조또\", \"토마토 브루스케타 등\"]",
    "description": "천혜의 테루아를 가진 토스카나 지역을 근간으로 최상의 와인을 만들고자한 루피노는 1881년 밀란 와인 전시회에서 ‘루피노 끼안티‘가 금메달을 받는 것을 시작으로, 1884년 니스 와인 전시회, 1885년 앤트워프 와인 전시회에서 상을 휩쓸며 세계적인 평론가들의 주목을 받게 됩니다. 1890년에는 당시 이태리 왕실 가문, 하우스 오브 사보이아(House of Savoy)가 루피노의 명성과 품질을 인정하며 “왕실 공식 납품 와이너리＂로 지정하였고, 당시 왕실의 직권자 “Duke of Aosta(아오스타 공작)”에 대한 헌사로 1927년 “Ducale(두칼레)”와인을 출시하기도 하였습니다. 루피노는 최고의 와인을 생산하기 위한 품질 관리를 멈추지 않았고, 그 결과 “미국 시장에 수출한 첫 번째 끼안티 와인＂으로 기록되었을 뿐만 아니라, 이태리 첫번째 끼안티 DOCG (보증번호 #AAA00000001) 로 인정받는 괄목할만한 수상을 하게 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "이태리의 와인 명가 ‘루피노’ 는 1877년 일라리오 루피노(Ilario Ruffino)와 레오폴도 루피노(Leopoldo Ruffino)가 플로렌스 근교에 위치한 폰타씨에베(Pontassieve)에 와이너리를 설립하며 그 역사가 시작되었습니다.",
    "grapeNames": []
  },
  {
    "slug": "here-we-make-ideal-wine-5",
    "nameKo": "“Here we make ideal Wine” / 토스카나에서 가장 이상적인 와인을 만든다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나(Toscana) – 이탈리아",
    "volume": 750,
    "servingTempMin": 15,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 라비올리\", \"마게리타 피자\", \"햄버거\", \"타코 등\"]",
    "description": "천혜의 테루아를 가진 토스카나 지역을 근간으로 최상의 와인을 만들고자한 루피노는 1881년 밀란 와인 전시회에서 ‘루피노 끼안티‘가 금메달을 받는 것을 시작으로, 1884년 니스 와인 전시회, 1885년 앤트워프 와인 전시회에서 상을 휩쓸며 세계적인 평론가들의 주목을 받게 됩니다. 1890년에는 당시 이태리 왕실 가문, 하우스 오브 사보이아(House of Savoy)가 루피노의 명성과 품질을 인정하며 “왕실 공식 납품 와이너리＂로 지정하였고, 당시 왕실의 직권자 “Duke of Aosta(아오스타 공작)”에 대한 헌사로 1927년 “Ducale(두칼레)”와인을 출시하기도 하였습니다. 루피노는 최고의 와인을 생산하기 위한 품질 관리를 멈추지 않았고, 그 결과 “미국 시장에 수출한 첫 번째 끼안티 와인＂으로 기록되었을 뿐만 아니라, 이태리 첫번째 끼안티 DOCG (보증번호 #AAA00000001) 로 인정받는 괄목할만한 수상을 하게 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "이태리의 와인 명가 ‘루피노’ 는 1877년 일라리오 루피노(Ilario Ruffino)와 레오폴도 루피노(Leopoldo Ruffino)가 플로렌스 근교에 위치한 폰타씨에베(Pontassieve)에 와이너리를 설립하며 그 역사가 시작되었습니다.",
    "grapeNames": []
  },
  {
    "slug": "here-we-make-ideal-wine-6",
    "nameKo": "“Here we make ideal Wine” / 토스카나에서 가장 이상적인 와인을 만든다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나(Toscana) – 이탈리아",
    "volume": 750,
    "servingTempMin": 15,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 오븐에 구운 닭 요리\", \"토마토 리조또\", \"토마토 브루스케타 등\"]",
    "description": "천혜의 테루아를 가진 토스카나 지역을 근간으로 최상의 와인을 만들고자한 루피노는 1881년 밀란 와인 전시회에서 ‘루피노 끼안티‘가 금메달을 받는 것을 시작으로, 1884년 니스 와인 전시회, 1885년 앤트워프 와인 전시회에서 상을 휩쓸며 세계적인 평론가들의 주목을 받게 됩니다. 1890년에는 당시 이태리 왕실 가문, 하우스 오브 사보이아(House of Savoy)가 루피노의 명성과 품질을 인정하며 “왕실 공식 납품 와이너리＂로 지정하였고, 당시 왕실의 직권자 “Duke of Aosta(아오스타 공작)”에 대한 헌사로 1927년 “Ducale(두칼레)”와인을 출시하기도 하였습니다. 루피노는 최고의 와인을 생산하기 위한 품질 관리를 멈추지 않았고, 그 결과 “미국 시장에 수출한 첫 번째 끼안티 와인＂으로 기록되었을 뿐만 아니라, 이태리 첫번째 끼안티 DOCG (보증번호 #AAA00000001) 로 인정받는 괄목할만한 수상을 하게 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "이태리의 와인 명가 ‘루피노’ 는 1877년 일라리오 루피노(Ilario Ruffino)와 레오폴도 루피노(Leopoldo Ruffino)가 플로렌스 근교에 위치한 폰타씨에베(Pontassieve)에 와이너리를 설립하며 그 역사가 시작되었습니다.",
    "grapeNames": []
  },
  {
    "slug": "here-we-make-ideal-wine-7",
    "nameKo": "“Here we make ideal Wine” / 토스카나에서 가장 이상적인 와인을 만든다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나(Toscana) – 이탈리아",
    "volume": 750,
    "servingTempMin": 15,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 허브류가 곁들어진 닭고기 요리\", \"토마토 펜네 파스타 등\"]",
    "description": "천혜의 테루아를 가진 토스카나 지역을 근간으로 최상의 와인을 만들고자한 루피노는 1881년 밀란 와인 전시회에서 ‘루피노 끼안티‘가 금메달을 받는 것을 시작으로, 1884년 니스 와인 전시회, 1885년 앤트워프 와인 전시회에서 상을 휩쓸며 세계적인 평론가들의 주목을 받게 됩니다. 1890년에는 당시 이태리 왕실 가문, 하우스 오브 사보이아(House of Savoy)가 루피노의 명성과 품질을 인정하며 “왕실 공식 납품 와이너리＂로 지정하였고, 당시 왕실의 직권자 “Duke of Aosta(아오스타 공작)”에 대한 헌사로 1927년 “Ducale(두칼레)”와인을 출시하기도 하였습니다. 루피노는 최고의 와인을 생산하기 위한 품질 관리를 멈추지 않았고, 그 결과 “미국 시장에 수출한 첫 번째 끼안티 와인＂으로 기록되었을 뿐만 아니라, 이태리 첫번째 끼안티 DOCG (보증번호 #AAA00000001) 로 인정받는 괄목할만한 수상을 하게 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "이태리의 와인 명가 ‘루피노’ 는 1877년 일라리오 루피노(Ilario Ruffino)와 레오폴도 루피노(Leopoldo Ruffino)가 플로렌스 근교에 위치한 폰타씨에베(Pontassieve)에 와이너리를 설립하며 그 역사가 시작되었습니다.",
    "grapeNames": [
      "루비색을 가진 이 와인은 활력이 있고 매력이 넘칩니다. 와인의 주요 품종인 산지오베제가 주는 체리",
      "붉은 과일",
      "바이올렛 등 꽃 향이 매혹적이고",
      "입안에서 탄력이 있는 탄닌과 우아한 질감이 조화롭게 느껴집니다."
    ]
  },
  {
    "slug": "here-we-make-ideal-wine-8",
    "nameKo": "“Here we make ideal Wine” / 토스카나에서 가장 이상적인 와인을 만든다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나(Toscana) – 이탈리아",
    "volume": 750,
    "servingTempMin": 15,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 파마산을 곁들인 가지요리\", \"토마토 소스 파스타\", \"라구 파스타\"]",
    "description": "천혜의 테루아를 가진 토스카나 지역을 근간으로 최상의 와인을 만들고자한 루피노는 1881년 밀란 와인 전시회에서 ‘루피노 끼안티‘가 금메달을 받는 것을 시작으로, 1884년 니스 와인 전시회, 1885년 앤트워프 와인 전시회에서 상을 휩쓸며 세계적인 평론가들의 주목을 받게 됩니다. 1890년에는 당시 이태리 왕실 가문, 하우스 오브 사보이아(House of Savoy)가 루피노의 명성과 품질을 인정하며 “왕실 공식 납품 와이너리＂로 지정하였고, 당시 왕실의 직권자 “Duke of Aosta(아오스타 공작)”에 대한 헌사로 1927년 “Ducale(두칼레)”와인을 출시하기도 하였습니다. 루피노는 최고의 와인을 생산하기 위한 품질 관리를 멈추지 않았고, 그 결과 “미국 시장에 수출한 첫 번째 끼안티 와인＂으로 기록되었을 뿐만 아니라, 이태리 첫번째 끼안티 DOCG (보증번호 #AAA00000001) 로 인정받는 괄목할만한 수상을 하게 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "이태리의 와인 명가 ‘루피노’ 는 1877년 일라리오 루피노(Ilario Ruffino)와 레오폴도 루피노(Leopoldo Ruffino)가 플로렌스 근교에 위치한 폰타씨에베(Pontassieve)에 와이너리를 설립하며 그 역사가 시작되었습니다.",
    "grapeNames": []
  },
  {
    "slug": "here-we-make-ideal-wine-9",
    "nameKo": "“Here we make ideal Wine” / 토스카나에서 가장 이상적인 와인을 만든다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나(Toscana) – 이탈리아",
    "volume": 750,
    "servingTempMin": 15,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 파마산을 곁들인 가지요리\", \"토마토 소스 파스타\", \"라구 파스타\"]",
    "description": "천혜의 테루아를 가진 토스카나 지역을 근간으로 최상의 와인을 만들고자한 루피노는 1881년 밀란 와인 전시회에서 ‘루피노 끼안티‘가 금메달을 받는 것을 시작으로, 1884년 니스 와인 전시회, 1885년 앤트워프 와인 전시회에서 상을 휩쓸며 세계적인 평론가들의 주목을 받게 됩니다. 1890년에는 당시 이태리 왕실 가문, 하우스 오브 사보이아(House of Savoy)가 루피노의 명성과 품질을 인정하며 “왕실 공식 납품 와이너리＂로 지정하였고, 당시 왕실의 직권자 “Duke of Aosta(아오스타 공작)”에 대한 헌사로 1927년 “Ducale(두칼레)”와인을 출시하기도 하였습니다. 루피노는 최고의 와인을 생산하기 위한 품질 관리를 멈추지 않았고, 그 결과 “미국 시장에 수출한 첫 번째 끼안티 와인＂으로 기록되었을 뿐만 아니라, 이태리 첫번째 끼안티 DOCG (보증번호 #AAA00000001) 로 인정받는 괄목할만한 수상을 하게 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "이태리의 와인 명가 ‘루피노’ 는 1877년 일라리오 루피노(Ilario Ruffino)와 레오폴도 루피노(Leopoldo Ruffino)가 플로렌스 근교에 위치한 폰타씨에베(Pontassieve)에 와이너리를 설립하며 그 역사가 시작되었습니다.",
    "grapeNames": []
  },
  {
    "slug": "here-we-make-ideal-wine-10",
    "nameKo": "“Here we make ideal Wine” / 토스카나에서 가장 이상적인 와인을 만든다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나(Toscana) – 이탈리아",
    "volume": 750,
    "servingTempMin": 15,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 소고기 스테이크\", \"볼로네즈 스파게티\", \"갈비찜 등\"]",
    "description": "천혜의 테루아를 가진 토스카나 지역을 근간으로 최상의 와인을 만들고자한 루피노는 1881년 밀란 와인 전시회에서 ‘루피노 끼안티‘가 금메달을 받는 것을 시작으로, 1884년 니스 와인 전시회, 1885년 앤트워프 와인 전시회에서 상을 휩쓸며 세계적인 평론가들의 주목을 받게 됩니다. 1890년에는 당시 이태리 왕실 가문, 하우스 오브 사보이아(House of Savoy)가 루피노의 명성과 품질을 인정하며 “왕실 공식 납품 와이너리＂로 지정하였고, 당시 왕실의 직권자 “Duke of Aosta(아오스타 공작)”에 대한 헌사로 1927년 “Ducale(두칼레)”와인을 출시하기도 하였습니다. 루피노는 최고의 와인을 생산하기 위한 품질 관리를 멈추지 않았고, 그 결과 “미국 시장에 수출한 첫 번째 끼안티 와인＂으로 기록되었을 뿐만 아니라, 이태리 첫번째 끼안티 DOCG (보증번호 #AAA00000001) 로 인정받는 괄목할만한 수상을 하게 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "이태리의 와인 명가 ‘루피노’ 는 1877년 일라리오 루피노(Ilario Ruffino)와 레오폴도 루피노(Leopoldo Ruffino)가 플로렌스 근교에 위치한 폰타씨에베(Pontassieve)에 와이너리를 설립하며 그 역사가 시작되었습니다.",
    "grapeNames": [
      "선별된 3가지 포도품종은 각각 발효를 진행한 뒤 작은 프렌치 오크통과 아메리칸 오크통에 각각 1년간 숙성을 합니다. 그리고 스테인리스 스틸 탱크에서 블렌딩 한 뒤 6개월의 안정화를 거쳐 출시 됩니다."
    ]
  },
  {
    "slug": "here-we-make-ideal-wine-11",
    "nameKo": "“Here we make ideal Wine” / 토스카나에서 가장 이상적인 와인을 만든다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나(Toscana) – 이탈리아",
    "volume": 750,
    "servingTempMin": 15,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 양고기 스테이크\", \"오리 가슴살 구이\", \"라구 파스타 등\"]",
    "description": "천혜의 테루아를 가진 토스카나 지역을 근간으로 최상의 와인을 만들고자한 루피노는 1881년 밀란 와인 전시회에서 ‘루피노 끼안티‘가 금메달을 받는 것을 시작으로, 1884년 니스 와인 전시회, 1885년 앤트워프 와인 전시회에서 상을 휩쓸며 세계적인 평론가들의 주목을 받게 됩니다. 1890년에는 당시 이태리 왕실 가문, 하우스 오브 사보이아(House of Savoy)가 루피노의 명성과 품질을 인정하며 “왕실 공식 납품 와이너리＂로 지정하였고, 당시 왕실의 직권자 “Duke of Aosta(아오스타 공작)”에 대한 헌사로 1927년 “Ducale(두칼레)”와인을 출시하기도 하였습니다. 루피노는 최고의 와인을 생산하기 위한 품질 관리를 멈추지 않았고, 그 결과 “미국 시장에 수출한 첫 번째 끼안티 와인＂으로 기록되었을 뿐만 아니라, 이태리 첫번째 끼안티 DOCG (보증번호 #AAA00000001) 로 인정받는 괄목할만한 수상을 하게 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "이태리의 와인 명가 ‘루피노’ 는 1877년 일라리오 루피노(Ilario Ruffino)와 레오폴도 루피노(Leopoldo Ruffino)가 플로렌스 근교에 위치한 폰타씨에베(Pontassieve)에 와이너리를 설립하며 그 역사가 시작되었습니다.",
    "grapeNames": []
  },
  {
    "slug": "here-we-make-ideal-wine-12",
    "nameKo": "“Here we make ideal Wine” / 토스카나에서 가장 이상적인 와인을 만든다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "베네토(Veneto) – 이탈리아",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 13,
    "foodPairing": "[\"▶ 마르게리따 피자\", \"생선 및 조개요리 등\"]",
    "description": "천혜의 테루아를 가진 토스카나 지역을 근간으로 최상의 와인을 만들고자한 루피노는 1881년 밀란 와인 전시회에서 ‘루피노 끼안티‘가 금메달을 받는 것을 시작으로, 1884년 니스 와인 전시회, 1885년 앤트워프 와인 전시회에서 상을 휩쓸며 세계적인 평론가들의 주목을 받게 됩니다. 1890년에는 당시 이태리 왕실 가문, 하우스 오브 사보이아(House of Savoy)가 루피노의 명성과 품질을 인정하며 “왕실 공식 납품 와이너리＂로 지정하였고, 당시 왕실의 직권자 “Duke of Aosta(아오스타 공작)”에 대한 헌사로 1927년 “Ducale(두칼레)”와인을 출시하기도 하였습니다. 루피노는 최고의 와인을 생산하기 위한 품질 관리를 멈추지 않았고, 그 결과 “미국 시장에 수출한 첫 번째 끼안티 와인＂으로 기록되었을 뿐만 아니라, 이태리 첫번째 끼안티 DOCG (보증번호 #AAA00000001) 로 인정받는 괄목할만한 수상을 하게 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "이태리의 와인 명가 ‘루피노’ 는 1877년 일라리오 루피노(Ilario Ruffino)와 레오폴도 루피노(Leopoldo Ruffino)가 플로렌스 근교에 위치한 폰타씨에베(Pontassieve)에 와이너리를 설립하며 그 역사가 시작되었습니다.",
    "grapeNames": [
      "보통은 글레라 포도품종을 선별하여 발효 후 샤르망 방식(Charmat)을 통해 만들지만",
      "루피노가 만든 프로세코의 경우 과일주스와 화이트와인을 함께 혼합한 뒤 샤르망 방식을 사용합니다. 이 차이로 인해 포도 품종이 간직한 사과와 복숭아와 같은 싱그러운 느낌을 유지하게 되고",
      "또 거품을 통해 입안을 즐겁게 만들어 줍니다."
    ]
  },
  {
    "slug": "here-we-make-ideal-wine-13",
    "nameKo": "“Here we make ideal Wine” / 토스카나에서 가장 이상적인 와인을 만든다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "베네토(Veneto) – 이탈리아",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 13,
    "foodPairing": "[\"▶ 로스트 치킨\", \"생선그릴요리\", \"신선한 샐러드\"]",
    "description": "천혜의 테루아를 가진 토스카나 지역을 근간으로 최상의 와인을 만들고자한 루피노는 1881년 밀란 와인 전시회에서 ‘루피노 끼안티‘가 금메달을 받는 것을 시작으로, 1884년 니스 와인 전시회, 1885년 앤트워프 와인 전시회에서 상을 휩쓸며 세계적인 평론가들의 주목을 받게 됩니다. 1890년에는 당시 이태리 왕실 가문, 하우스 오브 사보이아(House of Savoy)가 루피노의 명성과 품질을 인정하며 “왕실 공식 납품 와이너리＂로 지정하였고, 당시 왕실의 직권자 “Duke of Aosta(아오스타 공작)”에 대한 헌사로 1927년 “Ducale(두칼레)”와인을 출시하기도 하였습니다. 루피노는 최고의 와인을 생산하기 위한 품질 관리를 멈추지 않았고, 그 결과 “미국 시장에 수출한 첫 번째 끼안티 와인＂으로 기록되었을 뿐만 아니라, 이태리 첫번째 끼안티 DOCG (보증번호 #AAA00000001) 로 인정받는 괄목할만한 수상을 하게 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "이태리의 와인 명가 ‘루피노’ 는 1877년 일라리오 루피노(Ilario Ruffino)와 레오폴도 루피노(Leopoldo Ruffino)가 플로렌스 근교에 위치한 폰타씨에베(Pontassieve)에 와이너리를 설립하며 그 역사가 시작되었습니다.",
    "grapeNames": [
      "글레라와 피노누아가 블렌딩 되어 탄탄한 구조감과 바디감을 가지고 있으며",
      "샤르망(Charmat) 방식을 사용하고 있습니다. 샤르망(Charmat) 방식은 주로 아로마가 풍부한 포도 품종 특유의 캐릭터를 고스란히 보전하기 위해 사용되며 신선함",
      "과실의 향기로움을 와인 캐릭터에 그대로 나타납니다."
    ]
  },
  {
    "slug": "here-we-make-ideal-wine-14",
    "nameKo": "“Here we make ideal Wine” / 토스카나에서 가장 이상적인 와인을 만든다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "토스카나(Toscana) – 이탈리아",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 13,
    "foodPairing": "[\"▶ 블루 치즈\", \"오렌지 필을 곁들인 디저트 케익 등\"]",
    "description": "천혜의 테루아를 가진 토스카나 지역을 근간으로 최상의 와인을 만들고자한 루피노는 1881년 밀란 와인 전시회에서 ‘루피노 끼안티‘가 금메달을 받는 것을 시작으로, 1884년 니스 와인 전시회, 1885년 앤트워프 와인 전시회에서 상을 휩쓸며 세계적인 평론가들의 주목을 받게 됩니다. 1890년에는 당시 이태리 왕실 가문, 하우스 오브 사보이아(House of Savoy)가 루피노의 명성과 품질을 인정하며 “왕실 공식 납품 와이너리＂로 지정하였고, 당시 왕실의 직권자 “Duke of Aosta(아오스타 공작)”에 대한 헌사로 1927년 “Ducale(두칼레)”와인을 출시하기도 하였습니다. 루피노는 최고의 와인을 생산하기 위한 품질 관리를 멈추지 않았고, 그 결과 “미국 시장에 수출한 첫 번째 끼안티 와인＂으로 기록되었을 뿐만 아니라, 이태리 첫번째 끼안티 DOCG (보증번호 #AAA00000001) 로 인정받는 괄목할만한 수상을 하게 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "이태리의 와인 명가 ‘루피노’ 는 1877년 일라리오 루피노(Ilario Ruffino)와 레오폴도 루피노(Leopoldo Ruffino)가 플로렌스 근교에 위치한 폰타씨에베(Pontassieve)에 와이너리를 설립하며 그 역사가 시작되었습니다.",
    "grapeNames": []
  },
  {
    "slug": "brunello-di-montalcino-aria-2018",
    "nameKo": "Brunello di Montalcino Aria 2018",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "몬탈치노 (Montalcino) < 토스카나",
    "volume": 750,
    "servingTempMin": 18,
    "servingTempMax": 20,
    "foodPairing": "[\"▶ 붉은 육류 요리\", \"숙성된 페코리노 및 파마산 치즈\", \"크리미한 리조토\"]",
    "description": "브루넬로 디 몬탈치노 ‘아리아’는 스텔라 디 캄팔토의 2018년 빈티지 와인 3가지 중 하나로 단 4,287병만 생산되었습니다. 이탈리아 어로 공기(Air)를 뜻하는 아리아(Aria)에서 영감을 받아 와인의 이름이 지어졌는데 이는 아리아가 생산되는 포도밭 세부 구획 내 독특한 공기의 순환에 의해 포도의 완숙 시기가 영향을 받기 때문입니다. 포도밭 내 존재하는 고유의 토착 효모를 활용하여 20~40 HL(헥토리터)의 대형 오크통에서 발효가 진행되며, 15~17 HL의 배럴에서 34개월간 숙성이 진행됩니다. 배럴 숙성 이후추가로 42개월간 병 숙성을 거친 후 출시됩니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "브루넬로 디 몬탈치노 아리아 2018",
    "grapeNames": []
  },
  {
    "slug": "brunello-di-montalcino-bacia-2019",
    "nameKo": "Brunello di Montalcino Bacia 2019",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "몬탈치노 (Montalcino) < 토스카나",
    "volume": 750,
    "servingTempMin": 18,
    "servingTempMax": 20,
    "foodPairing": "[\"▶ 토마토 베이스 미트 파스타\", \"소고기 스테이크\", \"진한 풍미의 스튜\"]",
    "description": "브루넬로 디 몬탈치노 ‘바치아’는 스텔라 디 캄팔토의 2019년 빈티지 와인 3가지 중 하나로 단 8,537병만 생산되었습니다. 이탈리아 어로 입맞춤(Kiss)를 뜻하는 바치아(Bacia)에서   영감을 받아 와인의 이름이 지어졌는데 이는 스텔라가 와인이 가지는 부드러운 질감과 산딸기의 아로마에서 영감을 받았기 때문입니다. 포도밭 내 존재하는 고유의 토착 효모를 활용하여 20~40 HL(헥토리터)의 대형 오크통에서 발효가 진행되며, 15~17 HL의 배럴에서 34개월간 숙성이 진행됩니다. 배럴 숙성 이후추가로 29개월간 병 숙성을 거친 후 출시됩니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "브루넬로 디 몬탈치노 바치아 2019",
    "grapeNames": []
  },
  {
    "slug": "torresella-prosecco-doc",
    "nameKo": "Torresella Prosecco DOC",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "Venezia , Italy",
    "volume": 750,
    "foodPairing": "[]",
    "description": "밝고 옅은 볏짚색을 띠고 시트러스, 청 사과, 핵과류 그리고 플로럴 노트가 복합적으로 피어오릅니다.  존재감을 드러내는 버블과 적정한 산도 그리고 알코올의 조화가 감미롭게 느껴지는 스파클링 와인입니다. 아페로로도 손색없고 해산물, 닭고기 요리 등과 매치했을 때 그 풍미가 극대화되는 와인입니다. 베네토 지역의 심장부에 있는 자연친화적인 와이너리",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "토레셀라 프로세코",
    "grapeNames": []
  },
  {
    "slug": "torresella-prosecco-rose",
    "nameKo": "Torresella Prosecco Rose",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "Venezia , Italy",
    "volume": 750,
    "foodPairing": "[]",
    "description": "연한  핑크 색상이 눈을 즐겁게 하고 시트러스, 복숭아와 같은 핵과류, 브리오쉬 아로마 등이 복합적으로 피어 오릅니다. 입에 머금자 마자 느껴지는 반짝이는 버블과 적정한 산도 그리고  알코올의 조화가 아름다운 와인으로 핵과류의 풍미가 긴 여운을 이끕니다. 아페로로 패어링 없이 즐기기에도 좋고 해산물,샐러드, 파스타 등과 좋은 궁합을 보이며 향신료가 가미된 아시아 음식과도 좋은 패어링을 보여 줍니다. 베네토 지역의 심장부에 있는 자연친화적인 와이너리",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "토레셀라 프로세코 로제",
    "grapeNames": []
  },
  {
    "slug": "torresella-pinot-grigio",
    "nameKo": "Torresella Pinot Grigio",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "Venezia , Italy",
    "volume": 750,
    "foodPairing": "[]",
    "description": "밝고 옅은 볏짚색을 띠고 시트러스, 청 사과, 핵과류 그리고 플로럴 노트가 복합적으로 피어오릅니다. 입에 머금자마자 느껴지는 프레시한 산도와 알코올의 조화가 아름다운 와인으로 스파이스의 힌트가 여운을 맴돕니다. 아페로로도 손색없고 해산물, 닭고기 요리 등과 매치했을 때 그 풍미가 극대화되는 와인입니다. 베네토 지역의 심장부에 있는 자연친화적인 와이너리",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "토레셀라 피노그리지오",
    "grapeNames": []
  },
  {
    "slug": "torresella-cabernet-sauvignon",
    "nameKo": "Torresella Cabernet Sauvignon",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "Venezia , Italy",
    "volume": 750,
    "foodPairing": "[]",
    "description": "진한 레드 색상으로 레드, 블랙베리류의 아로마가 풍성하고 허브와 스파이스의 향이 복합적으로 피어오릅니다. 입에 머금었을 때 느껴지는 활기찬 산도, 알코올 그리고 부드러운 타닌의 좋은 밸런스가 돋보이면서도 다이내믹하게 느껴지며 블랙 체리의 풍미가 긴 여운을 남깁니다. 베네토 지역의 심장부에 있는 자연친화적인 와이너리 로마 제국부터 와인을 위한 포도밭이 많았던 이탈리아 동부 베네토 지역에 거점을 두고 1984년 설립된 와이너리입니다. 한쪽에는 알프스 산맥을 끼고 있으며 다른 쪽에는 풍족한 생물 다양성으로 세계문화유산으로 인정받은 베니스 석호를 접하고 있습니다. 유럽에 얼마 남지 않은 습지 지역 중 자연을 잘 보존하고 있는 지역으로 철새들과 기타 다양한 동물들이 있습니다. 이러한 특징은 Torresella 와인 라벨에 잘 나타나는데, 왜가리의 시점으로 위에서 이 지역을 내려다보는 듯한 풍경이 그려져 있습니다. Torresella의 포도밭은 Villanova di Fossalta di Portogruaro에서 바다까지 이어져 있어 더운 여름을 바다에서 불어오는 바람이 식혀주며 미네랄러티를 더해줍니다. 또한, Livenza 강과 Tagliamento 강의 충적층에 있어서 점토질의 토양을 지니고 있습니다. 이러한 지리적 요소들과 환경과 어우러지는 노력으로 꾸준히 성장하고 있으며 합리적인 가격에 좋은 품질의 와인을 생산하고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "토레셀라 카베르네 소비뇽",
    "grapeNames": []
  },
  {
    "slug": "torresella-merlot",
    "nameKo": "Torresella Merlot",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "Venezia , Italy",
    "volume": 750,
    "foodPairing": "[]",
    "description": "진한 레드 색상으로 베리류, 흑 자두, 히비스커스, 스파이스 아로마가 복합적으로 피어오릅니다. 입에 머금자마자 느껴지는 부드러운 타닌, 적정한 산도 그리고 알코올의 조화가 아름다운 와인으로 자두의 풍미가 긴 여운의 끝에 혀를 감쌉니다. 베네토 지역의 심장부에 있는 자연친화적인 와이너리 로마 제국부터 와인을 위한 포도밭이 많았던 이탈리아 동부 베네토 지역에 거점을 두고 1984년 설립된 와이너리입니다. 한쪽에는 알프스 산맥을 끼고 있으며 다른 쪽에는 풍족한 생물 다양성으로 세계문화유산으로 인정받은 베니스 석호를 접하고 있습니다. 유럽에 얼마 남지 않은 습지 지역 중 자연을 잘 보존하고 있는 지역으로 철새들과 기타 다양한 동물들이 있습니다. 이러한 특징은 Torresella 와인 라벨에 잘 나타나는데, 왜가리의 시점으로 위에서 이 지역을 내려다보는 듯한 풍경이 그려져 있습니다. Torresella의 포도밭은 Villanova di Fossalta di Portogruaro에서 바다까지 이어져 있어 더운 여름을 바다에서 불어오는 바람이 식혀주며 미네랄러티를 더해줍니다. 또한, Livenza 강과 Tagliamento 강의 충적층에 있어서 점토질의 토양을 지니고 있습니다. 이러한 지리적 요소들과 환경과 어우러지는 노력으로 꾸준히 성장하고 있으며 합리적인 가격에 좋은 품질의 와인을 생산하고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "토레셀라 메를로",
    "grapeNames": []
  },
  {
    "slug": "rosso-di-montalcino",
    "nameKo": "Rosso di Montalcino",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "몬탈치노 (Montalcino) < 토스카나",
    "volume": 750,
    "servingTempMin": 18,
    "servingTempMax": 20,
    "foodPairing": "[\"▶ 프로슈토를 비롯한 샤퀴테리\", \"피자\", \"토마토 소스 파스타\", \"연성 치즈\"]",
    "description": "2022 Vintage : JS 92점, Vinous 90점 발 디 수가 로쏘 디 몬탈치노는 북동쪽, 남동쪽, 남서쪽에 위치한 세 곳의 포도밭에서 재배된 포도로 만들어집니다. 포도밭 주변에는 올리브 나무, 로즈마리 허브, 지중해성 관목들이    자라고 있으며 토양은 석회질이 풍부한 사암(Pietraforte stone)에서 유래한 모래가 주를 이루고 있습니다. 평균 수령 10년 정도의 포도 나무에서 손 수확한 포도는 줄기 제거 및 광학 센서(Optical sorting)를 통한 고도의 선별     작업 후 2주간의 저온 침용을 거칩니다.  섭씨 28도에서 12일간 발효 후 50hL의 대형 슬라보니안 오크통에서 6개월 숙성을 진행하며 병입 후 최소 3개월 숙성이  이루어  집니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "로쏘 디 몬탈치노",
    "grapeNames": []
  },
  {
    "slug": "brunello-di-montalcino",
    "nameKo": "Brunello di Montalcino",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "몬탈치노 (Montalcino) < 토스카나",
    "volume": 750,
    "servingTempMin": 18,
    "servingTempMax": 20,
    "foodPairing": "[\"▶ 양갈비\", \"비프 웰링턴\", \"BBQ\", \"페코리노를 비롯한 숙성 치즈\"]",
    "description": "2020 Vintage : RP 93점, JS 92점 발 디 수가 브루넬로 디 몬탈치노는 북동쪽, 남동쪽, 남서쪽에 위치한 세 곳의 포도밭에서 재배된 포도로 만들어집니다. 각기 다른 미세 기후의 영향을 받은 브루넬로를 블렌딩하여 와인의 복합적인 풍미와 균형 잡힌 산도, 구조감을 완성합니다. 이른 새벽 손 수확한 포도는 줄기 제거 및 광학 센서(Optical sorting)를 통한 고도의 선별 작업을 거친 후 섭씨 28도에서 12일간 섬세한 추출 방식을 적용하여 발효를 진행합니다.    발효 후 약 20일간 섭씨 30도에서 추가 침용 과정을 거치고 50hL의 대형 슬라보니안 오크통에서 24개월,  병입 후 최소 6개월간 숙성이 이루어 집니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "브루넬로 디 몬탈치노",
    "grapeNames": []
  },
  {
    "slug": "brunello-di-montalcino-poggio-al-granchio",
    "nameKo": "Brunello di Montalcino Poggio al Granchio",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "몬탈치노 (Montalcino) < 토스카나",
    "volume": 750,
    "servingTempMin": 18,
    "servingTempMax": 20,
    "foodPairing": "[\"▶ 송아지 오소부코\", \"마리나라 소스 미트볼\", \"포크 찹 스테이크\", \"염소 치즈\"]",
    "description": "2020 Vintage : RP 94+점, JS 93점 포지오 알 그란키오는 몬탈치노 남동쪽, 해발고도 380~450m에   위치하고 있으며 아미아타 산(Monte Amiata)의 영향으로       일교차가 매우 큰 포도밭입니다. 점토와 편암으로 이루어진        갈레스트로(Galestro) 토양 덕분에 적절한 수분을 보유하면서도 배수가 원활하게 이루어져 최상급 브루넬로가 탄생하는 곳이기도 합니다. 포도밭 명칭인 그란키오(Granchio)는 이탈리아어로     게(Crab)을 뜻하는데 부지 내 작은 호수에서 종종 민물게가 발견되어 붙여진 이름입니다. 이른 새벽 손 수확한 포도는 줄기 제거 및 광학 센서(Optical sorting)를 통한 고도의 선별 작업을 거친 후 섭씨 28도에서 14일간 섬세한 추출 방식을 적용하여 발효를 진행합니다. 발효 후 약 25일간 섭씨 30도에서 추가 침용 과정을 거치고 50~60hL의 대형 프렌치 오크통에서 24개월, 콘크리트 탱크에서 18개월, 병입 후  최소 6개월간 숙성이 이루어 집니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "브루넬로 디 몬탈치노 포지오 알 그란키오",
    "grapeNames": []
  },
  {
    "slug": "brunello-di-montalcino-vigna-del-lago",
    "nameKo": "Brunello di Montalcino Vigna del Lago",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "몬탈치노 (Montalcino) < 토스카나",
    "volume": 750,
    "servingTempMin": 18,
    "servingTempMax": 20,
    "foodPairing": "[\"▶ 훈제 오리 고기\", \"로스트 치킨\", \"소고기 스테이크\", \"버섯 소스 파스타\"]",
    "description": "2020 Vintage : RP 94점, JS 94점 비냐 델 라고는 발 디 수가가 1983년에 선보인 최초의 크뤼급 싱글 빈야드 브루넬로 디 몬탈치노입니다. 포도밭 명칭인 라고(Lago)는 이탈리아어로 호수를 뜻하며 와이너리 바로 맞은편에 위치하고 있는 작은 호수에서 영감을 받아 붙여졌습니다. 비냐 델 라고는 몬탈치노 북동쪽, 해발고도 265~285m에   위치하고 있으며 서늘한 대륙성 기후의 영향을 받습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "브루넬로 디 몬탈치노 비냐 델 라고",
    "grapeNames": []
  },
  {
    "slug": "brunello-di-montalcino-vigna-spuntali",
    "nameKo": "Brunello di Montalcino Vigna Spuntali",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "몬탈치노 (Montalcino) < 토스카나",
    "volume": 750,
    "servingTempMin": 18,
    "servingTempMax": 20,
    "foodPairing": "[\"▶ 소고기 스튜\", \"베이징 덕\", \"파르미지아노 치즈\", \"향신료가 가미된 아시아 음식\"]",
    "description": "2019 Vintage : RP 95점, JS 92점 비냐 스푼탈리는 몬탈치노 남서쪽, 해발고도 300m에 위치하고      있으며 바다로 부터 불과 40여 킬로미터 떨어져있습니다. 해양 바람 덕분에 통풍이 잘 되며 일조량이 풍부한 지중해성 기후의 영향을      받아 부르넬로 지역 중 포도가 가장 먼저 완숙되는 곳입니다. 포도밭 주변에는 올리브 나무, 로즈마리 허브, 지중해성 관목들이 자라고    있으며 토양은 석회질이 풍부한 사암(Pietraforte stone)에서 유래한 모래가 주를 이루고 있습니다. 평균 수령 30년 정도의 포도나무에서 손 수확한 포도는 줄기 제거 및 광학 센서(Optical sorting)를 통한 고도의 선별 작업을 거친 후    섭씨 30도에서 15일간 섬세한 추출 방식을 적용하여 발효를 진행합니다. 발효 후 약 20일간 섭씨 30도에서 추가 침용 과정을 거치고 300L의 프렌치 오크통에서 6개월, 25hL의 슬라보니안 오크통에서 18개월, 콘크리트 탱크에서 18개월, 병입 후  최소 18개월간 숙성이 이루어 집니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "브루넬로 디 몬탈치노 비냐 스푼탈리",
    "grapeNames": []
  },
  {
    "slug": "roero-arneis",
    "nameKo": "Roero Arneis",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 6,
    "servingTempMax": 8,
    "foodPairing": "[]",
    "description": "로에로 아르네이스의 포도는 로에로 지역의 중심부에 위치한 산토 스테파노 로에로에서 생산 됩니다. 투명한 볕짚색을 띄고 있으며, 신선한 꽃향과 감귤류 그리고 멜론 향이 풍부합니다. 아몬드 풍미는 입안에서 적절한 바디감과 함께 조화롭게 이루어져 복합미를 형성합니다. 19세기부터 비에티 와이너리는 와인 생산의 역사를 시작하였지만, 20세기에 처음으로 생산된 와인에 비에티 라는 이름을 새겨 넣으면서 진정한 역사가 시작 되었습니다. 1919년 처음 생산된 비에티 와인은 설립자인 ‘파트리아크 마리오 비에티’에 의해 이태리 전역으로 판매가 되었습니다. 1952년 알프레도 쿠라도씨(설립자의 사위)는 밭에 관리에 많은 투자를 하여 고품질의 와인생산자로 이름을 날리기 시작했습니다. 이를 통해 피에몬테에서 가장 처음으로 미국으로 와인을 수출하는 와이너리가 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "로에로 아르네이스",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "이는 1967년 멸종 될뻔한 아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재의 피에몬테의 대표 화이트 포도품종으로 만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "timorasso-derthona",
    "nameKo": "Timorasso Derthona",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 6,
    "servingTempMax": 8,
    "foodPairing": "[]",
    "description": "맑고 진한 노란색과 녹색테두리를 가진 와인. 배나 복숭아와 같은 잘 익은 녹색 과일의 향이 미네랄과 아카시아, 산사나무향의 플로랄 뉘앙스와 잘 어우러집니다. 입 안에서 꽉 차게 느껴지는 부드럽고 풍부한 과실감과, 뛰어난 밸런스를 가지고 있으며 신선한 산도감이 특징인 와인입니다. 19세기부터 비에티 와이너리는 와인 생산의 역사를 시작하였지만, 20세기에 처음으로 생산된 와인에 비에티 라는 이름을 새겨 넣으면서 진정한 역사가 시작 되었습니다. 1919년 처음 생산된 비에티 와인은 설립자인 ‘파트리아크 마리오 비에티’에 의해 이태리 전역으로 판매가 되었습니다. 1952년 알프레도 쿠라도씨(설립자의 사위)는 밭에 관리에 많은 투자를 하여 고품질의 와인생산자로 이름을 날리기 시작했습니다. 이를 통해 피에몬테에서 가장 처음으로 미국으로 와인을 수출하는 와이너리가 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "티모라쏘 데르토나",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "이는 1967년 멸종 될뻔한 아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재의 피에몬테의 대표 화이트 포도품종으로 만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "barbera-d-alba-tre-vigne",
    "nameKo": "Barbera d'Alba (Tre Vigne)",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 13,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "바르베라 달바는 랑게 지역에서 유명한 몬포르테 세부 산지의 3개의 다른 포도밭에서 생산됩니다. 루비 색을 띄고 있으며, 익은 체리와 바닐라 향이 풍부하며, 제비꽃 풍미와 산도는 입안에서 어우러집니다. 부드러운 탄닌은 오크의 풍미와 조화롭게 뭉쳐져서 입안에 긴여운으로 남습니다. 19세기부터 비에티 와이너리는 와인 생산의 역사를 시작하였지만, 20세기에 처음으로 생산된 와인에 비에티 라는 이름을 새겨 넣으면서 진정한 역사가 시작 되었습니다. 1919년 처음 생산된 비에티 와인은 설립자인 ‘파트리아크 마리오 비에티’에 의해 이태리 전역으로 판매가 되었습니다. 1952년 알프레도 쿠라도씨(설립자의 사위)는 밭에 관리에 많은 투자를 하여 고품질의 와인생산자로 이름을 날리기 시작했습니다. 이를 통해 피에몬테에서 가장 처음으로 미국으로 와인을 수출하는 와이너리가 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바르베라 달바 (트레 비그네)",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "이는 1967년 멸종 될뻔한 아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재의 피에몬테의 대표 화이트 포도품종으로 만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "barbera-d-asti-tre-vigne",
    "nameKo": "Barbera d'Asti (Tre Vigne)",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 13,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "바르베라 다스티의 포도는 라 크레나 포도밭으로 유명한 아스티 언덕주변인 아그리아노 테르메 지역에서 생산됩니다. 루비색을 띄고 있으며, 익은 붉은 체리향과 계피와 같은 스위트 스파이스 향이 풍부하게 납니다. 잔잔한 산도와 함께 느껴지는 탄닌은 조화롭게 밸런스를 유지하며, 입안에서 오크 풍미와 체리풍미가 긴 여운으로 느껴집니다. 19세기부터 비에티 와이너리는 와인 생산의 역사를 시작하였지만, 20세기에 처음으로 생산된 와인에 비에티 라는 이름을 새겨 넣으면서 진정한 역사가 시작 되었습니다. 1919년 처음 생산된 비에티 와인은 설립자인 ‘파트리아크 마리오 비에티’에 의해 이태리 전역으로 판매가 되었습니다. 1952년 알프레도 쿠라도씨(설립자의 사위)는 밭에 관리에 많은 투자를 하여 고품질의 와인생산자로 이름을 날리기 시작했습니다. 이를 통해 피에몬테에서 가장 처음으로 미국으로 와인을 수출하는 와이너리가 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바르베라 다스티 (트레 비그네)",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "이는 1967년 멸종 될뻔한 아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재의 피에몬테의 대표 화이트 포도품종으로 만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "barbera-d-asti-la-crena",
    "nameKo": "Barbera d'Asti La Crena",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 13,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "라 크레나 포도밭은 아스티 언덕 주변인 아그리아노 테르메 지역에 인접해 있습니다. 강렬한 루비색. 잘 익은 라즈베리와 붉은 체리의 농축된 향이 스파이시하고 미네랄 가득한 향, 그리고 약간의 바닐라와 토스트한 느낌과 잘 어우러집니다. 입 안에서 풍성한 바디감, 기분 좋은 산도와 함께 밸런스가 좋은 와인입니다. 19세기부터 비에티 와이너리는 와인 생산의 역사를 시작하였지만, 20세기에 처음으로 생산된 와인에 비에티 라는 이름을 새겨 넣으면서 진정한 역사가 시작 되었습니다. 1919년 처음 생산된 비에티 와인은 설립자인 ‘파트리아크 마리오 비에티’에 의해 이태리 전역으로 판매가 되었습니다. 1952년 알프레도 쿠라도씨(설립자의 사위)는 밭에 관리에 많은 투자를 하여 고품질의 와인생산자로 이름을 날리기 시작했습니다. 이를 통해 피에몬테에서 가장 처음으로 미국으로 와인을 수출하는 와이너리가 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바르베라 다스티 라 크레나",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "이는 1967년 멸종 될뻔한 아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재의 피에몬테의 대표 화이트 포도품종으로 만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "langhe-nebbiolo-perbacco",
    "nameKo": "Langhe Nebbiolo Perbacco",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 13,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "랑게 네비올로는 바롤로와 바르바레스코 지역의 네비올로 포드를 사용하여 만든 와인으로 각 지역의 포도를 이용해 와인을 각기 만들어 블렌딩을 하면 페바코로, 블렌딩을 하지 않으면 바롤로로 출시 됩니다 붉은 루비색을 가지고 있으며, 체리향이 도드라지고, 멘솔과 스파이스 향들도 계속 됩니다. 젊은 네비올로이기에 강한 탄닌감과 복잡미 그리고 우아함을 동시에 가지고 있습니다. 19세기부터 비에티 와이너리는 와인 생산의 역사를 시작하였지만, 20세기에 처음으로 생산된 와인에 비에티 라는 이름을 새겨 넣으면서 진정한 역사가 시작 되었습니다. 1919년 처음 생산된 비에티 와인은 설립자인 ‘파트리아크 마리오 비에티’에 의해 이태리 전역으로 판매가 되었습니다. 1952년 알프레도 쿠라도씨(설립자의 사위)는 밭에 관리에 많은 투자를 하여 고품질의 와인생산자로 이름을 날리기 시작했습니다. 이를 통해 피에몬테에서 가장 처음으로 미국으로 와인을 수출하는 와이너리가 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "랑게 네비올로 페바코",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "이는 1967년 멸종 될뻔한 아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재의 피에몬테의 대표 화이트 포도품종으로 만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "barbaresco-cru-masseria",
    "nameKo": "Barbaresco Cru Masseria",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 13,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "마세리아의 포도는 트레이소 와 네이브 지역의 포도밭에서 수확을 하였으며, 싱글 빈야드로 남쪽을 바라보고 있는 언덕입니다. 루비색을 가지고 있으며, 가넷색의 가장자리를 가지고 있습니다. 익은 체리와 찻잎, 장미유 그리고 미네랄 풍기가 강하게 나며, 단단하고 익은 탄닌은 입안에서 둥글게 어울어져 긴 여운과 계속된 질감을 줍니다. 19세기부터 비에티 와이너리는 와인 생산의 역사를 시작하였지만, 20세기에 처음으로 생산된 와인에 비에티 라는 이름을 새겨 넣으면서 진정한 역사가 시작 되었습니다. 1919년 처음 생산된 비에티 와인은 설립자인 ‘파트리아크 마리오 비에티’에 의해 이태리 전역으로 판매가 되었습니다. 1952년 알프레도 쿠라도씨(설립자의 사위)는 밭에 관리에 많은 투자를 하여 고품질의 와인생산자로 이름을 날리기 시작했습니다. 이를 통해 피에몬테에서 가장 처음으로 미국으로 와인을 수출하는 와이너리가 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바르바레스코 크뤼 마세리아",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "이는 1967년 멸종 될뻔한 아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재의 피에몬테의 대표 화이트 포도품종으로 만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "barolo-castiglione",
    "nameKo": "Barolo Castiglione",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 13,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "카스틸리오네의 포도들은 바롤로 지역의 작은 밭들에서 선별되어 수확된 포도들만을 사용합니다. 포도나무의 수령은 보통 8~43년된 나무 입니다. 붉은 루비색을 띄고 있으며, 땅에서 느껴지는 흙과 미네랄 향이 풍부합니다. 탄닌이 매우 단단한 구조감을 가지고 있어서 오래 브리딩 혻은 디캔팅을 하여 부드러운 상태로 드시면 입안에서 느껴지는 탄닌의 질감은 매우 부드럽게 바뀔것입니다. 19세기부터 비에티 와이너리는 와인 생산의 역사를 시작하였지만, 20세기에 처음으로 생산된 와인에 비에티 라는 이름을 새겨 넣으면서 진정한 역사가 시작 되었습니다. 1919년 처음 생산된 비에티 와인은 설립자인 ‘파트리아크 마리오 비에티’에 의해 이태리 전역으로 판매가 되었습니다. 1952년 알프레도 쿠라도씨(설립자의 사위)는 밭에 관리에 많은 투자를 하여 고품질의 와인생산자로 이름을 날리기 시작했습니다. 이를 통해 피에몬테에서 가장 처음으로 미국으로 와인을 수출하는 와이너리가 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바롤로 카스틸리오네",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "이는 1967년 멸종 될뻔한 아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재의 피에몬테의 대표 화이트 포도품종으로 만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "barolo-cru-lazzarito",
    "nameKo": "Barolo Cru Lazzarito",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 13,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "라자리토는 세랄룽가 달바 지역의 싱글 빈야드인 ‘라자리토’에서 나온 포도만을 이용하여 만든 와인입니다. 라자리토는 2헥타르 면적의 밭으로, 나무들의 평균 수령은 36년 입니다. 와인은 깊은 가넷 컬러를 띄고 있으며, 단단하면서도 둥글고 벨벳과도 같은 질감이 느껴집니다. 코에서는 대표적으로 자두와 무화과 등 과실의 인텐스한 아로마가 감지되고, 한 입 머금으면 유연하고 달콤한 탄닌이 어우러져 긴 피니시를 이끌어 냅니다. 19세기부터 비에티 와이너리는 와인 생산의 역사를 시작하였지만, 20세기에 처음으로 생산된 와인에 비에티 라는 이름을 새겨 넣으면서 진정한 역사가 시작 되었습니다. 1919년 처음 생산된 비에티 와인은 설립자인 ‘파트리아크 마리오 비에티’에 의해 이태리 전역으로 판매가 되었습니다. 1952년 알프레도 쿠라도씨(설립자의 사위)는 밭에 관리에 많은 투자를 하여 고품질의 와인생산자로 이름을 날리기 시작했습니다. 이를 통해 피에몬테에서 가장 처음으로 미국으로 와인을 수출하는 와이너리가 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바롤로 크뤼 라자리토",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "이는 1967년 멸종 될뻔한 아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재의 피에몬테의 대표 화이트 포도품종으로 만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "barolo-cru-ravera",
    "nameKo": "Barolo Cru Ravera",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 13,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "라베라는 노벨로 지역의 싱글 빈야드인 ‘라베라’에서 나온 포도만을 이용하여 만든 와인입니다. 라베라는 3헥타르 면적의 밭으로, 나무들의 평균 수령은 26년 입니다. 깊은 루비색 컬러, 바롤로의 전형적인 탄닌 구조감을 가지고 있습니다. 오픈 뒤 잔에서 약간의 시간을 기다리게 되면 체리와 오트밀, 이스트, 그리고 다양한 스파이스들이 복합적으로 느껴집니다. 단단한 구조감은 이러한 풍미들과 어우러져 긴 여운을 줍니다. 19세기부터 비에티 와이너리는 와인 생산의 역사를 시작하였지만, 20세기에 처음으로 생산된 와인에 비에티 라는 이름을 새겨 넣으면서 진정한 역사가 시작 되었습니다. 1919년 처음 생산된 비에티 와인은 설립자인 ‘파트리아크 마리오 비에티’에 의해 이태리 전역으로 판매가 되었습니다. 1952년 알프레도 쿠라도씨(설립자의 사위)는 밭에 관리에 많은 투자를 하여 고품질의 와인생산자로 이름을 날리기 시작했습니다. 이를 통해 피에몬테에서 가장 처음으로 미국으로 와인을 수출하는 와이너리가 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바롤로 크뤼 라베라",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "이는 1967년 멸종 될뻔한 아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재의 피에몬테의 대표 화이트 포도품종으로 만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "barolo-cru-cerequio",
    "nameKo": "Barolo Cru Cerequio",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 13,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "체레퀴오는 바롤로에서도 유명하고 역사가 깊은 크뤼 빈야드입니다. 비에띠는 체레퀴오에 1헥타르 면적의 밭을 소유하고 있으며, 2018 빈티지부터 새롭게 바롤로 크뤼 와인을 출시했습니다. 깊은 루비색 컬러, 잘 익은 붉은베리의 향과 스파이시함이 잘 어우러집니다. 강렬한 향 뒤에 풍부하지만 매우 우아하고 밸런스가 잘 잡힌 와인의 맛이 따라옵니다. 부드러운 탄닌과 구조감이 잘 잡혀있는 와인입니다 19세기부터 비에티 와이너리는 와인 생산의 역사를 시작하였지만, 20세기에 처음으로 생산된 와인에 비에티 라는 이름을 새겨 넣으면서 진정한 역사가 시작 되었습니다. 1919년 처음 생산된 비에티 와인은 설립자인 ‘파트리아크 마리오 비에티’에 의해 이태리 전역으로 판매가 되었습니다. 1952년 알프레도 쿠라도씨(설립자의 사위)는 밭에 관리에 많은 투자를 하여 고품질의 와인생산자로 이름을 날리기 시작했습니다. 이를 통해 피에몬테에서 가장 처음으로 미국으로 와인을 수출하는 와이너리가 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바롤로 크뤼 체레퀴오",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "이는 1967년 멸종 될뻔한 아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재의 피에몬테의 대표 화이트 포도품종으로 만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "barolo-cru-monvigliero",
    "nameKo": "Barolo Cru Monvigliero",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 13,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "몬빌리에로는 Verduno마을의 가장 명성있고 중요한 빈야드일뿐만 아니라 전체 바롤로 지역에서 가장 권위있는 지역중 하나입니다. 비에띠에서는 체레퀴오와 더불어 몬빌리에로에서 2018빈티지부터 새롭게 바롤로 크뤼 와인을 출시했습니다. 루비색 컬러, 섬세하지만 강렬한 아로마. 딸기, 체리 그리고 장미의 향이 우아하게 입 안에서 느껴지며, 탄닌은 부드럽고 실키하며 과일의 구조감과 완벽한 조화를 이룹니다. 프레쉬한 스파이시함이 오랫동안 여운으로 이어집니다. 19세기부터 비에티 와이너리는 와인 생산의 역사를 시작하였지만, 20세기에 처음으로 생산된 와인에 비에티 라는 이름을 새겨 넣으면서 진정한 역사가 시작 되었습니다. 1919년 처음 생산된 비에티 와인은 설립자인 ‘파트리아크 마리오 비에티’에 의해 이태리 전역으로 판매가 되었습니다. 1952년 알프레도 쿠라도씨(설립자의 사위)는 밭에 관리에 많은 투자를 하여 고품질의 와인생산자로 이름을 날리기 시작했습니다. 이를 통해 피에몬테에서 가장 처음으로 미국으로 와인을 수출하는 와이너리가 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바롤로 크뤼 몬빌리에로",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "이는 1967년 멸종 될뻔한 아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재의 피에몬테의 대표 화이트 포도품종으로 만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "barolo-rocche-di-castiglione",
    "nameKo": "Barolo Rocche di Castiglione",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "비에띠가 위치한 카스틸리오네 팔레토 마을에서 가장 작고 역사적인 포도밭인 로께 디 카스틸리오네 크뤼에서 1940년, 1950년, 1968년에 식재된 오래된 포도나무에서 수확한 포도를 사용하였습니다. 해발고도 300~350m의 매우 가파른 지대에 위치하며, 석회암(limestone)과 점토가(clay)가 섞인 이회토의 영향으로 우아하면서도 단단한 와인입니다. 루비와 같은 아름다운 붉은 빛이 감돌며 말린 장미, 감초, 향신료 및 송로버섯의 향이 어우러지는 복합미가 아름다운 와인입니다. 강렬하지만 우아한, 균형 잡힌 실키한 텍스처의 탄닌이 미각 전체에 걸쳐 퍼지며 긴 여운으로 마무리 됩니다. 녹진한 스튜나 붉은 고기, 트러플이 가미된 치즈와 함께 드시면 더욱 좋습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바롤로 로께 디 카스틸리오네",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "이는 1967년 멸종 될뻔한 아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재의 피에몬테의 대표 화이트 포도품종으로 만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "barolo-brunate",
    "nameKo": "Barolo Brunate",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "피에몬테 서쪽에 위치한 라 모라 (La Morra)의 브루나테 크뤼의 평균수령 54년이 넘은 포도나무에서 수확한 포도만을 이용하여 만든 와인입니다. 스테인리스스틸 탱크에 껍질과 함께 발효하는 전통적인 방식으로 3주 동안 부드럽게 으깨어 발효되며 바리끄에서 MLF발효를 진행합니다. 강렬한 루비 빛을 띄는 붉은색을 가진 이 와인은 드라이하고 파워풀한 와인입니다. 잘 익은 검은야생체리의 향과 동시에 브루나테 빈야드의 특징인 자두, 제비꽃, 타르, 감초등의 향신료 향이 압 안 가득 퍼지며 긴 여운을 선사합니다. 마치 벨벳과 같은 질감의 탄닌이 미각 전체에 걸쳐 퍼지며 우아하게 마무리 됩니다. 붉은 고기나 구운 고기 요리와 페어링하는 것을 추천합니다. 19세기부터 비에티 와이너리는 와인 생산의 역사를 시작하였지만, 20세기에 처음으로 생산된 와인에 비에티 라는 이름을 새겨 넣으면서 진정한 역사가 시작 되었습니다.1919년 처음 생산된 비에티 와인은 설립자인 ‘파트리아크 마리오 비에티’에 의해 이태리 전역으로 판매가 되었습니다. 1952년 알프레도 쿠라도씨(설립자의 사위)는 밭에 관리에 많은 투자를 하여 고품질의 와인생산자로 이름을 날리기 시작했습니다. 이를 통해 피에몬테에서 가장 처음으로 미국으로 와인을 수출하는 와이너리가 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바롤로 브루나테",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "이는 1967년 멸종 될뻔한 아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재의 피에몬테의 대표 화이트 포도품종으로 만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "barolo-riserva-villero-docg",
    "nameKo": "단 하나의 빈티지, 단 한병의 아트레이블 와인, Since 1974",
    "nameEn": "Barolo Riserva Villero DOCG",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "Barolo Riserva Villero DOCG",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "Heritage- Artist Label Wine",
    "grapeNames": []
  },
  {
    "slug": "2012-renzo-piano-transform-the-grapes-into-a-timeless-nectar",
    "nameKo": "매 빈티지마다 다른 디자인의 아티스트 레이블을 선보이는 빌레로 2012의 레이블은 프리츠커 상을 비롯, 건축계의 권위있는 상들을 휩쓴 이탈리아의 저명한 건축가 렌조 피아노 (Renzo Piano) 가 디자인 하였습니다. 본인이 설계에 참여한 파리 퐁피두 센터를 배경으로 포도 송이가 건축물을 감싸안는 형상을 보여주는데, 이는 시간을 초월하는 와인을 의미합니다. 그는 비에티의 와인메이킹을 ‘포도를 시간을 초월한 과즙으로 바꾸는 것’ (transform the grapes into a timeless nectar) 이라고 표현했으며, 이에 시대의 변화를 상징하고 시간을 초월한 의미를 지니는 퐁피두 센터에 포도를 오버랩 하였습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 13,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "19세기부터 비에티 와이너리는 와인 생산의 역사를 시작하였지만, 20세기에 처음으로 생산된 와인에 비에티 라는 이름을 새겨 넣으면서 진정한 역사가 시작 되었습니다. 1919년 처음 생산된 비에티 와인은 설립자인 ‘파트리아크 마리오 비에티’에 의해 이태리 전역으로 판매가 되었습니다. 1952년 알프레도 쿠라도씨(설립자의 사위)는 밭에 관리에 많은 투자를 하여 고품질의 와인생산자로 이름을 날리기 시작했습니다. 이를 통해 피에몬테에서 가장 처음으로 미국으로 와인을 수출하는 와이너리가 되었습니다. 알프레도는 비에티 와인을 만들며 부르나테, 로케, 빌레로 등 싱글 빈야드 와인을 만들기 시작하였습니다. 이는, 피에몬테에서 최초로 ‘싱글 빈야드’의 개념을 와인 생산에 접목한 와이너리로, 지금의 바롤로와 바르바레스코 ‘싱글 빈야드’ 또는 ‘크뤼’ 라는 개념을 만들어낸 피에몬테의 선구자라고 할 수 있습니다. 1970년에 알프레도와 루시아나(알프레도 부인)은 지역 예술가들을 후원하기 위해 비에티에서 생산되는 모든 와인의 라벨에 각각의 예술가들의 작품을 담게 되었습니다. 이러한 예술 라벨의 탄생은 비에티의 모든 와인에 적용되었을 뿐만 아니라, 최상급 와인인 ‘빌레로’의 경우 매해 새로운 예술가를 통해 라벨을 제작하는 지속적인 예술가 후원 프로젝트를 진행하고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "비에티의 최상급 와인 바롤로 크뤼 리제르바 빌레로는 30년 넘도록 14개의 선별된 빈티지로만 출시되었습니다. 또한 70년대부터 빈티지 별 3,000병 남짓의 소량만 생산하고 있으며 2012 빈티지는 3,860병 출시되어 국내에는 단 30병 수입 되었습니다.",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "이는 1967년 멸종 될뻔한 아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재의 피에몬테의 대표 화이트 포도품종으로 만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "1-44-30hl-3-2016",
    "nameKo": "빌레로가 자라는 비에띠 소유의 1헥타르도 되지않는 작은 포도밭은 이회암과 점토질 토양으로 구성되어 있어 평균수령 44년 이상의 올드바인들이 최상의 품질의 포도를 생산하는데 적합합니다. 30hl 슬로베니안 오크 배럴에서 3년 반의 숙성을 거쳐 2016년 필터링 없이 병입하였습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 13,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "바롤로 크뤼 리제르바 빌레로는 우아하면서도 에너지가 넘치는 복합적인 맛을 자랑합니다. 첫 맛은 과일의 산미가 압도적으로  느껴지며 이후 실크같은 타닌이 미각 전체를 아우르며 부드러운 긴 여운으로 마무리 됩니다. 19세기부터 비에티 와이너리는 와인 생산의 역사를 시작하였지만, 20세기에 처음으로 생산된 와인에 비에티 라는 이름을 새겨 넣으면서 진정한 역사가 시작 되었습니다. 1919년 처음 생산된 비에티 와인은 설립자인 ‘파트리아크 마리오 비에티’에 의해 이태리 전역으로 판매가 되었습니다. 1952년 알프레도 쿠라도씨(설립자의 사위)는 밭에 관리에 많은 투자를 하여 고품질의 와인생산자로 이름을 날리기 시작했습니다. 이를 통해 피에몬테에서 가장 처음으로 미국으로 와인을 수출하는 와이너리가 되었습니다. 알프레도는 비에티 와인을 만들며 부르나테, 로케, 빌레로 등 싱글 빈야드 와인을 만들기 시작하였습니다. 이는, 피에몬테에서 최초로 ‘싱글 빈야드’의 개념을 와인 생산에 접목한 와이너리로, 지금의 바롤로와 바르바레스코 ‘싱글 빈야드’ 또는 ‘크뤼’ 라는 개념을 만들어낸 피에몬테의 선구자라고 할 수 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "비에티의 최상급 와인 바롤로 리제르바 빌레로는 1974년부터 45년간 단 15개의 선별된 빈티지로만 출시 되었습니다. 빈티지 별 3,000병 남짓으로 소량 생산하고 있으며, 2013 빈티지는 3,986병 출시된 희소성 있는 와인입니다.",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "이는 1967년 멸종 될뻔한 아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재의 피에몬테의 대표 화이트 포도품종으로 만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "moscato-d-asti",
    "nameKo": "Moscato d'Asti",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 6,
    "servingTempMax": 8,
    "foodPairing": "[]",
    "description": "비에티 모스카토 다스티의 포도는 카스틸리오네 지역의 작은 포도밭에서 생산됩니다. 포도나무의 평균 수령은 약 40년 정도이며, 수확 후 최고의 포도들만 선별하여 모스카토 다스티로 출시됩니다. 노란빛을 띠며, 약간의 탄산을 가지고 있습니다. 복숭아, 장미꽃 그리고 생강 향이 풍부하며, 입안에서는 적절한 당도와 함께 느껴지는 스파클링이 기분좋게 이끌어 주는 와인입니다. 19세기부터 비에티 와이너리는 와인 생산의 역사를 시작하였지만, 20세기에 처음으로 생산된 와인에 비에티 라는 이름을 새겨 넣으면서 진정한 역사가 시작 되었습니다. 1919년 처음 생산된 비에티 와인은 설립자인 ‘파트리아크 마리오 비에티’에 의해 이태리 전역으로 판매가 되었습니다. 1952년 알프레도 쿠라도씨(설립자의 사위)는 밭에 관리에 많은 투자를 하여 고품질의 와인생산자로 이름을 날리기 시작했습니다. 이를 통해 피에몬테에서 가장 처음으로 미국으로 와인을 수출하는 와이너리가 되었습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "모스카토 다스티",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "이는 1967년 멸종 될뻔한 아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재의 피에몬테의 대표 화이트 포도품종으로 만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "roero-arneis-2",
    "nameKo": "Roero Arneis",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 6,
    "servingTempMax": 8,
    "foodPairing": "[]",
    "description": "로에로 아르네이스의 포도는 로에로 지역의 중심부에 위치한 산토 스테파노 로에로에서 생산됩니다. 투명한 볏짚색을 띄고 있으며, 신선한 꽃향과 감귤류       그리고 멜론 향이 풍부합니다. 입안에서는 아몬드 풍미가    적절한 바디감과 함께 조화를 이루며 복합미를 형성합니다. 19세기부터 비에티는 와인을 생산해 왔지만, 20세기 들어 처음으로 와인에        ‘비에티’라는 이름을 새겨 넣으면서 진정한 역사가 시작 되었습니다. 1919년 처음 생산된 비에티 와인은 설립자인 ‘파트리아쉬 마리오 비에티(Patriarch Mario Vietti)’에 의해 이태리 전역으로 판매가 되었습니다. 1952년 설립자의 사위인    알프레도 쿠라도(Alfredo Curado)가 포도밭 관리에 많은 투자를 하면서 비에티는  고품질의 와인 생산자로 이름을 날리기 시작했습니다. 이를 통해 피에몬테에서  가장 처음으로 미국으로 와인을 수출하는 와이너리가 되기도 하였습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "로에로 아르네이스",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재 피에몬테를 대표하는 화이트 포도 품종으로    만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "timorasso-derthona-2",
    "nameKo": "Timorasso Derthona",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 12,
    "foodPairing": "[]",
    "description": "10개월간 효모 접촉을 실시하며 숙성을 진행하고 젖산 발효는 맑고 진한 노란색을 띠며 와인잔 가장자리에 연두빛이 감돕니다. 배, 복숭아와 같은 잘 익은 과일의 향이 미네랄과    아카시아, 산사나무향의 꽃 향기와 잘 어우러집니다. 입 안에서 꽉 차게 느껴지는 부드럽고 풍부한 과실미와,   뛰어난 밸런스를 가지고 있으며, 신선한 산도감이 특징인  와인으로 장기 숙성 잠재력을 지니고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "티모라쏘 데르토나",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재 피에몬테를 대표하는 화이트 포도 품종으로    만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "barbera-d-alba-trevie",
    "nameKo": "Barbera d'Alba (Trevie)",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "바르베라 달바는 랑게 지역에서 유명한 몬포르테 세부 산지의 3개의 다른 포도밭에서 생산됩니다. 루비 색을 띄고 있으며, 익은 체리와 바닐라 향이 풍부하며, 제비꽃 풍미와 산도는 입안에서 어우러집니다. 부드러운  탄닌은 오크의 풍미와 조화롭게 뭉쳐져서 입안에 긴 여운 으로 남습니다. 2022 Vintage : Vinous 92점",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바르베라 달바 (트레비에)",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재 피에몬테를 대표하는 화이트 포도 품종으로    만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "barbera-d-asti-trevie",
    "nameKo": "Barbera d'Asti (Trevie)",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "바르베라 다스티의 포도는 라 크레나 포도밭으로 유명한  아스티 언덕 주변인 알리아노 테르메 지역에서 생산됩니다. 루비색을 띄고 있으며, 익은 붉은 체리향과 계피와 같은   스위트 스파이스 향이 풍부하게 납니다. 잔잔한 산도와    함께 느껴지는 탄닌은 조화롭게 밸런스를 유지하며, 입안에서 오크 풍미와 체리풍미가 긴 여운으로 느껴집니다. 2022 Vintage : Vinous 91점",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바르베라 다스티 (트레비에)",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재 피에몬테를 대표하는 화이트 포도 품종으로    만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "barbera-d-asti-la-crena-2",
    "nameKo": "Barbera d'Asti La Crena",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "배럴과 대형 오크통에서 숙성 (15% 뉴 오크 사용) 라 크레나 포도밭은 아스티 언덕 주변인 아그리아노 테르메 지역에 인접해 있습니다. 강렬한 루비색. 잘 익은 라즈베리와 붉은 체리의 농축된   향이 스파이시하고 미네랄 가득한 향, 그리고 약간의       바닐라와 토스트한 느낌과 잘 어우러집니다. 입 안에서 풍성한 바디감, 기분 좋은 산도와 함께 밸런스가 좋은 와인입니다. 라 크레나는 비에티에서 선보이는 유일한 크뤼급    바르베라 다스티입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바르베라 다스티 라 크레나",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재 피에몬테를 대표하는 화이트 포도 품종으로    만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "langhe-nebbiolo-perbacco-2",
    "nameKo": "Langhe Nebbiolo Perbacco",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "랑게 네비올로는 바롤로 및 바르바레스코 지역의 네비올로 포도를 사용하여 만든 와인으로 발효 및 숙성을 마친 후   병입 전 테이스팅을 통해 블렌딩이 이루어집니다. 붉은 루비색을 가지고 있으며, 체리향이 도드라지고, 멘톨과 스파이스의 향들이 이어집니다. 젊은 네비올로이기에 강한 탄닌감과 복합미 그리고 우아함을 동시에 가지고 있습니다. 2022 Vintage : RP 93점, Vinous 90점",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "랑게 네비올로 페바코",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재 피에몬테를 대표하는 화이트 포도 품종으로    만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "barbaresco-cru-masseria-2",
    "nameKo": "Barbaresco Cru Masseria",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "마세리아의 포도는 트레이소 와 네이브 지역의 포도밭에서 수확을 하였으며, 싱글 빈야드로 남쪽을 바라보고 있는    언덕입니다. 루비색을 가지고 있으며, 가넷색의 가장자리를 가지고 있습니다. 익은 체리와 찻잎, 장미유 그리고 미네랄 풍기가     강하게 나며, 단단하고 익은 탄닌은 입안에서 둥글게 어우러져 긴 여운과 계속된 질감을 줍니다. 2018 Vintage : WS 93점, RP 94점, JS 96점",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바르바레스코 크뤼 마세리아",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재 피에몬테를 대표하는 화이트 포도 품종으로    만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "barolo-castiglione-2",
    "nameKo": "Barolo Castiglione",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "3~4주간 발효를 진행하며 오크통에서 젖산 발효를 실시 대형 오크통에서 30개월간 숙성을 진행한 뒤 병입 전 블렌딩 실시 카스틸리오네의 포도들은 바롤로 지역의  작은 크뤼 밭에서 선별되어 수확된 포도 만을 사용합니다. 포도나무의 수령은 보통 10~45년입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바롤로 카스틸리오네",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재 피에몬테를 대표하는 화이트 포도 품종으로    만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "barolo-cru-lazzarito-2",
    "nameKo": "Barolo Cru Lazzarito",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "30개월간 프렌치 & 슬로베니안 오크통에서 숙성 라자리토는 세랄룽가 달바 지역의 싱글 빈야드인 ‘라자리토’에서 나온 포도만을 이용하여 만든 와인입니다. 라자리토는 2헥타르 면적의 밭으로, 나무들의 평균 수령은 36년 입니다. 와인은 깊은 가넷 컬러를 띄고 있으며, 단단하면서도 둥글고 벨벳과도 같은 질감이 느껴집니다. 코에서는 대표적으로 자두와 무화과 등 과실의 인텐스한 아로마가 감지되고,    한입 머금으면 유연하고 달콤한 탄닌이 어우러져 긴 피니시를 이끌어 냅니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바롤로 크뤼 라자리토",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재 피에몬테를 대표하는 화이트 포도 품종으로    만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "barolo-cru-ravera-2",
    "nameKo": "Barolo Cru Ravera",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "30개월간 프렌치 & 슬로베니안 오크통에서 숙성 라베라는 노벨로 지역의 싱글 빈야드인  ‘라베라’에서 나온 포도만을 이용하여 만든 와인입니다. 비에티는 라베라 포도밭 중 약 2헥타르 면적에서 포도를 재배하고 있으며, 가장 고수령의 포도나무는 약 90년에 이릅니다. 깊은 가넷~루비색 컬러, 바롤로의 전형적인 탄닌 구조감을 가지고 있습니다. 오픈 뒤 잔에서 약간의 시간을 지나게   되면 체리와 오트밀, 효모의 뉘앙스와 다양한 향신료들이 복합적으로 느껴집니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바롤로 크뤼 라베라",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재 피에몬테를 대표하는 화이트 포도 품종으로    만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "barolo-cru-cerequio-2",
    "nameKo": "Barolo Cru Cerequio",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "30개월간 프렌치 & 슬로베니안 오크통에서 숙성 체레퀴오는 바롤로에서도 유명하고 역사가 깊은 크뤼 빈야드입니다. 비에띠는 체레퀴오에 1헥타르 면적의 밭을 소유하고 있으며, 2018 빈티지부터 새롭게 바롤로 크뤼 와인을 출시했습니다. 깊은 루비색 컬러, 잘 익은 붉은베리의 향과 스파이시함이 잘 어우러집니다. 강렬한 향 뒤에 풍부하지만 매우 우아   하고 밸런스가 잘 잡힌 와인의 맛이 따라옵니다. 부드러운 탄닌과 구조감이 잘 잡혀있는 와인입니다",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바롤로 크뤼 체레퀴오",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재 피에몬테를 대표하는 화이트 포도 품종으로    만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "barolo-cru-monvigliero-2",
    "nameKo": "Barolo Cru Monvigliero",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "(Whole Cluster 60% 사용) 오크통에서 젖산 발효를 실시 24개월간 프렌치 & 슬로베니안 오크통에서 숙성 몬빌리에로는 Verduno마을의 가장 명성있고 중요한 빈야드일뿐만 아니라 전체 바롤로 지역에서 가장 권위있는 지역중 하나입니다. 비에띠에서는 체레퀴오와 더불어 몬빌리에로에서 2018빈티지부터 새롭게 바롤로 크뤼 와인을 출시  했습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바롤로 크뤼 몬빌리에로",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재 피에몬테를 대표하는 화이트 포도 품종으로    만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "barolo-rocche-di-castiglione-2",
    "nameKo": "Barolo Rocche di Castiglione",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "30개월간 프렌치 & 슬로베니안 오크통에서 숙성 비에띠가 위치한 카스틸리오네 팔레토 마을에서 가장 작고 역사적인 포도밭인 로께 디 카스틸리오네 크뤼에서 1940년, 1950년, 1968년에 식재된 오래된 포도나무에서 수확한 포도를 사용하였습니다. 해발고도 300~350m의 매우 가파른 지대에 위치하며, 석회암(limestone)과 점토가(clay)가 섞인 이회토의 영향으로   우아하면서도 단단한 와인입니다. 루비와 같은 아름다운 붉은 빛이 감돌며 말린 장미, 감초, 향신료 및 송로버섯의 향이 어우러지는 복합미가 아름다운 와인입니다. 강렬하지만 우아한, 균형 잡힌 실키한 텍스처의 탄닌이 미각   전체에 걸쳐 퍼지며 긴 여운으로 마무리 됩니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바롤로 로께 디 카스틸리오네",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재 피에몬테를 대표하는 화이트 포도 품종으로    만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "barolo-brunate-2",
    "nameKo": "Barolo Brunate",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "30개월간 프렌치 & 슬로베니안 오크통에서 숙성 피에몬테 서쪽에 위치한 라 모라 (La Morra)의 브루나테 크뤼의 평균수령 54년이 넘은 포도나무에서 수확한 포도만을 이용하여 만든 와인입니다. 스테인리스스틸 탱크에 껍질과 함께 발효하는 전통적인 방식으로 3주 동안 부드럽게 으깨어 발효되며 바리끄에서 MLF발효를 진행합니다. 강렬한 루비 빛을 띄는 붉은색을 가진 이 와인은 드라이하고  파워풀한 와인입니다. 잘 익은 검은야생체리의 향과 동시에     브루나테 빈야드의 특징인 자두, 제비꽃, 타르, 감초등의 향신료 향이 압 안 가득 퍼지며 긴 여운을 선사합니다. 마치 벨벳과    같은 질감의 탄닌이 미각 전체에 걸쳐 퍼지며 우아하게 마무리 됩니다. 붉은 고기나 구운 고기 요리와 페어링하는 것을 추천합니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바롤로 브루나테",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재 피에몬테를 대표하는 화이트 포도 품종으로    만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "barolo-riserva-villero-docg-2",
    "nameKo": "단 하나의 빈티지, 단 한병의 아트레이블 와인, Since 1974",
    "nameEn": "Barolo Riserva Villero DOCG",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "Barolo Riserva Villero DOCG Barolo Cru Riserva Villero DOCG 2016 Richard Mosse (1980~ )",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "Heritage- Artist Label Wine",
    "grapeNames": []
  },
  {
    "slug": "2012-renzo-piano-transform-the-grapes-into-a-timeless-nectar-2",
    "nameKo": "매 빈티지마다 다른 디자인의 아티스트 레이블을 선보이는 빌레로 2012의 레이블은 프리츠커 상을 비롯, 건축계의 권위있는 상들을 휩쓴 이탈리아의 저명한 건축가 렌조 피아노 (Renzo Piano) 가 디자인 하였습니다. 본인이 설계에 참여한 파리 퐁피두 센터를 배경으로 포도 송이가 건축물을 감싸안는 형상을 보여주는데, 이는 시간을 초월하는 와인을 의미합니다. 그는 비에티의 와인메이킹을 ‘포도를 시간을 초월한 과즙으로 바꾸는 것’ (transform the grapes into a timeless nectar) 이라고 표현했으며, 이에 시대의 변화를 상징하고 시간을 초월한 의미를 지니는 퐁피두 센터에 포도를 오버랩 하였습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "Barolo Cru Riserva Villero 2012 2012 Vintage : WS 94점, RP 97점, JS 96점 19세기부터 비에티는 와인을 생산해 왔지만, 20세기 들어 처음으로 와인에        ‘비에티’라는 이름을 새겨 넣으면서 진정한 역사가 시작 되었습니다. 1919년 처음 생산된 비에티 와인은 설립자인 ‘파트리아쉬 마리오 비에티(Patriarch Mario Vietti)’에 의해 이태리 전역으로 판매가 되었습니다. 1952년 설립자의 사위인    알프레도 쿠라도(Alfredo Curado)가 포도밭 관리에 많은 투자를 하면서 비에티는  고품질의 와인 생산자로 이름을 날리기 시작했습니다. 이를 통해 피에몬테에서  가장 처음으로 미국으로 와인을 수출하는 와이너리가 되기도 하였습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "비에티의 최상급 와인 바롤로 크뤼 리제르바 빌레로는 30년 넘도록 14개의 선별된 빈티지로만 출시되었습니다. 또한 70년대부터 빈티지 별 3,000병 남짓의 소량만 생산하고 있으며 2012 빈티지는 3,860병 출시되어 국내에는 단 30병 수입 되었습니다.",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재 피에몬테를 대표하는 화이트 포도 품종으로    만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "1-44-30hl-3-2016-2",
    "nameKo": "빌레로가 자라는 비에띠 소유의 1헥타르도 되지않는 작은 포도밭은 이회암과 점토질 토양으로 구성되어 있어 평균수령 44년 이상의 올드바인들이 최상의 품질의 포도를 생산하는데 적합합니다. 30hl 슬로베니안 오크 배럴에서 3년 반의 숙성을 거쳐 2016년 필터링 없이 병입하였습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "바롤로 크뤼 리제르바 빌레로는 우아하면서도 에너지가    넘치는 복합적인 맛을 자랑합니다. 첫 맛은 과일의 산미가 압도적으로  느껴지며 이후 실크같은 타닌이 미각 전체를  아우르며 부드러운 긴 여운으로 마무리 됩니다. Barolo Cru Riserva Villero DOCG 2013 2013 Vintage : WS 96점, RP 99점, JS 98점",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "비에티의 최상급 와인 바롤로 리제르바 빌레로는 1974년부터 45년간 단 15개의 선별된 빈티지로만 출시 되었습니다. 빈티지 별 3,000병 남짓으로 소량 생산하고 있으며, 2013 빈티지는 3,986병 출시된 희소성 있는 와인입니다.",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재 피에몬테를 대표하는 화이트 포도 품종으로    만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "1-47",
    "nameKo": "비에띠 소유의 1헥타르도 되지않는 작은 싱글 빈야드인  빌레로는 이회암과 점토질 토양으로 구성되어 있으며 평균 수령 47년 이상의 올드 바인들로 이루어져 있습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "30hl 슬로베니안 오크 배럴에서 2년 반의 숙성을 거쳤으며 5년간의 추가 병 숙성을 거친 뒤 2024년 출시되었습니다. 바롤로 크뤼 리제르바 빌레로는 우아하면서도 복합적인   풍미를 자랑합니다. 로버트 파커는 빌레로 2016 빈티지를 ‘환상적이고 완벽한 바롤로’라고 평가하였습니다. 검붉은 과실의 농축미, 구운 견과류의 고소한 풍미, 블러드 오렌지와 화이트 트러플의 뉘앙스가 실크와 같은 감촉의 탄닌와 함께 어우러지며 매우 긴 여운을 남깁니다. Barolo Cru Riserva Villero DOCG 2016",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "비에티의 최상급 와인 바롤로 리제르바 빌레로는 1974년부터 52년간 단 15개의 선별된 빈티지로만 출시 되었     습니다. 빈티지 별 3,000~5,000병 남짓으로 소량 생산하고 있으며, 2016 빈티지는 단 5,146병만 출시된 희소성 있는   와인입니다.",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재 피에몬테를 대표하는 화이트 포도 품종으로    만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "moscato-d-asti-2",
    "nameKo": "Moscato d'Asti",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 6,
    "servingTempMax": 8,
    "foodPairing": "[]",
    "description": "비에티 모스카토 다스티의 포도는 카스틸리오네 지역의 작은 포도밭에서 생산됩니다. 포도나무의 평균 수령은 약 40년 정도이며, 수확 후 최고의 포도들만 선별하여 모스카토 다스티로 출시됩니다. 노란빛을 띠며, 약간의 탄산을 가지고 있습니다. 복숭아, 장미꽃 그리고 생강 향이 풍부하며, 입안에서는 적절한 당도와 함께 느껴지는 스파클링이 기분좋게 이끌어    주는 와인입니다. 19세기부터 비에티는 와인을 생산해 왔지만, 20세기 들어 처음으로 와인에        ‘비에티’라는 이름을 새겨 넣으면서 진정한 역사가 시작 되었습니다. 1919년 처음 생산된 비에티 와인은 설립자인 ‘파트리아쉬 마리오 비에티(Patriarch Mario Vietti)’에 의해 이태리 전역으로 판매가 되었습니다. 1952년 설립자의 사위인    알프레도 쿠라도(Alfredo Curado)가 포도밭 관리에 많은 투자를 하면서 비에티는  고품질의 와인 생산자로 이름을 날리기 시작했습니다. 이를 통해 피에몬테에서  가장 처음으로 미국으로 와인을 수출하는 와이너리가 되기도 하였습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "모스카토 다스티",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재 피에몬테를 대표하는 화이트 포도 품종으로    만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "roero-arneis-3",
    "nameKo": "Roero Arneis",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 6,
    "servingTempMax": 8,
    "foodPairing": "[]",
    "description": "로에로 아르네이스의 포도는 로에로 지역의 중심부에 위치한 산토 스테파노 로에로에서 생산됩니다. 투명한 볏짚색을 띄고 있으며, 신선한 꽃향과 감귤류       그리고 멜론 향이 풍부합니다. 입안에서는 아몬드 풍미가    적절한 바디감과 함께 조화를 이루며 복합미를 형성합니다. 19세기부터 비에티는 와인을 생산해 왔지만, 20세기 들어 처음으로 와인에        ‘비에티’라는 이름을 새겨 넣으면서 진정한 역사가 시작 되었습니다. 1919년 처음 생산된 비에티 와인은 설립자인 ‘파트리아쉬 마리오 비에티(Patriarch Mario Vietti)’에 의해 이태리 전역으로 판매가 되었습니다. 1952년 설립자의 사위인    알프레도 쿠라도(Alfredo Curado)가 포도밭 관리에 많은 투자를 하면서 비에티는  고품질의 와인 생산자로 이름을 날리기 시작했습니다. 이를 통해 피에몬테에서  가장 처음으로 미국으로 와인을 수출하는 와이너리가 되기도 하였습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "로에로 아르네이스",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재 피에몬테를 대표하는 화이트 포도 품종으로 만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "timorasso-derthona-3",
    "nameKo": "Timorasso Derthona",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 12,
    "foodPairing": "[]",
    "description": "10개월간 효모 접촉을 실시하며 숙성을 진행하고 젖산 발효는 맑고 진한 노란색을 띠며 와인잔 가장자리에 연두빛이 감돕니다. 배, 복숭아와 같은 잘 익은 과일의 향이 미네랄과    아카시아, 산사나무향의 꽃 향기와 잘 어우러집니다. 입 안에서 꽉 차게 느껴지는 부드럽고 풍부한 과실미와,   뛰어난 밸런스를 가지고 있으며, 신선한 산도감이 특징인  와인으로 장기 숙성 잠재력을 지니고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "티모라쏘 데르토나",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재 피에몬테를 대표하는 화이트 포도 품종으로 만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "barbera-d-alba-trevie-2",
    "nameKo": "Barbera d'Alba (Trevie)",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "바르베라 달바는 랑게 지역에서 유명한 몬포르테 세부 산지의 3개의 다른 포도밭에서 생산됩니다. 루비 색을 띄고 있으며, 익은 체리와 바닐라 향이 풍부하며, 제비꽃 풍미와 산도는 입안에서 어우러집니다. 부드러운  탄닌은 오크의 풍미와 조화롭게 뭉쳐져서 입안에 긴 여운 으로 남습니다. 2023 Vintage : Vinous 92점",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바르베라 달바 (트레비에)",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재 피에몬테를 대표하는 화이트 포도 품종으로 만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "barbera-d-asti-trevie-2",
    "nameKo": "Barbera d'Asti (Trevie)",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "바르베라 다스티의 포도는 라 크레나 포도밭으로 유명한  아스티 언덕 주변인 알리아노 테르메 지역에서 생산됩니다. 루비색을 띄고 있으며, 익은 붉은 체리향과 계피와 같은   스위트 스파이스 향이 풍부하게 납니다. 잔잔한 산도와    함께 느껴지는 탄닌은 조화롭게 밸런스를 유지하며, 입안에서 오크 풍미와 체리풍미가 긴 여운으로 느껴집니다. 2022 Vintage : Vinous 91점",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바르베라 다스티 (트레비에)",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재 피에몬테를 대표하는 화이트 포도 품종으로 만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "barbera-d-asti-la-crena-3",
    "nameKo": "Barbera d'Asti La Crena",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "배럴과 대형 오크통에서 숙성 (15% 뉴 오크 사용) 라 크레나 포도밭은 아스티 언덕 주변인 아그리아노 테르메 지역에 인접해 있습니다. 강렬한 루비색. 잘 익은 라즈베리와 붉은 체리의 농축된   향이 스파이시하고 미네랄 가득한 향, 그리고 약간의       바닐라와 토스트한 느낌과 잘 어우러집니다. 입 안에서 풍성한 바디감, 기분 좋은 산도와 함께 밸런스가 좋은 와인입니다. 라 크레나는 비에티에서 선보이는 유일한 크뤼급    바르베라 다스티입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바르베라 다스티 라 크레나",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재 피에몬테를 대표하는 화이트 포도 품종으로 만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "langhe-nebbiolo-perbacco-3",
    "nameKo": "Langhe Nebbiolo Perbacco",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "랑게 네비올로는 바롤로 및 바르바레스코 지역의 네비올로 포도를 사용하여 만든 와인으로 발효 및 숙성을 마친 후   병입 전 테이스팅을 통해 블렌딩이 이루어집니다. 붉은 루비색을 가지고 있으며, 체리향이 도드라지고, 멘톨과 스파이스의 향들이 이어집니다. 젊은 네비올로이기에 강한 탄닌감과 복합미 그리고 우아함을 동시에 가지고 있습니다. 2022 Vintage : RP 93점, Vinous 90점",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "랑게 네비올로 페바코",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재 피에몬테를 대표하는 화이트 포도 품종으로 만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "barbaresco-cru-masseria-3",
    "nameKo": "Barbaresco Cru Masseria",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "마세리아의 포도는 트레이소 와 네이브 지역의 포도밭에서 수확을 하였으며, 싱글 빈야드로 남쪽을 바라보고 있는    언덕입니다. 루비색을 가지고 있으며, 가넷색의 가장자리를 가지고 있습니다. 익은 체리와 찻잎, 장미유 그리고 미네랄 풍기가     강하게 나며, 단단하고 익은 탄닌은 입안에서 둥글게 어우러져 긴 여운과 계속된 질감을 줍니다. 2018 Vintage : WS 93점, RP 94점, JS 96점",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바르바레스코 크뤼 마세리아",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재 피에몬테를 대표하는 화이트 포도 품종으로 만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "barolo",
    "nameKo": "Barolo",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "3~4주간 발효를 진행하며 오크통에서 젖산 발효를 실시 대형 오크통에서 30개월간 숙성을 진행한 뒤 병입 전 블렌딩 실시 비에티 바롤로는 바롤로 DOCG 지역 내 20여곳의 선별된 크뤼 밭에서 수확한 포도 만을 사용합니다. 포도나무의    수령은 보통 10~45년입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바롤로",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재 피에몬테를 대표하는 화이트 포도 품종으로 만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "barolo-cru-lazzarito-3",
    "nameKo": "Barolo Cru Lazzarito",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "30개월간 프렌치 & 슬로베니안 오크통에서 숙성 라자리토는 세랄룽가 달바 지역의 싱글빈야드인           ‘라자리토’에서 나온 포도만을 이용하여 만든 와인입니다. 라자리토는 2헥타르 면적의 작은 밭으로, 포도나무의    평균 수령은 36년 입니다. 와인은 깊은 가넷 컬러를 띄고 있으며, 자두와 무화과 등 과실의 풍미가 돋보이며 한 입 머금으면 벨벳과 같은     질감의 탄닌이 우아하만서도 긴 여운을 남깁니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바롤로 크뤼 라자리토",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재 피에몬테를 대표하는 화이트 포도 품종으로 만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "barolo-cru-ravera-3",
    "nameKo": "Barolo Cru Ravera",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "30개월간 프렌치 & 슬로베니안 오크통에서 숙성 라베라는 노벨로 지역의 싱글 빈야드인  ‘라베라’에서 나온 포도만을 이용하여 만든 와인입니다. 비에티는 라베라 포도밭 중 약 2헥타르 면적에서 포도를 재배하고 있으며, 가장 고수령의 포도나무는 약 90년에 이릅니다. 깊은 가넷~루비색 컬러, 바롤로의 전형적인 탄닌 구조감을 가지고 있습니다. 오픈 뒤 잔에서 약간의 시간을 지나게   되면 체리와 오트밀, 효모의 뉘앙스와 다양한 향신료들이 복합적으로 느껴집니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바롤로 크뤼 라베라",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재 피에몬테를 대표하는 화이트 포도 품종으로 만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "barolo-cru-cerequio-3",
    "nameKo": "Barolo Cru Cerequio",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "30개월간 프렌치 & 슬로베니안 오크통에서 숙성 체레퀴오는 바롤로에서도 유명하고 역사가 깊은 크뤼       빈야드입니다. 비에띠는 체레퀴오에 약 1헥타르 면적의    밭을 소유하고 있으며, 2018 빈티지부터 새롭게 바롤로   크뤼 와인을 출시했습니다. 깊은 루비색을 띠며 잘 익은 붉은 베리와 신선한 감귤류,   향신료와 발사믹의 노트가 잘 어우러집니다. 강렬한 향    뒤에 풍부하지만 매우 우아하고 밸런스가 잘 잡힌 와인의 맛이 이어집니다. 부드러운 탄닌과 구조감이 잘 잡혀있는 와인입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바롤로 크뤼 체레퀴오",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재 피에몬테를 대표하는 화이트 포도 품종으로 만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "barolo-cru-monvigliero-3",
    "nameKo": "Barolo Cru Monvigliero",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "(Whole Cluster 60% 사용) 오크통에서 젖산 발효를 실시 24개월간 프렌치 & 슬로베니안 오크통에서 숙성 몬빌리에로는 Verduno마을의 가장 명성있고 중요한 빈야드일뿐만 아니라 전체 바롤로 지역에서 가장 권위있는 지역중 하나입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바롤로 크뤼 몬빌리에로",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재 피에몬테를 대표하는 화이트 포도 품종으로 만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "barolo-rocche-di-castiglione-3",
    "nameKo": "Barolo Rocche di Castiglione",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "30개월간 프렌치 & 슬로베니안 오크통에서 숙성 비에띠가 위치한 카스틸리오네 팔레토 마을에서 가장 작고 역사적인 포도밭인 로께 디 카스틸리오네 크뤼에서 1940년, 1950년, 1968년에 식재된 오래된 포도나무에서 수확한 포도를 사용하였습니다. 해발고도 300~350m의 매우 가파른 지대에 위치하며, 석회암(limestone)과 점토가(clay)가 섞인 이회토의 영향으로   우아하면서도 단단한 와인입니다. 루비와 같은 아름다운 붉은 빛이 감돌며 말린 장미, 감초, 향신료 및 송로버섯의 향이 어우러지는 복합미가 아름다운 와인입니다. 강렬하지만 우아한, 균형 잡힌 실키한 텍스처의 탄닌이 미각   전체에 걸쳐 퍼지며 긴 여운으로 마무리 됩니다. 녹진한 스튜나 붉은 고기, 트러플이 가미된 치즈와 함께 드시면 좋습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바롤로 로께 디 카스틸리오네",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재 피에몬테를 대표하는 화이트 포도 품종으로 만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "barolo-brunate-3",
    "nameKo": "Barolo Brunate",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "30개월간 프렌치 & 슬로베니안 오크통에서 숙성 피에몬테 서쪽에 위치한 라 모라 (La Morra)의 브루나테 크뤼의 평균수령 54년이 넘은 포도나무에서 수확한 포도만을 이용하여 만든 와인입니다. 스테인리스스틸 탱크에 껍질과 함께 발효하는 전통적인 방식으로 3주 동안 부드럽게 으깨어 발효되며 바리끄에서 MLF발효를 진행합니다. 강렬한 루비 빛을 띄는 붉은색을 가진 이 와인은 드라이하고  파워풀한 와인입니다. 잘 익은 검은 야생체리의 향과 동시에     브루나테 빈야드의 특징인 자두, 제비꽃, 타르, 감초 등의 향신료 향이 압 안 가득 퍼지며 긴 여운을 선사합니다. 마치 벨벳과    같은 질감의 탄닌이 미각 전체에 걸쳐 퍼지며 우아하게 마무리 됩니다. 붉은 고기나 구운 고기 요리와 페어링하는 것을 추천합니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바롤로 브루나테",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재 피에몬테를 대표하는 화이트 포도 품종으로 만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "barolo-riserva-villero-docg-3",
    "nameKo": "단 하나의 빈티지, 단 한병의 아트레이블 와인, Since 1974",
    "nameEn": "Barolo Riserva Villero DOCG",
    "type": "red",
    "country": "Italy",
    "regionL1": "이태리",
    "volume": 750,
    "foodPairing": "[]",
    "description": "Barolo Riserva Villero DOCG Barolo Cru Riserva Villero DOCG 2016 Richard Mosse (1980~ )",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "Heritage- Artist Label Wine",
    "grapeNames": []
  },
  {
    "slug": "2012-renzo-piano-transform-the-grapes-into-a-timeless-nectar-3",
    "nameKo": "매 빈티지마다 다른 디자인의 아티스트 레이블을 선보이는 빌레로 2012의 레이블은 프리츠커 상을 비롯, 건축계의 권위있는 상들을 휩쓴 이탈리아의 저명한 건축가 렌조 피아노 (Renzo Piano) 가 디자인 하였습니다. 본인이 설계에 참여한 파리 퐁피두 센터를 배경으로 포도 송이가 건축물을 감싸안는 형상을 보여주는데, 이는 시간을 초월하는 와인을 의미합니다. 그는 비에티의 와인메이킹을 ‘포도를 시간을 초월한 과즙으로 바꾸는 것’ (transform the grapes into a timeless nectar) 이라고 표현했으며, 이에 시대의 변화를 상징하고 시간을 초월한 의미를 지니는 퐁피두 센터에 포도를 오버랩 하였습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "Barolo Cru Riserva Villero 2012 2012 Vintage : WS 94점, RP 97점, JS 96점 19세기부터 비에티는 와인을 생산해 왔지만, 20세기 들어 처음으로 와인에        ‘비에티’라는 이름을 새겨 넣으면서 진정한 역사가 시작 되었습니다. 1919년 처음 생산된 비에티 와인은 설립자인 ‘파트리아쉬 마리오 비에티(Patriarch Mario Vietti)’에 의해 이태리 전역으로 판매가 되었습니다. 1952년 설립자의 사위인    알프레도 쿠라도(Alfredo Curado)가 포도밭 관리에 많은 투자를 하면서 비에티는  고품질의 와인 생산자로 이름을 날리기 시작했습니다. 이를 통해 피에몬테에서  가장 처음으로 미국으로 와인을 수출하는 와이너리가 되기도 하였습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "비에티의 최상급 와인 바롤로 크뤼 리제르바 빌레로는 30년 넘도록 14개의 선별된 빈티지로만 출시되었습니다. 또한 70년대부터 빈티지 별 3,000병 남짓의 소량만 생산하고 있으며 2012 빈티지는 3,860병 출시되어 국내에는 단 30병 수입 되었습니다.",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재 피에몬테를 대표하는 화이트 포도 품종으로 만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "1-44-30hl-3-2016-3",
    "nameKo": "빌레로가 자라는 비에띠 소유의 1헥타르도 되지않는 작은 포도밭은 이회암과 점토질 토양으로 구성되어 있어 평균수령 44년 이상의 올드바인들이 최상의 품질의 포도를 생산하는데 적합합니다. 30hl 슬로베니안 오크 배럴에서 3년 반의 숙성을 거쳐 2016년 필터링 없이 병입하였습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "바롤로 크뤼 리제르바 빌레로는 우아하면서도 에너지가    넘치는 복합적인 맛을 자랑합니다. 첫 맛은 과일의 산미가 압도적으로  느껴지며 이후 실크같은 타닌이 미각 전체를  아우르며 부드러운 긴 여운으로 마무리 됩니다. Barolo Cru Riserva Villero DOCG 2013 2013 Vintage : WS 96점, RP 99점, JS 98점",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "비에티의 최상급 와인 바롤로 리제르바 빌레로는 1974년부터 45년간 단 15개의 선별된 빈티지로만 출시 되었습니다. 빈티지 별 3,000병 남짓으로 소량 생산하고 있으며, 2013 빈티지는 3,986병 출시된 희소성 있는 와인입니다.",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재 피에몬테를 대표하는 화이트 포도 품종으로 만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "1-47-2",
    "nameKo": "비에띠 소유의 1헥타르도 되지않는 작은 싱글 빈야드인  빌레로는 이회암과 점토질 토양으로 구성되어 있으며 평균 수령 47년 이상의 올드 바인들로 이루어져 있습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[]",
    "description": "30hl 슬로베니안 오크 배럴에서 2년 반의 숙성을 거쳤으며 5년간의 추가 병 숙성을 거친 뒤 2024년 출시되었습니다. 바롤로 크뤼 리제르바 빌레로는 우아하면서도 복합적인   풍미를 자랑합니다. 로버트 파커는 빌레로 2016 빈티지를 ‘환상적이고 완벽한 바롤로’라고 평가하였습니다. 검붉은 과실의 농축미, 구운 견과류의 고소한 풍미, 블러드 오렌지와 화이트 트러플의 뉘앙스가 실크와 같은 감촉의 탄닌와 함께 어우러지며 매우 긴 여운을 남깁니다. Barolo Cru Riserva Villero DOCG 2016",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "비에티의 최상급 와인 바롤로 리제르바 빌레로는 1974년부터 52년간 단 15개의 선별된 빈티지로만 출시 되었     습니다. 빈티지 별 3,000~5,000병 남짓으로 소량 생산하고 있으며, 2016 빈티지는 단 5,146병만 출시된 희소성 있는   와인입니다.",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재 피에몬테를 대표하는 화이트 포도 품종으로 만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "moscato-d-asti-3",
    "nameKo": "Moscato d'Asti",
    "nameEn": "",
    "type": "red",
    "country": "Italy",
    "regionL1": "피에몬테(Piemonte), 이탈리아(Italy)",
    "volume": 750,
    "servingTempMin": 6,
    "servingTempMax": 8,
    "foodPairing": "[]",
    "description": "비에티 모스카토 다스티의 포도는 카스틸리오네 지역의 작은 포도밭에서 생산됩니다. 포도나무의 평균 수령은 약 40년 정도이며, 수확 후 최고의 포도들만 선별하여 모스카토 다스티로 출시됩니다. 노란빛을 띠며, 약간의 탄산을 가지고 있습니다. 복숭아, 장미꽃 그리고 생강 향이 풍부하며, 입안에서는 적절한 당도와 함께 느껴지는 스파클링이 기분좋게 이끌어    주는 와인입니다. 19세기부터 비에티는 와인을 생산해 왔지만, 20세기 들어 처음으로 와인에        ‘비에티’라는 이름을 새겨 넣으면서 진정한 역사가 시작 되었습니다. 1919년 처음 생산된 비에티 와인은 설립자인 ‘파트리아쉬 마리오 비에티(Patriarch Mario Vietti)’에 의해 이태리 전역으로 판매가 되었습니다. 1952년 설립자의 사위인    알프레도 쿠라도(Alfredo Curado)가 포도밭 관리에 많은 투자를 하면서 비에티는  고품질의 와인 생산자로 이름을 날리기 시작했습니다. 이를 통해 피에몬테에서  가장 처음으로 미국으로 와인을 수출하는 와이너리가 되기도 하였습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "모스카토 다스티",
    "grapeNames": [
      "알프레도는 또한 ‘아르네이스의 아버지’라고도 불리는데",
      "1967년 멸종 될뻔한    아르네이스 포도 품종을 찾아내고 다시 개발하여",
      "현재 피에몬테를 대표하는 화이트 포도 품종으로 만드는 역할을 하였습니다."
    ]
  },
  {
    "slug": "azores-vulcanico-branco",
    "nameKo": "Azores Vulcanico Branco",
    "nameEn": "",
    "type": "red",
    "country": "Portugal",
    "regionL1": "White",
    "volume": 750,
    "foodPairing": "[]",
    "description": "화산섬의 토양과 바다의 영향으로부터 오는 풍부한 미네랄, 패션프루트와 파인애플의 이국적 아로마, 경쾌한 산도가 잘 조화되어 프레시한 느낌을 줍니다. 굴이나 조개류와의 마리아주가 훌륭하며 이 밖에 생선구이나 각종 해산물, 샐러드 등과도 두루 어울립니다. Fruity｜Mineral｜Salty｜Unoaked",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "아소르스 브랑코",
    "grapeNames": []
  },
  {
    "slug": "azores-vulcanico-rose",
    "nameKo": "Azores Vulcanico Rose",
    "nameEn": "",
    "type": "red",
    "country": "Portugal",
    "regionL1": "Rose",
    "volume": 750,
    "foodPairing": "[]",
    "description": "밝은 핑크 컬러의 이 와인은 체리와 잘 익은 딸기 등의 과실미가 가득하고 감귤류와 야생꽃, 후추의 뉘앙스도 감지됩니다. 바다와 토양의 영향으로 미네랄이 넘치고 필드 블렌드가 다채롭게 미각을 자극합니다. 전체적으로 신선하고 우아한 톤의 미디엄 바디 로제로 해산물, 돼지고기나 가금류 요리와 페어링하기 좋으며 동남아 혹은 인도 요리와도 잘 어울립니다. Malvarisco, Merlot, Saborinho, Syrah, Touriga Nacional) Fruity｜Mineral｜Salty｜Unoaked",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "아소르스 로제",
    "grapeNames": [
      "Field blend (지역 품종 블렌드-Agronómica EN",
      "Castelão",
      "Aragonez"
    ]
  },
  {
    "slug": "azores-vulcanico-tinto",
    "nameKo": "Azores Vulcanico Tinto",
    "nameEn": "",
    "type": "red",
    "country": "Portugal",
    "regionL1": "Red",
    "volume": 750,
    "foodPairing": "[]",
    "description": "Malvarisco, Merlot, Touriga Nacional, Saborinho, Syrah 등) 밝은 루비색에 향긋한 체리의 탑노트, 그 뒤로 정향의 힌트가 느껴집니다. 입에서는 미네랄의 존재감이 분명하고 타닌의 질감은 매끄럽습니다. 매력적인 과실미가 우아하게 표현되며 약간의 스파이스가 복합미를 더합니다. 붉은 육류 및 시즈닝한 다양한 육류에 어울립니다. Fruity｜Mineral｜Salty｜Unoaked",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "아소르스 틴토",
    "grapeNames": [
      "Field blend (지역 품종 블렌드-Aragonês",
      "Agronómica",
      "Castelão"
    ]
  },
  {
    "slug": "port-35-symington-family-estates-1912",
    "nameKo": "다우는 전 세계 프리미엄급 포트(Port) 시장 점유율 35%를 자랑하며 포트업계 최고의 아성을 쌓은 포르투갈의 시밍턴 패밀리 이스테이트(Symington Family Estates)의 포트 브랜드 중 하나로 1912년 앤드류 제임스 시밍턴이 파트너가 된 이후부터 현재까지 프리미엄 포트 와인의 대명사로 변함없는 명성을 유지해왔습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Portugal",
    "regionL1": "도우루(Douro)-포르투갈",
    "volume": 750,
    "servingTempMin": 13,
    "servingTempMax": 16,
    "foodPairing": "[\"▶ 블루 치즈\", \"푸아 그라\", \"말린 과일\", \"견과류\", \"견과류 파이\"]",
    "description": "시밍턴 패밀리가 소유하고 있는 도우루 밸리의 수 많은 빈야드 중에서도 단연 최고의 빈야드로 꼽히는 낀따 도 봄핑(Quinta do Bomfim)과 세뇨라 다 리베이라(Senhora da Ribeira)에서 생산되는 다우의 포트 와인은 특유의 드라이하면서 긴 피니시를 바탕으로 완벽한 밸런스를 보여주며 ‘프리미엄 포트가 가야 할 방향‘을 제시한다는 호평을 받고 있습니다. 특히 다우의 명성은 포트 와인의 꽃이라고 할 수 있는 빈티지 포트에서 빛을 발합니다. 모든 조건이 완벽한 해, 가장 완벽한 포도로만 만들어지기 때문에 10년에 3번 정도만 출시되는 희소한 와인인 빈티지 포트는 그만큼 하우스가 가진 능력을 잘 보여주는 와인이기도 합니다. 다우는 평론가 제임스 서클링(James Suckling)으로부터 100점을 받은 1955년 빈티지와 21세기에 만들어진 빈티지 포트 중 유일하게 와인 스펙테이터(Wine Spectator) 100점을 획득한 2007 빈티지, 2014년 포트 와인 최초로 와인 스펙테이터의 올해의 100대 와인에서 1위를 차지한 2011년 빈티지를 비롯, 수 많은 전설적인 빈티지를 남기며 랜드마크적인 입지를 구축하고 있습니다. 또한 다우는 포르투갈을 대표하는 브랜드로서 환경과 지역 사회에 대한 투자에서도 선구자적인 행동을 보여줍니다. 2019년 사회적, 환경적 차원에서 책임을 다하는 기업에게 부여되는 비콥(B Corp) 인증을 획득한데 이어, 기후변화에 대처하는 와이너리들의 모임 IWCA (International Wineries for Climate Action)에 참여하는 등 활발한 활동을 이어가고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "다우 포트  (Dow’s Port)",
    "grapeNames": []
  },
  {
    "slug": "port-35-symington-family-estates-1912-2",
    "nameKo": "다우는 전 세계 프리미엄급 포트(Port) 시장 점유율 35%를 자랑하며 포트업계 최고의 아성을 쌓은 포르투갈의 시밍턴 패밀리 이스테이트(Symington Family Estates)의 포트 브랜드 중 하나로 1912년 앤드류 제임스 시밍턴이 파트너가 된 이후부터 현재까지 프리미엄 포트 와인의 대명사로 변함없는 명성을 유지해왔습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Portugal",
    "regionL1": "도우루(Douro)-포르투갈",
    "volume": 750,
    "servingTempMin": 13,
    "servingTempMax": 16,
    "foodPairing": "[\"▶ 블루 치즈\", \"진한 초콜릿 디저트\", \"견과류\"]",
    "description": "시밍턴 패밀리가 소유하고 있는 도우루 밸리의 수 많은 빈야드 중에서도 단연 최고의 빈야드로 꼽히는 낀따 도 봄핑(Quinta do Bomfim)과 세뇨라 다 리베이라(Senhora da Ribeira)에서 생산되는 다우의 포트 와인은 특유의 드라이하면서 긴 피니시를 바탕으로 완벽한 밸런스를 보여주며 ‘프리미엄 포트가 가야 할 방향‘을 제시한다는 호평을 받고 있습니다. 특히 다우의 명성은 포트 와인의 꽃이라고 할 수 있는 빈티지 포트에서 빛을 발합니다. 모든 조건이 완벽한 해, 가장 완벽한 포도로만 만들어지기 때문에 10년에 3번 정도만 출시되는 희소한 와인인 빈티지 포트는 그만큼 하우스가 가진 능력을 잘 보여주는 와인이기도 합니다. 다우는 평론가 제임스 서클링(James Suckling)으로부터 100점을 받은 1955년 빈티지와 21세기에 만들어진 빈티지 포트 중 유일하게 와인 스펙테이터(Wine Spectator) 100점을 획득한 2007 빈티지, 2014년 포트 와인 최초로 와인 스펙테이터의 올해의 100대 와인에서 1위를 차지한 2011년 빈티지를 비롯, 수 많은 전설적인 빈티지를 남기며 랜드마크적인 입지를 구축하고 있습니다. 또한 다우는 포르투갈을 대표하는 브랜드로서 환경과 지역 사회에 대한 투자에서도 선구자적인 행동을 보여줍니다. 2019년 사회적, 환경적 차원에서 책임을 다하는 기업에게 부여되는 비콥(B Corp) 인증을 획득한데 이어, 기후변화에 대처하는 와이너리들의 모임 IWCA (International Wineries for Climate Action)에 참여하는 등 활발한 활동을 이어가고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "다우 포트  (Dow’s Port)",
    "grapeNames": []
  },
  {
    "slug": "port-35-symington-family-estates-1912-3",
    "nameKo": "다우는 전 세계 프리미엄급 포트(Port) 시장 점유율 35%를 자랑하며 포트업계 최고의 아성을 쌓은 포르투갈의 시밍턴 패밀리 이스테이트(Symington Family Estates)의 포트 브랜드 중 하나로 1912년 앤드류 제임스 시밍턴이 파트너가 된 이후부터 현재까지 프리미엄 포트 와인의 대명사로 변함없는 명성을 유지해왔습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Portugal",
    "regionL1": "도우루(Douro)-포르투갈",
    "volume": 750,
    "servingTempMin": 13,
    "servingTempMax": 16,
    "foodPairing": "[\"▶ 블루 치즈\", \"푸아 그라\", \"말린 과일\", \"견과류\", \"견과류 파이\"]",
    "description": "시밍턴 패밀리가 소유하고 있는 도우루 밸리의 수 많은 빈야드 중에서도 단연 최고의 빈야드로 꼽히는 낀따 도 봄핑(Quinta do Bomfim)과 세뇨라 다 리베이라(Senhora da Ribeira)에서 생산되는 다우의 포트 와인은 특유의 드라이하면서 긴 피니시를 바탕으로 완벽한 밸런스를 보여주며 ‘프리미엄 포트가 가야 할 방향‘을 제시한다는 호평을 받고 있습니다. 특히 다우의 명성은 포트 와인의 꽃이라고 할 수 있는 빈티지 포트에서 빛을 발합니다. 모든 조건이 완벽한 해, 가장 완벽한 포도로만 만들어지기 때문에 10년에 3번 정도만 출시되는 희소한 와인인 빈티지 포트는 그만큼 하우스가 가진 능력을 잘 보여주는 와인이기도 합니다. 다우는 평론가 제임스 서클링(James Suckling)으로부터 100점을 받은 1955년 빈티지와 21세기에 만들어진 빈티지 포트 중 유일하게 와인 스펙테이터(Wine Spectator) 100점을 획득한 2007 빈티지, 2014년 포트 와인 최초로 와인 스펙테이터의 올해의 100대 와인에서 1위를 차지한 2011년 빈티지를 비롯, 수 많은 전설적인 빈티지를 남기며 랜드마크적인 입지를 구축하고 있습니다. 또한 다우는 포르투갈을 대표하는 브랜드로서 환경과 지역 사회에 대한 투자에서도 선구자적인 행동을 보여줍니다. 2019년 사회적, 환경적 차원에서 책임을 다하는 기업에게 부여되는 비콥(B Corp) 인증을 획득한데 이어, 기후변화에 대처하는 와이너리들의 모임 IWCA (International Wineries for Climate Action)에 참여하는 등 활발한 활동을 이어가고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "다우 포트  (Dow’s Port)",
    "grapeNames": [
      "도우루에서 재배되는 토착 품종 포도로 완성한 기본급 화이트 포트 와인 입니다. 다우의 화이트 포트는 3년간 에이징을 거쳐 출시되는데",
      "대부분의 와인은 오크에서",
      "나머지 일부는 스테인리스 탱크에서 숙성되어 풍부한 견과류의 아로마와 황금빛 컬러",
      "신선한 과일류의 캐릭터가 복합적으로 나타납니다."
    ]
  },
  {
    "slug": "port-35-symington-family-estates-1912-4",
    "nameKo": "다우는 전 세계 프리미엄급 포트(Port) 시장 점유율 35%를 자랑하며 포트업계 최고의 아성을 쌓은 포르투갈의 시밍턴 패밀리 이스테이트(Symington Family Estates)의 포트 브랜드 중 하나로 1912년 앤드류 제임스 시밍턴이 파트너가 된 이후부터 현재까지 프리미엄 포트 와인의 대명사로 변함없는 명성을 유지해왔습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Portugal",
    "regionL1": "도우루(Douro)-포르투갈",
    "volume": 750,
    "servingTempMin": 13,
    "servingTempMax": 16,
    "foodPairing": "[\"▶ 블루 치즈\", \"푸아 그라\", \"말린 과일\", \"견과류\", \"견과류 파이\"]",
    "description": "시밍턴 패밀리가 소유하고 있는 도우루 밸리의 수 많은 빈야드 중에서도 단연 최고의 빈야드로 꼽히는 낀따 도 봄핑(Quinta do Bomfim)과 세뇨라 다 리베이라(Senhora da Ribeira)에서 생산되는 다우의 포트 와인은 특유의 드라이하면서 긴 피니시를 바탕으로 완벽한 밸런스를 보여주며 ‘프리미엄 포트가 가야 할 방향‘을 제시한다는 호평을 받고 있습니다. 특히 다우의 명성은 포트 와인의 꽃이라고 할 수 있는 빈티지 포트에서 빛을 발합니다. 모든 조건이 완벽한 해, 가장 완벽한 포도로만 만들어지기 때문에 10년에 3번 정도만 출시되는 희소한 와인인 빈티지 포트는 그만큼 하우스가 가진 능력을 잘 보여주는 와인이기도 합니다. 다우는 평론가 제임스 서클링(James Suckling)으로부터 100점을 받은 1955년 빈티지와 21세기에 만들어진 빈티지 포트 중 유일하게 와인 스펙테이터(Wine Spectator) 100점을 획득한 2007 빈티지, 2014년 포트 와인 최초로 와인 스펙테이터의 올해의 100대 와인에서 1위를 차지한 2011년 빈티지를 비롯, 수 많은 전설적인 빈티지를 남기며 랜드마크적인 입지를 구축하고 있습니다. 또한 다우는 포르투갈을 대표하는 브랜드로서 환경과 지역 사회에 대한 투자에서도 선구자적인 행동을 보여줍니다. 2019년 사회적, 환경적 차원에서 책임을 다하는 기업에게 부여되는 비콥(B Corp) 인증을 획득한데 이어, 기후변화에 대처하는 와이너리들의 모임 IWCA (International Wineries for Climate Action)에 참여하는 등 활발한 활동을 이어가고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "다우 포트  (Dow’s Port)",
    "grapeNames": []
  },
  {
    "slug": "port-35-symington-family-estates-1912-5",
    "nameKo": "다우는 전 세계 프리미엄급 포트(Port) 시장 점유율 35%를 자랑하며 포트업계 최고의 아성을 쌓은 포르투갈의 시밍턴 패밀리 이스테이트(Symington Family Estates)의 포트 브랜드 중 하나로 1912년 앤드류 제임스 시밍턴이 파트너가 된 이후부터 현재까지 프리미엄 포트 와인의 대명사로 변함없는 명성을 유지해왔습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Portugal",
    "regionL1": "도우루(Douro)-포르투갈",
    "volume": 750,
    "servingTempMin": 13,
    "servingTempMax": 16,
    "foodPairing": "[\"▶ 블루 치즈\", \"푸아 그라\", \"말린 과일\", \"견과류\", \"견과류 파이\"]",
    "description": "시밍턴 패밀리가 소유하고 있는 도우루 밸리의 수 많은 빈야드 중에서도 단연 최고의 빈야드로 꼽히는 낀따 도 봄핑(Quinta do Bomfim)과 세뇨라 다 리베이라(Senhora da Ribeira)에서 생산되는 다우의 포트 와인은 특유의 드라이하면서 긴 피니시를 바탕으로 완벽한 밸런스를 보여주며 ‘프리미엄 포트가 가야 할 방향‘을 제시한다는 호평을 받고 있습니다. 특히 다우의 명성은 포트 와인의 꽃이라고 할 수 있는 빈티지 포트에서 빛을 발합니다. 모든 조건이 완벽한 해, 가장 완벽한 포도로만 만들어지기 때문에 10년에 3번 정도만 출시되는 희소한 와인인 빈티지 포트는 그만큼 하우스가 가진 능력을 잘 보여주는 와인이기도 합니다. 다우는 평론가 제임스 서클링(James Suckling)으로부터 100점을 받은 1955년 빈티지와 21세기에 만들어진 빈티지 포트 중 유일하게 와인 스펙테이터(Wine Spectator) 100점을 획득한 2007 빈티지, 2014년 포트 와인 최초로 와인 스펙테이터의 올해의 100대 와인에서 1위를 차지한 2011년 빈티지를 비롯, 수 많은 전설적인 빈티지를 남기며 랜드마크적인 입지를 구축하고 있습니다. 또한 다우는 포르투갈을 대표하는 브랜드로서 환경과 지역 사회에 대한 투자에서도 선구자적인 행동을 보여줍니다. 2019년 사회적, 환경적 차원에서 책임을 다하는 기업에게 부여되는 비콥(B Corp) 인증을 획득한데 이어, 기후변화에 대처하는 와이너리들의 모임 IWCA (International Wineries for Climate Action)에 참여하는 등 활발한 활동을 이어가고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "다우 포트  (Dow’s Port)",
    "grapeNames": []
  },
  {
    "slug": "port-35-symington-family-estates-1912-6",
    "nameKo": "다우는 전 세계 프리미엄급 포트(Port) 시장 점유율 35%를 자랑하며 포트업계 최고의 아성을 쌓은 포르투갈의 시밍턴 패밀리 이스테이트(Symington Family Estates)의 포트 브랜드 중 하나로 1912년 앤드류 제임스 시밍턴이 파트너가 된 이후부터 현재까지 프리미엄 포트 와인의 대명사로 변함없는 명성을 유지해왔습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Portugal",
    "regionL1": "도우루(Douro)-포르투갈",
    "volume": 750,
    "servingTempMin": 13,
    "servingTempMax": 16,
    "foodPairing": "[\"▶ 푸아 그라\", \"말린 과일\", \"견과류\", \"초콜릿\", \"크림 브릴레\"]",
    "description": "시밍턴 패밀리가 소유하고 있는 도우루 밸리의 수 많은 빈야드 중에서도 단연 최고의 빈야드로 꼽히는 낀따 도 봄핑(Quinta do Bomfim)과 세뇨라 다 리베이라(Senhora da Ribeira)에서 생산되는 다우의 포트 와인은 특유의 드라이하면서 긴 피니시를 바탕으로 완벽한 밸런스를 보여주며 ‘프리미엄 포트가 가야 할 방향‘을 제시한다는 호평을 받고 있습니다. 특히 다우의 명성은 포트 와인의 꽃이라고 할 수 있는 빈티지 포트에서 빛을 발합니다. 모든 조건이 완벽한 해, 가장 완벽한 포도로만 만들어지기 때문에 10년에 3번 정도만 출시되는 희소한 와인인 빈티지 포트는 그만큼 하우스가 가진 능력을 잘 보여주는 와인이기도 합니다. 다우는 평론가 제임스 서클링(James Suckling)으로부터 100점을 받은 1955년 빈티지와 21세기에 만들어진 빈티지 포트 중 유일하게 와인 스펙테이터(Wine Spectator) 100점을 획득한 2007 빈티지, 2014년 포트 와인 최초로 와인 스펙테이터의 올해의 100대 와인에서 1위를 차지한 2011년 빈티지를 비롯, 수 많은 전설적인 빈티지를 남기며 랜드마크적인 입지를 구축하고 있습니다. 또한 다우는 포르투갈을 대표하는 브랜드로서 환경과 지역 사회에 대한 투자에서도 선구자적인 행동을 보여줍니다. 2019년 사회적, 환경적 차원에서 책임을 다하는 기업에게 부여되는 비콥(B Corp) 인증을 획득한데 이어, 기후변화에 대처하는 와이너리들의 모임 IWCA (International Wineries for Climate Action)에 참여하는 등 활발한 활동을 이어가고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "다우 포트  (Dow’s Port)",
    "grapeNames": []
  },
  {
    "slug": "port-35-symington-family-estates-1912-7",
    "nameKo": "다우는 전 세계 프리미엄급 포트(Port) 시장 점유율 35%를 자랑하며 포트업계 최고의 아성을 쌓은 포르투갈의 시밍턴 패밀리 이스테이트(Symington Family Estates)의 포트 브랜드 중 하나로 1912년 앤드류 제임스 시밍턴이 파트너가 된 이후부터 현재까지 프리미엄 포트 와인의 대명사로 변함없는 명성을 유지해왔습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Portugal",
    "regionL1": "도우루(Douro)-포르투갈",
    "volume": 750,
    "servingTempMin": 13,
    "servingTempMax": 16,
    "foodPairing": "[\"▶ 블루 치즈\", \"푸아 그라\", \"말린 과일\", \"다크 초콜릿\"]",
    "description": "시밍턴 패밀리가 소유하고 있는 도우루 밸리의 수 많은 빈야드 중에서도 단연 최고의 빈야드로 꼽히는 낀따 도 봄핑(Quinta do Bomfim)과 세뇨라 다 리베이라(Senhora da Ribeira)에서 생산되는 다우의 포트 와인은 특유의 드라이하면서 긴 피니시를 바탕으로 완벽한 밸런스를 보여주며 ‘프리미엄 포트가 가야 할 방향‘을 제시한다는 호평을 받고 있습니다. 특히 다우의 명성은 포트 와인의 꽃이라고 할 수 있는 빈티지 포트에서 빛을 발합니다. 모든 조건이 완벽한 해, 가장 완벽한 포도로만 만들어지기 때문에 10년에 3번 정도만 출시되는 희소한 와인인 빈티지 포트는 그만큼 하우스가 가진 능력을 잘 보여주는 와인이기도 합니다. 다우는 평론가 제임스 서클링(James Suckling)으로부터 100점을 받은 1955년 빈티지와 21세기에 만들어진 빈티지 포트 중 유일하게 와인 스펙테이터(Wine Spectator) 100점을 획득한 2007 빈티지, 2014년 포트 와인 최초로 와인 스펙테이터의 올해의 100대 와인에서 1위를 차지한 2011년 빈티지를 비롯, 수 많은 전설적인 빈티지를 남기며 랜드마크적인 입지를 구축하고 있습니다. 또한 다우는 포르투갈을 대표하는 브랜드로서 환경과 지역 사회에 대한 투자에서도 선구자적인 행동을 보여줍니다. 2019년 사회적, 환경적 차원에서 책임을 다하는 기업에게 부여되는 비콥(B Corp) 인증을 획득한데 이어, 기후변화에 대처하는 와이너리들의 모임 IWCA (International Wineries for Climate Action)에 참여하는 등 활발한 활동을 이어가고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "다우 포트  (Dow’s Port)",
    "grapeNames": []
  },
  {
    "slug": "port-35-symington-family-estates-1912-8",
    "nameKo": "다우는 전 세계 프리미엄급 포트(Port) 시장 점유율 35%를 자랑하며 포트업계 최고의 아성을 쌓은 포르투갈의 시밍턴 패밀리 이스테이트(Symington Family Estates)의 포트 브랜드 중 하나로 1912년 앤드류 제임스 시밍턴이 파트너가 된 이후부터 현재까지 프리미엄 포트 와인의 대명사로 변함없는 명성을 유지해왔습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Portugal",
    "regionL1": "도우루(Douro)-포르투갈",
    "volume": 750,
    "servingTempMin": 13,
    "servingTempMax": 16,
    "foodPairing": "[\"▶ 블루 치즈\", \"푸아 그라\", \"말린 과일\", \"견과류\", \"다크 초콜릿\"]",
    "description": "시밍턴 패밀리가 소유하고 있는 도우루 밸리의 수 많은 빈야드 중에서도 단연 최고의 빈야드로 꼽히는 낀따 도 봄핑(Quinta do Bomfim)과 세뇨라 다 리베이라(Senhora da Ribeira)에서 생산되는 다우의 포트 와인은 특유의 드라이하면서 긴 피니시를 바탕으로 완벽한 밸런스를 보여주며 ‘프리미엄 포트가 가야 할 방향‘을 제시한다는 호평을 받고 있습니다. 특히 다우의 명성은 포트 와인의 꽃이라고 할 수 있는 빈티지 포트에서 빛을 발합니다. 모든 조건이 완벽한 해, 가장 완벽한 포도로만 만들어지기 때문에 10년에 3번 정도만 출시되는 희소한 와인인 빈티지 포트는 그만큼 하우스가 가진 능력을 잘 보여주는 와인이기도 합니다. 다우는 평론가 제임스 서클링(James Suckling)으로부터 100점을 받은 1955년 빈티지와 21세기에 만들어진 빈티지 포트 중 유일하게 와인 스펙테이터(Wine Spectator) 100점을 획득한 2007 빈티지, 2014년 포트 와인 최초로 와인 스펙테이터의 올해의 100대 와인에서 1위를 차지한 2011년 빈티지를 비롯, 수 많은 전설적인 빈티지를 남기며 랜드마크적인 입지를 구축하고 있습니다. 또한 다우는 포르투갈을 대표하는 브랜드로서 환경과 지역 사회에 대한 투자에서도 선구자적인 행동을 보여줍니다. 2019년 사회적, 환경적 차원에서 책임을 다하는 기업에게 부여되는 비콥(B Corp) 인증을 획득한데 이어, 기후변화에 대처하는 와이너리들의 모임 IWCA (International Wineries for Climate Action)에 참여하는 등 활발한 활동을 이어가고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "다우 포트  (Dow’s Port)",
    "grapeNames": []
  },
  {
    "slug": "port-35-symington-family-estates-1912-9",
    "nameKo": "다우는 전 세계 프리미엄급 포트(Port) 시장 점유율 35%를 자랑하며 포트업계 최고의 아성을 쌓은 포르투갈의 시밍턴 패밀리 이스테이트(Symington Family Estates)의 포트 브랜드 중 하나로 1912년 앤드류 제임스 시밍턴이 파트너가 된 이후부터 현재까지 프리미엄 포트 와인의 대명사로 변함없는 명성을 유지해왔습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Portugal",
    "regionL1": "도우루(Douro)-포르투갈",
    "volume": 750,
    "servingTempMin": 13,
    "servingTempMax": 16,
    "foodPairing": "[\"▶ 블루 치즈를 포함한 치즈류\", \"초콜릿 케익\"]",
    "description": "시밍턴 패밀리가 소유하고 있는 도우루 밸리의 수 많은 빈야드 중에서도 단연 최고의 빈야드로 꼽히는 낀따 도 봄핑(Quinta do Bomfim)과 세뇨라 다 리베이라(Senhora da Ribeira)에서 생산되는 다우의 포트 와인은 특유의 드라이하면서 긴 피니시를 바탕으로 완벽한 밸런스를 보여주며 ‘프리미엄 포트가 가야 할 방향‘을 제시한다는 호평을 받고 있습니다. 특히 다우의 명성은 포트 와인의 꽃이라고 할 수 있는 빈티지 포트에서 빛을 발합니다. 모든 조건이 완벽한 해, 가장 완벽한 포도로만 만들어지기 때문에 10년에 3번 정도만 출시되는 희소한 와인인 빈티지 포트는 그만큼 하우스가 가진 능력을 잘 보여주는 와인이기도 합니다. 다우는 평론가 제임스 서클링(James Suckling)으로부터 100점을 받은 1955년 빈티지와 21세기에 만들어진 빈티지 포트 중 유일하게 와인 스펙테이터(Wine Spectator) 100점을 획득한 2007 빈티지, 2014년 포트 와인 최초로 와인 스펙테이터의 올해의 100대 와인에서 1위를 차지한 2011년 빈티지를 비롯, 수 많은 전설적인 빈티지를 남기며 랜드마크적인 입지를 구축하고 있습니다. 또한 다우는 포르투갈을 대표하는 브랜드로서 환경과 지역 사회에 대한 투자에서도 선구자적인 행동을 보여줍니다. 2019년 사회적, 환경적 차원에서 책임을 다하는 기업에게 부여되는 비콥(B Corp) 인증을 획득한데 이어, 기후변화에 대처하는 와이너리들의 모임 IWCA (International Wineries for Climate Action)에 참여하는 등 활발한 활동을 이어가고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "다우 포트  (Dow’s Port)",
    "grapeNames": []
  },
  {
    "slug": "port-35-symington-family-estates-1912-10",
    "nameKo": "다우는 전 세계 프리미엄급 포트(Port) 시장 점유율 35%를 자랑하며 포트업계 최고의 아성을 쌓은 포르투갈의 시밍턴 패밀리 이스테이트(Symington Family Estates)의 포트 브랜드 중 하나로 1912년 앤드류 제임스 시밍턴이 파트너가 된 이후부터 현재까지 프리미엄 포트 와인의 대명사로 변함없는 명성을 유지해왔습니다.",
    "nameEn": "",
    "type": "red",
    "country": "Portugal",
    "regionL1": "도우루(Douro)-포르투갈",
    "volume": 750,
    "servingTempMin": 13,
    "servingTempMax": 16,
    "foodPairing": "[\"▶ 카카오 함량 60% 이상의 초콜릿 디저트\"]",
    "description": "시밍턴 패밀리가 소유하고 있는 도우루 밸리의 수 많은 빈야드 중에서도 단연 최고의 빈야드로 꼽히는 낀따 도 봄핑(Quinta do Bomfim)과 세뇨라 다 리베이라(Senhora da Ribeira)에서 생산되는 다우의 포트 와인은 특유의 드라이하면서 긴 피니시를 바탕으로 완벽한 밸런스를 보여주며 ‘프리미엄 포트가 가야 할 방향‘을 제시한다는 호평을 받고 있습니다. 특히 다우의 명성은 포트 와인의 꽃이라고 할 수 있는 빈티지 포트에서 빛을 발합니다. 모든 조건이 완벽한 해, 가장 완벽한 포도로만 만들어지기 때문에 10년에 3번 정도만 출시되는 희소한 와인인 빈티지 포트는 그만큼 하우스가 가진 능력을 잘 보여주는 와인이기도 합니다. 다우는 평론가 제임스 서클링(James Suckling)으로부터 100점을 받은 1955년 빈티지와 21세기에 만들어진 빈티지 포트 중 유일하게 와인 스펙테이터(Wine Spectator) 100점을 획득한 2007 빈티지, 2014년 포트 와인 최초로 와인 스펙테이터의 올해의 100대 와인에서 1위를 차지한 2011년 빈티지를 비롯, 수 많은 전설적인 빈티지를 남기며 랜드마크적인 입지를 구축하고 있습니다. 또한 다우는 포르투갈을 대표하는 브랜드로서 환경과 지역 사회에 대한 투자에서도 선구자적인 행동을 보여줍니다. 2019년 사회적, 환경적 차원에서 책임을 다하는 기업에게 부여되는 비콥(B Corp) 인증을 획득한데 이어, 기후변화에 대처하는 와이너리들의 모임 IWCA (International Wineries for Climate Action)에 참여하는 등 활발한 활동을 이어가고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "다우 포트  (Dow’s Port)",
    "grapeNames": []
  },
  {
    "slug": "maker-s-table-shiraz",
    "nameKo": "Maker’s Table Shiraz",
    "nameEn": "",
    "type": "red",
    "country": "Australia",
    "regionL1": "호주 전역 프리미엄 포도밭",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 조미된 스테이크\", \"조미된 양고기\", \"구운 감자\"]",
    "description": "깊고 풍부한 붉은색을 띠며 진한 체리, 자두, 그리고 다양한 향료에서 옮겨온 듯한 향은 넌지시 던져지는 오크의 향과 잘 배합되어 있습니다. 풍부한 맛은 풍부한 과일과 짙은 체리의 풍미와 조화를 이루고 있습니다. 가볍게 뒷 받쳐 주고 있는 오크와 잘 융화된 탄닌은 누구나 마시기 쉬운 스타일의 이 와인을 탄생시켰습니다. 호주 전역의 프리미엄급 포도밭에서 선택된 포도로 양조 되어 매년 빈티지의 기복이 없이 우수한 품질을 자랑합니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "메이커스 테이블 쉬라즈",
    "grapeNames": [
      "살트램 와인은 풍부함과 강렬함",
      "그리고 포도 품종 각각의 특성을 충실히 나타내는 와인으로 오랫동안 찬사를 받아 온 와인입니다."
    ]
  },
  {
    "slug": "maker-s-table-cabernet-sauvignon",
    "nameKo": "Maker’s Table Cabernet Sauvignon",
    "nameEn": "",
    "type": "red",
    "country": "Australia",
    "regionL1": "호주 전역 프리미엄 포도밭",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 햄과 피망이 있는 토마토 소스를 곁들인 파스타\"]",
    "description": "힘차고 깊은 체리 빛을 띠고 있으며 블랙커런트, 자두, 그리고 오크의 향이 잘 어우러져 있습니다. 스파이시한 과일 맛과 조화로운 탄닌, 그리고 부드러운 오크가 잘 뒷받침 해주는 미디엄 바디의 와인입니다. 호주 전역의 프리미엄급 포도원에서 재배된 포도의 신선함을 유지하기 위해 밤에 수확됩니다. 넓은 출처를 바탕으로 조달되는 포도로 양조되므로 빈티지의 기복이 적고 항상 우수한 품질을 자랑합니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "메이커스 테이블 카버네 소비뇽",
    "grapeNames": [
      "살트램 와인은 풍부함과 강렬함",
      "그리고 포도 품종 각각의 특성을 충실히 나타내는 와인으로 오랫동안 찬사를 받아 온 와인입니다."
    ]
  },
  {
    "slug": "maker-s-table-sauvignon-blanc",
    "nameKo": "Maker’s Table Sauvignon Blanc",
    "nameEn": "",
    "type": "red",
    "country": "Australia",
    "regionL1": "남동 호주(South Eastern Australia)",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 12,
    "foodPairing": "[\"▶ 베트남 take-out 음식 및 동양 음식\"]",
    "description": "신선하고 Young한 와인으로, 매우 밝고 빛나는 Yellow 빛깔과 Green 빛깔이 잘 어우러져 있습니다. 열대과일, 멜론과 녹색 풀잎의 향기가 살며시 드러나는 이 와인은 열대과일의 풍미와 다양한 허브, 풀잎의 향이 좋으며, 바삭거리면서도(Crisp) 깔끔한 산도로 마무리 됩니다. ♥ 소  유  주  : Foster’s Wine Estate",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "메이커스 테이블 소비뇽 블랑",
    "grapeNames": [
      "살트램 와인은 풍부함과 강렬함",
      "그리고 포도 품종 각각의 특성을 충실히 나타내는 와인으로 오랫동안 찬사를 받아 온 와인입니다."
    ]
  },
  {
    "slug": "maker-s-table-chardonnay",
    "nameKo": "Maker’s Table Chardonnay",
    "nameEn": "",
    "type": "red",
    "country": "Australia",
    "regionL1": "남동호주(South Eastern Australia)",
    "volume": 750,
    "servingTempMin": 11,
    "servingTempMax": 12,
    "foodPairing": "[\"▶ 가금류\", \"파스타\", \"구운 연어\", \"신선한 샐러드\"]",
    "description": "남동호주 프리미엄 포도밭의 포도로 만들며 신선하고 깔끔한 뒷맛이 인상적인 호주 화이트 와인입니다. 연한 볏짚 색을 띄고 있는 와인은, 멜론, 배와 더불어 균형잡힌 구조로샤도네이 본연의 특징을 한껏 살리고 있으며, 동시에 부드럽고 입안을 부드럽게 감싸는 맛을 선보이고 있습니다. 일부 와인의 오크 숙성은 복잡미묘함과 더불어 고소한 맛을 더해주고 있고, 이는 가금류의 요리나 파스타에 적격입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "메이커스 테이블 샤도네이",
    "grapeNames": [
      "살트램 와인은 풍부함과 강렬함",
      "그리고 포도 품종 각각의 특성을 충실히 나타내는 와인으로 오랫동안 찬사를 받아 온 와인입니다."
    ]
  },
  {
    "slug": "next-chapter-cabernet-merlot",
    "nameKo": "Next Chapter  Cabernet-Merlot",
    "nameEn": "",
    "type": "red",
    "country": "Australia",
    "regionL1": "바로사(Barossa)-호주",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 19,
    "foodPairing": "[\"▶ 펜네 등 파스타 요리\"]",
    "description": "자줏빛을 띈 심홍색 와인으로, 멀롯이 지닌 체리와 자두의 향, 카버네의 블랙커런트와 민트향을 느낄 수 있습니다. 오크와 부드러운 탄닌, 블랙 커런트와 쵸컬릿의 향이 울리는 미디엄 바디의 와인 입니다. Finish는 부드러움과 따뜻함을 선사합니다. 현대적인 스테인레스 탱크에서의 발효과정을 통해 신선한 열매의 향기와 색상을 띄게 되고, 젖산발효로 더욱 부드러운 풍미를 갖게 됩니다. “Quaff 2004” 선정, 올해의 와인 &  올해의 레드와인",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "넥스트 챕터  카버네-멀롯(수입중단)",
    "grapeNames": [
      "살트램 와인은 풍부함과 강렬함",
      "그리고 포도 품종 각각의 특성을 충실히 나타내는 와인으로 오랫동안 찬사를 받아 온 와인입니다."
    ]
  },
  {
    "slug": "next-chapter-cabernet-merlot-2",
    "nameKo": "Next Chapter  Cabernet-Merlot",
    "nameEn": "",
    "type": "red",
    "country": "Australia",
    "regionL1": "바로사(Barossa)-호주",
    "volume": 750,
    "servingTempMin": 11,
    "servingTempMax": 13,
    "foodPairing": "[\"▶ 그린 샐러드\", \"구운 연어\", \"각종 전\", \"닭고기 요리\"]",
    "description": "호주 화이트 와인의 클래식한 전형을 맛볼 수 있는 샤도네이로 밝은 노란빛과 더불어 약간의 푸른 빛의 여운을 드리고 있습니다. 배, 감귤류, 미네랄의  향이 적당히 그을려진 오크의 향미와 어우러져 부드러운 조화",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "넥스트 챕터  샤도네이(수입중단)",
    "grapeNames": [
      "살트램 와인은 풍부함과 강렬함",
      "그리고 포도 품종 각각의 특성을 충실히 나타내는 와인으로 오랫동안 찬사를 받아 온 와인입니다."
    ]
  },
  {
    "slug": "barossa-chardonnay",
    "nameKo": "Barossa Chardonnay",
    "nameEn": "",
    "type": "red",
    "country": "Australia",
    "regionL1": "바로사(Barossa)-호주",
    "volume": 750,
    "servingTempMin": 11,
    "servingTempMax": 13,
    "foodPairing": "[\"▶ 그릴에 구운 닭고기 요리\", \"구운 연어\", \"각종 전\", \"잡채\"]",
    "description": "바로사 샤도네이는 호주의 가장 유명한 바로사 밸리에서 재배된 포도가 주가 되나 시원한 기후를 자랑하는 에덴 밸리의 포도를 첨가하여 더욱 품질을 높습니다. 넘치는 생동감을 보이는 와인으로 멜론, 석류, 배 등의 다양한 과일향이 진하여 기분을 상쾌하게 해주며 오크 배럴 숙성으로 얻어진 부드러운 바닐라의 맛과 과일의 향이 세련된 조화를 이룹니다. 이 와인에 살아있는 바로사 밸리의 개성은 5년 동안 지속될 것입니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "바로사  샤도네이(수입중단)",
    "grapeNames": [
      "살트램 와인은 풍부함과 강렬함",
      "그리고 포도 품종 각각의 특성을 충실히 나타내는 와인으로 오랫동안 찬사를 받아 온 와인입니다."
    ]
  },
  {
    "slug": "mamre-brook-shiraz",
    "nameKo": "Mamre Brook Shiraz",
    "nameEn": "",
    "type": "red",
    "country": "Australia",
    "regionL1": "바로사(Barossa)-호주",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 모든 붉은 육류\", \"허브를 곁들여 먹는 양고기\"]",
    "description": "맴레 브룩은 살트램의 최고 와인메이커가 사는 집의 이름으로 1844년에 건축된 이 집의 이름을 딴 Mamre Brook급의 와인은 호주 바로사 밸리와 에덴 밸리에서 수확한 포도로 만들어 집니다. 농축된 감초, 검은 열매과일, 클로브 등의 향이 풍부하며, 입에서도 검은 열매과일을 충분히 느낄 수 있습니다. 그을려지고 바닐라 느낌이 입혀진 오크의 느낌과 확고히 자리를 지키고 있으되 Silky한 느낌을 주는 탄닌 이 복합적이고 준수한 느낌을 자아냅니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "맴레 브룩 쉬라즈",
    "grapeNames": [
      "살트램 와인은 풍부함과 강렬함",
      "그리고 포도 품종 각각의 특성을 충실히 나타내는 와인으로 오랫동안 찬사를 받아 온 와인입니다."
    ]
  },
  {
    "slug": "mamre-brook-cabernet-sauvignon",
    "nameKo": "Mamre Brook Cabernet Sauvignon",
    "nameEn": "",
    "type": "red",
    "country": "Australia",
    "regionL1": "바로사(Barossa)-호주",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 18,
    "foodPairing": "[\"▶ 모든 붉은 육류\", \"콩을 재료로 한 스프\"]",
    "description": "맴레 브룩은 살트램의 최고 와인메이커가 사는 집의 이름 입니다. 1844년에 건축된 이 집의 이름을 딴 Mamre Brook급의 와인은 호주 바로사 밸리와 에덴 밸리에서 수확한 포도로 만들어 집니다. 프리미엄급 이 와인은 깊고 풍부한 자줏빛을 띠며, 자두, 검은 열매류 및 쵸콜렛의 복합적인 향을 갖고 있습니다. 겹겹이 다양한 풍미를 보여주며 좋은 탄닌과 훌륭한 여운을 지니고 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "맴레 브룩 카버네 소비뇽",
    "grapeNames": [
      "살트램 와인은 풍부함과 강렬함",
      "그리고 포도 품종 각각의 특성을 충실히 나타내는 와인으로 오랫동안 찬사를 받아 온 와인입니다."
    ]
  },
  {
    "slug": "mamre-brook-chardonnay",
    "nameKo": "Mamre Brook Chardonnay",
    "nameEn": "",
    "type": "red",
    "country": "Australia",
    "regionL1": "바로사(Barossa)-호주",
    "volume": 750,
    "servingTempMin": 10,
    "servingTempMax": 11,
    "foodPairing": "[\"▶ 야채샐러드를 곁들인 연어 휠레\", \"각종 전\", \"잡채\", \"삼겹살\"]",
    "description": "맴레 브룩은 살트램의 최고 와인메이커가 사는 집의 이름 입니다. 1844년에 건축된 이 집의 이름을 딴 Mamre Brook급의 와인은 호주 바로사 밸리와 에덴 밸리에서 수확한 포도로 만들어 집니다. 아름다운 노란 빛을 띠고 있으며, 은은한 오크향의 특징과 멜론, 배, 복숭아의 전형적인 향기를 머금고 있습니다. 풍부하며 풀 바디한 맛을 지닌 이 와인은 잘 익은 열대과일의 향미를 오크의 향미가 잘 받쳐주고 있으며, 길고 풍부한 Finish를 느낄 수 있습니다.",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "맴레 브룩 샤도네이",
    "grapeNames": [
      "살트램 와인은 풍부함과 강렬함",
      "그리고 포도 품종 각각의 특성을 충실히 나타내는 와인으로 오랫동안 찬사를 받아 온 와인입니다."
    ]
  },
  {
    "slug": "no-1-shiraz",
    "nameKo": "No.1 Shiraz",
    "nameEn": "",
    "type": "red",
    "country": "Australia",
    "regionL1": "바로사(Barossa)-호주",
    "volume": 750,
    "servingTempMin": 16,
    "servingTempMax": 19,
    "foodPairing": "[\"▶ 기름진 육류\", \"특히 진한 소스가 곁들여진 쇠고기 요리\"]",
    "description": "1862년 최초로 양조된 No.1 Shiraz는 1993년 새롭게 태어나 호주 및 전세계적인 와인 행사에서 무수한 골드메달과 트로피를 얻는 등 매우 높은 명성을 얻고 있습니다. 진한 검붉은 빛은 와인의 깊이를 말해주며, 커피원두와 삼나무 향이 뒷받침 된 블랙베리, 후추, 감초와 초콜렛의 응집된 향을 느낄 수 있습니다. 풍부하고 풀바디한 Palate에서 잘 여물고 스파이시한 과일향과 커피향, 그리고 프렌치 오크의 향미도",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "넘버원 쉬라즈",
    "grapeNames": [
      "살트램 와인은 풍부함과 강렬함",
      "그리고 포도 품종 각각의 특성을 충실히 나타내는 와인으로 오랫동안 찬사를 받아 온 와인입니다."
    ]
  },
  {
    "slug": "the-eighth-maker-shiraz",
    "nameKo": "The Eighth Maker Shiraz",
    "nameEn": "",
    "type": "red",
    "country": "Australia",
    "regionL1": "바로사(Barossa)-호주",
    "volume": 750,
    "servingTempMin": 17,
    "servingTempMax": 19,
    "foodPairing": "[\"▶ 모든 붉은 육류\", \"떡갈비\", \"강한 소스를 곁들인 스테이크\"]",
    "description": "8번째 와인메이커를 뜻 하는 이 와인은 현재 살트램의 와인메이커이자, 역대 8번째 와인메이커인 나이젤 돌란이 선대 7인에 대한 무한한 존경과 헌신의 표현으로 빚은 특별한 와인입니다. 또한 이 와인은 바로사 쉬라즈가 얼마나 위대할 수 있는지를 한 병의 와인을 통하여 구현하고자 애쓴 한 인간의 집념과 열정의 결정체입니다. Opaque 하다고 부르는 어둡고 진한 붉은 빛은 이 와인이 갖",
    "checkpoints": "[]",
    "isPublished": 1,
    "wineryNameKo": "에이쓰 메이커 쉬라즈(수입중단)",
    "grapeNames": [
      "살트램 와인은 풍부함과 강렬함",
      "그리고 포도 품종 각각의 특성을 충실히 나타내는 와인으로 오랫동안 찬사를 받아 온 와인입니다."
    ]
  }
];

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding...");

  // 1. Wineries
  for (const w of WINERIES) {
    await prisma.winery.upsert({
      where: { nameKo: w.nameKo },
      update: {},
      create: w,
    });
  }
  console.log(`Wineries done: ${WINERIES.length}`);

  console.log('✅ Seed complete — run the Python scraper to populate real scraped data')
}

main().catch(console.error).finally(() => prisma.$disconnect());
