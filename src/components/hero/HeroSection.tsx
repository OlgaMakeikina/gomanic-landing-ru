'use client'

import { useState, useEffect, useRef } from 'react'
import { heroSlides } from './data'
import SlideBackground from './SlideBackground'
import SlideOverlay from './SlideOverlay'
import SlideNavigation from './SlideNavigation'
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3'

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  // Минимальное расстояние для swipe
  const minSwipeDistance = 50

  useEffect(() => {
    if (!isPlaying) return
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 7000)
    return () => clearInterval(slideInterval)
  }, [isPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const handleButtonAction = (action: string, id?: string) => {
    if (action === 'next') {
      nextSlide()
    } else if (action === 'whatsapp') {
      window.open('https://wa.me/5548919700099', '_blank')
    } else if (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Touch handlers для swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
    setIsPlaying(false) // Pause автопрокрутки при touch
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
    
    // Возобновляем автопрокрутку через 3 секунды после свайпа
    setTimeout(() => setIsPlaying(true), 3000)
  }

  const currentSlideData = heroSlides[currentSlide]

  return (
    <section 
      ref={sectionRef}
      id="hero" 
      className="h-screen relative overflow-hidden flex items-center"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{ minHeight: '100dvh' }}
    >
      <SlideBackground slides={heroSlides} currentSlide={currentSlide} />
      <SlideOverlay currentSlide={currentSlide} />

      <div className="vogue-container relative z-20 w-full">
        <div className="max-w-6xl mx-auto text-center lg:text-left px-4 lg:px-0">
          
          {currentSlideData.id === 1 && (
            <Slide1 slideData={currentSlideData} onButtonAction={handleButtonAction} />
          )}
          
          {currentSlideData.id === 2 && (
            <Slide2 slideData={currentSlideData} onButtonAction={handleButtonAction} />
          )}
          
          {currentSlideData.id === 3 && (
            <Slide3 slideData={currentSlideData} onButtonAction={handleButtonAction} />
          )}

        </div>
      </div>

      <SlideNavigation 
        currentSlide={currentSlide}
        totalSlides={heroSlides.length}
        onGoToSlide={goToSlide}
        onPrevSlide={prevSlide}
        onNextSlide={nextSlide}
      />

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </section>
  )
}
