export interface SlideMetadata {
  title: string
  subtitle?: string
  author?: string
  role?: string
  organization?: string
  date?: string
}

export interface SlideData {
  id: number
  title: string
  section?: string
  partNumber?: number
  content: string
  background?: 'default' | 'alt'
}

export interface ParsedPresentation {
  metadata: SlideMetadata
  slides: SlideData[]
}
