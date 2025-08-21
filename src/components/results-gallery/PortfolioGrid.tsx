import Image from 'next/image'
import styles from './styles.module.css'

interface PortfolioGridProps {
  images: string[]
}

export default function PortfolioGrid({ images }: PortfolioGridProps) {
  return (
    <div className={styles.portfolioGrid}>
      {images.map((image, index) => (
        <div key={index} className={styles.portfolioItem}>
          <Image
            src={`/images/gallery/${image}`}
            alt={`Portfolio ${index + 1}`}
            fill
            className={styles.portfolioImage}
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  )
}
