import React, { useContext, useState, useEffect } from 'react'

import { AuthContext } from '../js/Context/AuthContext'
import { HistoryCard } from '../js/components/HistoryCard'
import imageProfile from '../assets/img/imageProfilePurple.webp'
import { BACKEND_API_URL } from '../js/config'
import { getData } from '../js/helpers/getData'

export const History = () => {
  const { isAuth, avatar } = useContext(AuthContext)
  const [data, setData] = useState([])
  const url = `${BACKEND_API_URL}/all`
  useEffect(() => {
    getData(url, isAuth.token).then((data) => setData(data))
  }, [])
  return (
    <section className="container__query">
      <div className="container ">
        <h1>Consultas Realizadas</h1>
        <div className="card__container">
          {data.map((item) => (
            <HistoryCard key={item._id} item={item} img={avatar} />
          ))}
        </div>
      </div>
    </section>
  )
}
