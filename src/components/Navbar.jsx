import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="header__menu">
        <ul className="menu__list"> 
            <NavLink to="/search" className="list__link">Autorxs</NavLink>
            <NavLink to="/profile" className="list__link">Mi espacio</NavLink>
            <NavLink to="/contact" className="list__link">Contacto</NavLink>
            <NavLink to="/" className="list__link--buttonStyle">LOG IN</NavLink>
        </ul>
    </nav>
  )
}

export default Navbar