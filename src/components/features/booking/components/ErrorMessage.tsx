interface ErrorMessageProps {
  error: string;
}

export default function ErrorMessage({ error }: ErrorMessageProps) {
  if (!error) return null;

  return (
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
  );
}
