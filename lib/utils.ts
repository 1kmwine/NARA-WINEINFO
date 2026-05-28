export function formatRegion(regionL1: string, regionL2?: string | null): string {
  if (regionL2) return `${regionL1} > ${regionL2}`
  return regionL1
}

export function sourceTypeLabel(sourceType: string): string {
  const labels: Record<string, string> = {
    naver_blog: '네이버 블로그 시음 후기',
    naver_cafe: '와쌉 카페 언급',
    youtube: 'YouTube 컨텐츠',
    instagram: '인스타그램',
    winery_official: '와이너리 공식 계정',
    article: '해외 기사/리뷰',
    wine_searcher: '와인서쳐 정보 & 가격',
    winery_website: '공식 홈페이지',
    other: '기타 자료',
  }
  return labels[sourceType] ?? sourceType
}

export function sourceTypeOrder(sourceType: string): number {
  const order: Record<string, number> = {
    naver_blog: 1,
    naver_cafe: 2,
    youtube: 3,
    instagram: 4,
    winery_official: 5,
    article: 6,
    wine_searcher: 7,
    winery_website: 8,
    other: 9,
  }
  return order[sourceType] ?? 99
}

export function wineTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    red: '레드',
    white: '화이트',
    rose: '로제',
    sparkling: '스파클링',
    dessert: '디저트',
    fortified: '주정강화',
  }
  return labels[type] ?? type
}

export function formatVolume(volume: number): string {
  if (volume >= 1000) return `${volume / 1000}L`
  return `${volume}ml`
}

export function formatServingTemp(min?: number | null, max?: number | null): string {
  if (min == null && max == null) return '-'
  if (min != null && max != null) return `${min}~${max}°C`
  if (min != null) return `${min}°C 이상`
  if (max != null) return `${max}°C 이하`
  return '-'
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function parseJsonField<T>(value: string, fallback: T): T {
  try {
    return JSON.parse(value) as T
  } catch {
    return fallback
  }
}

export const SOURCE_TYPES = [
  'naver_blog',
  'naver_cafe',
  'youtube',
  'instagram',
  'winery_official',
  'article',
  'wine_searcher',
  'winery_website',
  'other',
] as const

export type SourceType = (typeof SOURCE_TYPES)[number]
