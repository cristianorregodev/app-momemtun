const { Router } = require('express')
const path = require('path')
const publicPath = path.join(__dirname, '..', 'public')

const router = Router()

router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../public', 'index.html'))
})

module.exports = router
