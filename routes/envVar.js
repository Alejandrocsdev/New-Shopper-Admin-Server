const { Router } = require('express')
const router = Router()

const { envVarController } = require('../controllers')

router.route('/')
  .get(envVarController.getEnvVar)
  .put(envVarController.putEnvVar)

router.get('/list', envVarController.getEnvVars)

module.exports = router
