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
}

export async function POST(request: NextRequest) {
  try {
    const data: VIPClickData = await request.json();

    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    if (!webhookUrl) {
      throw new Error('N8N_WEBHOOK_URL not configured');
    }

    const ip = request.headers.get('x-forwarded-for') || 
                request.headers.get('x-real-ip') || 
                'unknown';

    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event: 'vip_button_click',
        data: {
          ...data,
          ip,
          timestamp: new Date().toISOString(),
        },
      }),
    });

    if (!webhookResponse.ok) {
      console.error('N8N webhook failed:', await webhookResponse.text());
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

    const adminEmails = process.env.ADMIN_EMAILS?.split(',') || [];
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

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: adminEmails,
      subject: `🔥 VIP Button Click - ${data.remainingSlots} slots left`,
      html: adminEmailContent,
    });

    if (data.userEmail) {
      const userEmailContent = generateUserEmail({
        email: data.userEmail,
        name: data.userName,
        remainingSlots: data.remainingSlots,
        bookingUrl: `${siteUrl}#agendamento`,
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: data.userEmail,
        subject: '🎉 Ваше эксклюзивное место в GOMANIC ждет вас!',
        html: userEmailContent,
      });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Data sent successfully' 
    });

  } catch (error) {
    console.error('VIP click tracking error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
