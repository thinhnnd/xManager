module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
}

// next.config.js
const withSass = require('@zeit/next-sass')
module.exports = withSass();