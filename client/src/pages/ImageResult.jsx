import React, { useContext, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { ImageCard } from '../js/components/ImageCard'
import { AuthContext } from '../js/Context/AuthContext'
import { AiMenu } from '../js/components/AiMenu'
import { getData } from '../js/helpers/getData'
import { BACKEND_API_URL } from '../js/config'

export const ImageResult = () => {
  const { id } = useParams()
  const { isAuth } = useContext(AuthContext)
  const [data, seData] = useState([])
  const url = `${BACKEND_API_URL}/images/${id}`
  useEffect(() => {
    getData(url, isAuth.token).then((data) => seData(data.images))
  }, [])
  return (
    <section className="image_result_section">
      <div className="container">
        <AiMenu title="Resultado imágenes" />
        <h2>Imágenes</h2>
        <div className="image_grid">
          {data.answer &&
            data.answer.map((image, index) => <ImageCard key={index} data={data} img={image} />)}
        </div>
        <Link to="/history" className="goback">
          Regresar
        </Link>
      </div>
    </section>
  )
}
