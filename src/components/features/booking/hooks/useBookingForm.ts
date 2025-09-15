import { useState } from 'react';
import { trackFormSubmission } from '@/utils/analytics';
import { services } from '../components/bookingData';

export interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
}

export interface MasterData {
  contacts?: {
    whatsapp?: string;
  };
}

export function useBookingForm(masterData?: MasterData | null) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const updateField = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

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

  return {
    formData,
    isSubmitting,
    isSubmitted,
    error,
    updateField,
    handleSubmit
  };
}
