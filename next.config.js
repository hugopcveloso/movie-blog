const path = require('path')
const nextTranslate = require('next-translate')

require('dotenv').config()

const config = {
  env: {
    API_URL: process.env.API_URL,
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },

  images: {
    domains: ['assets.vercel.com', 'localhost'],
  },
  webpack: config => {
    config.node = {
      fs: 'empty',
    }
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['public'] = path.join(__dirname, 'public')
    return config
  },
}
module.exports = nextTranslate(config)
