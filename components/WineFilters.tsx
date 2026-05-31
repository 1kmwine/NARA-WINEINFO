'use client'

import { useRouter, useSearchParams } from 'next/navigation'

const TYPES = [
  { value: '', label: '전체' },
  { value: 'red', label: '레드' },
  { value: 'white', label: '화이트' },
  { value: 'rose', label: '로제' },
  { value: 'sparkling', label: '스파클링' },
  { value: 'dessert', label: '디저트' },
]

function FilterItem({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left text-[13px] px-2.5 py-1.5 rounded transition-all"
      style={{
        color: active ? '#1B4332' : '#6b6b6b',
        fontWeight: active ? 600 : 400,
        background: active ? '#f9f9f9' : 'transparent',
      }}
    >
      {label}
    </button>
  )
}

export function WineFilters({ countries }: { countries: string[] }) {
  const router = useRouter()
  const params = useSearchParams()

  function update(key: string, value: string) {
    const p = new URLSearchParams(params.toString())
    if (value) p.set(key, value)
    else p.delete(key)
    p.delete('page')
    router.push(`/wines?${p.toString()}`)
  }

  const activeType = params.get('type') ?? ''
  const activeCountry = params.get('country') ?? ''

  return (
    <div className="space-y-5">
      <div>
        <p className="text-[11px] font-medium tracking-[0.04em] uppercase text-[#b3b3b3] mb-3">타입</p>
        <div className="space-y-0.5">
          {TYPES.map(t => (
            <FilterItem
              key={t.value}
              label={t.label}
              active={activeType === t.value}
              onClick={() => update('type', t.value)}
            />
          ))}
        </div>
      </div>
      {countries.length > 0 && (
        <div>
          <p className="text-[11px] font-medium tracking-[0.04em] uppercase text-[#b3b3b3] mb-3">국가</p>
          <div className="space-y-0.5">
            <FilterItem
              label="전체"
              active={!activeCountry}
              onClick={() => update('country', '')}
            />
            {countries.map(c => (
              <FilterItem
                key={c}
                label={c}
                active={activeCountry === c}
                onClick={() => update('country', c)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
