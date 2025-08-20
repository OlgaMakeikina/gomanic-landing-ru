'use client'

export default function ComoFunciona() {
  const passos = [
    {
      numero: "1",
      titulo: "Escolha o serviço",
      descricao: "Selecione seu pacote VIP preferido",
      detalhes: "Navegue pelos nossos serviços premium e escolha o que mais combina com você",
      seguranca: "",
      imagem: "/images/process/0_3 (16).jpeg"
    },
    {
      numero: "2", 
      titulo: "Pague a entrada",
      descricao: "PIX ou cartão - segurança total",
      detalhes: "Pagamento criptografado com as maiores empresas do Brasil",
      seguranca: "Pagamento da entrada é 100% seguro. Se não puder comparecer, reagendamos ou devolvemos o valor",
      imagem: "/images/process/0_0 (8) (1).jpeg"
    },
    {
      numero: "3",
      titulo: "Confirmação no WhatsApp",
      descricao: "Receba todos os detalhes",
      detalhes: "Localização, horário e instruções especiais direto no seu WhatsApp",
      seguranca: "Confirmação instantânea",
      imagem: "/images/process/0_1 (11).jpeg"
    },
    {
      numero: "4",
      titulo: "Compareça e finalize",
      descricao: "Relaxe e complete o pagamento",
      detalhes: "Aproveite seu tratamento VIP e pague o restante no local com desconto",
      seguranca: "Garantia de satisfação 100%",
      imagem: "/images/process/0_0 (7).jpeg"
    }
  ]

  return (
    <section id="como-funciona" className="py-20" style={{backgroundColor: '#444e55'}}>
      <div className="vogue-container">
        <div className="text-center mb-20">
          <div className="vogue-caption mb-4" style={{color: '#FEFEFE'}}>PROCESSO</div>
          <h2 className="vogue-subhead mb-8" style={{color: '#FEFEFE'}}>COMO FUNCIONA</h2>
          <div className="w-20 h-px mx-auto mb-8" style={{backgroundColor: '#FEFEFE', opacity: 0.3}}></div>
          <p className="vogue-body max-w-3xl mx-auto text-lg" style={{color: '#FEFEFE', opacity: 0.9}}>
            4 passos simples para garantir sua manicure premium com total segurança
          </p>
        </div>
        
        {/* Вертикальный timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Вертикальная линия timeline с glassmorphism */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2">
              <div className="w-full h-full backdrop-blur-xl rounded-full border border-white border-opacity-30"
                   style={{
                     background: 'rgba(254, 254, 254, 0.15)',
                     boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                   }}>
                {/* Glassmorphism градиенты */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-transparent rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5 rounded-full"></div>
              </div>
            </div>
            
            {passos.map((passo, index) => (
              <div key={index} className="relative mb-16 last:mb-0">
                {/* Круг на линии timeline с glassmorphism */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full text-2xl relative backdrop-blur-xl border border-white border-opacity-40"
                       style={{
                         background: 'rgba(254, 254, 254, 0.25)',
                         color: '#444e55',
                         boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                       }}>
                    {/* Glassmorphism слои */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/15 to-transparent rounded-full"></div>
                    <div className="absolute inset-0 bg-gradient-to-tl from-black/10 via-transparent to-black/5 rounded-full"></div>
                    
                    <span className="relative z-10 font-bold text-2xl">{passo.numero}</span>
                  </div>
                </div>
                
                {/* Контент карточки - чередуем лево/право */}
                <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                    <div className="backdrop-blur-xl rounded-2xl p-8 border border-white border-opacity-20 hover:border-opacity-30 transition-all duration-300"
                         style={{
                           background: 'rgba(254, 254, 254, 0.08)',
                           boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                         }}>
                      
                      {/* Glassmorphism градиенты */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-transparent rounded-2xl pointer-events-none"></div>
                      <div className="absolute inset-0 bg-gradient-to-tl from-black/5 via-transparent to-black/3 rounded-2xl pointer-events-none"></div>
                      
                      <div className="relative z-10">
                        {/* Изображение */}
                        <div className="mb-6 rounded-xl overflow-hidden"
                             style={{boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'}}>
                          <img 
                            src={passo.imagem}
                            alt={passo.titulo}
                            className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                            style={{filter: 'brightness(1.1) contrast(1.05)'}}
                          />
                        </div>

                        <h3 className="vogue-caption mb-4" 
                            style={{color: '#FEFEFE', fontSize: '20px', letterSpacing: '0.1em', fontWeight: 700, textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'}}>
                          {passo.titulo}
                        </h3>
                      
                        <p className="vogue-body text-lg mb-4" 
                           style={{color: '#FEFEFE', fontWeight: 600, lineHeight: '1.6', textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'}}>
                          {passo.descricao}
                        </p>
                      
                        <p className="vogue-body text-base mb-4" 
                           style={{color: '#FEFEFE', opacity: 0.9, lineHeight: '1.6', textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'}}>
                          {passo.detalhes}
                        </p>
                        
                        {passo.seguranca && (
                          <div className="mt-6 p-4 rounded-lg backdrop-blur-sm border border-white border-opacity-20" 
                               style={{background: 'rgba(254, 254, 254, 0.12)'}}>
                            <p className="text-sm text-center" 
                               style={{color: '#FEFEFE', opacity: 0.95, fontWeight: 600, textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'}}>
                              {passo.seguranca}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Мобильная версия - вертикальные карточки */}
        <div className="lg:hidden max-w-2xl mx-auto">
          <div className="relative">
            {/* Glassmorphism timeline для мобильных */}
            <div className="absolute left-8 top-0 bottom-0 w-1">
              <div className="w-full h-full backdrop-blur-xl rounded-full border border-white border-opacity-30"
                   style={{
                     background: 'rgba(254, 254, 254, 0.15)',
                     boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                   }}>
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-transparent rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5 rounded-full"></div>
              </div>
            </div>
            
            {passos.map((passo, index) => (
              <div key={index} className="relative mb-12 last:mb-0 pl-20">
                <div className="absolute left-0 top-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full text-xl relative backdrop-blur-xl border border-white border-opacity-40"
                       style={{
                         background: 'rgba(254, 254, 254, 0.25)',
                         color: '#444e55',
                         boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                       }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/15 to-transparent rounded-full"></div>
                    <div className="absolute inset-0 bg-gradient-to-tl from-black/10 via-transparent to-black/5 rounded-full"></div>
                    
                    <span className="relative z-10 font-bold text-xl">{passo.numero}</span>
                  </div>
                </div>
                
                <div className="backdrop-blur-xl rounded-2xl p-6 border border-white border-opacity-20 relative"
                     style={{
                       background: 'rgba(254, 254, 254, 0.08)',
                       boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                     }}>
                  
                  {/* Glassmorphism градиенты */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-transparent rounded-2xl pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-tl from-black/5 via-transparent to-black/3 rounded-2xl pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    {/* Изображение для мобильной версии */}
                    <div className="mb-4 rounded-xl overflow-hidden"
                         style={{boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'}}>
                      <img 
                        src={passo.imagem}
                        alt={passo.titulo}
                        className="w-full h-40 object-cover transition-transform duration-500 hover:scale-105"
                        style={{filter: 'brightness(1.1) contrast(1.05)'}}
                      />
                    </div>

                    <h3 className="vogue-caption mb-3" 
                        style={{color: '#FEFEFE', fontSize: '18px', letterSpacing: '0.1em', fontWeight: 700, textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'}}>
                      {passo.titulo}
                    </h3>
                  
                    <p className="vogue-body text-base mb-3" 
                       style={{color: '#FEFEFE', fontWeight: 600, lineHeight: '1.6', textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'}}>
                      {passo.descricao}
                    </p>
                  
                    <p className="vogue-body text-sm mb-3" 
                       style={{color: '#FEFEFE', opacity: 0.9, lineHeight: '1.5', textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'}}>
                      {passo.detalhes}
                    </p>
                    
                    {passo.seguranca && (
                      <div className="mt-4 p-3 rounded-lg backdrop-blur-sm border border-white border-opacity-20" 
                           style={{background: 'rgba(254, 254, 254, 0.12)'}}>
                        <p className="text-xs text-center" 
                           style={{color: '#FEFEFE', opacity: 0.95, fontWeight: 600, textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'}}>
                          {passo.seguranca}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}