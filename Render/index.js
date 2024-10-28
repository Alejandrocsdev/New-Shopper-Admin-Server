// 引用 Render API SDK
const renderApi = require('@api/render-api')

// 引用環境變數
const { RENDER_API_KEY, RENDER_FRONT_SERVICE_ID, RENDER_BACK_SERVICE_ID } = process.env

class Render {
  constructor() {
    renderApi.auth(RENDER_API_KEY)
    this.renderApi = renderApi
    this.frontServiceId = RENDER_FRONT_SERVICE_ID
    this.backServiceId = RENDER_BACK_SERVICE_ID
  }

  getServiceId(service) {
    if (service === 'front') return this.frontServiceId
    if (service === 'back') return this.backServiceId
    throw new Error('Invalid service type. Must be "front" or "back".')
  }
}

module.exports = Render
