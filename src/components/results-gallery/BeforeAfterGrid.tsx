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
          />
        </div>
      ))}
    </div>
  )
}
