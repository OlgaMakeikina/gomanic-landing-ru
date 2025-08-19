// Валидация и конфигурация переменных окружения
export const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001',
  environment: process.env.NEXT_PUBLIC_ENVIRONMENT || 'development',
  
  // Analytics
  analytics: {
    googleId: process.env.GOOGLE_ANALYTICS_ID,
    facebookId: process.env.FACEBOOK_PIXEL_ID,
  },
  
  // CRM Integration  
  fresha: {
    apiKey: process.env.FRESHA_API_KEY,
    webhookUrl: process.env.FRESHA_WEBHOOK_URL,
  },
  
  // Payment Gateway
  mercadoPago: {
    accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN,
    publicKey: process.env.MERCADO_PAGO_PUBLIC_KEY,
  },
  
  // Communication
  whatsapp: {
    phoneNumber: '5548996737351',
    apiKey: process.env.WHATSAPP_API_KEY,
    phoneId: process.env.WHATSAPP_PHONE_ID,
  },
  
  // Email
  smtp: {
    host: process.env.SMTP_HOST,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  }
}

// Проверка обязательных переменных в продакшене
if (config.environment === 'production') {
  const required = [
    'NEXT_PUBLIC_SITE_URL',
    'GOOGLE_ANALYTICS_ID',
  ]
  
  const recommended = [
    'FRESHA_API_KEY',
    'MERCADO_PAGO_ACCESS_TOKEN'
  ]
  
  required.forEach(key => {
    if (!process.env[key]) {
      console.error(`❌ Missing required environment variable: ${key}`)
    }
  })
  
  recommended.forEach(key => {
    if (!process.env[key]) {
      console.warn(`⚠️  Missing recommended environment variable: ${key}`)
    }
  })
}

export default config
