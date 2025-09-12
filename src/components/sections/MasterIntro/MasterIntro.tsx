import { useState, useEffect } from 'react'
import { MasterConfig } from '@/types/master'

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
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={personal.photo}
                alt={personal.name}
                className="w-full h-[500px] object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/images/placeholder-master.jpg'
                }}
              />
              
              {/* Градиент снизу */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Имя поверх фото */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 
                  className="text-2xl lg:text-3xl font-bold mb-2 uppercase tracking-wide"
                  style={{ fontFamily: 'DrukWideCyr-Super, Arial, sans-serif' }}
                >
                  {personal.name}
                </h3>
              </div>
            </div>
          </div>

          {/* Правая часть - Информация */}
          <div className="space-y-8">
            
            {/* Статус */}
            <div className={`inline-flex items-center px-6 py-3 rounded-full border ${statusStyle.bg} ${statusStyle.border}`}>
              <div 
                className="w-3 h-3 rounded-full mr-3"
                style={{ backgroundColor: statusStyle.accent }}
              ></div>
              <span className={`font-semibold text-sm ${statusStyle.text}`} style={{ fontFamily: 'Manrope, sans-serif' }}>
                {personal.status.label}
              </span>
              {personal.status.promotion?.isActive && (
                <span className="ml-3 text-xs font-medium text-gray-600" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  {personal.status.promotion.text}
                </span>
              )}
            </div>

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
