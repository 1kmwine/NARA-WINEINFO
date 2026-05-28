import { formatVolume, formatServingTemp, parseJsonField } from '@/lib/utils'
import type { Wine, Winery, WineGrape, Grape } from '@prisma/client'

type WineSpecProps = {
  wine: Wine & { winery: Winery | null; grapes: Array<{ grape: Grape; percentage: number | null }> }
}

export function WineSpecTable({ wine }: WineSpecProps) {
  const foodPairing = parseJsonField<string[]>(wine.foodPairing, [])
  const grapeStr = wine.grapes
    .map(g => g.percentage ? `${g.grape.nameKo} (${g.grape.nameEn}) ${g.percentage}%` : g.grape.nameKo)
    .join(', ')

  const rows = [
    { label: '타입', value: wine.type === 'red' ? '레드' : wine.type === 'white' ? '화이트' : wine.type === 'rose' ? '로제' : wine.type === 'sparkling' ? '스파클링' : wine.type },
    { label: '원산지', value: [wine.country, wine.regionL1, wine.regionL2].filter(Boolean).join(' > ') },
    { label: '와이너리', value: wine.winery?.nameKo ?? '-' },
    { label: '포도품종', value: grapeStr || '-' },
    { label: '용량', value: formatVolume(wine.volume) },
    { label: '음용온도', value: formatServingTemp(wine.servingTempMin, wine.servingTempMax) },
    { label: '음식궁합', value: foodPairing.join(', ') || '-' },
  ]

  return (
    <table className="w-full text-sm">
      <tbody>
        {rows.map(row => (
          <tr key={row.label} className="border-b border-gray-100 last:border-0">
            <td className="spec-label py-2 pr-4 whitespace-nowrap w-24">{row.label}</td>
            <td className="py-2 text-gray-700">{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
