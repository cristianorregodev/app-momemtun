import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'

import { AuthContext } from '../js/Context/AuthContext'
import { AiMenu } from '../js/components/AiMenu'
import { TextCard } from '../js/components/TextCard'
import { BACKEND_API_URL } from '../js/config'
import { getData } from '../js/helpers/getData'

export const TextResult = () => {
  const { id } = useParams()
  const { isAuth, avatar } = useContext(AuthContext)
  const [data, setData] = useState([])
  const url = `${BACKEND_API_URL}/completions/${id}`
  useEffect(() => {
    getData(url, isAuth.token).then((data) => setData(data.completion))
  }, [])
  return (
    <section className="container__generate-text">
      <div className=" container ">
        <AiMenu title="Resultados texto" />
        <h2>Generador de Texto</h2>
        <div className="card__container">
          <TextCard img={avatar} data={data} />
        </div>
        <div>
          <Link to="/history" className="goback">
            Regresar
          </Link>
        </div>
      </div>
    </section>
  )
}
