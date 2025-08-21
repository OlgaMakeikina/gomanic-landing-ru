import { SlideProps } from './types'
import HeroButton from './HeroButton'
import VipBadge from './VipBadge'
import ServiceItem from './ServiceItem'

export default function Slide2({ slideData, onButtonAction }: SlideProps) {
  return (
    <div className="animate-fade-in flex items-center justify-center min-h-screen py-16 lg:py-0">
      <div className="max-w-6xl w-full mx-auto px-2 lg:px-4">
        <div className="relative bg-black/30 rounded-xl lg:rounded-2xl border border-white/30 p-4 lg:p-12 shadow-[0_32px_64px_rgba(0,0,0,0.3)] mx-2 lg:mx-0">
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start lg:items-center">
              
              <div className="text-center lg:text-left">
                <VipBadge text="EXCLUSIVO VIP" />
                
                <h1 style={{
                  fontFamily: 'Horizon, Arial, sans-serif',
                  fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
                  fontWeight: 'normal',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  lineHeight: '0.9',
                  color: '#FEFEFE',
                  textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                  marginBottom: '8px'
                }}>
                  {slideData.title}
                </h1>
                
                <p style={{
                  fontFamily: 'Garet, sans-serif',
                  fontSize: 'clamp(12px, 2.5vw, 18px)',
                  fontWeight: 500,
                  color: '#FEFEFE',
                  textShadow: '0 2px 10px rgba(0,0,0,0.4)',
                  marginBottom: '16px',
                  lineHeight: '1.4'
                }}>
                  {slideData.subtitle}
                </p>
                
                <div className="flex justify-center lg:justify-start">
                  <HeroButton 
                    onClick={() => onButtonAction('scroll', 'agendamento')}
                    variant="primary"
                    className="min-w-[140px]"
                  >
                    AGENDAR
                  </HeroButton>
                </div>
              </div>

              <div className="text-left">
                <div className="space-y-4 lg:space-y-8">
                  {slideData.services?.map((service, index) => (
                    <ServiceItem 
                      key={index}
                      service={service}
                      isLast={index === slideData.services!.length - 1}
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
