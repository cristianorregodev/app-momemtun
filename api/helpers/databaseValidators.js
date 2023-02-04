const { User } = require('../models')

const emailExists = async (email = '') => {
  //* Check email
  const isRegistered = await User.findOne({ email })
  if (isRegistered) {
    throw new Error(`El correo ${email} ya está registrado`)
  }
}

const emailExistsForLogin = async (email = '') => {
  //* Check email
  const isRegistered = await User.findOne({ email })
  if (!isRegistered) {
    throw new Error(`El usuario ${email} no está registrado`)
  }
}

const userExists = async (id) => {
  //* Check email
  const isUser = await User.findById(id)
  if (!isUser) {
    throw new Error(`No existe un usuario registrado con el ID ${id}`)
  }
}

const activeUser = async (email) => {
  const user = await User.findOne({ email })
  if (!user.active) {
    throw new Error(`El usuario ${email} no se encuentra activo.`)
  }
}

module.exports = { emailExists, userExists, emailExistsForLogin, activeUser }
