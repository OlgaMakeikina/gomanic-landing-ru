import { config } from './config'

// Google Analytics 4
export const GA_TRACKING_ID = config.analytics.googleId

export const pageview = (url) => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      debug_mode: config.environment === 'development'
    })
  }
}

// Eventos específicos do negócio
export const trackAgendamento = (service, price) => {
  event({
    action: 'agendamento_iniciado',
    category: 'conversion',
    label: service,
    value: price
  })
}

export const trackWhatsAppClick = () => {
  event({
    action: 'whatsapp_click',
    category: 'engagement',
    label: 'contact_button'
  })
}

export const trackInstagramClick = () => {
  event({
    action: 'instagram_click', 
    category: 'social',
    label: 'follow_button'
  })
}

export const trackPortfolioView = (imageIndex) => {
  event({
    action: 'portfolio_view',
    category: 'engagement',
    label: `image_${imageIndex}`
  })
}

// Facebook Pixel
export const initFacebookPixel = () => {
  if (typeof window !== 'undefined' && config.analytics.facebookId) {
    window.fbq('init', config.analytics.facebookId)
    window.fbq('track', 'PageView')
  }
}

export const trackFacebookEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && config.analytics.facebookId) {
    window.fbq('track', eventName, parameters)
  }
}
