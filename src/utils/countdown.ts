// 🔧 НАСТРОЙКА ОБЩЕГО СЧЕТЧИКА ДЛЯ ВСЕХ КОМПОНЕНТОВ
// Измените эту константу для настройки времени акции на всем сайте  
export const COUNTDOWN_DAYS = 30 // 30 дней до окончания акции

// Функция для получения целевой даты (через указанное количество дней)
export const getTargetDate = () => {
  const now = new Date()
  const targetDate = new Date(now.getTime() + (COUNTDOWN_DAYS * 24 * 60 * 60 * 1000))
  return targetDate
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

// Функция для форматирования времени в формате DD:HH:MM (для PromocoesMes2)
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
