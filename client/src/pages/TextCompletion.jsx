import React from 'react'
import { AiMenu } from '../js/components/AiMenu'
import { FaRedoAlt } from 'react-icons/fa'

export const TextCompletion = () => {
  return (
    <section className="text_completion_section">
      <div className="container">
        <AiMenu title="Generar texto" />

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
            <button>
              <FaRedoAlt />
            </button>
          </div>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </section>
  )
}
