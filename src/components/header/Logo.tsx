import { LogoProps } from './types'

export default function Logo({ className = '' }: LogoProps) {
  return (
    <a href="#hero" className={`flex items-center hover:opacity-70 transition-opacity ${className}`}>
      <div className="hidden lg:flex items-center space-x-3">
        <span className="vogue-logo text-lg">GOMANIC</span>
        <div className="w-px h-4 bg-[#444e55]"></div>
        <span className="vogue-logo text-lg">UNHAS 5 ESTRELAS</span>
      </div>
      
      <div className="flex lg:hidden flex-col items-start">
        <span className="vogue-logo text-sm leading-none" style={{color: '#444e55'}}>GOMANIC</span>
        <span className="vogue-logo text-xs leading-none opacity-80" style={{color: '#444e55'}}>UNHAS 5 ESTRELAS</span>
      </div>
    </a>
  )
}
