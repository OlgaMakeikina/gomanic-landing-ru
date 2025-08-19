import { config } from './config'

// Mercado Pago SDK (требует установки: npm install mercadopago)
// import { MercadoPagoConfig, Preference } from 'mercadopago'

// Инициализация клиента Mercado Pago
const initMercadoPago = () => {
  if (!config.mercadoPago.accessToken) {
    console.warn('MercadoPago access token not configured')
    return null
  }
  
  // В реальной реализации:
  // const client = new MercadoPagoConfig({
  //   accessToken: config.mercadoPago.accessToken,
  // })
  // return client
  
  return null
}

// Создание предпочтения для оплаты
export const createPaymentPreference = async (items, customer, appointmentId) => {
  try {
    const preferenceData = {
      items: items.map(item => ({
        title: item.name,
        quantity: 1,
        unit_price: item.price,
        currency_id: 'BRL'
      })),
      payer: {
        name: customer.name,
        email: customer.email,
        phone: {
          area_code: customer.phone.substring(0, 2),
          number: customer.phone.substring(2)
        }
      },
      back_urls: {
        success: `${config.siteUrl}/payment/success?appointment_id=${appointmentId}`,
        failure: `${config.siteUrl}/payment/failure?appointment_id=${appointmentId}`,
        pending: `${config.siteUrl}/payment/pending?appointment_id=${appointmentId}`
      },
      auto_return: 'approved',
      external_reference: appointmentId,
      statement_descriptor: 'UNHAS 5 ESTRELAS',
      notification_url: `${config.siteUrl}/api/mercadopago/webhook`
    }

    // В реальной реализации:
    // const client = initMercadoPago()
    // const preference = new Preference(client)
    // const result = await preference.create({ body: preferenceData })
    // return result

    // Заглушка для разработки
    return {
      id: 'mock_preference_id',
      init_point: 'https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=mock_preference_id',
      sandbox_init_point: 'https://sandbox.mercadopago.com.br/checkout/v1/redirect?pref_id=mock_preference_id'
    }
    
  } catch (error) {
    console.error('Error creating MercadoPago preference:', error)
    throw error
  }
}

// Обработка webhook уведомлений
export const handlePaymentWebhook = async (paymentData) => {
  try {
    const { type, data } = paymentData
    
    if (type === 'payment') {
      const paymentId = data.id
      
      // Получение информации о платеже
      // const payment = await mercadoPago.payment.findById(paymentId)
      
      // Обновление статуса записи в Fresha
      if (paymentData.status === 'approved') {
        // Подтверждение записи
        console.log(`Payment approved for appointment: ${paymentData.external_reference}`)
      }
    }
    
    return { processed: true }
  } catch (error) {
    console.error('Error processing payment webhook:', error)
    throw error
  }
}

// Предустановленные пакеты услуг
export const getServicePackages = () => {
  return [
    {
      id: 'manicure_basic',
      name: 'Manicure + Nivelamento + Esmaltação em Gel',
      price: 80.00,
      originalPrice: 160.00,
      description: 'Pacote básico com qualidade premium',
      duration: 90,
      includes: [
        'Ferramentas esterilizadas',
        'Nivelamento perfeito da unha', 
        'Esmalte em gel premium com brilho até 4 semanas'
      ]
    },
    {
      id: 'manicure_along',
      name: 'Alongamento + Manicure + Esmaltação em Gel',
      price: 119.00,
      originalPrice: 200.00,
      description: 'Alongamento profissional com acabamento premium',
      duration: 120,
      includes: [
        'Modelagem de comprimento e formato',
        'Reforço da resistência',
        'Esmalte em gel premium'
      ]
    },
    {
      id: 'combo_complete',
      name: 'Combo: Manicure + Esmaltação + Pedicure + Plástica dos Pés',
      price: 160.00,
      originalPrice: 320.00,
      description: 'Pacote completo para mãos e pés',
      duration: 180,
      includes: [
        'Cuidados completos para mãos e pés',
        'Esmaltação premium de longa duração',
        'SPA e plástica dos pés'
      ]
    }
  ]
}

export default {
  createPaymentPreference,
  handlePaymentWebhook,
  getServicePackages
}
