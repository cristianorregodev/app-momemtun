import React, { useContext } from 'react'
import { FaUser, FaRegEnvelope, FaWhatsapp, FaArrowRight } from 'react-icons/fa'

import { AuthContext } from '../js/Context/AuthContext'
import { IconText, IconImage, IconCode } from '../assets/icons'
import { Link } from 'react-router-dom'

export const Profile = () => {
  const { isAuth, avatar } = useContext(AuthContext)
  const { user } = isAuth

  return (
    <section className="container__profile">
      <div className="container wrapper">
        <div className="container__header-profile">
          <h2>
            Hola,<strong> {user.username}</strong>
          </h2>
          <div className="container__user">
            <div>
              <img src={avatar} alt="imageProfile" style={{ width: '80px' }} />
            </div>
            <div className="profile__name">
              <h3>Perfil</h3>
              <p>{user.username}</p>
            </div>
          </div>
          <div className="container__data">
            <p>
              {' '}
              <FaUser size={20} />
              <span>{user.username}</span>{' '}
            </p>
            <p>
              {' '}
              <FaRegEnvelope size={20} />
              <span>{user.email}</span>
            </p>
            <p>
              {' '}
              <FaWhatsapp size={20} />
              <span>{user.contact_number}</span>
            </p>
          </div>
        </div>

        <div className="container__buttons ">
          <h4>Que deseas hacer</h4>
          <div>
            <Link to="/text-generator">
              <img src={IconText} alt="Icon" /> Texto
            </Link>
            <Link to="/image-generator">
              <img src={IconImage} alt="Icon" /> Imágenes
            </Link>
            <Link to="/code-generator" className="disabled">
              <img className="code" src={IconCode} alt="Icon" /> Código
            </Link>
          </div>
        </div>

        <div className="history_button">
          <Link to="/history" className="btn_history">
            Consultas realizadas{' '}
            <span>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
