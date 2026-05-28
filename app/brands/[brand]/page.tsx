import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { prisma } from '@/lib/db'
import WineCard from '@/components/WineCard'

type Params = { brand: string }

async function getBrand(brandName: string) {
  const decoded = decodeURIComponent(brandName)
  return prisma.winery.findFirst({
    where: { nameEn: decoded },
    include: {
      wines: {
        where: { isPublished: true },
        orderBy: { nameKo: 'asc' },
        include: {
          winery: { select: { nameKo: true, nameEn: true } },
          grapes: { include: { grape: true } },
        },
      },
    },
  })
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const brand = await getBrand(params.brand)
  if (!brand) return { title: '브랜드를 찾을 수 없습니다' }
  return {
    title: `${brand.nameKo} (${brand.nameEn})`,
    description: brand.description ?? `${brand.nameEn}의 와인 목록`,
  }
}

export default async function BrandDetailPage({ params }: { params: Params }) {
  const brand = await getBrand(params.brand)
  if (!brand) notFound()

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
        <Link href="/" className="hover:text-primary">홈</Link>
        <span>/</span>
        <Link href="/brands" className="hover:text-primary">브랜드</Link>
        <span>/</span>
        <span className="text-gray-600">{brand.nameEn}</span>
      </nav>

      {/* Brand header */}
      <div className="flex items-start gap-6 mb-8">
        {brand.logoUrl && (
          <div className="relative w-20 h-20 shrink-0">
            <Image
              src={brand.logoUrl}
              alt={brand.nameEn}
              fill
              className="object-contain"
              sizes="80px"
            />
          </div>
        )}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900">{brand.nameEn}</h1>
          <p className="text-lg text-gray-500">{brand.nameKo}</p>
          <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-500">
            <span>📍 {brand.country}{brand.region ? ` · ${brand.region}` : ''}</span>
            <span>🍷 {brand.wines.length}종의 와인</span>
          </div>
          {brand.websiteUrl && (
            <a
              href={brand.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm mt-2 inline-flex items-center gap-1 hover:text-primary"
              style={{ color: '#7b2335' }}
            >
              공식 홈페이지 →
            </a>
          )}
        </div>
      </div>

      {brand.description && (
        <div className="bg-gray-50 rounded-lg p-5 mb-8">
          <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">{brand.description}</p>
          {brand.history && (
            <p className="text-sm text-gray-500 mt-3 leading-relaxed whitespace-pre-wrap">{brand.history}</p>
          )}
        </div>
      )}

      <hr className="border-gray-200 mb-6" />

      {/* Wine list */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        {brand.nameKo}의 와인 ({brand.wines.length})
      </h2>

      {brand.wines.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {brand.wines.map((wine) => (
            <WineCard key={wine.id} wine={wine} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-gray-400">
          <p className="text-lg">등록된 와인이 없습니다</p>
        </div>
      )}
    </div>
  )
}
