/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['outdoorvitals.com', 'magic.qstorage.bilimmotion.com', 'back.ajnails.soulist.life'],
  },
  eslint: { ignoreDuringBuilds: true },
}

export default nextConfig
