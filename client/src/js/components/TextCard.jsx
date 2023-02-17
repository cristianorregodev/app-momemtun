import React from 'react'

export const TextCard = ({ data, img }) => {
  return (
    <div className="container__cards">
      <div className="text_card_header">
        <div className="user_image">
          <img src={img} alt="Avatar" />
        </div>
        <div className="card_title">
          <h4>Resultado</h4>
          <small>{data.prompt}</small>
        </div>
        <span>
          {new Date(data.createdAt).toLocaleDateString('en-us', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </span>
      </div>

      <div className="card_body">
        <p>{data.answer}</p>
      </div>
    </div>
  )
}
