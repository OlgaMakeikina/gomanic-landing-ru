"use client"

import { ServiceItem } from './data'
import { COLORS } from './constants'

interface ServiceHeaderProps {
  service: ServiceItem
  isOpen: boolean
  onToggle: () => void
}

export default function ServiceHeader({ service, isOpen, onToggle }: ServiceHeaderProps) {
  return (
    <button
      onClick={onToggle}
      className="relative z-10 w-full p-6 text-left focus:outline-none hover:bg-white/10 transition-all duration-300"
    >
      <div className="flex items-center justify-between">
        <div className="flex-1 pr-4">
          <h3
            style={{
              color: COLORS.white,
              fontFamily: "Manrope, sans-serif",
              fontSize: 18,
              letterSpacing: "0.03em",
              fontWeight: 600,
              lineHeight: 1.3,
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            {service.titulo}
          </h3>

          <div className="flex items-center gap-3">
            <span
              style={{
                color: COLORS.white,
                opacity: 0.6,
                textDecoration: "line-through",
                fontFamily: "Manrope, sans-serif",
                fontSize: 14,
              }}
            >
              {service.precoNormal}
            </span>
            <span
              className="inline-flex items-center rounded-lg px-3 py-1"
              style={{
                background: COLORS.white,
                color: COLORS.gray,
                fontWeight: 800,
                fontSize: 18,
                fontFamily: "Manrope, sans-serif",
                boxShadow: "0 4px 12px rgba(254,254,254,0.20)",
              }}
            >
              {service.precoVIP}
            </span>
          </div>
        </div>

        <div
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300"
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            style={{ color: COLORS.white }}
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </button>
  )
}