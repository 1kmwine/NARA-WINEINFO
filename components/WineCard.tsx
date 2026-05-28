import Link from 'next/link'
import Image from 'next/image'
import { wineTypeLabel } from '@/lib/utils'

type WineCardProps = {
  wine: {
    id: number
    slug: string
    nameKo: string
    nameEn: string
    subtitle?: string | null
    type: string
    country: string
    regionL1: string
    regionL2?: string | null
    bottleImageUrl?: string | null
    winery?: {
      nameKo: string
      nameEn: string
    } | null
    grapes?: {
      grape: {
        nameKo: string
        nameEn: string
      }
      percentage?: number | null
    }[]
  }
}

const typeColors: Record<string, string> = {
  red: 'bg-red-100 text-red-800',
  white: 'bg-yellow-100 text-yellow-800',
  rose: 'bg-pink-100 text-pink-800',
  sparkling: 'bg-blue-100 text-blue-800',
  dessert: 'bg-amber-100 text-amber-800',
  fortified: 'bg-purple-100 text-purple-800',
}

export default function WineCard({ wine }: WineCardProps) {
  const grapeNames = wine.grapes
    ?.map((wg) => wg.grape.nameKo)
    .slice(0, 2)
    .join(', ')

  return (
    <Link href={`/wines/${wine.slug}`} className="wine-card group block">
      {/* Image area */}
      <div className="relative bg-gray-50 aspect-[3/4] overflow-hidden">
        {wine.bottleImageUrl ? (
          <Image
            src={wine.bottleImageUrl}
            alt={wine.nameKo}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-300">
            <svg className="w-12 h-16 mb-2" viewBox="0 0 48 64" fill="currentColor">
              <ellipse cx="24" cy="56" rx="8" ry="4" opacity="0.5" />
              <rect x="19" y="12" width="10" height="44" rx="5" />
              <rect x="21" y="4" width="6" height="10" rx="2" />
            </svg>
            <span className="text-xs">이미지 없음</span>
          </div>
        )}
        <div className="absolute top-2 left-2">
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${typeColors[wine.type] ?? 'bg-gray-100 text-gray-700'}`}>
            {wineTypeLabel(wine.type)}
          </span>
        </div>
      </div>

      {/* Info area */}
      <div className="p-3">
        {wine.winery && (
          <p className="text-xs text-gray-400 mb-0.5 truncate">{wine.winery.nameEn}</p>
        )}
        <h3 className="font-semibold text-gray-900 text-sm leading-tight truncate group-hover:text-primary transition-colors">
          {wine.nameKo}
        </h3>
        {wine.subtitle && (
          <p className="text-xs text-gray-500 mt-0.5 truncate">{wine.subtitle}</p>
        )}
        <p className="text-xs text-gray-400 mt-1 truncate">
          {wine.country} · {wine.regionL1}{wine.regionL2 ? ` · ${wine.regionL2}` : ''}
        </p>
        {grapeNames && (
          <p className="text-xs text-gray-500 mt-1 truncate">{grapeNames}</p>
        )}
      </div>
    </Link>
  )
}
