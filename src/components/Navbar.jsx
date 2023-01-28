import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../contexts/userContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const {user, setUser} = useContext(UserContext)

  const navigate =  useNavigate()

  const handleLogout = ()  => {
    setUser(null)
    navigate("/login")

  }

  return (
    <nav className="header__menu">
      
        <ul className="menu__list"> 
        {
          user && (
          <><>
            <NavLink to="/profile" className="list__link">
              My profile
            </NavLink></><>
            </></>
        )
        }
        {
          user ? (
            <button className='list__link--buttonStyle' onClick={(()=> handleLogout())}>
            Log Out
          </button>
          ) : (
             <NavLink to="/login" className="list__link--buttonStyle">LOG IN</NavLink>
          )
          
        }
           
        </ul>
    </nav>
  )
}

export default Navbar
