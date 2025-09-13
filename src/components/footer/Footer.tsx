'use client'
import { useState } from 'react'
import { MasterConfig } from '@/types/master'
import FooterLogo from './FooterLogo'
import SocialLinks from './SocialLinks'
import AddressSection from './AddressSection'
import Copyright from './Copyright'
import Disclaimer from './Disclaimer'

interface FooterProps {
  masterData?: MasterConfig | null
}

export default function Footer({ masterData }: FooterProps) {
  const [showMap, setShowMap] = useState(false)

  const handleCtaClick = () => {
    document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleToggleMap = () => {
    setShowMap(!showMap)
  }

  return (
    <footer className="py-20 border-t relative" style={{backgroundColor: '#444e55', color: '#FEFEFE', borderTopColor: '#FEFEFE'}} role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 mb-16 items-start">
          
          <FooterLogo onCtaClick={handleCtaClick} />
          <SocialLinks />
          <AddressSection showMap={showMap} onToggleMap={handleToggleMap} />

        </div>
        
        <Copyright />

      </div>
    </footer>
  )
}
