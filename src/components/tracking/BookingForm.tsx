'use client';

import { useState } from 'react';
import { trackFormSubmission } from '@/utils/analytics';

interface BookingFormProps {
  className?: string;
  variant?: 'default' | 'compact';
}

export default function BookingForm({ className = '', variant = 'default' }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      trackFormSubmission('booking_form');
      
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'booking' }),
      });

      const result = await response.json();      if (result.success) {
        setIsSubmitted(true);
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'conversion', {
            send_to: 'AW-XXXXXXXXX/XXXXXXXXXXXXX',
          });
        }
      } else {
        setError(result.error || 'Erro ao enviar formulário');
      }
    } catch (err) {
      setError('Erro de conexão. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`bg-white rounded-lg p-6 text-center ${className}`}>
        <div className="text-green-600 text-lg font-semibold mb-2">
          ✅ Dados Enviados com Sucesso!
        </div>
        <p className="text-gray-600">
          Obrigado! Você receberá um email com os links de agendamento em breve.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`bg-white rounded-lg p-6 ${className}`}>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nome *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#444e55] focus:border-transparent"
            placeholder="Seu nome completo"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            WhatsApp *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#444e55] focus:border-transparent"
            placeholder="(11) 99999-9999"
          />
        </div>        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#444e55] focus:border-transparent"
            placeholder="seu@email.com"
          />
        </div>

        {error && (
          <div className="text-red-600 text-sm bg-red-50 p-2 rounded">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#3B3B3A] text-white py-3 px-6 rounded-md hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Dados'}
        </button>
      </div>
    </form>
  );
}