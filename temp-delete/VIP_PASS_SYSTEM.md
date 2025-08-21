# VIP Pass System - Gomanic Brasil

## Обзор системы

VIP Pass система позволяет клиентам покупать на лендинге предоплаченные пасы для услуг и использовать их для прямого бронирования в Fresha.

## Архитектура решения

### Основные компоненты:
1. **Frontend VIP Pass форма** - `/src/components/tracking/VIPPassForm.tsx`
2. **VIP Pass валидатор** - `/src/components/tracking/VIPPassValidator.tsx`
3. **API для создания пасов** - `/src/app/api/vip-pass/create/route.ts`
4. **API для валидации** - `/src/app/api/vip-pass/validate/route.ts`
5. **Утилиты управления** - `/src/utils/vip-pass/`

### Fresha Integration Strategy

Поскольку Fresha не предоставляет публичное API, система работает следующим образом:

#### Реальные возможности Fresha:
- ✅ **Business-Specific Gift Cards** - можно создавать кастомные подарочные карты
- ✅ **Gift Card Tracking** - детальное отслеживание использования
- ✅ **Single Use Control** - ограничение на однократное использование
- ✅ **Expiry Date Management** - контроль срока действия
- ✅ **Direct Booking Links** - прямые ссылки для бронирования

#### Ограничения:
- ❌ **No Public API** - нет публичного REST API
- ❌ **No Extension After Expiry** - нельзя продлить после истечения
- ❌ **Manual Management** - управление только через панель Fresha

## Workflow VIP Pass

### 1. Покупка VIP Pass
```typescript
interface VIPPassData {
  customerName: string;
  customerEmail: string; 
  customerPhone: string;
  serviceCategory: 'premium' | 'deluxe' | 'exclusive';
  validityDays: number; // по умолчанию 90
}
```

### 2. Создание Gift Card в Fresha
```typescript
const giftCardData = {
  value: VIP_PASS_VALUES[serviceCategory],
  expiryDate: new Date(Date.now() + validityDays * 24 * 60 * 60 * 1000),
  customerEmail,
  customerName,
  description: `VIP Pass ${serviceCategory.toUpperCase()}`,
  restrictions: {
    singleUse: true,
    applicableServices: [VIP_SERVICES[serviceCategory]]
  }
}
```

### 3. Генерация Booking URL
```typescript
const bookingUrl = `https://www.fresha.com/a/gomanic-brasil?gift_card=${passCode}&service=${serviceCategory}`;
```

## Пакеты VIP Pass

### Premium VIP - R$ 150
- Manicure Premium + Pedicure
- Nail Art Básico  
- Продолжительность: 2h

### Deluxe VIP - R$ 250
- Manicure Deluxe + Pedicure
- Nail Art Premium + Hidratação
- Продолжительность: 3h

### Exclusive VIP - R$ 400
- Full Gomanic Experience
- Design Exclusivo + Produtos Premium
- Продолжительность: 4h

## API Endpoints

### POST /api/vip-pass/create
Создание нового VIP Pass
```json
{
  "name": "Cliente Nome",
  "email": "cliente@email.com", 
  "phone": "+5511999999999",
  "serviceCategory": "deluxe",
  "validityDays": 90
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "passCode": "XXXX-XXXX-XXXX-XXXX",
    "bookingUrl": "https://fresha.com/...",
    "expiryDate": "2025-11-19T00:00:00Z",
    "message": "VIP Pass criado com sucesso!"
  }
}
```

### GET /api/vip-pass/validate?code=XXXX-XXXX-XXXX-XXXX
Валидация VIP Pass
```json
{
  "success": true,
  "data": {
    "isValid": true,
    "isUsed": false,
    "isExpired": false,
    "remainingBalance": 250,
    "serviceDetails": {
      "name": "Manicure Deluxe + Pedicure + Nail Art Premium",
      "value": 250,
      "category": "deluxe"
    }
  }
}
```

## Контроль использования

### Автоматические проверки:
1. **Срок действия** - автоматически истекает через 90 дней
2. **Однократное использование** - блокируется после первого применения  
3. **Валидация кода** - проверка существования и статуса
4. **Tracking событий** - отслеживание всех действий

### Отслеживание в Fresha:
- Purchase date
- Redemption status  
- Remaining balance
- Activity timeline
- Expiry tracking

## Fallback система

При недоступности Fresha API:
```typescript
const createFallbackVIPPass = async (passData: VIPPassData) => {
  // Локальная база данных или внешний сервис
  return await fetch('/api/vip-pass/fallback', {
    method: 'POST',
    body: JSON.stringify(passData)
  });
};
```

## Security & Validation

### Validation правила:
- Уникальные коды пасов
- Email validation
- Phone number format check
- Service category validation
- Expiry date controls

### Rate Limiting:
- Максимум 5 VIP Pass в час с одного IP
- Email/phone validation для предотвращения дубликатов

## Analytics Integration

### Tracked Events:
```typescript
trackFormSubmission('vip_pass_purchase', {
  service_category: 'deluxe',
  validity_days: 90,
  pass_value: 250
});
```

### Metrics:
- VIP Pass sales by category
- Conversion rate landing → purchase
- Redemption rate vs expiry
- Customer acquisition cost

## Deployment Checklist

### Environment Variables:
```env
FRESHA_API_KEY=your_real_api_key
FRESHA_BUSINESS_ID=your_business_id  
FRESHA_VIP_PASS_VALIDITY_DAYS=90
```

### Fresha Setup:
1. ✅ Configurar Business-Specific Gift Cards
2. ✅ Ativar payment processing
3. ✅ Configurar serviços premium/deluxe/exclusive
4. ✅ Testar direct booking links
5. ✅ Configurar email notifications

### Testing:
- [ ] Teste criação VIP Pass em ambiente staging
- [ ] Teste validação códigos  
- [ ] Teste direct booking no Fresha
- [ ] Teste fallback system
- [ ] Teste analytics tracking

## Future Enhancements

### Possíveis melоrения:
1. **WhatsApp Integration** - отправка кодов через WhatsApp Business
2. **QR Codes** - генерация QR кодов для VIP Pass
3. **Email Templates** - красивые email с кодами
4. **Admin Dashboard** - панель управления VIP Pass
5. **Loyalty Integration** - интеграция с программой лояльности

### Fresha API Updates:
Когда Fresha предоставит публичное API:
- Более точный контроль gift cards
- Real-time status updates
- Webhooks для events
- Automated expiry management

---

## Support & Maintenance

**Ответственный:** Development Team  
**Документация:** Обновляется при каждом изменении функциональности  
**Monitoring:** Analytics + Fresha dashboard для отслеживания использования