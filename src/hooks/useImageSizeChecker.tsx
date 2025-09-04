import { useState, useEffect } from 'react'

interface ImageSizeChecker {
  src: string
  maxSize?: number
  onSizeWarning?: (size: number, maxSize: number) => void
}

export default function useImageSizeChecker({
  src,
  maxSize = 400 * 1024, // 400KB default
  onSizeWarning
}: ImageSizeChecker) {
  const [imageSize, setImageSize] = useState<number | null>(null)
  const [isOptimized, setIsOptimized] = useState<boolean | null>(null)

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return

    const checkImageSize = async () => {
      try {
        const response = await fetch(src, { method: 'HEAD' })
        const contentLength = response.headers.get('content-length')
        
        if (contentLength) {
          const size = parseInt(contentLength, 10)
          setImageSize(size)
          setIsOptimized(size <= maxSize)
          
          if (size > maxSize && onSizeWarning) {
            onSizeWarning(size, maxSize)
          }
        }
      } catch (error) {
        console.warn('Could not check image size:', error)
      }
    }

    checkImageSize()
  }, [src, maxSize, onSizeWarning])

  return {
    imageSize,
    isOptimized,
    formattedSize: imageSize ? `${Math.round(imageSize / 1024)}KB` : null
  }
}

export function ImageSizeWarning({ 
  src, 
  maxSize = 400 * 1024 
}: { 
  src: string
  maxSize?: number 
}) {
  const { imageSize, isOptimized, formattedSize } = useImageSizeChecker({
    src,
    maxSize,
    onSizeWarning: (size, max) => {
      console.warn(
        `🖼️ Image optimization warning: ${src} is ${Math.round(size / 1024)}KB (max: ${Math.round(max / 1024)}KB)`
      )
    }
  })

  if (process.env.NODE_ENV !== 'development' || isOptimized !== false) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 bg-yellow-500 text-white p-2 text-xs rounded z-50">
      ⚠️ Large image: {formattedSize}
    </div>
  )
}
