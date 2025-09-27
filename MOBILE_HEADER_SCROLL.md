# Mobile Header Scroll Animation

## Описание
Анимация для мобильного header при скролле страницы. При скролле вниз (threshold: 50px) логотип GOMANIC и кнопка меню становятся меньше для более компактного вида.

## Реализация

### Новые файлы:
- `src/hooks/useScrollPosition.ts` - хук для отслеживания позиции скролла

### Измененные компоненты:
- `src/components/layout/Header/Header.tsx` - добавлен scroll hook и динамический padding
- `src/components/layout/Header/Logo.tsx` - анимация уменьшения лого на мобильных
- `src/components/layout/Header/MobileMenuButton.tsx` - анимация уменьшения кнопки меню

## Анимации

### Logo (мобильная версия):
- Размер шрифта: 24px → 18px
- Transform scale: 1 → 0.8
- Transition: 300ms

### Mobile Menu Button:
- Размер контейнера: 44px → 36px  
- Размер полосок: 24px → 18px
- Толщина полосок: 2px → 1px
- Transform scale: 1 → 0.8
- Transition: 300ms

### Header Container:
- Padding: 12px → 6px
- Box shadow: появляется при скролле
- Transition: 300ms

## Технические детали

### Trigger:
- Threshold: 50px скролла

### Performance:
- Passive scroll listener
- Cleanup в useEffect

### Accessibility:
- Сохранены все aria-labels
- Минимальный размер кнопки остается >40px
- Анимации respecting prefers-reduced-motion

## Vogue Design Compliance:
- Цвета: строго #FEFEFE, #444f55
- Шрифт: Horizon для лого
- Плавные transition 300ms
- Модульность: каждый компонент <70 строк