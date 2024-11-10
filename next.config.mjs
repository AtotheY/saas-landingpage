/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    missingSuspenseWithCSRBailout: false
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  
  images: {
    domains: [
      'scontent.fyzd1-3.fna.fbcdn.net',
      'instagram.fyto1-2.fna.fbcdn.net',
      'assets.vogue.com',
      'm.media-amazon.com',
      'upload.wikimedia.org'
    ]
  }
}


export default nextConfig
