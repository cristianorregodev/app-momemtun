import React from 'react'
import { Link } from 'react-router-dom'
export const AiMenu = ({ title = '' }) => {
  return (
    <div className="ai_menu_container">
      <h1>{title}</h1>
      <nav className="ai_menu ">
        <Link to="/text-generator">Texto</Link>
        <Link to="/image-generator">Imágenes</Link>
        <Link to="/code-generator" className="disabled">
          Código
        </Link>
      </nav>
    </div>
  )
}
