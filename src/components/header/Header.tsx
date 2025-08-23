'use client'
import { useState } from 'react'
import { menuItems } from './data'
import Logo from './Logo'
import Navigation from './Navigation'
import VipBadge from './VipBadge'
import MobileMenuButton from './MobileMenuButton'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Skip link для accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-white focus:text-black focus:p-2 focus:rounded"
        style={{backgroundColor: '#FEFEFE', color: '#444f55'}}
      >
        Pular para o conteúdo principal
      </a>
      
      <header 
        className="fixed top-0 left-0 right-0 z-50" 
        style={{backgroundColor: '#FEFEFE', borderBottom: '1px solid rgba(68, 78, 85, 0.1)'}}
        role="banner"
      >
        <div className="max-w-8xl mx-auto px-4 lg:px-6 py-3 lg:py-4">
          <div className="flex justify-between items-center">
            
            <Logo />
            
            <nav className="hidden lg:flex items-center" role="navigation" aria-label="Navegação principal">
              <Navigation items={menuItems} />
              <VipBadge />
            </nav>
            
            <MobileMenuButton 
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Abrir menu de navegação móvel"
              aria-expanded={isMobileMenuOpen}
            />
          </div>
          
          <MobileMenu 
            isOpen={isMobileMenuOpen}
            items={menuItems}
            onClose={handleMobileMenuClose}
          />
        </div>

        <style jsx>{`
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          @keyframes glow {
            0% { opacity: 0.8; box-shadow: 0 0 20px rgba(245, 228, 230, 0.5); }
            100% { opacity: 1; box-shadow: 0 0 30px rgba(245, 228, 230, 0.8), 0 0 40px rgba(245, 228, 230, 0.3); }
          }
          .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
          }
          .focus\\:not-sr-only:focus {
            position: static;
            width: auto;
            height: auto;
            padding: 0.5rem;
            margin: 0;
            overflow: visible;
            clip: auto;
            white-space: normal;
          }
        `}</style>
      </header>
    </>
  )
}
