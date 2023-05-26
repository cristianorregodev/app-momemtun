const { request, response } = require('express')
const bcryptjs = require('bcryptjs')

const { User } = require('../../models')
const { generateJWT } = require('../../helpers/generateJWT')

const usersGet = async (req = request, res = response) => {
    const users = await User.find({ active: true })

    res.json({ success: true, data: users })
}

const usersPost = async (req = request, res = response) => {
    const { username, email, password, contact_number } = req.body

    const user = new User({ username, email, password, contact_number })

    //* Hash password
    const salt = bcryptjs.genSaltSync()
    user.password = bcryptjs.hashSync(password, salt)

    //* JWT generation
    const token = await generateJWT(user.id)

    await user.save()
    res.json({ user, token })
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

    res.json({ success: true, data: user })
}

const usersPatch = async (req = request, res = response) => {
    const { id } = req.params
    const { new_password } = req.body

    //* Hash password
    const salt = bcryptjs.genSaltSync()
    const password_hashed = bcryptjs.hashSync(new_password, salt)
    const userFinded = await User.findById(id)
    userFinded.password = password_hashed

    await User.findByIdAndUpdate(id, userFinded)
    const user = await User.findById(id)

    res.json({ success: true, data: user })
}

const usersDelete = async (req = request, res = response) => {
    const { id } = req.params

    await User.findByIdAndUpdate(id, { active: false })
    const user = await User.findById(id)

    res.json({
        success: true,
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
