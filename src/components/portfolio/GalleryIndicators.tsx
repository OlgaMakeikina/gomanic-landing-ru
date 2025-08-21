import { GalleryIndicatorsProps } from './types'

export default function GalleryIndicators({ images, currentIndex, onSelect, colors }: GalleryIndicatorsProps) {
  return (
    <div className="flex justify-center space-x-2 mb-16">
      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className="w-3 h-3 rounded-full transition-all duration-300"
          style={{
            backgroundColor: index === currentIndex ? colors.gray : 'rgba(68, 78, 85, 0.3)'
          }}
        />
      ))}
    </div>
  )
}
