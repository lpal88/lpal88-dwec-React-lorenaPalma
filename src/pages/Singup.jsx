import React,  { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2'
import PasswordChecklist from "react-password-checklist"

const SingupForm = () => {
    const initialState = {
      name: "",
      email: "", 
      password: "", 
      passConf: "",
      age: 0,
      check: false
    }
  
  const [personalData, setPersonalData] = useState(initialState)
 
  const navigate = useNavigate()

  const { register, formState: { errors }, handleSubmit } = useForm();
  

    const onSubmit = () => {
        sessionStorage.setItem('email', personalData.email)
        sessionStorage.setItem('password', personalData.password)
        sessionStorage.setItem('name', personalData.name)
        const name = sessionStorage.getItem('name')
        Swal.fire({
            title: `Welcome! ${name}`,
            text: 'You are registered',
            icon: 'success',
            showConfirmButton : false,
            timer: 5000,
        })
        navigate("/login")}

            


/**
 * The function takes an event as an argument, and then uses the event's target to set the state of the
 * personalData object.
 */

const handleChange = e => {
    const {name, value, checked, type} = e.target 
    setPersonalData({
        ...personalData,
        [name]: type === 'checkbox' ? true : value
    })
}

  return (
    <>

    <form onSubmit={handleSubmit(onSubmit)} className="logForm">
        <section className="logForm__option">
            <Link to="/login"><button className='option__sing'>LOG IN</button></Link>
            <button className='option__log'>SING UP</button>
        </section><br />
        <section className="logForm__input">
            {errors.name?.type === 'required' && <p className="errorMessage" role="alert">Name is required</p>}
            {errors.name?.type === 'pattern' && <small className='errorMessage'>Name is not valid</small>}
            <input 
                {...register("name", { required: true, pattern: /^[A-Za-z]+$/i, maxLength: 20 })} 
                aria-invalid={errors.name ? "true" : "false"}
                name='name' type="text" className="input__box" placeholder="Name"
                onChange={e =>handleChange(e)}
                value={personalData.name}>
            </input> 
           
            {errors.email?.type === 'required' && <p className="errorMessage" role="alert">Email is required</p>}
            {errors.email?.type === 'pattern' && <small className='errorMessage'>Email is not valid</small>}
            <input 
                {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i})} 
                aria-invalid={errors.email ? "true" : "false"}
                name='email' type="text" className="input__box" placeholder="Email" 
                onChange={e => handleChange(e)}
                value={personalData.email}>
            </input><br />
            
            <PasswordChecklist
				rules={["minLength","specialChar","number","capital","match"]}
				minLength={8}
				value={personalData.password}
				valueAgain={personalData.passConf}
                onChange={(isValid) => {}}
			/>
            <input 
            name='password'
            type="password" 
            className="input__box" 
            placeholder="Password"
            onChange={e =>handleChange(e)}
            />
            <input 
            name='passConf'
            type="password"
            className="input__box" 
            placeholder="Confirm Password" 
            onChange={e =>handleChange(e)}
            />
           
            <br />
            {errors.age?.type === 'required' && <p className="errorMessage" role="alert">Age is required</p>}
            {errors.age?.type === 'min' && <small className='errorMessage'>Sorry, too young</small>}
            {errors.age?.type === 'max' && <small className='errorMessage'>Sorry, too old</small>}
            <label>Age:
            <input 
            {...register("age", { required: true,  min: 18, max: 99 })} 
            aria-invalid={errors.age ? "true" : "false"}
            name='age' type="number" className="input__box"
            value={personalData.age} 
            onChange={e =>handleChange(e)}/>
            </label><br />

           
            <input 
            {...register("check", { required: true })} 
            aria-invalid={errors.check ? "true" : "false"}
            name="check" className="form-check-input"type="checkbox" 
            checked={personalData.check}
            onChange={e => handleChange(e)}/> 

            <label htmlFor="check">I Accept the terms of the <span className='terms'>Privacy Policy</span > and <span className='terms'>Terms of Use</span>
            </label>
            {errors.check?.type === 'required' && <p className="errorMessage" role="alert">You must accept the terms</p>} 
            
            <button type="submit" className="logForm__submit">Register</button>
        </section>
    </form>

          
    </>
  )

}

export default SingupForm