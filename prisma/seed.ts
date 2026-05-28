import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Create grape varieties
  const cabSauv = await prisma.grape.upsert({
    where: { id: 1 },
    update: {},
    create: { nameKo: '카베르네 소비뇽', nameEn: 'Cabernet Sauvignon' },
  })

  const merlot = await prisma.grape.upsert({
    where: { id: 2 },
    update: {},
    create: { nameKo: '메를로', nameEn: 'Merlot' },
  })

  const cabFranc = await prisma.grape.upsert({
    where: { id: 3 },
    update: {},
    create: { nameKo: '카베르네 프랑', nameEn: 'Cabernet Franc' },
  })

  const petitVerdot = await prisma.grape.upsert({
    where: { id: 4 },
    update: {},
    create: { nameKo: '쁘띠 베르도', nameEn: 'Petit Verdot' },
  })

  const zinfandel = await prisma.grape.upsert({
    where: { id: 5 },
    update: {},
    create: { nameKo: '진판델', nameEn: 'Zinfandel' },
  })

  const chardonnay = await prisma.grape.upsert({
    where: { id: 6 },
    update: {},
    create: { nameKo: '샤르도네', nameEn: 'Chardonnay' },
  })

  const pinotNoir = await prisma.grape.upsert({
    where: { id: 7 },
    update: {},
    create: { nameKo: '피노 누아', nameEn: 'Pinot Noir' },
  })

  // Create Caymus Vineyards winery
  const caymus = await prisma.winery.upsert({
    where: { id: 1 },
    update: {},
    create: {
      nameKo: '케이머스 빈야즈',
      nameEn: 'Caymus Vineyards',
      country: '미국',
      region: '나파 밸리',
      description:
        '케이머스 빈야즈는 1972년 찰리 와그너(Charlie Wagner)와 그의 아들 척 와그너(Chuck Wagner)에 의해 설립된 나파 밸리의 아이콘적인 와이너리입니다. 반세기가 넘는 역사를 자랑하며, 나파 밸리 카베르네 소비뇽의 정수를 담은 와인으로 전 세계에 이름을 알렸습니다.',
      history:
        '1975년 첫 빈티지를 선보인 이래로, 케이머스는 일관되게 뛰어난 품질의 와인을 생산해 왔습니다. 특히 스페셜 셀렉션은 Wine Spectator로부터 두 번이나 올해의 와인(1984, 1990)에 선정되는 영예를 안았습니다.',
      logoUrl: null,
      websiteUrl: 'https://caymus.com',
    },
  })

  // Create the flagship Caymus Napa Valley Cabernet
  const caymusNapa = await prisma.wine.upsert({
    where: { slug: 'caymus-napa-valley-cabernet-sauvignon' },
    update: {},
    create: {
      slug: 'caymus-napa-valley-cabernet-sauvignon',
      nameKo: '케이머스 나파 밸리 카베르네 소비뇽',
      nameEn: 'Caymus Napa Valley Cabernet Sauvignon',
      subtitle: 'KING of Cabernet',
      wineryId: caymus.id,
      type: 'red',
      country: '미국',
      regionL1: '캘리포니아',
      regionL2: '나파 밸리',
      volume: 750,
      servingTempMin: 16,
      servingTempMax: 18,
      foodPairing: JSON.stringify(['소고기', '양고기', '숙성 치즈', '버섯 요리', '다크 초콜릿']),
      sweetness: 2,
      acidity: 3,
      body: 5,
      tannin: 4,
      description:
        '케이머스 나파 밸리 카베르네 소비뇽은 나파 밸리를 대표하는 와인으로, 풍부하고 복합적인 풍미와 부드러운 타닌이 조화를 이루는 클래식한 나파 스타일의 와인입니다.',
      wineryDesc:
        '케이머스 빈야즈는 1972년 설립된 나파 밸리의 전설적인 와이너리로, 반세기가 넘는 역사 속에서 언제나 최고 품질의 카베르네 소비뇽을 생산해 왔습니다.',
      wineStory:
        '케이머스 나파 밸리 카베르네 소비뇽은 단순히 와인이 아니라 나파 밸리의 역사 그 자체입니다. 1975년 첫 빈티지 이후, 이 와인은 매 빈티지마다 나파 밸리 테루아의 정수를 담아냅니다.\n\n척 와그너는 "우리가 목표로 하는 것은 매년 일관되게 뛰어난 와인을 만드는 것"이라고 말합니다. 이 철학은 케이머스를 카베르네 소비뇽의 왕으로 만든 핵심입니다.\n\n잘 익은 블랙 체리, 카시스, 다크 초콜릿, 그리고 오크의 바닐라 향이 어우러진 이 와인은 나파 밸리의 따뜻한 기후와 비옥한 토양이 만들어내는 풍요로움을 온전히 담고 있습니다.',
      checkpoints: JSON.stringify([
        {
          label: '블렌딩의 예술',
          text: '매 빈티지 나파 밸리 전역의 포도를 블렌딩하여 일관된 스타일과 품질을 유지합니다. 카베르네 소비뇽이 주품종이며, 소량의 메를로와 카베르네 프랑이 복합성을 더합니다.',
        },
        {
          label: '오크 숙성',
          text: '프렌치 오크와 아메리칸 오크 배럴을 혼합 사용하여 16~18개월 숙성합니다. 오크에서 나오는 바닐라, 토스트, 향신료 풍미가 과실 풍미와 완벽하게 통합됩니다.',
        },
        {
          label: '나파 밸리 테루아',
          text: '나파 밸리의 따뜻한 낮과 서늘한 밤의 기온 차이가 포도의 당도와 산도 균형을 완벽하게 만들어냅니다. 화산성 토양과 충적 토양이 복합적인 미네랄 풍미를 부여합니다.',
        },
      ]),
      tastingNotes:
        '선명한 루비-퍼플 색상. 코에서는 잘 익은 블랙베리, 카시스, 블랙 체리의 진한 과실 향이 첫 번째로 다가옵니다. 이어서 다크 초콜릿, 커피, 삼나무, 바닐라의 향이 복합적으로 펼쳐집니다. 입에서는 풀 바디의 깊고 풍요로운 질감과 함께 벨벳처럼 부드러운 타닌이 느껴집니다. 과실의 풍미가 오래도록 지속되며, 긴 여운과 함께 마무리됩니다.',
      productionMethod:
        '선별 수확한 카베르네 소비뇽을 스테인리스 스틸 탱크에서 발효합니다. 온도 조절을 통해 풍부한 과실 풍미를 최대한 추출하며, 이후 프렌치 오크와 아메리칸 오크 배럴에서 16~18개월간 숙성합니다. 병입 전 최소 6개월 추가 숙성 후 출시합니다.',
      bottleImageUrl: null,
      images: JSON.stringify([]),
      isPublished: true,
    },
  })

  // Add grape relationships
  await prisma.wineGrape.upsert({
    where: { wineId_grapeId: { wineId: caymusNapa.id, grapeId: cabSauv.id } },
    update: {},
    create: { wineId: caymusNapa.id, grapeId: cabSauv.id, percentage: 86 },
  })

  await prisma.wineGrape.upsert({
    where: { wineId_grapeId: { wineId: caymusNapa.id, grapeId: merlot.id } },
    update: {},
    create: { wineId: caymusNapa.id, grapeId: merlot.id, percentage: 8 },
  })

  await prisma.wineGrape.upsert({
    where: { wineId_grapeId: { wineId: caymusNapa.id, grapeId: cabFranc.id } },
    update: {},
    create: { wineId: caymusNapa.id, grapeId: cabFranc.id, percentage: 4 },
  })

  await prisma.wineGrape.upsert({
    where: { wineId_grapeId: { wineId: caymusNapa.id, grapeId: petitVerdot.id } },
    update: {},
    create: { wineId: caymusNapa.id, grapeId: petitVerdot.id, percentage: 2 },
  })

  // Add awards
  const awardsData = [
    { vintage: 2022, source: 'WS', score: 91 },
    { vintage: 2022, source: 'RP', score: 93 },
    { vintage: 2021, source: 'WS', score: 93 },
    { vintage: 2021, source: 'RP', score: 92 },
    { vintage: 2021, source: 'WE', score: 91 },
    { vintage: 2020, source: 'WS', score: 92 },
    { vintage: 2020, source: 'RP', score: 94 },
    { vintage: 2019, source: 'WS', score: 91 },
    { vintage: 2019, source: 'WE', score: 93 },
    { vintage: 2018, source: 'RP', score: 95 },
    { vintage: 2018, source: 'WS', score: 94 },
  ]

  for (const award of awardsData) {
    const existing = await prisma.award.findFirst({
      where: { wineId: caymusNapa.id, vintage: award.vintage, source: award.source },
    })
    if (!existing) {
      await prisma.award.create({
        data: { wineId: caymusNapa.id, ...award },
      })
    }
  }

  // Add sample scraped data
  const scrapedItems = [
    {
      sourceType: 'naver_blog',
      title: '케이머스 나파 밸리 카베르네 소비뇽 시음 후기 - 과연 카베르네의 왕인가?',
      url: 'https://blog.naver.com/example/123456',
      author: '와인러버_82',
      content:
        '오늘은 그 유명한 케이머스 나파 밸리를 열어봤습니다. 색상은 짙은 루비색이고 가장자리에 약간의 퍼플 틴트가 있네요. 향은 정말 화려합니다. 블랙베리, 카시스, 다크 초콜릿이 폭발적으로 터져 나오고 그 뒤로 바닐라와 삼나무 향이 은은하게 따라옵니다. 입에서는 풀바디감이 느껴지며 타닌이 벨벳처럼 부드럽습니다. 이 와인의 가장 큰 특징은 역시 접근성이 좋으면서도 복합성이 뛰어나다는 점입니다.',
      publishedAt: new Date('2024-03-15'),
      metadata: JSON.stringify({ blogName: '와인과 일상', likes: 234 }),
    },
    {
      sourceType: 'naver_blog',
      title: '[와인 리뷰] Caymus Napa Valley Cabernet Sauvignon 2021',
      url: 'https://blog.naver.com/example/789012',
      author: '소믈리에_박',
      content:
        '2021 빈티지는 정말 훌륭합니다. 나파 밸리 역사상 최고의 빈티지 중 하나로 꼽히는 2021년답게 케이머스도 매우 뛰어난 퀄리티를 보여주네요. 농축된 과실미에 산도 균형이 좋고 피니시가 매우 길어요.',
      publishedAt: new Date('2024-01-22'),
      metadata: JSON.stringify({ blogName: '소믈리에의 와인노트' }),
    },
    {
      sourceType: 'youtube',
      title: '케이머스 나파 밸리 카베르네 소비뇽 블라인드 테이스팅!',
      url: 'https://www.youtube.com/watch?v=example123',
      author: '와인TV Korea',
      content:
        '오늘은 블라인드로 케이머스를 맞춰보는 챌린지를 해봤습니다! 과연 몇 명이나 맞출 수 있을까요? 특유의 풍성한 질감과 농익은 과실미가 케이머스의 트레이드마크죠.',
      publishedAt: new Date('2024-02-10'),
      metadata: JSON.stringify({ videoId: 'example123', views: 45230, channel: '와인TV Korea' }),
    },
    {
      sourceType: 'wine_searcher',
      title: 'Caymus Vineyards Napa Valley Cabernet Sauvignon - Wine-Searcher',
      url: 'https://www.wine-searcher.com/find/caymus+napa+valley+cabernet',
      content:
        '평균 소매가: $75-90 USD. 세계 최고의 와인 중 하나로 꼽히며 수집가들에게 큰 인기를 끌고 있습니다. 전 세계 5,000개 이상의 소매점에서 판매 중. 커뮤니티 평균 평점: 4.3/5',
      publishedAt: new Date('2024-04-01'),
      metadata: JSON.stringify({ avgPrice: 82, currency: 'USD', communityRating: 4.3 }),
    },
    {
      sourceType: 'article',
      title: "Caymus Wines: The Wagner Family's Napa Legacy",
      url: 'https://www.winespectator.com/articles/caymus-legacy',
      author: 'Wine Spectator',
      content:
        'The Wagner family has been crafting exceptional Cabernet Sauvignon from Napa Valley for over five decades. Chuck Wagner continues to build on his family\'s legacy, producing wines that consistently rank among America\'s finest.',
      publishedAt: new Date('2023-11-15'),
      metadata: JSON.stringify({ publication: 'Wine Spectator' }),
    },
  ]

  for (const item of scrapedItems) {
    const existing = await prisma.scrapedData.findFirst({
      where: { wineId: caymusNapa.id, url: item.url },
    })
    if (!existing) {
      await prisma.scrapedData.create({
        data: { wineId: caymusNapa.id, ...item },
      })
    }
  }

  // Add a second sample wine
  const opus = await prisma.wine.upsert({
    where: { slug: 'opus-one-2020' },
    update: {},
    create: {
      slug: 'opus-one-2020',
      nameKo: '오퍼스 원 2020',
      nameEn: 'Opus One 2020',
      subtitle: 'Napa Valley Red',
      type: 'red',
      country: '미국',
      regionL1: '캘리포니아',
      regionL2: '나파 밸리',
      volume: 750,
      servingTempMin: 17,
      servingTempMax: 19,
      foodPairing: JSON.stringify(['필레 미뇽', '양갈비', '트러플 요리', '하드 치즈']),
      sweetness: 1,
      acidity: 3,
      body: 5,
      tannin: 5,
      description: '오퍼스 원은 로버트 몬다비와 바론 필립 드 로트쉴드의 합작으로 탄생한 나파 밸리 최고의 와인입니다.',
      wineStory:
        '1979년 로버트 몬다비와 샤토 무통 로쉴드의 바론 필립 드 로트쉴드가 공동으로 설립한 오퍼스 원은 신세계와 구세계 와인 철학의 완벽한 융합입니다.',
      tastingNotes:
        '진한 루비색. 블랙 커런트, 블루베리, 제비꽃의 향기. 삼나무, 그래파이트, 다크 카카오의 미묘한 뉘앙스. 팔레트에서는 섬세하고 정교한 타닌과 함께 긴 여운이 느껴집니다.',
      isPublished: true,
    },
  })

  await prisma.wineGrape.upsert({
    where: { wineId_grapeId: { wineId: opus.id, grapeId: cabSauv.id } },
    update: {},
    create: { wineId: opus.id, grapeId: cabSauv.id, percentage: 75 },
  })

  await prisma.wineGrape.upsert({
    where: { wineId_grapeId: { wineId: opus.id, grapeId: merlot.id } },
    update: {},
    create: { wineId: opus.id, grapeId: merlot.id, percentage: 14 },
  })

  await prisma.wineGrape.upsert({
    where: { wineId_grapeId: { wineId: opus.id, grapeId: cabFranc.id } },
    update: {},
    create: { wineId: opus.id, grapeId: cabFranc.id, percentage: 7 },
  })

  await prisma.wineGrape.upsert({
    where: { wineId_grapeId: { wineId: opus.id, grapeId: petitVerdot.id } },
    update: {},
    create: { wineId: opus.id, grapeId: petitVerdot.id, percentage: 4 },
  })

  const opusAwards = [
    { vintage: 2020, source: 'RP', score: 98 },
    { vintage: 2020, source: 'WS', score: 97 },
    { vintage: 2019, source: 'RP', score: 99 },
    { vintage: 2019, source: 'WE', score: 98 },
  ]

  for (const award of opusAwards) {
    const existing = await prisma.award.findFirst({
      where: { wineId: opus.id, vintage: award.vintage, source: award.source },
    })
    if (!existing) {
      await prisma.award.create({ data: { wineId: opus.id, ...award } })
    }
  }

  console.log('✅ Database seeded successfully!')
  console.log(`  - Wineries: 1 (Caymus Vineyards)`)
  console.log(`  - Wines: 2 (Caymus Napa CS, Opus One)`)
  console.log(`  - Grapes: 7 varieties`)
  console.log(`  - Awards: ${awardsData.length + opusAwards.length}`)
  console.log(`  - Scraped data: ${scrapedItems.length} items`)
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect()
  })
