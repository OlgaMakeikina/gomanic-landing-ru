export default function OfertaSection() {
  return (
    <section id="oferta" className="vogue-section" style={{backgroundColor: '#3B3B3A', color: '#FEFEFE'}}>
      <div className="vogue-container">
        <div className="grid lg:grid-cols-2 gap-20 items-stretch">
          
          {/* Content Side */}
          <div className="text-center lg:text-left flex flex-col justify-center">
            <div className="vogue-caption mb-4" style={{color: '#444e55'}}>OFERTA ESPECIAL COM URGÊNCIA</div>
            <h2 className="vogue-subhead mb-8" style={{color: '#FEFEFE'}}>GARANTA SEU LUGAR E PAGUE METADE DO PREÇO!</h2>
            <div className="vogue-divider mb-8 lg:mx-0 mx-auto" style={{backgroundColor: '#FEFEFE', opacity: 0.3}}></div>
            
            <p className="vogue-body text-lg mb-12" style={{color: '#444e55'}}>
              Promoção válida apenas para as <span className="font-medium" style={{color: '#FEFEFE'}}>30 primeiras clientes</span> do mês. 
              Depois, valores normais serão aplicados.
            </p>
            
            <div className="mb-8">
              <div className="inline-block px-8 py-4" style={{border: '1px solid #FEFEFE'}}>
                <div className="vogue-caption" style={{color: '#FEFEFE'}}>3 VAGAS RESTANTES</div>
              </div>
            </div>
            
            {/* Garantia de pagamento */}
            <div className="bg-green-600 text-white p-4 rounded-lg mb-8 max-w-md mx-auto lg:mx-0">
              <div className="text-sm text-center lg:text-left">
                💳 <strong>Pagamento da entrada é 100% seguro.</strong><br/>
                Se não puder comparecer, reagendamos ou devolvemos o valor.
              </div>
            </div>
            
            <button 
              onClick={() => document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' })}
              className="vogue-btn text-xl font-medium px-12 py-6"
              style={{
                backgroundColor: '#444e55', 
                color: '#3B3B3A', 
                borderColor: '#444e55',
                boxShadow: '0 4px 20px rgba(68, 78, 85, 0.4)',
                transform: 'scale(1)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FEFEFE'
                e.currentTarget.style.color = '#3B3B3A'
                e.currentTarget.style.transform = 'scale(1.05)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(68, 78, 85, 0.6)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#444e55'
                e.currentTarget.style.color = '#3B3B3A'
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(68, 78, 85, 0.4)'
              }}
            >
              QUERO GARANTIR MINHA VAGA AGORA
            </button>
          </div>

          {/* Image Side */}
          <div className="relative flex">
            <div className="relative overflow-hidden w-full h-full min-h-[400px]" style={{borderRadius: '8px'}}>
              <img 
                src="/images/offer/offer.jpeg" 
                alt="Oferta Especial Gomanic" 
                className="w-full h-full object-cover"
                style={{filter: 'brightness(0.9) contrast(1.1)'}}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
