export default function SocialProof() {
  // === GLASSMORPHISM НА БЕЛОМ ФОНЕ =====
  const COLORS = { dark: "#3B3B3A", gray: "#444e55", white: "#FEFEFE" }
  const GLASS = {
    // Темный glassmorphism на белом фоне
    cardBg: `rgba(59, 59, 58, 0.08)`,
    cardBorder: "rgba(59, 59, 58, 0.15)",
    cardShadow: "0 20px 40px rgba(59, 59, 58, 0.1)",
  }

  const posts = [
    {
      id: 1,
      usuario: "@ana_silva23",
      texto: "Gente, que manicure PERFEITA! 😍 A @gomanic_brasil é incrível mesmo. Valeu cada centavo do Passe VIP. As unhas ficaram um brilho que não acaba mais! #GomanicBrasil #PasseVIP",
      foto: "/images/reviews/review-1.png"
    },
    {
      id: 2,
      usuario: "@carla_oliveira",
      texto: "Pessoal, já é a 3ª vez que venho aqui e sempre impecável! 💅 O atendimento é nota 10, materiais de primeira. Recomendo muito o Passe VIP, economiza mesmo! #Recomendo #GomanicBrasil",
      foto: "/images/reviews/review-2.png"
    },
    {
      id: 3,
      usuario: "@maria_santos91",
      texto: "Finalmente achei um lugar que entende de manicure! 🙌 Super limpo, profissional e com preço justo. As meninas são muito atenciosas. Já marquei a próxima! #ManicureProfissional",
      foto: "/images/reviews/review-3.png"
    }
  ]

  return (
    <section id="social" className="relative py-20" style={{ backgroundColor: COLORS.white }}>
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <div
            className="uppercase tracking-[0.22em] mb-3"
            style={{ color: COLORS.gray, fontFamily: "Garet, sans-serif", fontSize: 14, opacity: 0.85 }}
          >
            REDES SOCIAIS
          </div>

          <h2
            className="uppercase mb-6"
            style={{
              color: COLORS.dark,
              fontFamily: "Horizon, sans-serif",
              letterSpacing: "0.12em",
              fontWeight: 500,
              fontSize: 28,
            }}
          >
            O QUE FALAM DE NÓS
          </h2>

          <p
            className="mx-auto max-w-2xl"
            style={{ color: COLORS.gray, fontFamily: "Garet, sans-serif", fontSize: 16 }}
          >
            Posts reais de clientes satisfeitas no Instagram
          </p>
        </div>

        {/* Карточки отзывов с glassmorphism */}
        <div className="grid lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="relative backdrop-blur-sm rounded-2xl border transition-all duration-300 hover:-translate-y-1"
              style={{
                background: GLASS.cardBg,
                borderColor: GLASS.cardBorder,
                boxShadow: GLASS.cardShadow,
                padding: "24px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 32px 64px rgba(59, 59, 58, 0.15)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = GLASS.cardShadow
              }}
            >
              {/* Мягкие glassmorphism градиенты */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 via-gray-500/2 to-transparent rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-gray-600/8 via-transparent to-gray-600/5 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border-2" style={{ borderColor: GLASS.cardBorder }}>
                    <img src={post.foto} alt={post.usuario} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1">
                    <div
                      style={{
                        color: COLORS.dark,
                        fontFamily: "Garet, sans-serif",
                        fontSize: 14,
                        fontWeight: 600,
                      }}
                    >
                      {post.usuario}
                    </div>
                  </div>
                </div>
                
                <p
                  className="leading-relaxed"
                  style={{
                    color: COLORS.dark,
                    fontFamily: "Garet, sans-serif",
                    fontSize: 14,
                    lineHeight: 1.6,
                  }}
                >
                  {post.texto}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Блок соцсетей */}
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
            {/* Glassmorphism градиенты */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-black/15 via-transparent to-black/10 rounded-2xl"></div>
            
            <div className="relative z-10">
              <h3 
                style={{
                  color: '#FEFEFE',
                  fontFamily: "Horizon, sans-serif",
                  fontSize: 20,
                  letterSpacing: "0.08em",
                  fontWeight: 500,
                  lineHeight: 1.4,
                  textTransform: "uppercase",
                  marginBottom: "16px"
                }}
              >
                JUNTE-SE À NOSSA COMUNIDADE
              </h3>
              
              <p 
                style={{
                  color: '#FEFEFE',
                  fontFamily: "Garet, sans-serif",
                  fontSize: 14,
                  opacity: 0.9,
                  marginBottom: "24px",
                  lineHeight: 1.5
                }}
              >
                Siga-nos no Instagram para ver mais trabalhos incríveis e dicas de manicure
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
                  fontFamily: "Garet, sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: 'none',
                  boxShadow: "0 8px 24px rgba(240,148,51,0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(240,148,51,0.4)"
                  e.currentTarget.style.transform = "scale(1.05) translateY(-2px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(240,148,51,0.3)"
                  e.currentTarget.style.transform = "scale(1)"
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                SEGUIR @UNHAS_CINCO_ESTRELAS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
