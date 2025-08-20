'use client'
import { useState, useEffect } from 'react'

export default function SegurancaQualidade() {
  const [isPlaying, setIsPlaying] = useState(false)
  
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
            POR QUE MILHARES DE CLIENTES NOS ESCOLHEM?
          </h2>

          <p
            className="mx-auto max-w-3xl"
            style={{ color: COLORS.white, opacity: 0.9, fontFamily: "Garet, sans-serif", fontSize: 16 }}
          >
            Sua saúde é nossa prioridade. Seguimos os mais rigorosos protocolos de <span style={{ fontWeight: 700 }}>higiene e esterilização</span>
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">          {certificacoes.map((cert, index) => (
            <div 
              key={index} 
              className="relative backdrop-blur-xl rounded-2xl border overflow-hidden"
              style={{
                background: GLASS.cardBg,
                borderColor: GLASS.cardBorder,
                boxShadow: GLASS.cardShadow,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-transparent rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-black/20 via-transparent to-black/10 rounded-2xl"></div>
              
              <div className="relative z-10">
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

        {/* Новый блок: Обучение и сертификация */}
        <div className="mt-20">
          {/* Заголовок блока */}
          <div className="text-center mb-16">
            <h3
              style={{
                color: COLORS.white,
                fontFamily: "Horizon, sans-serif",
                fontSize: 24,
                letterSpacing: "0.1em",
                fontWeight: 500,
                textTransform: "uppercase",
                marginBottom: "16px"
              }}
            >
              Formadas com instrutores internacionais
            </h3>
            <p
              style={{
                color: COLORS.white,
                fontFamily: "Garet, sans-serif",
                fontSize: 16,
                opacity: 0.9,
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: 1.6
              }}
            >
              Nossos especialistas são treinados de acordo com o programa profissional estadual da Federação Russa
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Колонка 1: 2 фото с инструкторами */}
            <div className="space-y-6">
              {[
                { src: '/images/masters/0_0 (15).jpeg', alt: 'Instrutor Internacional 1' },
                { src: '/images/masters/IMG_0439.jpg', alt: 'Instrutor Internacional 2' }
              ].map((instructor, index) => (
                <div
                  key={index}
                  className="relative backdrop-blur-xl rounded-2xl border overflow-hidden group"
                  style={{
                    background: GLASS.cardBg,
                    borderColor: GLASS.cardBorder,
                    boxShadow: GLASS.cardShadow,
                    aspectRatio: "4/3"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent"></div>
                  
                  <img 
                    src={instructor.src}
                    alt={instructor.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: 'brightness(1.1) contrast(1.05)' }}
                  />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div
                      className="backdrop-blur-sm rounded-lg p-2 border"
                      style={{
                        background: 'rgba(255, 255, 255, 0.15)',
                        borderColor: 'rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      <p
                        style={{
                          color: "#3B3B3A",
                          fontFamily: "Garet, sans-serif",
                          fontSize: 11,
                          fontWeight: 600,
                          textAlign: "center"
                        }}
                      >
                        Processo de Treinamento
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Колонка 2: Сертификаты + Видео процесса */}
            <div className="space-y-6">
              {/* Фото с сертификатами */}
              <div
                className="relative backdrop-blur-xl rounded-2xl border overflow-hidden group"
                style={{
                  background: GLASS.cardBg,
                  borderColor: GLASS.cardBorder,
                  boxShadow: GLASS.cardShadow,
                  aspectRatio: "4/3"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent"></div>
                
                <img 
                  src="/images/masters/0_3 (20).jpeg"
                  alt="Certificados"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: 'brightness(1.1) contrast(1.05)' }}
                />
                
                <div className="absolute bottom-4 left-4 right-4">
                  <div
                    className="backdrop-blur-sm rounded-lg p-2 border"
                    style={{
                      background: 'rgba(255, 255, 255, 0.15)',
                      borderColor: 'rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    <p
                      style={{
                        color: "#3B3B3A",
                        fontFamily: "Garet, sans-serif",
                        fontSize: 11,
                        fontWeight: 600,
                        textAlign: "center"
                      }}
                    >
                      Certificações Internacionais
                    </p>
                  </div>
                </div>
              </div>

              {/* Видео процесса */}
              <div
                className="relative backdrop-blur-xl rounded-2xl border overflow-hidden group"
                style={{
                  background: GLASS.cardBg,
                  borderColor: GLASS.cardBorder,
                  boxShadow: GLASS.cardShadow,
                  aspectRatio: "4/3"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent"></div>
                
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/images/masters/hd.mp4" type="video/mp4" />
                </video>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <div
                    className="backdrop-blur-sm rounded-lg p-2 border"
                    style={{
                      background: 'rgba(255, 255, 255, 0.15)',
                      borderColor: 'rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    <p
                      style={{
                        color: "#3B3B3A",
                        fontFamily: "Garet, sans-serif",
                        fontSize: 11,
                        fontWeight: 600,
                        textAlign: "center"
                      }}
                    >
                      Processo de Treinamento
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Колонка 3: Паспорт безопасности */}
            <div>
              {/* CTA блок в стиле основной страницы */}
              <div
                className="backdrop-blur-xl rounded-2xl mb-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(68, 79, 85, 0.95) 0%, rgba(59, 59, 58, 0.95) 100%)',
                  border: '1px solid #FEFEFE',
                  boxShadow: '0 32px 64px rgba(68, 79, 85, 0.3)',
                  padding: '32px'
                }}
              >
                <div className="text-center">
                  <h4
                    style={{
                      color: "#FEFEFE",
                      fontFamily: "Horizon, sans-serif",
                      fontSize: 18,
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: "16px",
                      lineHeight: 1.3
                    }}
                  >
                    Certificado de Segurança
                  </h4>
                  
                  <div
                    className="inline-block px-8 py-3 rounded-xl"
                    style={{
                      background: "#FEFEFE",
                      color: "#3B3B3A",
                      fontFamily: "Garet, sans-serif",
                      fontSize: 13,
                      fontWeight: 600,
                      textAlign: "center",
                      lineHeight: 1.4
                    }}
                  >
                    Nossos esmaltes são completamente seguros e atendem aos padrões internacionais de qualidade
                  </div>
                </div>
              </div>
              
              {/* Паспорт безопасности */}
              <div
                className="relative backdrop-blur-xl rounded-2xl border overflow-hidden group mx-auto"
                style={{
                  background: GLASS.cardBg,
                  borderColor: GLASS.cardBorder,
                  boxShadow: GLASS.cardShadow,
                  aspectRatio: "2/3",
                  width: "60%"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent"></div>
                
                <img 
                  src="/images/masters/certificate.png"
                  alt="Passaporte de segurança dos esmaltes"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: 'brightness(1.1) contrast(1.05)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}