/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['static.looksnice.org'],
    minimumCacheTTL: 31536000,
  },
}

module.exports = nextConfig
