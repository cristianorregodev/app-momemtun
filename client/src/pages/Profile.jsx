import React from 'react'
import imageProfile from '../assets/img/imageProfile.webp'
import { IconText, IconImage, IconCode } from '../assets/icons'

import { FaUser, FaRegEnvelope, FaWhatsapp } from 'react-icons/fa'
export const Profile = () => {
  return (
    <section className="container__profile">
      <div className="container wrapper">
        <div className="container__header-profile">
          <h2>
            Hola,<strong> Nombre</strong>
          </h2>
          <div className="container__user">
            <div>
              <img src={imageProfile} alt="imageProfile"></img>
            </div>
            <div className="profile__name">
              <h3>Perfil</h3>
              <p>Nombre</p>
            </div>
          </div>
          <div className="container__data">
            <p>
              {' '}
              <FaUser size={20} />
              <span>Nombre</span>{' '}
            </p>
            <p>
              {' '}
              <FaRegEnvelope size={20} />
              <span>Correo</span>
            </p>
            <p>
              {' '}
              <FaWhatsapp size={20} />
              <span>Contacto</span>
            </p>
          </div>
        </div>

        <div className="container__buttons ">
          <h4>Que deseas hacer</h4>
          <div>
            <a href="#">
              <img src={IconText} alt="Icon" /> Texto
            </a>
            <a href="#">
              <img src={IconImage} alt="Icon" /> Imágenes
            </a>
            <a href="#">
              <img className="code" src={IconCode} alt="Icon" /> Código
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
