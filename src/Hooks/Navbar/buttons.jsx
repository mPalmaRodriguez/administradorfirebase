import React from 'react'

const Button = ({ type, clase = "", texto, click }) => {
  return (
    <>
      <button type={type} className={clase} onClick={click} >{texto}</button>

    </>
  )
}

export default Button