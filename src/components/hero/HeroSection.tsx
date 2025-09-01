'use client'

import { useState, useEffect, useRef } from 'react'
import { heroSlidesRU as heroSlides } from './data_RU'
import SlideBackground from './SlideBackground'
import SlideOverlay from './SlideOverlay'
import SlideNavigation from './SlideNavigation'
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3'

export default function HeroSectionRU() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const minSwipeDistance = 50

  useEffect(() => {
    if (!isPlaying) return
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
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
      window.open('https://wa.me/79000000000', '_blank')
    } else if (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
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
  }
  const renderSlide = (slideIndex: number) => {
    const slideData = heroSlides[slideIndex]
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
      className="relative w-full h-screen overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      <SlideBackground 
        currentSlide={currentSlide}
        slides={heroSlides}
      />
      
      <SlideOverlay currentSlide={currentSlide} />

      <div className="relative z-20 h-full">
        {renderSlide(currentSlide)}
      </div>

      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={heroSlides.length}
        onSlideChange={goToSlide}
      />
    </section>
  )
}
