import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, service } = body;

    if (!name || !phone || !email || !service) {
      return NextResponse.json(
        { error: 'Имя, телефон, email и услуга обязательны' },
        { status: 400 }
      );
    }

    console.log('Booking submission:', { name, phone, email, service, timestamp: new Date().toISOString() });

    return NextResponse.json({
      success: true,
      message: 'Данные успешно отправлены! Сейчас вас перенаправит в WhatsApp.',
    });
  } catch (error) {
    console.error('API submission error:', error);
    return NextResponse.json(
      { error: 'Ошибка сервера' },
      { status: 500 }
    );
  }
}
