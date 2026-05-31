import Link from 'next/link'
import { prisma } from '@/lib/db'
import WineCard from '@/components/WineCard'

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

const TYPE_LABELS: Record<string, string> = {
  red: '레드',
  white: '화이트',
  rose: '로제',
  sparkling: '스파클링',
  dessert: '디저트',
}

export default async function HomePage() {
  const [featuredWines, stats] = await Promise.all([getFeaturedWines(), getStats()])

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="max-w-[680px] mx-auto px-8 py-20 text-center">
        <p className="text-[11px] font-medium tracking-[0.04em] uppercase text-[#b3b3b3] mb-5">
          Korean Wine Intelligence
        </p>
        <h1 className="text-[28px] font-bold text-[#111111] tracking-[-0.025em] leading-[1.25] mb-4">
          세계 와인, 한눈에
        </h1>
        <p className="text-[16px] text-[#6b6b6b] tracking-[-0.01em] leading-[1.75] mb-10">
          스크래핑 · AI 분석 · 전문 큐레이션
        </p>
        <form
          action="/wines"
          method="GET"
          className="flex max-w-[420px] mx-auto overflow-hidden rounded-md"
          style={{ border: '1.5px solid #e8e8e8' }}
        >
          <input
            type="text"
            name="q"
            placeholder="와인명, 와이너리, 품종…"
            className="flex-1 text-sm text-[#111111] bg-white border-none outline-none px-4 py-3"
          />
          <button
            type="submit"
            className="text-[11px] font-medium tracking-[0.04em] uppercase text-white px-6 whitespace-nowrap transition-colors bg-[#1B4332] hover:bg-[#2D6A4F]"
          >
            검색
          </button>
        </form>

        {stats.wineCount > 0 && (
          <p className="text-xs text-[#b3b3b3] mt-6">
            {stats.wineCount.toLocaleString()}종 와인 · {stats.wineryCount.toLocaleString()}개 와이너리
          </p>
        )}
      </div>

      {/* Featured wines */}
      <div className="border-t border-[#e8e8e8] bg-[#f9f9f9]">
        <div className="max-w-[1040px] mx-auto px-8 py-12">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-[18px] font-semibold text-[#111111] tracking-[-0.015em]">추천 와인</h2>
            <Link
              href="/wines"
              className="text-[13px] transition-colors"
              style={{ color: '#1B4332' }}
            >
              전체 보기 →
            </Link>
          </div>

          {featuredWines.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {featuredWines.map(wine => (
                <WineCard key={wine.id} wine={wine} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-[#b3b3b3]">
              <p className="text-4xl mb-3">🍾</p>
              <p className="text-sm">아직 등록된 와인이 없습니다</p>
            </div>
          )}
        </div>
      </div>

      {/* Type browser */}
      <div className="max-w-[1040px] mx-auto px-8 py-12 pb-16">
        <h2 className="text-[18px] font-semibold text-[#111111] tracking-[-0.015em] mb-5">
          타입별 탐색
        </h2>
        <div className="flex flex-wrap gap-2.5">
          {Object.entries(TYPE_LABELS).map(([value, label]) => (
            <Link
              key={value}
              href={`/wines?type=${value}`}
              className="text-[13px] text-[#3d3d3d] bg-white border border-[#e8e8e8] rounded-full px-5 py-2 hover:border-[#1B4332] hover:text-[#1B4332] transition-all"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Quick nav */}
        <div className="flex flex-wrap gap-2.5 mt-6 pt-6 border-t border-[#e8e8e8]">
          {[
            { href: '/brands', label: '브랜드별 탐색' },
            { href: '/regions', label: '지역별 탐색' },
            { href: '/varieties', label: '품종별 탐색' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[13px] text-[#6b6b6b] hover:text-[#111111] transition-colors"
            >
              {label} →
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
