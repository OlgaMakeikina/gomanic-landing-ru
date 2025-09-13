# Gomanic Multi-Master Landing System

## 🎯 PRODUCTION READY MULTI-MASTER PLATFORM v3.0.2

Система лендингов для независимых мастеров GOMANIC с персональными поддоменами и индивидуальной аналитикой.

### ⚡ ОБНОВЛЕНИЯ v3.0.2
- **Минималистичный Footer**: переработан в 2-секционную структуру
- **GOMANIC заголовок**: DrukWideCyr-Super font с улучшенной типографикой
- **Новые контакты**: WhatsApp + Telegram для поддержки клиентов
- **Убрана сложность**: карта и адрес удалены для упрощения UX
- **Оптимизация**: код сокращен на ~30%, улучшена производительность

### ⚡ ВОЗМОЖНОСТИ v3.0.0
- **Multi-master архитектура**: поддержка множества мастеров через поддомены
- **Персонализированные лендинги**: уникальные данные для каждого мастера
- **Система статусов мастеров**: Стажер, Опытный мастер, Модель специалист  
- **Цветовая индикация статусов**: синий, зеленый, фиолетовый
- **API загрузки данных**: `/api/masters/[masterId]`
- **Секция MasterIntro**: презентация мастера с фото и информацией
- **Индивидуальная аналитика**: отдельные GA4 + Facebook Pixel для каждого мастера

---

## 🏗️ АРХИТЕКТУРА

### Tech Stack
- **Next.js 14.0.4** (App Router)
- **TypeScript** строгая типизация
- **Tailwind CSS** + custom Vogue styles
- **React Hook Form** для форм
- **Multi-master data system**

### Структура поддоменов
```
anastasia-spb.gomanic.ru     → Анастасия Ульянова (Стажер)
elena-moscow.gomanic.ru      → Елена (будущий мастер)
maria-kazan.gomanic.ru       → Мария (будущий мастер)
```

---

## 📁 НОВАЯ СТРУКТУРА ДАННЫХ

```
src/
├── data/
│   └── masters/
│       └── anastasia-moscow.json    # Конфиг Анастасии
├── types/
│   └── master.ts                    # TypeScript интерфейсы
├── utils/
│   ├── master-loader.ts             # Загрузка данных мастера
│   └── master-slides.ts             # Генерация слайдов Hero
├── components/
│   ├── sections/
│   │   └── MasterIntro/             # Секция презентации мастера
│   ├── hero/                        # Обновлен для поддержки мастеров
│   └── footer/                      # Модульный footer
│       ├── Footer.tsx               # Главный компонент footer
│       ├── FooterLogo.tsx           # Логотип и дисклеймер
│       ├── SocialLinks.tsx          # Контакты и соцсети
│       ├── AddressSection.tsx       # Адрес с картой
│       ├── Copyright.tsx            # Копирайт GOMANIC PRO
│       ├── ContactIcon.tsx          # Иконки контактов
│       ├── MapEmbed.tsx             # Встроенная карта
│       ├── data.ts                  # Данные контактов и адреса
│       └── types.ts                 # TypeScript интерфейсы
└── app/
    ├── api/
    │   └── masters/
    │       └── [masterId]/route.ts  # API endpoint
    └── page.tsx                     # Обновлен для multi-master
```

---

## 👤 КОНФИГУРАЦИЯ МАСТЕРА

### Пример: Анастасия Ульянова
```json
{
  "subdomain": "anastasia-moscow",
  "personal": {
    "name": "Анастасия Ульянова",
    "photo": "/images/nail-master/anastasia-ulianova/profile.png",
    "status": {
      "type": "intern",
      "label": "Стажер GOMANIC",
      "promotion": {
        "text": "Практика после глубокого обучения",
        "isActive": true
      }
    },
    "strongSide": {
      "title": "Коррекция неудачного покрытия",
      "description": "Могу исправить неудачное покрытие другого мастера"
    }
  },
  "services": [
    {
      "name": "Гель-лак + снятие + маникюр",
      "originalPrice": 2000,
      "currentPrice": 999,
      "isPromo": true
    }
  ],
  "contacts": {
    "address": {
      "full": "г. Санкт-Петербург, Невский проспект, д. 118, офис 4109",
      "city": "Санкт-Петербург",
      "metro": "Невский проспект"
    }
  }
}
```

