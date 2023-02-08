import React, { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { AppLogo } from '../../assets/icons'

export const Navbar = () => {
  const navRef = useRef()

  const showNavBar = () => {
    navRef.current.classList.toggle('responsive_nav')
  }
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        <img src={AppLogo} alt="Logo" />
      </Link>

      <nav ref={navRef}>
        <Link to="/profile" onClick={showNavBar}>
          Perfil
        </Link>
        <Link to="/" onClick={showNavBar}>
          Inicio
        </Link>
        <Link to="/text-generator" onClick={showNavBar}>
          Texto
        </Link>
        <a href="#" onClick={showNavBar}>
          Imágenes
        </a>
        <a href="#" onClick={showNavBar}>
          Código
        </a>
        <button className="nav_close_btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>

      <button className="nav_open_btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  )
}
