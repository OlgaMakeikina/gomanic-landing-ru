import { MobileMenuProps } from './types'

export default function MobileMenu({ isOpen, items, onClose }: MobileMenuProps) {
  return (
    <nav className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
      isOpen 
        ? 'opacity-100 visible' 
        : 'opacity-0 invisible'
    }`}>
      <div 
        className="absolute inset-0 backdrop-blur-2xl"
        style={{backgroundColor: 'rgba(59, 59, 58, 0.95)'}}
        onClick={onClose}
      ></div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-8 px-8">
          {items.map((item, index) => (
            <a 
              key={index}
              href={item.href}
              onClick={onClose}
              className="block vogue-caption hover:opacity-70 transition-all duration-300 transform hover:scale-105"
              style={{
                color: '#FEFEFE', 
                fontSize: '18px', 
                letterSpacing: '0.15em', 
                fontWeight: 500
              }}
            >
              {item.label}
            </a>
          ))}
          
          <div className="pt-8">
            <div className="text-xs px-6 py-3 relative backdrop-blur-xl rounded-full border border-white border-opacity-40"
                 style={{
                   background: 'linear-gradient(135deg, rgba(245, 228, 230, 0.95) 0%, rgba(245, 228, 230, 0.8) 100%)',
                   color: '#3B3B3A',
                   fontWeight: 700,
                   letterSpacing: '0.1em',
                   display: 'inline-block'
                 }}>
              CLUBE VIP ATIVO
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
