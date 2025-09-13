import { useState, useEffect } from 'react'
import { MasterConfig } from '@/types/master'

// Google карта для Невского 118
const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.7654321098765!2d30.32123456789!3d59.93456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469631a2b1234567%3A0x1234567890abcdef!2z0J3QtdCy0YHQutC40Lkg0L_RgNC-0YHQv9C10LrRgiAxMTgsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCDQoNC-0YHRgdC40Y8sIDE5MTA5NQ!5e0!3m2!1sru!2sru!4v1693123456789!5m2!1sru!2sru"

interface MasterIntroProps {
  masterData: MasterConfig | null
}

// Цвета для статусов мастеров
const statusColors = {
  intern: {
    bg: 'bg-blue-50',
    border: 'border-blue-200', 
    text: 'text-blue-700',
    accent: '#3B82F6'
  },
  experienced: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-700', 
    accent: '#10B981'
  },
  model: {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'text-purple-700',
    accent: '#8B5CF6'
  }
}

export default function MasterIntro({ masterData }: MasterIntroProps) {
  // Для localhost загружаем данные Анастасии по умолчанию
  const [defaultData, setDefaultData] = useState<MasterConfig | null>(null)
  
  useEffect(() => {
    if (!masterData && typeof window !== 'undefined' && window.location.hostname === 'localhost') {
      // Загружаем данные Анастасии для localhost
      fetch('/api/masters/anastasia-moscow')
        .then(res => res.json())
        .then(data => setDefaultData(data))
        .catch(err => console.error('Error loading default master data:', err))
    }
  }, [masterData])
  
  const currentMasterData = masterData || defaultData
  if (!currentMasterData) return null

  const { personal } = currentMasterData
  const statusStyle = statusColors[personal.status.type]

  const handleServicesClick = () => {
    document.getElementById('promocoes')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleBookingClick = () => {
    document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="master-intro" className="py-20" style={{ backgroundColor: '#FEFEFE' }}>
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl lg:text-5xl font-bold mb-4 uppercase tracking-wide"
            style={{ 
              fontFamily: 'DrukWideCyr-Super, Arial, sans-serif',
              color: '#444f55'
            }}
          >
            Мастер системы GOMANIC
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Левая часть - Фото */}
          <div className="relative">
            <div
              className="relative aspect-square rounded-2xl overflow-hidden backdrop-blur-xl border"
              style={{
                background: "rgba(255, 255, 255, 0.12)",
                borderColor: "rgba(255, 255, 255, 0.25)",
                boxShadow: "0 32px 64px rgba(0,0,0,0.5)",
              }}
            >
              <img
                src={personal.photo}
                alt={personal.name}
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  filter: "brightness(0.85) contrast(1.1)"
                }}
                onError={(e) => {
                  e.currentTarget.src = '/images/placeholder-master.jpg'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/30"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-black/20 via-transparent to-transparent"></div>
              
              {/* Имя поверх фото */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 
                  className="text-2xl lg:text-3xl font-bold mb-2 uppercase tracking-wide"
                  style={{ fontFamily: 'DrukWideCyr-Super, Arial, sans-serif' }}
                >
                  {personal.name}
                </h3>
                <p 
                  className="text-sm opacity-90"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {personal.status.label}
                </p>
                <p 
                  className="text-xs opacity-75"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {personal.status.promotion?.text}
                </p>
              </div>
            </div>
          </div>

          {/* Правая часть - Информация */}
          <div className="space-y-8">
            
            {/* О себе */}
            <div className="space-y-4">
              <p 
                className="text-lg lg:text-xl leading-relaxed"
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  color: '#444f55'
                }}
              >
                О себе: <em>"{personal.strongSide.description}"</em>
              </p>
            </div>

            {/* Адрес */}
            <div className="space-y-4">
              <p 
                className="text-lg lg:text-xl leading-relaxed"
                style={{ 
                  fontFamily: 'Manrope, sans-serif',
                  color: '#444f55'
                }}
              >
                Адрес: Невский проспект, 118, этаж 4, офис 4109, Санкт-Петербург
              </p>
              
              {/* Google карта */}
              <div className="rounded-lg overflow-hidden shadow-lg border" style={{ borderColor: 'rgba(68, 79, 85, 0.1)' }}>
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Карта расположения салона GOMANIC"
                  className="w-full"
                ></iframe>
              </div>
            </div>

            {/* Кнопки */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleServicesClick}
                className="px-8 py-4 rounded-lg font-bold text-white transition-all hover:opacity-90 hover:scale-105 uppercase tracking-wide whitespace-nowrap"
                style={{ 
                  backgroundColor: '#444f55', 
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '14px',
                  letterSpacing: '0.1em'
                }}
              >
                ПОСМОТРЕТЬ УСЛУГИ
              </button>
              
              <button
                onClick={handleBookingClick}
                className="px-8 py-4 rounded-lg font-bold border-2 transition-all hover:opacity-90 hover:scale-105 uppercase tracking-wide whitespace-nowrap"
                style={{ 
                  color: '#444f55', 
                  borderColor: '#444f55',
                  backgroundColor: 'transparent',
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '14px',
                  letterSpacing: '0.1em'
                }}
              >
                ЗАПИСАТЬСЯ К МАСТЕРУ
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
