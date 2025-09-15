"use client"

import { GLASS_STYLES } from './constants'

export default function ServicePhoto() {
  return (
    <div
      className="relative aspect-square rounded-2xl overflow-hidden backdrop-blur-xl border"
      style={{
        background: GLASS_STYLES.cardBg,
        borderColor: GLASS_STYLES.cardBorder,
        boxShadow: "0 32px 64px rgba(0,0,0,0.5)",
      }}
    >
      <img 
        src="/images/offer/offer.jpeg" 
        alt="Маникюр со скидкой 50% - наша работа" 
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: "brightness(0.85) contrast(1.1)"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/30"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-black/20 via-transparent to-transparent"></div>
    </div>
  )
}
