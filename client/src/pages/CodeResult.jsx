import React from 'react'
import { Link } from 'react-router-dom'
import { AiMenu } from '../js/components/AiMenu'

export const CodeResult = () => {
  return (
    <section className="container__result-text">
      <div className="container container__data">
        <AiMenu title="Resultado Código" />
        <h2>Code Javascript Sanbox</h2>
        <div className="container__text">
          <pre>
            <code>Código aqui</code>
          </pre>
        </div>
        <div className="container__footer">
          <div className="date">
            <span>Fecha</span>
            <p>Hoy</p>
          </div>
          <div className="likes">
            <span>Puntuación</span>
            <p>Tanto</p>
          </div>
        </div>
        <Link to="/history" className="goback">
          Regresar
        </Link>
      </div>
    </section>
  )
}
