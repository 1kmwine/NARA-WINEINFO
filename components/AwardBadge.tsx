import type { Award } from '@prisma/client'

export function AwardBadge({ award }: { award: Award }) {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="text-xs text-[#6b6b6b]">{award.vintage}</span>
      <span
        className="inline-flex items-center justify-center h-6 rounded-full px-2 gap-1"
        style={{ background: '#111111', minWidth: 48 }}
      >
        <span className="text-xs font-bold text-white leading-none">{award.score}</span>
        <span className="text-[9px] font-semibold leading-none" style={{ color: 'rgba(255,255,255,0.65)' }}>
          {award.source}
        </span>
      </span>
    </div>
  )
}

export function AwardList({ awards, maxVisible = 3 }: { awards: Award[]; maxVisible?: number }) {
  if (!awards.length) return null
  const visible = awards.slice(0, maxVisible)
  const rest = awards.length - maxVisible

  return (
    <div className="space-y-1.5">
      {visible.map(a => (
        <AwardBadge key={a.id} award={a} />
      ))}
      {rest > 0 && (
        <p className="text-xs text-[#b3b3b3] mt-1">+ {rest}개 더보기</p>
      )}
    </div>
  )
}
