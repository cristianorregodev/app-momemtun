import React from 'react'
import { AiMenu } from '../js/components/AiMenu'
import { TextCard } from '../js/components/TextCard'
import imageProfile from '../assets/img/imageProfilePurple.webp'
export const TextResult = () => {
  return (
    <section className="container__generate-text">
      <div className=" container ">
        <AiMenu title="Resultados texto" />
        <h2>Generador de Texto</h2>
        <div className="card__container">
          <TextCard
            img={imageProfile}
            date={'21 de junio'}
            text={
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            }
          />
        </div>
        <div>
          <button className="goback">Regresar</button>
        </div>
      </div>
    </section>
  )
}
