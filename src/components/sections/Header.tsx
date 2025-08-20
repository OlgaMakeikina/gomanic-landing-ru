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
      <div className="max-w-8xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#hero" className="flex items-center space-x-3 hover:opacity-70 transition-opacity">
            <span className="vogue-logo text-lg">GOMANIC</span>
            <div className="w-px h-4 bg-[#444e55]"></div>
            <span className="vogue-logo text-lg">UNHAS 5 ESTRELAS</span>
          </a>
          
          {/* Desktop Navigation - показываем меню на больших экранах */}
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
              {/* Glassmorphism градиенты */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/15 to-transparent rounded-full pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-black/5 via-transparent to-black/3 rounded-full pointer-events-none"></div>
              
              {/* Мигающий эффект */}
              <div className="absolute inset-0 rounded-full"
                   style={{
                     background: 'linear-gradient(135deg, rgba(245, 228, 230, 0.3) 0%, rgba(245, 228, 230, 0.1) 100%)',
                     animation: 'glow 1.5s ease-in-out infinite alternate'
                   }}></div>
              
              <span className="relative z-10">3 VAGAS</span>
              
              {/* CSS анимации */}
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
          
          {/* Кнопка записи для мобильных экранов */}
          <div className="block lg:hidden">
            <a 
              href="#agendamento"
              className="vogue-btn px-6 py-2 text-xs"
              style={{
                backgroundColor: '#444e55',
                color: '#FEFEFE',
                border: 'none'
              }}
            >
              AGENDAR AGORA
            </a>
          </div>
          
          {/* Mobile menu button - справа с анимацией, поверх всего */}
          <button 
            className="xl:hidden p-3 relative transition-all duration-300 z-50" 
            aria-label="Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 relative">
              {/* Первая полоска / верхняя часть крестика */}
              <div 
                className={`absolute w-6 h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen 
                    ? 'top-1/2 left-0 rotate-45 -translate-y-1/2' 
                    : 'top-0 left-0 rotate-0'
                }`}
                style={{backgroundColor: '#444e55'}}
              ></div>
              
              {/* Средняя полоска - исчезает при открытии */}
              <div 
                className={`absolute top-1/2 left-0 w-6 h-0.5 -translate-y-1/2 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`}
                style={{backgroundColor: '#444e55'}}
              ></div>
              
              {/* Нижняя полоска / нижняя часть крестика */}
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
        
        {/* Mobile Navigation - полноэкранное меню */}
        <nav className={`xl:hidden fixed inset-0 z-40 transition-all duration-500 ${
          isMobileMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}>
          {/* Фоновый оверлей */}
          <div 
            className="absolute inset-0"
            style={{backgroundColor: '#3B3B3A'}}
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Контент меню - компактная версия */}
          <div className={`relative h-full flex flex-col justify-center items-center text-center px-6 py-8 transform transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            
            {/* Заголовок - компактный */}
            <div className="mb-6">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <span className="vogue-logo text-xl" style={{color: '#FEFEFE'}}>GOMANIC</span>
                <div className="w-px h-4 bg-[#444e55]"></div>
                <span className="vogue-logo text-xl" style={{color: '#444e55'}}>BRASIL</span>
              </div>
              <div className="vogue-caption text-xs" style={{color: '#444e55'}}>MANICURE PREMIUM</div>
            </div>

            {/* Навигационные ссылки - компактные */}
            <div className="space-y-3 mb-8 max-h-64 overflow-y-auto">
              {menuItems.map((item, index) => (
                <a 
                  key={index}
                  href={item.href} 
                  className="block vogue-caption hover:opacity-70 transition-opacity py-2 text-sm"
                  style={{color: '#FEFEFE'}}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Кнопка записаться - компактная */}
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false)
                document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-3 mb-6 transition-all duration-300"
              style={{
                backgroundColor: '#444e55',
                color: '#FEFEFE',
                border: 'none',
                fontFamily: 'Garet, sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                borderRadius: '4px'
              }}
            >
              AGENDAR AGORA
            </button>

            {/* Социальные сети и контакты - компактные */}
            <div className="space-y-4 mb-6">
              {/* WhatsApp */}
              <a 
                href="https://wa.me/5548919700099" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 hover:opacity-70 transition-opacity"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-full" style={{backgroundColor: '#25D366'}}>
                  <span style={{color: '#FEFEFE', fontSize: '16px'}}>💬</span>
                </div>
                <span className="vogue-body text-sm" style={{color: '#FEFEFE'}}>
                  +55 48 9197-0099
                </span>
              </a>

              {/* Facebook */}
              <a 
                href="https://facebook.com/gomanicbrasil" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 hover:opacity-70 transition-opacity"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-full" style={{backgroundColor: '#1877F2'}}>
                  <span style={{color: '#FEFEFE', fontSize: '16px', fontWeight: 'bold'}}>f</span>
                </div>
                <span className="vogue-body text-sm" style={{color: '#FEFEFE'}}>
                  @GomanicBrasil
                </span>
              </a>
            </div>

            {/* Индикатор срочности - компактный */}
            <div>
              <div className="inline-block px-4 py-2 rounded" style={{backgroundColor: '#444e55'}}>
                <div className="vogue-caption text-xs" style={{color: '#FEFEFE'}}>⏰ 3 VAGAS RESTANTES</div>
              </div>
            </div>

          </div>
        </nav>
      </div>
    </header>
  )
}
