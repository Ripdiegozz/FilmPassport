/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'martincid.com'
      },
      {
        protocol: 'https',
        hostname: 'image.tmdb.org'
      }
    ]
  }
}

module.exports = nextConfig
