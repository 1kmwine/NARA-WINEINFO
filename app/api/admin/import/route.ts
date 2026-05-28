import { NextRequest, NextResponse } from 'next/server'
import * as XLSX from 'xlsx'
import { wineRepo } from '@/lib/wine-repository'
import { slugify } from '@/lib/utils'
import type { WineInput, WineType } from '@/lib/types'

function parseRow(row: Record<string, unknown>): WineInput | null {
  const slug = String(row['slug'] ?? '').trim() || slugify(String(row['nameKo'] ?? ''))
  const nameKo = String(row['nameKo'] ?? '').trim()
  const type = String(row['type'] ?? '').trim() as WineType
  const country = String(row['country'] ?? '').trim()
  const regionL1 = String(row['regionL1'] ?? '').trim()

  if (!slug || !nameKo || !type || !country || !regionL1) return null

  const grapeStr = String(row['grapes'] ?? '')
  const grapes = grapeStr
    ? grapeStr.split(',').map(g => {
        const [name, pct] = g.trim().split(':')
        const parts = name.trim().split('/')
        return { nameKo: parts[0].trim(), nameEn: parts[1]?.trim() ?? parts[0].trim(), percentage: pct ? parseInt(pct) : undefined }
      })
    : undefined

  const foodStr = String(row['foodPairing'] ?? '')
  const foodPairing = foodStr ? foodStr.split(',').map(f => f.trim()).filter(Boolean) : []

  return {
    slug,
    nameKo,
    nameEn: String(row['nameEn'] ?? nameKo).trim(),
    subtitle: String(row['subtitle'] ?? '').trim() || undefined,
    erpCode: String(row['erpCode'] ?? '').trim() || undefined,
    wineryName: String(row['wineryName'] ?? '').trim() || undefined,
    type,
    country,
    regionL1,
    regionL2: String(row['regionL2'] ?? '').trim() || undefined,
    volume: row['volume'] ? Number(row['volume']) : 750,
    servingTempMin: row['servingTempMin'] ? Number(row['servingTempMin']) : undefined,
    servingTempMax: row['servingTempMax'] ? Number(row['servingTempMax']) : undefined,
    sweetness: row['sweetness'] ? Number(row['sweetness']) : undefined,
    acidity: row['acidity'] ? Number(row['acidity']) : undefined,
    body: row['body'] ? Number(row['body']) : undefined,
    tannin: row['tannin'] ? Number(row['tannin']) : undefined,
    fizz: row['fizz'] ? Number(row['fizz']) : undefined,
    foodPairing,
    description: String(row['description'] ?? '').trim() || undefined,
    wineStory: String(row['wineStory'] ?? '').trim() || undefined,
    tastingNotes: String(row['tastingNotes'] ?? '').trim() || undefined,
    productionMethod: String(row['productionMethod'] ?? '').trim() || undefined,
    bottleImageUrl: String(row['bottleImageUrl'] ?? '').trim() || undefined,
    grapes,
  }
}

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const file = formData.get('file') as File | null
  const preview = formData.get('preview') === 'true'

  if (!file) return NextResponse.json({ error: '파일이 없습니다' }, { status: 400 })

  const buffer = await file.arrayBuffer()
  const workbook = XLSX.read(buffer, { type: 'buffer' })
  const sheet = workbook.Sheets[workbook.SheetNames[0]]
  const rows = XLSX.utils.sheet_to_json(sheet) as Record<string, unknown>[]

  if (preview) {
    return NextResponse.json({ preview: rows.slice(0, 5), total: rows.length })
  }

  let created = 0, updated = 0, failed = 0
  const errors: Array<{ row: number; reason: string }> = []

  for (let i = 0; i < rows.length; i++) {
    const input = parseRow(rows[i])
    if (!input) {
      failed++
      errors.push({ row: i + 2, reason: '필수 필드 누락 (slug/nameKo/type/country/regionL1)' })
      continue
    }
    try {
      const existing = await wineRepo.findBySlug(input.slug).catch(() => null)
      await wineRepo.upsert(input)
      existing ? updated++ : created++
    } catch (e) {
      failed++
      errors.push({ row: i + 2, reason: String(e) })
    }
  }

  return NextResponse.json({ created, updated, failed, errors })
}
