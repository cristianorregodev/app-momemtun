import React from 'react'
import { IconSelection } from '../../assets/icons'
export const CardQuery = ({name, img, date, action}) => {
    return (
        <div className='container__card'>
            <div className='one'> <p>{date}</p><img  src={img} alt="image" /></div>
            <div className='two'><p>{name}</p></div>
            <div className='three'><a>Consulta <img src={IconSelection} alt="Icon" /></a> <span>{action}</span></div>
        </div>
    )
}
