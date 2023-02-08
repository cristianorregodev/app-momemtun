import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { Link } from 'react-router-dom'
import imageProfile from '../assets/img/imageProfile.webp'
import { Button } from '../js/components/Button'
import { AuthContext } from '../js/Context/AuthContext'

export const Login = () => {
  const { isAuth, activateAuth } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const userLogin = async (evt) => {
    evt.preventDefault()
    const resp = await fetch(`http://localhost:8080/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, password: password }),
    })
    if (resp.status === 400) {
      return setError(true)
    }
    const user = await resp.json()
    activateAuth(user)
    navigate('/welcome')
  }
  return (
    <section className="container__login">
      <form onSubmit={userLogin}>
        <div className="container__header">
          <Link to="/">
            <span>
              <MdOutlineKeyboardArrowLeft color={'white'} />
            </span>
          </Link>
          <h1>Inicia sesión</h1>
          <img src={imageProfile} alt="imageProfile"></img>

          <input
            name="email"
            type="email"
            placeholder="Correo electrónico"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <span>El usuario y/ó contrasela es incorrecto.</span>}

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
