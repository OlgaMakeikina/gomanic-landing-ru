import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface DikidiClickData {
  buttonText: string;
  buttonLocation: string;
  timestamp: string;
  userAgent: string;
  referrer: string;
  sessionId?: string;
}

function generateDikidiNotification(data: DikidiClickData & { ip: string }): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>🎯 Переход на Дикиди - GOMANIC</title>
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8f9fa; margin: 0; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.1);">
    
    <div style="background: linear-gradient(135deg, #444f55 0%, #3a424a 100%); padding: 30px; text-align: center;">
      <h1 style="margin: 0; color: white; font-size: 24px; font-weight: 700;">🎯 Новый переход на Дикиди!</h1>
    </div>
    
    <div style="padding: 30px;">
      <div style="background: #f8f9fa; border-left: 4px solid #444f55; padding: 20px; margin-bottom: 20px; border-radius: 4px;">
        <h3 style="margin: 0 0 10px 0; color: #444f55; font-size: 18px;">Детали перехода:</h3>
        <p style="margin: 0; color: #666; font-size: 14px;">
          <strong>Кнопка:</strong> "${data.buttonText}"<br>
          <strong>Расположение:</strong> ${data.buttonLocation}<br>
          <strong>Время:</strong> ${new Date(data.timestamp).toLocaleString('ru-RU')}
        </p>
      </div>

      <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px;">
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: 600;">IP адрес</td>
          <td style="padding: 12px; border: 1px solid #dee2e6;">${data.ip}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: 600;">Браузер</td>
          <td style="padding: 12px; border: 1px solid #dee2e6; font-size: 12px;">${data.userAgent}</td>
        </tr>
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: 600;">Источник</td>
          <td style="padding: 12px; border: 1px solid #dee2e6;">${data.referrer || 'Прямой переход'}</td>
        </tr>
        ${data.sessionId ? `
        <tr>
          <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: 600;">Session ID</td>
          <td style="padding: 12px; border: 1px solid #dee2e6; font-family: monospace; font-size: 11px;">${data.sessionId}</td>
        </tr>
        ` : ''}
      </table>

      <div style="background: linear-gradient(135deg, #28a745 0%, #20c997 100%); color: white; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
        <p style="margin: 0; font-size: 16px; font-weight: 600;">
          ✅ Пользователь успешно перешел на страницу записи в Дикиди!
        </p>
      </div>

      <p style="color: #6c757d; font-size: 13px; text-align: center; margin: 20px 0 0 0;">
        📧 Уведомление отправлено автоматически системой GOMANIC Landing
      </p>
    </div>
    
  </div>
</body>
</html>
  `.trim();
}

export async function POST(request: NextRequest) {
  console.log('=== Dikidi Click API Called ===');
  
  try {
    const data: DikidiClickData = await request.json();
    console.log('Dikidi click data:', JSON.stringify(data, null, 2));

    const ip = request.headers.get('x-forwarded-for') || 
                request.headers.get('x-real-ip') || 
                'unknown';

    // Отправляем в Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'dikidi_click', {
        event_category: 'booking',
        event_label: data.buttonText,
        custom_map: {
          'custom_dimension_1': data.buttonLocation,
          'custom_dimension_2': ip
        }
      });
    }

    // Настройка SMTP для отправки email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    
    console.log('SMTP configured for dikidi notification');

    // Email уведомление администратору
    const adminEmailContent = generateDikidiNotification({
      ...data,
      ip
    });

    console.log('Sending dikidi notification to admin...');
    const emailResult = await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: '1111barlet@gmail.com',
      subject: `🎯 Переход на Дикиди: "${data.buttonText}" - ${new Date().toLocaleString('ru-RU')}`,
      html: adminEmailContent,
    });
    
    console.log('Dikidi notification email sent:', emailResult.messageId);

    // Отправляем в N8N webhook если настроен
    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    if (webhookUrl) {
      const webhookPayload = {
        event: 'dikidi_click',
        data: {
          ...data,
          ip,
          timestamp: new Date().toISOString(),
        },
      };
      
      const webhookResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(webhookPayload),
      });

      console.log('N8N webhook response:', webhookResponse.status);
    }

    console.log('=== Dikidi Click API Success ===');
    return NextResponse.json({ 
      success: true, 
      message: 'Dikidi click tracked successfully' 
    });

  } catch (error) {
    console.error('=== Dikidi Click API Error ===');
    console.error('Error details:', error);
    
    return NextResponse.json(
      { success: false, error: 'Failed to track dikidi click' },
      { status: 500 }
    );
  }
}
