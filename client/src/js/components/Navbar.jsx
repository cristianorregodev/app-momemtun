import React, { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { AppLogo } from '../../assets/icons'

export const Navbar = () => {
  const navRef = useRef()

  const showNavBar = () => {
    navRef.current.classList.toggle('responsive_nav')
  }
  return (
    <header className="navbar">
      <a href="#" className="logo">
        <img src={AppLogo} alt="Logo" />
      </a>

      <nav ref={navRef}>
        <a href="#">Inicio</a>
        <a href="#">Texto</a>
        <a href="#">Imágenes</a>
        <a href="#">Código</a>
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
