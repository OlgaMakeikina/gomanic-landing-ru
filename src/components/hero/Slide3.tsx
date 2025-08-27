import { SlideProps } from './types'
import HeroButton from './HeroButton'
import VipBadge from './VipBadge'
import BenefitItem from './BenefitItem'

export default function Slide3({ slideData, onButtonAction }: SlideProps) {
  return (
    <div className="animate-fade-in flex items-center justify-center min-h-screen py-20 lg:py-0">
      <div className="max-w-6xl w-full mx-auto px-0 lg:px-4">
        <div className="relative bg-black/30 rounded-none lg:rounded-2xl border-0 lg:border lg:border-white/30 p-4 lg:p-12 shadow-none lg:shadow-[0_32px_64px_rgba(0,0,0,0.3)] w-full">
          <div className="absolute inset-0 bg-gradient-to-br from-white/4 via-white/1 to-transparent rounded-none lg:rounded-2xl"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-black/5 via-transparent to-black/2 rounded-none lg:rounded-2xl"></div>
          
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start lg:items-center">
              
              <div className="text-center lg:text-left">
                <VipBadge text="Exclusivo com passe VIP" />
                
                <h2 style={{
                  fontFamily: 'DrukWideCyr-Super, Arial Black, Arial, sans-serif',
                  fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                  fontWeight: 'normal',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  lineHeight: '0.9',
                  color: '#FEFEFE',
                  textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                  marginBottom: '12px'
                }}>
                  {slideData.title}
                </h2>
                
                <p style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 'clamp(14px, 3vw, 18px)',
                  fontWeight: 500,
                  color: '#FEFEFE',
                  textShadow: '0 2px 10px rgba(0,0,0,0.4)',
                  marginBottom: '24px',
                  lineHeight: '1.4'
                }}>
                  {slideData.subtitle}
                </p>
                
                {/* Desktop buttons */}
                <div className="hidden lg:flex lg:flex-col lg:gap-4">
                  <HeroButton 
                    onClick={() => onButtonAction('scroll', 'agendamento')}
                    variant="primary"
                    className="w-full"
                  >
                    QUERO MEU PASSE VIP
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
                {/* Mobile - smaller spacing between bullets */}
                <div className="space-y-3 lg:space-y-8">
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
            
            {/* Mobile buttons - at the bottom */}
            <div className="lg:hidden mt-8 flex flex-col gap-3 items-center">
              <HeroButton 
                onClick={() => onButtonAction('scroll', 'agendamento')}
                variant="primary"
                className="text-sm px-6 py-2.5 min-w-[120px]"
              >
                QUERO MEU PASSE VIP
              </HeroButton>
              
              <HeroButton 
                onClick={() => onButtonAction('whatsapp')}
                variant="secondary"
                className="text-sm px-6 py-2.5 min-w-[120px]"
              >
                CONTATO DIRETO
              </HeroButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
