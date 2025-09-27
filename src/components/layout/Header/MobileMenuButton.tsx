import { useScrollPosition } from '@/hooks'

interface MobileMenuButtonProps {
  isOpen: boolean
  onClick: () => void
}

export default function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
  const { isScrolled } = useScrollPosition({ threshold: 50 })

  return (
    <button 
      className="lg:hidden p-2 relative transition-all duration-300 z-50 touch-manipulation" 
      aria-label="Menu"
      onClick={onClick}
      style={{ 
        minWidth: isScrolled ? '36px' : '44px', 
        minHeight: isScrolled ? '36px' : '44px',
        transform: isScrolled ? 'scale(0.8)' : 'scale(1)'
      }}
    >
      <div 
        className="relative mx-auto transition-all duration-300"
        style={{
          width: isScrolled ? '18px' : '24px',
          height: isScrolled ? '18px' : '24px'
        }}
      >
        <div 
          className={`absolute transition-all duration-300 ${
            isOpen 
              ? 'top-1/2 left-0 rotate-45 -translate-y-1/2' 
              : 'top-0 left-0 rotate-0'
          }`}
          style={{
            backgroundColor: isOpen ? '#FEFEFE' : '#444e55',
            width: isScrolled ? '18px' : '24px',
            height: isScrolled ? '1px' : '2px'
          }}
        ></div>
        <div 
          className={`absolute top-1/2 left-0 -translate-y-1/2 transition-all duration-300 ${
            isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
          }`}
          style={{
            backgroundColor: '#444e55',
            width: isScrolled ? '18px' : '24px',
            height: isScrolled ? '1px' : '2px'
          }}
        ></div>
        <div 
          className={`absolute transition-all duration-300 ${
            isOpen 
              ? 'top-1/2 left-0 -rotate-45 -translate-y-1/2' 
              : 'bottom-0 left-0 rotate-0'
          }`}
          style={{
            backgroundColor: isOpen ? '#FEFEFE' : '#444e55',
            width: isScrolled ? '18px' : '24px',
            height: isScrolled ? '1px' : '2px'
          }}
        ></div>
      </div>
    </button>
  )
}
