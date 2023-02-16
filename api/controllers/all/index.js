const { request, response } = require('express')
const { Completion, Image } = require('../../models')

const allByUser = async (req, res = response) => {
  const completions = await Completion.find({ user: req.user._id }).populate('user')
  const images = await Image.find({ user: req.user._id }).populate('user')
  const data = completions.concat(images)

  res.json({ success: true, data })
}

module.exports = { allByUser }
