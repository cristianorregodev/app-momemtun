import React, { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'

import { AiMenu } from '../js/components/AiMenu'
import { Loader } from '../js/components/Loader'
import { ImagePlaceholder } from '../assets/img'
import { imageOptions } from '../js/helpers'

export const ImageGeneration = () => {
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const configuration = new Configuration({
    organization: 'org-cymoLVEgmRV50QSgzXceB5Bu',
    apiKey: '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',
  })
  const openai = new OpenAIApi(configuration)
  const handleSubmit = async (evt) => {
    evt.preventDefault()
    setIsLoading(true)
    const object = { ...imageOptions, prompt }
    const response = await openai.createImage(object)
    setResult(response.data.data.map((image) => image.url))
    setIsLoading(false)
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
              return <img key={image} src={image} alt="Image" />
            })}
          </div>
        )}
      </div>
    </section>
  )
}
