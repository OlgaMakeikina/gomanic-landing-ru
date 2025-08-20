# 🚀 PRODUCTION DEPLOYMENT GUIDE

## ⚡ Quick Start

### Local Development
```bash
npm install
cp .env.example .env.local
# Настроить переменные в .env.local
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

---

## 🌐 Deploy Options

### 1. Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

**Environment Variables в Vercel:**
- `NEXT_PUBLIC_SITE_URL`
- `GOOGLE_ANALYTICS_ID`  
- `FACEBOOK_PIXEL_ID`
- `FRESHA_API_KEY`
- `MERCADO_PAGO_ACCESS_TOKEN`

### 2. Docker
```bash
docker build -t gomanic-brasil .
docker run -p 3000:3000 gomanic-brasil
```

### 3. Custom Server
```bash
# Build
npm run build

# Start with PM2
npm install -g pm2
pm2 start pm2.config.json

# Or direct
npm start
```

---

## 🔧 Environment Configuration

### Development (.env.local)
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_ENVIRONMENT=development
GOOGLE_ANALYTICS_ID=
FACEBOOK_PIXEL_ID=
```

### Production
```env
NEXT_PUBLIC_SITE_URL=https://brasil.gomanic.com
NEXT_PUBLIC_ENVIRONMENT=production
GOOGLE_ANALYTICS_ID=G-REAL-ID
FACEBOOK_PIXEL_ID=REAL-PIXEL-ID
FRESHA_API_KEY=real_api_key
```

---

## 📊 Monitoring & Analytics

### Включены:
- **Google Analytics 4** - полный трекинг
- **Facebook Pixel** - конверсии и ретаргетинг  
- **Form Tracking** - отправки форм
- **Custom Events** - клики и взаимодействия

### SEO:
- **Structured Data** - schema.org разметка
- **Open Graph** - социальные сети
- **Meta Tags** - полная оптимизация
- **Sitemap** - автогенерация

---

## 🔗 Integrations

### FreSHA CRM
```env
FRESHA_API_KEY=your_key
FRESHA_WEBHOOK_URL=your_webhook
```

### MercadoPago (готово к подключению)
```env
MERCADO_PAGO_ACCESS_TOKEN=your_token
MERCADO_PAGO_PUBLIC_KEY=your_key
```

---

## 🛠️ Development Commands

```bash
npm run dev          # Development server
npm run build        # Production build  
npm run start        # Production server
npm run lint         # ESLint check
npm run type-check   # TypeScript check
npm run analyze      # Bundle analysis
```

---

## 📁 Project Structure

```
/src
  /app
    /api
      /booking          # Form submissions
      /fallback-booking # Backup handler
    layout.tsx          # SEO + Analytics
    page.tsx           # Main landing
  /components
    /tracking          # Form components
  /utils
    analytics.ts       # GA4 tracking
    crm.ts            # FreSHA integration  
    seo.ts            # SEO configuration

/.github/workflows     # Auto deploy
/scripts              # Deploy scripts
Dockerfile            # Container config
```

---

## 🔒 Security Features

- **CSP Headers** - content security policy
- **HTTPS Redirect** - force secure connections
- **Rate Limiting** - API protection
- **Input Validation** - form security
- **Environment Isolation** - dev/prod separation

---

## ✅ Pre-Deploy Checklist

- [ ] Environment variables configured
- [ ] Google Analytics ID updated
- [ ] Facebook Pixel ID updated  
- [ ] FreSHA API key added
- [ ] Domain DNS configured
- [ ] SSL certificate installed
- [ ] Performance tested (Lighthouse 90+)
- [ ] Forms tested and working
- [ ] Analytics events firing

---

**Status:** ✅ Production Ready  
**Last Updated:** August 2025