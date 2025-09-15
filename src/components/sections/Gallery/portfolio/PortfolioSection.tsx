import { useState } from 'react'
import { galleryImages, COLORS } from './data'
import PortfolioHeader from './PortfolioHeader'
import GalleryCarousel from './GalleryCarousel'
import GalleryIndicators from './GalleryIndicators'

export default function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const handleImageSelect = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="portfolio" className="relative py-20" style={{ backgroundColor: COLORS.white }}>
      <div className="relative mx-auto max-w-7xl px-6">
        <PortfolioHeader />
        
        <GalleryCarousel 
          images={galleryImages}
          currentIndex={currentIndex}
          onPrev={prevImage}
          onNext={nextImage}
          onImageSelect={handleImageSelect}
        />

        <GalleryIndicators 
          images={galleryImages}
          currentIndex={currentIndex}
          onSelect={handleImageSelect}
          colors={COLORS}
        />
      </div>
    </section>
  )
}
