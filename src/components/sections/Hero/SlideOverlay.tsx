interface SlideOverlayProps {
  currentSlide: number
}

export default function SlideOverlay({ currentSlide }: SlideOverlayProps) {
  if (currentSlide === 0 || currentSlide === 1 || currentSlide === 2) {
    return (
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
    )
  }
  
  return null
}
