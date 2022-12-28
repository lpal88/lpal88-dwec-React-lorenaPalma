import React,  { useState } from 'react'
import { Link } from 'react-router-dom'

//cambios de funcionalidad para los inputs nuevos
const SingupForm = () => {
  const initialState = {
      todoNombre: "",
      todoEmail: "", 
      todoPass: "", 
      todoPassConf: "",
      todoBrth: null,
      todoInterest: null,
      todoCheck: false
    }
  
  const [todo, setTodo] = useState(initialState)
  const [error, setError] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault()
    const {todoEmail, todoPass, todoPassConf} = todo

    if (!todoEmail.trim() || !todoPass.trim() || todoPass.trim() != todoPassConf.trim()) {
        setError(true);
        console.log(error)
        return
    }
    console.log("Enviando objeto datos al server!!!!")
    setError(false)
    setTodo(initialState)
  }

  const handleChange = e => {
    setTodo({
        ...todo,
        [e.target.name]: e.target.value
    })
  }

  return (
    
    <form onSubmit={handleSubmit} className="logForm">
      <section className="logForm__option">
        <Link to="/" className="option__sing">LOG IN</Link>
        <a href='#' className="option__log">SING UP</a>
      </section>
      <section className="logForm__input">
        <input 
        name='todoName'
        type="text" 
        className="input__box" 
        placeholder="Nombre"
        onChange={e =>handleChange(e)}
        value={todo.todoName} />

        <input 
        name='todoEmail'
        type="email" 
        className="input__box" 
        placeholder="Correo electrónico"
        onChange={e =>handleChange(e)}
        value={todo.todoEmail} />

        <input 
        name='todoPass'
        type="text" 
        className="input__box" 
        placeholder="Contraseña"
        onChange={e =>handleChange(e)}
        value={todo.todoPass} />

        <input 
        name='todoPassConf'
        type="text" 
        className="input__box" 
        placeholder="Confirmar contraseña" 
        onChange={e =>handleChange(e)}
        value={todo.todoPassConf}/>

        <label for="todoBrth">Fecha de Nacimiento:</label>
        <input 
        name='todoBrth'
        type="date" 
        className="input__box" 
        onChange={e =>handleChange(e)}
        value={todo.todoBrth} />
        
        <p>Intereses:</p>
        <label for="Filosofía">Filosofía</label>
        <input 
        name='todoInterest'
        type="radio" 
        className="input__box" 
        onChange={e =>handleChange(e)}
        value="Filosofía" />
        <label for="Historia">Historia</label>
        <input 
        name='todoInterest'
        type="radio" 
        className="input__box" 
        onChange={e =>handleChange(e)}
        value="Historia" />
        <label for="Psicología">Psicología</label>
        <input 
        name='todoInterest'
        type="radio" 
        className="input__box" 
        onChange={e =>handleChange(e)}
        value="Psicología" />

        <input 
        className="form-check-input" //pendiente cambiar estilo
        type="checkbox" 
        name="todoCheck"
        checked={todo.todoCheck}
        onChange={e => handleChange(e)}/>
        <label for="todoCheck">Acepto los Términos del servicio; Abre una nueva pestaña de Pinterest y confirmas que has leído nuestra Política de privacidad; Abre una nueva pestaña. Aviso de recogida de datos; Abre una nueva pestaña.
        </label>
        
        <button type="submit" className="logForm__submit">{/* <a href="profile.html">LOG IN</a> */}</button>
      </section>
    </form>
    
  )
}

export default SingupForm