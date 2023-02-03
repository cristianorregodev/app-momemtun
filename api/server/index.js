const express = require('express')
const cors = require('cors')

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT
    this.path = {
      users: '/api/users',
    }

    //* Middleware
    this.middlewares()

    //* Routes
    this.routes()
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
    this.app.use(this.path.users, require('../routes/users'))
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`)
    })
  }
}

module.exports = Server
