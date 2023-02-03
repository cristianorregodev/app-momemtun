const { request, response } = require('express')

const usersGet = (req = request, res = response) => {
  res.json([{ id: 1, name: 'John' }])
}

const usersPost = (req = request, res = response) => {
  const { id, name } = req.body
  res.json([{ id }, { name }])
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
