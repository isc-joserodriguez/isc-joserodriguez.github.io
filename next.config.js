/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // GitHub Pages configuration
  output: 'export',
  
  images: {
    unoptimized: true, // GitHub Pages no soporta Image Optimization API
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  
  // Security headers (solo aplican en desarrollo, no en GitHub Pages estático)
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
