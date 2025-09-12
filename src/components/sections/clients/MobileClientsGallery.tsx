'use client'

import { useState, useRef } from 'react'

interface MobileClientsGalleryProps {
  colors: {
    dark: string;
    white: string;
  };
}

export default function MobileClientsGallery({ colors }: MobileClientsGalleryProps) {
  const clientImages = [
    '/images/clients/0_0_4_1.jpeg',
    '/images/clients/0_1_13.jpeg', 
    '/images/clients/0_2_3_1.jpeg',
    '/images/clients/0_2_4.jpeg',
    '/images/clients/0_2_6_1.jpeg',
    '/images/clients/0_3_23.jpeg',
    '/images/clients/0_3_24.jpeg',
    '/images/clients/0_3_25_1.jpeg',
    '/images/clients/0_3_3_1.jpeg',
    '/images/clients/client1.jpeg',
    '/images/clients/client2.jpeg',
    '/images/clients/client3.jpeg'
  ]

  const clientVideo = '/images/clients/u2311792965_httpss.mj.runUTcEApe-3E8_Ultra_realistic_hyper_de_f3873cb7-a4ac-4988-ae27-89ca058a275d_3.mp4'
  const allMedia = [...clientImages, clientVideo]

  const [currentIndex, setCurrentIndex] = useState(0)
  const touchStartX = useRef<number>(0)
  const touchEndX = useRef<number>(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    
    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && currentIndex < allMedia.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <div className="md:hidden px-4">
      {/* Слайдер */}
      <div className="mb-6">
        <div 
          className="overflow-hidden rounded-2xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {allMedia.map((media, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2">
                {media.endsWith('.mp4') ? (
                  <div className="aspect-[9/16] bg-black rounded-2xl overflow-hidden mx-auto max-w-[280px]">
                    <video
                      className="w-full h-full object-cover"
                      autoPlay loop muted playsInline
                    >
                      <source src={media} type="video/mp4" />
                    </video>
                  </div>
                ) : (
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <img
                      src={media}
                      alt={`Довольная клиентка ${index + 1}`}
                      className="w-full h-full object-cover"
                      style={{filter: 'brightness(1.1) contrast(1.05) saturate(1.2)'}}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Индикаторы */}
        <div className="flex justify-center mt-4 space-x-2">
          {allMedia.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                backgroundColor: index === currentIndex ? colors.white : 'rgba(255,255,255,0.3)'
              }}
            />
          ))}
        </div>
        
        {/* Навигационные стрелки */}
        <div className="flex justify-center mt-4 space-x-4">
          <button
            onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm transition-all"
            style={{
              background: 'rgba(255,255,255,0.1)',
              opacity: currentIndex === 0 ? 0.3 : 1
            }}
          >
            <span className="text-white">←</span>
          </button>
          
          <button
            onClick={() => setCurrentIndex(Math.min(allMedia.length - 1, currentIndex + 1))}
            disabled={currentIndex === allMedia.length - 1}
            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm transition-all"
            style={{
              background: 'rgba(255,255,255,0.1)',
              opacity: currentIndex === allMedia.length - 1 ? 0.3 : 1
            }}
          >
            <span className="text-white">→</span>
          </button>
        </div>
      </div>

      {/* CTA плашка */}
      <div className="rounded-2xl border shadow-2xl p-6 text-center relative overflow-hidden backdrop-blur-xl"
           style={{ 
             background:"rgba(68,78,85,.90)", 
             borderColor:"rgba(254,254,254,.3)",
             boxShadow: "0 25px 50px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)"
           }}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-2xl"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-black/20 via-transparent to-black/10 rounded-2xl"></div>
        
        <div className="relative z-10">
          <h4 className="uppercase tracking-[0.12em] mb-4"
              style={{ 
                color: colors.white, 
                fontFamily:"DrukWideCyr-Super, sans-serif", 
                fontWeight:600, 
                fontSize:18,
                lineHeight:1.3,
                textShadow: "0 2px 8px rgba(0,0,0,0.4)"
              }}>
            СТАНЬ СЛЕДУЮЩЕЙ ДОВОЛЬНОЙ КЛИЕНТКОЙ
          </h4>
          
          <p className="mb-6 opacity-90"
             style={{ 
               color: colors.white, 
               fontFamily:"Manrope, sans-serif", 
               fontSize:14,
               lineHeight:1.5
             }}>
            Тысячи клиентов уже доверились нашей работе
          </p>
          
          <button
            onClick={() => document.getElementById('agendamento')?.scrollIntoView({ behavior:'smooth' })}
            className="w-full rounded-2xl px-6 py-4 font-bold uppercase tracking-wider text-sm transition-all duration-300 transform active:scale-95"
            style={{ 
              background: "linear-gradient(135deg, rgba(254,254,254,0.98) 0%, rgba(254,254,254,0.92) 100%)", 
              color: colors.dark,
              border: "1px solid rgba(255,255,255,0.4)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 8px 25px rgba(254,254,254,0.2)"
            }}
          >
            ХОЧУ ПРИСОЕДИНИТЬСЯ
          </button>
        </div>
      </div>
    </div>
  );
}