import { HeroSlide } from './types'

export const heroSlidesRU: HeroSlide[] = [
  {
    id: 1,
    image: '/images/hero/hero1.jpeg',
    title: 'GOMANIC',
    subtitle: '',
    content: 'Независимые специалисты, сертифицированные по программе - Mетод эстетики ногтей GOMANIC'
  },
  
  {
    id: 2,
    image: '/images/hero/hero2.jpeg',
    title: 'Экономия до 55%',
    subtitle: '',
    services: [
      { name: 'Маникюр без покрытия + снятие геля-лака', oldPrice: 1200, newPrice: 600 },
      { name: 'Маникюр + гель-лак + снятие', oldPrice: 2500, newPrice: 1200 },
      { name: 'Маникюр + гель-лак + укрепление гелем + снятие', oldPrice: 3000, newPrice: 1600 },
      { name: 'Наращивание/коррекция + маникюр + гель-лак', oldPrice: 4000, newPrice: 1800 }
    ]
  },
  
  {
    id: 3,
    image: '/images/hero/hero3.jpeg',
    title: 'Акция месяца',
    subtitle: '',
    benefits: [
      'Только 30 клиентов в месяц могут воспользоваться предложением',
      'Эта цена больше не повторится после того, как места закончатся',
      'Клиенты получают подарок-сюрприз при первом посещении'
    ]
  }
]
