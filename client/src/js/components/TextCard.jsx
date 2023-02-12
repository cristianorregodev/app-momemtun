import React from 'react'

export const TextCard = ({ date, img, text }) => {
  return (
    <div className="container__cards">
      <div className="text_card_header">
        <div className="user_image">
          <img src={img} alt="" />
        </div>
        <div className="card_title">
          <h4>Resultado #1</h4>
        </div>
        <span>{date}</span>
      </div>

      <div className="card_body">
        <p>{text}</p>
      </div>
    </div>
  )
}
