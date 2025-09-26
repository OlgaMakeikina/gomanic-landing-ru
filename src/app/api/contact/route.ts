import { NextRequest, NextResponse } from 'next/server'
import { config } from '@/utils/config'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Валидация данных
    const { name, phone, email, service, date, time, message } = body
    
    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: 'Campos obrigatórios: nome, telefone e serviço' },
        { status: 400 }
      )
    }

    // Отправка в Fresha (если настроено)
    if (config.fresha.apiKey && config.fresha.webhookUrl) {
      try {
        const freshaResponse = await fetch(config.fresha.webhookUrl, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${config.fresha.apiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            customer: {
              name,
              phone,
              email
            },
            service,
            preferredDate: date,
            preferredTime: time,
            notes: message,
            source: 'website_landing'
          })
        })
        
        if (!freshaResponse.ok) {
          console.error('Fresha API error:', await freshaResponse.text())
        }
      } catch (freshaError) {
        console.error('Failed to send to Fresha:', freshaError)
      }
    }

    // Отправка email уведомления (если настроено)
    if (config.smtp.host && config.smtp.user) {
      // TODO: Добавить отправку email
      console.log('Email notification would be sent here')
    }

    // Отправка WhatsApp уведомления (если настроено)
    if (config.whatsapp.apiKey) {
      // TODO: Добавить WhatsApp Business API
      console.log('WhatsApp notification would be sent here')
    }

    return NextResponse.json({ 
      success: true,
      message: 'Booking received successfully!' 
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
