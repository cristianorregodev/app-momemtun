import React from 'react'
import { Button } from '../js/components/Button'
import imageProfile from '../assets/img/imageProfile.webp'
import { Link } from 'react-router-dom';
export const Profile = () => {
    return (
        <div className='container__login'>
            <header>
                <div>
                    <h2>Hola,
                        <span>Nombre</span>
                    </h2>
                    <img src={imageProfile} alt='imageProfile'></img>
                    <h1>
                        Perfil
                        <span>Nombre</span>
                    </h1>
                </div>

                <input name='nameUser' type="text" value='Nombre' readOnly/>
                <input name='email' type="text" value='Correo' readOnly/>
                <input name='email' type="text" value='Contacto' readOnly/>
            </header>
            <div className='container__button'>
                <Button text={'Ingresar'}></Button>
            </div>
            <a href="#"><p>Necesitas Ayuda?</p></a>
        </div>
    )
}
