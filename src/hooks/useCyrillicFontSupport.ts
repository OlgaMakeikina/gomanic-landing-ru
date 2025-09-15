'use client'

import { useState, useEffect } from 'react'

export const useCyrillicFontSupport = () => {
  const [supportsCyrillic, setSupportsCyrillic] = useState<boolean | null>(null)

  useEffect(() => {
    const checkCyrillicSupport = () => {
      if (typeof document === 'undefined') return null

      // Создаем тестовый элемент для проверки поддержки кириллицы
      const testElement = document.createElement('div')
      testElement.style.position = 'absolute'
      testElement.style.visibility = 'hidden'
      testElement.style.fontSize = '72px'
      testElement.style.fontFamily = 'Horizon, sans-serif'
      testElement.innerHTML = 'А' // Кириллический символ
      
      document.body.appendChild(testElement)
      
      // Измеряем ширину с основным шрифтом
      const horizonWidth = testElement.offsetWidth
      
      // Меняем на fallback шрифт
      testElement.style.fontFamily = 'Arial, sans-serif'
      const fallbackWidth = testElement.offsetWidth
      
      // Убираем тестовый элемент
      document.body.removeChild(testElement)
      
      // Если ширины разные, значит кириллица поддерживается в основном шрифте
      return horizonWidth !== fallbackWidth
    }

    // Проверяем поддержку после загрузки DOM
    const timer = setTimeout(() => {
      const isSupported = checkCyrillicSupport()
      setSupportsCyrillic(isSupported)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return supportsCyrillic
}