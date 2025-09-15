'use client'

import { MasterConfig } from '@/types/master'
import { HorizonText } from '@/components/common/ui'
import VipCard from './VipCard'
import VipCallToAction from './VipCallToAction'
import { vipCardsData } from './vipData'

interface VipExclusivoProps {
  masterData?: MasterConfig | null;
}

export default function VipExclusivo({ masterData }: VipExclusivoProps) {
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
          <HorizonText as="h2" id="vip-heading" className="vogue-subhead mb-8" 
              style={{
                color: '#FEFEFE'
              }}>
            КОЛИЧЕСТВО МЕСТ ОГРАНИЧЕНО!
          </HorizonText>
          <div className="vogue-divider mx-auto mb-8" 
               style={{
                 backgroundColor: '#3b3b39',
                 boxShadow: '0 2px 8px rgba(59, 59, 57, 0.5)'
               }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-2xl font-bold" style={{color: '#FEFEFE', fontFamily: 'Manrope, sans-serif'}}>
              ТОЛЬКО 5 МЕСТ В НЕДЕЛЮ ПО ЭТОЙ ЦЕНЕ
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {vipCardsData.map((card, index) => (
              <VipCard key={index} {...card} />
            ))}
          </div>
          
          <VipCallToAction />
        </div>
      </div>

      <style jsx>{`
        .vip-glass-card:hover {
          transform: translateY(-4px) !important;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4), 0 4px 12px rgba(0, 0, 0, 0.3) !important;
          background: #505d63 !important;
        }
      `}</style>
    </section>
  )
}
