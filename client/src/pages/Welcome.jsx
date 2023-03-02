import React from 'react'
import { Link } from 'react-router-dom'
import { IconCodePurple, IconImagePurple, IconTextPurple } from '../assets/icons'
export const Welcome = () => {
  return (
    <section className="welcome_section">
      <div className="welcome_title container">
        <h1>Momentum App</h1>
        <p>Bienvenido</p>
      </div>
      <div className="welcome_text container">
        <p>Empezar</p>
        <span>¡Donde la Creatividad Comienza!</span>
      </div>
      <div className="welcome_buttons container">
        <Link to="/text-generator">
          <img src={IconTextPurple} alt="Icon" />
          <span>Generar y editar texto</span>
        </Link>
        <Link to="/image-generator">
          <img src={IconImagePurple} alt="Icon" />
          <span>Generación de imágenes</span>
        </Link>
        <Link to="/code-generator" className="disabled">
          <img src={IconCodePurple} alt="Icon" />
          <span>Generar código</span>
        </Link>
      </div>
    </section>
  )
}
