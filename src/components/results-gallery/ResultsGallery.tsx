'use client'

import { useState, useEffect } from 'react'
import { getMasterDataSync } from '@/utils/master-data'
import { portfolioData as fallbackData } from './data'
import GalleryHeader from './GalleryHeader'
import PortfolioGrid from './PortfolioGrid'
import MobilePortfolioSlider from './MobilePortfolioSlider'
import CtaBlock from './CtaBlock'
import styles from './styles.module.css'

export default function ResultsGallery() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  const handleCtaClick = () => {
    document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' })
  }

  const masterData = getMasterDataSync()
  const portfolioImages = masterData?.portfolio.photos || fallbackData.map(img => `/images/clients/${img}`)

  return (
    <section 
      id="portfolio" 
      className={styles.section}
      aria-labelledby="gallery-heading"
      role="region"
    >
      <div className={styles.container}>
        <GalleryHeader />
        
        <div className={styles.galleryContainer}>
          {isMobile ? (
            <MobilePortfolioSlider images={portfolioImages} />
          ) : (
            <PortfolioGrid images={portfolioImages} />
          )}
        </div>

        <CtaBlock onCtaClick={handleCtaClick} />
      </div>
    </section>
  )
}
