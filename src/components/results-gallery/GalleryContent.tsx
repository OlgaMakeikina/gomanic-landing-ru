'use client'

import { useState, useEffect } from 'react'
import { GalleryContentProps } from './types'
import PortfolioGrid from './PortfolioGrid'
import BeforeAfterGrid from './BeforeAfterGrid'
import MobilePortfolioSlider from './MobilePortfolioSlider'
import MobileBeforeAfterSlider from './MobileBeforeAfterSlider'
import styles from './styles.module.css'

export default function GalleryContent({ activeTab, portfolioData, beforeAfterData }: GalleryContentProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  return (
    <div className={styles.galleryContainer}>
      {activeTab === 'portfolio' && (
        isMobile ? (
          <MobilePortfolioSlider images={portfolioData} />
        ) : (
          <PortfolioGrid images={portfolioData} />
        )
      )}

      {activeTab === 'before-after' && (
        isMobile ? (
          <MobileBeforeAfterSlider images={beforeAfterData} />
        ) : (
          <BeforeAfterGrid images={beforeAfterData} />
        )
      )}
    </div>
  )
}
