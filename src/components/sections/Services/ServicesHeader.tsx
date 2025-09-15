"use client"

import { useState, useEffect } from "react"
import { HorizonText } from '@/components/ui'
import { useCountdown } from '@/hooks/useCountdown'
import { COLORS } from './constants'

export default function ServicesHeader() {
  const [isClient, setIsClient] = useState(false)
  const { time } = useCountdown()

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="text-center mb-16">
      <div
        className="uppercase tracking-[0.22em] mb-3"
        style={{ 
          color: COLORS.white, 
          fontFamily: "Manrope, sans-serif", 
          fontSize: 14, 
          opacity: 0.85 
        }}
      >
        СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ
      </div>

      <HorizonText 
        as="h2"
        className="vogue-subhead mb-8"
        style={{color: COLORS.white}}
      >
        АКЦИИ МЕСЯЦА
      </HorizonText>

      <div
        className="mx-auto inline-block rounded-2xl px-6 py-4 backdrop-blur-md border shadow-lg mb-4"
        style={{
          background: "rgba(255, 255, 255, 0.25)",
          borderColor: "rgba(255, 255, 255, 0.40)",
        }}
      >
        <div className="text-center">
          <div
            className="uppercase mb-2"
            style={{
              color: COLORS.white,
              fontFamily: "Manrope, sans-serif",
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: "0.1em",
              opacity: 0.9,
            }}
          >
            Осталось времени
          </div>
          
          <div className="flex items-center justify-center gap-4">
            {[
              { value: time.days, label: "дни" },
              { value: time.hours, label: "часы" },
              { value: time.minutes, label: "мин" },
              { value: time.seconds, label: "сек" }
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div
                  className="tabular-nums font-bold"
                  style={{
                    color: COLORS.white,
                    fontFamily: "Manrope, sans-serif",
                    fontSize: 20,
                    fontWeight: 800,
                    lineHeight: 1,
                  }}
                >
                  {isClient ? String(value).padStart(2, "0") : "00"}
                </div>
                <div
                  style={{
                    color: COLORS.white,
                    fontFamily: "Manrope, sans-serif",
                    fontSize: 10,
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    opacity: 0.8,
                    marginTop: 2,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div
          className="flex items-center justify-center gap-2"
          style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: COLORS.white,
            animation: "pulse 2s infinite",
          }}
        >
          <span>🔥</span>
          <span>Только 5 мест в неделю! Не упустите!</span>
        </div>
      </div>
    </div>
  )
}