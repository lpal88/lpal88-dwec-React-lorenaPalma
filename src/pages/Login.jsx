import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import SingupForm from '../components/SingupForm'

let esRegistro = true

const Login = () => {

  return (
    <div className='mt-5 login'>
      <h1 className='text-center'>
      {esRegistro ? <LoginForm /> : <SingupForm />}
      </h1>
           
    </div>
  )
}

export default Login