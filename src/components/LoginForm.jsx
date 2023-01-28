import React, { useState } from 'react'

const LoginForm = () => {
  
  return (
    <>
    <form action="" class="logForm">
    <section class="logForm__option">
        <a href="#" class="option__log">LOG IN</a>
        <a href="#" class="option__sing">SING UP</a>
    </section>
    <section class="logForm__input">
        <input type="text" class="input__box" placeholder="Correo electrónico"></input>
        <input type="text" class="input__box" placeholder="Contraseña"></input>
        <input type="text" class="input__box" placeholder="Confirmar contraseña"></input>
    </section>
    <button type="submit" class="logForm__submit"><a href="profile.html">LOG IN</a></button>
    </form>
    </>
  )
}

export default LoginForm