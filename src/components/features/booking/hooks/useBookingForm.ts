import { useState } from 'react';
import { trackFormSubmission } from '@/utils/analytics';
import { validateAllFields, validateName, validatePhone, validateEmail, ValidationResult } from '../utils/validation';
import { formatPhoneNumber, formatName, normalizeEmail } from '../utils/formatting';

export interface FormData {
  name: string;
  phone: string;
  email: string;
  privacyConsent: boolean;
}

export interface MasterData {
  bookingUrl?: string;
  contacts?: {
    whatsapp?: string;
  };
}

export function useBookingForm(masterData?: MasterData | null) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    privacyConsent: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const updateField = (field: keyof FormData, value: string | boolean) => {
    let formattedValue = value;
    
    if (typeof value === 'string') {
      switch (field) {
        case 'phone':
          formattedValue = formatPhoneNumber(value);
          break;
        case 'name':
          formattedValue = formatName(value);
          break;
        case 'email':
          formattedValue = normalizeEmail(value);
          break;
      }
    }
    
    setFormData(prev => ({ ...prev, [field]: formattedValue }));
    
    if (fieldErrors[field]) {
      setFieldErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateField = (field: keyof FormData, value: string) => {
    let validation: ValidationResult;
    switch (field) {
      case 'name':
        validation = validateName(value);
        break;
      case 'phone':
        validation = validatePhone(value);
        break;
      case 'email':
        validation = validateEmail(value);
        break;
      default:
        return;
    }
    
    if (!validation.isValid) {
      setFieldErrors(prev => ({ ...prev, [field]: validation.error! }));
    } else {
      setFieldErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setFieldErrors({});

    const validation = validateAllFields(formData);
    if (!validation.isValid) {
      setFieldErrors(validation.errors);
      setError('Пожалуйста, исправьте ошибки в форме');
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
          const bookingUrl = masterData?.bookingUrl || 'https://dikidi.net/1899279?p=3.pi-po-sm-ssm-si&o=1&m=4107990&s=20568416';
          window.location.href = bookingUrl;
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
    fieldErrors,
    updateField,
    validateField,
    handleSubmit
  };
}
