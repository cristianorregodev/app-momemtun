const { Router } = require('express')
const { check } = require('express-validator')
const {
  completionPost,
  completionsGet,
  completionGet,
  completionDelete,
} = require('../../controllers/completions')

const { fieldValidation, jwtValidation } = require('../../middlewares')

const router = Router()

router.get('/', [jwtValidation], completionsGet)

router.get('/:id', [check('id', 'No es un ID válido').isMongoId(), fieldValidation], completionGet)

router.post(
  '/',
  [jwtValidation, check('prompt', 'El prompt es obligatorio').not().isEmpty(), fieldValidation],
  completionPost
)

router.put('/:id', (req, res) => {
  res.json('PUT')
})

router.delete(
  '/:id',
  [jwtValidation, check('id', 'No es un ID válido').isMongoId(), fieldValidation],
  completionDelete
)

module.exports = router
