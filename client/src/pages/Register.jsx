import React, { useState } from 'react'
import { Button } from '../js/components/Button'
import imageProfile from '../assets/img/imageProfile.webp'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { Link } from 'react-router-dom'
export const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  const userRegister = async (evt) => {
    //     evt.preventDefault()
    //     const resp = await fetch(`http://localhost:8080/api/auth/login`, {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify({ email: email, password: password }),
    //     })
    //     const data = await resp.json()
    //     console.log(data.user)
  }
  return (
    <section className="container__login">
      <form onSubmit={userRegister}>
        <div className="container__header">
          <Link to="/">
            <span>
              <MdOutlineKeyboardArrowLeft color={'white'} />
            </span>
          </Link>
          <h1>Inicia sesión</h1>
          <img src={imageProfile} alt="imageProfile"></img>

          <input
            name="username"
            type="text"
            placeholder="Nombre"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            name="phone_number"
            type="number"
            placeholder="Contacto"
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
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
