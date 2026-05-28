import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

type Params = { slug: string }

export async function GET(_request: NextRequest, { params }: { params: Params }) {
  const wine = await prisma.wine.findUnique({
    where: { slug: params.slug },
    include: {
      winery: true,
      grapes: { include: { grape: true } },
      awards: { orderBy: [{ vintage: 'desc' }, { score: 'desc' }] },
      scrapedData: { orderBy: { scrapedAt: 'desc' } },
    },
  })

  if (!wine) {
    return NextResponse.json({ error: 'Wine not found' }, { status: 404 })
  }

  return NextResponse.json(wine)
}

export async function PUT(request: NextRequest, { params }: { params: Params }) {
  try {
    const body = await request.json()

    const existing = await prisma.wine.findUnique({ where: { slug: params.slug } })
    if (!existing) {
      return NextResponse.json({ error: 'Wine not found' }, { status: 404 })
    }

    const {
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
    } = body

    const updated = await prisma.wine.update({
      where: { slug: params.slug },
      data: {
        ...(nameKo !== undefined && { nameKo }),
        ...(nameEn !== undefined && { nameEn }),
        ...(subtitle !== undefined && { subtitle }),
        ...(wineryId !== undefined && { wineryId }),
        ...(type !== undefined && { type }),
        ...(country !== undefined && { country }),
        ...(regionL1 !== undefined && { regionL1 }),
        ...(regionL2 !== undefined && { regionL2 }),
        ...(volume !== undefined && { volume }),
        ...(servingTempMin !== undefined && { servingTempMin }),
        ...(servingTempMax !== undefined && { servingTempMax }),
        ...(foodPairing !== undefined && { foodPairing: JSON.stringify(foodPairing) }),
        ...(sweetness !== undefined && { sweetness }),
        ...(acidity !== undefined && { acidity }),
        ...(wineBody !== undefined && { body: wineBody }),
        ...(tannin !== undefined && { tannin }),
        ...(description !== undefined && { description }),
        ...(wineryDesc !== undefined && { wineryDesc }),
        ...(wineStory !== undefined && { wineStory }),
        ...(checkpoints !== undefined && { checkpoints: JSON.stringify(checkpoints) }),
        ...(tastingNotes !== undefined && { tastingNotes }),
        ...(productionMethod !== undefined && { productionMethod }),
        ...(bottleImageUrl !== undefined && { bottleImageUrl }),
        ...(images !== undefined && { images: JSON.stringify(images) }),
        ...(isPublished !== undefined && { isPublished }),
      },
      include: {
        winery: true,
        grapes: { include: { grape: true } },
        awards: true,
        scrapedData: { orderBy: { scrapedAt: 'desc' } },
      },
    })

    return NextResponse.json(updated)
  } catch (error) {
    console.error('PUT /api/wines/[slug] error:', error)
    return NextResponse.json({ error: 'Failed to update wine' }, { status: 500 })
  }
}

export async function DELETE(_request: NextRequest, { params }: { params: Params }) {
  try {
    const existing = await prisma.wine.findUnique({ where: { slug: params.slug } })
    if (!existing) {
      return NextResponse.json({ error: 'Wine not found' }, { status: 404 })
    }

    await prisma.wine.update({
      where: { slug: params.slug },
      data: { isPublished: false },
    })

    return NextResponse.json({ message: 'Wine unpublished successfully' })
  } catch (error) {
    console.error('DELETE /api/wines/[slug] error:', error)
    return NextResponse.json({ error: 'Failed to delete wine' }, { status: 500 })
  }
}
