import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../contexts/userContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const {user, setUser} = useContext(UserContext)

  const navigate =  useNavigate()

  const cerrarSesion = ()  => {
    console.log("cerrando...")
    navigate("/login")
    setUser(null)
  }
  return (
    <nav className="header__menu">
      
        <ul className="menu__list"> 
        {
          user && (
          <><>
            <NavLink to="/search" className="list__link">
              Home
            </NavLink>
            <NavLink to="/profile" className="list__link">
              Mi espacio
            </NavLink></><>
            <NavLink to='/contact' className='list__link'>
              Contacto
            </NavLink>
            </></>
        )
        }
        {
          user || (
          <><NavLink to='/contact' className='list__link'>
              Contacto
            </NavLink><NavLink to="/search" className="list__link">Autorxs</NavLink></>
          )
        }
        {
          user ? (
            <NavLink to="/login" className="list__link--buttonStyle">LOG IN</NavLink>
          ) : (
            <button className='list__link--buttonStyle' onClick={(()=> cerrarSesion())}>
              Cerrar Sesión
            </button>
          )
          
        }
            

            
        </ul>
    </nav>
  )
}

export default Navbar
