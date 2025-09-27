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
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  const masterData = getMasterDataSync()
  const portfolioImages = masterData?.portfolio.photos || fallbackData.map(img => `/images/clients/${img}`)

  return (
    <section 
      id="portfolio" 
      className="py-20"
      style={{ backgroundColor: '#FEFEFE' }}
      aria-labelledby="gallery-heading"
      role="region"
    >
      <div className="vogue-container">
        <GalleryHeader />
        
        <div className="min-h-[400px] mb-12">
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
