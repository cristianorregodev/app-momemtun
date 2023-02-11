import React from 'react'
import { CardQuery } from '../js/components/CardQuery'
import imageProfile from '../assets/img/imageProfilePurple.webp'


export const Query = () => {
    return (
        <section className='container__query' >

            <div className='container '>
                <h1>Consultas Realizadas</h1>
                <div className='card__container'>
                    <CardQuery name={'Mauro Montoya'} img={imageProfile} date={'21 jun'} action={'Texto'}></CardQuery>
                    <CardQuery name={'Hvmble Abadia'} img={imageProfile} date={'21 jun'} action={'Imágenes'}></CardQuery>
                    <CardQuery name={'Cristian Orrego'} img={imageProfile} date={'21 jun'} action={'Código'}></CardQuery>
                    <CardQuery name={'Mauro'} img={imageProfile} date={'21 jun'} action={'Texto'}></CardQuery>
                    <CardQuery name={'Hvmble'} img={imageProfile} date={'21 jun'} action={'Imágenes'}></CardQuery>
                    <CardQuery name={'Cristian'} img={imageProfile} date={'21 jun'} action={'Código'}></CardQuery></div>


            </div>
        </section>
    )
}
