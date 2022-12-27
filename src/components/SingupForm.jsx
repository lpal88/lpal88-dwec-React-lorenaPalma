import React,  { useState } from 'react'



const SingupForm = () => {
    const initialState = {
        todoEmail: "", 
        todoPass: "", 
        todoPassConf: ""
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
    
               
                <section className="logForm__input">
    
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
                </section>
                
                <button type="submit" className="logForm__submit">{/* <a href="profile.html">LOG IN</a> */}</button>
            </form>
       
      )
}

export default SingupForm