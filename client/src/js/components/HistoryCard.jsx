import React from 'react'
import { Link } from 'react-router-dom'
import { IconSelection } from '../../assets/icons'

export const HistoryCard = ({ item, img }) => {
  return (
    <div className="container__card">
      <div className="card_header">
        <span>
          {new Date(item.createdAt).toLocaleDateString('en-us', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </span>
        <Link to={`/${item.category}/${item._id}`}>
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
