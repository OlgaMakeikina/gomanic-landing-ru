import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { generateBookingConfirmation } from '@/utils/email/templates';

export async function POST(request: NextRequest) {
  console.log('=== Booking API Called ===');
  
  try {
    const body = await request.json();
    const { name, phone, email, service } = body;

    console.log('Booking data received:', { name, phone, email, service });

    if (!name || !phone || !email || !service) {
      return NextResponse.json(
        { error: 'Имя, телефон, email и услуга обязательны' },
        { status: 400 }
      );
    }

    console.log('Booking submission:', { 
      name, 
      phone, 
      email, 
      service, 
      timestamp: new Date().toISOString() 
    });

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gomanic.ru';

    try {
      console.log('Setting up SMTP transporter...');
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '465'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      console.log('Generating booking confirmation email...');
      const userEmailContent = generateBookingConfirmation({
        email,
        name,
        phone,
        service,
      });

      console.log('Sending confirmation email to user:', email);
      const emailResult = await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: email,
        subject: '✅ Ваша заявка принята - GOMANIC',
        html: userEmailContent,
      });

      console.log('Email sent successfully:', emailResult.messageId);
      
      const adminEmails = process.env.ADMIN_EMAILS?.split(',') || [];
      if (adminEmails.length > 0) {
        console.log('Sending notification to admins:', adminEmails);
        
        const adminEmailContent = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>New Booking</title></head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
    <h2 style="color: #444f55; border-bottom: 3px solid #444f55; padding-bottom: 10px;">
      📋 Новая заявка на бронирование
    </h2>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0; background: white;">
      <tr style="background-color: #444f55; color: white;">
        <th style="padding: 12px; text-align: left;">Поле</th>
        <th style="padding: 12px; text-align: left;">Значение</th>
      </tr>
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Имя</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Телефон</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;">${phone}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Email</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;">${email}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Услуга</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;">${service}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Время</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;">${new Date().toLocaleString('ru-RU')}</td>
      </tr>
    </table>
  </div>
</body>
</html>
        `.trim();
        
        const adminEmailResult = await transporter.sendMail({
          from: process.env.SMTP_FROM,
          to: adminEmails,
          subject: `📋 Новая заявка от ${name}`,
          html: adminEmailContent,
        });
        
        console.log('Admin email sent successfully:', adminEmailResult.messageId);
      }
    } catch (emailError) {
      console.error('Email sending failed (non-critical):', emailError);
    }

    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        console.log('Sending booking data to N8N webhook...');
        const webhookResponse = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            event: 'booking_submission',
            data: {
              name,
              phone,
              email,
              service,
              timestamp: new Date().toISOString(),
              ip: request.headers.get('x-forwarded-for') || 
                  request.headers.get('x-real-ip') || 
                  'unknown',
            },
          }),
        });

        console.log('Webhook response status:', webhookResponse.status);
        
        if (!webhookResponse.ok) {
          console.error('N8N webhook failed:', await webhookResponse.text());
        } else {
          console.log('Webhook sent successfully');
        }
      } catch (webhookError) {
        console.error('Webhook sending failed (non-critical):', webhookError);
      }
    }

    console.log('=== Booking API Success ===');
    return NextResponse.json({
      success: true,
      message: 'Данные успешно отправлены! Сейчас вас перенаправит в WhatsApp.',
    });
    
  } catch (error) {
    console.error('=== Booking API Error ===');
    console.error('Error details:', error);
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    
    return NextResponse.json(
      { error: 'Ошибка сервера' },
      { status: 500 }
    );
  }
}
