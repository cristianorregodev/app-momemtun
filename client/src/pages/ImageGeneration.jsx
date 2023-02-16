import React, { useState, useContext } from 'react'
import { Configuration, OpenAIApi } from 'openai'

import { AiMenu } from '../js/components/AiMenu'
import { Loader } from '../js/components/Loader'
import { ImagePlaceholder } from '../assets/img'
import { imageOptions } from '../js/helpers'
import { API_KEY, BACKEND_API_URL, ORGANIZATION_ID } from '../js/config'
import { AuthContext } from '../js/Context/AuthContext'
import { saveApiAnswer } from '../js/helpers/saveApiAnswer'

export const ImageGeneration = () => {
  const { isAuth } = useContext(AuthContext)
  const url = `${BACKEND_API_URL}/images`

  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const configuration = new Configuration({
    organization: ORGANIZATION_ID,
    apiKey: API_KEY,
  })
  const openai = new OpenAIApi(configuration)
  const handleSubmit = async (evt) => {
    evt.preventDefault()
    setIsLoading(true)
    const object = { ...imageOptions, prompt }
    const response = await openai.createImage(object)
    setResult(response.data.data.map((image) => image.url))
    setIsLoading(false)
    const body = { prompt, answer: result, category: 'images' }
    setTimeout(() => {
      saveApiAnswer(url, isAuth.token, body)
    }, 2000)
  }
  return (
    <section className="image_generation_section">
      <div className="container">
        <AiMenu title="Generar imágenes" />
        <form onSubmit={handleSubmit}>
          <p>Descripción detallada</p>
          <div className="input_image">
            <textarea
              name="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            ></textarea>
            <button className="image_button">Generar</button>
          </div>
        </form>

        {isLoading ? (
          <Loader />
        ) : (
          <div className="image_grid">
            {result.map((image) => {
              return (
                <a key={image} href={image} target="_blank">
                  <img src={image} alt="Image" loading="lazy" />
                </a>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
