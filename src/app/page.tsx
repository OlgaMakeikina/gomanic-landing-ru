'use client'

import { useEffect, useState } from 'react'
import { MasterConfig } from '@/types/master'
import { getCurrentMaster, loadMasterData } from '@/utils/master-loader'

import Header from '@/components/header'
import HeroSectionRU from '@/components/hero/HeroSection'
import MasterIntro from '@/components/sections/MasterIntro'
import PromocoesMes2 from '@/components/sections/PromocoesMes2'
import SegurancaQualidade from '@/components/sections/SegurancaQualidade'
import ResultsGallery from '@/components/results-gallery'
import ClientsSection from '@/components/sections/ClientsSection'
import SocialProof from '@/components/sections/SocialProof'
import ComoFunciona from '@/components/como-funciona'
import VipExclusivo from '@/components/sections/VipExclusivo'
import ContactSection from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  const [masterData, setMasterData] = useState<MasterConfig | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      const masterId = getCurrentMaster()
      if (masterId) {
        const data = await loadMasterData(masterId)
        setMasterData(data)
      }
      setLoading(false)
    }
    loadData()
  }, [])

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Загрузка...</div>
  }

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FEFEFE'}}>
      <Header masterData={masterData} />
      <main role="main" id="main-content">
        <HeroSectionRU masterData={masterData} />
        <MasterIntro masterData={masterData} />
        <PromocoesMes2 masterData={masterData} />
        <ResultsGallery />
        <SegurancaQualidade masterData={masterData} />
        <ClientsSection masterData={masterData} />
        <SocialProof masterData={masterData} />
        <ComoFunciona masterData={masterData} />
        <VipExclusivo masterData={masterData} />
        <ContactSection masterData={masterData} />
      </main>
      <Footer masterData={masterData} />
    </div>
  )
}
