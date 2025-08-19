import './globals.css'
import Script from 'next/script'
import { config } from '@/utils/config'

export const metadata = {
  title: 'Manicure Profissional - Unhas 5 Estrelas | Florianópolis - SC',
  description: 'Manicure profissional com especialistas pela metade do preço. Materiais premium japoneses, segurança total e resultado garantido em Florianópolis.',
  keywords: 'manicure, Florianópolis, unhas, esmaltação em gel, alongamento, pedicure, beleza, SC',
  authors: [{ name: 'Unhas 5 Estrelas' }],
  creator: 'Unhas 5 Estrelas',
  publisher: 'Unhas 5 Estrelas',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(config.siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Manicure Profissional - Unhas 5 Estrelas',
    description: 'Manicure profissional com especialistas pela metade do preço em Florianópolis - SC',
    url: config.siteUrl,
    siteName: 'Unhas 5 Estrelas',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Manicure Profissional - Unhas 5 Estrelas',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manicure Profissional - Unhas 5 Estrelas',
    description: 'Manicure profissional pela metade do preço em Florianópolis',
    images: ['/images/og-image.jpg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Analytics */}
        {config.analytics.googleId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${config.analytics.googleId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${config.analytics.googleId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        {/* Facebook Pixel */}
        {config.analytics.facebookId && (
          <Script id="facebook-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${config.analytics.facebookId}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
      </head>
      <body>{children}</body>
    </html>
  )
}
