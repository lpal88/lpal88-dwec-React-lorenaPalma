import React, { useState } from 'react'

const LoginForm = () => {
  const handleSubmit = () => {

  }
  
  return (
    <>
    <form onSubmit={handleSubmit} action="" className="logForm" >
      <section className="logForm__option">
        <button className='option__log'>LOG IN</button>
        <button className='option__sing'>SING UP</button>
      </section>

      <section className="logForm__input">
          <input type="text" className="input__box" placeholder="Correo electrónico"></input>
          <input type="text" className="input__box" placeholder="Contraseña"></input>
          <input type="text" className="input__box" placeholder="Confirmar contraseña"></input>
      </section>
      <button type="submit" className="logForm__submit"><a href="profile.html">LOG IN</a></button>
    </form>
    </>
  )
}

export default LoginForm