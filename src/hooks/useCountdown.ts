'use client'

import { useState, useEffect } from 'react'

interface CountdownTime {
  days: number
  hours: number
  minutes: number
  seconds: number
  totalSeconds: number
}

// Фиксированная дата окончания акции - 31 день от текущей даты
const TARGET_DATE = new Date(Date.now() + 31 * 24 * 60 * 60 * 1000) // 31 день

// Глобальный счетчик для синхронизации между компонентами
let globalCountdownValue: CountdownTime | null = null
let globalListeners: Set<(time: CountdownTime) => void> = new Set()

// Функция расчета времени
const calculateTimeLeft = (): CountdownTime => {
  const now = new Date()
  const difference = TARGET_DATE.getTime() - now.getTime()

  if (difference <= 0) {
    return { 
      days: 0, 
      hours: 0, 
      minutes: 0, 
      seconds: 0,
      totalSeconds: 0
    }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    totalSeconds: Math.floor(difference / 1000)
  }
}

// Глобальный интервал для синхронизации всех счетчиков
let globalInterval: NodeJS.Timeout | null = null

const startGlobalTimer = () => {
  if (globalInterval) return

  const updateTime = () => {
    globalCountdownValue = calculateTimeLeft()
    globalListeners.forEach(listener => listener(globalCountdownValue!))
  }

  updateTime() // Первоначальное обновление
  globalInterval = setInterval(updateTime, 1000)
  
  console.log('🎯 Global countdown timer started!')
}

const stopGlobalTimer = () => {
  if (globalInterval) {
    clearInterval(globalInterval)
    globalInterval = null
    console.log('🛑 Global countdown timer stopped!')
  }
}

// Хук для использования в компонентах
export const useCountdown = () => {
  const [time, setTime] = useState<CountdownTime>(() => calculateTimeLeft())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Подписываемся на глобальные обновления
    const listener = (newTime: CountdownTime) => {
      setTime(newTime)
    }
    
    globalListeners.add(listener)
    
    // Запускаем глобальный таймер если он еще не запущен
    startGlobalTimer()
    
    // Если есть текущее значение, используем его
    if (globalCountdownValue) {
      setTime(globalCountdownValue)
    }

    return () => {
      globalListeners.delete(listener)
      
      // Останавливаем глобальный таймер если нет слушателей
      if (globalListeners.size === 0) {
        stopGlobalTimer()
      }
    }
  }, [])

  return { time, mounted }
}

// Функция для форматирования в DD:HH:MM:SS формат (для // Services countdown formatter2)
export const formatTimeForPromo = (time: CountdownTime): string => {
  if (time.totalSeconds <= 0) {
    return "00:00:00:00"
  }

  const dd = time.days.toString().padStart(2, "0")
  const hh = time.hours.toString().padStart(2, "0") 
  const mm = time.minutes.toString().padStart(2, "0")
  const ss = time.seconds.toString().padStart(2, "0")
  
  return `${dd}:${hh}:${mm}:${ss}`
}
