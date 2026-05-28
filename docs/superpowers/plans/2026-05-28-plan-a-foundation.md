# Wine Scraper Rebuild — Plan A: Foundation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 기존 코드를 완전히 교체하는 새 DB 스키마, Prisma 마이그레이션, 데이터 소스 추상화 레이어, 유틸리티를 구축한다.

**Architecture:** Prisma ORM + SQLite(개발)/PostgreSQL(운영). `lib/wine-repository.ts` 인터페이스로 데이터 소스를 추상화해 향후 1KMWINE MariaDB 교체를 가능하게 한다. 기존 파일은 모두 삭제 후 재작성.

**Tech Stack:** Next.js 14, TypeScript, Prisma 5.22.0, SQLite, ts-node

---

## 파일 맵

| 동작 | 경로 | 역할 |
|---|---|---|
| 교체 | `prisma/schema.prisma` | 새 스키마 (WineImage, ScrapeJob 추가) |
| 교체 | `prisma/seed.ts` | 케이머스 샘플 데이터 |
| 교체 | `lib/db.ts` | Prisma 클라이언트 싱글톤 |
| 신규 | `lib/wine-repository.ts` | WineRepository 인터페이스 + PrismaWineRepository 구현 |
| 교체 | `lib/utils.ts` | 헬퍼 함수 |
| 신규 | `lib/types.ts` | 공유 TypeScript 타입 |

---

## Task 1: 기존 파일 정리 및 새 Prisma 스키마 작성

**Files:**
- Modify: `prisma/schema.prisma`
- Delete: `prisma/dev.db` (스키마 변경으로 재생성 필요)

- [ ] **Step 1: 기존 dev.db 삭제**

```bash
rm -f prisma/dev.db
```

- [ ] **Step 2: schema.prisma 전체 교체**

`prisma/schema.prisma`를 다음으로 교체:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model Winery {
  id          Int      @id @default(autoincrement())
  nameKo      String
  nameEn      String
  country     String
  region      String?
  description String?
  history     String?
  logoUrl     String?
  websiteUrl  String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  wines       Wine[]
}

model Grape {
  id     Int         @id @default(autoincrement())
  nameKo String
  nameEn String
  wines  WineGrape[]
}

model Wine {
  id               Int          @id @default(autoincrement())
  slug             String       @unique
  nameKo           String
  nameEn           String
  subtitle         String?
  erpCode          String?
  wineryId         Int?
  winery           Winery?      @relation(fields: [wineryId], references: [id])
  type             String
  country          String
  regionL1         String
  regionL2         String?
  volume           Int          @default(750)
  servingTempMin   Int?
  servingTempMax   Int?
  foodPairing      String       @default("[]")
  sweetness        Int?
  acidity          Int?
  body             Int?
  tannin           Int?
  fizz             Int?
  description      String?
  wineStory        String?
  tastingNotes     String?
  productionMethod String?
  checkpoints      String       @default("[]")
  bottleImageUrl   String?
  isPublished      Boolean      @default(true)
  createdAt        DateTime     @default(now())
  updatedAt        DateTime     @updatedAt
  grapes           WineGrape[]
  awards           Award[]
  images           WineImage[]
  scrapedData      ScrapedData[]
  scrapeJob        ScrapeJob?

  @@index([type])
  @@index([country])
  @@index([regionL1])
  @@index([wineryId])
  @@index([isPublished])
}

model WineImage {
  id     Int    @id @default(autoincrement())
  wineId Int
  wine   Wine   @relation(fields: [wineId], references: [id], onDelete: Cascade)
  url    String
  type   String @default("other")
  order  Int    @default(0)
  alt    String?

  @@index([wineId])
}

model WineGrape {
  wineId     Int
  grapeId    Int
  percentage Int?
  wine       Wine  @relation(fields: [wineId], references: [id], onDelete: Cascade)
  grape      Grape @relation(fields: [grapeId], references: [id])

  @@id([wineId, grapeId])
}

model Award {
  id      Int    @id @default(autoincrement())
  wineId  Int
  wine    Wine   @relation(fields: [wineId], references: [id], onDelete: Cascade)
  vintage Int
  source  String
  score   Int

  @@index([wineId])
}

