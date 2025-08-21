import { SlideProps } from './types'
import HeroButton from './HeroButton'
import VipBadge from './VipBadge'
import BenefitItem from './BenefitItem'

export default function Slide3({ slideData, onButtonAction }: SlideProps) {
  return (
    <div className="animate-fade-in flex items-center justify-center min-h-screen py-20 lg:py-0">
      <div className="max-w-6xl w-full mx-auto px-4">
        <div className="relative bg-black/30 rounded-xl lg:rounded-2xl border border-white/30 p-6 lg:p-12 shadow-[0_32px_64px_rgba(0,0,0,0.3)]">
          <div className="absolute inset-0 bg-gradient-to-br from-white/4 via-white/1 to-transparent rounded-xl lg:rounded-2xl"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-black/5 via-transparent to-black/2 rounded-xl lg:rounded-2xl"></div>
          
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
              
              <div className="text-center lg:text-left">
                <VipBadge text="EXCLUSIVO VIP" />
                
                <h1 style={{
                  fontFamily: 'Horizon, Arial, sans-serif',
                  fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                  fontWeight: 'normal',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  lineHeight: '0.9',
                  color: '#FEFEFE',
                  textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                  marginBottom: '12px'
                }}>
                  {slideData.title}
                </h1>
                
                <p style={{
                  fontFamily: 'Garet, sans-serif',
                  fontSize: 'clamp(14px, 3vw, 18px)',
                  fontWeight: 500,
                  color: '#FEFEFE',
                  textShadow: '0 2px 10px rgba(0,0,0,0.4)',
                  marginBottom: '24px',
                  lineHeight: '1.4'
                }}>
                  {slideData.subtitle}
                </p>
                
                <div className="flex flex-col gap-3 lg:gap-4">
                  <HeroButton 
                    onClick={() => onButtonAction('scroll', 'agendamento')}
                    variant="primary"
                    className="w-full"
                  >
                    QUERO SER VIP
                  </HeroButton>
                  
                  <HeroButton 
                    onClick={() => onButtonAction('whatsapp')}
                    variant="secondary"
                    className="w-full"
                  >
                    CONTATO DIRETO
                  </HeroButton>
                </div>
              </div>

              <div className="text-left">
                <div className="space-y-6 lg:space-y-8">
                  {slideData.benefits?.map((benefit, index) => (
                    <BenefitItem 
                      key={index}
                      benefit={benefit}
                      isLast={index === slideData.benefits!.length - 1}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
