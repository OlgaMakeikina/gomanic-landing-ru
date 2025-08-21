'use client';

import { useState } from 'react';

interface PassValidation {
  isValid: boolean;
  isUsed: boolean;
  isExpired: boolean;
  remainingBalance?: number;
  serviceDetails?: {
    name: string;
    value: number;
    category: string;
  };
}

export default function VIPPassValidator() {
  const [passCode, setPassCode] = useState('');
  const [validation, setValidation] = useState<PassValidation | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const validatePass = async () => {
    if (!passCode.trim()) {
      setError('Digite o código do VIP Pass');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(`/api/vip-pass/validate?code=${encodeURIComponent(passCode)}`);
      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Erro ao validar');
      }

      setValidation(data.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
      setValidation(null);
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusColor = () => {
    if (!validation) return '';
    if (validation.isExpired) return 'text-red-600 bg-red-50 border-red-200';
    if (validation.isUsed) return 'text-orange-600 bg-orange-50 border-orange-200';
    if (validation.isValid) return 'text-green-600 bg-green-50 border-green-200';
    return 'text-gray-600 bg-gray-50 border-gray-200';
  };

  const getStatusText = () => {
    if (!validation) return '';
    if (validation.isExpired) return 'VIP Pass Expirado';
    if (validation.isUsed) return 'VIP Pass Já Utilizado';
    if (validation.isValid) return 'VIP Pass Válido';
    return 'VIP Pass Inválido';
  };

  return (
    <div className="bg-[#FEFEFE] border border-[#444f55]/10 rounded-lg p-6">
      <h3 className="text-xl font-horizon text-[#444f55] mb-4">Validar VIP Pass</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[#444f55] mb-2">
            Código do VIP Pass
          </label>
          <div className="flex gap-3">
            <input
              type="text"
              value={passCode}
              onChange={(e) => setPassCode(e.target.value.toUpperCase())}
              className="flex-1 px-4 py-3 border border-[#444f55]/20 rounded-lg focus:border-[#444f55] focus:outline-none font-mono"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              maxLength={19}
            />
            <button
              onClick={validatePass}
              disabled={isLoading || !passCode.trim()}
              className="px-6 py-3 bg-[#444f55] text-white rounded-lg hover:bg-[#3a424a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Validando...' : 'Validar'}
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        {validation && (
          <div className={`border rounded-lg p-4 ${getStatusColor()}`}>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium">{getStatusText()}</h4>
              <div className="flex items-center">
                {validation.isValid ? (
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
            </div>

            {validation.serviceDetails && (
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">Serviço:</span> {validation.serviceDetails.name}</p>
                <p><span className="font-medium">Valor:</span> R$ {validation.serviceDetails.value}</p>
                <p><span className="font-medium">Categoria:</span> {validation.serviceDetails.category.toUpperCase()}</p>
                {validation.remainingBalance !== undefined && (
                  <p><span className="font-medium">Saldo:</span> R$ {validation.remainingBalance}</p>
                )}
              </div>
            )}

            {validation.isValid && (
              <div className="mt-4 pt-3 border-t border-current/20">
                <a
                  href={`https://www.fresha.com/a/gomanic-brasil?gift_card=${passCode}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium hover:underline"
                >
                  Agendar com este VIP Pass
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}