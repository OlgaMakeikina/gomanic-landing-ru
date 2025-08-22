'use client'

import { useState, useEffect } from 'react'

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
        background: 'linear-gradient(135deg, rgba(254, 254, 254, 0.1) 0%, rgba(254, 254, 254, 0.05) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(254, 254, 254, 0.2)',
        borderRadius: '16px',
        padding: '2rem',
        textAlign: 'center' as const,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(254, 254, 254, 0.1)',
        position: 'relative' as const,
        overflow: 'hidden' as const
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, rgba(68, 78, 85, 0.05), transparent)',
          pointerEvents: 'none'
        }}
      />
      
      <h3 className="vogue-caption mb-4 relative z-10" style={{color: '#FEFEFE', fontSize: '16px'}}>
        {title}
      </h3>
      <p className="vogue-body relative z-10" style={{color: '#FEFEFE', lineHeight: '1.6'}}>
        <strong>{description}</strong>
      </p>
    </div>
  )
}

function CountdownTimer() {
  const [time, setTime] = useState({
    days: 5,
    hours: 14,
    minutes: 23,
    seconds: 47
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

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
            background: 'linear-gradient(135deg, rgba(59, 59, 58, 0.8) 0%, rgba(59, 59, 58, 0.6) 100%)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(254, 254, 254, 0.1)',
            borderRadius: '12px',
            padding: '0.75rem',
            textAlign: 'center' as const,
            color: '#FEFEFE'
          }}
        >
          <div className="text-xl font-bold">{unit.value}</div>
          <div className="text-xs">{unit.label}</div>
        </div>
      ))}
    </div>
  )
}

export default function VipExclusivo() {
  const [isCtaVisible, setIsCtaVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsCtaVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  const vipCards = [
    {
      title: 'CLUBE LIMITADO',
      description: 'Somente 30 clientes por mês podem ter Passe VIP.',
      delay: 200
    },
    {
      title: 'PREÇO ÚNICO',
      description: 'O preço nunca mais se repete depois que as vagas esgotarem.',
      delay: 400
    },
    {
      title: 'BRINDE SURPRESA',
      description: 'VIPs recebem um brinde surpresa na primeira visita.',
      delay: 600
    }
  ]

  return (
    <section id="vip-exclusivo" className="vogue-section relative overflow-hidden" 
             style={{backgroundColor: '#3B3B3A', color: '#FEFEFE'}}>
      
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(68, 78, 85, 0.1) 0%, transparent 50%, rgba(68, 78, 85, 0.05) 100%)',
          pointerEvents: 'none'
        }}
      />

      <div className="vogue-container relative z-10">
        <div className="text-center mb-20">
          <div className="vogue-caption mb-4" 
               style={{
                 color: '#444e55',
                 textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
               }}>
            ACESSO LIMITADO
          </div>
          <h2 className="vogue-subhead mb-8" 
              style={{
                color: '#FEFEFE',
                textShadow: '0 4px 8px rgba(0, 0, 0, 0.4)'
              }}>
            PASSE VIP = CLUBE EXCLUSIVO
          </h2>
          <div className="vogue-divider mx-auto mb-8" 
               style={{
                 backgroundColor: '#444e55',
                 boxShadow: '0 2px 8px rgba(68, 78, 85, 0.5)'
               }}></div>
          <p className="vogue-body max-w-3xl mx-auto text-lg" style={{color: '#FEFEFE'}}>
            Não é uma simples promoção. É um <strong style={{color: '#444e55'}}>acesso exclusivo</strong> para poucas pessoas especiais
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block text-white px-8 py-4 rounded-lg transform rotate-1" 
                 style={{
                   background: 'linear-gradient(135deg, rgba(68, 78, 85, 0.9) 0%, rgba(68, 78, 85, 0.7) 100%)',
                   backdropFilter: 'blur(20px)',
                   WebkitBackdropFilter: 'blur(20px)',
                   border: '1px solid rgba(254, 254, 254, 0.2)',
                   boxShadow: '0 8px 32px rgba(68, 78, 85, 0.3), 0 2px 8px rgba(254, 254, 254, 0.1)'
                 }}>
              <div className="text-2xl font-bold">APENAS 3 VAGAS RESTANTES</div>
              <div className="text-sm mt-1">de 30 Passes VIP disponíveis este mês</div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {vipCards.map((card, index) => (
              <VipCard key={index} {...card} />
            ))}
          </div>
          
          <div 
            className={`transition-all duration-1000 transform ${
              isCtaVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
            }`}
            style={{
              background: 'linear-gradient(135deg, rgba(68, 78, 85, 0.8) 0%, rgba(68, 78, 85, 0.6) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '2px solid rgba(254, 254, 254, 0.2)',
              borderRadius: '20px',
              padding: '2rem',
              textAlign: 'center' as const,
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(254, 254, 254, 0.1)',
              position: 'relative' as const,
              overflow: 'hidden' as const
            }}
          >
            <h3 className="text-2xl font-bold mb-4 relative z-10" style={{color: '#FEFEFE'}}>
              ESTA OPORTUNIDADE ACABA EM:
            </h3>
            
            <CountdownTimer />
            
            <p className="vogue-body text-lg mb-6 relative z-10" style={{color: '#FEFEFE', fontWeight: 600}}>
              Depois disso, volta ao preço normal (sem desconto)
            </p>
            
            <button 
              onClick={() => document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative z-10 px-12 py-4 transition-all duration-300 text-lg"
              style={{
                background: 'linear-gradient(135deg, rgba(254, 254, 254, 0.9) 0%, rgba(254, 254, 254, 0.8) 100%)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                color: '#3B3B3A',
                border: '1px solid rgba(254, 254, 254, 0.3)',
                borderRadius: '12px',
                fontFamily: 'Garet, sans-serif',
                fontSize: '18px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(254, 254, 254, 0.5), 0 2px 8px rgba(0, 0, 0, 0.1)',
                transform: 'scale(1.02)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(254, 254, 254, 0.1) 0%, rgba(254, 254, 254, 0.05) 100%)'
                e.currentTarget.style.color = '#FEFEFE'
                e.currentTarget.style.border = '2px solid rgba(254, 254, 254, 0.5)'
                e.currentTarget.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(254, 254, 254, 0.9) 0%, rgba(254, 254, 254, 0.8) 100%)'
                e.currentTarget.style.color = '#3B3B3A'
                e.currentTarget.style.border = '1px solid rgba(254, 254, 254, 0.3)'
                e.currentTarget.style.transform = 'scale(1.02)'
              }}
            >
              QUERO MEU PASSE VIP AGORA!
            </button>
            
            <p className="text-sm mt-4 relative z-10" style={{color: '#FEFEFE', opacity: 0.9}}>
              Pagamento da entrada é 100% seguro. Se não puder comparecer, reagendamos ou devolvemos o valor.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .vip-glass-card:hover {
          transform: translateY(-4px) !important;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(254, 254, 254, 0.15) !important;
        }
      `}</style>
    </section>
  )
}
