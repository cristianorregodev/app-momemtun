const { Router } = require('express')
const { check } = require('express-validator')
const { allByUser } = require('../../controllers/all')

const { jwtValidation } = require('../../middlewares')

const router = Router()

router.get('/', [jwtValidation], allByUser)

module.exports = router
