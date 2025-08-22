export default function VipExclusivo() {
  return (
    <section id="vip-exclusivo" className="vogue-section" style={{backgroundColor: '#3B3B3A', color: '#FEFEFE'}}>
      <div className="vogue-container">
        <div className="text-center mb-20">
          <div className="vogue-caption mb-4" style={{color: '#444e55'}}>ACESSO LIMITADO</div>
          <h2 className="vogue-subhead mb-8" style={{color: '#FEFEFE'}}>
            PASSE VIP = CLUBE EXCLUSIVO
          </h2>
          <div className="vogue-divider mx-auto mb-8" style={{backgroundColor: '#444e55'}}></div>
          <p className="vogue-body max-w-3xl mx-auto text-lg" style={{color: '#FEFEFE'}}>
            Não é uma simples promoção. É um <strong style={{color: '#444e55'}}>acesso exclusivo</strong> para poucas pessoas especiais
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block text-white px-8 py-4 rounded-lg transform rotate-1" 
                 style={{
                   backgroundColor: '#444e55',
                   boxShadow: '0 8px 20px rgba(68, 78, 85, 0.3)'
                 }}>
              <div className="text-3xl font-bold">⏰ APENAS 3 VAGAS RESTANTES</div>
              <div className="text-sm mt-1">de 30 Passes VIP disponíveis este mês</div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            
            <div className="p-8 rounded-lg text-center border"
                 style={{
                   backgroundColor: '#444e55',
                   borderColor: '#FEFEFE',
                   boxShadow: '0 8px 25px rgba(68, 78, 85, 0.2)'
                 }}>
              <div className="text-4xl mb-4">👑</div>
              <h3 className="vogue-caption mb-4" style={{color: '#FEFEFE', fontSize: '16px'}}>
                CLUBE LIMITADO
              </h3>
              <p className="vogue-body" style={{color: '#FEFEFE', lineHeight: '1.6'}}>
                <strong>Somente 30 clientes por mês podem ter Passe VIP.</strong><br/>
              </p>
            </div>
            
            <div className="p-8 rounded-lg text-center border"
                 style={{
                   backgroundColor: '#444e55',
                   borderColor: '#FEFEFE',
                   boxShadow: '0 8px 25px rgba(68, 78, 85, 0.2)'
                 }}>
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="vogue-caption mb-4" style={{color: '#FEFEFE', fontSize: '16px'}}>
                PREÇO ÚNICO
              </h3>
              <p className="vogue-body" style={{color: '#FEFEFE', lineHeight: '1.6'}}>
                <strong>O preço nunca mais se repete depois que as vagas esgotarem.</strong>
              </p>
            </div>
            
            <div className="p-8 rounded-lg text-center border"
                 style={{
                   backgroundColor: '#444e55',
                   borderColor: '#FEFEFE',
                   boxShadow: '0 8px 25px rgba(68, 78, 85, 0.2)'
                 }}>
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="vogue-caption mb-4" style={{color: '#FEFEFE', fontSize: '16px'}}>
                BRINDE SURPRESA
              </h3>
              <p className="vogue-body" style={{color: '#FEFEFE', lineHeight: '1.6'}}>
                <strong>VIPs recebem um brinde surpresa na primeira visita.</strong>
              </p>
            </div>
          </div>
          
          <div className="p-8 rounded-lg text-center border-2"
               style={{
                 backgroundColor: '#444e55',
                 borderColor: '#FEFEFE',
                 boxShadow: '0 12px 30px rgba(68, 78, 85, 0.4)'
               }}>
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4" style={{color: '#FEFEFE'}}>
              ESTA OPORTUNIDADE ACABA EM:
            </h3>
            
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-6">
              {['05', '14', '23', '47'].map((time, i) => (
                <div key={i} className="text-white p-3 rounded-lg text-center"
                     style={{backgroundColor: '#3B3B3A'}}>
                  <div className="text-xl font-bold">{time}</div>
                  <div className="text-xs">{['DIAS', 'HRS', 'MIN', 'SEG'][i]}</div>
                </div>
              ))}
            </div>
            
            <p className="vogue-body text-lg mb-6" style={{color: '#FEFEFE', fontWeight: 600}}>
              ⚠️ Depois disso, volta ao preço normal (sem desconto)
            </p>
            
            <button 
              onClick={() => document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-4 transition-all duration-300 text-lg animate-pulse"
              style={{
                backgroundColor: '#FEFEFE',
                color: '#3B3B3A',
                border: 'none',
                fontFamily: 'Garet, sans-serif',
                fontSize: '18px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(254, 254, 254, 0.5)',
                transform: 'scale(1.05)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = '#FEFEFE'
                e.currentTarget.style.border = '2px solid #FEFEFE'
                e.currentTarget.style.transform = 'scale(1.1)'
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(254, 254, 254, 0.7)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FEFEFE'
                e.currentTarget.style.color = '#3B3B3A'
                e.currentTarget.style.border = 'none'
                e.currentTarget.style.transform = 'scale(1.05)'
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(254, 254, 254, 0.5)'
              }}
            >
              QUERO MEU PASSE VIP AGORA!
            </button>
            
            <p className="text-sm mt-4" style={{color: '#FEFEFE'}}>
              Pagamento da entrada é 100% seguro. Se não puder comparecer, reagendamos ou devolvemos o valor.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
