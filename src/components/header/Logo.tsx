import { LogoProps } from './types'
import { HorizonText } from '@/components/ui'

export default function Logo({ className = '' }: LogoProps) {
  return (
    <a 
      href="#hero" 
      className={`flex items-center hover:opacity-70 transition-opacity ${className}`}
      aria-label="Gomanic, вернуться на главную"
      title="Вернуться на главную страницу"
    >
      <div className="hidden lg:flex items-center">
        <HorizonText as="span" className="vogue-logo text-lg" aria-hidden="true">GOMANIC</HorizonText>
      </div>
      
      <div className="flex lg:hidden flex-col items-start">
        <HorizonText as="span" className="vogue-logo text-sm leading-none" style={{color: '#444e55'}} aria-hidden="true">GOMANIC</HorizonText>
      </div>
    </a>
  )
}
