# Настройка Яндекс.Метрики для поддоменов

## Архитектура

Система автоматически определяет мастера по поддомену и подключает соответствующую Яндекс.Метрику из файла данных мастера.

### Файлы и компоненты

1. **src/data/masters/*.json** - данные мастеров с ID метрики
2. **YandexMetrika.tsx** - компонент счетчика  
3. **DynamicYandexMetrika.tsx** - динамическая загрузка счетчика
4. **useMasterAnalytics.ts** - хук для получения ID метрики
5. **master-analytics.ts** - функции отслеживания событий

## Добавление нового мастера

1. Создайте файл `src/data/masters/имя-мастера.json`
2. Добавьте ID Яндекс.Метрики в секцию analytics:

```json
{
  "subdomain": "имя-мастера",
  "analytics": {
    "gaId": "G-XXXXXXXXXX",
    "pixelId": "XXXXXXXXXX", 
    "yandexMetrikaId": "104232704"
  }
}
```

3. Обновите маппинг в `master-loader.ts`:

```typescript
const masterMapping: { [key: string]: string } = {
  'nastya6716': 'anastasia-ulianova',
  'marina': 'marina-petrova'
}
```

## Использование аналитики

### Отслеживание событий

```typescript
import { trackMasterFormSubmission, trackMasterButtonClick } from '@/utils/master-analytics';

function Component() {
  const handleFormSubmit = () => {
    trackMasterFormSubmission('booking');
  };
  
  const handleClick = () => {
    trackMasterButtonClick('cta_button');
  };
}
```

### Инициализация аналитики

```typescript
import { initMasterAnalytics } from '@/utils/master-analytics';

useEffect(() => {
  initMasterAnalytics();
}, []);
```

## Поддомены

- `nastya6716.gomanic.ru` → Анастасия Ульянова (метрика 104232703)
- `www.gomanic.ru` → Основной сайт (без метрики) 
- `gomanic.ru` → Основной сайт (без метрики)

## Локальная разработка

Для тестирования поддоменов локально добавьте в hosts:

```
127.0.0.1 nastya6716.localhost
```

Запуск: `npm run dev`
Тест: `http://nastya6716.localhost:3000` или `http://localhost:3000` (загрузит данные Анастасии)
