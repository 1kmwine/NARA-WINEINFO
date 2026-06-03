export type WineType = 'red' | 'white' | 'rose' | 'sparkling' | 'dessert' | 'fortified'

export type ImageType = 'bottle' | 'winery' | 'vineyard' | 'label' | 'other'

export type ScrapeStatus = 'pending' | 'running' | 'done' | 'failed'

export type SourceType =
  | 'naver_blog'
  | 'naver_cafe'
  | 'youtube'
  | 'instagram'
  | 'wine21'
  | 'sommelier_times'
  | 'wine_searcher'
  | 'winery_official'
  | 'article_kr'
  | 'article_global'
  | 'other'

export interface CheckPoint {
  label: string
  text: string
}

export interface WineFilter {
  type?: WineType
  country?: string
  regionL1?: string
  wineryId?: number
  grapeId?: number
  q?: string
  page?: number
  pageSize?: number
  isPublished?: boolean
}

export interface WineInput {
  slug: string
  nameKo: string
  nameEn: string
  subtitle?: string
  erpCode?: string
  wineryName?: string
  type: WineType
  country: string
  regionL1: string
  regionL2?: string
  volume?: number
  servingTempMin?: number
  servingTempMax?: number
  foodPairing?: string[]
  sweetness?: number
  acidity?: number
  body?: number
  tannin?: number
  fizz?: number
  description?: string
  wineStory?: string
  tastingNotes?: string
  productionMethod?: string
  checkpoints?: CheckPoint[]
  bottleImageUrl?: string
  grapes?: Array<{ nameKo: string; nameEn: string; percentage?: number }>
  awards?: Array<{ vintage: number; source: string; score: number }>
}

export interface PaginatedResult<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}
