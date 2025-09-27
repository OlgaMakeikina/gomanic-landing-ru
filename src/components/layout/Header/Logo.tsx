import { LogoProps } from './types'
import { HorizonText } from '@/components/common/ui'
import { useScrollPosition } from '@/hooks'

export default function Logo({ className = '' }: LogoProps) {
  const { isScrolled } = useScrollPosition({ threshold: 50 })

  return (
    <a 
      href="#hero" 
      className={`flex items-center hover:opacity-70 transition-all duration-300 ${className}`}
      aria-label="Gomanic, вернуться на главную"
      title="Вернуться на главную страницу"
    >
      <div className="hidden lg:flex items-center">
        <HorizonText 
          as="span" 
          className="vogue-logo transition-all duration-300" 
          style={{fontSize: '24px'}} 
          aria-hidden="true"
        >
          GOMANIC
        </HorizonText>
      </div>
      
      <div className="flex lg:hidden flex-col items-start">
        <HorizonText 
          as="span" 
          className="vogue-logo leading-none transition-all duration-300" 
          style={{
            color: '#444e55', 
            fontSize: isScrolled ? '18px' : '24px',
            transform: isScrolled ? 'scale(0.8)' : 'scale(1)'
          }} 
          aria-hidden="true"
        >
          GOMANIC
        </HorizonText>
      </div>
    </a>
  )
}
