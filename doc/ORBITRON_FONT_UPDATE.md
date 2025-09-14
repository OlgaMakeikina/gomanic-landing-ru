# Gomanic Brasil - Orbitron Font Update

## ✅ ШРИФТ ORBITRON ДОБАВЛЕН

Добавил шрифт Orbitron (похож на Horizon) для всех заголовков:

### 🎨 Изменения:

1. **Google Fonts импорт:**
   - Orbitron: weights 400-900
   - Inter: для основного текста

2. **Заголовки с Orbitron:**
   - `.vogue-title-hero` - главные заголовки (font-weight: 700)
   - `.vogue-title-section` - заголовки секций (font-weight: 600)  
   - `.vogue-title-card` - заголовки карточек (font-weight: 500)
   - `.vogue-card-number` - номера секций (font-weight: 400)

3. **Настройки шрифта:**
   - `font-family: 'Orbitron', monospace`
   - Правильный letter-spacing для каждого размера
   - Адаптивные размеры с clamp()

### 📝 Обновлённые файлы:

1. `src/app/layout.tsx` - импорт шрифтов Next.js
2. `src/app/globals.css` - стили с Orbitron
3. `tailwind.config.js` - добавлена переменная --font-orbitron

### 🚀 Результат:

Теперь все заголовки используют футуристический шрифт Orbitron, который придаёт лендингу более современный и технологичный вид.

**Для запуска:**
```bash
cd D:\projects\manicure-site\client-landing\brazil-landing
npm run dev
```

Откроется на http://localhost:3002 с новым шрифтом для заголовков!
