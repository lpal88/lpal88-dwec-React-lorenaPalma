import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [user, setUser] = useState(true)
  const navigate =  useNavigate()

  const datosIntialState = {
    email: "",
    pass: ""
  }
  const [datos, setDatos] = useState(datosIntialState)
  const [esRegistro, setEsRegistro] = useState(false)

  function handleChange(e) {
//recoge datos y los guarda en el estado
setDatos(
  {
    ...datos,
    [e.target.name]: e.target.value
  }
)
  }
  const procesarDatos = () => {
    console.log("validando datos")

    if (esRegistro) {
      registrar()
    } else {
      login()
    }
  }

  const registrar = () => {
    console.log("registrando")
    setUser(true)
    navigate("/profile")

  }

  const login = () => {
    console.log("logeando")
    setUser(true)
    setDatos(datosIntialState)
    navigate("/profile")

  }

  return (
    <div className='mt-5 login'>
      <h1 className='text-center'>
      {esRegistro ? navigate("/singup") : "Login"}
      </h1>
      <div className='row justify-content-center login__section'>
        <div className='col-12 col-sm-8 col-md-6 col-xl-4 '>
          <form onSubmit={procesarDatos}>
            <input 
            name='email' 
            type="email" 
            className='form-control mb-2' 
            placeholder='Email' 
            onChange={e => handleChange(e)}
            value={datos.email}/>
            <input 
            name='pass' 
            type="password" 
            className='form-control mb-2' 
            placeholder='Contraseña' 
            onChange={e => handleChange(e)}
            value={datos.pass}/>
            <button className='list__link--buttonStyle   w-100 ' 
            type='submit'>
              {esRegistro ? "Registrar" : "Login"} 
            </button>
            <button className='list__link--buttonStyle--2  w-100 ' 
            onClick={()=>setEsRegistro(!esRegistro)}
            type='button'>
              {esRegistro ? "Ya tengo cuenta" : "¿No tienes cuenta?"}
            </button>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default Login