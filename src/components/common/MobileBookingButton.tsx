'use client'

import { createDikidiLink } from '@/utils/dikidi-tracking'

interface MobileBookingButtonProps {
  bookingUrl?: string
  text?: string
  className?: string
}

export default function MobileBookingButton({ 
  bookingUrl = "https://dikidi.net/1921931?p=0.pi",
  text = "ЗАПИСАТЬСЯ СЕЙЧАС",
  className = ''
}: MobileBookingButtonProps) {
  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden ${className}`}
      style={{
        background: 'rgba(68, 79, 85, 0.9)',
        paddingBottom: 'env(safe-area-inset-bottom, 20px)',
        paddingTop: '12px'
      }}
    >
      <div className="px-4 pb-4">
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center transition-all duration-300 active:scale-95 touch-manipulation"
          style={{
            backgroundColor: 'transparent',
            color: '#FEFEFE',
            textDecoration: 'none',
            fontFamily: 'Manrope, sans-serif',
            fontSize: '16px',
            fontWeight: 700,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            padding: '18px 24px',
            borderRadius: '12px',
            border: '2px solid #FEFEFE',
            margin: '0 auto',
            textAlign: 'center'
          }}
          onClick={createDikidiLink(text, "Mobile Fixed Button")}
        >
          {text}
        </a>
      </div>
    </div>
  )
}
