"use client"

import { useState } from "react"
import ServiceCard from './ServiceCard'
import ServicePhoto from './ServicePhoto'
import { ServiceItem } from './data'

interface ServicesGridProps {
  services: ServiceItem[]
}

export default function ServicesGrid({ services }: ServicesGridProps) {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
      {/* Left: Accordion */}
      <div className="space-y-4">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            index={index}
            isOpen={openAccordion === index}
            onToggle={() => toggleAccordion(index)}
          />
        ))}
      </div>

      {/* Right: Photo */}
      <div className="lg:sticky lg:top-8">
        <ServicePhoto />
      </div>
    </div>
  )
}
