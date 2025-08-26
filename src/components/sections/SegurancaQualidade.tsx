'use client'
import React, { useState } from 'react'

export default function SegurancaQualidade(): JSX.Element {
  const [isPlaying] = useState(false)

  const COLORS = { dark: '#444f55', gray: '#3B3B3A', white: '#FEFEFE' }
  const GLASS = {
    cardBg: 'rgba(255, 255, 255, 0.12)',
    cardBorder: 'rgba(255, 255, 255, 0.25)',
    cardShadow: '0 32px 64px rgba(0,0,0,0.5)',
  }

  const certificacoes = [
    {
      imagem: '/images/higiene/0_3 (13).jpeg',
      titulo: 'Новейшие техники',
      detalhes: 'Мастера прошли обучение по последним технологиям подготовки ногтей',
    },
    {
      imagem: '/images/higiene/0_3 (21).jpeg',
      titulo: 'Премиум-материалы',
      detalhes: 'Японское сырьё с сертификатами безопасности',
    },
    {
      imagem: '/images/higiene/0_0 (20).jpeg',
      titulo: 'Гарантия стерильности',
      detalhes: 'Одноразовые инструменты + стерилизация',
    },
  ] as const

  return (
    <section 
      id="seguranca" 
      className="relative py-20" 
      style={{ backgroundColor: COLORS.dark }}
      aria-labelledby="seguranca-heading"
    >
      {/* Текстурный фон */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              'radial-gradient(1000px 500px at 15% 0%, rgba(254,254,254,0.08) 0%, rgba(254,254,254,0) 60%), radial-gradient(900px 450px at 85% 100%, rgba(254,254,254,0.06) 0%, rgba(254,254,254,0) 60%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Заголовок */}
        <header className="text-center mb-16">
          <p
            className="uppercase tracking-[0.22em] mb-3"
            style={{ color: COLORS.white, fontFamily: 'Garet, sans-serif', fontSize: 14, opacity: 0.85 }}
          >
            ПРЕИМУЩЕСТВА
          </p>

          <h2
            id="seguranca-heading"
            className="uppercase mb-6"
            style={{
              color: COLORS.white,
              fontFamily: 'Horizon, sans-serif',
              letterSpacing: '0.12em',
              fontWeight: 500,
              fontSize: 28,
            }}
          >
            Почему стоит попробовать прямо сейчас?
          </h2>
        </header>

        {/* Верхние карточки (ограничение ширины на md) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:justify-items-center gap-6 md:gap-8 mb-16 max-w-5xl mx-auto">
          {certificacoes.map((cert, index) => (
            <article
              key={index}
              className="relative w-full md:max-w-[420px] backdrop-blur-xl rounded-2xl border overflow-hidden"
              style={{ background: GLASS.cardBg, borderColor: GLASS.cardBorder, boxShadow: GLASS.cardShadow }}
              aria-labelledby={`cert-title-${index}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-transparent rounded-2xl" aria-hidden="true" />
              <div className="absolute inset-0 bg-gradient-to-tl from-black/20 via-transparent to-black/10 rounded-2xl" aria-hidden="true" />

              <div className="relative z-10">
                <img
                  src={cert.imagem}
                  alt={`${cert.titulo} - ${cert.detalhes}`}
                  className="w-full h-64 md:h-60 lg:h-64 object-cover"
                  style={{ filter: 'brightness(1.1) contrast(1.05)' }}
                />

                <div className="p-8 text-center">
                  <h3
                    id={`cert-title-${index}`}
                    className="mb-4"
                    style={{
                      color: COLORS.white,
                      fontFamily: 'Horizon, sans-serif',
                      fontSize: 16,
                      letterSpacing: '0.03em',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                    }}
                  >
                    {cert.titulo}
                  </h3>

                  <p style={{ color: COLORS.white, fontFamily: 'Garet, sans-serif', fontSize: 13, opacity: 0.75 }}>
                    {cert.detalhes}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Дополнительные преимущества */}
        <section className="mt-16" aria-labelledby="additional-benefits-heading">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div
              className="backdrop-blur-xl rounded-2xl p-8 border text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(68,79,85,0.95) 0%, rgba(59,59,58,0.95) 100%)',
                borderColor: GLASS.cardBorder,
                boxShadow: GLASS.cardShadow,
              }}
            >
              <h4
                style={{
                  color: COLORS.white,
                  fontFamily: 'Horizon, sans-serif',
                  fontSize: 16,
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '12px',
                }}
              >
                Современный ноский маникюр
              </h4>
              <p
                style={{
                  color: COLORS.white,
                  fontFamily: 'Garet, sans-serif',
                  fontSize: 14,
                  opacity: 0.9,
                }}
              >
                Держится дольше, чем стандартный
              </p>
            </div>

            <div
              className="backdrop-blur-xl rounded-2xl p-8 border text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(254,254,254,0.95) 0%, rgba(253,255,254,0.95) 100%)',
                borderColor: COLORS.white,
                boxShadow: GLASS.cardShadow,
              }}
            >
              <h4
                style={{
                  color: COLORS.dark,
                  fontFamily: 'Horizon, sans-serif',
                  fontSize: 16,
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '12px',
                }}
              >
                Спеццена для первых клиентов
              </h4>
              <p
                style={{
                  color: COLORS.dark,
                  fontFamily: 'Garet, sans-serif',
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                Только за полцены
              </p>
            </div>
          </div>
        </section>

        {/* Обучение и сертификация */}
        <section className="mt-20" aria-labelledby="formacao-heading">
          <header className="text-center mb-16">
            <h3
              id="formacao-heading"
              style={{
                color: COLORS.white,
                fontFamily: 'Horizon, sans-serif',
                fontSize: 20, // Уменьшен с 24 для мобильных
                letterSpacing: '0.1em',
                fontWeight: 500,
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
              className="md:text-2xl" // На средних экранах и больше - размер 24px
            >
              Обучены по международным стандартам
            </h3>
            <p
              style={{
                color: COLORS.white,
                fontFamily: 'Garet, sans-serif',
                fontSize: 16,
                opacity: 0.9,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              Наши специалисты обучены по государственной профессиональной программе Российской Федерации
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:justify-items-center gap-6 md:gap-8">
            {/* Колонка 1 */}
            <div className="space-y-6">
              {[
                { src: '/images/masters/0_0 (15).jpeg', alt: 'Международный инструктор 1', label: 'Обучение' },
                { src: '/images/masters/0_0 (22).jpeg', alt: 'Международный инструктор 2', label: 'Тренинг' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative w-full md:max-w-[420px] backdrop-blur-xl rounded-2xl border overflow-hidden group"
                  style={{ background: GLASS.cardBg, borderColor: GLASS.cardBorder, boxShadow: GLASS.cardShadow, aspectRatio: '4/3' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: 'brightness(1.1) contrast(1.05)' }}
                  />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div
                      className="backdrop-blur-sm rounded-lg p-2 border"
                      style={{ background: 'rgba(255,255,255,0.15)', borderColor: 'rgba(255,255,255,0.2)' }}
                    >
                      <p style={{ color: '#3B3B3A', fontFamily: 'Garet, sans-serif', fontSize: 11, fontWeight: 600, textAlign: 'center' }}>
                        {item.label}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Колонка 2 */}
            <div className="space-y-6">
              <div
                className="relative w-full md:max-w-[420px] backdrop-blur-xl rounded-2xl border overflow-hidden group"
                style={{ background: GLASS.cardBg, borderColor: GLASS.cardBorder, boxShadow: GLASS.cardShadow, aspectRatio: '4/3' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
                <img
                  src="/images/masters/0_3 (20).jpeg"
                  alt="Сертификаты"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: 'brightness(1.1) contrast(1.05)' }}
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div
                    className="backdrop-blur-sm rounded-lg p-2 border"
                    style={{ background: 'rgba(255,255,255,0.15)', borderColor: 'rgba(255,255,255,0.2)' }}
                  >
                    <p style={{ color: '#3B3B3A', fontFamily: 'Garet, sans-serif', fontSize: 11, fontWeight: 600, textAlign: 'center' }}>
                      Квалификация
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="relative w-full md:max-w-[420px] backdrop-blur-xl rounded-2xl border overflow-hidden group"
                style={{ background: GLASS.cardBg, borderColor: GLASS.cardBorder, boxShadow: GLASS.cardShadow, aspectRatio: '4/3' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
                <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                  <source src="/images/masters/hd.mp4" type="video/mp4" />
                </video>
                <div className="absolute bottom-4 left-4 right-4">
                  <div
                    className="backdrop-blur-sm rounded-lg p-2 border"
                    style={{ background: 'rgba(255,255,255,0.15)', borderColor: 'rgba(255,255,255,0.2)' }}
                  >
                    <p style={{ color: '#3B3B3A', fontFamily: 'Garet, sans-serif', fontSize: 11, fontWeight: 600, textAlign: 'center' }}>
                      Обслуживание
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Колонка 3: плашка сверху, паспорт снизу */}
            <div className="w-full md:max-w-[420px] space-y-6">
              {/* Плашка */}
              <div
                className="backdrop-blur-xl rounded-2xl p-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(68,79,85,0.95) 0%, rgba(59,59,58,0.95) 100%)',
                  border: '1px solid #FEFEFE',
                  boxShadow: '0 32px 64px rgba(68,79,85,0.3)',
                }}
              >
                <div className="text-center">
                  <h4
                    style={{
                      color: '#FEFEFE',
                      fontFamily: 'Horizon, sans-serif',
                      fontSize: 16,
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: '12px',
                      lineHeight: 1.3,
                    }}
                  >
                    Сертификат безопасности
                  </h4>

                  <div
                    className="px-4 py-3 rounded-xl"
                    style={{
                      background: '#FEFEFE',
                      color: '#3B3B3A',
                      fontFamily: 'Garet, sans-serif',
                      fontSize: 12,
                      fontWeight: 600,
                      textAlign: 'center',
                      lineHeight: 1.4,
                    }}
                  >
                    Наши материалы полностью безопасны и соответствуют международным стандартам качества
                  </div>
                </div>
              </div>

              {/* Паспорт под плашкой */}
              <div
                className="relative rounded-2xl border overflow-hidden max-h-96 mx-auto"
                style={{
                  background: GLASS.cardBg,
                  borderColor: GLASS.cardBorder,
                  boxShadow: GLASS.cardShadow,
                  aspectRatio: '2/3',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
                <img
                  src="/images/masters/certificate.png"
                  alt="Паспорт безопасности эмалей"
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(1.08) contrast(1.05)' }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>  
    </section>
  )
}
