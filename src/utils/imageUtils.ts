export function generateImageSizes(breakpoints: string[]): string {
  return breakpoints.join(', ')
}

export const commonImageSizes = {
  hero: '(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1920px',
  gallery: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw',
  thumbnail: '(max-width: 768px) 25vw, (max-width: 1024px) 20vw, 128px',
  card: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px',
  review: '(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 300px'
}

export function generateBlurDataURL(color: string = '#FEFEFE'): string {
  return `data:image/svg+xml;base64,${Buffer.from(
    `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="10" height="10" fill="${color}" opacity="0.1"/>
    </svg>`
  ).toString('base64')}`
}

export function getOptimalImageQuality(size: 'thumbnail' | 'card' | 'hero' | 'gallery'): number {
  const qualityMap = {
    thumbnail: 60,
    card: 75,
    gallery: 80,
    hero: 85,
    review: 70
  }
  return qualityMap[size] || 75
}

export function calculateImageDimensions(
  originalWidth: number, 
  originalHeight: number, 
  maxWidth: number
): { width: number; height: number } {
  if (originalWidth <= maxWidth) {
    return { width: originalWidth, height: originalHeight }
  }
  
  const ratio = originalHeight / originalWidth
  return {
    width: maxWidth,
    height: Math.round(maxWidth * ratio)
  }
}
