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

  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">타입</p>
        <div className="flex flex-wrap gap-2 md:flex-col md:gap-1">
          {TYPES.map(t => (
            <button
              key={t.value}
              onClick={() => update('type', t.value)}
              className={`text-left text-sm px-3 py-1.5 rounded-lg transition-colors ${
                (params.get('type') ?? '') === t.value
                  ? 'text-white font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              style={(params.get('type') ?? '') === t.value ? { background: '#7b2335' } : {}}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
      {countries.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">원산지</p>
          <div className="flex flex-wrap gap-2 md:flex-col md:gap-1">
            <button
              onClick={() => update('country', '')}
              className={`text-left text-sm px-3 py-1.5 rounded-lg ${!params.get('country') ? 'text-white font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
              style={!params.get('country') ? { background: '#7b2335' } : {}}
            >
              전체
            </button>
            {countries.map(c => (
              <button
                key={c}
                onClick={() => update('country', c)}
                className={`text-left text-sm px-3 py-1.5 rounded-lg ${params.get('country') === c ? 'text-white font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
                style={params.get('country') === c ? { background: '#7b2335' } : {}}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
