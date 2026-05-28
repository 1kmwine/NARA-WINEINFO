import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { wineRepo } from '@/lib/wine-repository'
import { wineTypeLabel, formatVolume, formatServingTemp, parseJsonField } from '@/lib/utils'
import { ScaleGroup } from '@/components/ScaleBar'
import { AwardList } from '@/components/AwardBadge'
import { AllScrapedSections } from '@/components/ScrapedSection'

type Params = { slug: string }

async function getWine(slug: string) {
  return wineRepo.findBySlug(slug)
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const wine = await getWine(params.slug)
  if (!wine) return { title: '와인을 찾을 수 없습니다' }
  return {
    title: wine.nameKo,
    description: wine.description ?? `${wine.nameKo} - ${wine.country} ${wine.regionL1}`,
  }
}

type CheckPoint = { label: string; text: string }

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 my-8">
      <div className="flex-1 h-px bg-gray-300" />
      <div className="text-center px-3">
        <p className="text-xs tracking-widest text-gray-400 uppercase mb-1">Info</p>
        <h2 className="text-sm font-bold text-gray-800 tracking-wider">{title}</h2>
        <div className="w-8 h-0.5 bg-gray-300 mx-auto mt-1" />
      </div>
      <div className="flex-1 h-px bg-gray-300" />
    </div>
  )
}

