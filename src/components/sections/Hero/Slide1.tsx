import { SlideProps } from './types'
import HeroButton from './HeroButton'
import HeroTitle from './HeroTitle'
import BookingButton from '@/components/common/BookingButton'

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
              <HeroButton 
                onClick={() => onButtonAction('scroll', 'master-intro')}
                variant="primary"
              >
                О МАСТЕРЕ
              </HeroButton>
              
              <BookingButton
                text="ЗАБРОНИРОВАТЬ МЕСТО"
                variant="secondary"
              />
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
            <HeroButton 
              onClick={() => onButtonAction('scroll', 'master-intro')}
              variant="primary"
            >
              О МАСТЕРЕ
            </HeroButton>
            
            <BookingButton
              text="ЗАБРОНИРОВАТЬ МЕСТО"
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
