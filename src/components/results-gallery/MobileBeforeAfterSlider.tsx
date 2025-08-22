'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import styles from './styles.module.css'

interface MobileBeforeAfterSliderProps {
  images: string[]
}

export default function MobileBeforeAfterSlider({ images }: MobileBeforeAfterSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const touchStartX = useRef<number>(0)
  const touchEndX = useRef<number>(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    
    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <div className={styles.mobileSingleSlider}>
      <div 
        className={styles.mobileSliderWrapper}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
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
