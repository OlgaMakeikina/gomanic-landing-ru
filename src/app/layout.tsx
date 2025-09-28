import './globals.css'
import { defaultSEO } from '@/utils/seo'
import { MetaTags, FontPreloads, StructuredData, AnalyticsScripts } from '@/components/layout/RootLayout'

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://gomanic.com.br'),
  title: defaultSEO.title,
  description: defaultSEO.description,
  keywords: defaultSEO.keywords,
  openGraph: {
    title: defaultSEO.title,
    description: defaultSEO.description,
    url: defaultSEO.canonical,
    siteName: 'Gomanic Россия',
    images: [
      {
        url: defaultSEO.ogImage!,
        width: 1200,
        height: 630,
        alt: 'Gomanic Россия - Профессиональный маникюр',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: defaultSEO.twitterCard as any,
    title: defaultSEO.title,
    description: defaultSEO.description,
    images: [defaultSEO.ogImage!],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: defaultSEO.canonical,
  },
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const gaId = process.env.GOOGLE_ANALYTICS_ID;
  const fbPixelId = process.env.FACEBOOK_PIXEL_ID;
  const yandexId = process.env.YANDEX_METRIKA_ID;
  
  return (
    <html lang="ru">
      <head>
        <MetaTags />
        <FontPreloads />
        <StructuredData siteUrl={siteUrl} />
      </head>
      <body>
        {children}
        <AnalyticsScripts 
          gaId={gaId} 
          fbPixelId={fbPixelId}
          yandexId={yandexId}
        />
      </body>
    </html>
  )
}
