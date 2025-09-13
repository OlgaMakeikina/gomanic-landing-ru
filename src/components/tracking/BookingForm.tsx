'use client';

import { useState } from 'react';
import { trackFormSubmission } from '@/utils/analytics';

interface BookingFormProps {
  className?: string;
  variant?: 'default' | 'compact';
  masterData?: {
    contacts?: {
      whatsapp?: string;
    };
  } | null;
}

export default function BookingForm({ className = '', variant = 'default', masterData }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // GLASS стили - темно-серый цвет проекта
  const GLASS = {
    cardBg: 'rgba(59, 59, 57, 0.85)',
    cardBorder: 'rgba(255, 255, 255, 0.2)',
    cardShadow: '0 32px 64px rgba(0,0,0,0.7)',
  };

  // Список услуг
  const services = [
    {
      id: 'gel-manicure',
      name: 'Гель-лак + снятие + маникюр',
      price: '999 ₽'
    },
    {
      id: 'gel-architecture',
      name: 'Гель-лак + архитектура гелем + маникюр + снятие',
      price: '1299 ₽'
    },
    {
      id: 'nail-extension',
      name: 'Наращивание ногтей + маникюр + снятие лака',
      price: '1799 ₽'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Валидация выбора услуги
    if (!formData.service) {
      setError('Пожалуйста, выберите вариант услуги');
      setIsSubmitting(false);
      return;
    }

    try {
      trackFormSubmission('booking_form');
      
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'booking' }),
      });

      const result = await response.json();
      
      if (result.success) {
        setIsSubmitted(true);
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'conversion', {
            send_to: 'AW-XXXXXXXXX/XXXXXXXXXXXXX',
          });
        }
        
        // Редирект на WhatsApp мастера через 2 секунды
        setTimeout(() => {
          const selectedService = services.find(s => s.id === formData.service);
          const message = encodeURIComponent(
            `Привет! Я заполнил(а) форму на сайте и хочу записаться на процедуру:\n\n` +
            `📝 Имя: ${formData.name}\n` +
            `📞 Телефон: ${formData.phone}\n` +
            `📧 Email: ${formData.email}\n` +
            `💅 Услуга: ${selectedService?.name} (${selectedService?.price})\n\n` +
            `Когда можно записаться?`
          );
          
          const masterWhatsApp = masterData?.contacts?.whatsapp || '+79221526716';
          const phoneNumber = masterWhatsApp.replace(/[^0-9]/g, '');
          window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        }, 2000);
      } else {
        setError(result.error || 'Ошибка отправки формы');
      }
    } catch (err) {
      setError('Ошибка соединения. Попробуйте снова.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div 
        className={`relative backdrop-blur-xl rounded-2xl border overflow-hidden text-center ${className}`}
        style={{ 
          background: GLASS.cardBg, 
          borderColor: GLASS.cardBorder, 
          boxShadow: GLASS.cardShadow 
        }}
      >
        {/* Градиентные слои для стеклянного эффекта */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/2 to-transparent rounded-2xl" />
        <div className="absolute inset-0 bg-gradient-to-tl from-black/30 via-transparent to-black/15 rounded-2xl" />
        
        <div className="relative z-10 p-8">
          <div className="text-green-400 mb-4" style={{
            fontFamily: 'Garet, sans-serif', 
            fontSize: 14,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            fontWeight: 600
          }}>
            ✅ ДАННЫЕ УСПЕШНО ОТПРАВЛЕНЫ!
          </div>
          <p style={{
            color: '#FEFEFE',
            fontFamily: 'Garet, sans-serif',
            fontSize: 16,
            opacity: 0.9,
            lineHeight: 1.6
          }}>
            Спасибо! Сейчас вас перенаправит в WhatsApp мастера для записи на процедуру.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`relative backdrop-blur-xl rounded-2xl border overflow-hidden ${className}`}
      style={{ 
        background: GLASS.cardBg, 
        borderColor: GLASS.cardBorder, 
        boxShadow: GLASS.cardShadow 
      }}
    >
      {/* Градиентные слои для стеклянного эффекта */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/2 to-transparent rounded-2xl" />
      <div className="absolute inset-0 bg-gradient-to-tl from-black/30 via-transparent to-black/15 rounded-2xl" />
      
      <div className="relative z-10 p-8">
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label className="block mb-3" style={{
                color: '#FEFEFE',
                fontFamily: 'Manrope, sans-serif',
                fontSize: 14,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                opacity: 0.85
              }}>
                ИМЯ *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="glass-input w-full px-4 py-3 rounded-xl border backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-white/40"
                placeholder="Ваше полное имя"
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  color: '#FEFEFE',
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 16
                }}
              />
            </div>
            
            <div>
              <label className="block mb-3" style={{
                color: '#FEFEFE',
                fontFamily: 'Manrope, sans-serif',
                fontSize: 14,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                opacity: 0.85
              }}>
                ТЕЛЕФОН *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="glass-input w-full px-4 py-3 rounded-xl border backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-white/40"
                placeholder="+79991234567"
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  color: '#FEFEFE',
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 16
                }}
              />
            </div>

            <div>
              <label className="block mb-3" style={{
                color: '#FEFEFE',
                fontFamily: 'Manrope, sans-serif',
                fontSize: 14,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                opacity: 0.85
              }}>
                EMAIL *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="glass-input w-full px-4 py-3 rounded-xl border backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-white/40"
                placeholder="mail@email.com"
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  color: '#FEFEFE',
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 16
                }}
              />
            </div>

            <div>
              <label className="block mb-3" style={{
                color: '#FEFEFE',
                fontFamily: 'Manrope, sans-serif',
                fontSize: 14,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                opacity: 0.85
              }}>
                ВЫБЕРИТЕ ВАШ ВАРИАНТ *
              </label>
              <div className="space-y-3">
                {services.map((service) => (
                  <div 
                    key={service.id}
                    className={`backdrop-blur-sm rounded-xl p-4 border cursor-pointer transition-all ${
                      formData.service === service.id 
                        ? 'border-white/60' 
                        : 'border-white/20 hover:border-white/40'
                    }`}
                    style={{
                      background: formData.service === service.id 
                        ? 'rgba(255, 255, 255, 0.25)' 
                        : 'rgba(255, 255, 255, 0.1)',
                      minHeight: '60px'
                    }}
                    onClick={() => setFormData({ ...formData, service: service.id })}
                  >
                    <div className="flex items-start space-x-3">
                      <input
                        type="radio"
                        name="service"
                        value={service.id}
                        checked={formData.service === service.id}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="mt-1 text-white focus:ring-white/40"
                        style={{ accentColor: '#FEFEFE' }}
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-center gap-4">
                          <h4 style={{
                            color: '#FEFEFE',
                            fontFamily: 'Manrope, sans-serif',
                            fontSize: 11,
                            fontWeight: 600,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            lineHeight: 1.2,
                            flex: '1',
                            paddingRight: '8px'
                          }}>
                            {service.name}
                          </h4>
                          <span style={{
                            color: '#FEFEFE',
                            fontFamily: 'DrukWideCyr-Super, sans-serif',
                            fontSize: 14,
                            fontWeight: 500,
                            letterSpacing: '0.03em',
                            flexShrink: 0,
                            whiteSpace: 'nowrap'
                          }}>
                            {service.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {error && (
              <div 
                className="backdrop-blur-sm rounded-xl p-3 border"
                style={{
                  background: 'rgba(239, 68, 68, 0.15)',
                  borderColor: 'rgba(239, 68, 68, 0.3)',
                  color: '#FEF2F2',
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 14
                }}
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl border backdrop-blur-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: 'linear-gradient(135deg, rgba(68,79,85,0.95) 0%, rgba(59,59,58,0.95) 100%)',
                borderColor: '#FEFEFE',
                color: '#FEFEFE',
                fontFamily: 'Manrope, sans-serif',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: '16px 48px'
              }}
            >
              {isSubmitting ? 'ОТПРАВЛЯЕМ...' : 'ОТПРАВИТЬ ДАННЫЕ'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
