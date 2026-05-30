import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  const caymusWinery = await prisma.winery.upsert({
    where: { nameKo: '케이머스 빈야드' },
    create: {
      nameKo: '케이머스 빈야드',
      nameEn: 'Caymus Vineyards',
      country: '미국',
      region: '나파 밸리',
      description: '1972년 찰리 와그너가 설립한 나파 밸리 대표 와이너리. 카베르네 소비뇽의 제왕으로 불린다.',
      websiteUrl: 'https://www.caymus.com',
    },
    update: {},
  })

  const cabSauv = await prisma.grape.upsert({
    where: { nameKo: '카베르네 소비뇽' },
    create: { nameKo: '카베르네 소비뇽', nameEn: 'Cabernet Sauvignon' },
    update: {},
  })

  const caymus = await prisma.wine.upsert({
    where: { slug: 'caymus-napa-valley-cabernet-sauvignon' },
    create: {
      slug: 'caymus-napa-valley-cabernet-sauvignon',
      nameKo: '케이머스 나파 밸리 카베르네 소비뇽',
      nameEn: 'Caymus Napa Valley Cabernet Sauvignon',
      subtitle: 'KING of Cabernet',
      erpCode: 'CAY-NV-CS-750',
      wineryId: caymusWinery.id,
      type: 'red',
      country: '미국',
      regionL1: '캘리포니아',
      regionL2: '나파 밸리',
      volume: 750,
      servingTempMin: 16,
      servingTempMax: 18,
      foodPairing: JSON.stringify(['스테이크', '라구 소스를 곁들인 파스타', '숯불갈비']),
      sweetness: 1,
      acidity: 1,
      body: 5,
      tannin: 4,
      description: '케이머스가 카베르네 소비뇽의 제왕이라는 점은 의심할 여지가 없다.',
      wineStory: '케이머스 빈야드의 양조 역사는 프랑스 알자스 출신 이주민 와그너(Wagner) 가문에 의해 시작되었습니다.',
      tastingNotes: '다크체리, 블랙베리류의 진한 과실 향이 풍부하고 섬세한 바닐라 노트와 코코아, 다크 초콜릿, 스위트 타바코 등의 복합적인 맛, 부드러운 타닌감, 완벽한 균형미를 자랑하며 입 안에 오래 남아진 여운을 선사합니다.',
      productionMethod: '나파 밸리 16개 sub-appellations 중 개성이 다른 8개의 지역에서 수확한 포도를 블렌딩하여 복합성과 빈티지 기복 없이 한결같은 스타일을 유지합니다.',
      checkpoints: JSON.stringify([
        { label: 'Point 01_', text: '나파 카베르네 소비뇽의 제왕, 케이머스' },
      ]),
      bottleImageUrl: '/images/caymus-nv-cs.jpg',
    },
    update: { updatedAt: new Date() },
  })

  await prisma.wineGrape.upsert({
    where: { wineId_grapeId: { wineId: caymus.id, grapeId: cabSauv.id } },
    create: { wineId: caymus.id, grapeId: cabSauv.id, percentage: 100 },
    update: {},
  })

  await prisma.award.deleteMany({ where: { wineId: caymus.id } })
  await prisma.award.createMany({
    data: [
      { wineId: caymus.id, vintage: 2022, source: 'WS', score: 91 },
      { wineId: caymus.id, vintage: 2021, source: 'WS', score: 93 },
      { wineId: caymus.id, vintage: 2019, source: 'RP', score: 96 },
    ],
  })

  await prisma.wineImage.deleteMany({ where: { wineId: caymus.id } })
  await prisma.wineImage.createMany({
    data: [
      { wineId: caymus.id, url: '/images/caymus-vineyard-1.jpg', type: 'vineyard', order: 0 },
      { wineId: caymus.id, url: '/images/caymus-vineyard-2.jpg', type: 'winery', order: 1 },
    ],
  })

  await prisma.scrapeJob.upsert({
    where: { wineId: caymus.id },
    create: { wineId: caymus.id, status: 'pending' },
    update: {},
  })

  console.log('✅ Seed complete — run the Python scraper to populate real scraped data')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
