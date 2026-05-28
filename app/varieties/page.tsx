import type { Metadata } from 'next'
import Link from 'next/link'
import { prisma } from '@/lib/db'

export const metadata: Metadata = {
  title: '품종별 와인',
  description: '포도 품종별 와인 탐색',
}

export const dynamic = 'force-dynamic'

async function getVarieties() {
  const grapes = await prisma.grape.findMany({
    include: {
      _count: { select: { wines: true } },
    },
    orderBy: { nameEn: 'asc' },
  })
  return grapes.filter((g) => g._count.wines > 0)
}

function groupByLetter(varieties: Awaited<ReturnType<typeof getVarieties>>) {
  const groups: Record<string, typeof varieties> = {}
  varieties.forEach((v) => {
    const firstChar = v.nameEn[0].toUpperCase()
    const key = /^[A-Z]$/.test(firstChar) ? firstChar : '#'
    if (!groups[key]) groups[key] = []
    groups[key].push(v)
  })
  return groups
}

export default async function VarietiesPage() {
  const varieties = await getVarieties()
  const grouped = groupByLetter(varieties)
  const letters = Object.keys(grouped).sort((a, b) => {
    if (a === '#') return 1
    if (b === '#') return -1
    return a.localeCompare(b)
  })

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">품종별 탐색</h1>
      <p className="text-sm text-gray-500 mb-6">{varieties.length}가지 포도 품종</p>

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

      {varieties.length > 0 ? (
        <div className="space-y-10">
          {letters.map((letter) => (
            <div key={letter} id={`letter-${letter}`}>
              <h2
                className="text-2xl font-bold mb-4 pb-2 border-b-2"
                style={{ color: '#7b2335', borderColor: '#7b2335' }}
              >
                {letter}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {grouped[letter].map((variety) => (
                  <Link
                    key={variety.id}
                    href={`/varieties/${encodeURIComponent(variety.nameEn)}`}
                    className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-primary hover:shadow-sm transition-all group"
                  >
                    <div className="min-w-0">
                      <p className="font-medium text-gray-800 group-hover:text-primary text-sm truncate">
                        {variety.nameEn}
                      </p>
                      <p className="text-xs text-gray-400 truncate">{variety.nameKo}</p>
                    </div>
                    <span className="text-xs text-gray-400 ml-2 shrink-0">
                      {variety._count.wines}종
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-4xl mb-3">🍇</p>
          <p className="text-lg font-medium text-gray-600">등록된 품종 데이터가 없습니다</p>
        </div>
      )}
    </div>
  )
}
