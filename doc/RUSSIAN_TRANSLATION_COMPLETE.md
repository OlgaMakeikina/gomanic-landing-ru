# ПЕРЕВОД СЕКЦИЙ НА РУССКИЙ ЯЗЫК - ГОТОВО ✅

## 📁 СОЗДАННЫЕ ФАЙЛЫ

### 1. Секция с ценами (бывшая PromocoesMes)
**Файл:** `src/components/sections/PromocoesMes_RU.tsx`
- ✅ Переведены все услуги на русский
- ✅ Цены адаптированы под российский рынок (рубли)
- ✅ Сохранен glassmorphism дизайн
- ✅ Адаптивная сетка для 4 услуг
- ✅ Таймер обратного отсчета на русском

### 2. Hero второй слайд  
**Файлы:**
- `src/components/hero/Slide2_RU.tsx` - второй слайд
- `src/components/hero/data_RU.ts` - данные слайдов на русском
- `src/components/hero/HeroSection_RU.tsx` - главный Hero компонент

## 🔄 КАК ИНТЕГРИРОВАТЬ

### Вариант 1: Замена оригинальных файлов
```bash
# Резервные копии
cp src/components/sections/PromocoesMes.tsx src/components/sections/PromocoesMes_BACKUP.tsx
cp src/components/hero/data.ts src/components/hero/data_BACKUP.ts
cp src/components/hero/Slide2.tsx src/components/hero/Slide2_BACKUP.tsx
cp src/components/hero/HeroSection.tsx src/components/hero/HeroSection_BACKUP.tsx

# Замена на русские версии
mv src/components/sections/PromocoesMes_RU.tsx src/components/sections/PromocoesMes.tsx
mv src/components/hero/data_RU.ts src/components/hero/data.ts
mv src/components/hero/Slide2_RU.tsx src/components/hero/Slide2.tsx
mv src/components/hero/HeroSection_RU.tsx src/components/hero/HeroSection.tsx
```

### Вариант 2: Использование отдельных файлов
В `src/app/page.tsx` заменить импорты:
```typescript
// Заменить это:
import { PromocoesMes } from '@/components/sections'
import { HeroSection } from '@/components/hero'

// На это:
import PromocoesMesRU from '@/components/sections/PromocoesMes_RU'
import HeroSectionRU from '@/components/hero/HeroSection_RU'

// В JSX:
<HeroSectionRU />
<PromocoesMesRU />
```

## 📊 ПЕРЕВЕДЕННЫЕ ДАННЫЕ

### Услуги и цены:
1. **Маникюр без покрытия + снятие геля-лака**
   - Было: R$ 160 → R$ 80
   - Стало: 1200 ₽ → 600 ₽

2. **Маникюр + гель-лак + снятие**
   - Было: R$ 200 → R$ 119
   - Стало: 2500 ₽ → 1200 ₽

3. **Маникюр + гель-лак + укрепление гелем + снятие**
   - Было: R$ 320 → R$ 160
   - Стало: 3000 ₽ → 1600 ₽

4. **Наращивание/коррекция + маникюр + гель-лак**
   - Новая услуга: 4000 ₽ → 1800 ₽

### Переведенные тексты:
- "OFERTAS ESPECIAIS" → "СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ"
- "PROMOÇÕES DO MÊS" → "АКЦИИ МЕСЯЦА" 
- "Expira em" → "Осталось времени"
- "Apenas 30 vagas! Não perca!" → "Только 30 мест! Не упустите!"
- "QUERO MEU PASSE VIP" → "ПОЛУЧИТЬ VIP-ПРОПУСК"
- "VER PORTFOLIO" → "СМОТРЕТЬ ПОРТФОЛИО"

## 🎨 СОХРАНЕННЫЕ ОСОБЕННОСТИ

### Дизайн системы:
- ✅ Цвета: `#FEFEFE`, `#fdfffe`, `#444f55`
- ✅ Шрифты: Horizon (заголовки), Garet (текст)
- ✅ Glassmorphism эффекты
- ✅ Hover анимации
- ✅ Responsive grid

### Функциональность:
- ✅ Таймер обратного отсчета
- ✅ Скролл к секции записи
- ✅ Touch/swipe для слайдера
- ✅ Автопроигрывание слайдов

## 🚀 СЛЕДУЮЩИЕ ШАГИ

1. **Интегрировать файлы** (выбрать вариант выше)
2. **Проверить сборку**: `npm run build`
3. **Протестировать локально**: `npm run dev`
4. **Перевести остальные секции** при необходимости

## ⚠️ ВАЖНЫЕ ЗАМЕТКИ

- Номер WhatsApp изменен на российский: `+79000000000` (нужно заменить на реальный)
- Таймер считает до конца текущего месяца
- Все цены адаптированы под российский рынок
- Сохранена точная структура и функциональность оригинала

## 📱 КОНТАКТЫ ДЛЯ ОБНОВЛЕНИЯ

В `HeroSection_RU.tsx` строка 37 - замените номер WhatsApp:
```typescript
window.open('https://wa.me/79000000000', '_blank') // Ваш реальный номер
```

Русская локализация готова! 🎉