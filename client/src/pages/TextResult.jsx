import React from 'react'
import { AiMenu } from '../js/components/AiMenu'

import { ImagePlus } from '../assets/icons'
export const TextResult = () => {
    return (
        <section className="container__result-text">
            <div className="container container__data">
                <AiMenu title="Resultado Código" />
                <p>Code Javascript Sanbox</p>
                <div className="container__text">
                    <div>
                        {/* <p>Texto</p> */}
                    </div>
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
                <button className="goback">Regresar</button>
            </div>
        </section>
    )
}
