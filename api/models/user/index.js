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
  contact_number: {
    type: String,
    required: [true, 'El número de contacto es obligatorio'],
  },
  password: {
    type: String,
    required: [true, 'Debe suministrar una contraseña'],
  },
  image: {
    type: String,
  },
  active: {
    type: Boolean,
    default: true,
  },
})

UserSchema.methods.toJSON = function () {
  const { __v, password, _id, ...user } = this.toObject()
  user.uid = _id
  return user
}

module.exports = model('User', UserSchema)
