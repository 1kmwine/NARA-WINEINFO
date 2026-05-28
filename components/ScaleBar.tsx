interface ScaleBarProps {
  label: string
  value: number | null | undefined
  min?: number
  max?: number
  minLabel?: string
  maxLabel?: string
}

export function ScaleBar({ label, value, minLabel, maxLabel }: ScaleBarProps) {
  const filled = value ?? 0
  return (
    <div className="flex items-center gap-2 py-1">
      <span className="spec-label w-8 text-right text-xs shrink-0">{label}</span>
      <div className="flex gap-1">
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full"
            style={{ background: i < filled ? '#7b2335' : '#e5e7eb' }}
          />
        ))}
      </div>
      {minLabel && maxLabel && (
        <span className="text-xs text-gray-400 ml-1">
          {filled <= 2 ? minLabel : filled >= 4 ? maxLabel : ''}
        </span>
      )}
    </div>
  )
}

interface ScaleGroupProps {
  sweetness?: number | null
  acidity?: number | null
  body?: number | null
  tannin?: number | null
  fizz?: number | null
}

export function ScaleGroup({ sweetness, acidity, body, tannin, fizz }: ScaleGroupProps) {
  return (
    <div className="space-y-1">
      {sweetness != null && (
        <ScaleBar label="당도" value={sweetness} minLabel="드라이" maxLabel="스위트" />
      )}
      {acidity != null && (
        <ScaleBar label="산도" value={acidity} minLabel="낮음" maxLabel="높음" />
      )}
      {body != null && (
        <ScaleBar label="바디" value={body} minLabel="가벼움" maxLabel="무거움" />
      )}
      {tannin != null && (
        <ScaleBar label="타닌" value={tannin} minLabel="낮음" maxLabel="높음" />
      )}
      {fizz != null && (
        <ScaleBar label="기포" value={fizz} minLabel="낮음" maxLabel="높음" />
      )}
    </div>
  )
}