model ScrapedData {
  id           Int       @id @default(autoincrement())
  wineId       Int
  wine         Wine      @relation(fields: [wineId], references: [id], onDelete: Cascade)
  sourceType   String
  sourceName   String?
  title        String?
  url          String?   @unique
  content      String?
  summary      String?
  author       String?
  thumbnailUrl String?
  publishedAt  DateTime?
  scrapedAt    DateTime  @default(now())
  metadata     String    @default("{}")

  @@index([wineId])
  @@index([wineId, sourceType])
}

model ScrapeJob {
  id          Int       @id @default(autoincrement())
  wineId      Int       @unique
  wine        Wine      @relation(fields: [wineId], references: [id], onDelete: Cascade)
  status      String    @default("pending")
  lastRunAt   DateTime?
  nextRunAt   DateTime?
  errorMsg    String?
  resultCount Int       @default(0)
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}
```

- [ ] **Step 3: DB 생성 및 클라이언트 재생성**

```bash
npx prisma db push
npx prisma generate
```

예상 출력: `✓ Generated Prisma Client` — 오류 없음

- [ ] **Step 4: 스키마 검증**

```bash
npx prisma validate
```

예상 출력: `The schema at prisma/schema.prisma is valid`

- [ ] **Step 5: 커밋**

```bash
git add prisma/schema.prisma
git commit -m "feat(db): new schema with WineImage, ScrapeJob, indexes"
```

---

## Task 2: 공유 타입 정의

**Files:**
- Create: `lib/types.ts`

- [ ] **Step 1: `lib/types.ts` 작성**

```typescript
export type WineType = 'red' | 'white' | 'rose' | 'sparkling' | 'dessert' | 'fortified'

export type ImageType = 'bottle' | 'winery' | 'vineyard' | 'label' | 'other'

export type ScrapeStatus = 'pending' | 'running' | 'done' | 'failed'

export type SourceType =
  | 'naver_blog'
  | 'naver_cafe'
  | 'youtube'
  | 'instagram'
  | 'wine_searcher'
  | 'winery_official'
  | 'article_kr'
  | 'article_global'
  | 'other'

export interface CheckPoint {
  label: string
  text: string
}

export interface WineFilter {
  type?: WineType
  country?: string
  regionL1?: string
  wineryId?: number
  grapeId?: number
  q?: string
  page?: number
  pageSize?: number
  isPublished?: boolean
}

export interface WineInput {
  slug: string
  nameKo: string
  nameEn: string
  subtitle?: string
  erpCode?: string
  wineryName?: string
  type: WineType
  country: string
  regionL1: string
  regionL2?: string
  volume?: number
  servingTempMin?: number
  servingTempMax?: number
  foodPairing?: string[]
  sweetness?: number
  acidity?: number
  body?: number
  tannin?: number
  fizz?: number
  description?: string
  wineStory?: string
  tastingNotes?: string
  productionMethod?: string
  checkpoints?: CheckPoint[]
  bottleImageUrl?: string
  grapes?: Array<{ nameKo: string; nameEn: string; percentage?: number }>
  awards?: Array<{ vintage: number; source: string; score: number }>
}

export interface PaginatedResult<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}
```

- [ ] **Step 2: 커밋**

```bash
git add lib/types.ts
git commit -m "feat(types): shared TypeScript types"
```

---

## Task 3: Prisma 클라이언트 싱글톤 및 유틸리티

**Files:**
- Replace: `lib/db.ts`
- Replace: `lib/utils.ts`

- [ ] **Step 1: `lib/db.ts` 교체**

```typescript
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
```

- [ ] **Step 2: `lib/utils.ts` 교체**

```typescript
import type { WineType, SourceType, CheckPoint } from './types'

export function wineTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    red: '레드', white: '화이트', rose: '로제',
    sparkling: '스파클링', dessert: '디저트', fortified: '주정강화',
  }
  return labels[type] ?? type
}

