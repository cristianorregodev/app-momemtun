const { Schema, model } = require('mongoose')

const ImageSchema = new Schema({
  prompt: {
    type: String,
    required: [true, 'El prompt es obligatorio'],
  },
  answer: [String],
  category: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = model('Image', ImageSchema)
