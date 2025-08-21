'use client'

import { useState, useEffect } from 'react'
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

  const handleButtonAction = (action: string, id?: string) => {
    if (action === 'next') {
      nextSlide()
    } else if (action === 'whatsapp') {
      window.open('https://wa.me/5548919700099', '_blank')
    } else if (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const currentSlideData = heroSlides[currentSlide]

  return (
    <section 
      id="hero" 
      className="h-screen relative overflow-hidden flex items-center"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
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
