import { config } from './config'

// Базовые SEO настройки
export const defaultSEO = {
  title: 'Manicure Profissional - Unhas 5 Estrelas | Florianópolis - SC',
  description: 'Manicure profissional com especialistas pela metade do preço. Materiais premium japoneses, segurança total e resultado garantido em Florianópolis.',
  keywords: [
    'manicure Florianópolis',
    'manicure profissional',
    'esmaltação em gel',
    'alongamento de unhas',
    'pedicure Florianópolis',
    'unhas premium',
    'manicure desconto',
    'beleza Florianópolis',
    'nail art',
    'cuidados com unhas'
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: config.siteUrl,
    siteName: 'Unhas 5 Estrelas',
    title: 'Manicure Profissional - Unhas 5 Estrelas',
    description: 'Manicure profissional pela metade do preço em Florianópolis - SC',
    images: [
      {
        url: `${config.siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Manicure Profissional - Unhas 5 Estrelas',
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
    site: '@unhas_cinco_estrelas',
    title: 'Manicure Profissional - Unhas 5 Estrelas',
    description: 'Manicure profissional pela metade do preço em Florianópolis',
    image: `${config.siteUrl}/images/og-image.jpg`,
  },
}

// Estruturação de dados (Schema.org)
export const generateBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'Unhas 5 Estrelas',
    description: 'Manicure profissional com especialistas pela metade do preço',
    url: config.siteUrl,
    logo: `${config.siteUrl}/images/logo.png`,
    image: `${config.siteUrl}/images/og-image.jpg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sala 1, Rod. Armando Calil Bulos, 5795',
      addressLocality: 'Florianópolis',
      addressRegion: 'SC',
      postalCode: '88058-001',
      addressCountry: 'BR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -27.4374177,
      longitude: -48.4063245
    },
    telephone: '+55 48 99673-7351',
    priceRange: 'R$ 80-160',
    openingHours: [
      'Mo-Fr 09:00-18:00',
      'Sa 09:00-16:00'
    ],
    serviceArea: {
      '@type': 'City',
      name: 'Florianópolis'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços de Manicure',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Manicure + Nivelamento + Esmaltação em Gel',
            description: 'Serviço completo de manicure com esmaltação em gel premium'
          },
          price: '80.00',
          priceCurrency: 'BRL'
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Alongamento + Manicure + Esmaltação em Gel',
            description: 'Alongamento profissional com acabamento premium'
          },
          price: '119.00',
          priceCurrency: 'BRL'
        }
      ]
    },
    sameAs: [
      'https://www.instagram.com/unhas_cinco_estrelas',
      `https://wa.me/55${config.whatsapp.phoneNumber}`
    ]
  }
}

// Schema para reviews
export const generateReviewSchema = (reviews) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'Unhas 5 Estrelas',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: reviews.length.toString(),
      bestRating: '5',
      worstRating: '1'
    },
    review: reviews.map(review => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating.toString(),
        bestRating: '5',
        worstRating: '1'
      },
      reviewBody: review.text,
      datePublished: review.date
    }))
  }
}

// Geração de sitemap
export const generateSitemap = () => {
  const baseUrl = config.siteUrl
  const currentDate = new Date().toISOString()
  
  const urls = [
    {
      loc: baseUrl,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '1.0'
    },
    {
      loc: `${baseUrl}/#portfolio`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.8'
    },
    {
      loc: `${baseUrl}/#agendamento`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.9'
    }
  ]
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>
`).join('')}
</urlset>`
}

// Robots.txt
export const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

Sitemap: ${config.siteUrl}/sitemap.xml

# Блокируем служебные страницы
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
`
}

export default {
  defaultSEO,
  generateBusinessSchema,
  generateReviewSchema,
  generateSitemap,
  generateRobotsTxt
}
