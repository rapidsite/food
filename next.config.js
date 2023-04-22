/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

// next.config.js
/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
    }
  }

  // Production config
  return {
    swcMinify: true,
    images: {
      loader: 'custom',
      loaderFile: './cfImageLoader.js'
    },
  }
}
