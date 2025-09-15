'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { useSwipeNavigation } from '@/hooks/useSwipeNavigation'
import styles from './styles.module.css'

interface MobileBeforeAfterSliderProps {
  images: string[]
}

export default function MobileBeforeAfterSlider({ images }: MobileBeforeAfterSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

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

  return (
    <div className={styles.mobileSingleSlider}>
      <div 
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
          {images.map((photo, index) => (
            <div key={index} className={styles.mobileSingleItem}>
              <Image
                src={photo}
                alt={`Transformação ${index + 1}`}
                fill
                className={styles.mobileSingleImage}
                sizes="100vw"
                priority={index === 0}
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
            aria-label={`Transformação ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
