/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Configure server for deployment
  experimental: {
    serverComponentsExternalPackages: ['@sparticuz/chromium'],
  },
  // Ensure proper external access
  async rewrites() {
    return []
  },
}

export default nextConfig