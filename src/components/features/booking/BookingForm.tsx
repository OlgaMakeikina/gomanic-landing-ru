'use client';

import { useBookingForm } from './hooks/useBookingForm';
import { 
  FormInput, 
  ServiceSelector, 
  SuccessMessage, 
  SubmitButton, 
  ErrorMessage, 
  PrivacyCheckbox,
  GLASS_STYLES 
} from './components';

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
  const {
    formData,
    isSubmitting,
    isSubmitted,
    error,
    fieldErrors,
    updateField,
    validateField,
    handleSubmit
  } = useBookingForm(masterData);

  if (isSubmitted) {
    return <SuccessMessage />;
  }

  return (
    <div 
      className={`relative backdrop-blur-xl rounded-2xl border overflow-hidden ${className}`}
      style={{ 
        background: GLASS_STYLES.cardBg, 
        borderColor: GLASS_STYLES.cardBorder, 
        boxShadow: GLASS_STYLES.cardShadow 
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/2 to-transparent rounded-2xl" />
      <div className="absolute inset-0 bg-gradient-to-tl from-black/30 via-transparent to-black/15 rounded-2xl" />
      
      <div className="relative z-10 p-8">
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <FormInput
              label="ИМЯ"
              type="text"
              value={formData.name}
              onChange={(value) => updateField('name', value)}
              onBlur={() => validateField('name', formData.name)}
              placeholder="Ваше полное имя"
              required
              error={fieldErrors.name}
            />
            
            <FormInput
              label="ТЕЛЕФОН"
              type="tel"
              value={formData.phone}
              onChange={(value) => updateField('phone', value)}
              onBlur={() => validateField('phone', formData.phone)}
              placeholder="+79991234567"
              required
              error={fieldErrors.phone}
            />
            
            <FormInput
              label="EMAIL"
              type="email"
              value={formData.email}
              onChange={(value) => updateField('email', value)}
              onBlur={() => validateField('email', formData.email)}
              placeholder="mail@email.com"
              required
              error={fieldErrors.email}
            />

            <ServiceSelector
              selectedService={formData.service}
              onServiceChange={(serviceId) => updateField('service', serviceId)}
              error={fieldErrors.service}
            />

            <PrivacyCheckbox
              checked={formData.privacyConsent}
              onChange={(checked) => updateField('privacyConsent', checked)}
              error={fieldErrors.privacyConsent}
            />

            <ErrorMessage error={error} />

            <SubmitButton isSubmitting={isSubmitting} />
          </div>
        </form>
      </div>
    </div>
  );
}
