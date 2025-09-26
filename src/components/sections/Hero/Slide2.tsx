import { SlideProps } from './types'
import HeroButton from './HeroButton'
import VipBadge from './VipBadge'
import ServiceItem from './ServiceItem'
import { createDikidiLink } from '@/utils/dikidi-tracking'

export default function Slide2RU({ slideData, masterData, onButtonAction }: SlideProps) {
  return (
    <div className="animate-fade-in flex items-center justify-center min-h-screen py-20 lg:py-0">
      <div className="max-w-6xl w-full mx-auto px-0 lg:px-4">
        <div className="relative bg-black/30 rounded-none lg:rounded-2xl border-0 lg:border lg:border-white/30 p-6 lg:p-12 shadow-none lg:shadow-[0_32px_64px_rgba(0,0,0,0.3)] mx-0 lg:mx-0 w-full min-h-[480px] lg:min-h-[520px] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-white/4 via-white/1 to-transparent rounded-none lg:rounded-2xl"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-black/5 via-transparent to-black/2 rounded-none lg:rounded-2xl"></div>
          
          <div className="relative z-10 w-full">
            <div className="w-full">
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start lg:items-center">
              
                <div className="text-center lg:text-left">

                  
                  <h2 style={{
                    fontFamily: 'DrukWideCyr-Super, Arial Black, Arial, sans-serif',
                    fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                    fontWeight: 'normal',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    lineHeight: '0.9',
                    color: '#FEFEFE',
                    textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                    marginBottom: '50px'
                  }}>
                    {slideData.title}
                  </h2>
                  
                  <p style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: 'clamp(12px, 2.5vw, 18px)',
                    fontWeight: 500,
                    color: '#FEFEFE',
                    textShadow: '0 2px 10px rgba(0,0,0,0.4)',
                    marginBottom: '16px',
                    lineHeight: '1.4'
                  }}>
                    {slideData.subtitle}
                  </p>
                  
                  <div className="hidden lg:flex lg:flex-col lg:gap-4 lg:justify-start lg:items-start">
                    <a
                      href="https://dikidi.net/1899279?p=3.pi-po-sm-ssm&o=1&m=4107990"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-all duration-300 hover:scale-105 touch-manipulation w-full max-w-sm"
                      style={{
                        backgroundColor: '#3B3B3A',
                        color: '#FEFEFE',
                        textDecoration: 'none',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: '14px',
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        padding: '16px 24px',
                        borderRadius: '8px',
                        textAlign: 'center',
                        display: 'block',
                        minHeight: '48px',
                        lineHeight: '16px'
                      }}
                      onClick={createDikidiLink("ХОЧУ ЗАПИСАТЬСЯ", "Hero Slide 2 Desktop")}
                    >
                      ХОЧУ ЗАПИСАТЬСЯ
                    </a>
                    <HeroButton 
                      onClick={() => onButtonAction('scroll', 'portfolio')}
                      variant="secondary"
                      className="w-full max-w-sm"
                    >
                      СМОТРЕТЬ ПОРТФОЛИО
                    </HeroButton>
                  </div>
                </div>

                <div className="text-center">
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
              
              <div className="lg:hidden mt-8 flex flex-col gap-3 items-center">
                <a
                  href="https://dikidi.net/1899279?p=3.pi-po-sm-ssm&o=1&m=4107990"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-105 touch-manipulation w-full max-w-sm"
                  style={{
                    backgroundColor: '#3B3B3A',
                    color: '#FEFEFE',
                    textDecoration: 'none',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '14px',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    padding: '16px 24px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    display: 'block',
                    minHeight: '48px',
                    lineHeight: '16px'
                  }}
                  onClick={createDikidiLink("ХОЧУ ЗАПИСАТЬСЯ", "Hero Slide 2 Mobile")}
                >
                  ХОЧУ ЗАПИСАТЬСЯ
                </a>
                <HeroButton 
                  onClick={() => onButtonAction('scroll', 'portfolio')}
                  variant="secondary"
                  className="w-full max-w-sm"
                >
                  СМОТРЕТЬ ПОРТФОЛИО
                </HeroButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
