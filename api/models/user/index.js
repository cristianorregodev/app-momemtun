const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'El nombre de usuario es obligatorio.'],
  },
  email: {
    type: String,
    required: [true, 'EL correo de usuario es obligatorio.'],
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  active: {
    type: Boolean,
    default: true,
  },
})

module.exports = model('User', UserSchema)
