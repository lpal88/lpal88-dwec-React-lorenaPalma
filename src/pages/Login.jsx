import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import SingupForm from '../components/SingupForm'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useUserContext } from '../contexts/userContext'
import Swal from 'sweetalert2'

const Login = () => {

  const userDataInitialState = {
    email: '',
    password: '',
  }

  const { user, setUser } = useUserContext()
  const [userData, setUserData] = useState(userDataInitialState)
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const { register, formState: { errors }, handleSubmit } = useForm();

  const login = async () => {
    setUser(true)
    setError(null)
    setUserData(userDataInitialState)
    navigate('/search')
  }
  
  const onSubmit = () => {
    const { email, password } = userData
    const userEmail = sessionStorage.getItem('email')
    const userPass = sessionStorage.getItem('password')

    email === userEmail && password === userPass
    ? (Swal.fire({
        title: 'Awesome!',
        text: 'You are log',
        icon: 'success',
        showConfirmButton : false,
        timer: 3000,
      }),
      login())
    : (Swal.fire({
        title: 'Error',
        text: 'Try again, email or password incorrect',
        icon: 'error',
        confirmButtonColor: '#52b69a',
      })
    )
  }

  const handleChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <><form onSubmit={handleSubmit(onSubmit)} action="" className="logForm">
      <section className="logForm__option">

        <button className='option__log'>LOG IN</button>
        <Link to="/singup"><button className='option__sing'>SING UP</button></Link>

      </section>

      <section className="logForm__input">

        <input 
        {...register("email", { required: true })} 
        aria-invalid={errors.email ? "true" : "false"}
        type="text" className="input__box" placeholder="Email" 
        value={userData.email} 
        onChange={e => handleChange(e)}>
        </input>
        {errors.email?.type === 'required' && <p className="errorMessage" role="alert">Email is required</p>}

        <input 
        {...register("password", { required: true })} 
        aria-invalid={errors.password ? "true" : "false"}
        type="password" className="input__box" placeholder="Password" 
        value={userData.password} 
        onChange={e => handleChange(e)}>
        </input>
        {errors.password?.type === 'required' && <p className="errorMessage" role="alert">Password is required</p>}

      </section>

      <button type="submit" className="logForm__submit">LOG IN</button>
    </form>
</>
  )
}

export default Login