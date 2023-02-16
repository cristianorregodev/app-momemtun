import React from 'react'
import { ImagePlus } from '../../assets/icons'
export const ImageCard = ({ data, img }) => {
  return (
    <div className="image_container">
      <div className="image">
        <img src={img} alt="Image" />
      </div>
      <div className="image_footer">
        <div className="icon">
          <img src={ImagePlus} alt="icon" />
        </div>
        <div className="date">
          <span>Fecha</span>
          <p>
            {new Date(data.createdAt).toLocaleDateString('en-us', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </p>
        </div>
        <div className="likes">
          <span>Puntuación</span>
          <p>Tanto</p>
        </div>
      </div>
    </div>
  )
}
