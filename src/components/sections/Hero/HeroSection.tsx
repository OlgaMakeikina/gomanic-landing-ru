'use client'

import { useEffect, useRef } from 'react'
import { MasterConfig } from '@/types/master'
import { heroSlidesRU as heroSlides } from './data_RU'
import { generateMasterSlides } from '@/utils/master-slides'
import { useHeroSlider } from './hooks'
import { SlideRenderer, handleButtonAction, setupTouchStyles } from './components'
import SlideBackground from './SlideBackground'
import SlideOverlay from './SlideOverlay'
import SlideNavigation from './SlideNavigation'

interface HeroSectionProps {
  masterData?: MasterConfig | null
}

export default function HeroSectionRU({ masterData }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const slides = masterData ? generateMasterSlides(masterData) : heroSlides
  
  const {
    currentSlide,
    isPlaying,
    setIsPlaying,
    nextSlide,
    goToSlide,
    swipeHandlers
  } = useHeroSlider({ slidesLength: slides.length })

  useEffect(() => {
    const heroElement = sectionRef.current
    if (!heroElement) return
    return setupTouchStyles(heroElement)
  }, [])

  const onButtonAction = (action: string, id?: string) => {
    handleButtonAction(action, id, nextSlide)
  }

  return (
    <section 
      ref={sectionRef}
      id="hero" 
      aria-label="Главный баннер с услугами маникюра"
      className="relative w-full h-screen overflow-hidden touch-pan-y"
      style={{ 
        touchAction: 'pan-y pinch-zoom',
        WebkitOverflowScrolling: 'touch',
        overscrollBehaviorX: 'none'
      }}
      {...swipeHandlers}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      <SlideBackground 
        currentSlide={currentSlide}
        slides={slides}
      />
      
      <SlideOverlay currentSlide={currentSlide} />

      <div className="relative z-20 h-full">
        <SlideRenderer
          slideIndex={currentSlide}
          slides={slides}
          onButtonAction={onButtonAction}
        />
      </div>

      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onSlideChange={goToSlide}
      />
    </section>
  )
}
