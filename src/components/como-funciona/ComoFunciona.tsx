'use client'

import { processSteps } from './data'
import SectionHeader from './SectionHeader'
import DesktopTimeline from './DesktopTimeline'
import MobileTimeline from './MobileTimeline'

export default function ComoFunciona() {
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
