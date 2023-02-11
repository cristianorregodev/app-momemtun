import React, { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'
import { FaRedoAlt } from 'react-icons/fa'

import { AiMenu } from '../js/components/AiMenu'
import { Loader } from '../js/components/Loader'
import { completionOptions } from '../js/helpers'

export const TextCompletion = () => {
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const configuration = new Configuration({
    apiKey: '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',
  })
  const openai = new OpenAIApi(configuration)

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    setIsLoading(true)
    const object = { ...completionOptions, prompt }
    const response = await openai.createCompletion(object)
    setResult(response.data.choices[0].text)
    setIsLoading(false)
  }

  return (
    <section className="text_completion_section">
      <div className="container">
        <AiMenu title="Generar texto" />

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="">Instrucción</label>

            <textarea
              name="prompt"
              value={prompt}
              placeholder=""
              onChange={(e) => setPrompt(e.target.value)}
            ></textarea>
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
          {isLoading ? <Loader /> : <p>{result && result}</p>}
        </div>
      </div>
    </section>
  )
}
