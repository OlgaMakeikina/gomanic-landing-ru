import { MasterConfig } from '@/types/master'

export function generateMasterSlides(masterData: MasterConfig) {
  return [
    {
      id: 'master-intro',
      title: masterData.personal.name,
      subtitle: masterData.seo.h2,
      content: masterData.personal.strongSide.description,
      backgroundImage: '/images/hero/slide1.jpg'
    },
    {
      id: 'services',
      title: 'Услуги и цены',
      subtitle: `${masterData.personal.status.label} - специальные предложения`,
      content: 'Профессиональный маникюр по выгодным ценам',
      backgroundImage: '/images/hero/slide2.jpg'
    },
    {
      id: 'contact',
      title: 'Запись на приём',
      subtitle: `${masterData.contacts.address.city}, ${masterData.contacts.address.metro}`,
      content: masterData.contacts.address.full,
      backgroundImage: '/images/hero/slide3.jpg'
    }
  ]
}
