/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'assets2.razerzone.com',
      },
    ],
  },
}

module.exports = nextConfig
