import { HorizonText } from '@/components/ui'

export default function VipVantagens() {
  const vantagens = [
    "Фиксированная цена даже если акция закончится",
    "Гарантия места",
    "Бонусная услуга при посещении"
  ]

  return (
    <section id="passe-vip" className="vogue-section" style={{backgroundColor: '#3B3B3A', color: '#FEFEFE'}}>
      <div className="vogue-container">
        <div className="text-center mb-20">
          <div className="vogue-caption mb-4" style={{color: '#444e55'}}>ЭКСКЛЮЗИВНЫЕ ПРЕИМУЩЕСТВА</div>
          <HorizonText as="h2" className="vogue-subhead mb-8" style={{color: '#FEFEFE'}}>
            ПОЧЕМУ СТОИТ VIP-ПРОПУСК
          </HorizonText>
          <div className="vogue-divider mx-auto mb-8" style={{backgroundColor: '#FEFEFE', opacity: 0.3}}></div>
          <p className="vogue-body max-w-2xl mx-auto" style={{color: '#FEFEFE'}}>
            Эксклюзивные преимущества для VIP-членов
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {vantagens.map((vantagem, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6"
                  style={{backgroundColor: '#444e55', color: '#FEFEFE'}}
                >
                  {index + 1}
                </div>
                <div className="vogue-body text-lg text-center" style={{color: '#FEFEFE'}}>
                  {vantagem}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <button 
              onClick={() => document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-4 transition-all duration-300 text-lg"
              style={{
                backgroundColor: '#444e55',
                color: '#FEFEFE',
                border: 'none',
                fontFamily: 'Garet, sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(68, 78, 85, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FEFEFE'
                e.currentTarget.style.color = '#3B3B3A'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(68, 78, 85, 0.6)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#444e55'
                e.currentTarget.style.color = '#FEFEFE'
                e.currentTarget.style.transform = 'translateY(0px)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(68, 78, 85, 0.4)'
              }}
            >
              ХОЧУ ГАРАНТИРОВАТЬ СВОЙ VIP-ПРОПУСК
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}