const { request, response } = require('express')
const bcryptjs = require('bcryptjs')

const { User } = require('../../models')
const { findById } = require('../../models/user')

const usersGet = async (req = request, res = response) => {
  const users = await User.find({ active: true })

  res.json({ result: true, data: users })
}

const usersPost = async (req = request, res = response) => {
  const { username, email, password, contact_number } = req.body

  const user = new User({ username, email, password, contact_number })

  //* Hash password
  const salt = bcryptjs.genSaltSync()
  user.password = bcryptjs.hashSync(password, salt)

  await user.save()
  res.json({ result: true, data: user })
}

const usersPut = async (req = request, res = response) => {
  const { id } = req.params
  const { password, email, ...rest } = req.body

  if (password) {
    //* Hash password
    const salt = bcryptjs.genSaltSync()
    rest.password = bcryptjs.hashSync(password, salt)
  }

  await User.findByIdAndUpdate(id, rest)
  const user = await User.findById(id)

  res.json({ result: true, data: user })
}

const usersPatch = async (req = request, res = response) => {
  const { id } = req.params
  const { new_password } = req.body

  //* Hash password
  const salt = bcryptjs.genSaltSync()
  const password = bcryptjs.hashSync(new_password, salt)

  await User.findByIdAndUpdate(id, password)
  const user = await User.findById(id)

  res.json({ result: true, data: user })
}

const usersDelete = async (req = request, res = response) => {
  const { id } = req.params

  await User.findByIdAndUpdate(id, { active: false })
  const user = await User.findById(id)

  res.json({
    result: true,
    data: user,
  })
}

module.exports = {
  usersGet,
  usersPost,
  usersPut,
  usersPatch,
  usersDelete,
}
