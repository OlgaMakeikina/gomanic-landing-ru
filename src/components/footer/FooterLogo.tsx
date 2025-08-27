import { FooterLogoProps } from './types'

export default function FooterLogo({ onCtaClick }: FooterLogoProps) {
  return (
    <div className="lg:col-span-4 text-center flex flex-col min-h-[200px]">
      <div className="flex items-center justify-center space-x-3 mb-8">
        <span className="text-xs uppercase tracking-wider font-bold" style={{color: '#FEFEFE'}}>GOMANIC</span>
        <div className="w-px h-4 bg-[#FEFEFE] opacity-70"></div>
        <span className="text-xs uppercase tracking-wider font-bold" style={{color: '#FEFEFE'}}>БРАЗИЛИЯ</span>
      </div>
      <div className="w-16 h-px mb-8 mx-auto" style={{backgroundColor: '#FEFEFE', opacity: 0.3}}></div>
      <p className="text-sm leading-relaxed mb-8" style={{color: '#FEFEFE'}}>
        Профессиональный маникюр с новыми специалистами за полцены.
      </p>
      
      <div className="mt-auto">
        <button 
          onClick={onCtaClick}
          className="w-60 mx-auto px-6 py-3 transition-all duration-300 rounded-lg transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
          style={{
            backgroundColor: 'rgba(254, 254, 254, 0.9)',
            color: '#444e55',
            border: '1px solid rgba(254, 254, 254, 0.3)',
            fontFamily: 'Manrope, sans-serif',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(254, 254, 254, 0.1)'
            e.currentTarget.style.color = '#FEFEFE'
            e.currentTarget.style.border = '1px solid rgba(254, 254, 254, 0.5)'
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(254, 254, 254, 0.15)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(254, 254, 254, 0.9)'
            e.currentTarget.style.color = '#444e55'
            e.currentTarget.style.border = '1px solid rgba(254, 254, 254, 0.3)'
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)'
          }}
        >
          ХОЧУ СТАТЬ VIP СЕЙЧАС
        </button>
      </div>
    </div>
  )
}
