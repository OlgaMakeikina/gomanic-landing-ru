import { HeroSlide } from './types'

export const heroSlidesRU: HeroSlide[] = [
  {
    id: 1,
    image: '/images/hero/0_3 (10).jpeg',
    title: 'GOMANIC Специалисты',
    subtitle: 'Премиум маникюр за полцены',
    content: 'Откройте для себя VIP-мир профессионального маникюра с эксклюзивными ценами для участников.'
  },
  
  {
    id: 2,
    image: '/images/hero/0_0.jpeg',
    title: 'цены vip-пропуска',
    subtitle: 'Экономия до 55%',
    services: [
      { name: 'Маникюр без покрытия + снятие геля-лака', oldPrice: 1200, newPrice: 600 },
      { name: 'Маникюр + гель-лак + снятие', oldPrice: 2500, newPrice: 1200 },
      { name: 'Маникюр + гель-лак + укрепление гелем + снятие', oldPrice: 3000, newPrice: 1600 },
      { name: 'Наращивание/коррекция + маникюр + гель-лак', oldPrice: 4000, newPrice: 1800 }
    ]
  },
  
  {
    id: 3,
    image: '/images/hero/0_3 (10).jpeg',
    title: 'VIP-пропуск',
    subtitle: 'Эксклюзивные преимущества только для участников',
    benefits: [
      'Только 30 клиентов в месяц могут иметь VIP-пропуск',
      'Эта цена больше не повторится после того, как места закончатся',
      'VIP-клиенты получают подарок-сюрприз при первом посещении'
    ]
  }
]
