'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LINKS = [
  { href: '/wines', label: '와인검색' },
  { href: '/brands', label: '브랜드' },
  { href: '/regions', label: '지역' },
  { href: '/varieties', label: '품종' },
]

export function NavLinks() {
  const pathname = usePathname()
  return (
    <nav className="hidden md:flex items-center">
      {LINKS.map(({ href, label }) => {
        const active = pathname === href || pathname.startsWith(href + '/')
        return (
          <Link
            key={href}
            href={href}
            className="flex items-center h-14 px-0.5 ml-7 text-[11px] font-medium tracking-[0.04em] uppercase border-b-2 transition-colors"
            style={{
              color: active ? '#111111' : '#b3b3b3',
              borderBottomColor: active ? '#111111' : 'transparent',
            }}
          >
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
