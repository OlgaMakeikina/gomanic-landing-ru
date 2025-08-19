'use client'

import Header from '@/components/sections/Header'
import HeroSection from '@/components/sections/HeroSection'
import PromocoesMes2 from '@/components/sections/PromocoesMes2'
import PortfolioSection from '@/components/sections/PortfolioSection'
import SegurancaQualidade from '@/components/sections/SegurancaQualidade'
import SocialProof from '@/components/sections/SocialProof'
import ComoFunciona from '@/components/sections/ComoFunciona'
import VipExclusivo from '@/components/sections/VipExclusivo'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#FEFEFE'}}>
      <Header />
      <HeroSection />
      <PromocoesMes2 />
      <PortfolioSection />
      <SegurancaQualidade />
      <SocialProof />
      <ComoFunciona />
      <VipExclusivo />

      <ContactSection />
      <Footer />
    </div>
  )
}
