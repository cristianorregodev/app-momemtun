import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { Link } from 'react-router-dom'

import { newAvatar } from '../js/helpers/newAvatar'
import imageProfile from '../assets/img/imageProfile.webp'
import { Button } from '../js/components/Button'
import { AuthContext } from '../js/Context/AuthContext'
import { BACKEND_API_URL } from '../js/config'

export const Login = () => {
  const { activateAuth, generateAvatar } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const userLogin = async (evt) => {
    evt.preventDefault()
    const resp = await fetch(`${BACKEND_API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, password: password }),
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
      <form onSubmit={userLogin}>
        <div className="container__header">
          <Link to="/">
            <strong className="icon__arrow">
              <MdOutlineKeyboardArrowLeft color={'white'} />
            </strong>
          </Link>
          <h1>Inicia sesión</h1>
          <img src={imageProfile} alt="imageProfile" style={{ marginBottom: '30px' }} />

          <input
            name="email"
            type="email"
            placeholder="Correo electrónico"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && (
            <span className="message__error">El usuario y/ó contraseña es incorrecto.</span>
          )}

          <a href="#">
            <p className="forget__password">Olvidaste tu contraseña?</p>
          </a>
        </div>
        <div className="container__button">
          <Button text="Ingresar" clase="buttonLogin" />
        </div>
      </form>
      <a href="#">
        <p>Necesitas Ayuda?</p>
      </a>
    </section>
  )
}
