'use client'

import { useEffect, useState } from 'react'
import { MasterConfig } from '@/types/master'
import { getCurrentMaster, loadMasterData } from '@/utils/master-loader'
import DynamicSEO from '@/components/layout/DynamicSEO'
import DynamicYandexMetrika from '@/components/layout/DynamicYandexMetrika'

import Header from '@/components/layout/Header'
import HeroSectionRU from '@/components/sections/Hero'
import MasterIntro from '@/components/features/master'
import PromocoesMes2 from '@/components/sections/Services'
import AboutGomanic from '@/components/sections/About/gomanic'
import SegurancaQualidade from '@/components/sections/About/SegurancaQualidade'
import ResultsGallery from '@/components/sections/Gallery/results'
import ClientsSection from '@/components/sections/Testimonials/ClientsSection'
import SocialProof from '@/components/sections/Testimonials/SocialProof'
import ComoFunciona from '@/components/sections/Process'
import VipExclusivo from '@/components/sections/VIP'
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
        <MasterIntro masterData={masterData} />
        <PromocoesMes2 masterData={masterData} />
        <ResultsGallery /> 
        <AboutGomanic />
        <SegurancaQualidade masterData={masterData} />
        <ClientsSection masterData={masterData} />
        <SocialProof masterData={masterData} />
        <ComoFunciona masterData={masterData} />
        <VipExclusivo masterData={masterData} />
      </main>
      <Footer masterData={masterData} />
    </div>
  )
}