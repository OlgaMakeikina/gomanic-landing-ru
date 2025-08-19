export default function SegurancaQualidade() {
  // === GLASSMORPHISM СТИЛЬ =====
  const COLORS = { dark: "#444f55", gray: "#3B3B3A", white: "#FEFEFE" }
  const GLASS = {
    cardBg: `rgba(255, 255, 255, 0.12)`,
    cardBorder: "rgba(255, 255, 255, 0.25)",
    cardShadow: "0 32px 64px rgba(0,0,0,0.5)",
    boxBg: `rgba(255, 255, 255, 0.15)`,
    boxBorder: "rgba(255, 255, 255, 0.25)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
  }

  const certificacoes = [
    {
      imagem: "/images/higiene/0_0 (12).jpeg",
      titulo: "Higienização Profissional",
      descricao: "Esterilização em 3 etapas + instrumentos descartáveis",
      detalhes: "Protocolo hospitalar de limpeza"
    },
    {
      imagem: "/images/higiene/0_3 (4) (1).jpeg",
      titulo: "Materiais Certificados",
      descricao: "Usamos somente materiais certificados (EUA/Japão)",
      detalhes: "Importados e testados dermatologicamente"
    },
    {
      imagem: "/images/higiene/0_3 (5) (1).jpeg",
      titulo: "Segurança Total",
      descricao: "Zero risco de contaminação ou infecção",
      detalhes: "Ambiente controlado e monitorado"
    }
  ]

  return (
    <section id="seguranca" className="relative py-20" style={{ backgroundColor: COLORS.dark }}>
      {/* Текстурный фон */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(1000px 500px at 15% 0%, rgba(254,254,254,0.08) 0%, rgba(254,254,254,0) 60%), radial-gradient(900px 450px at 85% 100%, rgba(254,254,254,0.06) 0%, rgba(254,254,254,0) 60%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <div
            className="uppercase tracking-[0.22em] mb-3"
            style={{ color: COLORS.white, fontFamily: "Garet, sans-serif", fontSize: 14, opacity: 0.85 }}
          >
            HIGIENE E QUALIDADE
          </div>

          <h2
            className="uppercase mb-6"
            style={{
              color: COLORS.white,
              fontFamily: "Horizon, sans-serif",
              letterSpacing: "0.12em",
              fontWeight: 500,
              fontSize: 28,
            }}
          >
            PADRÃO HOSPITALAR DE SEGURANÇA
          </h2>

          <p
            className="mx-auto max-w-3xl"
            style={{ color: COLORS.white, opacity: 0.9, fontFamily: "Garet, sans-serif", fontSize: 16 }}
          >
            Sua saúde é nossa prioridade. Seguimos os mais rigorosos protocolos de <span style={{ fontWeight: 700 }}>higiene e esterilização</span>
          </p>
        </div>
        
        {/* Карточки сертификации - узкие и длинные */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          {certificacoes.map((cert, index) => (
            <div 
              key={index} 
              className="relative backdrop-blur-xl rounded-2xl border overflow-hidden"
              style={{
                background: GLASS.cardBg,
                borderColor: GLASS.cardBorder,
                boxShadow: GLASS.cardShadow,
              }}
            >
              {/* Glassmorphism градиенты */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-transparent rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-black/20 via-transparent to-black/10 rounded-2xl"></div>
              
              <div className="relative z-10">
                {/* Фото без отступов */}
                <div>
                  <img 
                    src={cert.imagem}
                    alt={cert.titulo}
                    className="w-full h-48 object-cover"
                    style={{
                      filter: "brightness(1.1) contrast(1.05)",
                    }}
                  />
                </div>

                {/* Контент с большими отступами */}
                <div className="p-8 text-center">
                
                <h3 
                  className="mb-4"
                  style={{
                    color: COLORS.white,
                    fontFamily: "Horizon, sans-serif",
                    fontSize: 16,
                    letterSpacing: "0.03em",
                    fontWeight: 500,
                    textTransform: "uppercase",
                  }}
                >
                  {cert.titulo}
                </h3>
                
                <p 
                  className="mb-4"
                  style={{
                    color: COLORS.white,
                    fontFamily: "Garet, sans-serif",
                    fontSize: 15,
                    fontWeight: 600,
                    opacity: 0.95,
                  }}
                >
                  {cert.descricao}
                </p>
                
                <p 
                  style={{
                    color: COLORS.white,
                    fontFamily: "Garet, sans-serif", 
                    fontSize: 13,
                    opacity: 0.75,
                  }}
                >
                  {cert.detalhes}
                </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Блок протокола безопасности */}
        <div 
          className="relative backdrop-blur-xl rounded-2xl border text-center max-w-5xl mx-auto"
          style={{
            background: GLASS.boxBg,
            borderColor: GLASS.boxBorder,
            boxShadow: GLASS.boxShadow,
            padding: "40px 32px",
          }}
        >
          {/* Glassmorphism градиенты */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-2xl"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-black/15 via-transparent to-black/10 rounded-2xl"></div>
          
          <div className="relative z-10">
            <div className="text-4xl mb-6">🏥</div>
            <h3 
              className="mb-8"
              style={{
                color: COLORS.white,
                fontFamily: "Horizon, sans-serif",
                fontSize: 20,
                letterSpacing: "0.08em",
                fontWeight: 500,
                textTransform: "uppercase",
              }}
            >
              PROTOCOLO MÉDICO DE SEGURANÇA
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 
                  className="mb-4"
                  style={{
                    color: COLORS.white,
                    fontFamily: "Garet, sans-serif",
                    fontSize: 14,
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  MATERIAIS PREMIUM:
                </h4>
                <ul 
                  className="space-y-2"
                  style={{
                    color: COLORS.white,
                    fontFamily: "Garet, sans-serif",
                    fontSize: 14,
                    opacity: 0.9,
                  }}
                >
                  <li>• Esmaltes importados dos EUA e Japão</li>
                  <li>• Instrumentos de aço cirúrgico alemão</li>
                  <li>• Produtos hipoalergênicos certificados</li>
                  <li>• Luvas e materiais 100% descartáveis</li>
                </ul>
              </div>
              
              <div>
                <h4 
                  className="mb-4"
                  style={{
                    color: COLORS.white,
                    fontFamily: "Garet, sans-serif",
                    fontSize: 14,
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  PROCESSO DE ESTERILIZAÇÃO:
                </h4>
                <ul 
                  className="space-y-2"
                  style={{
                    color: COLORS.white,
                    fontFamily: "Garet, sans-serif",
                    fontSize: 14,
                    opacity: 0.9,
                  }}
                >
                  <li>• Etapa 1: Limpeza com detergente enzimático</li>
                  <li>• Etapa 2: Esterilização em autoclave a 134°C</li>
                  <li>• Etapa 3: Embalagem individual estéril</li>
                  <li>• Instrumentos abertos na sua frente</li>
                </ul>
              </div>
            </div>
            
            {/* Гарантия */}
            <div 
              className="mt-8 p-4 rounded-2xl backdrop-blur-md border"
              style={{
                background: "rgba(255, 255, 255, 0.25)",
                borderColor: "rgba(255, 255, 255, 0.40)",
              }}
            >
              <p 
                style={{
                  color: COLORS.white,
                  fontFamily: "Garet, sans-serif",
                  fontSize: 15,
                  fontWeight: 600,
                }}
              >
                🛡️ <span style={{ fontWeight: 800 }}>GARANTIA ZERO INFECÇÃO</span> - Nosso protocolo supera os padrões da ANVISA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
