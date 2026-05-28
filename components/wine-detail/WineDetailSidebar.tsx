import Image from 'next/image'
import type { Wine, Winery, Award, WineGrape, Grape } from '@prisma/client'
import { ScaleGroup } from '@/components/ScaleBar'
import { AwardList } from '@/components/AwardBadge'

type SidebarProps = {
  wine: Wine & {
    winery: Winery | null
    grapes: Array<{ grape: Grape; percentage: number | null }>
    awards: Award[]
  }
}

export function WineDetailSidebar({ wine }: SidebarProps) {
  return (
    <aside className="w-full md:w-56 md:shrink-0">
      {/* 데스크탑: sticky. 모바일: static */}
      <div className="md:sticky md:top-20 space-y-5">
        {/* 병 이미지 */}
        <div className="flex justify-center">
          {wine.bottleImageUrl ? (
            <Image
              src={wine.bottleImageUrl}
              alt={wine.nameKo}
              width={120}
              height={280}
              className="object-contain max-h-64"
            />
          ) : (
            <div className="w-24 h-56 bg-gray-50 rounded-lg flex items-center justify-center text-5xl">
              🍾
            </div>
          )}
        </div>

        {/* 척도 */}
        <div className="bg-gray-50 rounded-xl p-4">
          <ScaleGroup
            sweetness={wine.sweetness}
            acidity={wine.acidity}
            body={wine.body}
            tannin={wine.tannin}
            fizz={wine.fizz}
          />
        </div>

        {/* 수상 내역 */}
        {wine.awards.length > 0 && (
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">수상 내역</p>
            <AwardList awards={wine.awards} maxVisible={5} />
          </div>
        )}

        {/* 병 이미지 다운로드 */}
        {wine.bottleImageUrl && (
          <a
            href={wine.bottleImageUrl}
            download
            className="block w-full text-center text-xs py-2 border border-gray-200 rounded-lg text-gray-500 hover:border-primary hover:text-primary transition-colors"
          >
            📥 병 이미지 다운로드
          </a>
        )}
      </div>
    </aside>
  )
}
