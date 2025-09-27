'use client'

import { useEffect, useState } from 'react'
import { MasterConfig } from '@/types/master'
import { getCurrentMaster, loadMasterData } from '@/utils/master-loader'
import DynamicSEO from '@/components/layout/DynamicSEO'
import DynamicYandexMetrika from '@/components/layout/DynamicYandexMetrika'
import { MobileBookingButton } from '@/components/common'

import Header from '@/components/layout/Header'
import HeroSectionRU from '@/components/sections/Hero'
import MasterIntro from '@/components/features/master'
import ServicesSection from '@/components/sections/Services'
import AboutGomanic from '@/components/sections/About/gomanic'
import QualitySafety from '@/components/sections/About/QualitySafety'
import ClientsSection from '@/components/sections/Testimonials/ClientsSection'
import SocialProof from '@/components/sections/Testimonials/SocialProof'
import ProcessSection from '@/components/sections/Process'
import VipSection from '@/components/sections/VIP'
import Footer from '@/components/layout/Footer'

export default function Home() {
  const [masterData, setMasterData] = useState<MasterConfig | null>(null)

  useEffect(() => {
    async function loadData() {
      const masterId = getCurrentMaster()
      if (masterId) {
        const data = await loadMasterData(masterId)
        setMasterData(data)
      }
    }
    loadData()
  }, [])

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FEFEFE'}}>
      <DynamicSEO />
      <DynamicYandexMetrika />
      <Header masterData={masterData} />
      <main role="main" id="main-content">
        <HeroSectionRU />
        <ServicesSection masterData={masterData} />
  
        <AboutGomanic />
        <QualitySafety masterData={masterData} />
        <ClientsSection masterData={masterData} />
        <SocialProof masterData={masterData} />
        <ProcessSection masterData={masterData} />
        <VipSection masterData={masterData} />
      </main>
      <Footer masterData={masterData} />
      <MobileBookingButton 
        bookingUrl={masterData?.contacts?.bookingUrl || "https://dikidi.net/1921931?p=0.pi"}
      />
    </div>
  )
}