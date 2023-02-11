import React from 'react'
import { AiMenu } from '../js/components/AiMenu'

import { ImagePlus } from '../assets/icons'

export const ImageResult = () => {
  return (
    <section className="image_result_section">
      <div className="container">
        <AiMenu title="Resultado imágenes" />
        <p>Image #1</p>
        <div className="image_container">
          <div className="image">
            <img
              src="https://t3.ftcdn.net/jpg/03/45/05/92/360_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg"
              alt="Image"
            />
          </div>
          <div className="image_footer">
            <div className="icon">
              <img src={ImagePlus} alt="icon" />
            </div>
            <div className="date">
              <span>Fecha</span>
              <p>Hoy</p>
            </div>
            <div className="likes">
              <span>Puntuación</span>
              <p>Tanto</p>
            </div>
          </div>
        </div>
        <button className="goback">Regresar</button>
      </div>
    </section>
  )
}
