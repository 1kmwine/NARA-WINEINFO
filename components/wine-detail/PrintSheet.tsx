'use client'

import { useState } from 'react'
import { parseJsonField } from '@/lib/utils'
import type { WineWithRelations } from '@/lib/wine-repository'

type Props = { wine: WineWithRelations }

export function PrintButton({ wine }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-1.5 text-[13px] text-[#6b6b6b] border border-[#e8e8e8] rounded-lg px-4 py-2 hover:border-[#1B4332] hover:text-[#1B4332] transition-colors"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4">
          <rect x="2" y="4" width="10" height="7" rx="1"/>
          <path d="M4 4V2h6v2"/>
          <path d="M4 9h6v3H4z"/>
        </svg>
        와인설명서 출력하기
      </button>

      {open && <PrintModal wine={wine} onClose={() => setOpen(false)} />}
    </>
  )
}

function PrintModal({ wine, onClose }: Props & { onClose: () => void }) {
  const foodPairing = parseJsonField<string[]>(wine.foodPairing, [])
  const grapeStr = wine.grapes
    .map(g => g.percentage ? `${g.grape.nameKo} ${g.percentage}%` : g.grape.nameKo)
    .join(', ') || '-'
  const bodyLabel = (wine.body ?? 0) >= 4 ? 'Full body' : (wine.body ?? 0) >= 3 ? 'Medium body' : 'Light body'

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto print:block print:inset-0 print:overflow-visible"
      style={{ background: 'rgba(0,0,0,0.65)', padding: '60px 20px 20px' }}
    >
      {/* 컨트롤 버튼 */}
      <div className="fixed top-4 right-5 flex gap-2 z-50 print:hidden">
        <button
          onClick={() => window.print()}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white"
          style={{ background: '#1B4332' }}
        >
          🖨️ 인쇄 / PDF 저장
        </button>
        <button
          onClick={onClose}
          className="px-3.5 py-2 rounded-lg text-sm bg-white text-[#333] border border-[#ddd]"
        >
          ✕ 닫기
        </button>
      </div>

      {/* 인쇄 본문 */}
      <div
        className="bg-white shrink-0 print:shadow-none"
        style={{ width: 860, boxShadow: '0 16px 56px rgba(0,0,0,0.35)', fontFamily: "'Pretendard Variable', Pretendard, 'Apple SD Gothic Neo', sans-serif" }}
      >
        {/* 헤더 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'start', padding: '18px 28px 14px', borderBottom: '2px solid #111' }}>
          <div style={{ lineHeight: 1.25 }}>
            <p style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.15em', color: '#111', fontFamily: 'Georgia,serif' }}>
              {wine.winery?.nameEn || wine.winery?.nameKo || 'NARA WINEINFO'}
            </p>
            <p style={{ fontSize: 9, color: '#999', marginTop: 2, letterSpacing: '0.04em' }}>{wine.country}</p>
          </div>
          <div style={{ textAlign: 'center', padding: '0 20px' }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', color: '#444', textTransform: 'uppercase' }}>NARA WINEINFO</p>
            <p style={{ fontSize: 7.5, letterSpacing: '0.1em', color: '#999', textTransform: 'uppercase' }}>NARA CELLAR · WINE INFORMATION</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: 22, fontWeight: 900, color: '#111', letterSpacing: '0.18em', lineHeight: 1, fontFamily: 'Georgia,serif' }}>
              N<span style={{ fontSize: 16, verticalAlign: 'middle' }}>◈</span>RA
            </p>
            <p style={{ fontSize: 8.5, letterSpacing: '0.32em', color: '#888', textTransform: 'uppercase', marginTop: 3 }}>C E L L A R</p>
          </div>
        </div>

        {/* 2단 본문 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          {/* 왼쪽 — 와이너리 & 스토리 */}
          <div style={{ borderRight: '1px solid #ddd', padding: '22px 26px 20px' }}>
            <h2 style={{ fontSize: 15, fontWeight: 700, color: '#111', textAlign: 'center', textDecoration: 'underline', textUnderlineOffset: 3, marginBottom: 14 }}>
              {wine.winery?.nameKo || '-'}
            </h2>
            {/* 산지 이미지 플레이스홀더 */}
            <div style={{ width: '100%', height: 110, marginBottom: 14, borderRadius: 2, overflow: 'hidden', position: 'relative', background: 'linear-gradient(135deg,#4a7c3f 0%,#6a9e5a 30%,#8ab870 55%,#c8d890 75%,#e8d870 90%,#b8a840 100%)' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(0,0,0,0) 50%,rgba(0,0,0,0.25) 100%)' }} />
              <div style={{ position: 'absolute', bottom: 8, left: 10 }}>
                <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {wine.country} · {wine.regionL1}
                </p>
              </div>
            </div>

            {(wine.wineStory || wine.description) && (
              <p style={{ fontSize: 11.5, color: '#1a1a1a', lineHeight: 1.85, letterSpacing: '-0.005em', marginBottom: 11, wordBreak: 'keep-all' }}>
                {wine.wineStory || wine.description}
              </p>
            )}

            {wine.tastingNotes && (
              <>
                <div style={{ borderTop: '1px solid #ccc', margin: '12px 0' }} />
                <p style={{ fontSize: 11, color: '#1a1a1a', lineHeight: 1.85, letterSpacing: '-0.005em', wordBreak: 'keep-all' }}>
                  {wine.tastingNotes}
                </p>
              </>
            )}

            <div style={{ marginTop: 16, borderTop: '1px solid #e0e0e0', paddingTop: 10 }}>
              <p style={{ fontSize: 9.5, color: '#1B4332' }}>naracellar.com</p>
            </div>
          </div>

          {/* 오른쪽 — 스펙 & 수상 */}
          <div style={{ padding: '22px 26px 20px' }}>
            <div style={{ textAlign: 'center', marginBottom: 18, paddingBottom: 14, borderBottom: '1px solid #e0e0e0' }}>
              <h2 style={{ fontSize: 17, fontWeight: 800, color: '#111', letterSpacing: '-0.015em', lineHeight: 1.3, textDecoration: 'underline', textUnderlineOffset: 4, wordBreak: 'keep-all' }}>
                {wine.nameKo}
              </h2>
              {wine.nameEn && (
                <p style={{ fontSize: 12, color: '#c0392b', fontStyle: 'italic', marginTop: 5, fontWeight: 600, fontFamily: 'Georgia,serif' }}>
                  ({wine.nameEn})
                </p>
              )}
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 16 }}>
              <tbody>
                {[
                  ['원 산 지', wine.regionL1 || wine.country],
                  ['타    입', wine.type === 'red' ? '레드' : wine.type === 'white' ? '화이트' : wine.type === 'sparkling' ? '스파클링' : wine.type === 'rose' ? '로제' : wine.type],
                  ['바    디', bodyLabel],
                  ['품    종', grapeStr],
                  ['용    량', wine.volume ? `${wine.volume}ml` : '750ml'],
                  ['페어링', foodPairing.slice(0, 3).join(', ') || '-'],
                ].map(([k, v]) => (
                  <tr key={k}>
                    <td style={{ fontSize: 12, fontWeight: 700, color: '#111', padding: '4px 0', verticalAlign: 'top', whiteSpace: 'nowrap', width: 85 }}>▶ {k}</td>
                    <td style={{ fontSize: 12, color: '#222', padding: '4px 0 4px 4px', lineHeight: 1.55, wordBreak: 'keep-all' }}>:&nbsp;&nbsp;{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {wine.awards.length > 0 && (
              <div style={{ borderTop: '1px solid #e0e0e0', paddingTop: 12, marginBottom: 12 }}>
                {wine.awards.slice(0, 5).map((a, i) => (
                  <p key={i} style={{ fontSize: 12, color: '#222', lineHeight: 1.75, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ color: '#1B4332', fontSize: 10 }}>✓</span>
                    <span>{a.vintage} Vintage :&nbsp;</span>
                    <span style={{ fontWeight: 700, color: '#c0392b' }}>{a.source} {a.score}점</span>
                  </p>
                ))}
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 12 }}>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: 13, fontStyle: 'italic', color: '#444', fontFamily: 'Georgia,serif' }}>Nara Cellar</p>
                <p style={{ fontSize: 8.5, letterSpacing: '0.12em', color: '#888', textTransform: 'uppercase', marginTop: 1 }}>Wine Information</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          body > *:not([data-print-modal]) { display: none !important; }
          .fixed.inset-0 { position: absolute !important; background: white !important; padding: 0 !important; }
          .print\\:hidden { display: none !important; }
        }
      `}</style>
    </div>
  )
}
