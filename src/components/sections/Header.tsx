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
            
            {/* Mobile menu header */}
            <div className="mb-8">
              <div className="flex flex-col items-center mb-3">
                <span className="vogue-logo text-2xl mb-1" style={{color: '#FEFEFE'}}>GOMANIC</span>
                <span className="vogue-logo text-lg" style={{color: '#444e55'}}>UNHAS 5 ESTRELAS</span>
              </div>
              <div className="vogue-caption text-sm" style={{color: '#444e55'}}>MANICURE PREMIUM</div>
            </div>

            {/* Navigation links */}
            <div className="space-y-4 mb-8 max-h-64 overflow-y-auto">
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

            {/* Social links */}
            <div className="space-y-4 mb-8">
              <a 
                href="https://wa.me/5548919700099" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 hover:opacity-70 transition-opacity py-2 touch-manipulation"
                style={{ minHeight: '44px' }}
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{backgroundColor: '#25D366'}}>
                  <span style={{color: '#FEFEFE', fontSize: '18px'}}>💬</span>
                </div>
                <span className="vogue-body text-base" style={{color: '#FEFEFE'}}>
                  +55 48 9197-0099
                </span>
              </a>

              <a 
                href="https://facebook.com/gomanicbrasil" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 hover:opacity-70 transition-opacity py-2 touch-manipulation"
                style={{ minHeight: '44px' }}
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{backgroundColor: '#1877F2'}}>
                  <span style={{color: '#FEFEFE', fontSize: '18px', fontWeight: 'bold'}}>f</span>
                </div>
                <span className="vogue-body text-base" style={{color: '#FEFEFE'}}>
                  @GomanicBrasil
                </span>
              </a>
            </div>

            {/* Urgency indicator */}
            <div className="inline-block px-6 py-3 rounded-lg" style={{backgroundColor: '#444e55'}}>
              <div className="vogue-caption text-sm" style={{color: '#FEFEFE'}}>⏰ 3 VAGAS RESTANTES</div>
            </div>

          </div>
        </nav>
      </div>
    </header>
  )
}