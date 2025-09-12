import { MasterConfig } from '@/types/master'
import { HorizonText } from '@/components/ui';

interface SocialProofProps {
  masterData?: MasterConfig | null;
}

export default function SocialProof({ masterData }: SocialProofProps) {
  const COLORS = { dark: "#3B3B3A", gray: "#444e55", white: "#FEFEFE" }
  
  // Скриншоты настоящих отзывов
  const reviewScreenshots = [
    "/images/reviews/review1.png",
    "/images/reviews/review2.png", 
    "/images/reviews/review3.png"
  ]

  return (
    <section id="social" className="relative py-20" style={{ backgroundColor: COLORS.white }} aria-labelledby="social-heading">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="uppercase tracking-[0.22em] mb-3"
            style={{ color: COLORS.gray, fontFamily: "Manrope, sans-serif", fontSize: 14, opacity: 0.85 }}
          >
            ОТЗЫВЫ
          </div>

          <HorizonText 
            as="h2"
            id="social-heading"
            className="vogue-subhead mb-8"
            style={{color: COLORS.dark}}
          >
            ЧТО ГОВОРЯТ О МАСТЕРАХ GOMANIC
          </HorizonText>

          <p
            className="mx-auto max-w-2xl"
            style={{ color: COLORS.gray, fontFamily: "Manrope, sans-serif", fontSize: 16 }}
          >
            Реальные отзывы наших клиентов
          </p>
        </div>

        {/* Review Screenshots Grid */}
        <div className="flex flex-col items-center gap-8 max-w-2xl mx-auto">
          {reviewScreenshots.map((screenshot, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer w-full max-w-md"
              style={{
                background: 'rgba(59, 59, 58, 0.08)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(59, 59, 58, 0.15)',
                borderRadius: '16px',
                boxShadow: '0 20px 40px rgba(59, 59, 58, 0.1)',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 32px 64px rgba(59, 59, 58, 0.15)'
                e.currentTarget.style.borderColor = 'rgba(59, 59, 58, 0.25)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(59, 59, 58, 0.1)'
                e.currentTarget.style.borderColor = 'rgba(59, 59, 58, 0.15)'
              }}
            >
              {/* Glassmorphism gradients */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 via-gray-500/2 to-transparent rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-gray-600/8 via-transparent to-gray-600/5 rounded-2xl"></div>
              
              <div className="relative z-10">
                <img 
                  src={screenshot} 
                  alt={`Скриншот отзыва ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                  style={{ 
                    transition: 'transform 0.3s ease'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        
        {/*
        --- Instagram CTA Block ---
        <div className="mt-16 text-center">
          <div 
            className="inline-block relative backdrop-blur-xl rounded-2xl border max-w-2xl mx-auto"
            style={{
              background: 'rgba(68, 79, 85, 0.95)',
              borderColor: 'rgba(68, 79, 85, 1)',
              boxShadow: '0 32px 64px rgba(68, 79, 85, 0.3)',
              padding: "32px 24px",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-black/15 via-transparent to-black/10 rounded-2xl"></div>
            
            <div className="relative z-10">
              <h3 
                style={{
                  color: '#FEFEFE',
                  fontFamily: "DrukWideCyr-Super, sans-serif",
                  fontSize: 20,
                  letterSpacing: "0.08em",
                  fontWeight: 500,
                  lineHeight: 1.4,
                  textTransform: "uppercase",
                  marginBottom: "16px"
                }}
              >
                ПРИСОЕДИНЯЙТЕСЬ К НАШЕМУ СООБЩЕСТВУ
              </h3>
              
              <p 
                style={{
                  color: '#FEFEFE',
                  fontFamily: "Manrope, sans-serif",
                  fontSize: 14,
                  opacity: 0.9,
                  marginBottom: "24px",
                  lineHeight: 1.5
                }}
              >
                Подписывайтесь на наш Instagram, чтобы видеть больше потрясающих работ и советов по маникюру
              </p>
              
              <a 
                href="https://www.instagram.com/unhas_cinco_estrelas?igsh=YXFiN2psamRvd2Fq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                style={{
                  background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
                  color: '#FEFEFE',
                  border: 'none',
                  fontFamily: "Manrope, sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: 'none',
                  boxShadow: "0 8px 24px rgba(240,148,51,0.3)",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 ..."></path>
                </svg>
                <span className="block lg:hidden">ПОДПИСАТЬСЯ</span>
                <span className="hidden lg:block">ПОДПИСАТЬСЯ @UNHAS_CINCO_ESTRELAS</span>
              </a>
            </div>
          </div>
        </div>
        */}
      </div>
    </section>
  )
}
