const { Router } = require('express')
const { check } = require('express-validator')

const {
  usersGet,
  usersPost,
  usersPut,
  usersPatch,
  usersDelete,
} = require('../../controllers/users')
const { emailExists, userExists } = require('../../helpers/databaseValidators')
const { fieldValidation } = require('../../middlewares/fieldValidation')

const router = Router()

router.get('/', usersGet)
router.post(
  '/',
  [
    check('username', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('password', 'La contraseña es obligatoria y mínimo de 6 carácteres').isLength({ min: 6 }),
    check('email', 'El correo no es valido').isEmail(),
    check('email').custom(emailExists),
    check('contact_number', 'El número de contacto es obligatorio').not().isEmpty(),
    fieldValidation,
  ],
  usersPost
)
router.put(
  '/:id',
  [check('id', 'No es un ID válido').isMongoId(), check('id').custom(userExists), fieldValidation],
  usersPut
)

router.patch(
  '/:id',
  [check('id', 'No es un ID válido').isMongoId(), check('id').custom(userExists), fieldValidation],
  usersPatch
)

router.delete(
  '/:id',
  [check('id', 'No es un ID válido').isMongoId(), check('id').custom(userExists), fieldValidation],
  usersDelete
)

module.exports = router
