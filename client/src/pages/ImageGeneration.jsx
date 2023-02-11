import React from 'react'
import { AiMenu } from '../js/components/AiMenu'
import { ImagePlaceholder } from '../assets/img'

export const ImageGeneration = () => {
  return (
    <section className="image_generation_section">
      <div className="container">
        <AiMenu title="Generar imágenes" />
        <form>
          <p>Descripción detallada</p>
          <div className="input_image">
            <textarea></textarea>
            <button className="image_button">Generar</button>
          </div>
        </form>
        <div className="image_grid">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <img key={item} src={ImagePlaceholder} alt={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
