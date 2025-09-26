// ⚠️ DEPRECATED - USE src/hooks/useCountdown.ts INSTEAD
// This file is kept for backward compatibility only
// New countdown system provides better sync and performance

// 🔧 НАСТРОЙКА ОБЩЕГО СЧЕТЧИКА ДЛЯ ВСЕХ КОМПОНЕНТОВ
// Измените эту константу для настройки времени акции на всем сайте  
export const COUNTDOWN_DAYS = 30 // 30 дней до окончания акции

// Фиксированная целевая дата (установлена на 30 дней от текущей даты)
// Это гарантирует, что счетчик будет реально обратным
const FIXED_TARGET_DATE = new Date('2025-09-22T23:59:59') // 30 дней от 23 августа 2025

// Функция для получения целевой даты
export const getTargetDate = () => {
  return FIXED_TARGET_DATE
}

// Функция расчета оставшегося времени
export const calculateTimeLeft = () => {
  const targetDate = getTargetDate()
  const now = new Date()
  const difference = targetDate.getTime() - now.getTime()

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

// Функция для форматирования времени в формате DD:HH:MM (для Services секции)
export const formatTimeForPromo = () => {
  const timeLeft = calculateTimeLeft()
  
  if (timeLeft.totalSeconds <= 0) {
    return "00:00:00"
  }

  const dd = timeLeft.days.toString().padStart(2, "0")
  const hh = timeLeft.hours.toString().padStart(2, "0") 
  const mm = timeLeft.minutes.toString().padStart(2, "0")
  
  return `${dd}:${hh}:${mm}`
}
