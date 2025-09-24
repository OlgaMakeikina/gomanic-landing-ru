'use client';

import { GLASS_STYLES } from './bookingData';

interface PrivacyCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function PrivacyCheckbox({ checked, onChange }: PrivacyCheckboxProps) {
  return (
    <div className="flex items-start space-x-3">
      <div className="flex items-center h-5">
        <input
          id="privacy-consent"
          name="privacy-consent"
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="w-4 h-4 rounded border-2 bg-transparent"
          style={{ 
            borderColor: GLASS_STYLES.textSecondary,
            accentColor: '#FEFEFE'
          }}
          required
        />
      </div>
      <div className="min-w-0 flex-1">
        <label 
          htmlFor="privacy-consent" 
          className="text-sm cursor-pointer"
          style={{ color: GLASS_STYLES.textSecondary }}
        >
          Согласен на обработку{' '}
          <a
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80 transition-opacity"
            style={{ color: '#FEFEFE' }}
          >
            персональных данных
          </a>
        </label>
      </div>
    </div>
  );
}