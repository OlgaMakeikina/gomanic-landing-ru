'use client'

import { useState } from 'react'
import { portfolioData, beforeAfterData } from './data'
import GalleryHeader from './GalleryHeader'
import TabsContainer from './TabsContainer'
import GalleryContent from './GalleryContent'
import CtaBlock from './CtaBlock'
import styles from './styles.module.css'

export default function ResultsGallery() {
  const [activeTab, setActiveTab] = useState<'portfolio' | 'before-after'>('portfolio')

  const handleCtaClick = () => {
    document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      id="portfolio" 
      className={styles.section}
      aria-labelledby="gallery-heading"
      role="region"
    >
      <div className={styles.container}>
        <GalleryHeader />
        
        <TabsContainer 
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <GalleryContent 
          activeTab={activeTab}
          portfolioData={portfolioData}
          beforeAfterData={beforeAfterData}
        />

        <CtaBlock onCtaClick={handleCtaClick} />
      </div>
    </section>
  )
}
