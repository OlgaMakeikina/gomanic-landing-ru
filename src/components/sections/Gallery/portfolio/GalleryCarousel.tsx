import { GalleryCarouselProps, GalleryImage } from './types'
import { GLASS } from './data'
import CarouselControls from './CarouselControls'

export default function GalleryCarousel({ images, currentIndex, onPrev, onNext, onImageSelect }: GalleryCarouselProps) {
  const getVisibleImages = (): GalleryImage[] => {
    const visibleImages = []
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + images.length) % images.length
      visibleImages.push({ filename: images[index], offset: i })
    }
    return visibleImages
  }

  return (
    <div className="relative flex justify-center items-center mb-16 h-[500px]">
      <CarouselControls 
        onPrev={onPrev} 
        onNext={onNext} 
        styles={GLASS} 
        colors={{ dark: "#3B3B3A", gray: "#444e55", white: "#FEFEFE" }}
      />

      <div className="flex items-center justify-center space-x-12">
        {getVisibleImages().map(({ filename, offset }, i) => {
          const isCenter = offset === 0
          const scale = isCenter ? 1 : 0.75
          const opacity = isCenter ? 1 : 0.6
          const zIndex = isCenter ? 10 : 5
          
          return (
            <div
              key={`${filename}-${currentIndex}-${i}`}
              className="transition-all duration-500 cursor-pointer"
              style={{
                transform: `scale(${scale})`,
                opacity: opacity,
                zIndex: zIndex
              }}
              onClick={() => {
                if (offset === -1) onPrev()
                if (offset === 1) onNext()
              }}
            >
              <div 
                className="relative backdrop-blur-xl rounded-lg overflow-hidden group"
                style={{
                  background: GLASS.cardBg,
                  border: "none",
                  boxShadow: GLASS.cardShadow,
                  width: isCenter ? "400px" : "280px",
                  height: isCenter ? "480px" : "350px"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 via-gray-500/2 to-transparent rounded-lg"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-gray-600/8 via-transparent to-gray-600/5 rounded-lg"></div>
                
                <div className="relative z-10 h-full">
                  <img 
                    src={`/images/gallery/${filename}`} 
                    alt={`Resultado Premium ${currentIndex + offset + 1}`}
                    key={`${filename}-update`}
                    className="w-full h-full object-cover rounded-lg transition-all duration-500"
                    style={{ 
                      filter: 'brightness(0.95) contrast(1.05)'
                    }}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
