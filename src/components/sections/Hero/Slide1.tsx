import { SlideProps } from './types'
import HeroButton from './HeroButton'
import HeroTitle from './HeroTitle'
import { createDikidiLink } from '@/utils/dikidi-tracking'
import { MobileHidden } from '@/components/common'

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
            
            {/* Single booking button - Desktop only */}
            <MobileHidden>
              <div className="flex justify-center">
                <a
                  href="https://dikidi.net/1921931?p=0.pi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="max-w-[240px] block"
                  onClick={createDikidiLink("ЗАБРОНИРОВАТЬ МЕСТО", "Hero Slide 1 Desktop")}
                >
                  <HeroButton 
                    onClick={() => {}}
                    variant="secondary"
                    className="w-full"
                  >
                    ЗАБРОНИРОВАТЬ МЕСТО
                  </HeroButton>
                </a>
              </div>
            </MobileHidden>
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
        </div>
      </div>
    </div>
  )
}
