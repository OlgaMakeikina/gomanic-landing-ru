import './globals.css'
import './cyrillic-fonts.css'
import { defaultSEO } from '@/utils/seo'
import Script from 'next/script'

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://gomanic.com.br'),
  title: defaultSEO.title,
  description: defaultSEO.description,
  keywords: defaultSEO.keywords,
  openGraph: {
    title: defaultSEO.title,
    description: defaultSEO.description,
    url: defaultSEO.canonical,
    siteName: 'Gomanic Brasil',
    images: [
      {
        url: defaultSEO.ogImage!,
        width: 1200,
        height: 630,
        alt: 'Gomanic Brasil - Manicure pela Metade do Preço',
      },
    ],
    locale: 'pt_BR',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const GA_ID = process.env.GOOGLE_ANALYTICS_ID;
  
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
        <link 
          rel="preload" 
          href="/fonts/drukwidecyr-super.woff2" 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous"
        />
        <link 
          rel="preload" 
          href="/fonts/horizon.otf" 
          as="font" 
          type="font/otf" 
          crossOrigin="anonymous"
        />
        <link 
          rel="preload" 
          href="/fonts/druk-wide-super.ttf" 
          as="font" 
          type="font/ttf" 
          crossOrigin="anonymous"
        />
        <link 
          rel="preload" 
          href="/fonts/Garet-Book.otf" 
          as="font" 
          type="font/otf" 
          crossOrigin="anonymous"
        />
        <link 
          rel="preload" 
          href="/fonts/Garet-Heavy.otf" 
          as="font" 
          type="font/otf" 
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              "name": "Gomanic Brasil",
              "description": "Serviços de manicure profissional com especialistas certificados",
              "url": process.env.NEXT_PUBLIC_SITE_URL
            }),
          }}
        />
        <script src="/js/font-fallback.js" defer></script>
      </head>
      <body>
        {children}
        
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        
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
            fbq('init', '${process.env.FACEBOOK_PIXEL_ID || ''}');
            fbq('track', 'PageView');
          `}
        </Script>
      </body>
    </html>
  )
}
