# VIP Tracking System - Deployment Guide

## Pre-Deployment Checklist

### 1. Environment Setup
Создать `.env.local` на production сервере с реальными credentials:

```bash
cp .env.example .env.local
nano .env.local
```

**Заполнить:**
- N8N_WEBHOOK_URL
- SMTP_HOST, SMTP_PORT, SMTP_SECURE
- SMTP_USER, SMTP_PASS, SMTP_FROM
- ADMIN_EMAILS (через запятую)

### 2. Dependencies
```bash
npm install
```

Проверить что установлены:
- nodemailer
- @types/nodemailer

### 3. Build Test
```bash
npm run build
```

Должно пройти без ошибок.

### 4. Type Check
```bash
npm run type-check
```

## Deployment Steps

### Vercel Deployment

**1. Environment Variables в Vercel Dashboard:**
```
Settings → Environment Variables → Add
```

Добавить все переменные из `.env.local`:
- N8N_WEBHOOK_URL
- SMTP_HOST
- SMTP_PORT
- SMTP_SECURE
- SMTP_USER
- SMTP_PASS
- SMTP_FROM
- ADMIN_EMAILS

**2. Deploy:**
```bash
git add .
git commit -m "feat: VIP button tracking with n8n + email"
git push origin main
```

Vercel auto-deploy запустится.

**3. Verify Deployment:**
- Проверить build logs
- Проверить environment variables подтянулись
- Тестовый клик на production

### Manual Server Deployment

**1. SSH на сервер:**
```bash
ssh user@your-server.com
cd /path/to/gomanic-landing-ru
```

**2. Pull changes:**
```bash
git pull origin main
npm install
npm run build
```

**3. Setup .env.local:**
```bash
nano .env.local
```

**4. Restart service:**
```bash
pm2 restart gomanic
pm2 logs gomanic
```

## Post-Deployment Testing

### 1. Smoke Test
  - Facebook Pixel Events
  - Yandex Metrika Goals

### 5. User Flow Test
1. Скроллить до VIP секции
2. Убедиться что счетчик показывает 30 мест
3. Кликнуть кнопку
4. Счетчик должен стать 29
5. Должен скроллить к форме бронирования

## Rollback Plan

Если что-то пошло не так:

```bash
git revert HEAD
git push origin main
```

Или на сервере:
```bash
git reset --hard HEAD~1
npm run build
pm2 restart gomanic
```

## Monitoring

После деплоя мониторить:
- Server logs
- Email delivery rate
- N8N webhook success rate
- Analytics events flow
- Error tracking (Sentry/LogRocket if configured)
