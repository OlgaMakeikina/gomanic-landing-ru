# 🎯 Настройка страниц записи для мастеров

## 📋 Быстрый старт

Форма теперь **автоматически перенаправляет** клиентов на страницу записи мастера (Dikidi) вместо WhatsApp.

## 🔧 Настройка для нового мастера

### 1. **Получить ссылку записи Dikidi**
Каждый мастер должен предоставить свою ссылку вида:
```
https://dikidi.net/МАСТЕР_ID?параметры
```

### 2. **Добавить в конфигурацию мастера**
```typescript
// src/data/masters/masterName.ts
export const masterData: MasterConfig = {
  // ... другие поля
  contacts: {
    phone: "+7XXXXXXXXXX",
    whatsapp: "+7XXXXXXXXXX",
    bookingUrl: "https://dikidi.net/1899279?p=3.pi-po-sm-ssm-si&o=1&m=4107990&s=20568416", // 🆕
    address: {
      full: "Адрес мастера",
      city: "Город",
      metro: "Станция метро"
    }
  }
};
```

### 3. **Для основного мастера (default)**
Если поле `bookingUrl` не указано, используется дефолтная ссылка:
```typescript
// В useBookingForm.ts
const defaultUrl = 'https://dikidi.net/1899279?p=3.pi-po-sm-ssm-si&o=1&m=4107990&s=20568416';
```

## 🎯 Пример ссылок Dikidi

### **Структура URL:**
```
https://dikidi.net/[SALON_ID]?p=[PARAMETERS]&o=[OPTIONS]&m=[MASTER_ID]&s=[SERVICE_ID]
```

### **Параметры:**
- `SALON_ID` - ID салона в Dikidi
- `MASTER_ID` - ID конкретного мастера  
- `SERVICE_ID` - ID услуги (опционально)
- `p=3.pi-po-sm-ssm-si` - стандартные параметры показа
- `o=1` - опции отображения

### **Пример для разных мастеров:**
```typescript
// Мастер 1
bookingUrl: "https://dikidi.net/1899279?p=3.pi-po-sm-ssm-si&o=1&m=4107990"

// Мастер 2 
bookingUrl: "https://dikidi.net/1899279?p=3.pi-po-sm-ssm-si&o=1&m=4107991"

// Мастер 3 с предвыбранной услугой
bookingUrl: "https://dikidi.net/1899279?p=3.pi-po-sm-ssm-si&o=1&m=4107992&s=20568416"
```

## 🔄 Процесс записи клиента

1. **Клиент заполняет форму** (имя, телефон, email)
2. **Данные сохраняются** в CRM + отправляется email
3. **Через 2 секунды** → автоперенаправление на Dikidi
4. **На странице Dikidi** клиент видит календарь мастера
5. **Выбирает время** и завершает запись

## 📧 Email уведомления

### **Клиенту:**
- ✅ Подтверждение отправки заявки
- 📅 Уведомление о переходе на страницу записи
- 📞 Контакты для связи

### **Администратору:**
- 📋 Данные клиента (имя, телефон, email)
- ⏰ Время заявки
- 🔍 IP и User Agent

## 🚨 Важные моменты

### **Обязательные поля в форме:**
```typescript
interface FormData {
  name: string;        // ✅ Имя
  phone: string;       // ✅ Телефон  
  email: string;       // ✅ Email
  privacyConsent: boolean; // ✅ Согласие на обработку
}
```

### **Убрано из формы:**
- ❌ Выбор услуги (теперь на странице мастера)
- ❌ WhatsApp перенаправление
- ❌ Сообщение мастеру

### **Fallback система:**
Если `bookingUrl` не работает или не указан:
```typescript
// Используется дефолтная ссылка первого мастера
const fallbackUrl = 'https://dikidi.net/1899279?p=3.pi-po-sm-ssm-si&o=1&m=4107990&s=20568416';
```

## 🔧 Техническая реализация

### **Файл мастера:**
```typescript
// src/data/masters/newMaster.ts
import { MasterConfig } from '@/types/master';

export const newMasterData: MasterConfig = {
  subdomain: 'new-master',
  personal: { ... },
  services: [ ... ],
  contacts: {
    bookingUrl: 'https://dikidi.net/НОВАЯ_ССЫЛКА', // 🎯 Основное
    phone: '+7XXXXXXXXXX',
    whatsapp: '+7XXXXXXXXXX',
    address: { ... }
  },
  // ... остальные поля
};
```

### **Использование в компоненте:**
```typescript
// Автоматически передается в форму
<BookingForm masterData={masterData} />

// Внутри формы используется
const bookingUrl = masterData?.bookingUrl || DEFAULT_URL;
window.location.href = bookingUrl;
```

---
**📞 Техническая поддержка:** При возникновении проблем с интеграцией Dikidi  
**🔄 Обновления:** Этот файл обновляется при добавлении новых функций