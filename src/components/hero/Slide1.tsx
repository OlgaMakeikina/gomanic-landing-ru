import { SlideProps } from './types'
import HeroButton from './HeroButton'
import HeroTitle from './HeroTitle'

export default function Slide1({ slideData, onButtonAction }: SlideProps) {
  return (
    <div className="animate-fade-in flex items-center justify-center min-h-screen py-20 lg:py-0">
      <div className="max-w-4xl mx-auto text-center">
        <HeroTitle 
          title={slideData.title}
          subtitle={slideData.subtitle}
          content={slideData.content}
        />
        
        <div className="flex flex-col gap-4 justify-center items-center px-4">
          <HeroButton 
            onClick={() => onButtonAction('scroll', 'agendamento')}
            variant="primary"
          >
            QUERO SER VIP
          </HeroButton>
          
          <HeroButton 
            onClick={() => onButtonAction('next')}
            variant="secondary"
          >
            SABER MAIS
          </HeroButton>
        </div>
      </div>
      </div>
    )
}