---

## 🎨 ДИЗАЙН СИСТЕМА

### Цвета статусов мастеров:
- **🔵 Стажер** - #3B82F6 (синий)
- **🟢 Опытный мастер** - #10B981 (зеленый)  
- **🟣 Модель специалист** - #8B5CF6 (фиолетовый)

### Шрифты:
- **DrukWideCyr-Super** - заголовки (H1, H2, имена мастеров)
- **Manrope** - основной текст, описания, кнопки

### Компоненты:
- **MasterIntro секция** - презентация мастера с фото 500px
- **Статус badges** - цветовая индикация уровня мастера
- **Кнопки в стиле Hero** - UPPERCASE, tracking-wide, hover эффекты
- **Модульный Footer** - 4 компонента с data-driven подходом
  - FooterLogo с дисклеймером платформы
  - SocialLinks с настраиваемыми контактами  
  - AddressSection с интерактивной картой
  - Copyright с брендингом GOMANIC PRO

---

## 🚀 КОМАНДЫ

```bash
# Development
npm run dev          # http://localhost:3000

# Production  
npm run build
npm run start

# Code Quality
npm run type-check
npm run lint
```

---

## 🔧 API ENDPOINTS

### Загрузка данных мастера
```
GET /api/masters/[masterId]

Примеры:
/api/masters/anastasia-moscow  → данные Анастасии
/api/masters/elena-spb         → данные Елены
```

---

## 📊 ИНТЕГРАЦИИ

### Environment Variables
```env
NEXT_PUBLIC_SITE_URL=https://gomanic.ru
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX  # Основной GA4
FACEBOOK_PIXEL_ID=XXXXXXXXXX      # Основной Pixel
```

### Мастер-специфичная аналитика
Каждый мастер имеет собственные:
- GA4 Property ID
- Facebook Pixel ID
- UTM параметры для рекламы

---

## 🌐 ДЕПЛОЙ И DNS

### Vercel настройка
```json
{
  "domains": [
    "gomanic.ru",
    "*.gomanic.ru"
  ]
}
```

### DNS записи
```
A     gomanic.ru           → Vercel IP
CNAME *.gomanic.ru         → gomanic.ru  
```

---

## 🔄 WORKFLOW ДОБАВЛЕНИЯ МАСТЕРА

1. **Создать JSON конфиг** в `/src/data/masters/`
2. **Добавить фото** в `/public/images/masters/[name]/`
3. **Настроить поддомен** в DNS
4. **Создать GA4 + Pixel** для мастера
5. **Задеплоить изменения**

---

## 🎯 ROADMAP

- [ ] Админ-панель для управления мастерами
- [ ] CRM интеграция с FreSHA API
- [ ] A/B тестирование лендингов
- [ ] SEO оптимизация под местные запросы
- [ ] Multilingual support

---

## 📞 ТЕХНИЧЕСКАЯ ПОДДЕРЖКА

**Репозиторий:** https://github.com/OlgaMakeikina/gomanic-landing-ru  
**Статус:** Production Ready v3.0.2  
**Последнее обновление:** Сентябрь 2025

### Критические компоненты:
- ✅ Multi-master data loading
- ✅ Subdomain detection  
- ✅ Master status system
- ✅ Individual analytics
- ✅ SEO personalization
- ✅ Modular Footer architecture

### 📚 Дополнительная документация:
- **FOOTER_DOCUMENTATION.md** - полная документация Footer компонентов
- **CHANGELOG.md** - история версий и изменений
- **DEPLOYMENT.md** - инструкции по деплою
