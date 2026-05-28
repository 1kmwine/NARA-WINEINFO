import type { Metadata } from 'next'
import Link from 'next/link'
import { prisma } from '@/lib/db'

export const metadata: Metadata = {
  title: '지역별 와인',
  description: '원산지·지역별 와인 탐색',
}

export const dynamic = 'force-dynamic'

const COUNTRY_FLAGS: Record<string, string> = {
  프랑스: '🇫🇷',
  이탈리아: '🇮🇹',
  스페인: '🇪🇸',
  미국: '🇺🇸',
  호주: '🇦🇺',
  칠레: '🇨🇱',
  아르헨티나: '🇦🇷',
  독일: '🇩🇪',
  포르투갈: '🇵🇹',
  뉴질랜드: '🇳🇿',
  남아프리카: '🇿🇦',
  오스트리아: '🇦🇹',
  헝가리: '🇭🇺',
  그리스: '🇬🇷',
}

async function getRegions() {
  const wines = await prisma.wine.findMany({
    where: { isPublished: true },
    select: { country: true, regionL1: true },
  })

  const map = new Map<string, Map<string, number>>()
  wines.forEach(({ country, regionL1 }) => {
    if (!map.has(country)) map.set(country, new Map())
    const regions = map.get(country)!
    regions.set(regionL1, (regions.get(regionL1) ?? 0) + 1)
  })

  return Array.from(map.entries())
    .map(([country, regionMap]) => ({
      country,
      total: Array.from(regionMap.values()).reduce((a, b) => a + b, 0),
      regions: Array.from(regionMap.entries())
        .map(([region, count]) => ({ region, count }))
        .sort((a, b) => b.count - a.count),
    }))
    .sort((a, b) => b.total - a.total)
}

export default async function RegionsPage() {
  const countryData = await getRegions()

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">지역별 탐색</h1>
      <p className="text-sm text-gray-500 mb-8">{countryData.length}개 나라의 와인</p>

      {countryData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countryData.map(({ country, total, regions }) => (
            <div key={country} className="border border-gray-200 rounded-lg overflow-hidden">
              <div
                className="px-4 py-3 text-white flex items-center justify-between"
                style={{ backgroundColor: '#7b2335' }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">{COUNTRY_FLAGS[country] ?? '🌍'}</span>
                  <span className="font-semibold">{country}</span>
                </div>
                <span className="text-sm opacity-80">{total}종</span>
              </div>
              <div className="divide-y divide-gray-100">
                {regions.map(({ region, count }) => (
                  <Link
                    key={region}
                    href={`/regions/${encodeURIComponent(country)}/${encodeURIComponent(region)}`}
                    className="flex items-center justify-between px-4 py-2.5 hover:bg-gray-50 transition-colors group"
                  >
                    <span className="text-sm text-gray-700 group-hover:text-primary">{region}</span>
                    <span className="text-xs text-gray-400">{count}종</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-4xl mb-3">🌍</p>
          <p className="text-lg font-medium text-gray-600">등록된 지역 데이터가 없습니다</p>
        </div>
      )}
    </div>
  )
}
