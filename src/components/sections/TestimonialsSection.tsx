import { HorizonText } from '@/components/ui'

export default function TestimonialsSection() {
  const COLORS = { dark: "#3B3B3A", gray: "#444e55", white: "#FEFEFE" }
  
  const reviewScreenshots = [
    "/images/reviews/review1.png",
    "/images/reviews/review2.png", 
    "/images/reviews/review3.png"
  ]

  return (
    <section id="testemunhos" className="py-12 md:py-16" style={{backgroundColor: '#FEFEFE'}}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="vogue-caption mb-2" style={{ color: '#444e55', fontFamily: "Manrope, sans-serif", fontSize: 14, opacity: 0.85 }}>DEPOIMENTOS</div>
          <HorizonText as="h2" className="vogue-subhead mb-4" style={{color: '#444e55'}}>O QUE DIZEM SOBRE NÓS</HorizonText>
          <div className="vogue-divider mx-auto mb-4" style={{backgroundColor: '#444e55'}}></div>
          <p className="vogue-body max-w-xl mx-auto" style={{color: '#444e55'}}>
            Experiências reais de nossas clientes satisfeitas
          </p>
        </div>

        <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto mb-8">
          {reviewScreenshots.map((screenshot, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden w-full max-w-2xl"
              style={{
                background: 'rgba(254, 254, 254, 0.95)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(68, 78, 85, 0.15)',
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(59, 59, 58, 0.08)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(59, 59, 58, 0.12)'
                e.currentTarget.style.borderColor = 'rgba(68, 78, 85, 0.25)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(59, 59, 58, 0.08)'
                e.currentTarget.style.borderColor = 'rgba(68, 78, 85, 0.15)'
              }}
            >
              <img 
                src={screenshot} 
                alt={`Depoimento ${index + 1}`}
                className="w-full"
                style={{ 
                  transition: 'transform 0.3s ease',
                  filter: 'contrast(1.05) brightness(1.02)',
                  transform: 'scale(2.5)',
                  transformOrigin: 'center',
                  padding: '20px'
                }}
              />
              
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              <div className="absolute top-2 right-2">
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: 'rgba(254, 254, 254, 0.95)',
                    backdropFilter: 'blur(4px)'
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1L7.5 4.5L11 4.5L8.25 6.75L9.75 10.25L6 8L2.25 10.25L3.75 6.75L1 4.5L4.5 4.5L6 1Z" fill="#444e55"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="vogue-body mb-4" style={{color: '#444e55', opacity: 0.8}}>
            Junte-se às milhares de clientes satisfeitas
          </p>
          <button
            onClick={() => document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 transition-all duration-300"
            style={{
              backgroundColor: 'transparent',
              color: '#444e55',
              border: '2px solid #444e55',
              fontFamily: 'Manrope, sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              borderRadius: '6px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#444e55'
              e.currentTarget.style.color = '#FEFEFE'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = '#444e55'
              e.currentTarget.style.transform = 'translateY(0px)'
            }}
          >
            AGENDAR MINHA SESSÃO
          </button>
        </div>
      </div>
    </section>
  )
}
