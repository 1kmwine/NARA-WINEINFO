import type { Award } from '@prisma/client'

interface AwardBadgeProps {
  award: Award
}

export function AwardBadge({ award }: AwardBadgeProps) {
  return (
    <div className="inline-flex items-center gap-1 text-sm">
      <span className="text-gray-600">{award.vintage}</span>
      <span className="px-1.5 py-0.5 bg-gray-800 text-white text-xs font-bold rounded">
        {award.source}
      </span>
      <span
        className="px-1.5 py-0.5 text-white text-xs font-bold rounded"
        style={{ background: '#7b2335' }}
      >
        {award.score}
      </span>
    </div>
  )
}

interface AwardListProps {
  awards: Award[]
  maxVisible?: number
}

export function AwardList({ awards, maxVisible = 3 }: AwardListProps) {
  if (!awards.length) return null
  const visible = awards.slice(0, maxVisible)
  const rest = awards.length - maxVisible

  return (
    <div className="space-y-1.5">
      {visible.map((a) => (
        <AwardBadge key={a.id} award={a} />
      ))}
      {rest > 0 && (
        <p className="text-xs text-gray-400 mt-1">+ {rest}개 더보기</p>
      )}
    </div>
  )
}
