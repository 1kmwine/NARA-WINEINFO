import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

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
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: '#7b2335' }}
                >
                  N
                </div>
                <span className="font-bold text-lg tracking-tight" style={{ color: '#7b2335' }}>
                  NARA WINEINFO
                </span>
              </Link>

              {/* Navigation */}
              <nav className="hidden md:flex items-center gap-6">
                <Link
                  href="/wines"
                  className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                >
                  와인검색
                </Link>
                <Link
                  href="/brands"
                  className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                >
                  브랜드
                </Link>
                <Link
                  href="/regions"
                  className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                >
                  지역
                </Link>
                <Link
                  href="/varieties"
                  className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                >
                  품종
                </Link>
              </nav>

              {/* Mobile menu button */}
              <button className="md:hidden p-2 rounded text-gray-600 hover:text-primary" aria-label="메뉴">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        <main className="min-h-screen">{children}</main>

        <footer className="bg-gray-900 text-gray-400 mt-20">
          <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div>
                <div className="text-white font-bold text-lg mb-2">NARA CELLAR</div>
                <p className="text-sm">나라셀라 와인 정보 플랫폼</p>
                <p className="text-xs mt-1">© {new Date().getFullYear()} NARA CELLAR. All rights reserved.</p>
              </div>
              <div className="flex gap-8 text-sm">
                <div>
                  <div className="text-white font-medium mb-2">탐색</div>
                  <ul className="space-y-1">
                    <li><Link href="/wines" className="hover:text-white transition-colors">와인검색</Link></li>
                    <li><Link href="/brands" className="hover:text-white transition-colors">브랜드</Link></li>
                    <li><Link href="/regions" className="hover:text-white transition-colors">지역</Link></li>
                    <li><Link href="/varieties" className="hover:text-white transition-colors">품종</Link></li>
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
