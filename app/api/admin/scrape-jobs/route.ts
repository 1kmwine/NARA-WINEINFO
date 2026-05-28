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
