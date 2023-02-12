import React from 'react'
import { HistoryCard } from '../js/components/HistoryCard'
import imageProfile from '../assets/img/imageProfilePurple.webp'

export const History = () => {
  return (
    <section className="container__query">
      <div className="container ">
        <h1>Consultas Realizadas</h1>
        <div className="card__container">
          {[1, 2, 3, 4, 5].map((item) => (
            <HistoryCard
              key={item}
              name={'Mauro Montoya'}
              img={imageProfile}
              date={'21 jun'}
              action={'Texto'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
