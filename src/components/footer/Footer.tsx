'use client'
import { MasterConfig } from '@/types/master'
import FooterLogo from './FooterLogo'
import SocialLinks from './SocialLinks'
import Copyright from './Copyright'

interface FooterProps {
  masterData?: MasterConfig | null
}

export default function Footer({ masterData }: FooterProps) {
  return (
    <footer className="py-20 border-t relative" 
            style={{
              backgroundColor: '#444e55', 
              color: '#FEFEFE', 
              borderTopColor: '#FEFEFE'
            }} 
            role="contentinfo">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-16 mb-16 items-start">
          <FooterLogo />
          <SocialLinks />
        </div>
        
        <Copyright />
        
      </div>
    </footer>
  )
}
