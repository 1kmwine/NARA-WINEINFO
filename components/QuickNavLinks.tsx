'use client'

import Link from 'next/link'

const NAV_ITEMS = [
  { href: '/wines?type=red', label: '🍷 레드', color: '#7b2335' },
  { href: '/wines?type=white', label: '🥂 화이트', color: '#b8860b' },
  { href: '/wines?type=rose', label: '🌹 로제', color: '#c06080' },
  { href: '/wines?type=sparkling', label: '✨ 스파클링', color: '#2c6e9b' },
  { href: '/wines?type=dessert', label: '🍯 디저트', color: '#8b6914' },
]

export default function QuickNavLinks() {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="px-4 py-2 rounded-full border text-sm font-medium transition-colors"
          style={{ borderColor: item.color, color: item.color }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = item.color
            e.currentTarget.style.color = '#fff'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = ''
            e.currentTarget.style.color = item.color
          }}
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}
