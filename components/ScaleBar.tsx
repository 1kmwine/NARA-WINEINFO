interface ScaleBarProps {
  label: string
  value: number | null | undefined
}

export function ScaleBar({ label, value }: ScaleBarProps) {
  const filled = value ?? 0
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-[#6b6b6b] w-8 text-right shrink-0">{label}</span>
      <div className="flex gap-1">
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full"
            style={{ background: i < filled ? '#1B4332' : '#e8e8e8' }}
          />
        ))}
      </div>
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
    <div className="space-y-2.5">
      {sweetness != null && <ScaleBar label="당도" value={sweetness} />}
      {acidity != null && <ScaleBar label="산도" value={acidity} />}
      {body != null && <ScaleBar label="바디" value={body} />}
      {tannin != null && <ScaleBar label="타닌" value={tannin} />}
      {fizz != null && <ScaleBar label="기포" value={fizz} />}
    </div>
  )
}
