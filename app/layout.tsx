import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'
import { NavLinks } from '@/components/NavLinks'

export const metadata: Metadata = {
  title: {
    default: 'NARA WINEINFO',
    template: '%s | NARA WINEINFO',
  },
  description: '나라셀라 와인 정보 플랫폼 - 2000여 종 와인의 상세 정보를 한눈에',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <header className="sticky top-0 z-50 bg-white border-b border-[#e8e8e8] h-14 flex items-center px-8">
          <Link
            href="/"
            className="text-[15px] font-semibold tracking-[-0.01em] leading-none"
            style={{ color: '#111111' }}
          >
            Nara Wineinfo
          </Link>
          <div className="flex-1" />
          <NavLinks />
          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded text-[#b3b3b3] hover:text-[#111111] transition-colors" aria-label="메뉴">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </header>

        <main className="min-h-screen">{children}</main>

        <footer className="border-t border-[#e8e8e8] bg-[#f9f9f9] mt-20">
          <div className="max-w-[1040px] mx-auto px-8 py-10">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div>
                <div className="text-[15px] font-semibold text-[#111111] tracking-[-0.01em] mb-1">Nara Wineinfo</div>
                <p className="text-[13px] text-[#6b6b6b]">나라셀라 와인 정보 플랫폼</p>
                <p className="text-xs text-[#b3b3b3] mt-1">© {new Date().getFullYear()} NARA CELLAR. All rights reserved.</p>
              </div>
              <div className="flex gap-8 text-[13px]">
                <div>
                  <div className="text-[11px] font-medium tracking-[0.04em] uppercase text-[#b3b3b3] mb-3">탐색</div>
                  <ul className="space-y-2">
                    <li><Link href="/wines" className="text-[#6b6b6b] hover:text-[#111111] transition-colors">와인검색</Link></li>
                    <li><Link href="/brands" className="text-[#6b6b6b] hover:text-[#111111] transition-colors">브랜드</Link></li>
                    <li><Link href="/regions" className="text-[#6b6b6b] hover:text-[#111111] transition-colors">지역</Link></li>
                    <li><Link href="/varieties" className="text-[#6b6b6b] hover:text-[#111111] transition-colors">품종</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