export function wineTypeColor(type: string): string {
  const colors: Record<string, string> = {
    red: '#7b2335', white: '#b8860b', rose: '#c06080',
    sparkling: '#2c6e9b', dessert: '#8b6914', fortified: '#5a3e1b',
  }
  return colors[type] ?? '#666'
}

export function sourceTypeLabel(type: SourceType | string): string {
  const labels: Record<string, string> = {
    naver_blog: '네이버 블로그',
    naver_cafe: '와쌉 카페',
    youtube: 'YouTube',
    instagram: '인스타그램',
    wine_searcher: '와인서쳐',
    winery_official: '와이너리 공식',
    article_kr: '국내 기사',
    article_global: '해외 기사',
    other: '기타',
  }
  return labels[type] ?? type
}

export function sourceTypeIcon(type: SourceType | string): string {
  const icons: Record<string, string> = {
    naver_blog: '📝', naver_cafe: '☕', youtube: '📺',
    instagram: '📸', wine_searcher: '🔍', winery_official: '🏰',
    article_kr: '📰', article_global: '🌐', other: '📌',
  }
  return icons[type] ?? '📌'
}

export function formatVolume(ml: number): string {
  return ml >= 1000 ? `${ml / 1000}L` : `${ml}ml`
}

export function formatServingTemp(min?: number | null, max?: number | null): string {
  if (!min && !max) return '-'
  if (min && max) return `${min} ~ ${max} °C`
  return `${min ?? max} °C`
}

export function formatRegion(country: string, r1: string, r2?: string | null): string {
  return [country, r1, r2].filter(Boolean).join(' > ')
}

