import React from 'react'
import { Link } from 'react-router-dom'
import { IconSelection } from '../../assets/icons'

export const HistoryCard = ({ item, img }) => {
  return (
    <div className="container__card">
      <div className="card_header">
        <span>{item.createdAt}</span>
        <Link to="/">
          Consulta <img src={IconSelection} alt="Icon" />
        </Link>
      </div>
      <div className="card_body">
        <div className="user">
          <img src={img} alt="image" />
          <p>{item.user.username}</p>
        </div>
        <span>{item.category}</span>
      </div>
    </div>
  )
}
