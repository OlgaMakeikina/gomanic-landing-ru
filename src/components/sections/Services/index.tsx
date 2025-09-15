"use client"

import { MasterConfig } from '@/types/master'
import ServicesHeader from './ServicesHeader'
import ServicesGrid from './ServicesGrid'
import { SERVICES_DATA } from './data'
import { COLORS } from './constants'

interface ServicesProps {
  masterData?: MasterConfig | null;
}

export default function Services({ masterData }: ServicesProps) {
  return (
    <section 
      id="promocoes" 
      className="relative py-20" 
      style={{ backgroundColor: COLORS.dark }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(1000px 500px at 15% 0%, rgba(254,254,254,0.08) 0%, rgba(254,254,254,0) 60%), radial-gradient(900px 450px at 85% 100%, rgba(254,254,254,0.06) 0%, rgba(254,254,254,0) 60%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <ServicesHeader />
        <ServicesGrid services={SERVICES_DATA} />
      </div>
    </section>
  )
}
