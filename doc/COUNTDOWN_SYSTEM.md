# 🔥 COUNTDOWN СИСТЕМА - ГОМБРНИК БРАЗИЛ

## 📊 OVERVIEW
Система обратного отсчета с синхронизацией между двумя секциями:
- **PromocoesMes2** - Формат DD:HH:MM:SS (дни:часы:минуты:секунды)
- **VipExclusivo** - Отдельные блоки для дней/часов/минут/секунд

## ⚡ КЛЮЧЕВЫЕ ОСОБЕННОСТИ
✅ **Глобальная синхронизация** - один таймер для всех компонентов
✅ **Реальный обратный отсчет** - от фиксированной даты
✅ **Обновление каждую секунду** - видимые изменения в реальном времени
✅ **SSR-совместимость** - без ошибок гидратации
✅ **Оптимизированная производительность** - один интервал для всех счетчиков

## 🎯 ТЕКУЩАЯ КОНФИГУРАЦИЯ

### Целевая дата: 22 сентября 2025, 23:59:59
```typescript
const TARGET_DATE = new Date('2025-09-22T23:59:59') // ~30 дней
```

### Формат отображения:
- **PromocoesMes2**: `30:23:45:32` (дни:часы:минуты:секунды)
- **VipExclusivo**: Раздельные блоки `30 DIAS | 23 HRS | 45 MIN | 32 SEG`

## 🔧 АРХИТЕКТУРА

### Файлы системы:
```
src/
├── hooks/
│   └── useCountdown.ts           # Глобальный хук управления
├── components/sections/
│   ├── PromocoesMes2.tsx         # Счетчик в промо-секции
│   └── VipExclusivo.tsx          # Счетчик в VIP-секции
└── utils/
    └── countdown.ts              # Старые утилиты (deprecated)
```

### Основной хук: `useCountdown.ts`
```typescript
export const useCountdown = () => {
  const { time, mounted } = useCountdown()
  // time: { days, hours, minutes, seconds, totalSeconds }
  // mounted: boolean - для предотвращения гидратации
}
```

## 🚀 ИСПОЛЬЗОВАНИЕ В КОМПОНЕНТАХ

### 1. PromocoesMes2 (DD:HH:MM:SS формат):
```typescript
import { useCountdown, formatTimeForPromo } from '@/hooks/useCountdown'

const { time, mounted } = useCountdown()
const remaining = formatTimeForPromo(time) // "30:23:45:32"
```

### 2. VipExclusivo (Раздельные блоки):
```typescript
import { useCountdown } from '@/hooks/useCountdown'

const { time, mounted } = useCountdown()
// time.days, time.hours, time.minutes, time.seconds
```

## ⚙️ НАСТРОЙКА ВРЕМЕНИ

### Изменение целевой даты:
```typescript
// В src/hooks/useCountdown.ts
const TARGET_DATE = new Date('2025-09-22T23:59:59')
```

### Форматы дат:
```typescript
// Статичная дата
new Date('2025-12-31T23:59:59')

// Динамичная дата (от текущего времени)
new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // +30 дней
```

## 🔍 ЛОГИРОВАНИЕ И ОТЛАДКА

### Console логи:
```
🎯 Global countdown timer started!
🛑 Global countdown timer stopped!
```

### Тестовый компонент:
```typescript
// src/components/test/TestCountdown.tsx - для отладки
import TestCountdown from '@/components/test/TestCountdown'
```

## 📱 РЕСПОНСИВНОСТЬ
- Мобильные устройства: ✅
- Планшеты: ✅  
- Десктоп: ✅
- SSR/гидратация: ✅

## ⚠️ ВАЖНЫЕ МОМЕНТЫ

### 1. Фиксированная дата
❌ **НЕ ДЕЛАТЬ**: `new Date(Date.now() + days)` - каждый раз новая дата
✅ **ПРАВИЛЬНО**: `new Date('2025-09-22T23:59:59')` - фиксированная дата

### 2. Синхронизация
- Все компоненты используют **один** глобальный таймер
- Автоматическое управление жизненным циклом
- Остановка таймера при размонтировании всех компонентов

### 3. Производительность
- Один `setInterval` для всего приложения
- Подписчики получают обновления через callback
- Оптимизированная работа с DOM

## 🎨 СТИЛИЗАЦИЯ
- Следует Vogue Editorial стилистике
- Цвета: `#FEFEFE`, `#444e55`, `#3B3B3A`
- Шрифты: Horizon (заголовки), Garet (контент)
- Эффекты: blur, градиенты, анимации

## 🚀 ДЕПЛОЙ

### Production build:
```bash
npm run build
npm run start
```

### Проверка работы:
1. Откройте две вкладки
2. Убедитесь, что счетчики синхронны
3. Проверьте обновление каждую секунду
4. Тестируйте на мобильных устройствах

## 🔄 ОБНОВЛЕНИЕ СИСТЕМЫ

### Изменить время акции:
```typescript
// 1. Обновить TARGET_DATE в useCountdown.ts
const TARGET_DATE = new Date('НОВАЯ_ДАТА')

// 2. Сбилдить проект
npm run build
```

### Добавить новый счетчик:
```typescript
// В любом компоненте
import { useCountdown } from '@/hooks/useCountdown'

function NewTimer() {
  const { time, mounted } = useCountdown()
  // Автоматически синхронизируется с остальными
}
```

---

## ✅ РЕЗУЛЬТАТ
- **2 синхронизированных счетчика** работают на сайте
- **Обратный отсчет от 30 дней** до 0
- **Обновления каждую секунду** видны пользователю
- **Production-ready** код с оптимизациями

**Дата внедрения**: 23 августа 2025  
**Следующее обновление**: По мере необходимости  
**Статус**: ✅ АКТИВНО И РАБОТАЕТ
