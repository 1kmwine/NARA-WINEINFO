import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

type Params = { wineId: string }

export async function POST(request: NextRequest, { params }: { params: Params }) {
  const wineId = parseInt(params.wineId, 10)
  if (isNaN(wineId)) {
    return NextResponse.json({ error: 'Invalid wineId' }, { status: 400 })
  }

  const wine = await prisma.wine.findUnique({ where: { id: wineId } })
  if (!wine) {
    return NextResponse.json({ error: 'Wine not found' }, { status: 404 })
  }

  try {
    const body = await request.json()
    const { sourceType, sourceName, title, url, content, author, publishedAt, metadata } = body

    if (!sourceType) {
      return NextResponse.json({ error: 'sourceType is required' }, { status: 400 })
    }

    const scraped = await prisma.scrapedData.create({
      data: {
        wineId,
        sourceType,
        sourceName,
        title,
        url,
        content,
        author,
        publishedAt: publishedAt ? new Date(publishedAt) : null,
        metadata: metadata ? JSON.stringify(metadata) : '{}',
      },
    })

    return NextResponse.json(scraped, { status: 201 })
  } catch (error) {
    console.error('POST /api/scrape/[wineId] error:', error)
    return NextResponse.json({ error: 'Failed to save scraped data' }, { status: 500 })
  }
}

export async function GET(_request: NextRequest, { params }: { params: Params }) {
  const wineId = parseInt(params.wineId, 10)
  if (isNaN(wineId)) {
    return NextResponse.json({ error: 'Invalid wineId' }, { status: 400 })
  }

  const scrapedData = await prisma.scrapedData.findMany({
    where: { wineId },
    orderBy: { scrapedAt: 'desc' },
  })

  return NextResponse.json(scrapedData)
}

export async function DELETE(request: NextRequest, { params }: { params: Params }) {
  const wineId = parseInt(params.wineId, 10)
  if (isNaN(wineId)) {
    return NextResponse.json({ error: 'Invalid wineId' }, { status: 400 })
  }

  const { searchParams } = new URL(request.url)
  const sourceType = searchParams.get('sourceType')

  const where: { wineId: number; sourceType?: string } = { wineId }
  if (sourceType) where.sourceType = sourceType

  const { count } = await prisma.scrapedData.deleteMany({ where })

  return NextResponse.json({ deleted: count })
}
