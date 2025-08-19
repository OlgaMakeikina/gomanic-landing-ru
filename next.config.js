/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  
  env: {
    SITE_NAME: 'Unhas 5 Estrelas',
    SITE_LOCALE: 'pt-BR',
  },
  
  images: {
    domains: [
      'localhost',
      // Добавить домен через переменную окружения в продакшене
    ],
  },
  
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },

  async redirects() {
    return [
      {
        source: '/agendamento',
        destination: '/#agendamento',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
