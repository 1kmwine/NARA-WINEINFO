import Link from 'next/link'
import Image from 'next/image'
import type { Wine } from '@prisma/client'
import { wineTypeLabel, wineTypeColor, formatRegion } from '@/lib/utils'

type WineCardData = Wine & {
  winery: { nameKo: string } | null
  grapes: Array<{ grape: { nameKo: string } }>
}

export default function WineCard({ wine }: { wine: WineCardData }) {
  const grape = wine.grapes[0]?.grape
  return (
    <Link href={`/wines/${wine.slug}`} className="block group">
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden wine-card-hover p-4">
        <div className="flex justify-center mb-3 h-32">
          {wine.bottleImageUrl ? (
            <Image
              src={wine.bottleImageUrl}
              alt={wine.nameKo}
              width={60}
              height={128}
              className="object-contain h-full w-auto"
            />
          ) : (
            <div className="w-12 h-32 bg-gray-100 rounded flex items-center justify-center text-gray-300 text-2xl">
              🍾
            </div>
          )}
        </div>
        <div
          className="inline-block text-xs text-white px-2 py-0.5 rounded-full mb-2 font-medium"
          style={{ background: wineTypeColor(wine.type) }}
        >
          {wineTypeLabel(wine.type)}
        </div>
        <h3 className="text-sm font-semibold text-gray-900 leading-tight mb-1 group-hover:text-primary line-clamp-2">
          {wine.nameKo}
        </h3>
        {wine.winery && (
          <p className="text-xs text-gray-500 mb-1">{wine.winery.nameKo}</p>
        )}
        <p className="text-xs text-gray-400">
          {formatRegion(wine.country, wine.regionL1, wine.regionL2)}
        </p>
        {grape && (
          <p className="text-xs text-gray-400 mt-0.5">{grape.nameKo}</p>
        )}
      </div>
    </Link>
  )
}
