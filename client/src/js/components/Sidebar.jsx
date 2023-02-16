import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaHistory } from 'react-icons/fa'

import { AuthContext } from '../Context/AuthContext'
import {
  HomeIconTransparent,
  TextIconTransparent,
  ImageIconTransparent,
  CodeIconTransparent,
} from '../../assets/icons'

export const Sidebar = () => {
  const { avatar } = useContext(AuthContext)
  return (
    <header className="sidebar">
      <Link to="/profile" className="user_photo">
        <img src={avatar} alt="avatar" />
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
        <Link to="/image-generator">
          <img src={ImageIconTransparent} alt="Icon" />
          Imágenes
        </Link>
        <Link to="/code-generator" className="disabled">
          <img src={CodeIconTransparent} alt="Icon" />
          Código
        </Link>
        <Link to="/history">
          <span>
            <FaHistory />
          </span>
          Historial
        </Link>
      </nav>
    </header>
  )
}
