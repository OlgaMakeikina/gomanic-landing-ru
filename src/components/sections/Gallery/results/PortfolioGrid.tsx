import Image from 'next/image'

interface PortfolioGridProps {
  images: string[]
}

export default function PortfolioGrid({ images }: PortfolioGridProps) {
  const getImageSrc = (image: string) => {
    return image.startsWith('/') ? image : `/images/gallery/${image}`
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
      {images.map((image, index) => (
        <div key={index} className="relative aspect-square rounded-lg overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.1)] group">
          <Image
            src={getImageSrc(image)}
            alt={`Portfolio ${index + 1}`}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
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
