const express = require('express')
const cors = require('cors')
const { dbConnection } = require('../database/config')

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT
    this.app.use(express.static('public'))
    this.path = {
      auth: '/api/auth',
      allData: '/api/all',
      completions: '/api/completions',
      images: '/api/images',
      users: '/api/users',
    }

    //* Database connection
    this.connectDB()

    //* Middleware
    this.middlewares()

    //* Routes
    this.routes()
  }

  async connectDB() {
    await dbConnection()
  }

  middlewares() {
    //! CORS
    this.app.use(cors())

    //* Body Parser
    this.app.use(express.json())

    //* Client
    this.app.use(express.static('public'))
  }

  routes() {
    this.app.use(this.path.auth, require('../routes/auth'))
    this.app.use(this.path.allData, require('../routes/all'))
    this.app.use(this.path.completions, require('../routes/completions'))
    this.app.use(this.path.images, require('../routes/images'))
    this.app.use(this.path.users, require('../routes/users'))

    //! Web routes
    //Rutas web
    this.app.use('/login', require('../routes/web'))
    this.app.use('/register', require('../routes/web'))
    this.app.use('/reset-password', require('../routes/web'))
    this.app.use('/profile', require('../routes/web'))
    this.app.use('/welcome', require('../routes/web'))
    this.app.use('/text-generator', require('../routes/web'))
    this.app.use('/code-generator', require('../routes/web'))
    this.app.use('/image-generator', require('../routes/web'))
    this.app.use('/history', require('../routes/web'))
    this.app.use('/text/*', require('../routes/web'))
    this.app.use('/image/*', require('../routes/web'))
    this.app.use('/code/*', require('../routes/web'))
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`)
    })
  }
}

module.exports = Server
