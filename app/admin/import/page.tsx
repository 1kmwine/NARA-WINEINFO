'use client'

import { useState } from 'react'

type PreviewData = { preview: Record<string, unknown>[]; total: number }
type ImportResult = { created: number; updated: number; failed: number; errors: Array<{ row: number; reason: string }> }

export default function ImportPage() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<PreviewData | null>(null)
  const [result, setResult] = useState<ImportResult | null>(null)
  const [loading, setLoading] = useState(false)

  async function handlePreview() {
    if (!file) return
    setLoading(true)
    const fd = new FormData()
    fd.append('file', file)
    fd.append('preview', 'true')
    const res = await fetch('/api/admin/import', { method: 'POST', body: fd })
    setPreview(await res.json())
    setLoading(false)
  }

  async function handleImport() {
    if (!file) return
    setLoading(true)
    const fd = new FormData()
    fd.append('file', file)
    const res = await fetch('/api/admin/import', { method: 'POST', body: fd })
    setResult(await res.json())
    setLoading(false)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">와인 데이터 임포트</h1>
      <p className="text-sm text-gray-500 mb-6">Excel(.xlsx) 또는 CSV 파일을 업로드하세요. slug 기준으로 upsert 됩니다.</p>

      <div className="bg-gray-50 rounded-xl p-6 mb-6">
        <input
          type="file"
          accept=".xlsx,.csv"
          onChange={e => { setFile(e.target.files?.[0] ?? null); setPreview(null); setResult(null) }}
          className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-white file:text-gray-700 hover:file:bg-gray-100"
        />
        {file && (
          <div className="flex gap-3 mt-4">
            <button
              onClick={handlePreview}
              disabled={loading}
              className="px-4 py-2 bg-gray-700 text-white text-sm rounded-lg hover:bg-gray-800 disabled:opacity-50"
            >
              미리보기 (5행)
            </button>
            {preview && (
              <button
                onClick={handleImport}
                disabled={loading}
                className="px-4 py-2 text-white text-sm rounded-lg disabled:opacity-50"
                style={{ background: '#7b2335' }}
              >
                {loading ? '임포트 중...' : `전체 ${preview.total}행 임포트`}
              </button>
            )}
          </div>
        )}
      </div>

      {preview && !result && (
        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-700 mb-2">미리보기 (첫 5행, 전체 {preview.total}행)</p>
          <div className="overflow-x-auto">
            <table className="text-xs border-collapse w-full">
              <thead>
                <tr className="bg-gray-100">
                  {Object.keys(preview.preview[0] ?? {}).slice(0, 8).map(k => (
                    <th key={k} className="border border-gray-200 px-2 py-1 text-left">{k}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {preview.preview.map((row, i) => (
                  <tr key={i}>
                    {Object.values(row).slice(0, 8).map((v, j) => (
                      <td key={j} className="border border-gray-200 px-2 py-1">{String(v ?? '')}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {result && (
        <div className="bg-white border rounded-xl p-6">
          <h2 className="font-semibold text-gray-900 mb-3">임포트 결과</h2>
          <div className="flex gap-6 text-sm mb-4">
            <div><span className="text-green-600 font-bold text-lg">{result.created}</span> 생성</div>
            <div><span className="text-blue-600 font-bold text-lg">{result.updated}</span> 업데이트</div>
            <div><span className="text-red-600 font-bold text-lg">{result.failed}</span> 실패</div>
          </div>
          {result.errors.length > 0 && (
            <div className="text-xs text-red-600 space-y-1">
              {result.errors.map(e => (
                <p key={e.row}>{e.row}행: {e.reason}</p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
