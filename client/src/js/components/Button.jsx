import React from 'react'

export const Button = ({ text, clase }) => {
    return (
        <div>
            <button className={`button ${clase && 'buttonRegister'}`}>{text}</button>
        </div>
    )
}
