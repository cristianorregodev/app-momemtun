import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

import { newAvatar } from '../js/helpers/newAvatar'
import { AuthContext } from '../js/Context/AuthContext'
import { Button } from '../js/components/Button'
import imageProfile from '../assets/img/imageProfile.webp'
import { BACKEND_API_URL } from '../js/config'

export const Register = () => {
  const { activateAuth, generateAvatar } = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  const userRegister = async (evt) => {
    evt.preventDefault()
    const resp = await fetch(`${BACKEND_API_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password,
        username: username,
        contact_number: phone,
      }),
    })
    if (resp.status === 400) {
      return setError(true)
    }
    const user = await resp.json()
    activateAuth(user)
    generateAvatar(newAvatar(user.user.username))
    navigate('/welcome')
  }
  return (
    <section className="container__login">
      <form onSubmit={userRegister}>
        <div className="container__header">
          <Link to="/">
            <strong className="icon__arrow">
              <MdOutlineKeyboardArrowLeft color={'white'} />
            </strong>
          </Link>
          <h1>Inicia sesión</h1>
          <img src={imageProfile} alt="imageProfile" style={{ marginBottom: '30px' }} />

          <input
            name="username"
            type="text"
            placeholder="Nombre"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            name="phone_number"
            type="number"
            placeholder="Contacto"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Mínimo 6 caracteres"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && (
            <span className="message__error">El correo y/ó contraseña no son válidos.</span>
          )}
        </div>
        <div className="container__button">
          <Button text="Registrarse" clase="buttonLogin" />
        </div>
      </form>
      <a href="#">
        <p>Necesitas Ayuda?</p>
      </a>
    </section>
  )
}
