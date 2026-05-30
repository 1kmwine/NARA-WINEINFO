import { formatVolume, formatServingTemp, parseJsonField } from '@/lib/utils'
import type { Wine, Winery, Grape } from '@prisma/client'

type WineSpecProps = {
  wine: Wine & { winery: Winery | null; grapes: Array<{ grape: Grape; percentage: number | null }> }
}

export function WineSpecTable({ wine }: WineSpecProps) {
  const foodPairing = parseJsonField<string[]>(wine.foodPairing, [])
  const grapeStr = wine.grapes
    .map(g => g.percentage ? `${g.grape.nameKo} (${g.grape.nameEn}) ${g.percentage}%` : g.grape.nameKo)
    .join(', ')

  const rows = [
    { label: 'Type', value: wine.type === 'red' ? '레드' : wine.type === 'white' ? '화이트' : wine.type === 'rose' ? '로제' : wine.type === 'sparkling' ? '스파클링' : wine.type },
    { label: 'Origin', value: [wine.country, wine.regionL1, wine.regionL2].filter(Boolean).join(' › ') },
    { label: 'Winery', value: wine.winery?.nameKo ?? '-' },
    { label: 'Grape', value: grapeStr || '-' },
    { label: 'Volume', value: formatVolume(wine.volume) },
    { label: 'Serving', value: formatServingTemp(wine.servingTempMin, wine.servingTempMax) },
    { label: 'Pairing', value: foodPairing.join(', ') || '-' },
  ]

  return (
    <div>
      {rows.map((row, i) => (
        <div
          key={row.label}
          className="flex"
          style={{ borderBottom: i < rows.length - 1 ? '1px solid #e8e8e8' : 'none' }}
        >
          <div
            className="shrink-0 px-4 py-3 spec-label"
            style={{ width: 100, background: '#f9f9f9', borderRight: '1px solid #e8e8e8' }}
          >
            {row.label}
          </div>
          <div className="flex-1 px-4 py-3 text-sm text-[#3d3d3d]">{row.value}</div>
        </div>
      ))}
    </div>
  )
}
