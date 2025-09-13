'use client'

import { useState, useEffect } from 'react'
import { MasterConfig } from '@/types/master'
import { useCountdown } from '@/hooks/useCountdown'
import { HorizonText } from '@/components/ui'

interface VipExclusivoProps {
  masterData?: MasterConfig | null;
}

interface VipCardProps {
  title: string
  description: string
  delay: number
}

function VipCard({ title, description, delay }: VipCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div 
      className={`vip-glass-card transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{
        background: 'linear-gradient(135deg, rgba(254, 254, 254, 0.95) 0%, rgba(253, 255, 254, 0.9) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(254, 254, 254, 0.3)',
        borderRadius: '16px',
        padding: '1.5rem',
        textAlign: 'center' as const,
        boxShadow: '0 8px 32px rgba(254, 254, 254, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
        position: 'relative' as const,
        overflow: 'hidden' as const,
        minHeight: '120px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, rgba(254, 254, 254, 0.1), transparent)',
          pointerEvents: 'none'
        }}
      />
      
      <h3 className="vogue-caption relative z-10" style={{
        color: '#444f55', 
        fontSize: '14px',
        fontWeight: '700',
        letterSpacing: '0.05em',
        lineHeight: '1.3',
        wordBreak: 'break-word',
        hyphens: 'auto'
      }}>
        {title}
      </h3>
      {description && (
        <p className="vogue-body relative z-10 mt-2" style={{color: '#444f55', lineHeight: '1.4'}}>
          <strong>{description}</strong>
        </p>
      )}
    </div>
  )
}

function CountdownTimer() {
  const { time, mounted } = useCountdown()

  // Prevent hydration mismatch by showing placeholder until mounted
  if (!mounted) {
    return (
      <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-6">
        {[...Array(4)].map((_, i) => (
          <div 
            key={i} 
            style={{
              background: 'linear-gradient(135deg, rgba(254, 254, 254, 0.25) 0%, rgba(253, 255, 254, 0.2) 100%)',
              backdropFilter: 'blur(15px)',
              WebkitBackdropFilter: 'blur(15px)',
              border: '1px solid rgba(254, 254, 254, 0.3)',
              borderRadius: '12px',
              padding: '0.75rem',
              textAlign: 'center' as const,
              color: '#FEFEFE',
              boxShadow: '0 4px 16px rgba(254, 254, 254, 0.1)'
            }}
          >
            <div className="text-xl font-bold">--</div>
            <div className="text-xs">--</div>
          </div>
        ))}
      </div>
    )
  }

  const timeUnits = [
    { value: time.days.toString().padStart(2, '0'), label: 'DIAS' },
    { value: time.hours.toString().padStart(2, '0'), label: 'HRS' },
    { value: time.minutes.toString().padStart(2, '0'), label: 'MIN' },
    { value: time.seconds.toString().padStart(2, '0'), label: 'SEG' }
  ]

  return (
    <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-6">
      {timeUnits.map((unit, i) => (
        <div 
          key={i} 
          style={{
            background: 'linear-gradient(135deg, rgba(254, 254, 254, 0.25) 0%, rgba(253, 255, 254, 0.2) 100%)',
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)',
            border: '1px solid rgba(254, 254, 254, 0.3)',
            borderRadius: '12px',
            padding: '0.75rem',
            textAlign: 'center' as const,
            color: '#FEFEFE',
            boxShadow: '0 4px 16px rgba(254, 254, 254, 0.1)'
          }}
        >
          <div className="text-xl font-bold">{unit.value}</div>
          <div className="text-xs">{unit.label}</div>
        </div>
      ))}
    </div>
  )
}

export default function VipExclusivo({ masterData }: VipExclusivoProps) {
  const [isCtaVisible, setIsCtaVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsCtaVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  const vipCards = [
    {
      title: 'СЕРТИФИЦИРОВАННЫЙ МАСТЕР',
      description: '',
      delay: 200
    },
    {
      title: 'УНИКАЛЬНАЯ ЦЕНА',
      description: '',
      delay: 400
    },
    {
      title: 'ПОДАРОК-СЮРПРИЗ ПРИ ПЕРВОМ ВИЗИТЕ',
      description: '',
      delay: 600
    }
  ]

  return (
    <section id="vip-exclusivo" className="vogue-section relative overflow-hidden" 
             style={{
               backgroundColor: '#3b3b39',
               color: '#FEFEFE'
             }}
             aria-labelledby="vip-heading">
      
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(68, 79, 85, 0.15) 0%, transparent 30%, rgba(254, 254, 254, 0.03) 50%, transparent 70%, rgba(68, 79, 85, 0.1) 100%)',
          pointerEvents: 'none'
        }}
      />

      <div className="vogue-container relative z-10">
        <div className="text-center mb-20">
          <div className="vogue-caption mb-4" 
               style={{
                 color: '#FEFEFE',
                 textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                 fontFamily: "Manrope, sans-serif", 
                 fontSize: 14, 
                 opacity: 0.85
               }}>
            ОГРАНИЧЕННЫЙ ДОСТУП
          </div>
          <HorizonText as="h2" id="vip-heading" className="vogue-subhead mb-8" 
              style={{
                color: '#FEFEFE'
              }}>
            VIP-ПРОПУСК = ЭКСКЛЮЗИВНЫЙ КЛУБ
          </HorizonText>
          <div className="vogue-divider mx-auto mb-8" 
               style={{
                 backgroundColor: '#3b3b39',
                 boxShadow: '0 2px 8px rgba(59, 59, 57, 0.5)'
               }}></div>
          <p className="vogue-body max-w-3xl mx-auto text-lg" style={{color: '#FEFEFE'}}>
            Это не просто акция. Это <strong style={{color: '#FEFEFE'}}>эксклюзивный доступ</strong> для избранных особых людей
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block text-white px-8 py-4 rounded-lg transform rotate-1" 
                 style={{
                   background: 'linear-gradient(135deg, rgba(254, 254, 254, 0.3) 0%, rgba(253, 255, 254, 0.25) 100%)',
                   backdropFilter: 'blur(20px)',
                   WebkitBackdropFilter: 'blur(20px)',
                   border: '1px solid rgba(254, 254, 254, 0.4)',
                   boxShadow: '0 8px 32px rgba(254, 254, 254, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)'
                 }}>
              <div className="text-2xl font-bold" style={{color: '#FEFEFE'}}>ОСТАЛОСЬ ТОЛЬКО 3 МЕСТА</div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {vipCards.map((card, index) => (
              <VipCard key={index} {...card} />
            ))}
          </div>
          
          <div 
            className={`relative backdrop-blur-xl rounded-2xl border overflow-hidden transition-all duration-1000 transform ${
              isCtaVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
            }`}
            style={{ 
              background: 'linear-gradient(135deg, rgba(254, 254, 254, 0.2) 0%, rgba(253, 255, 254, 0.15) 100%)', 
              borderColor: 'rgba(254, 254, 254, 0.3)', 
              boxShadow: '0 32px 64px rgba(254, 254, 254, 0.05), 0 8px 32px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(25px)',
              WebkitBackdropFilter: 'blur(25px)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-2xl" />
            <div className="absolute inset-0 bg-gradient-to-tl from-black/10 via-transparent to-black/5 rounded-2xl" />
            
            <div className="relative z-10 p-8 text-center">
            <h3 className="text-2xl font-bold mb-4" style={{color: '#FEFEFE'}}>
              ЭТА ВОЗМОЖНОСТЬ ЗАКАНЧИВАЕТСЯ ЧЕРЕЗ:
            </h3>
            
            <CountdownTimer />
            
            <p className="vogue-body text-lg mb-6" style={{color: '#FEFEFE', fontWeight: 600}}>
              После этого вернется обычная цена (без скидки)
            </p>
            
            <button 
              onClick={() => document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-4 transition-all duration-300 text-lg"
              style={{
                background: 'linear-gradient(135deg, rgba(254, 254, 254, 0.4) 0%, rgba(253, 255, 254, 0.35) 100%)',
                backdropFilter: 'blur(15px)',
                WebkitBackdropFilter: 'blur(15px)',
                color: '#FEFEFE',
                border: '1px solid rgba(254, 254, 254, 0.5)',
                borderRadius: '12px',
                fontFamily: 'Manrope, sans-serif',
                fontSize: '18px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(254, 254, 254, 0.2), 0 2px 8px rgba(0, 0, 0, 0.1)',
                transform: 'scale(1.02)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(254, 254, 254, 0.5) 0%, rgba(253, 255, 254, 0.45) 100%)'
                e.currentTarget.style.color = '#FEFEFE'
                e.currentTarget.style.border = '2px solid rgba(254, 254, 254, 0.7)'
                e.currentTarget.style.transform = 'scale(1.05)'
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(254, 254, 254, 0.3), 0 4px 12px rgba(0, 0, 0, 0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(254, 254, 254, 0.4) 0%, rgba(253, 255, 254, 0.35) 100%)'
                e.currentTarget.style.color = '#FEFEFE'
                e.currentTarget.style.border = '1px solid rgba(254, 254, 254, 0.5)'
                e.currentTarget.style.transform = 'scale(1.02)'
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(254, 254, 254, 0.2), 0 2px 8px rgba(0, 0, 0, 0.1)'
              }}
            >
              ХОЧУ ГАРАНТИРОВАТЬ СВОЕ МЕСТО СЕЙЧАС!
            </button>
           {/*     <p className="text-sm mt-4" style={{color: '#FEFEFE', opacity: 0.9}}>
              Предоплата на 100% безопасна. Если не сможете прийти, перенесем встречу или вернем деньги.
            </p>
           */} 
       
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .vip-glass-card:hover {
          transform: translateY(-4px) !important;
          box-shadow: 0 12px 40px rgba(254, 254, 254, 0.2), 0 4px 12px rgba(0, 0, 0, 0.1) !important;
          background: linear-gradient(135deg, rgba(254, 254, 254, 0.98) 0%, rgba(253, 255, 254, 0.95) 100%) !important;
          border: 1px solid rgba(254, 254, 254, 0.5) !important;
          backdrop-filter: blur(25px) !important;
        }
      `}</style>
    </section>
  )
}
