import React from 'react'
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
        <span>Lorem, ipsum dolor sit.</span>
      </div>
      <div className="welcome_buttons container">
        <a href="#">
          <img src={IconTextPurple} alt="Icon" />
          <span>Generar y editar texto</span>
        </a>
        <a href="#">
          <img src={IconImagePurple} alt="Icon" />
          <span>Generación de imágenes</span>
        </a>
        <a href="#">
          <img src={IconCodePurple} alt="Icon" />
          <span>Generar código</span>
        </a>
      </div>
    </section>
  )
}
