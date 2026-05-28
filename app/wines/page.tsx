import { Suspense } from 'react'
import { wineRepo } from '@/lib/wine-repository'
import WineCard from '@/components/WineCard'
import { WineFilters } from '@/components/WineFilters'
import type { WineType } from '@/lib/types'

export const dynamic = 'force-dynamic'

type SearchParams = { type?: string; country?: string; q?: string; page?: string }

export default async function WinesPage({ searchParams }: { searchParams: SearchParams }) {
  const page = Number(searchParams.page ?? 1)
  const [result, countries] = await Promise.all([
    wineRepo.findMany({
      type: searchParams.type as WineType | undefined,
      country: searchParams.country,
      q: searchParams.q,
      page,
      pageSize: 24,
    }),
    wineRepo.listCountries(),
  ])

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">와인 목록</h1>
      <div className="flex flex-col md:flex-row gap-6">
        {/* 필터 사이드바 */}
        <aside className="md:w-44 shrink-0">
          <Suspense>
            <WineFilters countries={countries} />
          </Suspense>
        </aside>

        {/* 그리드 */}
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-4">총 {result.total.toLocaleString()}개</p>
          {result.data.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {result.data.map(wine => (
                <WineCard key={wine.id} wine={wine} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400">
              <p className="text-4xl mb-2">🍾</p>
              <p>검색 결과가 없습니다</p>
            </div>
          )}

          {/* 페이지네이션 */}
          {result.totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: result.totalPages }, (_, i) => i + 1)
                .filter(p => Math.abs(p - page) <= 2 || p === 1 || p === result.totalPages)
                .map((p, idx, arr) => (
                  <span key={p}>
                    {idx > 0 && arr[idx - 1] !== p - 1 && <span className="px-2 text-gray-400">…</span>}
                    <a
                      href={`/wines?${new URLSearchParams({ ...searchParams, page: String(p) })}`}
                      className={`px-3 py-1.5 rounded-lg text-sm ${p === page ? 'text-white font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
                      style={p === page ? { background: '#7b2335' } : {}}
                    >
                      {p}
                    </a>
                  </span>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
