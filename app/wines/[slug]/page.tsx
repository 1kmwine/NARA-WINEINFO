import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { wineRepo } from '@/lib/wine-repository'
import { parseJsonField, wineTypeLabel, wineTypeColor } from '@/lib/utils'
import { WineDetailSidebar } from '@/components/wine-detail/WineDetailSidebar'
import { WineSpecTable } from '@/components/wine-detail/WineSpecTable'
import { AllScrapedSections } from '@/components/wine-detail/ScrapedSourceSection'
import type { CheckPoint } from '@/lib/types'

type Params = { slug: string }

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const wine = await wineRepo.findBySlug(params.slug)
  if (!wine) return { title: '와인을 찾을 수 없습니다' }
  return {
    title: `${wine.nameKo} | NARA WINEINFO`,
    description: wine.description ?? `${wine.nameKo} - ${wine.country} ${wine.regionL1}`,
  }
}

function SectionDivider({ title }: { title: string }) {
  return (
    <div className="section-divider">
      <span className="section-divider-title">{title}</span>
    </div>
  )
}

export default async function WineDetailPage({ params }: { params: Params }) {
  const wine = await wineRepo.findBySlug(params.slug)
  if (!wine) notFound()

  const checkpoints = parseJsonField<CheckPoint[]>(wine.checkpoints, [])

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* 와인명 헤더 (사이드바 위, 전체폭) */}
      <div className="mb-6">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{wine.nameEn}</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{wine.nameKo}</h1>
        {wine.subtitle && (
          <p className="text-sm font-semibold tracking-widest" style={{ color: '#7b2335' }}>
            {wine.subtitle}
          </p>
        )}
        <div className="flex items-center gap-2 mt-2">
          <span
            className="text-xs text-white px-2 py-0.5 rounded-full font-medium"
            style={{ background: wineTypeColor(wine.type) }}
          >
            {wineTypeLabel(wine.type)}
          </span>
          {wine.winery && (
            <span className="text-sm text-gray-500">{wine.winery.nameKo}</span>
          )}
        </div>
      </div>

      {/* Option B: 사이드바 + 본문 (데스크탑 flex-row, 모바일 flex-col) */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* 좌측 사이드바 */}
        <WineDetailSidebar wine={wine} />

        {/* 우측 본문 */}
        <div className="flex-1 min-w-0">
          {/* 스펙 테이블 */}
          <div className="bg-gray-50 rounded-xl p-5 mb-6">
            <WineSpecTable wine={wine} />
          </div>

          {/* Check Points */}
          {checkpoints.length > 0 && (
            <>
              <SectionDivider title="Check Point" />
              <div className="space-y-4 mb-6">
                {checkpoints.map((cp, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-sm font-bold shrink-0" style={{ color: '#7b2335' }}>
                      {cp.label}
                    </span>
                    <p className="text-sm text-gray-700">{cp.text}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* 와인 스토리 */}
          {wine.wineStory && (
            <>
              <SectionDivider title="와인 스토리" />
              <p className="text-sm text-gray-700 leading-relaxed mb-6">{wine.wineStory}</p>
            </>
          )}

          {/* 와이너리 설명 */}
          {wine.winery?.description && (
            <>
              <SectionDivider title="와이너리 설명" />
              {wine.winery.logoUrl && (
                <div className="flex justify-center mb-4">
                  <img src={wine.winery.logoUrl} alt={wine.winery.nameKo} className="max-h-20 object-contain" />
                </div>
              )}
              <p className="text-sm text-gray-700 leading-relaxed mb-6">{wine.winery.description}</p>
            </>
          )}

          {/* 테이스팅 노트 */}
          {wine.tastingNotes && (
            <>
              <SectionDivider title="테이스팅 노트" />
              <p className="text-sm text-gray-700 leading-relaxed mb-6">{wine.tastingNotes}</p>
            </>
          )}

          {/* 양조 방법 */}
          {wine.productionMethod && (
            <>
              <SectionDivider title="양조 방법" />
              <p className="text-sm text-gray-700 leading-relaxed mb-6">{wine.productionMethod}</p>
            </>
          )}

          {/* 스크래핑 데이터 */}
          <AllScrapedSections scrapedData={wine.scrapedData} />
        </div>
      </div>
    </div>
  )
}
