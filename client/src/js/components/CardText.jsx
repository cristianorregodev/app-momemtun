import React from 'react'

export const CardText = ({ date, img, text }) => {
    return (
        <>
            <div className='container__cards'>
                <img src={img} alt="" /><h4>Resultado #1</h4><h5>{date}</h5>
                <div><p>{text}</p></div>
            </div>

        </>
    )
}
