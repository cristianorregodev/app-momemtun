import React from 'react'
import { Link } from 'react-router-dom'
export const AiMenu = () => {
  return (
    <nav className="ai_menu ">
      <Link to="/text-generator">Texto</Link>
      <Link to="/image-generator">Imágenes</Link>
      <Link to="/code-generator">Código</Link>
    </nav>
  )
}
