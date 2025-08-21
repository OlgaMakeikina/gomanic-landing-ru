export interface GalleryImage {
  filename: string
  offset: number
}

export interface PortfolioColors {
  dark: string
  gray: string
  white: string
}

export interface GlassStyles {
  cardBg: string
  cardBorder: string
  cardShadow: string
  ctaBg: string
  ctaBorder: string
  ctaShadow: string
}

export interface CarouselControlsProps {
  onPrev: () => void
  onNext: () => void
  styles: GlassStyles
  colors: PortfolioColors
}

export interface GalleryCarouselProps {
  images: string[]
  currentIndex: number
  onPrev: () => void
  onNext: () => void
  onImageSelect: (index: number) => void
}

export interface GalleryIndicatorsProps {
  images: string[]
  currentIndex: number
  onSelect: (index: number) => void
  colors: PortfolioColors
}
