import { GLASS_STYLES } from './bookingData';

interface FormInputProps {
  label: string;
  type: 'text' | 'tel' | 'email';
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  required?: boolean;
  error?: string;
  onBlur?: () => void;
}

export default function FormInput({ 
  label, 
  type, 
  value, 
  onChange, 
  placeholder, 
  required = false,
  error,
  onBlur
}: FormInputProps) {
  return (
    <div>
      <label className="block mb-3" style={{
        color: '#FEFEFE',
        fontFamily: 'Manrope, sans-serif',
        fontSize: 14,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        opacity: 0.85
      }}>
        {label} {required && '*'}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className={`glass-input w-full px-4 py-3 rounded-lg border backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-white/40 ${
          error ? 'border-red-400' : ''
        }`}
        placeholder={placeholder}
        style={{
          background: 'rgba(255, 255, 255, 0.15)',
          borderColor: error ? '#f87171' : 'rgba(255, 255, 255, 0.2)',
          color: '#FEFEFE',
          fontFamily: 'Manrope, sans-serif',
          fontSize: 16
        }}
      />
      {error && (
        <p className="text-sm mt-2" style={{ color: '#f87171' }}>
          {error}
        </p>
      )}
    </div>
  );
}
