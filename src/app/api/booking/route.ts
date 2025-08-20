import { NextRequest, NextResponse } from 'next/server';
import { createBooking, createLead } from '@/utils/crm';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, service, date, notes, type } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Nome e telefone são obrigatórios' },
        { status: 400 }
      );
    }

    const bookingData = {
      name,
      phone,
      email,
      service: service || 'Manicure Gomanic',
      date,
      notes,
    };

    let result;
    if (type === 'booking' && date) {
      result = await createBooking(bookingData);
    } else {
      result = await createLead(bookingData);
    }

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'Agendamento realizado com sucesso!',
        data: result.data,
      });
    } else {
      console.error('Booking failed:', result.error);
      return NextResponse.json(
        { error: result.error || 'Erro interno do servidor' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('API booking error:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}