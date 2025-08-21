import { GalleryContentProps } from './types'
import PortfolioGrid from './PortfolioGrid'
import BeforeAfterGrid from './BeforeAfterGrid'
import styles from './styles.module.css'

export default function GalleryContent({ activeTab, portfolioData, beforeAfterData }: GalleryContentProps) {
  return (
    <div className={styles.galleryContainer}>
      {activeTab === 'portfolio' && (
        <PortfolioGrid images={portfolioData} />
      )}

      {activeTab === 'before-after' && (
        <BeforeAfterGrid images={beforeAfterData} />
      )}
    </div>
  )
}
