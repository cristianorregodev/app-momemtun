const { response, request } = require('express')
const jwt = require('jsonwebtoken')
const { User } = require('../models')

const jwtValidation = async (req = request, res = response, next) => {
  const token = req.header('X-TOKEN')
  if (!token) {
    return res.status(401).json({ message: 'No autorizado, no existe token en la petición' })
  }

  try {
    const { uid } = jwt.verify(token, process.env.SECRET_KEY)

    //* Get user
    const user = await User.findById(uid)

    //!User no exist
    if (!user) {
      return res.status(401).json({ message: 'Token no valido' })
    }

    //! User not active
    if (!user.active) {
      return res.status(401).json({ message: 'Token no valido' })
    }

    req.user = user
    next()
  } catch (error) {
    console.error(error)
    res.status(401).json({ message: 'Token no valido' })
  }
}

module.exports = { jwtValidation }
