import { HorizonText } from '@/components/ui'

export default function TestimonialsSection() {
  const COLORS = { dark: "#3B3B3A", gray: "#444e55", white: "#FEFEFE" }
  
  // Новые скриншоты отзывов
  const reviewScreenshots = [
    "/images/reviews/review1.jpg",
    "/images/reviews/review2.jpg", 
    "/images/reviews/review3.jpg"
  ]

  return (
    <section id="testemunhos" className="vogue-section" style={{backgroundColor: '#FEFEFE'}}>
      <div className="vogue-container">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="vogue-caption mb-4" style={{color: '#444e55'}}>DEPOIMENTOS</div>
          <HorizonText as="h2" className="vogue-subhead mb-8" style={{color: '#444e55'}}>O QUE DIZEM SOBRE NÓS</HorizonText>
          <div className="vogue-divider mx-auto mb-8" style={{backgroundColor: '#444e55'}}></div>
          <p className="vogue-body max-w-2xl mx-auto" style={{color: '#444e55'}}>
            Experiências reais de nossas clientes satisfeitas
          </p>
        </div>

        {/* Review Screenshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviewScreenshots.map((screenshot, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer"
              style={{
                background: 'rgba(254, 254, 254, 0.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(68, 78, 85, 0.1)',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(59, 59, 58, 0.1)',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(59, 59, 58, 0.15)'
                e.currentTarget.style.borderColor = 'rgba(68, 78, 85, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(59, 59, 58, 0.1)'
                e.currentTarget.style.borderColor = 'rgba(68, 78, 85, 0.1)'
              }}
            >
              <img 
                src={screenshot} 
                alt={`Depoimento ${index + 1}`}
                className="w-full h-auto object-contain"
                style={{ 
                  maxHeight: '400px',
                  transition: 'transform 0.3s ease'
                }}
              />
              
              {/* Overlay gradient for better readability */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="vogue-body mb-8" style={{color: '#444e55', opacity: 0.8}}>
            Junte-se às milhares de clientes satisfeitas
          </p>
          <button
            onClick={() => document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 transition-all duration-300"
            style={{
              backgroundColor: 'transparent',
              color: '#444e55',
              border: '2px solid #444e55',
              fontFamily: 'Garet, sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              borderRadius: '8px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#444e55'
              e.currentTarget.style.color = '#FEFEFE'
              e.currentTarget.style.transform = 'translateY(-2px)'
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