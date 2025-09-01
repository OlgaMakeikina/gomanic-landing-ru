interface SlideNavigationProps {
  currentSlide: number
  totalSlides: number
  onSlideChange: (index: number) => void
}

export default function SlideNavigation({ 
  currentSlide, 
  totalSlides, 
  onSlideChange 
}: SlideNavigationProps) {

  const handlePrevSlide = () => {
    const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides
    onSlideChange(prevIndex)
  }

  const handleNextSlide = () => {
    const nextIndex = (currentSlide + 1) % totalSlides
    onSlideChange(nextIndex)
  }

  return (
    <nav 
      role="navigation" 
      aria-label="Navegação de slides da apresentação"
      className="absolute inset-0 z-30 pointer-events-none"
    >
      {/* Navigation counter only */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-auto">
        <div className="text-center">
          {/* Counter */}
          <span 
            className="text-sm block" 
            style={{
              color: '#FEFEFE', 
              opacity: 0.8,
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(14px, 2vw, 16px)'
            }}
            role="status"
            aria-live="polite"
            aria-label={`Slide ${currentSlide + 1} de ${totalSlides}`}
          >
            {currentSlide + 1} / {totalSlides}
          </span>
        </div>
      </div>

      {/* Desktop arrows only */}
      <button
        onClick={handlePrevSlide}
        className="hidden lg:flex absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 items-center justify-center text-white hover:bg-white/30 transition-all duration-300 pointer-events-auto"
        aria-label="Ir para slide anterior"
        type="button"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <polyline points="15,18 9,12 15,6"></polyline>
        </svg>
      </button>

      <button
        onClick={handleNextSlide}
        className="hidden lg:flex absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 items-center justify-center text-white hover:bg-white/30 transition-all duration-300 pointer-events-auto"
        aria-label="Ir para próximo slide"
        type="button"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <polyline points="9,6 15,12 9,18"></polyline>
        </svg>
      </button>
    </nav>
  )
}
