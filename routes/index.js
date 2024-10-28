const { Router } = require('express')
const router = Router()

const envVar = require('./envVar')

router.use('/env-var', envVar)

module.exports = router
