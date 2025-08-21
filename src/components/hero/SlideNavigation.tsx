interface SlideNavigationProps {
  currentSlide: number
  totalSlides: number
  onGoToSlide: (index: number) => void
}

export default function SlideNavigation({ currentSlide, totalSlides, onGoToSlide }: SlideNavigationProps) {
  const handlePrevious = () => {
    onGoToSlide((currentSlide - 1 + totalSlides) % totalSlides)
  }

  const handleNext = () => {
    onGoToSlide((currentSlide + 1) % totalSlides)
  }

  return (
    <>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="text-center">
          <span className="text-sm" style={{
            color: '#FEFEFE', 
            opacity: 0.8,
            fontFamily: 'Garet, sans-serif',
            fontWeight: 400,
            fontSize: 'clamp(14px, 2vw, 16px)'
          }}>
            {currentSlide + 1} / {totalSlides}
          </span>
        </div>
      </div>

      <button
        onClick={handlePrevious}
        className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 touch-manipulation"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15,18 9,12 15,6"></polyline>
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 touch-manipulation"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9,6 15,12 9,18"></polyline>
        </svg>
      </button>
    </>
  )
}
