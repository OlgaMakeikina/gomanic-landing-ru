import { NextRequest, NextResponse } from 'next/server';
import { submitToN8N } from '@/utils/n8n';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, service } = body;

    if (!name || !phone || !email || !service) {
      return NextResponse.json(
        { error: 'Nome, telefone, email e serviço são obrigatórios' },
        { status: 400 }
      );
    }

    const submissionData = {
      name,
      phone,
      email,
      service,
    };

    const result = await submitToN8N(submissionData);

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'Dados enviados com sucesso! Você receberá um email em breve.',
        data: result.data,
      });
    } else {
      console.error('N8N submission failed:', result.error);
      return NextResponse.json(
        { error: result.error || 'Erro ao enviar dados' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('API submission error:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}