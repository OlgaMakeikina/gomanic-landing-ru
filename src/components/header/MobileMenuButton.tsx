interface MobileMenuButtonProps {
  isOpen: boolean
  onClick: () => void
}

export default function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
  return (
    <button 
      className="lg:hidden p-2 relative transition-all duration-300 z-50 touch-manipulation" 
      aria-label="Menu"
      onClick={onClick}
      style={{ minWidth: '44px', minHeight: '44px' }}
    >
      <div className="w-6 h-6 relative mx-auto">
        <div 
          className={`absolute w-6 h-0.5 transition-all duration-300 ${
            isOpen 
              ? 'top-1/2 left-0 rotate-45 -translate-y-1/2' 
              : 'top-0 left-0 rotate-0'
          }`}
          style={{backgroundColor: isOpen ? '#FEFEFE' : '#444e55'}}
        ></div>
        <div 
          className={`absolute top-1/2 left-0 w-6 h-0.5 -translate-y-1/2 transition-all duration-300 ${
            isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
          }`}
          style={{backgroundColor: '#444e55'}}
        ></div>
        <div 
          className={`absolute w-6 h-0.5 transition-all duration-300 ${
            isOpen 
              ? 'top-1/2 left-0 -rotate-45 -translate-y-1/2' 
              : 'bottom-0 left-0 rotate-0'
          }`}
          style={{backgroundColor: isOpen ? '#FEFEFE' : '#444e55'}}
        ></div>
      </div>
    </button>
  )
}
