'use client'

import { MasterConfig } from '@/types/master'
import { processSteps } from './data'
import SectionHeader from './SectionHeader'
import DesktopTimeline from './DesktopTimeline'
import MobileTimeline from './MobileTimeline'

interface ComoFuncionaProps {
  masterData?: MasterConfig | null;
}

export default function ComoFunciona({ masterData }: ComoFuncionaProps) {
  return (
    <section id="como-funciona" className="py-20" style={{backgroundColor: '#444f55'}} aria-labelledby="como-funciona-heading">
      <div className="vogue-container">
        <SectionHeader />
        <DesktopTimeline passos={processSteps} />
        <MobileTimeline passos={processSteps} />
      </div>
    </section>
  )
}
