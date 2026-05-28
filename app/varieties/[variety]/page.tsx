import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { prisma } from '@/lib/db'
import WineCard from '@/components/WineCard'

type Params = { variety: string }

async function getVarietyWines(variety: string) {
  const decoded = decodeURIComponent(variety)

  // Find the grape first
  const grape = await prisma.grape.findFirst({
    where: {
      OR: [{ nameEn: decoded }, { nameKo: decoded }],
    },
  })

  if (!grape) return null

  // Get wines via WineGrape join
  const wineGrapes = await prisma.wineGrape.findMany({
    where: { grapeId: grape.id },
    include: {
      wine: {
        include: {
          winery: { select: { nameKo: true, nameEn: true } },
          grapes: { include: { grape: true } },
        },
      },
    },
  })

  const wines = wineGrapes
    .map((wg) => wg.wine)
    .filter((wine) => wine.isPublished)
    .sort((a, b) => a.nameKo.localeCompare(b.nameKo))

  return { grape, wines }
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const variety = decodeURIComponent(params.variety)
  return {
    title: `${variety} 와인`,
    description: `${variety} 품종의 와인 목록`,
  }
}

export default async function VarietyPage({ params }: { params: Params }) {
  const data = await getVarietyWines(params.variety)
  if (!data) notFound()

  const { grape, wines } = data

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
        <Link href="/" className="hover:text-primary">홈</Link>
        <span>/</span>
        <Link href="/varieties" className="hover:text-primary">품종</Link>
        <span>/</span>
        <span className="text-gray-600">{grape.nameEn}</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">{grape.nameEn}</h1>
        <p className="text-lg text-gray-500">{grape.nameKo}</p>
        <p className="text-sm text-gray-400 mt-1">{wines.length}종의 와인</p>
      </div>

      {wines.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {wines.map((wine) => (
            <WineCard key={wine.id} wine={wine} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-gray-400">
          <p className="text-lg">이 품종의 와인이 없습니다</p>
        </div>
      )}
    </div>
  )
}
