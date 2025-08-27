import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, service, date, notes } = body;

    const bookingData = {
      timestamp: new Date().toISOString(),
      name,
      phone,
      email: email || '',
      service: service || 'Manicure Gomanic',
      date: date || '',
      notes: notes || '',
      source: 'Gomanic Landing BR',
      ip: request.headers.get('x-forwarded-for') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown',
    };

    if (process.env.SMTP_HOST && process.env.SMTP_USER) {
      try {
        await sendEmailNotification(bookingData);
      } catch (emailError) {
        console.error('Email notification failed:', emailError);
      }
    }

    console.log('Fallback booking received:', bookingData);

    return NextResponse.json({
      success: true,
      message: 'Solicitação recebida! Entraremos em contato em breve.',
      id: `fallback_${Date.now()}`,
    });
  } catch (error) {
    console.error('Fallback booking error:', error);
    return NextResponse.json(
      { error: 'Erro ao processar solicitação' },
      { status: 500 }
    );
  }
}

async function sendEmailNotification(data: any) {
  if (!process.env.SMTP_HOST) return;

  const emailContent = `
Nova solicitação de agendamento - Gomanic Brasil

Nome: ${data.name}
Telefone: ${data.phone}
Email: ${data.email}
Serviço: ${data.service}
Data preferida: ${data.date}
Observações: ${data.notes}

Timestamp: ${data.timestamp}
IP: ${data.ip}
User Agent: ${data.userAgent}
  `;

  console.log('Email notification content:', emailContent);
}
