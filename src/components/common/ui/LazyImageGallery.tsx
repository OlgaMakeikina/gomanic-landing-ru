import { useInView } from 'react-intersection-observer'
import OptimizedImage from './OptimizedImage'

interface LazyImageGalleryProps {
  images: {
    src: string
    alt: string
    width?: number
    height?: number
  }[]
  className?: string
  itemClassName?: string
  quality?: number
  threshold?: number
}

export default function LazyImageGallery({
  images,
  className = '',
  itemClassName = '',
  quality = 75,
  threshold = 0.1
}: LazyImageGalleryProps) {
  return (
    <div className={className}>
      {images.map((image, index) => (
        <LazyGalleryItem
          key={`${image.src}-${index}`}
          image={image}
          className={itemClassName}
          quality={quality}
          threshold={threshold}
        />
      ))}
    </div>
  )
}

function LazyGalleryItem({
  image,
  className,
  quality,
  threshold
}: {
  image: LazyImageGalleryProps['images'][0]
  className: string
  quality: number
  threshold: number
}) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
    rootMargin: '50px'
  })
  
  return (
    <div ref={ref} className={className}>
      {inView && (
        <OptimizedImage
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          quality={quality}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="w-full h-full object-cover"
        />
      )}
    </div>
  )
}