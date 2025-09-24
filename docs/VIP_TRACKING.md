# VIP Button Tracking System

## Обзор
Система отслеживания взаимодействия пользователей с VIP кнопкой "ХОЧУ ГАРАНТИРОВАТЬ СВОЕ МЕСТО СЕЙЧАС!"

## Функциональность

### 1. Динамическое отображение мест
- **Начальное значение**: 30 мест
- **При клике**: Уменьшается до 29
- **Минимум**: 3 места (последние места не уменьшаются)
- **Визуальное предупреждение**: При остатке ≤3 мест показывается "⚠️ Последние места!"

### 2. Tracking событий

#### Analytics Events
```typescript
trackVIPButtonView()      
trackVIPButtonClick()      
trackSlotsUpdate(29)       
```

**Где трекается:**
- Google Analytics 4
- Facebook Pixel
- Yandex Metrika

#### Intersection Observer
- Срабатывает когда кнопка попадает в viewport (50% видимости)
- Единоразовое событие (не дублируется при скроллинге)

### 3. Data Collection

**Собираемые данные при клике:**
```json
{
  "timestamp": "2025-09-24T14:55:00.000Z",
  "userAgent": "Mozilla/5.0...",
  "referrer": "https://google.com",
  "remainingSlots": 29,
  "sessionId": "session_1727188500123_abc123xyz",
  "ip": "192.168.1.1"
}
```

### 4. Отправка данных

#### N8N Webhook
- **URL**: Настраивается в `.env.local` (см. `.env.example`)
- **Method**: POST
- **Content-Type**: application/json
- **Payload**: См. выше + event: "vip_button_click"

#### Email уведомления
**SMTP Configuration:** Настраивается через environment variables (см. `.env.example`)

**Email template:**
```
🎯 VIP Button Click Alert

Timestamp: 24.09.2025, 14:55:00
Remaining Slots: 29
User Agent: Mozilla/5.0...
Referrer: Direct
Session ID: session_123...
IP: 192.168.1.1
```

## Архитектура

### Компоненты

**VipCallToAction.tsx** (150 строк)
```typescript
const INITIAL_SLOTS = 30
const MINIMUM_SLOTS = 3

useState: remainingSlots, hasViewed, sessionId
useRef: buttonRef
useEffect: visibility animation, view tracking, intersection observer
handleClick: analytics, slots update, API call, scroll
```

**analytics.ts** (расширен)
```typescript
trackVIPButtonView()
trackVIPButtonClick()
trackSlotsUpdate(slots: number)
```

**API Route: /api/vip-click**
```typescript
POST /api/vip-click
├── Validate request
├── Send to N8N webhook
└── Send email via nodemailer
```

## Environment Variables

⚠️ **CRITICAL**: Все чувствительные данные хранятся в `.env.local` (НЕ коммитится в git)

### Required Variables (.env.local)
```env
N8N_WEBHOOK_URL=your_webhook_url_here
SMTP_HOST=your_smtp_host
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your_email@domain.com
SMTP_PASS=your_password_here
SMTP_FROM=noreply@domain.com
ADMIN_EMAILS=admin1@example.com,admin2@example.com
```

См. `.env.example` для шаблона конфигурации.

## Зависимости

**Added packages:**
```json
{
  "nodemailer": "^6.9.x",
  "@types/nodemailer": "^6.4.x"
}
```

## Testing

### Local Testing
```bash
npm run dev

curl -X POST http://localhost:3000/api/vip-click \
  -H "Content-Type: application/json" \
  -d '{
    "timestamp": "2025-09-24T14:55:00.000Z",
    "userAgent": "Test Agent",
    "referrer": "test",
    "remainingSlots": 29,
    "sessionId": "test_session"
  }'
```

### Production Monitoring

**Проверка webhook:**
- Проверить logs в N8N dashboard
- Убедиться что данные приходят в правильном формате

**Проверка email:**
- Проверить inbox администраторов
- Subject должен содержать: "🔥 VIP Button Click - X slots left"

## User Flow

```
1. Пользователь скроллит страницу
   ↓
2. VIP секция попадает в viewport (50%)
   ↓
3. 🎯 trackVIPButtonView() → GA4, FB, Yandex
   ↓
4. Кнопка видна, показывает "ОСТАЛОСЬ 30 МЕСТ"
   ↓
5. Пользователь кликает "ХОЧУ ГАРАНТИРОВАТЬ СВОЕ МЕСТО"
   ↓
6. 🎯 trackVIPButtonClick() → Analytics
   ↓
7. Счетчик: 30 → 29
   ↓
8. 🎯 trackSlotsUpdate(29) → Analytics
   ↓
9. POST /api/vip-click → N8N Webhook
   ↓
10. 📧 Email → admins
   ↓
11. Scroll to #agendamento (форма бронирования)
```

## Edge Cases

### Минимальные места
```typescript
if (remainingSlots > MINIMUM_SLOTS) {
  setRemainingSlots(remainingSlots - 1)
}
```
- При 3 местах и меньше счетчик не уменьшается
- Показывается предупреждение "⚠️ Последние места!"

### API Failures
- Webhook или email failures не блокируют UX
- Ошибки логируются в console
- Пользователь все равно скроллится к форме

### Multiple Clicks
- Каждый клик:
  - Уменьшает счетчик (до минимума)
  - Отправляет отдельный event
  - Генерирует отдельное уведомление

### Session Tracking
```typescript
sessionId: `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
```
- Уникальный ID для каждой сессии браузера
- Позволяет отслеживать повторные клики одного пользователя

## Security

### Credentials Storage
✅ **ПРАВИЛЬНО:**
- `.env.local` для продакшн credentials
- `.env.local` в `.gitignore`
- `.env.example` без реальных данных в git

❌ **НЕПРАВИЛЬНО:**
- Hardcoded credentials в коде
- Credentials в документации
- Коммит `.env.local` в репозиторий

### SMTP Security
- TLS поддержка (port 465)
- Secure connection (SMTP_SECURE=true)
- Credentials только в environment variables

## Monitoring

### Analytics Dashboard
Проверять события в:
- Google Analytics → Events → vip_button_view, vip_button_click
- Facebook Events Manager → Custom Events
- Yandex Metrika → Goals

### N8N Workflow
- Логи выполнения webhook
- История полученных данных
- Error notifications

### Email Inbox
- Проверка доставки писем администраторам
- Время отклика (latency)
- Spam folder check

## Troubleshooting

### Emails не приходят
1. Проверить SMTP credentials в `.env.local`
2. Проверить SMTP_PORT и SMTP_SECURE
3. Проверить firewall/антивирус
4. Проверить spam folder

### Webhook fails
1. Проверить N8N_WEBHOOK_URL
2. Проверить доступность n8n instance
3. Проверить network logs в браузере
4. Проверить CORS настройки

### Счетчик не уменьшается
1. Проверить console errors
2. Проверить MINIMUM_SLOTS константу
3. Проверить state updates в React DevTools

## Future Improvements

- [ ] Персистентность счетчика (localStorage/database)
- [ ] A/B тестирование разных значений INITIAL_SLOTS
- [ ] Heatmap tracking позиции кнопки
- [ ] Retry logic для failed API calls
- [ ] Rate limiting для защиты от спама
- [ ] Admin dashboard для просмотра analytics
