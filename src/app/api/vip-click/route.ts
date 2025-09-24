import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { generateAdminNotification, generateUserEmail } from '@/utils/email/templates';

interface VIPClickData {
  timestamp: string;
  userAgent: string;
  referrer: string;
  remainingSlots: number;
  sessionId?: string;
  userEmail?: string;
  userName?: string;
  userPhone?: string;
}

export async function POST(request: NextRequest) {
  console.log('=== VIP Click API Called ===');
  
  try {
    const rawBody = await request.text();
    console.log('Raw request body:', rawBody);
    
    const data: VIPClickData = JSON.parse(rawBody);
    console.log('Parsed data:', JSON.stringify(data, null, 2));

    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    console.log('Webhook URL configured:', !!webhookUrl);
    
    if (!webhookUrl) {
      throw new Error('N8N_WEBHOOK_URL not configured');
    }

    const ip = request.headers.get('x-forwarded-for') || 
                request.headers.get('x-real-ip') || 
                'unknown';
    
    console.log('IP address:', ip);

    const webhookPayload = {
      event: 'vip_button_click',
      data: {
        ...data,
        ip,
        timestamp: new Date().toISOString(),
      },
    };
    
    console.log('Sending to webhook:', JSON.stringify(webhookPayload, null, 2));

    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookPayload),
    });

    console.log('Webhook response status:', webhookResponse.status);
    
    if (!webhookResponse.ok) {
      const errorText = await webhookResponse.text();
      console.error('N8N webhook failed:', errorText);
    } else {
      console.log('Webhook sent successfully');
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    
    console.log('SMTP configured:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      secure: process.env.SMTP_SECURE
    });

    const adminEmails = process.env.ADMIN_EMAILS?.split(',') || [];
    console.log('Admin emails:', adminEmails);
    
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gomanic.ru';

    const adminEmailContent = generateAdminNotification({
      timestamp: data.timestamp,
      userAgent: data.userAgent,
      referrer: data.referrer,
      remainingSlots: data.remainingSlots,
      sessionId: data.sessionId,
      ip,
      userEmail: data.userEmail,
    });

    console.log('Sending admin email...');
    const adminEmailResult = await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: adminEmails,
      subject: `🔥 VIP Button Click - ${data.remainingSlots} slots left`,
      html: adminEmailContent,
    });
    
    console.log('Admin email sent:', adminEmailResult.messageId);

    if (data.userEmail) {
      console.log('Sending user email to:', data.userEmail);
      
      const userEmailContent = generateUserEmail({
        email: data.userEmail,
        name: data.userName,
        remainingSlots: data.remainingSlots,
        bookingUrl: `${siteUrl}#agendamento`,
      });

      const userEmailResult = await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: data.userEmail,
        subject: '🎉 Ваше эксклюзивное место в GOMANIC ждет вас!',
        html: userEmailContent,
      });
      
      console.log('User email sent:', userEmailResult.messageId);
    }

    console.log('=== VIP Click API Success ===');
    return NextResponse.json({ 
      success: true, 
      message: 'Data sent successfully' 
    });

  } catch (error) {
    console.error('=== VIP Click API Error ===');
    console.error('Error details:', error);
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    
    return NextResponse.json(
      { success: false, error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
