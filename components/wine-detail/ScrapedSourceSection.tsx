'use client'

import { useState } from 'react'
import type { ScrapedData } from '@prisma/client'
import { sourceTypeLabel, sourceTypeIcon, formatDate } from '@/lib/utils'
import type { SourceType } from '@/lib/types'

const SOURCE_ORDER: SourceType[] = [
  'naver_blog', 'naver_cafe', 'youtube', 'instagram',
  'wine_searcher', 'winery_official', 'article_kr', 'article_global', 'other',
]

function ScrapedCard({ item }: { item: ScrapedData }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="border border-gray-100 rounded-lg p-4 hover:border-gray-200 transition-colors">
      {/* YouTube 썸네일 */}
      {item.thumbnailUrl && item.sourceType === 'youtube' && (
        <a href={item.url ?? '#'} target="_blank" rel="noopener noreferrer" className="block mb-3">
          <img
            src={item.thumbnailUrl}
            alt={item.title ?? ''}
            className="w-full rounded-md object-cover max-h-36"
          />
        </a>
      )}

      {/* 제목 */}
      {item.title && (
        <h4 className="text-sm font-semibold text-gray-900 mb-1 leading-snug">
          {item.url ? (
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              {item.title}
            </a>
          ) : item.title}
        </h4>
      )}

      {/* 메타 */}
      <div className="flex flex-wrap gap-2 text-xs text-gray-400 mb-2">
        {item.author && <span>{item.author}</span>}
        {item.publishedAt && <span>{formatDate(item.publishedAt)}</span>}
        {item.sourceName && <span className="badge-source">{item.sourceName}</span>}
      </div>

      {/* 요약 / 본문 */}
      {(item.summary || item.content) && (
        <div className="text-sm text-gray-600 leading-relaxed">
          <p className={expanded ? '' : 'line-clamp-3'}>
            {item.summary ?? item.content}
          </p>
          {(item.summary ?? item.content ?? '').length > 150 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-xs mt-1 hover:text-primary"
              style={{ color: '#7b2335' }}
            >
              {expanded ? '접기 ▲' : '더보기 ▼'}
            </button>
          )}
        </div>
      )}

      {/* 원문 링크 */}
      {item.url && !item.url.startsWith('internal://') && (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-xs underline"
          style={{ color: '#7b2335' }}
        >
          원문 보기 →
        </a>
      )}
    </div>
  )
}

interface AllScrapedSectionsProps {
  scrapedData: ScrapedData[]
}

export function AllScrapedSections({ scrapedData }: AllScrapedSectionsProps) {
  if (!scrapedData.length) return null

  const grouped = SOURCE_ORDER.reduce<Record<string, ScrapedData[]>>((acc, type) => {
    const items = scrapedData.filter(d => d.sourceType === type)
    if (items.length > 0) acc[type] = items
    return acc
  }, {})

  const otherItems = scrapedData.filter(d => !SOURCE_ORDER.includes(d.sourceType as SourceType))
  if (otherItems.length > 0) grouped['other'] = [...(grouped['other'] ?? []), ...otherItems]

  return (
    <div className="space-y-10 mt-10">
      {Object.entries(grouped).map(([sourceType, items]) => (
        <section key={sourceType}>
          <div className="section-divider">
            <span className="section-divider-title">
              {sourceTypeIcon(sourceType)} {sourceTypeLabel(sourceType)}
              <span className="ml-1 text-gray-400 font-normal">({items.length})</span>
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map(item => (
              <ScrapedCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
