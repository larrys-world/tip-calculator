/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  // GitHub Pages serves from subdirectory
  basePath: process.env.NODE_ENV === 'production' ? '/tip-calculator' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/tip-calculator' : ''
}

module.exports = nextConfig