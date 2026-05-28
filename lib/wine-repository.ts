import type { Wine, Winery, Grape, Award, WineImage, ScrapedData, ScrapeJob } from '@prisma/client'
import type { WineFilter, WineInput, PaginatedResult } from './types'
import { prisma } from './db'

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
  awards: { orderBy: [{ vintage: 'desc' as const }, { score: 'desc' as const }] as { vintage?: 'desc' | 'asc'; score?: 'desc' | 'asc' }[] },
  images: { orderBy: { order: 'asc' as const } },
  scrapedData: { orderBy: { scrapedAt: 'desc' as const } },
  scrapeJob: true,
}

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
