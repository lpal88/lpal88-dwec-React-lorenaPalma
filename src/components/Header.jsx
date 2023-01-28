import React from 'react'
import Navbar from './Navbar'
import LogotipoCabecera from '../images/LogotipoCabecera.png';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    
    <header className="header">
        <Link to="/search"><img className="header__logo" src={LogotipoCabecera} /></Link>
        <Navbar />
    </header>
  )
}

export default Header