import React from 'react'
import { AiMenu } from '../js/components/AiMenu'
import { PlusIcon } from '../assets/icons'

export const TextCompletion = () => {
  return (
    <section className="text_completion_section">
      <div className="container">
        <h1>Generar texto</h1>
        <AiMenu />
        <form>
          <div className="form-group">
            <label htmlFor="">Instrucción</label>

            <textarea type="text" placeholder=""></textarea>
          </div>
          <button className="generate-text">Generar</button>
        </form>
        <div className="text-result">
          <div>
            <h2>Resultado</h2>
            <button>R</button>
          </div>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </section>
  )
}
