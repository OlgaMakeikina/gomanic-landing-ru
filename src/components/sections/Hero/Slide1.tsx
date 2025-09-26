import { SlideProps } from './types'
import HeroButton from './HeroButton'
import HeroTitle from './HeroTitle'
import { createDikidiLink } from '@/utils/dikidi-tracking'

export default function Slide1({ slideData, masterData, onButtonAction }: SlideProps) {
  return (
    <div className="animate-fade-in flex items-center justify-center min-h-screen py-20 lg:py-0">
      <div className="max-w-6xl mx-auto">
        {/* Desktop layout */}
        <div className="hidden lg:block">
          <div className="text-center">
            <HeroTitle 
              title={slideData.title}
              subtitle={slideData.subtitle}
              content={slideData.content}
              align="center"
              showLocationInfo={false}
            />
            
            {/* Buttons in one row */}
            <div className="flex gap-4 justify-center items-center">
              <a
                href="https://dikidi.net/1921931?p=0.pi"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-105 touch-manipulation flex-1 max-w-[240px]"
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
                onClick={createDikidiLink("ЗАБРОНИРОВАТЬ МЕСТО", "Hero Slide 1 Desktop")}
              >
                ЗАБРОНИРОВАТЬ МЕСТО
              </a>
              
              <HeroButton 
                onClick={() => onButtonAction('scroll', 'master-intro')}
                variant="secondary"
                className="flex-1 max-w-[240px]"
              >
                О МАСТЕРЕ
              </HeroButton>
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden text-center">
          <HeroTitle 
            title={slideData.title}
            subtitle={slideData.subtitle}
            content={slideData.content}
            showLocationInfo={false}
          />
          
          {/* Buttons in one row for mobile */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <a
              href="https://dikidi.net/1921931?p=0.pi"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-105 touch-manipulation w-full sm:flex-1 max-w-[240px]"
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
              onClick={createDikidiLink("ЗАБРОНИРОВАТЬ МЕСТО", "Hero Slide 1 Mobile")}
            >
              ЗАБРОНИРОВАТЬ МЕСТО
            </a>
            
            <HeroButton 
              onClick={() => onButtonAction('scroll', 'master-intro')}
              variant="secondary"
              className="w-full sm:flex-1 max-w-[240px]"
            >
              О МАСТЕРЕ
            </HeroButton>
          </div>
        </div>
      </div>
    </div>
  )
}
