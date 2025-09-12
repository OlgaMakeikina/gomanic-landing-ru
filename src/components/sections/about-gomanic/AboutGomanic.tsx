'use client'

import { useState, useEffect } from 'react'

export default function AboutGomanic() {
  const [isVisible, setIsVisible] = useState(false)

  const stats = [
    { number: "3000+", label: "учеников из 12 стран обучено", icon: "🎓" },
    { number: "50 000", label: "маникюров моделям сделано", icon: "💅" },
    { number: "20 000", label: "моделей школы", icon: "👥" },
    { number: "5", label: "профессиональных образовательных программ", icon: "📚" }
  ]

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    const message = "Привет! Я хочу узнать подробнее об обучении в академии GOMANIC."
    window.open(`https://wa.me/79123456789?text=${encodeURIComponent(message)}`, '_blank')
  }

  const handleTelegramClick = () => {
    const message = "Привет! Я хочу узнать подробнее об обучении в академии GOMANIC."
    window.open(`https://t.me/gomanic_academy?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section 
      id="about-gomanic" 
      className="py-20 relative overflow-hidden" 
      style={{ 
        backgroundImage: 'url(/images/clients/0_0_4_1.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 z-0" style={{ background: 'rgba(0,0,0,0.4)', filter: 'grayscale(100%)' }}></div>
      <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(135deg, rgba(59,59,58,0.5) 0%, rgba(68,79,85,0.5) 100%)' }}></div>

      <div className="relative z-20 mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <div className="uppercase tracking-[0.22em] mb-4" style={{ color: '#FEFEFE', fontFamily: "Manrope, sans-serif", fontSize: 14, opacity: 0.85 }}>
            О ПЛАТФОРМЕ
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 uppercase tracking-wide" style={{ fontFamily: 'DrukWideCyr-Super, Arial, sans-serif', color: '#FEFEFE' }}>
            GOMANIC
          </h2>
          <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Manrope, sans-serif', color: '#FEFEFE', fontWeight: 300, opacity: 0.9 }}>
            Маркетинговая платформа академии маникюра GOMANIC
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center p-6 rounded-2xl backdrop-blur-xl border border-white border-opacity-25 transition-all duration-700 hover:scale-105 relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                background: 'rgba(254, 254, 254, 0.12)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/8 to-transparent rounded-2xl"></div>
              <div className="relative z-10">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl lg:text-4xl font-bold mb-2" style={{ fontFamily: 'DrukWideCyr-Super, Arial, sans-serif', color: '#FEFEFE' }}>
                  {stat.number}
                </div>
                <p className="text-base leading-relaxed" style={{ fontFamily: 'Manrope, sans-serif', color: '#FEFEFE', opacity: 0.9 }}>
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16 p-6 rounded-2xl backdrop-blur-xl border border-white border-opacity-25 relative overflow-hidden"
             style={{ background: 'rgba(254, 254, 254, 0.08)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)' }}>
          <div className="relative z-10">
            <div className="text-lg font-semibold mb-2" style={{ fontFamily: 'Manrope, sans-serif', color: '#FEFEFE' }}>
              Лицензия комитета по образованию
            </div>
            <div className="text-base mb-1" style={{ fontFamily: 'Manrope, sans-serif', color: '#FEFEFE', opacity: 0.8 }}>
              Регистрационный номер лицензии: № Л035-01271-78/006575853
            </div>
            <div className="text-base mb-2" style={{ fontFamily: 'Manrope, sans-serif', color: '#FEFEFE', opacity: 0.8 }}>
              Дата предоставления лицензии: 16.06.2023
            </div>
            <div className="text-sm" style={{ fontFamily: 'Manrope, sans-serif', color: '#FEFEFE', opacity: 0.7 }}>
              Общество с ограниченной ответственностью «Управляющая компания Развитие»
            </div>
          </div>
        </div>

        <div className="text-center p-8 rounded-2xl backdrop-blur-xl border border-white border-opacity-30 relative overflow-hidden"
             style={{ background: 'rgba(254, 254, 254, 0.15)', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)' }}>
          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 uppercase tracking-wide" style={{ fontFamily: 'DrukWideCyr-Super, Arial, sans-serif', color: '#FEFEFE' }}>
              Хочешь стать частью команды GOMANIC?
            </h3>
            <p className="text-lg mb-8 opacity-90" style={{ fontFamily: 'Manrope, sans-serif', color: '#FEFEFE' }}>
              Пройди профессиональное обучение и получи все навыки для успешной карьеры в nail-индустрии
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={handleWhatsAppClick} className="px-8 py-4 rounded-lg font-bold transition-all hover:opacity-90 hover:scale-105 uppercase tracking-wide"
                      style={{ backgroundColor: '#FEFEFE', color: '#444f55', fontFamily: 'Manrope, sans-serif', fontSize: '14px', letterSpacing: '0.1em' }}>
                📱 НАПИСАТЬ В WHATSAPP
              </button>
              <button onClick={handleTelegramClick} className="px-8 py-4 rounded-lg font-bold border-2 transition-all hover:opacity-90 hover:scale-105 uppercase tracking-wide"
                      style={{ color: '#FEFEFE', borderColor: '#FEFEFE', backgroundColor: 'transparent', fontFamily: 'Manrope, sans-serif', fontSize: '14px', letterSpacing: '0.1em' }}>
                ✈️ НАПИСАТЬ В TELEGRAM
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}