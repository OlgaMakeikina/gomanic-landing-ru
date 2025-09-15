import { HeroSlide } from './types'

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: '/images/hero/0_3 (10).jpeg',
    title: 'GOMANIC Especialistas',
    subtitle: 'Manicure premium pela metade do preço',
    content: 'Descubra o mundo VIP da manicure profissional com preços exclusivos para membros.'
  },
  
  {
    id: 2,
    image: '/images/hero/0_0.jpeg',
    title: 'preços do passe vip',
    subtitle: 'Economia de até 50%',
    services: [
      { name: 'Manicure + nivelamento + esmaltação em gel', oldPrice: 160, newPrice: 80 },
      { name: 'Alongamento + manicure + esmaltação em gel', oldPrice: 200, newPrice: 119 },
      { name: 'Combo: manicure + esmaltação em gel + pedicure + plástica dos pés', oldPrice: 320, newPrice: 160 }
    ]
  }
]
