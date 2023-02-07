const { Schema, model } = require('mongoose')

const CompletionSchema = new Schema({
  prompt: {
    type: String,
    required: [true, 'El prompt es obligatorio'],
  },
  answer: {
    type: String,
    required: [true, 'Las respuestas son obligatorias'],
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

module.exports = model('Completion', CompletionSchema)
