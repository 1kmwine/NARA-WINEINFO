import { Suspense } from 'react'
import { wineRepo } from '@/lib/wine-repository'
import { WineFilters } from '@/components/WineFilters'
import { WineGrid } from '@/components/WineGrid'
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
    <div className="max-w-[1060px] mx-auto px-8 py-10">
      <div className="mb-8">
        <h1 className="text-[22px] font-semibold text-[#111111] tracking-[-0.02em]">와인 컬렉션</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        {/* 필터 사이드바 */}
        <aside className="md:w-36 shrink-0">
          <Suspense>
            <WineFilters countries={countries} />
          </Suspense>
        </aside>

        {/* 그리드 */}
        <div className="flex-1 min-w-0">
          <WineGrid wines={result.data as Parameters<typeof WineGrid>[0]['wines']} total={result.total} />

          {/* 페이지네이션 */}
          {result.totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: result.totalPages }, (_, i) => i + 1)
                .filter(p => Math.abs(p - page) <= 2 || p === 1 || p === result.totalPages)
                .map((p, idx, arr) => (
                  <span key={p}>
                    {idx > 0 && arr[idx - 1] !== p - 1 && (
                      <span className="px-2 text-[#b3b3b3]">…</span>
                    )}
                    <a
                      href={`/wines?${new URLSearchParams({ ...searchParams, page: String(p) })}`}
                      className="px-3 py-1.5 rounded-lg text-sm transition-colors"
                      style={
                        p === page
                          ? { background: '#1B4332', color: '#fff', fontWeight: 500 }
                          : { color: '#6b6b6b' }
                      }
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
