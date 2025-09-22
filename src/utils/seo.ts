// SEO конфигурация
export const defaultSEO = {
  title: 'Профессиональный маникюр Gomanic | Запись к мастеру в России',
  description: 'Профессиональный маникюр по методике Gomanic. Опытные мастера, качественные материалы, современные техники. Запись онлайн по всей России.',
  keywords: [
    'маникюр россия', 'профессиональный маникюр', 'gomanic маникюр', 
    'запись к мастеру маникюра', 'обучение маникюру', 'nail мастер',
    'качественный маникюр', 'сертифицированные мастера'
  ],
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