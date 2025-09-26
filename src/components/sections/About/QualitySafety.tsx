'use client'
import React, { useState } from 'react'
import { MasterConfig } from '@/types/master'
import { HorizonText } from '@/components/common/ui';

interface QualitySafetyProps {
  masterData?: MasterConfig | null;
}

interface VideoItemProps {
  src: string
  poster: string
  alt: string
  label: string
}

function VideoItem({ src, poster, alt, label }: VideoItemProps) {
  const [hasError, setHasError] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  
  const handleVideoClick = (e: React.MouseEvent<HTMLVideoElement>) => {
    const video = e.currentTarget
    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }
  
  if (hasError) {
    return (
      <img
        src={poster}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        style={{ filter: 'brightness(1.1) contrast(1.05)' }}
      />
    )
  }
  
  return (
    <video 
      className="w-full h-full object-cover cursor-pointer" 
      autoPlay 
      loop 
      muted 
      playsInline
      preload="metadata"
      onClick={handleVideoClick}
      onError={() => setHasError(true)}
      onLoadStart={() => console.log('Loading video:', src)}
      onPlay={() => setIsPlaying(true)}
      onPause={() => setIsPlaying(false)}
    >
      <source src={src} type="video/mp4" />
      <img
        src={poster}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ filter: 'brightness(1.1) contrast(1.05)' }}
      />
    </video>
  )
}

export default function QualitySafety({ masterData }: QualitySafetyProps): JSX.Element {
  const [isPlaying] = useState(false)

  const COLORS = { dark: '#444f55', gray: '#3B3B3A', white: '#FEFEFE' }
  const GLASS = {
    cardBg: 'rgba(255, 255, 255, 0.12)',
    cardBorder: 'rgba(255, 255, 255, 0.25)',
    cardShadow: '0 32px 64px rgba(0,0,0,0.5)',
  }

  const certificacoes = [
    {
      imagem: '/images/higiene/higiene1.jpeg',
      titulo: 'Новейшие техники',
      detalhes: 'Мастер прошёл обучение по последним технологиям подготовки ногтей',
    },
    {
      imagem: '/images/higiene/higiene2.jpeg',
      titulo: 'Премиум-материалы',
      detalhes: 'Материалы с сертификатами безопасности',
    },
    {
      imagem: '/images/higiene/higiene3.jpeg',
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

          <HorizonText 
          as="h2"
          id="seguranca-heading"
          className="vogue-subhead mb-8"
          style={{color: COLORS.white}}
        >
          Почему стоит попробовать прямо сейчас?
        </HorizonText>
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
                      fontFamily: 'DrukWideCyr-Super, sans-serif',
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
                  fontFamily: 'DrukWideCyr-Super, sans-serif',
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
                  fontFamily: 'Manrope, sans-serif',
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
                  fontFamily: 'DrukWideCyr-Super, sans-serif',
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
                  fontFamily: 'Manrope, sans-serif',
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
                fontFamily: 'DrukWideCyr-Super, sans-serif',
                fontSize: 20, // Уменьшен с 24 для мобильных
                letterSpacing: '0.1em',
                fontWeight: 500,
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
              className="md:text-2xl" // На средних экранах и больше - размер 24px
            >
              стандарт работы
            </h3>
            <p
              style={{
                color: COLORS.white,
                fontFamily: 'Manrope, sans-serif',
                fontSize: 16,
                opacity: 0.9,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
             Специалист обучен по международной программе GOMANIC
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {/* Первая строка - 3 фото */}
            {[
              { src: '/images/masters/masters1.jpeg', alt: 'Международный стандарт 1', label: 'Обучение' },
              { src: '/images/masters/masters2.jpeg', alt: 'Международный стандарт 2', label: 'Тренировки' },
              { src: '/images/masters/masters3.jpeg', alt: 'Международный стандарт 3', label: 'Сертификация' }
            ].map((item, i) => (
              <div
                key={i}
                className="relative w-full backdrop-blur-xl rounded-2xl border overflow-hidden group"
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {/* Вторая строка - 3 видео */}
            {[
              { src: '/images/masters/hd.mp4', type: 'video', alt: 'Видео обучение 1', label: 'Прием клиентов', poster: '/images/masters/masters1.jpeg' },
              { src: '/images/masters/2.mp4', type: 'video', alt: 'Видео обучение 2', label: 'Материалы', poster: '/images/masters/masters2.jpeg' },
              { src: '/images/masters/3.mp4', type: 'video', alt: 'Видео обучение 3', label: 'Процесс', poster: '/images/masters/masters3.jpeg' }
            ].map((item, i) => (
              <div
                key={i}
                className="relative w-full backdrop-blur-xl rounded-2xl border overflow-hidden group"
                style={{ background: GLASS.cardBg, borderColor: GLASS.cardBorder, boxShadow: GLASS.cardShadow, aspectRatio: '4/3' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
                <VideoItem
                  src={item.src}
                  poster={item.poster}
                  alt={item.alt}
                  label={item.label}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Сертификат */}
            <div
              className="relative rounded-2xl border overflow-hidden"
              style={{
                background: GLASS.cardBg,
                borderColor: GLASS.cardBorder,
                boxShadow: GLASS.cardShadow,
                aspectRatio: '3/4',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
              <img
                src="/images/masters/certificate.png"
                alt="Сертификат международных стандартов"
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(1.08) contrast(1.05)' }}
              />
            </div>

            {/* Плашка */}
            <div className="flex items-center">
              <div
                className="backdrop-blur-xl rounded-2xl p-8 w-full"
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
                      fontFamily: 'DrukWideCyr-Super, sans-serif',
                      fontSize: 18,
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: '16px',
                      lineHeight: 1.3,
                    }}
                  >
                    Сертификат безопасности
                  </h4>

                  <div
                    className="px-6 py-4 rounded-lg"
                    style={{
                      background: '#FEFEFE',
                      color: '#3B3B3A',
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: 14,
                      fontWeight: 600,
                      textAlign: 'center',
                      lineHeight: 1.5,
                    }}
                  >
                    Материалы полностью безопасны и соответствуют международным стандартам качества
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>  
    </section>
  )
}
