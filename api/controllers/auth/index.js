const { request, response } = require('express')
const bcryptjs = require('bcryptjs')
const { User } = require('../../models')
const { generateJWT } = require('../../helpers/generateJWT')

const login = async (req = request, res = response) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })

    //* Password validation
    const isValidPassword = bcryptjs.compareSync(password, user.password)
    if (!isValidPassword) {
      return res.status(400).json({
        message: 'La contraseña es incorrecta',
      })
    }

    //* JWT generation
    const token = await generateJWT(user.id)

    res.json({ user, token })
  } catch (error) {
    console.error(error)
    res.status(500).json({ result: false })
  }
}

module.exports = { login }
