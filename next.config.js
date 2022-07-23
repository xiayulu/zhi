/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['qiniucssjs.gracg.com'],
  },
}

module.exports = nextConfig
