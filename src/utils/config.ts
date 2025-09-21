// Упрощенная конфигурация проекта
export const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  environment: process.env.NEXT_PUBLIC_ENVIRONMENT || 'development',
  
  analytics: {
    googleId: process.env.GOOGLE_ANALYTICS_ID,
    facebookId: process.env.FACEBOOK_PIXEL_ID,
  },
  
  fresha: {
    apiKey: process.env.FRESHA_API_KEY,
    webhookUrl: process.env.FRESHA_WEBHOOK_URL,
  },
  
  whatsapp: {
    phoneNumber: '5548996737351',
    apiKey: process.env.WHATSAPP_API_KEY,
    phoneId: process.env.WHATSAPP_PHONE_ID,
  },
  
  smtp: {
    host: process.env.SMTP_HOST,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  }
}

export default config