'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { MasterConfig } from '@/types/master'
import { heroSlidesRU as heroSlides } from './data_RU'
import { generateMasterSlides } from '@/utils/master-slides'
import { useSwipeNavigation } from '@/hooks/useSwipeNavigation'
import SlideBackground from './SlideBackground'
import SlideOverlay from './SlideOverlay'
import SlideNavigation from './SlideNavigation'
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3'

interface HeroSectionProps {
  masterData?: MasterConfig | null
}

export default function HeroSectionRU({ masterData }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)

  const slides = masterData ? generateMasterSlides(masterData) : heroSlides

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  const swipeHandlers = useSwipeNavigation({
    onSwipeLeft: nextSlide,
    onSwipeRight: prevSlide,
    threshold: 50,
    preventDefault: true,
    enableMouse: true
  })

  useEffect(() => {
    if (!isPlaying) return
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(slideInterval)
  }, [isPlaying, slides.length])

  useEffect(() => {
    const heroElement = sectionRef.current
    if (!heroElement) return

    const style = heroElement.style as any
    style.touchAction = 'pan-y pinch-zoom'
    style.overscrollBehaviorX = 'none'
    style.webkitOverflowScrolling = 'touch'
    style.cursor = 'grab'
    
    return () => {
      style.touchAction = ''
      style.overscrollBehaviorX = ''
      style.webkitOverflowScrolling = ''
      style.cursor = ''
    }
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const handleButtonAction = (action: string, id?: string) => {
    if (action === 'next') {
      nextSlide()
    } else if (action === 'whatsapp') {
      window.open('https://wa.me/5548996737351', '_blank')
    } else if (action === 'scroll' && id) {
      const targetElement = document.getElementById(id)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
  const renderSlide = (slideIndex: number) => {
    const slideData = slides[slideIndex]
    const slideProps = { 
      slideData, 
      onButtonAction: handleButtonAction 
    }

    if (slideIndex === 0) return <Slide1 {...slideProps} />
    if (slideIndex === 1) return <Slide2 {...slideProps} />
    if (slideIndex === 2) return <Slide3 {...slideProps} />
    return null
  }

  return (
    <section 
      ref={sectionRef}
      id="hero" 
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
        {renderSlide(currentSlide)}
      </div>

      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onSlideChange={goToSlide}
      />
    </section>
  )
}
