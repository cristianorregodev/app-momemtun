import React from 'react'
import { Button } from '../js/components/Button'
import Logo from '../assets/img/logo.webp'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <section className='container__home'>
            <div className='container__img'>
                <img src={Logo} alt="logotipo" />
                <h1>Momemtum<span>App</span></h1>
            </div>
                <div className='container__button'>
                    <Link to="/login">
                        <Button text={'Iniciar sesión'}></Button>
                    </Link>
                    <Button clase={true} text={'Registrarse'}></Button>
                </div>
                <a href="#"><p>Necesitas Ayuda?</p></a>
        </section>


    )
}
