const { request, response } = require('express')
const { Completion } = require('../../models')

const completionsGet = async (req, res = response) => {
  const completions = await Completion.find({ user: req.user._id }).populate('user')

  res.json({ success: true, completions })
}

const completionGet = async (req, res = response) => {
  const { id } = req.params
  const completion = await Completion.findById(id).populate('user')

  res.json({ success: true, completion })
}
const completionPost = async (req = request, res = response) => {
  const { prompt, answer } = req.body

  const data = {
    prompt,
    answer,
    user: req.user._id,
  }

  const completion = new Completion(data)

  await completion.save()

  res.status(201).json({ success: true, completion })
}

const completionDelete = async (req = request, res = response) => {
  const { id } = req.params
  const completion = await Completion.findByIdAndDelete(id)

  res.json({
    success: true,
    completion,
  })
}

module.exports = { completionPost, completionsGet, completionGet, completionDelete }
