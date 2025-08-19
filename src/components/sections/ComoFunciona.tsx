export default function ComoFunciona() {
  const passos = [
    {
      numero: "1",
      titulo: "Reserve sua vaga",
      descricao: "Preencha o formulário e pague a entrada",
      detalhes: "Pagamento seguro, reembolso garantido se não puder comparecer"
    },
    {
      numero: "2", 
      titulo: "Compareça no dia",
      descricao: "Venha no horário agendado",
      detalhes: "Traga apenas você mesma, tudo já está preparado"
    },
    {
      numero: "3",
      titulo: "Relaxe e aproveite",
      descricao: "Deixe nossas especialistas cuidarem de você",
      detalhes: "Atendimento VIP com todo carinho e atenção"
    }
  ]

  return (
    <section id="como-funciona" className="vogue-section" style={{backgroundColor: '#444e55'}}>
      <div className="vogue-container">
        <div className="text-center mb-20">
          <div className="vogue-caption mb-4" style={{color: '#FEFEFE'}}>PROCESSO</div>
          <h2 className="vogue-subhead mb-8" style={{color: '#FEFEFE'}}>COMO FUNCIONA</h2>
          <div className="vogue-divider mx-auto mb-8" style={{backgroundColor: '#FEFEFE', opacity: 0.3}}></div>
          <p className="vogue-body max-w-2xl mx-auto" style={{color: '#FEFEFE'}}>
            3 passos simples para garantir sua manicure premium
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {passos.map((passo, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 text-2xl font-bold"
                     style={{
                       backgroundColor: '#FEFEFE',
                       color: '#444e55'
                     }}>
                  {passo.numero}
                </div>
                
                <h3 className="vogue-caption mb-4" style={{color: '#FEFEFE', fontSize: '16px'}}>
                  {passo.titulo}
                </h3>
                
                <p className="vogue-body text-lg mb-4" style={{color: '#FEFEFE', fontWeight: 600, lineHeight: '1.6'}}>
                  {passo.descricao}
                </p>
                
                <p className="vogue-body text-sm" style={{color: '#FEFEFE', opacity: 0.8}}>
                  {passo.detalhes}
                </p>
                
                {index < passos.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 transform -translate-y-1/2 translate-x-8">
                    <div className="w-8 h-px" style={{backgroundColor: '#FEFEFE', opacity: 0.3}}></div>
                    <div className="text-right" style={{color: '#FEFEFE', opacity: 0.5}}>→</div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-lg p-8 text-center border-2"
               style={{
                 backgroundColor: '#FEFEFE',
                 borderColor: '#3B3B3A'
               }}>
            <div className="text-4xl mb-6">⚡</div>
            
            <h3 className="vogue-caption mb-6" style={{color: '#3B3B3A', fontSize: '16px'}}>
              GARANTA SUA VAGA AGORA
            </h3>
            
            <p className="vogue-body text-lg" style={{color: '#3B3B3A', fontWeight: 600, lineHeight: '1.6'}}>
              <strong>Apenas 3 vagas restantes</strong> para este mês.<br/>
              Não perca esta oportunidade única!
            </p>
            
            <div className="mt-8">
              <button 
                onClick={() => document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-12 py-4 transition-all duration-300 text-lg"
                style={{
                  backgroundColor: '#444e55',
                  color: '#FEFEFE',
                  border: 'none',
                  fontFamily: 'Garet, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  boxShadow: '0 8px 25px rgba(68, 78, 85, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = '#444e55'
                  e.currentTarget.style.border = '2px solid #444e55'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 12px 35px rgba(68, 78, 85, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#444e55'
                  e.currentTarget.style.color = '#FEFEFE'
                  e.currentTarget.style.border = 'none'
                  e.currentTarget.style.transform = 'translateY(0px)'
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(68, 78, 85, 0.3)'
                }}
              >
                RESERVAR MINHA VAGA AGORA
              </button>
              
              <p className="text-sm mt-4" style={{color: '#3B3B3A'}}>
                🔒 Pagamento seguro • ↩️ Cancelamento gratuito • ⚡ Confirmação instantânea
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
