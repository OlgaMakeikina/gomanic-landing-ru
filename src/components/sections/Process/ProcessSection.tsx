'use client'

import { MasterConfig } from '@/types/master'
import { processSteps } from './data'
import SectionHeader from './SectionHeader'
import DesktopTimeline from './DesktopTimeline'
import MobileTimeline from './MobileTimeline'

interface ProcessSectionProps {
  masterData?: MasterConfig | null;
}

export default function ProcessSection({ masterData }: ProcessSectionProps) {
  return (
    <section id="process" className="py-20" style={{backgroundColor: '#444f55'}} aria-labelledby="process-heading">
      <div className="vogue-container">
        <SectionHeader />
        <DesktopTimeline steps={processSteps} />
        <MobileTimeline steps={processSteps} />
      </div>
    </section>
  )
}
