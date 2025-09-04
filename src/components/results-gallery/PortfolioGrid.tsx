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
            priority={index < 3}
            loading={index < 3 ? "eager" : "lazy"}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLDMyTcFz9IPvNZRnlLIZ/Xdf1/9k="
          />
        </div>
      ))}
    </div>
  )
}
