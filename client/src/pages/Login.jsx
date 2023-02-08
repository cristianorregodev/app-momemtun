import React from 'react'
import { Button } from '../js/components/Button'
import imageProfile from '../assets/img/imageProfile.webp'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { Link } from 'react-router-dom';
export const Login = () => {
    return (
        <section className='container__login'>
            <div className='container__header'>
                <Link to="/">
                    <span><MdOutlineKeyboardArrowLeft color={"white"} /></span>
                </Link>
                <h1>
                    Inicia sesión
                </h1>
                <img src={imageProfile} alt='imageProfile'></img>
                <input name='nameUser' type="text" placeholder='Nombre' />
                <input name='password' type="password" placeholder='Contraseña' />
                <a href="#"><p className='forget__password'>Olvidaste tu contraseña?</p></a>
            </div>
            <div className='container__button'>
                <Link to='/profile'>
                    <Button text={'Ingresar'}></Button>
                </Link>
            </div>
            <a href="#"><p>Necesitas Ayuda?</p></a>
        </section>
    )
}
