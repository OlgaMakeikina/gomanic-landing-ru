# N8N SETUP GUIDE - Gomanic Brasil Landing

## 🎯 ЦЕЛЬ
Настройка автоматической отправки email с ссылками для бронирования после заполнения формы "AGENDE SEU HORÁRIO".

## 📋 WORKFLOW N8N

### 1. Webhook Trigger
```json
{
  "name": "string",
  "phone": "string",
  "email": "string", 
  "source": "gomanic-landing-br",
  "timestamp": "2025-08-23T10:30:00.000Z"
}
```

### 2. Email Template
**Subject**: 🔗 Seus Links de Agendamento - Gomanic Brasil

**Body**:
```html
Olá {{name}},

Obrigado pelo interesse no Gomanic Brasil!

Aqui estão seus links para agendamento:

🗓️ **Agendar Manicure**
👆 [Link de Agendamento 1]

🎨 **Agendar Design de Unhas** 
👆 [Link de Agendamento 2]

📱 **WhatsApp Direto**
👆 [Link WhatsApp: {{phone}}]

---
Gomanic Brasil
Sua beleza, nossa paixão ✨
```

### 3. N8N Node Structure
1. **Webhook** → Recebe dados da landing
2. **Set** → Forma dados для email
3. **Email** → Отправка пользователю
4. **HTTP Request** → Уведомление админу (опционально)

## ⚙️ НАСТРОЙКА

### Environment Variable
```bash
# Production
N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/booking-form

# Development (пока пустая)
N8N_WEBHOOK_URL=
```

### Testing Payload
```bash
curl -X POST https://your-n8n-instance.com/webhook/booking-form \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Maria Silva",
    "phone": "(11) 99999-9999",
    "email": "maria@example.com",
    "source": "gomanic-landing-br",
    "timestamp": "2025-08-23T10:30:00.000Z"
  }'
```

## 📧 EMAIL LINKS (Примеры)

Замените на реальные ссылки вашей системы бронирования:

```
Manicure Clássica:
https://booking.gomanic.com/service/manicure-classic

Design Avançado:
https://booking.gomanic.com/service/nail-design

WhatsApp:
https://wa.me/5511999999999?text=Olá! Vim do site e gostaria de agendar um horário.
```

## 🔧 FALLBACK ПЛАН

Если N8N недоступен:
1. Форма показывает ошибку пользователю
2. Данные НЕ теряются (можно добавить fallback в DB)
3. Пользователь может попробовать снова

## 📊 ANALYTICS

После настройки отследить:
- Успешные отправки email
- Клики по ссылкам бронирования  
- Конверсию в appointments

## ✅ CHECKLIST

- [ ] Создать N8N workflow
- [ ] Настроить webhook endpoint  
- [ ] Добавить email template
- [ ] Получить ссылки для бронирования
- [ ] Протестировать отправку
- [ ] Добавить N8N_WEBHOOK_URL в production
- [ ] Запустить форму в production

## 🆘 ПОДДЕРЖКА

При проблемах с интеграцией:
1. Проверить N8N_WEBHOOK_URL в .env
2. Посмотреть логи API: /api/booking
3. Тестировать webhook напрямую
4. Проверить email доставку в N8N

Готово к интеграции! 🚀