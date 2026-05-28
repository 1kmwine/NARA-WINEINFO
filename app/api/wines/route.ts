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
