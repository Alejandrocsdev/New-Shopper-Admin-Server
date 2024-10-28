// 引用異步錯誤處理中間件
const { asyncError } = require('../middlewares')
// 自訂錯誤訊息模組
const CustomError = require('../errors/CustomError')
// 引用 Render 基礎類別
const Render = require('../Render')

class EnvVarController extends Render {
  constructor() {
    super()
  }

  getEnvVars = asyncError(async (req, res, next) => {
    const { service, limit = 20, cursor = null } = req.query
    const serviceId = this.getServiceId(service)

    const response = await this.renderApi.getEnvVarsForService({ serviceId, limit, cursor })

    res.status(200).json({ message: '取得環境變數清單成功', envVars: response.data })
  })

  getEnvVar = asyncError(async (req, res, next) => {
    const { service, envVarKey } = req.query
    const serviceId = this.getServiceId(service)

    const response = await this.renderApi.retrieveEnvVar({ serviceId, envVarKey })

    res.status(200).json({ message: '取得特定環境變數成功', envVar: response.data })
  })

  putEnvVar = asyncError(async (req, res, next) => {
    const { service, envVarKey, envVarValue } = req.body
    const serviceId = this.getServiceId(service)
    
    const { generateValue = false, value = null } = envVarValue || {}

    const response = await this.renderApi.updateEnvVar({ generateValue, value }, { serviceId, envVarKey })

    res.status(200).json({ message: '更新特定環境變數成功', envVar: response.data })
  })
}

module.exports = new EnvVarController()
