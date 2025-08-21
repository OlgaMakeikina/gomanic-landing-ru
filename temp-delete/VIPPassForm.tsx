'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { trackFormSubmission } from '@/utils/analytics';

interface VIPPassFormData {
  name: string;
  email: string;
  phone: string;
  serviceCategory: 'premium' | 'deluxe' | 'exclusive';
}

interface VIPPassResult {
  passCode: string;
  bookingUrl: string;
  expiryDate: string;
  message: string;
}

const VIP_PACKAGES = {
  premium: {
    name: 'Premium VIP',
    price: 'R$ 150',
    services: ['Manicure Premium', 'Pedicure', 'Nail Art Básico'],
    duration: '2h',
    color: 'from-amber-400 to-amber-600'
  },
  deluxe: {
    name: 'Deluxe VIP',
    price: 'R$ 250', 
    services: ['Manicure Deluxe', 'Pedicure', 'Nail Art Premium', 'Hidratação'],
    duration: '3h',
    color: 'from-purple-500 to-purple-700'
  },
  exclusive: {
    name: 'Exclusive VIP',
    price: 'R$ 400',
    services: ['Full Gomanic Experience', 'Design Exclusivo', 'Produtos Premium'],
    duration: '4h',
    color: 'from-rose-500 to-rose-700'
  }
};

export default function VIPPassForm() {
  const [selectedPackage, setSelectedPackage] = useState<keyof typeof VIP_PACKAGES>('deluxe');
  const [result, setResult] = useState<VIPPassResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const { register, handleSubmit, formState: { errors } } = useForm<VIPPassFormData>();

  const onSubmit = async (data: VIPPassFormData) => {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/vip-pass/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          serviceCategory: selectedPackage
        })
      });

      const responseData = await response.json();

      if (!responseData.success) {
        throw new Error(responseData.error || 'Erro ao criar VIP Pass');
      }

      setResult(responseData.data);
      trackFormSubmission('vip_pass_completed');

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setIsLoading(false);
    }
  };  if (result) {
    return (
      <div className="bg-[#FEFEFE] p-8 rounded-lg border border-[#444f55]/10">
        <div className="text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-horizon text-[#444f55] mb-2">VIP Pass Criado!</h3>
            <p className="text-[#444f55]/70 mb-6">{result.message}</p>
          </div>

          <div className="bg-gradient-to-r from-[#444f55] to-[#3a424a] text-white p-6 rounded-lg mb-6">
            <p className="text-sm opacity-90 mb-2">Seu código VIP:</p>
            <p className="text-2xl font-mono font-bold tracking-wider">{result.passCode}</p>
            <p className="text-sm opacity-90 mt-2">Válido até: {new Date(result.expiryDate).toLocaleDateString('pt-BR')}</p>
          </div>

          <div className="space-y-4">
            <a
              href={result.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#444f55] text-white py-3 px-6 rounded-lg hover:bg-[#3a424a] transition-colors font-garet font-medium"
            >
              Agendar Agora no Fresha
            </a>
            
            <button
              onClick={() => navigator.clipboard.writeText(result.passCode)}
              className="w-full border border-[#444f55] text-[#444f55] py-3 px-6 rounded-lg hover:bg-[#444f55]/5 transition-colors font-garet"
            >
              Copiar Código VIP
            </button>
          </div>

          <p className="text-xs text-[#444f55]/60 mt-6">
            Guarde seu código VIP com segurança. Você receberá também por email.
          </p>
        </div>
      </div>
    );
  } text-white py-4 px-6 rounded-lg hover:bg-[#3a424a] transition-colors font-garet font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Criando VIP Pass...' : `Comprar ${VIP_PACKAGES[selectedPackage].name} - ${VIP_PACKAGES[selectedPackage].price}`}
          </button>

          <p className="text-xs text-[#444f55]/60 text-center">
            ✨ VIP Pass válido por 90 dias • Uso único • Agendamento direto no Fresha
          </p>
        </form>
      </div>
    </div>
  );
}