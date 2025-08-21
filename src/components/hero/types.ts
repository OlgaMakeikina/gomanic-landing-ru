export interface HeroSlide {
  id: number
  image: string
  title: string
  subtitle: string
  content?: string
  services?: Array<{
    name: string
    oldPrice: number
    newPrice: number
  }>
  benefits?: string[]
}

export interface SlideProps {
  slideData: HeroSlide
  onButtonAction: (action: string, id?: string) => void
}
