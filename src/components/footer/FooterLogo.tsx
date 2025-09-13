import { FooterLogoProps } from './types'

export default function FooterLogo({ onCtaClick }: FooterLogoProps) {
  return (
    <div className="lg:col-span-4 text-center flex flex-col min-h-[200px]">
      <div className="flex items-center justify-center space-x-3 mb-8">
        <span className="text-xl uppercase tracking-wider font-bold" style={{color: '#FEFEFE'}}>GOMANIC</span>
      </div>
      <div className="w-16 h-px mb-8 mx-auto" style={{backgroundColor: '#FEFEFE', opacity: 0.3}}></div>
      <p className="text-sm leading-relaxed mb-8" style={{color: '#FEFEFE'}}>
        {/* Профессиональный маникюр с новыми специалистами за полцены. */}
        GoManic — маркетинговая платформа. Услугу оказывает независимый мастер. Оплата и ответственность за качество услуги — у мастера. Изображения могут носить иллюстративный характер. GoManic предоставляет клиентам поддержку по методике обучения: мы можем оценить работу мастера и дать рекомендации.
      </p>
      
     
    </div>
  )
}
