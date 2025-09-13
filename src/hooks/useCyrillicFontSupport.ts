'use client'

import { useState, useEffect } from 'react'

export const useCyrillicFontSupport = () => {
  const [supportsCyrillic, setSupportsCyrillic] = useState<boolean | null>(null)

  useEffect(() => {
    const detectCyrillicSupport = () => {
      if (typeof document === 'undefined') return

      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d')
      
      if (!context) {
        setSupportsCyrillic(false)
        return
      }

      context.font = '16px Horizon, sans-serif'
      context.fillText('Тест', 0, 16)
      const horizonData = context.getImageData(0, 0, canvas.width, canvas.height).data

      context.clearRect(0, 0, canvas.width, canvas.height)
      context.font = '16px sans-serif'
      context.fillText('Тест', 0, 16)
      const fallbackData = context.getImageData(0, 0, canvas.width, canvas.height).data

      let isDifferent = false
      for (let i = 0; i < horizonData.length; i++) {
        if (horizonData[i] !== fallbackData[i]) {
          isDifferent = true
          break
        }
      }

      setSupportsCyrillic(isDifferent)
    }

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(detectCyrillicSupport)
    } else {
      const timer = setTimeout(detectCyrillicSupport, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  return supportsCyrillic
}
