import Link from 'next/link'
import Image from 'next/image'
import type { Wine } from '@prisma/client'
import { wineTypeLabel, formatRegion } from '@/lib/utils'

type WineCardData = Wine & {
  winery: { nameKo: string } | null
  grapes: Array<{ grape: { nameKo: string } }>
}

function TypeTag({ type }: { type: string }) {
  return (
    <span className="inline-block text-[10px] font-medium tracking-[0.06em] uppercase text-[#6b6b6b] bg-[#f9f9f9] border border-[#e8e8e8] rounded px-1.5 py-0.5">
      {wineTypeLabel(type)}
    </span>
  )
}

export default function WineCard({
  wine,
  view = 'grid3',
}: {
  wine: WineCardData
  view?: 'list' | 'grid2' | 'grid3'
}) {
  const grape = wine.grapes[0]?.grape
  const location = [wine.country, wine.regionL1].filter(Boolean).join(' · ')

  if (view === 'list') {
    return (
      <Link
        href={`/wines/${wine.slug}`}
        className="flex gap-6 py-5 border-b border-[#e8e8e8] hover:bg-[#f9f9f9] transition-colors px-4 -mx-4"
      >
        <div className="w-11 flex justify-center items-start pt-1 shrink-0">
          {wine.bottleImageUrl ? (
            <Image
              src={wine.bottleImageUrl}
              alt={wine.nameKo}
              width={36}
              height={68}
              className="object-contain"
              style={{ maxHeight: 68 }}
            />
          ) : (
            <div className="w-9 h-16 bg-[#f9f9f9] rounded flex items-center justify-center text-xl">🍾</div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <TypeTag type={wine.type} />
            <span className="text-xs text-[#b3b3b3]">{location}</span>
          </div>
          <p className="text-[15px] font-semibold text-[#111111] tracking-[-0.01em] mb-1 break-keep line-clamp-2">
            {wine.nameKo}
          </p>
          <p className="text-xs text-[#b3b3b3] mb-2">{wine.nameEn}</p>
          {(wine.winery || grape) && (
            <p className="text-[13px] text-[#6b6b6b]">
              {[wine.winery?.nameKo, grape?.nameKo].filter(Boolean).join(' · ')}
            </p>
          )}
        </div>
      </Link>
    )
  }

  const bottleH = view === 'grid2' ? 108 : 88

  return (
    <Link
      href={`/wines/${wine.slug}`}
      className="group block bg-white border border-[#e8e8e8] rounded-lg overflow-hidden hover:shadow-lg hover:border-[#1B4332]/30 transition-all duration-200"
    >
      <div
        className="bg-[#f9f9f9] flex justify-center items-center border-b border-[#e8e8e8]"
        style={{ padding: '28px 0 20px' }}
      >
        {wine.bottleImageUrl ? (
          <Image
            src={wine.bottleImageUrl}
            alt={wine.nameKo}
            width={50}
            height={bottleH}
            className="object-contain"
            style={{ maxHeight: bottleH }}
          />
        ) : (
          <div className="flex items-center justify-center text-4xl" style={{ height: bottleH }}>
            🍾
          </div>
        )}
      </div>
      <div className="p-4 pb-[18px]">
        <div className="flex items-center justify-between mb-2">
          <TypeTag type={wine.type} />
        </div>
        <p className="text-[15px] font-semibold text-[#111111] tracking-[-0.01em] leading-[1.45] mb-1 break-keep line-clamp-2">
          {wine.nameKo}
        </p>
        {wine.winery && (
          <p className="text-xs text-[#b3b3b3] mb-1.5">{wine.winery.nameKo}</p>
        )}
        <p className="text-[13px] text-[#6b6b6b]">{location}</p>
        {grape && <p className="text-[13px] text-[#6b6b6b] mt-0.5">{grape.nameKo}</p>}
      </div>
    </Link>
  )
}
