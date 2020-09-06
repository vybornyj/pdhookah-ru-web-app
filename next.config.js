// const withPWA = require('next-pwa')

module.exports = {
  publicRuntimeConfig: {
    PHONE_VIEW: process.env.PHONE_VIEW,
    PHONE_LINK: process.env.PHONE_LINK
  },
  compress: true,
  devIndicators: {
    autoPrerender: false
  },
  poweredByHeader: false,
  reactStrictMode: false
  // pwa: {
  //   dest: 'public',
  //   distDir: 'public',
  //   disable: process.env.NODE_ENV !== 'production',
  //   register: false,
  //   skipWaiting: false
  // }
}
