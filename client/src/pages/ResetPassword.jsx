import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../js/components/Button'
import { BACKEND_API_URL } from '../js/config'

export const ResetPassword = () => {
  const [emailChecked, setEmailChecked] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [passwordChanged, setPasswordChanged] = useState(false)

  const checkEmail = async (evt) => {
    evt.preventDefault()
    const resp = await fetch(`${BACKEND_API_URL}/auth/reset-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email }),
    })
    if (resp.status != 200) {
      return setError(true)
    }
    const emailValidated = await resp.json()
    setEmailChecked(emailValidated.userEmail.uid)
    console.log(emailValidated.userEmail.uid)
    setError(false)
  }
  const resetPassword = async (evt) => {
    evt.preventDefault()
    const resp = await fetch(`${BACKEND_API_URL}/users/${emailChecked}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ new_password: password }),
    })
    if (resp.status != 200) {
      return setError(true)
    }
    const newPassword = await resp.json()
    setPasswordChanged(true)
    setError(false)
  }
  return (
    <section className="reset_password_container">
      <h1>Reestablecer contraseña</h1>
      {!passwordChanged && (
        <form onSubmit={checkEmail}>
          <input
            type="email"
            placeholder="Ingrese su correo"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {error && <span className="message__error">El correo no es válido</span>}
          <Button text="Confirmar correo" clase="buttonLogin" />
        </form>
      )}
      {emailChecked.length > 0 && (
        <form onSubmit={resetPassword}>
          {!passwordChanged && (
            <input
              type="password"
              placeholder="Nueva contraseña"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          )}
          {error && (
            <span className="message__error">La contraseña debe tener mínimo 6 caracteres.</span>
          )}
          {!passwordChanged && <Button text="Reestablecer" clase="buttonLogin" />}
        </form>
      )}
      {passwordChanged && (
        <div className="reset_success">
          <span>Contraseña actualizada con éxito.</span>
          <Link to="/login">Iniciar sesión</Link>
        </div>
      )}
    </section>
  )
}
