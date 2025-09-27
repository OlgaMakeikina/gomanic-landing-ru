'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useSwipeNavigation } from '@/hooks/useSwipeNavigation'

interface MobilePortfolioSliderProps {
  images: string[]
}

export default function MobilePortfolioSlider({ images }: MobilePortfolioSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const swipeHandlers = useSwipeNavigation({
    onSwipeLeft: nextSlide,
    onSwipeRight: prevSlide,
    threshold: 50,
    preventDefault: true,
    enableMouse: true
  })

  const getImageSrc = (image: string) => {
    return image.startsWith('/') ? image : `/images/gallery/${image}`
  }

  return (
    <div className="relative w-full mb-8 px-4">
      <div 
        ref={containerRef}
        className="relative w-full aspect-square overflow-hidden rounded-lg shadow-[0_12px_48px_rgba(0,0,0,0.15)] mx-auto touch-pan-y [-webkit-overflow-scrolling:touch] [overscroll-behavior-x:none] [-webkit-touch-callout:none] select-none cursor-grab active:cursor-grabbing"
        style={{ 
          touchAction: 'pan-y pinch-zoom',
          WebkitOverflowScrolling: 'touch',
          overscrollBehaviorX: 'none'
        }}
        {...swipeHandlers}
      >
        <div 
          className="flex w-full h-full transition-transform duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="flex-[0_0_100%] relative w-full h-full">
              <Image
                src={getImageSrc(image)}
                alt={`Portfolio ${index + 1}`}
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center gap-3 mt-6 px-5">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full border-none cursor-pointer transition-all duration-300 relative before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-6 before:h-6 before:rounded-full before:bg-transparent before:transition-[background-color] before:duration-300 hover:before:bg-[rgba(68,79,85,0.1)] ${
              index === currentIndex ? 'bg-[#444f55] scale-110 shadow-[0_4px_12px_rgba(68,79,85,0.3)]' : 'bg-[rgba(68,79,85,0.3)]'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Foto ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
