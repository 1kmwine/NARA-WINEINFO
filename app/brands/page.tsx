import type { Metadata } from 'next'
import Link from 'next/link'
import { prisma } from '@/lib/db'

export const metadata: Metadata = {
  title: '브랜드 인덱스',
  description: '와이너리 및 브랜드 목록',
}

export const dynamic = 'force-dynamic'

async function getBrands() {
  return prisma.winery.findMany({
    orderBy: { nameEn: 'asc' },
    include: {
      _count: { select: { wines: true } },
    },
  })
}

function groupByLetter(brands: Awaited<ReturnType<typeof getBrands>>) {
  const groups: Record<string, typeof brands> = {}
  brands.forEach((brand) => {
    const raw = (brand.nameEn || brand.nameKo || '')[0] ?? ''
    const firstChar = raw.toUpperCase()
    const key = /^[A-Z]$/.test(firstChar) ? firstChar : '#'
    if (!groups[key]) groups[key] = []
    groups[key].push(brand)
  })
  return groups
}

export default async function BrandsPage() {
  const brands = await getBrands()
  const grouped = groupByLetter(brands)
  const letters = Object.keys(grouped).sort((a, b) => {
    if (a === '#') return 1
    if (b === '#') return -1
    return a.localeCompare(b)
  })

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">브랜드</h1>
      <p className="text-sm text-gray-500 mb-6">{brands.length}개의 와이너리</p>

      {/* Letter index */}
      <div className="flex flex-wrap gap-1.5 mb-8 pb-4 border-b border-gray-200">
        {letters.map((letter) => (
          <a
            key={letter}
            href={`#letter-${letter}`}
            className="w-8 h-8 flex items-center justify-center text-sm font-medium border border-gray-200 rounded hover:border-primary hover:text-primary transition-colors"
          >
            {letter}
          </a>
        ))}
      </div>

      {/* Brand groups */}
      <div className="space-y-10">
        {letters.map((letter) => (
          <div key={letter} id={`letter-${letter}`}>
            <h2
              className="text-2xl font-bold mb-4 pb-2 border-b-2"
              style={{ color: '#7b2335', borderColor: '#7b2335' }}
            >
              {letter}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {grouped[letter].map((brand) => (
                <Link
                  key={brand.id}
                  href={`/brands/${encodeURIComponent(brand.nameEn)}`}
                  className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-primary hover:shadow-sm transition-all group"
                >
                  <div className="min-w-0">
                    <p className="font-medium text-gray-800 group-hover:text-primary truncate">
                      {brand.nameEn}
                    </p>
                    <p className="text-xs text-gray-400 truncate">{brand.nameKo} · {brand.country}</p>
                  </div>
                  <span className="text-xs text-gray-400 ml-2 shrink-0">
                    {brand._count.wines}종
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {brands.length === 0 && (
        <div className="text-center py-20">
          <p className="text-4xl mb-3">🏰</p>
          <p className="text-lg font-medium text-gray-600">등록된 브랜드가 없습니다</p>
        </div>
      )}
    </div>
  )
}
