import React, { useState, useContext } from 'react'
import { Configuration, OpenAIApi } from 'openai'
import { FaRedoAlt } from 'react-icons/fa'

import { AiMenu } from '../js/components/AiMenu'
import { Loader } from '../js/components/Loader'
import { completionOptions } from '../js/helpers'
import { API_KEY, BACKEND_API_URL, ORGANIZATION_ID } from '../js/config'
import { saveApiAnswer } from '../js/helpers/saveApiAnswer'
import { AuthContext } from '../js/Context/AuthContext'

export const TextGeneration = () => {
  const { isAuth } = useContext(AuthContext)
  const url = `${BACKEND_API_URL}/completions`
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const configuration = new Configuration({
    organization: ORGANIZATION_ID,
    apiKey: API_KEY,
  })
  const openai = new OpenAIApi(configuration)

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    setIsLoading(true)
    const object = { ...completionOptions, prompt }
    const response = await openai.createCompletion(object)
    setResult(response.data.choices[0].text)
    setIsLoading(false)
    const body = { prompt, answer: result, category: 'text' }
    setTimeout(() => {
      saveApiAnswer(url, isAuth.token, body)
    }, 2000)
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
