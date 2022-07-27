/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['static.looksnice.org'],
    minimumCacheTTL: 31536000,
  },
  env: {
    NEXT_PUBLIC_ALCHEMY_API_KEY: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    NEXT_PUBLIC_LOOKS_RARE_API_KEY: process.env.NEXT_PUBLIC_LOOKS_RARE_API_KEY,
  },
};

module.exports = nextConfig
