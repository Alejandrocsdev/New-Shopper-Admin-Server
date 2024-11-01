const frontUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.FRONT_PROD_BASE_URL
    : process.env.FRONT_DEV_BASE_URL

const renderUrl = process.env.RENDER_BASE_URL

module.exports = { frontUrl, renderUrl }
