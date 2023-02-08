import React from 'react'

export const Button = ({ text, clase }) => {
  return (
    <div>
      <button className={clase}>{text}</button>
    </div>
  )
}
