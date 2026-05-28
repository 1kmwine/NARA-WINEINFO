'use client'

import { useState } from 'react'
import { sourceTypeLabel } from '@/lib/utils'

type ScrapedItem = {
  id: number
  sourceType: string
  sourceName?: string | null
  title?: string | null
  url?: string | null
  content?: string | null
  author?: string | null
  publishedAt?: Date | string | null
  scrapedAt: Date | string
  metadata: string
}

type ScrapedSectionProps = {
  sourceType: string
  items: ScrapedItem[]
  defaultOpen?: boolean
}

function formatDate(date: Date | string | null | undefined): string {
  if (!date) return ''
  const d = new Date(date)
  return d.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })
}

function parseMetadata(metaStr: string): Record<string, unknown> {
  try {
    return JSON.parse(metaStr)
  } catch {
    return {}
  }
}

function ScrapedItemCard({ item }: { item: ScrapedItem }) {
  const [expanded, setExpanded] = useState(false)
  const meta = parseMetadata(item.metadata)

  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sm text-gray-900 hover:text-primary line-clamp-2 block"
            >
              {item.title || item.url}
            </a>
          ) : (
            <p className="font-medium text-sm text-gray-900 line-clamp-2">
              {item.title || '제목 없음'}
            </p>
          )}
          <div className="flex flex-wrap gap-2 mt-1 text-xs text-gray-400">
            {item.author && <span>{item.author}</span>}
            {item.publishedAt && <span>{formatDate(item.publishedAt)}</span>}
            {item.sourceName && (
              <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                {item.sourceName}
              </span>
            )}
          </div>
        </div>
        {item.url && (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary shrink-0"
            title="원문 보기"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>

      {item.content && (
        <div className="mt-2">
          <p className={`text-sm text-gray-600 ${expanded ? '' : 'line-clamp-3'}`}>
            {item.content}
          </p>
          {item.content.length > 200 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-xs mt-1 font-medium"
              style={{ color: '#7b2335' }}
            >
              {expanded ? '접기 ▲' : '더보기 ▼'}
            </button>
          )}
        </div>
      )}

      {/* YouTube specific */}
      {item.sourceType === 'youtube' && typeof meta.videoId === 'string' && (
        <div className="mt-2">
          <a
            href={`https://www.youtube.com/watch?v=${meta.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700"
          >
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z" />
            </svg>
            YouTube에서 보기
          </a>
        </div>
      )}
    </div>
  )
}

export default function ScrapedSection({ sourceType, items, defaultOpen = false }: ScrapedSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  if (items.length === 0) return null

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-5 py-4 bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-800 text-sm">
            {sourceTypeLabel(sourceType)}
          </span>
          <span className="bg-gray-200 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full">
            {items.length}
          </span>
        </div>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="p-4 space-y-3">
          {items.map((item) => (
            <ScrapedItemCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}

type AllScrapedSectionsProps = {
  scrapedData: ScrapedItem[]
}

export function AllScrapedSections({ scrapedData }: AllScrapedSectionsProps) {
  const grouped = scrapedData.reduce<Record<string, ScrapedItem[]>>((acc, item) => {
    if (!acc[item.sourceType]) acc[item.sourceType] = []
    acc[item.sourceType].push(item)
    return acc
  }, {})

  const orderedTypes = [
    'naver_blog',
    'naver_cafe',
    'youtube',
    'instagram',
    'winery_official',
    'article',
    'wine_searcher',
    'winery_website',
    'other',
  ]

  const allTypes = [
    ...orderedTypes.filter((t) => grouped[t]),
    ...Object.keys(grouped).filter((t) => !orderedTypes.includes(t)),
  ]

  if (allTypes.length === 0) return null

  return (
    <div className="space-y-3">
      {allTypes.map((type) => (
        <ScrapedSection
          key={type}
          sourceType={type}
          items={grouped[type]}
          defaultOpen={type === 'naver_blog'}
        />
      ))}
    </div>
  )
}
