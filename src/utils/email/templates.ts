export interface UserEmailData {
  email: string;
  name?: string;
  remainingSlots: number;
  bookingUrl: string;
}

export interface BookingConfirmationData {
  email: string;
  name: string;
  phone: string;
}

export function generateBookingConfirmation(data: BookingConfirmationData): string {
  const { name, phone } = data;
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ваша заявка принята - GOMANIC</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #FEFEFE;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #FEFEFE;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #FFFFFF; border-radius: 16px; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">
          
          <tr>
            <td style="padding: 40px; text-align: center; background: linear-gradient(135deg, #444f55 0%, #3b3b39 100%); border-radius: 16px 16px 0 0;">
              <h1 style="margin: 0; color: #FEFEFE; font-size: 32px; font-weight: 700; letter-spacing: 0.5px;">
                GOMANIC
              </h1>
              <p style="margin: 10px 0 0 0; color: #FEFEFE; font-size: 14px; opacity: 0.9;">
                Эксклюзивный маникюр премиум-класса
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 20px 0; color: #444f55; font-size: 24px; font-weight: 600;">
                ${name}, спасибо за заявку! ✨
              </h2>
              
              <p style="margin: 0 0 20px 0; color: #3b3b39; font-size: 16px; line-height: 1.6;">
                Ваша заявка успешно принята. Через несколько секунд вы будете перенаправлены на страницу онлайн-записи к мастеру.
              </p>

              <div style="background-color: #FEFEFE; border: 2px solid #444f55; border-radius: 12px; padding: 20px; margin: 30px 0;">
                <h3 style="margin: 0 0 15px 0; color: #444f55; font-size: 18px;">
                  📋 Детали вашей заявки:
                </h3>
                <table style="width: 100%;">
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: 600;">Имя:</td>
                    <td style="padding: 8px 0; color: #333;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: 600;">Телефон:</td>
                    <td style="padding: 8px 0; color: #333;">${phone}</td>
                  </tr>
                </table>
              </div>

              <div style="background: linear-gradient(135deg, #444f55 0%, #3b3b39 100%); padding: 20px; border-radius: 12px; margin: 30px 0; text-align: center;">
                <p style="margin: 0; color: #FEFEFE; font-size: 16px; font-weight: 600;">
                  📅 Через несколько секунд откроется страница онлайн-записи!
                </p>
              </div>

              <p style="margin: 20px 0 0 0; color: #666; font-size: 14px; line-height: 1.6;">
                Если у вас есть вопросы, просто ответьте на это письмо или свяжитесь с мастером на странице записи.
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding: 30px; text-align: center; background-color: #FEFEFE; border-radius: 0 0 16px 16px; border-top: 1px solid #f0f0f0;">
              <p style="margin: 0 0 10px 0; color: #999; font-size: 13px;">
                © ${new Date().getFullYear()} GOMANIC. Все права защищены.
              </p>
              <p style="margin: 0; color: #999; font-size: 12px;">
                São Paulo, Brazil
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export function generateUserEmail(data: UserEmailData): string {
  const { name, remainingSlots, bookingUrl } = data;
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ваше эксклюзивное предложение от GOMANIC</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #FEFEFE;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #FEFEFE;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #FFFFFF; border-radius: 16px; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">
          
          <tr>
            <td style="padding: 40px; text-align: center; background: linear-gradient(135deg, #444f55 0%, #3b3b39 100%); border-radius: 16px 16px 0 0;">
              <h1 style="margin: 0; color: #FEFEFE; font-size: 32px; font-weight: 700; letter-spacing: 0.5px;">
                GOMANIC
              </h1>
              <p style="margin: 10px 0 0 0; color: #FEFEFE; font-size: 14px; opacity: 0.9;">
                Эксклюзивный маникюр премиум-класса
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 20px 0; color: #444f55; font-size: 24px; font-weight: 600;">
                ${name ? `${name}, п` : 'П'}оздравляем! 🎉
              </h2>
              
              <p style="margin: 0 0 20px 0; color: #3b3b39; font-size: 16px; line-height: 1.6;">
                Вы проявили интерес к нашему эксклюзивному предложению!
              </p>

              <div style="background: linear-gradient(135deg, #444f55 0%, #3b3b39 100%); padding: 24px; border-radius: 12px; margin: 30px 0;">
                <p style="margin: 0 0 8px 0; color: #FEFEFE; font-size: 14px; opacity: 0.9; text-transform: uppercase; letter-spacing: 1px;">
                  Осталось мест по акции
                </p>
                <p style="margin: 0; color: #FEFEFE; font-size: 48px; font-weight: 700;">
                  ${remainingSlots}
                </p>
              </div>

              <p style="margin: 20px 0; color: #3b3b39; font-size: 16px; line-height: 1.6;">
                Не упустите возможность забронировать место по специальной цене!
              </p>

              <div style="text-align: center; margin: 30px 0;">
                <a href="${bookingUrl}" 
                   style="display: inline-block; padding: 18px 48px; background: #444f55; color: #FEFEFE; text-decoration: none; border-radius: 12px; font-size: 16px; font-weight: 600; letter-spacing: 0.5px; box-shadow: 0 4px 12px rgba(68,79,85,0.3);">
                  ЗАБРОНИРОВАТЬ СЕЙЧАС
                </a>
              </div>

              <div style="margin: 30px 0; padding: 20px; background-color: #FEFEFE; border-left: 4px solid #444f55; border-radius: 4px;">
                <h3 style="margin: 0 0 12px 0; color: #444f55; font-size: 18px;">
                  Что вас ждет:
                </h3>
                <ul style="margin: 0; padding-left: 20px; color: #3b3b39; font-size: 15px; line-height: 1.8;">
                  <li>Премиальные материалы высшего качества</li>
                  <li>Индивидуальный подход к каждому клиенту</li>
                  <li>Стерильные одноразовые инструменты</li>
                  <li>Гарантия результата до 4 недель</li>
                  <li>Уютная атмосфера и кофе в подарок</li>
                </ul>
              </div>

              <p style="margin: 20px 0 0 0; color: #666; font-size: 14px; line-height: 1.6;">
                Если у вас есть вопросы, просто ответьте на это письмо.
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding: 30px; text-align: center; background-color: #FEFEFE; border-radius: 0 0 16px 16px; border-top: 1px solid #f0f0f0;">
              <p style="margin: 0 0 10px 0; color: #999; font-size: 13px;">
                © ${new Date().getFullYear()} GOMANIC. Все права защищены.
              </p>
              <p style="margin: 0; color: #999; font-size: 12px;">
                São Paulo, Brazil
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export function generateAdminNotification(data: {
  timestamp: string;
  userAgent: string;
  referrer: string;
  remainingSlots: number;
  sessionId?: string;
  ip: string;
  userEmail?: string;
}): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>VIP Button Click Alert</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
    <h2 style="color: #444f55; border-bottom: 3px solid #444f55; padding-bottom: 10px;">
      🎯 VIP Button Click Alert
    </h2>
    
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0; background: white;">
      <tr style="background-color: #444f55; color: white;">
        <th style="padding: 12px; text-align: left;">Параметр</th>
        <th style="padding: 12px; text-align: left;">Значение</th>
      </tr>
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Timestamp</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;">${new Date(data.timestamp).toLocaleString('ru-RU')}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Remaining Slots</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid #ddd; color: ${data.remainingSlots <= 3 ? '#ff4444' : '#444f55'}; font-weight: bold; font-size: 18px;">${data.remainingSlots}</td>
      </tr>
      ${data.userEmail ? `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>User Email</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.userEmail}</td>
      </tr>
      ` : ''}
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>IP Address</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.ip}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>User Agent</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid #ddd; font-size: 12px;">${data.userAgent}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Referrer</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.referrer || 'Direct'}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Session ID</strong></td>
        <td style="padding: 10px; border-bottom: 1px solid #ddd; font-family: monospace; font-size: 11px;">${data.sessionId || 'N/A'}</td>
      </tr>
    </table>

    ${data.remainingSlots <= 3 ? `
    <div style="background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0;">
      <strong>⚠️ ВНИМАНИЕ:</strong> Остались последние места!
    </div>
    ` : ''}
  </div>
</body>
</html>
  `.trim();
}
