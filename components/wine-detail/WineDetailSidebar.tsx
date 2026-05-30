import Image from 'next/image'
import type { Wine, Winery, Award, Grape } from '@prisma/client'
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
    <aside className="w-full md:w-[180px] md:shrink-0">
      <div className="md:sticky md:top-20 flex flex-col gap-4">
        {/* 병 이미지 */}
        <div
          className="flex justify-center rounded-lg border border-[#e8e8e8]"
          style={{ background: '#f9f9f9', padding: '28px 12px 20px' }}
        >
          {wine.bottleImageUrl ? (
            <Image
              src={wine.bottleImageUrl}
              alt={wine.nameKo}
              width={80}
              height={120}
              className="object-contain"
              style={{ maxHeight: 120 }}
            />
          ) : (
            <div className="flex items-center justify-center text-5xl" style={{ height: 120 }}>
              🍾
            </div>
          )}
        </div>

        {/* 맛 프로필 */}
        <div className="border border-[#e8e8e8] rounded-lg p-4">
          <p className="text-[10px] font-medium tracking-[0.06em] uppercase text-[#b3b3b3] mb-3.5">
            Taste Profile
          </p>
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
          <div className="border border-[#e8e8e8] rounded-lg p-4">
            <p className="text-[10px] font-medium tracking-[0.06em] uppercase text-[#b3b3b3] mb-3">
              Awards
            </p>
            <AwardList awards={wine.awards} maxVisible={5} />
          </div>
        )}

        {/* 병 이미지 다운로드 */}
        {wine.bottleImageUrl && (
          <a
            href={wine.bottleImageUrl}
            download
            className="block w-full text-center text-xs py-2 border border-[#e8e8e8] rounded-lg text-[#6b6b6b] hover:border-[#1B4332] hover:text-[#1B4332] transition-colors"
          >
            📥 병 이미지 다운로드
          </a>
        )}
      </div>
    </aside>
  )
}
