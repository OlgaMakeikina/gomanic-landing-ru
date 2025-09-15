"use client"

import { ServiceItem } from './data'
import ServiceHeader from './ServiceHeader'
import ServiceContent from './ServiceContent'
import { GLASS_STYLES } from './constants'

interface ServiceCardProps {
  service: ServiceItem
  index: number
  isOpen: boolean
  onToggle: () => void
}

export default function ServiceCard({ service, isOpen, onToggle }: ServiceCardProps) {
  return (
    <div
      className="relative backdrop-blur-xl rounded-2xl border overflow-hidden"
      style={{
        background: GLASS_STYLES.cardBg,
        borderColor: GLASS_STYLES.cardBorder,
        boxShadow: GLASS_STYLES.cardShadow,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-black/20 via-transparent to-black/10"></div>

      <ServiceHeader 
        service={service}
        isOpen={isOpen}
        onToggle={onToggle}
      />

      <ServiceContent 
        service={service}
        isOpen={isOpen}
      />
    </div>
  )
}