import React from 'react'
import {
  HomeIconTransparent,
  TextIconTransparent,
  ImageIconTransparent,
  CodeIconTransparent,
} from '../../assets/icons'

export const Sidebar = () => {
  return (
    <header className="sidebar">
      <div className="user_photo">
        <img src={HomeIconTransparent} alt="" />
      </div>
      <nav>
        <a href="#">
          <img src={HomeIconTransparent} alt="Icon" />
          Inicio
        </a>
        <a href="#">
          <img src={TextIconTransparent} alt="Icon" />
          Texto
        </a>
        <a href="#" className="disabled">
          <img src={ImageIconTransparent} alt="Icon" />
          Imágenes
        </a>
        <a href="#" className="disabled">
          <img src={CodeIconTransparent} alt="Icon" />
          Código
        </a>
      </nav>
    </header>
  )
}
