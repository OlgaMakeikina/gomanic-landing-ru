'use client'

import { useState, useEffect, useRef } from 'react'
import CountdownTimer from './CountdownTimer'
import { trackVIPButtonView, trackVIPButtonClick, trackSlotsUpdate } from '@/utils/analytics'
import BookingButton from '@/components/common/BookingButton'
import { useMasterData } from '@/hooks/useMasterData'

const INITIAL_SLOTS = 30;
const MINIMUM_SLOTS = 3;

export default function VipCallToAction() {
  const masterData = useMasterData()
  const [isVisible, setIsVisible] = useState(false)
  const [remainingSlots, setRemainingSlots] = useState(INITIAL_SLOTS)
  const [hasViewed, setHasViewed] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isVisible && !hasViewed) {
      trackVIPButtonView()
      setHasViewed(true)
    }
  }, [isVisible, hasViewed])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasViewed) {
            trackVIPButtonView()
            setHasViewed(true)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (buttonRef.current) {
      observer.observe(buttonRef.current)
    }

    return () => observer.disconnect()
  }, [hasViewed])

  const handleClick = () => {
    trackVIPButtonClick()

    if (remainingSlots > MINIMUM_SLOTS) {
      const newSlots = remainingSlots - 1
      setRemainingSlots(newSlots)
      trackSlotsUpdate(newSlots)
    }

    document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div 
      className={`relative rounded-2xl overflow-hidden transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
      }`}
      style={{ 
        background: '#444f55', 
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 rounded-2xl" />
      
      <div className="relative z-10 p-8 text-center">
        <div className="mb-4">
          <div className="text-3xl font-bold mb-2" style={{color: '#FEFEFE'}}>
            ОСТАЛОСЬ ВСЕГО {remainingSlots} {remainingSlots === 1 ? 'МЕСТО' : remainingSlots < 5 ? 'МЕСТА' : 'МЕСТ'}!
          </div>
          <div className="text-sm opacity-75" style={{color: '#FEFEFE'}}>
            {remainingSlots <= MINIMUM_SLOTS && (
              <span className="text-yellow-300 font-semibold">⚠️ Последние места!</span>
            )}
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-4" style={{color: '#FEFEFE'}}>
          ЭТА ВОЗМОЖНОСТЬ ЗАКАНЧИВАЕТСЯ ЧЕРЕЗ:
        </h3>
        
        <CountdownTimer />
        
        <p className="vogue-body text-lg mb-6" style={{color: '#FEFEFE', fontWeight: 600}}>
          После этого вернется обычная цена (без скидки)
        </p>
        
        {masterData?.contacts?.bookingUrl ? (
          <BookingButton
            bookingUrl={masterData.contacts.bookingUrl}
            text="ХОЧУ ГАРАНТИРОВАТЬ СВОЕ МЕСТО СЕЙЧАС!"
            className="px-12 py-4 transition-all duration-300 text-lg"
            style={{
              background: '#FFFFFF',
              color: '#444f55',
              borderRadius: '12px',
              fontFamily: 'Manrope, sans-serif',
              fontSize: '18px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)',
              transform: 'scale(1.02)',
              border: 'none'
            }}
          />
        ) : (
          <button 
            ref={buttonRef}
            onClick={handleClick}
            className="px-12 py-4 transition-all duration-300 text-lg"
            style={{
              background: '#FFFFFF',
              color: '#444f55',
              borderRadius: '12px',
              fontFamily: 'Manrope, sans-serif',
              fontSize: '18px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)',
              transform: 'scale(1.02)',
              border: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FEFEFE'
              e.currentTarget.style.color = '#444f55'
              e.currentTarget.style.transform = 'scale(1.05)'
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.4), 0 4px 12px rgba(0, 0, 0, 0.25)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#FFFFFF'
              e.currentTarget.style.color = '#444f55'
              e.currentTarget.style.transform = 'scale(1.02)'
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)'
            }}
          >
            ХОЧУ ГАРАНТИРОВАТЬ СВОЕ МЕСТО СЕЙЧАС!
          </button>
        )}
      </div>
    </div>
  )
}
