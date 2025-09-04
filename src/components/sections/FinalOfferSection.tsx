import { HorizonText } from '@/components/ui';

export default function FinalOfferSection() {
  return (
    <section id="oferta-final" className="vogue-section py-20" style={{backgroundColor: '#3B3B3A', color: '#FEFEFE'}}>
      <div className="vogue-container text-center">
        <div className="max-w-4xl mx-auto">
          
          {/* Urgency Text */}
          <div className="mb-12">
            <div className="text-4xl mb-6">💎</div>
            <HorizonText 
              as="h2" 
              className="vogue-subhead mb-8" 
              style={{color: '#FEFEFE'}}
            >
              ÚLTIMAS VAGAS<br />
              <span style={{color: '#444e55'}}>DISPONÍVEIS AGORA</span>
            </HorizonText>
            
            <p className="vogue-body text-lg leading-relaxed max-w-2xl mx-auto" style={{color: '#FEFEFE', opacity: 0.9}}>
              Registre-se agora mesmo e receba manicure de mestres licenciados pela metade do preço.
            </p>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-12 py-6 text-lg transition-all duration-300"
            style={{
              backgroundColor: '#444e55',
              color: '#FEFEFE',
              border: 'none',
              fontFamily: 'Manrope, sans-serif',
              fontSize: '16px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              boxShadow: '0 8px 32px rgba(68, 78, 85, 0.4)',
              transform: 'scale(1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FEFEFE'
              e.currentTarget.style.color = '#3B3B3A'
              e.currentTarget.style.transform = 'scale(1.05)'
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(68, 78, 85, 0.6)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#444e55'
              e.currentTarget.style.color = '#FEFEFE'
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(68, 78, 85, 0.4)'
            }}
          >
            GARANTIR MINHA VAGA AGORA
          </button>

        </div>
      </div>
    </section>
  )
}
