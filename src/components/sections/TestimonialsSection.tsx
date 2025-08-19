export default function TestimonialsSection() {
  return (
    <section id="testemunhos" className="vogue-section" style={{backgroundColor: '#FEFEFE'}}>
      <div className="vogue-container">
        {/* Testimonials Header */}
        <div className="text-center mb-20">
          <div className="vogue-caption mb-4" style={{color: '#444e55'}}>DEPOIMENTOS</div>
          <h2 className="vogue-subhead mb-8" style={{color: '#444e55'}}>O QUE DIZEM SOBRE NÓS</h2>
          <div className="vogue-divider mx-auto mb-8" style={{backgroundColor: '#444e55'}}></div>
          <p className="vogue-body max-w-2xl mx-auto" style={{color: '#444e55'}}>
            Experiências reais de nossas clientes satisfeitas
          </p>
        </div>

        {/* Testimonials - Clean Layout */}
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="vogue-testimonial-card">
            <div className="flex items-center mb-8">
              <div className="w-20 h-20 rounded-full overflow-hidden mr-6">
                <img 
                  src="/images/reviews/review-1.png" 
                  alt="Ana Silva" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="vogue-caption mb-2">ANA SILVA</div>
                <div className="text-xs testimonial-stars" style={{color: '#3B3B3A'}}>★★★★★</div>
              </div>
            </div>
            <div className="vogue-divider mb-6"></div>
            <p className="vogue-quote">
              "Atendimento impecável! As unhas ficaram perfeitas e duraram muito mais que o esperado."
            </p>
          </div>
          
          <div className="vogue-testimonial-card">
            <div className="flex items-center mb-8">
              <div className="w-20 h-20 rounded-full overflow-hidden mr-6">
                <img 
                  src="/images/reviews/review-2.png" 
                  alt="Maria Santos" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="vogue-caption mb-2">MARIA SANTOS</div>
                <div className="text-xs testimonial-stars" style={{color: '#3B3B3A'}}>★★★★★</div>
              </div>
            </div>
            <div className="vogue-divider mb-6"></div>
            <p className="vogue-quote">
              "Preço ótimo e qualidade excepcional. Os materiais são realmente premium."
            </p>
          </div>
          
          <div className="vogue-testimonial-card">
            <div className="flex items-center mb-8">
              <div className="w-20 h-20 rounded-full overflow-hidden mr-6">
                <img 
                  src="/images/reviews/review-3.png" 
                  alt="Carla Oliveira" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="vogue-caption mb-2">CARLA OLIVEIRA</div>
                <div className="text-xs testimonial-stars" style={{color: '#3B3B3A'}}>★★★★★</div>
              </div>
            </div>
            <div className="vogue-divider mb-6"></div>
            <p className="vogue-quote">
              "Ambiente super limpo e seguro. Cuidado e atenção aos detalhes impressionantes."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