export default async function WineDetailPage({ params }: { params: Params }) {
  const wine = await getWine(params.slug)
  if (!wine) notFound()

  const foodPairing = parseJsonField<string[]>(wine.foodPairing, [])
  const images = (wine.images ?? []).map((img) => img.url)
  const checkpoints = parseJsonField<CheckPoint[]>(wine.checkpoints, [])

  const grapeDisplay = wine.grapes
    .map((wg) => {
      const name = wg.grape.nameKo
      return wg.percentage ? `${name} ${wg.percentage}%` : name
    })
    .join(', ')

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1">
        <Link href="/" className="hover:text-primary">홈</Link>
        <span>/</span>
        <Link href="/wines" className="hover:text-primary">와인</Link>
        <span>/</span>
        <span className="text-gray-600">{wine.nameKo}</span>
      </nav>

      {/* Top image collage */}
      <div className="grid grid-cols-3 gap-2 mb-8 h-48 md:h-64 rounded-lg overflow-hidden">
        {images.length > 0 ? (
          images.slice(0, 3).map((img, i) => (
            <div key={i} className={`relative bg-gray-100 ${images.length === 1 ? 'col-span-3' : images.length === 2 && i === 0 ? 'col-span-2' : ''}`}>
              <Image
                src={img}
                alt={`${wine.nameKo} 이미지 ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 25vw"
              />
            </div>
          ))
        ) : (
          <>
            <div className="col-span-2 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center rounded-l-lg">
              <div className="text-gray-400 text-center">
                <svg className="w-16 h-20 mx-auto" viewBox="0 0 48 64" fill="currentColor">
                  <rect x="19" y="12" width="10" height="44" rx="5" />
                  <rect x="21" y="4" width="6" height="10" rx="2" />
                </svg>
                <p className="text-xs mt-1">와이너리 이미지</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded-r-lg">
              <div className="text-gray-300 text-center">
                <p className="text-xs">포도밭 이미지</p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Wine title & subtitle */}
      <div className="text-center mb-8">
        {wine.subtitle && (
          <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">{wine.subtitle}</p>
        )}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{wine.nameKo}</h1>
        <p className="text-lg text-gray-500">{wine.nameEn}</p>
        {wine.winery && (
          <p className="text-sm text-gray-400 mt-1">{wine.winery.nameEn}</p>
        )}
      </div>

      <hr className="border-gray-200 mb-8" />

      {/* Specs table */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200 rounded-lg overflow-hidden mb-8">
        {[
          { label: '타입', value: wineTypeLabel(wine.type) },
          { label: '원산지', value: `${wine.country} ${wine.regionL1}${wine.regionL2 ? ` · ${wine.regionL2}` : ''}` },
          { label: '와이너리', value: wine.winery ? `${wine.winery.nameKo} (${wine.winery.nameEn})` : '-' },
          { label: '포도품종', value: grapeDisplay || '-' },
          { label: '용량', value: formatVolume(wine.volume) },
          { label: '음용온도', value: formatServingTemp(wine.servingTempMin, wine.servingTempMax) },
          { label: '음식궁합', value: foodPairing.length > 0 ? foodPairing.join(', ') : '-' },
        ].map(({ label, value }, i) => (
          <div
            key={label}
            className={`flex gap-3 px-4 py-3 border-b border-gray-200 last:border-b-0 md:last:border-b
              ${i % 2 === 0 ? 'md:border-r' : ''}`}
          >
            <dt className="spec-label w-20 shrink-0">{label}</dt>
            <dd className="spec-value flex-1">{value}</dd>
          </div>
        ))}
      </div>

      {/* Scale bars */}
      {(wine.sweetness != null || wine.acidity != null || wine.body != null) && (
        <>
          <SectionHeader title="와인 특성" />
          <div className="bg-gray-50 rounded-lg p-6 mb-2">
            <ScaleGroup
              sweetness={wine.sweetness}
              acidity={wine.acidity}
              body={wine.body}
              tannin={wine.tannin}
            />
          </div>
        </>
      )}

      {/* Awards */}
      {wine.awards.length > 0 && (
        <>
          <SectionHeader title="수상내역" />
          <AwardsSection awards={wine.awards} />
        </>
      )}

      {/* Bottle image download */}
      {wine.bottleImageUrl && (
        <div className="my-8 flex justify-center">
          <a
            href={wine.bottleImageUrl}
            download
            className="flex items-center gap-2 text-sm border border-gray-300 px-4 py-2 rounded-lg hover:border-primary hover:text-primary transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            병 이미지 다운로드
          </a>
        </div>
      )}

      {/* Wine Story */}
      {wine.wineStory && (
        <>
          <SectionHeader title="와인 스토리" />
          <div className="prose prose-gray max-w-none text-sm leading-relaxed text-gray-700 mb-4 whitespace-pre-wrap">
            {wine.wineStory}
          </div>
        </>
      )}

      {/* Winery description */}
      {wine.winery?.description && (
        <>
          <SectionHeader title="와이너리 소개" />
          <div className="flex gap-4 items-start">
            {wine.winery?.logoUrl && (
              <div className="relative w-20 h-20 shrink-0">
                <Image
                  src={wine.winery.logoUrl}
                  alt={wine.winery.nameEn}
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </div>
            )}
            <div>
              {wine.winery && (
                <Link
                  href={`/brands/${encodeURIComponent(wine.winery.nameEn)}`}
                  className="font-semibold text-gray-800 hover:text-primary"
                >
                  {wine.winery.nameKo} ({wine.winery.nameEn})
                </Link>
              )}
              <p className="text-sm text-gray-600 mt-2 leading-relaxed whitespace-pre-wrap">
                {wine.winery?.description}
              </p>
              {wine.winery?.history && (
                <p className="text-sm text-gray-500 mt-2 leading-relaxed whitespace-pre-wrap">
                  {wine.winery.history}
                </p>
              )}
            </div>
          </div>
        </>
      )}

      {/* Check Points */}
      {checkpoints.length > 0 && (
        <>
          <SectionHeader title="Check Point" />
          <div className="space-y-4">
            {checkpoints.map((cp, i) => (
              <div key={i} className="flex gap-3">
                <div
                  className="w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: '#7b2335' }}
                >
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{cp.label}</p>
                  <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">{cp.text}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Tasting Notes */}
      {wine.tastingNotes && (
        <>
          <SectionHeader title="테이스팅 노트" />
          <div className="bg-amber-50 border border-amber-100 rounded-lg p-5">
            <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap italic">
              {wine.tastingNotes}
            </p>
          </div>
        </>
      )}

      {/* Production Method */}
      {wine.productionMethod && (
        <>
          <SectionHeader title="양조 방법" />
          <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
            {wine.productionMethod}
          </p>
        </>
      )}

      {/* Scraped Data sections */}
      {wine.scrapedData.length > 0 && (
        <>
          <SectionHeader title="관련 자료" />
          <AllScrapedSections scrapedData={wine.scrapedData} />
        </>
      )}

      {/* Bottom nav */}
      <div className="mt-12 pt-6 border-t border-gray-200 flex justify-between">
        <Link href="/wines" className="text-sm text-gray-500 hover:text-primary">
          ← 와인 목록으로
        </Link>
        {wine.winery && (
          <Link
            href={`/brands/${encodeURIComponent(wine.winery.nameEn)}`}
            className="text-sm text-gray-500 hover:text-primary"
          >
            {wine.winery.nameKo}의 다른 와인 →
          </Link>
        )}
      </div>
    </div>
  )
}

function AwardsSection({
  awards,
}: {
  awards: { id: number; vintage: number; source: string; score: number }[]
}) {
  return (
    <div>
      <AwardList awards={awards.slice(0, 6)} />
      {awards.length > 6 && (
        <details className="mt-3">
          <summary className="text-sm cursor-pointer font-medium" style={{ color: '#7b2335' }}>
            All Vintages 더보기 ({awards.length}개)
          </summary>
          <div className="mt-3">
            <AwardList awards={awards} showAll />
          </div>
        </details>
      )}
    </div>
  )
}
