import type { ScrapedData } from '@prisma/client'
import { sourceTypeLabel, sourceTypeIcon, formatDate } from '@/lib/utils'
import type { SourceType } from '@/lib/types'

const SOURCE_ORDER: SourceType[] = [
  'naver_blog', 'naver_cafe', 'youtube', 'instagram',
  'wine_searcher', 'winery_official', 'article_kr', 'article_global', 'other',
]

function SectionDivider({ title }: { title: string }) {
  return (
    <div className="section-divider">
      <div className="w-5 h-px shrink-0" style={{ background: '#1B4332' }} />
      <span className="section-divider-title">{title}</span>
      <div className="flex-1 h-px" style={{ background: '#e8e8e8' }} />
    </div>
  )
}

function ScrapedCard({ item }: { item: ScrapedData }) {
  return (
    <div className="border border-[#e8e8e8] rounded-lg p-4 hover:border-[#1B4332]/30 transition-colors">
      {/* YouTube 썸네일 */}
      {item.thumbnailUrl && item.sourceType === 'youtube' && (
        <a
          href={item.url ?? '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-3 rounded-md overflow-hidden"
        >
          <img
            src={item.thumbnailUrl}
            alt={item.title ?? ''}
            className="w-full object-cover max-h-40"
          />
        </a>
      )}

      {/* 제목 */}
      {item.title && (
        <h4 className="text-[14px] font-semibold text-[#111111] tracking-[-0.01em] leading-snug mb-1.5">
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1B4332] transition-colors"
            >
              {item.title}
            </a>
          ) : (
            item.title
          )}
        </h4>
      )}

      {/* 메타 */}
      <div className="flex flex-wrap items-center gap-2 mb-2.5">
        {item.author && (
          <span className="text-xs text-[#b3b3b3]">{item.author}</span>
        )}
        {item.publishedAt && (
          <span className="text-xs text-[#b3b3b3]">{formatDate(item.publishedAt)}</span>
        )}
        {item.sourceName && (
          <span className="text-[10px] font-medium tracking-[0.04em] uppercase bg-[#f9f9f9] border border-[#e8e8e8] rounded px-1.5 py-0.5 text-[#6b6b6b]">
            {item.sourceName}
          </span>
        )}
      </div>

      {/* 요약 — 항상 전체 표시 */}
      {(item.summary || item.content) && (
        <p className="text-sm text-[#3d3d3d] leading-[1.7] tracking-[-0.01em]">
          {item.summary ?? item.content}
        </p>
      )}

      {/* 원문 링크 */}
      {item.url && !item.url.startsWith('internal://') && (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-xs text-[#1B4332] hover:text-[#2D6A4F] transition-colors"
        >
          원문 보기 →
        </a>
      )}
    </div>
  )
}

export function AllScrapedSections({ scrapedData }: { scrapedData: ScrapedData[] }) {
  if (!scrapedData.length) return null

  const grouped = SOURCE_ORDER.reduce<Record<string, ScrapedData[]>>((acc, type) => {
    const items = scrapedData.filter(d => d.sourceType === type)
    if (items.length > 0) acc[type] = items
    return acc
  }, {})

  const otherItems = scrapedData.filter(d => !SOURCE_ORDER.includes(d.sourceType as SourceType))
  if (otherItems.length > 0) grouped['other'] = [...(grouped['other'] ?? []), ...otherItems]

  return (
    <>
      {Object.entries(grouped).map(([sourceType, items]) => (
        <section key={sourceType}>
          <SectionDivider
            title={`${sourceTypeIcon(sourceType)} ${sourceTypeLabel(sourceType)} (${items.length})`}
          />
          <div className="space-y-4 mb-6">
            {items.map(item => (
              <ScrapedCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      ))}
    </>
  )
}
