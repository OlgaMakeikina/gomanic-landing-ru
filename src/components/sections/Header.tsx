'use client'
import { useState } from 'react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuItems = [
    { href: "#promocoes-2", label: "PROMOÇÕES" },
    { href: "#portfolio", label: "PORTFÓLIO" },
    { href: "#seguranca", label: "SEGURANÇA" },
    { href: "#clientes", label: "CLIENTES" },
    { href: "#vip-exclusivo", label: "VIP CLUB" },
    { href: "#como-funciona", label: "PROCESSO" },
    { href: "#agendamento", label: "CONTATO" }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{backgroundColor: '#FEFEFE', borderBottom: '1px solid rgba(68, 78, 85, 0.1)'}}>
      <div className="max-w-8xl mx-auto px-4 lg:px-6 py-3 lg:py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo - адаптивный дизайн */}
          <a href="#hero" className="flex items-center hover:opacity-70 transition-opacity">
            {/* Desktop логотип - одна строка */}
            <div className="hidden lg:flex items-center space-x-3">
              <span className="vogue-logo text-lg">GOMANIC</span>
              <div className="w-px h-4 bg-[#444e55]"></div>
              <span className="vogue-logo text-lg">UNHAS 5 ESTRELAS</span>
            </div>
            
            {/* Mobile логотип - две строки, меньшими буквами */}
            <div className="flex lg:hidden flex-col items-start">
              <span className="vogue-logo text-sm leading-none" style={{color: '#444e55'}}>GOMANIC</span>
              <span className="vogue-logo text-xs leading-none opacity-80" style={{color: '#444e55'}}>UNHAS 5 ESTRELAS</span>
            </div>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="vogue-caption hover:opacity-70 transition-opacity px-3 py-2 text-xs whitespace-nowrap" 
                style={{color: '#3B3B3A', fontSize: '11px', letterSpacing: '0.1em', fontWeight: 600}}
              >
                {item.label}
              </a>
            ))}
            <div className="ml-4 text-xs px-4 py-2 relative backdrop-blur-xl rounded-full border border-white border-opacity-40"
                 style={{
                   background: 'linear-gradient(135deg, rgba(245, 228, 230, 0.95) 0%, rgba(245, 228, 230, 0.8) 100%)',
                   color: '#3B3B3A',
                   boxShadow: '0 8px 32px rgba(245, 228, 230, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                   fontWeight: 700,
                   letterSpacing: '0.1em',
                   animation: 'pulse 2s ease-in-out infinite'
                 }}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/15 to-transparent rounded-full pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-black/5 via-transparent to-black/3 rounded-full pointer-events-none"></div>
              <div className="absolute inset-0 rounded-full"
                   style={{
                     background: 'linear-gradient(135deg, rgba(245, 228, 230, 0.3) 0%, rgba(245, 228, 230, 0.1) 100%)',
                     animation: 'glow 1.5s ease-in-out infinite alternate'
                   }}></div>
              <span className="relative z-10">3 VAGAS</span>
              <style jsx>{`
                @keyframes pulse {
                  0%, 100% { transform: scale(1); }
                  50% { transform: scale(1.05); }
                }
                @keyframes glow {
                  0% { opacity: 0.8; box-shadow: 0 0 20px rgba(245, 228, 230, 0.5); }
                  100% { opacity: 1; box-shadow: 0 0 30px rgba(245, 228, 230, 0.8), 0 0 40px rgba(245, 228, 230, 0.3); }
                }
              `}</style>
            </div>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 relative transition-all duration-300 z-50 touch-manipulation" 
            aria-label="Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ minWidth: '44px', minHeight: '44px' }}
          >
            <div className="w-6 h-6 relative mx-auto">
              <div 
                className={`absolute w-6 h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen 
                    ? 'top-1/2 left-0 rotate-45 -translate-y-1/2' 
                    : 'top-0 left-0 rotate-0'
                }`}
                style={{backgroundColor: '#444e55'}}
              ></div>
              <div 
                className={`absolute top-1/2 left-0 w-6 h-0.5 -translate-y-1/2 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`}
                style={{backgroundColor: '#444e55'}}
              ></div>
              <div 
                className={`absolute w-6 h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen 
                    ? 'top-1/2 left-0 -rotate-45 -translate-y-1/2' 
                    : 'bottom-0 left-0 rotate-0'
                }`}
                style={{backgroundColor: '#444e55'}}
              ></div>
            </div>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <nav className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          isMobileMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}>
          <div 
            className="absolute inset-0"
            style={{backgroundColor: '#3B3B3A'}}
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          <div className={`relative h-full flex flex-col justify-center items-center text-center px-6 py-8 transform transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            
            {/* Navigation links */}
            <div className="space-y-4 mb-12 max-h-64 overflow-y-auto">
              {menuItems.map((item, index) => (
                <a 
                  key={index}
                  href={item.href} 
                  className="block vogue-caption hover:opacity-70 transition-opacity py-3 text-lg touch-manipulation"
                  style={{color: '#FEFEFE', minHeight: '44px', lineHeight: '44px'}}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Contact icons */}
            <div className="flex justify-center space-x-6 mb-8">
              {/* WhatsApp */}
              <a 
                href="https://wa.me/5548919700099" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center rounded-full hover:opacity-70 transition-all duration-300 touch-manipulation"
                style={{backgroundColor: '#25D366'}}
                aria-label="WhatsApp"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382C17.367 14.382 17.285 14.319 17.252 14.228C17.219 14.137 17.241 14.036 17.308 13.969L18.229 13.048C18.296 12.981 18.397 12.959 18.488 12.992C18.579 13.025 18.642 13.107 18.642 13.212V16.5C18.642 17.881 17.523 19 16.142 19H7.858C6.477 19 5.358 17.881 5.358 16.5V7.5C5.358 6.119 6.477 5 7.858 5H16.142C17.523 5 18.642 6.119 18.642 7.5V10.788C18.642 10.893 18.579 10.975 18.488 11.008C18.397 11.041 18.296 11.019 18.229 10.952L17.308 10.031C17.241 9.964 17.219 9.863 17.252 9.772C17.285 9.681 17.367 9.618 17.472 9.618C17.488 9.618 17.505 9.62 17.521 9.624L16.142 5C14.477 5 13.126 6.351 13.126 8.016V16.984C13.126 18.649 14.477 20 16.142 20H7.858C6.193 20 4.842 18.649 4.842 16.984V8.016C4.842 6.351 6.193 5 7.858 5H16.142C17.807 5 19.158 6.351 19.158 8.016V16.984C19.158 18.649 17.807 20 16.142 20H7.858C6.193 20 4.842 18.649 4.842 16.984V8.016C4.842 6.351 6.193 5 7.858 5H16.142C17.523 5 18.642 6.119 18.642 7.5V13.212C18.642 13.317 18.579 13.399 18.488 13.432C18.397 13.465 18.296 13.443 18.229 13.376L17.308 12.455C17.241 12.388 17.219 12.287 17.252 12.196C17.285 12.105 17.367 12.042 17.472 12.042Z" fill="white"/>
                  <path d="M12 6.5C8.962 6.5 6.5 8.962 6.5 12C6.5 13.09 6.797 14.113 7.315 15.002L6.5 17.5L9.055 16.701C9.915 17.185 10.923 17.5 12 17.5C15.038 17.5 17.5 15.038 17.5 12C17.5 8.962 15.038 6.5 12 6.5ZM15.219 13.781C15.143 14.016 14.704 14.219 14.486 14.272C14.268 14.325 14.004 14.337 13.726 14.248C13.574 14.196 13.382 14.128 13.137 14.018C11.909 13.482 11.125 12.231 11.063 12.153C11.001 12.075 10.5 11.375 10.5 10.656C10.5 9.937 10.875 9.587 11.019 9.431C11.163 9.275 11.344 9.231 11.456 9.231C11.568 9.231 11.681 9.234 11.781 9.238C11.888 9.243 12.038 9.194 12.181 9.531C12.325 9.869 12.675 10.588 12.725 10.688C12.775 10.787 12.806 10.906 12.744 11.006C12.681 11.106 12.644 11.169 12.563 11.269C12.481 11.369 12.394 11.481 12.325 11.544C12.244 11.619 12.156 11.7 12.244 11.856C12.331 12.012 12.669 12.556 13.156 12.981C13.788 13.531 14.319 13.725 14.494 13.806C14.669 13.887 14.787 13.869 14.887 13.756C14.987 13.644 15.325 13.244 15.437 13.081C15.55 12.919 15.681 12.95 15.844 13.012C16.006 13.075 16.725 13.425 16.906 13.519C17.087 13.612 17.212 13.656 17.262 13.744C17.312 13.831 17.312 14.156 17.219 14.531L15.219 13.781Z" fill="white"/>
                </svg>
              </a>

              {/* Phone */}
              <a 
                href="tel:+5548919700099" 
                className="w-14 h-14 flex items-center justify-center rounded-full hover:opacity-70 transition-all duration-300 touch-manipulation"
                style={{backgroundColor: '#444e55'}}
                aria-label="Telefone"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.04981 2.28271 3.30379 2.17052C3.55778 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com/gomanicbrasil" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center rounded-full hover:opacity-70 transition-all duration-300 touch-manipulation"
                style={{background: 'linear-gradient(45deg, #F09433 0%, #E6683C 25%, #DC2743 50%, #CC2366 75%, #BC1888 100%)'}}
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="white" strokeWidth="2"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" stroke="white" strokeWidth="2"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
            </div>

            {/* Booking button */}
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false)
                document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-4 mb-8 transition-all duration-300 touch-manipulation"
              style={{
                backgroundColor: '#444e55',
                color: '#FEFEFE',
                border: 'none',
                fontFamily: 'Garet, sans-serif',
                fontSize: '16px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                borderRadius: '8px',
                minHeight: '48px',
                boxShadow: '0 4px 12px rgba(68, 78, 85, 0.3)'
              }}
            >
              AGENDAR AGORA
            </button>

            {/* Urgency indicator */}
            <div className="inline-block px-6 py-3 rounded-lg" style={{backgroundColor: 'rgba(68, 78, 85, 0.3)', border: '1px solid #444e55'}}>
              <div className="vogue-caption text-sm" style={{color: '#FEFEFE'}}>⏰ 3 VAGAS RESTANTES</div>
            </div>

          </div>
        </nav>
      </div>
    </header>
  )
}