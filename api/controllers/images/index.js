const { request, response } = require('express')
const { Image } = require('../../models')

const imagesGet = async (req, res = response) => {
  const images = await Image.find({ user: req.user._id }).populate('user')

  res.json({ success: true, images })
}

const imageGet = async (req, res = response) => {
  const { id } = req.params
  const images = await Image.findById(id).populate('user')

  res.json({ success: true, images })
}

const imagePost = async (req = request, res = response) => {
  const { prompt, answer, category } = req.body

  const data = {
    prompt,
    answer,
    category,
    user: req.user._id,
  }

  const images_saved = new Image(data)

  await images_saved.save()

  res.status(201).json({ success: true, images_saved })
}

const imageDelete = async (req = request, res = response) => {
  const { id } = req.params
  const image = await Image.findByIdAndDelete(id)

  res.json({
    success: true,
    image,
  })
}

module.exports = { imagePost, imagesGet, imageGet, imageDelete }
