'use client'

import { useCountdown } from '@/hooks/useCountdown'

export default function CountdownTimer() {
  const { time, mounted } = useCountdown()

  if (!mounted) {
    return (
      <div className="grid grid-cols-4 gap-2 lg:gap-4 max-w-xs lg:max-w-md mx-auto">
        {[...Array(4)].map((_, i) => (
          <div 
            key={i} 
            style={{
              background: 'linear-gradient(135deg, rgba(254, 254, 254, 0.25) 0%, rgba(253, 255, 254, 0.2) 100%)',
              backdropFilter: 'blur(15px)',
              WebkitBackdropFilter: 'blur(15px)',
              border: '1px solid rgba(254, 254, 254, 0.3)',
              borderRadius: '8px',
              padding: '0.5rem lg:0.75rem',
              textAlign: 'center' as const,
              color: '#FEFEFE',
              boxShadow: '0 4px 16px rgba(254, 254, 254, 0.1)'
            }}
          >
            <div className="text-lg lg:text-xl font-bold">--</div>
            <div className="text-xs">--</div>
          </div>
        ))}
      </div>
    )
  }

  const timeUnits = [
    { value: time.days.toString().padStart(2, '0'), label: 'ДНИ' },
    { value: time.hours.toString().padStart(2, '0'), label: 'Ч' },
    { value: time.minutes.toString().padStart(2, '0'), label: 'МИН' },
    { value: time.seconds.toString().padStart(2, '0'), label: 'СЕК' }
  ]

  return (
    <div className="grid grid-cols-4 gap-2 lg:gap-4 max-w-xs lg:max-w-md mx-auto">
      {timeUnits.map((unit, i) => (
        <div 
          key={i} 
          style={{
            background: 'linear-gradient(135deg, rgba(254, 254, 254, 0.25) 0%, rgba(253, 255, 254, 0.2) 100%)',
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)',
            border: '1px solid rgba(254, 254, 254, 0.3)',
            borderRadius: '8px',
            padding: '0.5rem',
            textAlign: 'center' as const,
            color: '#FEFEFE',
            boxShadow: '0 4px 16px rgba(254, 254, 254, 0.1)'
          }}
          className="lg:p-3"
        >
          <div className="text-lg lg:text-xl font-bold">{unit.value}</div>
          <div className="text-xs">{unit.label}</div>
        </div>
      ))}
    </div>
  )
}
