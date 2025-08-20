import './globals.css'

export const metadata = {
  title: 'Gomanic Brasil - Manicure pela Metade do Preço',
  description: 'Manicure profissional com novos especialistas pela metade do preço. Materiais premium japoneses e segurança total.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link 
          rel="preload" 
          href="/fonts/horizon.otf" 
          as="font" 
          type="font/otf" 
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
      </head>
      <body>{children}</body>
    </html>
  )
}
