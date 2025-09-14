import { HeroSlide } from './types'

export const heroSlidesRU: HeroSlide[] = [
  {
    id: 1,
    image: '/images/hero/hero4.jpeg',
    title: 'GOMANIC',
    subtitle: '',
    content: 'Независимые специалисты, сертифицированные по программе - Mетод эстетики ногтей GOMANIC'
  },
  
  {
    id: 2,
    image: '/images/hero/hero1.jpeg',
    title: 'Экономия до 55%',
    subtitle: '',
    services: [
      { name: 'Гель-лак + снятие + маникюр', oldPrice: 2000, newPrice: 999 },
      { name: 'Гель-лак + архитектура гелем + маникюр + снятие', oldPrice: 2700, newPrice: 1299 },
      { name: 'Наращивание ногтей + маникюр + снятие лака', oldPrice: 3500, newPrice: 1799 }
    ]
  },
  
  {
    id: 3,
    image: '/images/hero/hero3.jpeg',
    title: 'Акция месяца',
    subtitle: '',
    benefits: [
      'Только 20 клиентов в месяц могут воспользоваться предложением',
      'Эта цена больше не повторится после того, как места закончатся',
      'Клиенты получают подарок-сюрприз при первом посещении'
    ]
  }
]
