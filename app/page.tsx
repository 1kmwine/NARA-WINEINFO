import Link from 'next/link'
import { prisma } from '@/lib/db'
import WineCard from '@/components/WineCard'
import QuickNavLinks from '@/components/QuickNavLinks'
import { wineTypeLabel } from '@/lib/utils'

export const dynamic = 'force-dynamic'

async function getFeaturedWines() {
  try {
    return await prisma.wine.findMany({
      where: { isPublished: true },
      take: 8,
      orderBy: { createdAt: 'desc' },
      include: {
        winery: { select: { nameKo: true, nameEn: true } },
        grapes: { include: { grape: true } },
      },
    })
  } catch {
    return []
  }
}

async function getStats() {
  try {
    const [wineCount, wineryCount] = await Promise.all([
      prisma.wine.count({ where: { isPublished: true } }),
      prisma.winery.count(),
    ])
    return { wineCount, wineryCount }
  } catch {
    return { wineCount: 0, wineryCount: 0 }
  }
}

export default async function HomePage() {
  const [featuredWines, stats] = await Promise.all([getFeaturedWines(), getStats()])

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative py-20 px-4 text-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #3c0d18 0%, #7b2335 50%, #a83245 100%)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)'
          }} />
        </div>
        <div className="relative max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            NARA WINEINFO
          </h1>
          <p className="text-lg text-red-200 mb-8">
            나라셀라의 모든 와인 정보를 한눈에 — 2,000여 종의 상세 정보
          </p>

          {/* Search bar */}
          <form action="/wines" method="GET" className="flex max-w-xl mx-auto gap-2">
            <input
              type="text"
              name="q"
              placeholder="와인명, 브랜드, 품종 검색..."
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-sm font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              style={{ color: '#7b2335' }}
            >
              검색
            </button>
          </form>

          {/* Stats */}
          <div className="flex justify-center gap-8 mt-10 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold">{stats.wineCount.toLocaleString()}</div>
              <div className="text-xs text-red-200 mt-1">등록된 와인</div>
            </div>
            <div className="w-px bg-red-400 opacity-50" />
            <div className="text-center">
              <div className="text-3xl font-bold">{stats.wineryCount.toLocaleString()}</div>
              <div className="text-xs text-red-200 mt-1">와이너리</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick nav */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <QuickNavLinks />
        </div>
      </section>

      {/* Featured wines */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="section-header">
          <span className="section-title">최근 등록 와인</span>
        </div>

        {featuredWines.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {featuredWines.map((wine) => (
              <WineCard key={wine.id} wine={wine} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-400">
            <p className="text-4xl mb-3">🍾</p>
            <p className="text-lg font-medium text-gray-600">아직 등록된 와인이 없습니다</p>
            <p className="text-sm mt-1">씨드 데이터를 실행하거나 API를 통해 와인을 추가하세요</p>
          </div>
        )}

        <div className="text-center mt-8">
          <Link href="/wines" className="btn-outline">
            모든 와인 보기 →
          </Link>
        </div>
      </section>

      {/* Browse by category */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header">
            <span className="section-title">카테고리별 탐색</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <Link href="/brands" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-primary hover:shadow-md transition-all">
              <div className="text-3xl mb-3">🏰</div>
              <h3 className="font-semibold text-gray-800 group-hover:text-primary">브랜드별</h3>
              <p className="text-sm text-gray-500 mt-1">와이너리·브랜드로 탐색</p>
            </Link>
            <Link href="/regions" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-primary hover:shadow-md transition-all">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="font-semibold text-gray-800 group-hover:text-primary">지역별</h3>
              <p className="text-sm text-gray-500 mt-1">산지·원산지별로 탐색</p>
            </Link>
            <Link href="/varieties" className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-primary hover:shadow-md transition-all">
              <div className="text-3xl mb-3">🍇</div>
              <h3 className="font-semibold text-gray-800 group-hover:text-primary">품종별</h3>
              <p className="text-sm text-gray-500 mt-1">포도 품종으로 탐색</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
