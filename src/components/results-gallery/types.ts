export interface GalleryData {
  portfolio: string[]
  beforeAfter: string[]
}

export interface TabProps {
  isActive: boolean
  number: string
  title: string
  onClick: () => void
}

export interface GalleryContentProps {
  activeTab: 'portfolio' | 'before-after'
  portfolioData: string[]
  beforeAfterData: string[]
}

export interface CtaBlockProps {
  onCtaClick: () => void
}
