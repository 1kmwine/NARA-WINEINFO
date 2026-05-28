import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { prisma } from '@/lib/db'
import WineCard from '@/components/WineCard'

type Params = { country: string; region: string }

async function getWines(country: string, region: string) {
  return prisma.wine.findMany({
    where: {
      isPublished: true,
      country: decodeURIComponent(country),
      OR: [
        { regionL1: decodeURIComponent(region) },
        { regionL2: decodeURIComponent(region) },
      ],
    },
    orderBy: { nameKo: 'asc' },
    include: {
      winery: { select: { nameKo: true, nameEn: true } },
      grapes: { include: { grape: true } },
    },
  })
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const country = decodeURIComponent(params.country)
  const region = decodeURIComponent(params.region)
  return {
    title: `${country} · ${region} 와인`,
    description: `${country} ${region} 산지의 와인 목록`,
  }
}

export default async function CountryRegionPage({ params }: { params: Params }) {
  const country = decodeURIComponent(params.country)
  const region = decodeURIComponent(params.region)
  const wines = await getWines(params.country, params.region)

  if (wines.length === 0) notFound()

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
        <Link href="/" className="hover:text-primary">홈</Link>
        <span>/</span>
        <Link href="/regions" className="hover:text-primary">지역</Link>
        <span>/</span>
        <span className="text-gray-600">{country}</span>
        <span>/</span>
        <span className="text-gray-600">{region}</span>
      </nav>

      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm text-gray-500 mb-1">{country}</p>
          <h1 className="text-2xl font-bold text-gray-900">{region}</h1>
        </div>
        <p className="text-sm text-gray-500">{wines.length}종의 와인</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {wines.map((wine) => (
          <WineCard key={wine.id} wine={wine} />
        ))}
      </div>
    </div>
  )
}
