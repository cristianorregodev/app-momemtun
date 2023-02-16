const { Router } = require('express')
const { check } = require('express-validator')
const { imagePost, imagesGet, imageGet, imageDelete } = require('../../controllers/images')

const { fieldValidation, jwtValidation } = require('../../middlewares')

const router = Router()

router.get('/', [jwtValidation], imagesGet)

router.get('/:id', [check('id', 'No es un ID válido').isMongoId(), fieldValidation], imageGet)

router.post(
  '/',
  [jwtValidation, check('prompt', 'El prompt es obligatorio').not().isEmpty(), fieldValidation],
  imagePost
)

router.delete(
  '/:id',
  [jwtValidation, check('id', 'No es un ID válido').isMongoId(), fieldValidation],
  imageDelete
)

module.exports = router
