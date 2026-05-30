import type { WineType, SourceType, CheckPoint } from './types'

export function wineTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    red: '레드', white: '화이트', rose: '로제',
    sparkling: '스파클링', dessert: '디저트', fortified: '주정강화',
  }
  return labels[type] ?? type
}

export function wineTypeColor(type: string): string {
  const colors: Record<string, string> = {
    red: '#7b2335', white: '#b8860b', rose: '#c06080',
    sparkling: '#2c6e9b', dessert: '#8b6914', fortified: '#5a3e1b',
  }
  return colors[type] ?? '#666'
}

export function sourceTypeLabel(type: SourceType | string): string {
  const labels: Record<string, string> = {
    naver_blog: '네이버 블로그',
    naver_cafe: '네이버 카페',
    youtube: 'YouTube',
    instagram: '인스타그램',
    wine_searcher: '와인서쳐',
    winery_official: '와이너리 공식',
    article_kr: '국내 기사',
    article_global: '해외 기사',
    other: '기타',
  }
  return labels[type] ?? type
}

export function sourceTypeIcon(type: SourceType | string): string {
  const icons: Record<string, string> = {
    naver_blog: '📝', naver_cafe: '☕', youtube: '📺',
    instagram: '📸', wine_searcher: '🔍', winery_official: '🏰',
    article_kr: '📰', article_global: '🌐', other: '📌',
  }
  return icons[type] ?? '📌'
}

export function formatVolume(ml: number): string {
  return ml >= 1000 ? `${ml / 1000}L` : `${ml}ml`
}

export function formatServingTemp(min?: number | null, max?: number | null): string {
  if (!min && !max) return '-'
  if (min && max) return `${min} ~ ${max} °C`
  return `${min ?? max} °C`
}

export function formatRegion(country: string, r1: string, r2?: string | null): string {
  return [country, r1, r2].filter(Boolean).join(' > ')
}

export function parseJsonField<T>(json: string | null | undefined, fallback: T): T {
  if (!json) return fallback
  try { return JSON.parse(json) as T } catch { return fallback }
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function formatDate(date: Date | string | null | undefined): string {
  if (!date) return ''
  return new Date(date).toLocaleDateString('ko-KR', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}
