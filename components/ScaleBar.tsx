'use client'

type ScaleBarProps = {
  label: string
  value?: number | null
  min?: number
  max?: number
  leftLabel?: string
  rightLabel?: string
}

export default function ScaleBar({
  label,
  value,
  min = 1,
  max = 5,
  leftLabel,
  rightLabel,
}: ScaleBarProps) {
  const total = max - min + 1
  const filled = value != null ? Math.min(Math.max(value - min + 1, 0), total) : 0

  return (
    <div className="flex items-center gap-3">
      <div className="w-16 text-right">
        <span className="text-sm font-medium text-gray-700">{label}</span>
      </div>
      <div className="flex items-center gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className="w-5 h-5 rounded-full border-2 transition-colors"
            style={{
              backgroundColor: i < filled ? '#7b2335' : '#e5e5e5',
              borderColor: i < filled ? '#7b2335' : '#e5e5e5',
            }}
          />
        ))}
      </div>
      {leftLabel && rightLabel && (
        <div className="flex items-center gap-1 text-xs text-gray-400">
          <span>{leftLabel}</span>
          <span>/</span>
          <span>{rightLabel}</span>
        </div>
      )}
    </div>
  )
}

type ScaleGroupProps = {
  sweetness?: number | null
  acidity?: number | null
  body?: number | null
  tannin?: number | null
}

export function ScaleGroup({ sweetness, acidity, body, tannin }: ScaleGroupProps) {
  return (
    <div className="space-y-3 py-2">
      <ScaleBar
        label="당도"
        value={sweetness}
        leftLabel="드라이"
        rightLabel="스위트"
      />
      <ScaleBar
        label="산도"
        value={acidity}
        leftLabel="낮음"
        rightLabel="높음"
      />
      <ScaleBar
        label="바디"
        value={body}
        leftLabel="가벼움"
        rightLabel="무거움"
      />
      {tannin != null && (
        <ScaleBar
          label="타닌"
          value={tannin}
          leftLabel="부드러움"
          rightLabel="강함"
        />
      )}
    </div>
  )
}
