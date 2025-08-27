export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  ogImage?: string;
  twitterCard?: string;
}

export const defaultSEO: SEOConfig = {
  title: 'Gomanic Brasil - Manicure pela Metade do Preço | Especialistas Certificados',
  description: 'Manicure profissional com especialistas certificados pela metade do preço. Materiais premium japoneses, segurança total e qualidade garantida no Brasil.',
  keywords: 'manicure barato, unhas profissionais, manicure metade preço, nail art brasil, gomanic, especialistas manicure, materiais japoneses, manicure seguro',
  canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://gomanic.com.br',
  ogImage: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://gomanic.com.br'}/images/og-gomanic-brasil.jpg`,
  twitterCard: 'summary_large_image',
};

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Gomanic Brasil",
  "description": "Serviços de manicure profissional com especialistas certificados",
  "url": process.env.NEXT_PUBLIC_SITE_URL || 'https://gomanic.com.br',
  "logo": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://gomanic.com.br'}/images/logo-gomanic.png`,
  "image": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://gomanic.com.br'}/images/og-gomanic-brasil.jpg`,
  "telephone": "+55-11-99999-9999",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "BR",
    "addressLocality": "São Paulo",
  },
  "priceRange": "$$",
  "serviceType": ["Manicure", "Nail Art", "Cuidados com Unhas"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços de Manicure",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Manicure Profissional",
          "description": "Manicure completa com especialistas certificados"
        },
        "price": "15.00",
        "priceCurrency": "BRL"
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  }
};
