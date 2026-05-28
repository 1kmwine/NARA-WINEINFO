import { NextRequest, NextResponse } from 'next/server'
import { wineRepo } from '@/lib/wine-repository'

export async function GET(_req: NextRequest, { params }: { params: { slug: string } }) {
  const wine = await wineRepo.findBySlug(params.slug)
  if (!wine) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(wine)
}
