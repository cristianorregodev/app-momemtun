const { request, response } = require('express')
const { User } = require('../../models')

const usersGet = (req = request, res = response) => {
  res.json([{ id: 1, name: 'John' }])
}

const usersPost = async (req = request, res = response) => {
  const body = req.body

  const user = new User(body)

  await user.save()
  res.json({ user })
}

const usersPut = (req = request, res = response) => {
  const { id } = req.params

  res.json([{ id }])
}

module.exports = {
  usersGet,
  usersPost,
  usersPut,
}
