// SEO конфигурация
export const defaultSEO = {
  title: 'Gomanic Россия - Профессиональный маникюр',
  description: 'Профессиональные мастера маникюра. Качественные услуги маникюра и педикюра в России.',
  keywords: ['маникюр', 'педикюр', 'ногти', 'красота', 'gomanic', 'россия'],
  canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://gomanic.ru',
  ogImage: '/images/og-image.jpg',
  twitterCard: 'summary_large_image' as const,
}

export function generateSEO(customSEO?: Partial<typeof defaultSEO>) {
  return {
    ...defaultSEO,
    ...customSEO,
  }
}