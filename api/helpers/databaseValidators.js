const { User } = require('../models')

const emailExists = async (email = '') => {
  //* Check email
  const isRegistered = await User.findOne({ email })
  if (isRegistered) {
    throw new Error(`El correo ${email} ya está registrado`)
  }
}

const userExists = async (id) => {
  //* Check email
  const isUser = await User.findById(id)
  if (!isUser) {
    throw new Error(`No existe un usuario registrado con el ID ${id}`)
  }
}

module.exports = { emailExists, userExists }
