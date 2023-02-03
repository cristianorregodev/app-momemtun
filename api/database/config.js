const mongoose = require('mongoose')

const dbConnection = async () => {
  try {
    await mongoose.set('strictQuery', false)
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Conectado a la DB')
  } catch (error) {
    console.error(error)
    throw new Error('Error en la conexión a la DB')
  }
}

module.exports = { dbConnection }
