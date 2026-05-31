import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { wineRepo } from '@/lib/wine-repository'
import { parseJsonField, wineTypeLabel } from '@/lib/utils'
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
      <div className="w-5 h-px shrink-0" style={{ background: '#1B4332' }} />
      <span className="section-divider-title">{title}</span>
      <div className="flex-1 h-px" style={{ background: '#e8e8e8' }} />
    </div>
  )
}

function TypeTag({ type }: { type: string }) {
  return (
    <span className="inline-block text-[11px] font-medium tracking-[0.04em] uppercase text-[#6b6b6b] bg-[#f9f9f9] border border-[#e8e8e8] rounded px-1.5 py-0.5">
      {wineTypeLabel(type)}
    </span>
  )
}

export default async function WineDetailPage({ params }: { params: Params }) {
  const wine = await wineRepo.findBySlug(params.slug)
  if (!wine) notFound()

  const checkpoints = parseJsonField<CheckPoint[]>(wine.checkpoints, [])

  return (
    <div className="max-w-[940px] mx-auto px-8 py-8">
      {/* 와인명 헤더 */}
      <div className="mb-8 pb-8 border-b border-[#e8e8e8]">
        <p className="text-[11px] font-medium tracking-[0.04em] uppercase text-[#b3b3b3] mb-2.5">
          {wine.nameEn}
        </p>
        <h1 className="text-[28px] font-bold text-[#111111] tracking-[-0.025em] leading-[1.25] mb-3">
          {wine.nameKo}
        </h1>
        {wine.subtitle && (
          <p className="text-sm font-semibold tracking-[0.04em] mb-3" style={{ color: '#1B4332' }}>
            {wine.subtitle}
          </p>
        )}
        <div className="flex items-center flex-wrap gap-2.5">
          <TypeTag type={wine.type} />
          {wine.winery && (
            <span className="text-sm text-[#6b6b6b]">{wine.winery.nameKo}</span>
          )}
        </div>
      </div>

      {/* 사이드바 + 본문 */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* 좌측 사이드바 */}
        <WineDetailSidebar wine={wine} />

        {/* 우측 본문 */}
        <div className="flex-1 min-w-0">
          {/* 스펙 테이블 */}
          <div className="border border-[#e8e8e8] rounded-lg overflow-hidden mb-6">
            <WineSpecTable wine={wine} />
          </div>

          {/* Check Points */}
          {checkpoints.length > 0 && (
            <>
              <SectionDivider title="Check Point" />
              <div className="space-y-4 mb-6">
                {checkpoints.map((cp, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-sm font-bold shrink-0" style={{ color: '#1B4332' }}>
                      {cp.label}
                    </span>
                    <p className="text-sm text-[#3d3d3d]">{cp.text}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* 와인 스토리 */}
          {wine.wineStory && (
            <>
              <SectionDivider title="와인 스토리" />
              <p className="text-sm text-[#3d3d3d] leading-relaxed mb-6">{wine.wineStory}</p>
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
              <p className="text-sm text-[#3d3d3d] leading-relaxed mb-6">{wine.winery.description}</p>
            </>
          )}

          {/* 테이스팅 노트 */}
          {wine.tastingNotes && (
            <>
              <SectionDivider title="테이스팅 노트" />
              <p className="text-sm text-[#3d3d3d] leading-relaxed mb-6">{wine.tastingNotes}</p>
            </>
          )}

          {/* 양조 방법 */}
          {wine.productionMethod && (
            <>
              <SectionDivider title="양조 방법" />
              <p className="text-sm text-[#3d3d3d] leading-relaxed mb-6">{wine.productionMethod}</p>
            </>
          )}

          {/* 스크래핑 데이터 */}
          <AllScrapedSections scrapedData={wine.scrapedData} />
        </div>
      </div>
    </div>
  )
}
