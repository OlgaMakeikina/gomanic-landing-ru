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
    <footer className="py-20 border-t relative pb-24 lg:pb-20" 
            style={{
              backgroundColor: '#444e55', 
              color: '#FEFEFE', 
              borderTopColor: '#FEFEFE'
            }} 
            role="contentinfo">
      
      <div className="vogue-container relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-16 mb-16 items-start">
          <FooterLogo />
          <SocialLinks />
        </div>
        
        <Copyright />
        
      </div>
    </footer>
  )
}
