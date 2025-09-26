"use client"

import { ServiceItem } from './data'
import { COLORS } from './constants'
import BookingButton from '@/components/common/BookingButton'
import { useMasterData } from '@/hooks/useMasterData'

interface ServiceContentProps {
  service: ServiceItem
  isOpen: boolean
}

export default function ServiceContent({ service, isOpen }: ServiceContentProps) {
  const masterData = useMasterData()
  
  const handleBookingClick = () => {
    document.getElementById("booking")?.scrollIntoView({ 
      behavior: "smooth", 
      block: "start" 
    })
  }

  return (
    <div
      className="relative z-10 overflow-hidden transition-all duration-300"
      style={{
        maxHeight: isOpen ? "200px" : "0",
      }}
    >
      <div className="px-6 pb-6">
        <div
          className="mb-3 uppercase"
          style={{
            color: COLORS.white,
            fontFamily: "Manrope, sans-serif",
            fontSize: 12,
            opacity: 0.9,
            letterSpacing: "0.08em",
          }}
        >
          Включено
        </div>
        <ul
          className="space-y-2 mb-4"
          style={{
            color: COLORS.white,
            fontFamily: "Manrope, sans-serif",
            fontSize: 14,
            lineHeight: 1.5,
          }}
        >
          {service.inclui.map((item, i) => (
            <li key={i} className="flex items-start">
              <span className="mr-3 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {masterData?.contacts?.bookingUrl ? (
          <BookingButton
            bookingUrl={masterData.contacts.bookingUrl}
            text="Забронировать место"
            className="w-full rounded-lg px-4 py-3 transition-all duration-300 hover:scale-105"
            style={{
              background: COLORS.white,
              color: COLORS.gray,
              border: `1px solid ${COLORS.white}`,
              fontFamily: "Manrope, sans-serif",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              boxShadow: "0 8px 24px rgba(254,254,254,0.15)",
            }}
          />
        ) : (
          <button
            onClick={handleBookingClick}
            className="w-full rounded-lg px-4 py-3 transition-all duration-300 hover:scale-105"
            style={{
              background: COLORS.white,
              color: COLORS.gray,
              border: `1px solid ${COLORS.white}`,
              fontFamily: "Manrope, sans-serif",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              boxShadow: "0 8px 24px rgba(254,254,254,0.15)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "transparent"
              e.currentTarget.style.color = COLORS.white
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(59,59,57,0.45)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = COLORS.white
              e.currentTarget.style.color = COLORS.gray
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(254,254,254,0.15)"
            }}
          >
            Забронировать место
          </button>
        )}
      </div>
    </div>
  )
}
