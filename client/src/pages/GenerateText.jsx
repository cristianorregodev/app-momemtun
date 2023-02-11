import React from 'react'
import { AiMenu } from '../js/components/AiMenu'
import { CardText } from '../js/components/CardText'
import imageProfile from '../assets/img/imageProfilePurple.webp'
export const GenerateText = () => {
    return (
        <section className='container__generate-text'>

            <div className=' container '>
                <AiMenu title="Generar texto" />
                <h2>Generador de Texto</h2>
                <div className='card__container'>
                    <CardText img={imageProfile} date={'21 de junio'} text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} />
                    <CardText img={imageProfile} date={'21 de junio'} text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} />
                    <CardText img={imageProfile} date={'21 de junio'} text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} />
                    <CardText img={imageProfile} date={'21 de junio'} text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} />
                </div>
                <div><button>Regresar</button></div>
            </div>
            

        </section>
    )
}
