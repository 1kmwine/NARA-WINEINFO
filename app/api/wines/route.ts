import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const q = searchParams.get('q')
  const type = searchParams.get('type')
  const country = searchParams.get('country')
  const variety = searchParams.get('variety')
  const page = Math.max(1, parseInt(searchParams.get('page') ?? '1', 10))
  const limit = Math.min(100, parseInt(searchParams.get('limit') ?? '24', 10))
  const skip = (page - 1) * limit

  const where: Record<string, unknown> = { isPublished: true }

  if (q) {
    where.OR = [
      { nameKo: { contains: q } },
      { nameEn: { contains: q } },
      { winery: { nameKo: { contains: q } } },
      { winery: { nameEn: { contains: q } } },
    ]
  }
  if (type) where.type = type
  if (country) where.country = { contains: country }
  if (variety) {
    where.grapes = {
      some: {
        grape: {
          OR: [{ nameEn: { contains: variety } }, { nameKo: { contains: variety } }],
        },
      },
    }
  }

  const [wines, total] = await Promise.all([
    prisma.wine.findMany({
      where,
      skip,
      take: limit,
      orderBy: { nameKo: 'asc' },
      include: {
        winery: { select: { id: true, nameKo: true, nameEn: true } },
        grapes: { include: { grape: true } },
        awards: { orderBy: [{ vintage: 'desc' }, { score: 'desc' }] },
      },
    }),
    prisma.wine.count({ where }),
  ])

  return NextResponse.json({
    data: wines,
    meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      slug,
      nameKo,
      nameEn,
      subtitle,
      wineryId,
      type,
      country,
      regionL1,
      regionL2,
      volume,
      servingTempMin,
      servingTempMax,
      foodPairing,
      sweetness,
      acidity,
      body: wineBody,
      tannin,
      description,
      wineryDesc,
      wineStory,
      checkpoints,
      tastingNotes,
      productionMethod,
      bottleImageUrl,
      images,
      isPublished,
      grapes,
    } = body

    if (!slug || !nameKo || !nameEn || !type || !country || !regionL1) {
      return NextResponse.json(
        { error: 'slug, nameKo, nameEn, type, country, regionL1 are required' },
        { status: 400 }
      )
    }

    const wine = await prisma.wine.create({
      data: {
        slug,
        nameKo,
        nameEn,
        subtitle,
        wineryId,
        type,
        country,
        regionL1,
        regionL2,
        volume: volume ?? 750,
        servingTempMin,
        servingTempMax,
        foodPairing: JSON.stringify(foodPairing ?? []),
        sweetness,
        acidity,
        body: wineBody,
        tannin,
        description,
        wineryDesc,
        wineStory,
        checkpoints: JSON.stringify(checkpoints ?? []),
        tastingNotes,
        productionMethod,
        bottleImageUrl,
        images: JSON.stringify(images ?? []),
        isPublished: isPublished ?? true,
        grapes: grapes
          ? {
              create: grapes.map((g: { grapeId: number; percentage?: number }) => ({
                grapeId: g.grapeId,
                percentage: g.percentage,
              })),
            }
          : undefined,
      },
      include: {
        winery: true,
        grapes: { include: { grape: true } },
      },
    })

    return NextResponse.json(wine, { status: 201 })
  } catch (error) {
    console.error('POST /api/wines error:', error)
    return NextResponse.json({ error: 'Failed to create wine' }, { status: 500 })
  }
}
