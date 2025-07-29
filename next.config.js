/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: false,
  },
  // Add environment variables for proper URL generation
  env: {
    SITE_URL: process.env.SITE_URL || 'https://tutankhamungame.com',
  },
  // Ensure proper static asset serving
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  trailingSlash: false,
  // Enable static optimization
  output: 'standalone',
}

module.exports = nextConfig
