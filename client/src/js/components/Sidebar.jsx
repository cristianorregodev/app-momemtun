import React from 'react'
import { Link } from 'react-router-dom'
import {
  HomeIconTransparent,
  TextIconTransparent,
  ImageIconTransparent,
  CodeIconTransparent,
} from '../../assets/icons'

export const Sidebar = () => {
  return (
    <header className="sidebar">
      <Link to="/profile" className="user_photo">
        <img src={HomeIconTransparent} alt="" />
      </Link>
      <nav>
        <Link to="/welcome">
          <img src={HomeIconTransparent} alt="Icon" />
          Inicio
        </Link>
        <Link to="/text-generator">
          <img src={TextIconTransparent} alt="Icon" />
          Texto
        </Link>
        <Link to="/image-generator" className="disabled">
          <img src={ImageIconTransparent} alt="Icon" />
          Imágenes
        </Link>
        <Link to="/code-generator" className="disabled">
          <img src={CodeIconTransparent} alt="Icon" />
          Código
        </Link>
      </nav>
    </header>
  )
}
