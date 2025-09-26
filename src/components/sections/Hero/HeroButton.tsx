interface HeroButtonProps {
  onClick: () => void
  variant: 'primary' | 'secondary'
  children: React.ReactNode
  className?: string
}

export default function HeroButton({ onClick, variant, children, className = '' }: HeroButtonProps) {
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
    minHeight: '48px'
  }

  const primaryStyle = {
    ...baseStyle,
    backgroundColor: '#3B3B3A',
    boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
  }

  const secondaryStyle = {
    ...baseStyle,
    backgroundColor: 'transparent',
    border: '2px solid rgba(255, 255, 255, 0.4)',
    padding: '14px 24px'
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (variant === 'primary') {
      e.currentTarget.style.backgroundColor = '#444e55'
    } else {
      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
      e.currentTarget.style.borderColor = '#FEFEFE'
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (variant === 'primary') {
      e.currentTarget.style.backgroundColor = '#3B3B3A'
    } else {
      e.currentTarget.style.backgroundColor = 'transparent'
      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)'
    }
  }

  return (
    <button 
      onClick={onClick}
      className={`transition-all duration-300 hover:scale-105 touch-manipulation ${className}`}
      style={variant === 'primary' ? primaryStyle : secondaryStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  )
}
