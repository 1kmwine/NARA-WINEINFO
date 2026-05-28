type AwardBadgeProps = {
  vintage: number
  source: string
  score: number
}

export default function AwardBadge({ vintage, source, score }: AwardBadgeProps) {
  return (
    <div className="inline-flex items-center gap-1 text-sm">
      <span className="text-gray-700 font-medium">{vintage}</span>
      <span className="bg-gray-700 text-white text-xs font-bold px-2 py-0.5 rounded">
        {source}
      </span>
      <span
        className="text-white text-xs font-bold px-2 py-0.5 rounded"
        style={{ backgroundColor: '#7b2335' }}
      >
        {score}
      </span>
    </div>
  )
}

type AwardListProps = {
  awards: {
    id: number
    vintage: number
    source: string
    score: number
  }[]
  showAll?: boolean
}

export function AwardList({ awards, showAll = false }: AwardListProps) {
  const displayed = showAll ? awards : awards.slice(0, 6)

  // Group by vintage, sorted desc
  const grouped = displayed.reduce<Record<number, typeof awards>>((acc, award) => {
    if (!acc[award.vintage]) acc[award.vintage] = []
    acc[award.vintage].push(award)
    return acc
  }, {})

  const vintages = Object.keys(grouped)
    .map(Number)
    .sort((a, b) => b - a)

  return (
    <div className="space-y-3">
      {vintages.map((vintage) => (
        <div key={vintage} className="flex flex-wrap gap-2 items-center">
          {grouped[vintage].map((award) => (
            <AwardBadge
              key={award.id}
              vintage={award.vintage}
              source={award.source}
              score={award.score}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
