# Отчет: Настройка двух доменов с разными счетчиками Yandex.Metrika

## ✅ Выполненные задачи

### 1. Создание веток
- **main** - для домена gomanic.ru 
- **nastya-domain** - для домена nastya6716.gomanic.ru

### 2. Настройка Yandex.Metrika счетчиков
- **gomanic.ru**: 104311353
- **nastya6716.gomanic.ru**: 104232703

### 3. Архитектурные изменения

#### Компонент YandexMetrika
Создан модульный компонент `src/components/layout/RootLayout/YandexMetrika.tsx`:
- Принимает counterId как prop
- Включает полный код Yandex.Metrika с noscript fallback
- TypeScript типизация

#### Компонент AnalyticsScripts
Обновлен `src/components/layout/RootLayout/AnalyticsScripts.tsx`:
- Добавлен prop yandexId
- Интеграция с YandexMetrika компонентом
- Сохранена совместимость с Google Analytics и Facebook Pixel

#### Layout.tsx
Обновлен `src/app/layout.tsx`:
- Чтение YANDEX_METRIKA_ID из environment
- Передача yandexId в AnalyticsScripts

### 4. Environment конфигурации

#### .env.main (для gomanic.ru)
```
NEXT_PUBLIC_SITE_URL=https://gomanic.ru
YANDEX_METRIKA_ID=104311353
```

#### .env.nastya (для nastya6716.gomanic.ru)
```
NEXT_PUBLIC_SITE_URL=https://nastya6716.gomanic.ru
YANDEX_METRIKA_ID=104232703
```

### 5. Документация
Создан `DUAL_DOMAIN_SETUP.md` с полными инструкциями по:
- Переключению между ветками
- Деплою на разные домены
- Локальной разработке
- Синхронизации изменений

## 🔧 Инструкции по использованию

### Деплой на gomanic.ru
```bash
git checkout main
cp .env.main .env.local
npm run build
# Деплой на сервер gomanic.ru
```

### Деплой на nastya6716.gomanic.ru
```bash
git checkout nastya-domain
cp .env.nastya .env.local
npm run build
# Деплой на сервер nastya6716.gomanic.ru
```

## ✅ Тестирование
- TypeScript compilation: ✅ Успешно
- Production build main: ✅ Успешно
- Production build nastya-domain: ✅ Успешно
- Git push обеих веток: ✅ Успешно

## 📊 Статистика изменений
- Файлов изменено: 6
- Файлов создано: 3
- Строк кода добавлено: ~150
- Веток создано: 1

## 🎯 Результат
Настроена полноценная система с двумя доменами:
1. **gomanic.ru** - основной домен с счетчиком 104311353
2. **nastya6716.gomanic.ru** - дополнительный домен с счетчиком 104232703

Каждый домен имеет свой уникальный счетчик Yandex.Metrika, но использует одинаковый код базы и функционал.

## 🔄 Следующие шаги
1. Настроить CI/CD для автоматического деплоя веток на соответствующие домены
2. Добавить environment-specific настройки в Vercel/хостинг
3. Проверить работу счетчиков после деплоя
