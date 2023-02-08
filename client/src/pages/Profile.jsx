import React from 'react'
import imageProfile from '../assets/img/imageProfile.webp'
import { IconText, IconImage, IconCode } from '../assets/icons'


import { MdOutlineAccountCircle } from 'react-icons/md';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { HiOutlineMail, } from 'react-icons/hi';
export const Profile = () => {

    return (
        <section className='container__profile'>
            <div className='container__header-profile'>
                <h2>Hola,<strong> Nombre</strong>
                </h2>
                <div className='container__user'>
                    <div>
                        <img src={imageProfile} alt='imageProfile'></img>
                    </div>
                    <div>
                        <h3>
                            Perfil
                        </h3>
                        <p>Nombre</p>
                    </div>
                </div>
                <div className='container__data'>
                <p> <span><MdOutlineAccountCircle size={20} /></span> Nombre</p>
                <p> <HiOutlineMail size={20} /> Correo</p>
                <p> <AiOutlineWhatsApp size={20} /> Contacto</p>
            </div>
            </div>
            

            <div className='container__buttons'>
                <h4>Que deseas hacer</h4>
                <a href="#">
                    <img src={IconText} alt="Icon" />
                </a>
                <a href="#">
                    <img src={IconImage} alt="Icon" />

                </a>
                <a href="#">
                    <img className='code'src={IconCode} alt="Icon" />
                </a>
            </div>

        </section>
    )
}
