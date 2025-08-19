import { config } from './config'

// Интеграция с Fresha CRM API
export const sendToFresha = async (formData) => {
  if (!config.fresha.apiKey || !config.fresha.webhookUrl) {
    throw new Error('Fresha API not configured')
  }

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error('Fresha integration error:', error)
    throw error
  }
}

// Создание события в календаре Fresha
export const createFreshaAppointment = async (appointmentData) => {
  const {
    customerName,
    customerPhone,
    customerEmail,
    service,
    date,
    time,
    duration = 90, // минуты
    notes
  } = appointmentData

  return sendToFresha({
    customer: {
      firstName: customerName.split(' ')[0],
      lastName: customerName.split(' ').slice(1).join(' '),
      phone: customerPhone,
      email: customerEmail
    },
    appointment: {
      service,
      startDateTime: `${date}T${time}:00`,
      duration,
      notes,
      status: 'requested'
    },
    source: 'website_landing_page'
  })
}

// Получение доступных слотов времени
export const getAvailableSlots = async (date, serviceId) => {
  try {
    // В реальной реализации здесь был бы запрос к Fresha API
    // Пока возвращаем заглушку
    const mockSlots = [
      '09:00', '10:30', '12:00', '13:30', 
      '15:00', '16:30', '18:00', '19:30'
    ]
    
    return mockSlots
  } catch (error) {
    console.error('Error fetching available slots:', error)
    return []
  }
}

export default {
  sendToFresha,
  createFreshaAppointment,
  getAvailableSlots
}
