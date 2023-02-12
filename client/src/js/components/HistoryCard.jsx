import React from 'react'
import { Link } from 'react-router-dom'
import { IconSelection } from '../../assets/icons'

export const HistoryCard = ({ name, img, date, action }) => {
  return (
    <div className="container__card">
      <div className="card_header">
        <span>{date}</span>
        <Link to="/">
          Consulta <img src={IconSelection} alt="Icon" />
        </Link>
      </div>
      <div className="card_body">
        <div className="user">
          <img src={img} alt="image" />
          <p>{name}</p>
        </div>
        <span>{action}</span>
      </div>
    </div>
  )
}
