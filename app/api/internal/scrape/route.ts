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
  const expectedKey = process.env.INTERNAL_API_KEY
  if (expectedKey && apiKey !== expectedKey) {
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
    } catch (err) {
      console.error(`[scrape] upsert failed for url=${item.url}:`, err)
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
