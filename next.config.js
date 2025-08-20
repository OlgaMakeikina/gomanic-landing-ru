/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      exclude: /backup/,
    });
    return config;
  },
}

module.exports = nextConfig
