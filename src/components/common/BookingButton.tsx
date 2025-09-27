'use client'

interface BookingButtonProps {
  bookingUrl?: string;
  text?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  disableHoverEffects?: boolean; // Новое свойство для отключения hover эффектов
}

export default function BookingButton({ 
  bookingUrl = "https://dikidi.net/1921931?p=0.pi", 
  text = "Записаться", 
  variant = 'primary',
  className = '',
  style = {},
  onClick,
  disableHoverEffects = false
}: BookingButtonProps) {
  
  // Точно такие же стили как в HeroButton
  const baseStyle = {
    border: 'none',
    borderRadius: '8px',
    padding: '16px 24px',
    fontFamily: 'Manrope, sans-serif',
    fontSize: '14px',
    fontWeight: variant === 'primary' ? 600 : 400,
    letterSpacing: '0.05em',
    textTransform: 'uppercase' as const,
    color: '#FEFEFE',
    cursor: 'pointer',
    minHeight: '48px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none'
  };

  const primaryStyle = {
    ...baseStyle,
    backgroundColor: '#3B3B3A',
    boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
  };

  const secondaryStyle = {
    ...baseStyle,
    backgroundColor: 'transparent',
    border: '2px solid rgba(255, 255, 255, 0.4)',
    padding: '14px 24px'
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Не применяем hover эффекты если они отключены или переданы кастомные стили
    if (disableHoverEffects || Object.keys(style).length > 0) return;
    
    if (variant === 'primary') {
      e.currentTarget.style.backgroundColor = '#444e55'
    } else {
      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
      e.currentTarget.style.borderColor = '#FEFEFE'
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Не применяем hover эффекты если они отключены или переданы кастомные стили
    if (disableHoverEffects || Object.keys(style).length > 0) return;
    
    if (variant === 'primary') {
      e.currentTarget.style.backgroundColor = '#3B3B3A'
    } else {
      e.currentTarget.style.backgroundColor = 'transparent'
      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)'
    }
  };

  // Если переданы кастомные стили, используем только их
  const finalStyle = Object.keys(style).length > 0 
    ? { ...baseStyle, ...style }
    : { ...(variant === 'primary' ? primaryStyle : secondaryStyle), ...style };

  return (
    <a
      href={bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`transition-all duration-300 hover:scale-105 touch-manipulation ${className}`}
      style={finalStyle}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </a>
  );
}
