import { MasterConfig } from '@/types/master'
import { HeroSlide } from '@/components/sections/Hero/types'

export function generateMasterSlides(masterData: MasterConfig): HeroSlide[] {
  return [
    {
      id: 1,
      image: '/images/hero/hero1.jpeg',
      title: masterData.personal.name,
      subtitle: masterData.seo.h2,
      content: masterData.personal.strongSide.description
    },
    {
      id: 2,
      image: '/images/hero/hero2.jpeg',
      title: 'Услуги и цены',
      subtitle: `${masterData.personal.status.label} - специальные предложения`,
      content: 'Профессиональный маникюр по выгодным ценам',
      services: masterData.services.slice(0, 3).map(service => ({
        name: service.name,
        oldPrice: service.originalPrice,
        newPrice: service.currentPrice
      }))
    },
    {
      id: 3,
      image: '/images/hero/hero3.jpeg',
      title: 'Запись на приём',
      subtitle: `${masterData.contacts.address.city}, ${masterData.contacts.address.metro || ''}`,
      content: masterData.contacts.address.full
    }
  ]
}
