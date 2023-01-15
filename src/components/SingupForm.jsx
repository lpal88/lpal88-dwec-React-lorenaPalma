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
      <h1>Sing Up</h1>
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
        onChange={e =>handleChange(e)}
        value="Filosofía" />
        <label for="Historia">Historia</label>
        <input 
        name='todoInterest'
        type="radio" 
        onChange={e =>handleChange(e)}
        value="Historia" />
        <label for="Psicología">Psicología</label>
        <input 
        name='todoInterest'
        type="radio" 
        onChange={e =>handleChange(e)}
        value="Psicología" /><br></br>

        <input 
        className="form-check-input" //pendiente cambiar estilo
        type="checkbox" 
        name="todoCheck"
        checked={todo.todoCheck}
        onChange={e => handleChange(e)}/>
        <label for="todoCheck">Acepto los Términos del servicio; Abre una nueva pestaña y confirmas que has leído nuestra Política de privacidad; Abre una nueva pestaña. Aviso de recogida de datos.
        </label>
        
        <button type="submit" className="logForm__submit">Registrar</button>
      </section>
    </form>
    
  )
}

export default SingupForm