export function parseJsonField<T>(json: string | null | undefined, fallback: T): T {
  if (!json) return fallback
  try { return JSON.parse(json) as T } catch { return fallback }
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function formatDate(date: Date | string | null | undefined): string {
  if (!date) return ''
  return new Date(date).toLocaleDateString('ko-KR', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}
```

- [ ] **Step 3: 커밋**

```bash
git add lib/db.ts lib/utils.ts
git commit -m "feat(lib): update db singleton and utils"
```

---

## Task 4: WineRepository 인터페이스 및 Prisma 구현체

**Files:**
- Create: `lib/wine-repository.ts`

- [ ] **Step 1: `lib/wine-repository.ts` 작성**

```typescript
import type { Wine, Winery, Grape, Award, WineImage, ScrapedData, ScrapeJob } from '@prisma/client'
import type { WineFilter, WineInput, PaginatedResult } from './types'
import { prisma } from './db'
import { slugify } from './utils'

export type WineWithRelations = Wine & {
  winery: Winery | null
  grapes: Array<{ grape: Grape; percentage: number | null }>
  awards: Award[]
  images: WineImage[]
  scrapedData: ScrapedData[]
  scrapeJob: ScrapeJob | null
}

export interface WineRepository {
  findBySlug(slug: string): Promise<WineWithRelations | null>
  findMany(filter: WineFilter): Promise<PaginatedResult<WineWithRelations>>
  upsert(data: WineInput): Promise<Wine>
  findAllSlugs(): Promise<string[]>
  listCountries(): Promise<string[]>
  listRegions(country?: string): Promise<Array<{ country: string; regionL1: string; count: number }>>
  listWineries(): Promise<Winery[]>
  listGrapes(): Promise<Grape[]>
}

const WINE_INCLUDE = {
  winery: true,
  grapes: { include: { grape: true }, orderBy: { percentage: 'desc' as const } },
  awards: { orderBy: [{ vintage: 'desc' as const }, { score: 'desc' as const }] },
  images: { orderBy: { order: 'asc' as const } },
  scrapedData: { orderBy: { scrapedAt: 'desc' as const } },
  scrapeJob: true,
} as const

export class PrismaWineRepository implements WineRepository {
  async findBySlug(slug: string): Promise<WineWithRelations | null> {
    return prisma.wine.findUnique({
      where: { slug, isPublished: true },
      include: WINE_INCLUDE,
    }) as Promise<WineWithRelations | null>
  }

  async findMany(filter: WineFilter): Promise<PaginatedResult<WineWithRelations>> {
    const { type, country, regionL1, wineryId, q, page = 1, pageSize = 24, isPublished = true } = filter

    const where = {
      isPublished,
      ...(type && { type }),
      ...(country && { country }),
      ...(regionL1 && { regionL1 }),
      ...(wineryId && { wineryId }),
      ...(q && {
        OR: [
          { nameKo: { contains: q } },
          { nameEn: { contains: q } },
          { winery: { nameKo: { contains: q } } },
        ],
      }),
    }

    const [data, total] = await Promise.all([
      prisma.wine.findMany({
        where,
        include: WINE_INCLUDE,
        orderBy: { nameKo: 'asc' },
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
      prisma.wine.count({ where }),
    ])

    return { data: data as WineWithRelations[], total, page, pageSize, totalPages: Math.ceil(total / pageSize) }
  }

  async upsert(data: WineInput): Promise<Wine> {
    const { grapes = [], awards = [], wineryName, ...wineData } = data

    let wineryId: number | undefined
    if (wineryName) {
      const winery = await prisma.winery.upsert({
        where: { nameKo: wineryName } as never,
        create: { nameKo: wineryName, nameEn: wineryName, country: wineData.country },
        update: {},
      })
      wineryId = winery.id
    }

    const wine = await prisma.wine.upsert({
      where: { slug: wineData.slug },
      create: {
        ...wineData,
        wineryId,
        foodPairing: JSON.stringify(wineData.foodPairing ?? []),
        checkpoints: JSON.stringify(wineData.checkpoints ?? []),
      },
      update: {
        ...wineData,
        wineryId,
        foodPairing: JSON.stringify(wineData.foodPairing ?? []),
        checkpoints: JSON.stringify(wineData.checkpoints ?? []),
        updatedAt: new Date(),
      },
    })

    if (grapes.length > 0) {
      await prisma.wineGrape.deleteMany({ where: { wineId: wine.id } })
      for (const g of grapes) {
        const grape = await prisma.grape.upsert({
          where: { nameKo: g.nameKo } as never,
          create: { nameKo: g.nameKo, nameEn: g.nameEn },
          update: {},
        })
        await prisma.wineGrape.create({
          data: { wineId: wine.id, grapeId: grape.id, percentage: g.percentage },
        })
      }
    }

    if (awards.length > 0) {
      await prisma.award.deleteMany({ where: { wineId: wine.id } })
      await prisma.award.createMany({
        data: awards.map(a => ({ ...a, wineId: wine.id })),
      })
    }

    return wine
  }

  async findAllSlugs(): Promise<string[]> {
    const wines = await prisma.wine.findMany({ where: { isPublished: true }, select: { slug: true } })
    return wines.map(w => w.slug)
  }

  async listCountries(): Promise<string[]> {
    const result = await prisma.wine.groupBy({ by: ['country'], where: { isPublished: true }, orderBy: { country: 'asc' } })
    return result.map(r => r.country)
  }

  async listRegions(country?: string): Promise<Array<{ country: string; regionL1: string; count: number }>> {
    const result = await prisma.wine.groupBy({
      by: ['country', 'regionL1'],
      where: { isPublished: true, ...(country && { country }) },
      _count: { id: true },
      orderBy: [{ country: 'asc' }, { regionL1: 'asc' }],
    })
    return result.map(r => ({ country: r.country, regionL1: r.regionL1, count: r._count.id }))
  }

  async listWineries(): Promise<Winery[]> {
    return prisma.winery.findMany({ orderBy: { nameKo: 'asc' } })
  }

  async listGrapes(): Promise<Grape[]> {
    return prisma.grape.findMany({ orderBy: { nameKo: 'asc' } })
  }
}

export const wineRepo: WineRepository = new PrismaWineRepository()
```

- [ ] **Step 2: Grape 모델에 nameKo unique 제약 추가 (upsert용)**

`prisma/schema.prisma`의 Grape 모델에 `@@unique([nameKo])` 추가:

```prisma
model Grape {
  id     Int         @id @default(autoincrement())
  nameKo String
  nameEn String
  wines  WineGrape[]

  @@unique([nameKo])
}
```

마찬가지로 Winery에도:

```prisma
model Winery {
  // ... 기존 필드들 ...
  @@unique([nameKo])
}
```

- [ ] **Step 3: DB 재동기화**

```bash
npx prisma db push
npx prisma generate
```

- [ ] **Step 4: TypeScript 컴파일 확인**

```bash
npx tsc --noEmit
```

예상 출력: 오류 없음 (경고는 무시)

- [ ] **Step 5: 커밋**

```bash
git add prisma/schema.prisma lib/wine-repository.ts
git commit -m "feat(repository): WineRepository interface + PrismaWineRepository"
```

---

## Task 5: 시드 데이터 (케이머스 + 오퍼스 원)

**Files:**
- Replace: `prisma/seed.ts`

- [ ] **Step 1: `prisma/seed.ts` 전체 교체**

```typescript
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

  await prisma.wineImage.createMany({
    data: [
      { wineId: caymus.id, url: '/images/caymus-vineyard-1.jpg', type: 'vineyard', order: 0 },
      { wineId: caymus.id, url: '/images/caymus-vineyard-2.jpg', type: 'winery', order: 1 },
    ],
    skipDuplicates: true,
  })

  await prisma.scrapeJob.upsert({
    where: { wineId: caymus.id },
    create: { wineId: caymus.id, status: 'pending' },
    update: {},
  })

  await prisma.scrapedData.upsert({
    where: { url: 'https://blog.naver.com/sample/caymus-review-2024' },
    create: {
      wineId: caymus.id,
      sourceType: 'naver_blog',
      sourceName: '와인러버김씨',
      title: '케이머스 나파 밸리 카베르네 소비뇽 시음 후기',
      url: 'https://blog.naver.com/sample/caymus-review-2024',
      summary: '케이머스 특유의 진한 블랙프루트와 부드러운 타닌이 인상적인 와인. 스테이크와 환상적인 페어링.',
      author: '와인러버김씨',
      publishedAt: new Date('2024-11-15'),
    },
    update: {},
  })

  console.log('✅ Seed complete — Caymus sample data inserted')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
```

- [ ] **Step 2: 시드 실행**

```bash
npm run db:seed
```

예상 출력: `✅ Seed complete — Caymus sample data inserted`

- [ ] **Step 3: DB 확인**

```bash
npx prisma studio
```

브라우저에서 `http://localhost:5555` 열어 Wine, WineImage, ScrapeJob 테이블 확인. 확인 후 Ctrl+C로 종료.

- [ ] **Step 4: 커밋**

```bash
git add prisma/seed.ts prisma/schema.prisma
git commit -m "feat(seed): update seed data for new schema"
```

---

## Task 6: API 라우트 재작성

**Files:**
- Replace: `app/api/wines/route.ts`
- Replace: `app/api/wines/[slug]/route.ts`
- Replace: `app/api/scrape/[wineId]/route.ts`
- Create: `app/api/admin/scrape-jobs/route.ts`
- Create: `app/api/internal/scrape/route.ts`

- [ ] **Step 1: `app/api/wines/route.ts` 교체**

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { wineRepo } from '@/lib/wine-repository'
import type { WineFilter, WineType } from '@/lib/types'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const filter: WineFilter = {
    type: searchParams.get('type') as WineType | undefined || undefined,
    country: searchParams.get('country') || undefined,
    regionL1: searchParams.get('regionL1') || undefined,
    q: searchParams.get('q') || undefined,
    page: Number(searchParams.get('page') ?? 1),
    pageSize: Number(searchParams.get('pageSize') ?? 24),
  }
  try {
    const result = await wineRepo.findMany(filter)
    return NextResponse.json(result)
  } catch (e) {
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
```

- [ ] **Step 2: `app/api/wines/[slug]/route.ts` 교체**

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { wineRepo } from '@/lib/wine-repository'

export async function GET(_req: NextRequest, { params }: { params: { slug: string } }) {
  const wine = await wineRepo.findBySlug(params.slug)
  if (!wine) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(wine)
}
```

- [ ] **Step 3: `app/api/internal/scrape/route.ts` 생성**

스크래퍼 Python 스크립트가 수집한 데이터를 저장하는 내부 API:

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import crypto from 'crypto'

interface ScrapedItem {
  wineId: number
  sourceType: string
  sourceName?: string
  title?: string
  url?: string
  content?: string
  summary?: string
  author?: string
  thumbnailUrl?: string
  publishedAt?: string
  metadata?: Record<string, unknown>
}

function makeUrl(item: ScrapedItem): string {
  if (item.url) return item.url
  const hash = crypto
    .createHash('md5')
    .update(`${item.wineId}:${item.sourceType}:${item.title ?? ''}`)
    .digest('hex')
  return `internal://${item.sourceType}/${hash}`
}

export async function POST(req: NextRequest) {
  const apiKey = req.headers.get('x-internal-key')
  if (apiKey !== process.env.INTERNAL_API_KEY && process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json() as { items: ScrapedItem[]; wineId: number }
  const { items, wineId } = body

  let created = 0
  let skipped = 0

  for (const item of items) {
    const url = makeUrl(item)
    try {
      await prisma.scrapedData.upsert({
        where: { url },
        create: {
          wineId,
          sourceType: item.sourceType,
          sourceName: item.sourceName,
          title: item.title,
          url,
          content: item.content,
          summary: item.summary ?? (item.content?.slice(0, 300) ?? null),
          author: item.author,
          thumbnailUrl: item.thumbnailUrl,
          publishedAt: item.publishedAt ? new Date(item.publishedAt) : null,
          metadata: JSON.stringify(item.metadata ?? {}),
        },
        update: { scrapedAt: new Date() },
      })
      created++
    } catch {
      skipped++
    }
  }

  await prisma.scrapeJob.upsert({
    where: { wineId },
    create: { wineId, status: 'done', lastRunAt: new Date(), resultCount: created },
    update: { status: 'done', lastRunAt: new Date(), resultCount: { increment: created } },
  })

  return NextResponse.json({ created, skipped })
}
```

- [ ] **Step 4: `app/api/admin/scrape-jobs/route.ts` 생성**

```typescript
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET() {
  const jobs = await prisma.scrapeJob.findMany({
    include: { wine: { select: { nameKo: true, slug: true } } },
    orderBy: { updatedAt: 'desc' },
    take: 100,
  })
  return NextResponse.json(jobs)
}
```

- [ ] **Step 5: 빌드 확인**

```bash
npm run build 2>&1 | tail -20
```

예상 출력: 오류 없이 모든 라우트 컴파일 완료

- [ ] **Step 6: 커밋**

```bash
git add app/api/
git commit -m "feat(api): rebuild wine, scrape, admin API routes"
```

---

## Task 7: .env 및 package.json 정비

**Files:**
- Modify: `package.json`
- Modify: `.env.example`

- [ ] **Step 1: `package.json`에 xlsx 의존성 추가**

```bash
npm install xlsx
```

- [ ] ] **Step 2: `.env.example` 업데이트**

```bash
cat > .env.example << 'EOF'
# SQLite (로컬 개발)
DATABASE_URL="file:./prisma/dev.db"

# PostgreSQL (운영)
# DATABASE_URL="postgresql://user:password@localhost:5432/nara_wineinfo"

# 스크래퍼 → API 인증 (운영 환경)
INTERNAL_API_KEY="change-me-in-production"

# 앱 기본 URL
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
EOF
```

- [ ] **Step 3: 최종 빌드 + 시드 확인**

```bash
npm run build 2>&1 | grep -E "error|Error|✓|✗" | head -20
npm run db:seed
```

- [ ] **Step 4: 전체 커밋**

```bash
git add package.json package-lock.json .env.example
git commit -m "feat(config): add xlsx dep, update env example"
git push origin main
```

---

## Plan A 완료 기준

- [ ] `npx prisma validate` 오류 없음
- [ ] `npm run build` 오류 없음
- [ ] `npm run db:seed` 성공
- [ ] `GET /api/wines` 응답 정상 (케이머스 데이터 반환)
- [ ] `GET /api/wines/caymus-napa-valley-cabernet-sauvignon` 응답 정상
