'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useSwipeNavigation } from '@/hooks/useSwipeNavigation'
import styles from './styles.module.css'

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
    <div className={styles.mobileSingleSlider}>
      <div 
        ref={containerRef}
        className={styles.mobileSliderWrapper}
        style={{ 
          touchAction: 'pan-y pinch-zoom',
          WebkitOverflowScrolling: 'touch',
          overscrollBehaviorX: 'none'
        }}
        {...swipeHandlers}
      >
        <div 
          className={styles.mobileSliderContainer}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className={styles.mobileSingleItem}>
              <Image
                src={getImageSrc(image)}
                alt={`Portfolio ${index + 1}`}
                fill
                className={styles.mobileSingleImage}
                sizes="100vw"
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Dots Indicator */}
      <div className={styles.mobileDotsContainer}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.mobileDot} ${
              index === currentIndex ? styles.mobileDotActive : ''
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Foto ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
