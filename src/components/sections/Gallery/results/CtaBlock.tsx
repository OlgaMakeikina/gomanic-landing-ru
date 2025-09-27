import { CtaBlockProps } from './types'
import { createDikidiLink } from '@/utils/dikidi-tracking'
import { MobileHidden } from '@/components/common'

export default function CtaBlock({ onCtaClick }: CtaBlockProps) {
  return (
    <div className="text-center">
      <div className="w-full relative backdrop-blur-[24px] rounded-lg border-2 border-white/20 bg-gradient-to-br from-[#444f55] to-[#444f55]/95 shadow-[0_32px_64px_rgba(68,79,85,0.4),0_8px_24px_rgba(0,0,0,0.2)] [box-shadow:inset_0_1px_0_rgba(255,255,255,0.1)] p-12">
        <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/3 to-transparent rounded-lg pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-black/20 via-transparent to-black/10 rounded-lg pointer-events-none"></div>
        
        <div className="relative z-10">
          <p className="text-[#FEFEFE] font-[Manrope] text-2xl tracking-[0.05em] font-normal leading-relaxed uppercase mb-6">
            <span className="font-normal">Запишитесь сейчас и</span><br />
            <span className="font-bold bg-[#3B3B3A] text-[#FEFEFE] py-3 px-5 rounded-lg inline-block shadow-[0_8px_24px_rgba(59,59,58,0.3)] border border-black/20">сэкономьте 50%</span>
          </p>
          
          <MobileHidden>
            <a
              href="https://dikidi.net/1921931?p=0.pi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-12 py-4 rounded-lg font-bold border-2 transition-all hover:opacity-90 hover:scale-105 uppercase tracking-wide whitespace-nowrap"
              style={{ 
                color: '#FEFEFE', 
                borderColor: '#FEFEFE',
                backgroundColor: 'transparent',
                fontFamily: 'Manrope, sans-serif',
                fontSize: '16px',
                letterSpacing: '0.1em',
                textDecoration: 'none'
              }}
              onClick={createDikidiLink("Хочу забронировать место сейчас", "Gallery Portfolio Section")}
            >
              Хочу забронировать место сейчас
            </a>
          </MobileHidden>
        </div>
      </div>
    </div>
  )
}
