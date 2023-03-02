const { Router } = require('express')
const { check } = require('express-validator')

const { login, reset } = require('../../controllers/auth')
const { emailExistsForLogin, activeUser } = require('../../helpers/databaseValidators')
const { fieldValidation } = require('../../middlewares/fieldValidation')

const router = Router()

router.post(
  '/login',
  [
    check('email', 'El correo no es válido').isEmail(),
    check('email').custom(emailExistsForLogin),
    check('email').custom(activeUser),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    fieldValidation,
  ],
  login
)
router.post('/reset-password', reset)

module.exports = router
