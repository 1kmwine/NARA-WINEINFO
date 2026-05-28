import type { Metadata } from 'next'
import Link from 'next/link'
import { prisma } from '@/lib/db'
import WineCard from '@/components/WineCard'
import { wineTypeLabel } from '@/lib/utils'

export const metadata: Metadata = {
  title: '와인 검색',
  description: '나라셀라의 모든 와인을 검색하고 탐색하세요',
}

export const dynamic = 'force-dynamic'

type SearchParams = {
  q?: string
  type?: string
  country?: string
  variety?: string
  page?: string
}

const PAGE_SIZE = 24

async function getWines(searchParams: SearchParams) {
  const page = Math.max(1, parseInt(searchParams.page ?? '1', 10))
  const skip = (page - 1) * PAGE_SIZE

  const where: Record<string, unknown> = { isPublished: true }

  if (searchParams.q) {
    where.OR = [
      { nameKo: { contains: searchParams.q } },
      { nameEn: { contains: searchParams.q } },
      { winery: { nameKo: { contains: searchParams.q } } },
      { winery: { nameEn: { contains: searchParams.q } } },
    ]
  }
  if (searchParams.type) where.type = searchParams.type
  if (searchParams.country) where.country = { contains: searchParams.country }

  const [wines, total] = await Promise.all([
    prisma.wine.findMany({
      where,
      skip,
      take: PAGE_SIZE,
      orderBy: { nameKo: 'asc' },
      include: {
        winery: { select: { nameKo: true, nameEn: true } },
        grapes: { include: { grape: true } },
      },
    }),
    prisma.wine.count({ where }),
  ])

  return { wines, total, page, totalPages: Math.ceil(total / PAGE_SIZE) }
}

async function getFilterOptions() {
  const [types, countries] = await Promise.all([
    prisma.wine.findMany({ select: { type: true }, distinct: ['type'], where: { isPublished: true } }),
    prisma.wine.findMany({ select: { country: true }, distinct: ['country'], where: { isPublished: true } }),
  ])
  return {
    types: types.map((t) => t.type),
    countries: countries.map((c) => c.country),
  }
}

export default async function WinesPage({ searchParams }: { searchParams: SearchParams }) {
  const [{ wines, total, page, totalPages }, filters] = await Promise.all([
    getWines(searchParams),
    getFilterOptions(),
  ])

  const buildUrl = (overrides: SearchParams) => {
    const params = new URLSearchParams()
    const merged = { ...searchParams, ...overrides }
    Object.entries(merged).forEach(([k, v]) => {
      if (v && k !== 'page') params.set(k, v)
      if (k === 'page' && v && v !== '1') params.set(k, v)
    })
    const str = params.toString()
    return `/wines${str ? `?${str}` : ''}`
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">와인 검색</h1>
        <p className="text-sm text-gray-500">{total.toLocaleString()}개의 와인</p>
      </div>

      {/* Search & Filters */}
      <form method="GET" action="/wines" className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-3">
          <input
            type="text"
            name="q"
            defaultValue={searchParams.q}
            placeholder="와인명, 와이너리 검색..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <select
            name="type"
            defaultValue={searchParams.type ?? ''}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="">모든 타입</option>
            {filters.types.map((t) => (
              <option key={t} value={t}>{wineTypeLabel(t)}</option>
            ))}
          </select>
          <select
            name="country"
            defaultValue={searchParams.country ?? ''}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="">모든 나라</option>
            {filters.countries.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <button
            type="submit"
            className="btn-primary"
          >
            검색
          </button>
          {(searchParams.q || searchParams.type || searchParams.country) && (
            <Link href="/wines" className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 border border-gray-300 rounded-lg text-center">
              초기화
            </Link>
          )}
        </div>
      </form>

      {/* Wine grid */}
      {wines.length > 0 ? (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {wines.map((wine) => (
              <WineCard key={wine.id} wine={wine} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-10">
              {page > 1 && (
                <Link
                  href={buildUrl({ page: String(page - 1) })}
                  className="px-3 py-1.5 border border-gray-300 rounded text-sm hover:border-primary hover:text-primary"
                >
                  ← 이전
                </Link>
              )}
              {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
                const pageNum = Math.max(1, Math.min(page - 3, totalPages - 6)) + i
                return pageNum <= totalPages ? (
                  <Link
                    key={pageNum}
                    href={buildUrl({ page: String(pageNum) })}
                    className={`px-3 py-1.5 border rounded text-sm ${
                      pageNum === page
                        ? 'text-white border-primary'
                        : 'border-gray-300 hover:border-primary hover:text-primary'
                    }`}
                    style={pageNum === page ? { backgroundColor: '#7b2335' } : {}}
                  >
                    {pageNum}
                  </Link>
                ) : null
              })}
              {page < totalPages && (
                <Link
                  href={buildUrl({ page: String(page + 1) })}
                  className="px-3 py-1.5 border border-gray-300 rounded text-sm hover:border-primary hover:text-primary"
                >
                  다음 →
                </Link>
              )}
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-20">
          <p className="text-4xl mb-3">🍾</p>
          <p className="text-lg font-medium text-gray-600">검색 결과가 없습니다</p>
          <p className="text-sm text-gray-400 mt-1">다른 키워드로 검색해 보세요</p>
          <Link href="/wines" className="btn-outline mt-4 inline-block">
            전체 와인 보기
          </Link>
        </div>
      )}
    </div>
  )
}
