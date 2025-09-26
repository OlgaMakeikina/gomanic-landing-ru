interface SubmitButtonProps {
  isSubmitting: boolean;
}

export default function SubmitButton({ isSubmitting }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full rounded-lg border backdrop-blur-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
  );
}
