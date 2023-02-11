import React from 'react'
import { AiMenu } from '../js/components/AiMenu'
import { FaArrowRight } from 'react-icons/fa'

export const CodeGeneration = () => {
  return (
    <section className="code_generation_section">
      <div className="container">
        <AiMenu title="Generar código" />
        <div className="code">
          <div className="code_header">
            <p>Codex JavaScript Sandbox</p>
            <div>
              <button>Borrar todo</button>
              <button>Exportar</button>
            </div>
          </div>
          <div className="code_content"></div>
        </div>
        <form>
          <div className="input_code">
            <textarea placeholder="Instrucciones"></textarea>
            <button className="code_button">
              <FaArrowRight />
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
