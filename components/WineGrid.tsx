'use client'

import { useState } from 'react'
import WineCard from '@/components/WineCard'

type WineData = {
  id: number
  slug: string
  nameKo: string
  nameEn: string
  type: string
  country: string
  regionL1: string
  regionL2: string | null
  bottleImageUrl: string | null
  winery: { nameKo: string } | null
  grapes: Array<{ grape: { nameKo: string } }>
  [key: string]: unknown
}

type View = 'grid2' | 'grid3' | 'list'

function ViewToggle({ view, setView }: { view: View; setView: (v: View) => void }) {
  const icons: Record<View, React.ReactNode> = {
    grid2: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
        {[0, 8].flatMap(x => [0, 8].map(y => <rect key={`${x}${y}`} x={x} y={y} width="5" height="5" rx="1" />))}
      </svg>
    ),
    grid3: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
        {[0, 5, 10].flatMap(x => [0, 5, 10].map(y => <rect key={`${x}${y}`} x={x} y={y} width="3.5" height="3.5" rx="0.5" />))}
      </svg>
    ),
    list: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
        {[1, 5, 9].flatMap(y => [
          <rect key={`b${y}`} x="0" y={y} width="3.5" height="3" rx="0.5" />,
          <rect key={`l${y}`} x="5.5" y={y + 0.5} width="8.5" height="2" rx="0.5" />,
        ])}
      </svg>
    ),
  }

  const views: View[] = ['grid2', 'grid3', 'list']

  return (
    <div style={{ display: 'flex', border: '1px solid #e8e8e8', borderRadius: 4, overflow: 'hidden' }}>
      {views.map((k, i) => (
        <button
          key={k}
          onClick={() => setView(k)}
          style={{
            width: 34,
            height: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: view === k ? '#f9f9f9' : 'transparent',
            color: view === k ? '#1B4332' : '#b3b3b3',
            border: 'none',
            borderRight: i < views.length - 1 ? '1px solid #e8e8e8' : 'none',
            cursor: 'pointer',
            transition: 'all .12s',
          }}
        >
          {icons[k]}
        </button>
      ))}
    </div>
  )
}

export function WineGrid({ wines, total }: { wines: WineData[]; total: number }) {
  const [view, setView] = useState<View>('grid3')

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <p className="text-[13px] text-[#6b6b6b]">총 {total.toLocaleString()}개</p>
        <ViewToggle view={view} setView={setView} />
      </div>

      {wines.length === 0 ? (
        <div className="text-center py-20 text-[#b3b3b3]">
          <p className="text-4xl mb-2">🍾</p>
          <p className="text-sm">검색 결과가 없습니다</p>
        </div>
      ) : view === 'list' ? (
        <div>
          {wines.map(wine => (
            <WineCard key={wine.id} wine={wine as Parameters<typeof WineCard>[0]['wine']} view="list" />
          ))}
        </div>
      ) : (
        <div
          className={`grid gap-4 ${view === 'grid2' ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-3'}`}
        >
          {wines.map(wine => (
            <WineCard key={wine.id} wine={wine as Parameters<typeof WineCard>[0]['wine']} view={view} />
          ))}
        </div>
      )}
    </div>
  )
}
