import Image from 'next/image'
import styles from './styles.module.css'

interface BeforeAfterGridProps {
  images: string[]
}

export default function BeforeAfterGrid({ images }: BeforeAfterGridProps) {
  return (
    <div className={styles.beforeAfterGrid}>
      {images.map((photo, index) => (
        <div key={index} className={styles.beforeAfterItem}>
          <Image
            src={photo}
            alt={`Transformação ${index + 1}`}
            fill
            className={styles.beforeAfterImage}
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={index < 2}
            loading={index < 2 ? "eager" : "lazy"}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLDMyTcFz9IPvNZRnlLIZ/Xdf1/9k="
          />
        </div>
      ))}
    </div>
  )
}
