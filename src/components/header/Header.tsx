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
    <header className="fixed top-0 left-0 right-0 z-50" style={{backgroundColor: '#FEFEFE', borderBottom: '1px solid rgba(68, 78, 85, 0.1)'}}>
      <div className="max-w-8xl mx-auto px-4 lg:px-6 py-3 lg:py-4">
        <div className="flex justify-between items-center">
          
          <Logo />
          
          <div className="hidden lg:flex items-center">
            <Navigation items={menuItems} />
            <VipBadge />
          </div>
          
          <MobileMenuButton 
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
      `}</style>
    </header>
  )
}
