import React from 'react'

const ContactForm = () => {
  return (
    <form className="contact__form" action="" method="post">
        <label className="form__label" for="email" >CORREO ELECTRÓNICO
            <input className="label__input" id="formInput__email" type="email" name="email" />
        </label>
        <label className="form__label" for="subject">ASUNTO 
            <input className="label__input" id="formInput__subject" type="text" name="subject"/>
        </label>
        <label className="form__label"  for="message">MENSAJE 
            <input  className="label__input--message" id="formInput__message" type="text" name="message" />
        </label>
        
        <button className="form__button" type="submit">ENVIAR</button>
    </form>
  )
}

export default ContactForm