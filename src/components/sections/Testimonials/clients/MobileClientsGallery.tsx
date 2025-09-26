'use client'

import { useState, useRef, useEffect } from 'react'
import { useSwipeNavigation } from '@/hooks/useSwipeNavigation'
import { MobileHidden } from '@/components/common'

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

  const allMedia = clientImages

  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    if (currentIndex < allMedia.length - 1) {
      setCurrentIndex(currentIndex + 1)
      if (scrollRef.current) {
        scrollRef.current.scrollTo({
          left: (currentIndex + 1) * scrollRef.current.offsetWidth,
          behavior: 'smooth'
        })
      }
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      if (scrollRef.current) {
        scrollRef.current.scrollTo({
          left: (currentIndex - 1) * scrollRef.current.offsetWidth,
          behavior: 'smooth'
        })
      }
    }
  }

  const swipeHandlers = useSwipeNavigation({
    onSwipeLeft: nextSlide,
    onSwipeRight: prevSlide,
    threshold: 50,
    preventDefault: true,
    enableMouse: true
  })

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return
      
      const container = scrollRef.current
      const itemWidth = container.offsetWidth
      const newIndex = Math.round(container.scrollLeft / itemWidth)
      
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex)
      }
    }

    const scrollElement = scrollRef.current
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll)
      return () => scrollElement.removeEventListener('scroll', handleScroll)
    }
  }, [currentIndex])

  return (
    <div className="md:hidden px-4">
      <div className="mb-6">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide rounded-lg"
          style={{ 
            scrollBehavior: 'smooth',
            touchAction: 'pan-y pinch-zoom',
            WebkitOverflowScrolling: 'touch',
            overscrollBehaviorX: 'none'
          }}
          {...swipeHandlers}
        >
          {allMedia.map((media, index) => (
            <div key={index} className="w-full flex-shrink-0 snap-center px-2">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={media}
                  alt={`Довольная клиентка ${index + 1}`}
                  className="w-full h-full object-cover"
                  style={{filter: 'brightness(1.1) contrast(1.05) saturate(1.2)'}}
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-4 space-x-2">
          {allMedia.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                if (scrollRef.current) {
                  scrollRef.current.scrollTo({
                    left: index * scrollRef.current.offsetWidth,
                    behavior: 'smooth'
                  })
                }
              }}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                backgroundColor: index === currentIndex ? colors.white : 'rgba(255,255,255,0.3)'
              }}
            />
          ))}
        </div>
      </div>

      <div className="rounded-lg border shadow-2xl p-6 text-center relative overflow-hidden backdrop-blur-xl"
           style={{ 
             background:"rgba(68,78,85,.90)", 
             borderColor:"rgba(254,254,254,.3)",
             boxShadow: "0 25px 50px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)"
           }}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-lg"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-black/20 via-transparent to-black/10 rounded-lg"></div>
        
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
            СТАНЬ НАШЕЙ ДОВОЛЬНОЙ КЛИЕНТКОЙ
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
          
          <MobileHidden>
            <button
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior:'smooth' })}
              className="w-full rounded-lg px-6 py-4 font-bold uppercase tracking-wider text-sm transition-all duration-300 transform active:scale-95"
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
          </MobileHidden>
        </div>
      </div>
    </div>
  );
}
