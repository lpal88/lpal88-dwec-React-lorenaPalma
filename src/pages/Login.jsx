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
    console.log("handleChange");
    if (esRegistro) {
      registrar()
    } else {
      login()
    }
  }

  const registrar = () => {
    console.log("registrando")
    setUser(true)
    navigate("/dashboard")

  }

  const login = () => {
    console.log("logeando")
    setUser(true)
    setDatos(datosIntialState)
    navigate("/dashboard")

  }

  return (
    <div className='mt-5'>
      <h3 className='text-center'>
      {esRegistro ? "Registro" : "Login"}
      </h3>
      <hr />
      <div className='row justify-content-center'>
        <div className='col-12 col-sm-8 col-md-6 col-xl-4 '>
          <form onSubmit={procesarDatos}>
            <input 
            name='email' 
            type="email" 
            className='form-control mb-2' 
            placeholder='Introduce el email' 
            onChange={e => handleChange(e)}
            value={datos.email}/>
            <input 
            name='pass' 
            type="password" 
            className='form-control mb-2' 
            placeholder='Introduce el password' 
            onChange={e => handleChange(e)}
            value={datos.pass}/>
            <button className='btn btn-dark w-100' 
            type='submit'>
              {esRegistro ? "Registrar" : "Login"} 
            </button>
            <button className='btn btn-sm btn-info w-100 mb-2' 
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