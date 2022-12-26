import React from 'react'

const Header = () => {
  return (
    
    <header className="header">
        <img className="header__logo" src="/Logotipo-cabecera.svg" />

        <nav className="header__menu">
            <ul className="menu__list"> 
                <li className="list__link"><a href="list.html">Autorxs</a></li>
                <li className="list__link"><a href="#">Temáticas</a></li>
                <li className="list__link"><a href="contact.html">Contacto</a></li>
                <li className="list__link--buttonStyle"><a href="login.html">LOG IN</a></li>
            </ul>
        </nav>

        <nav className="header__menuMobil">
            <img className="menuMobil__img" src="/nav_mobil.svg" />
            <ul className="menuMobil__list">
                <li className="listMobil__link"><a href="list.html">Autorxs</a></li>
                <li className="listMobil__link"><a href="#">Temáticas</a></li>
                <li className="listMobil__link"><a href="contact.html">Contacto</a></li>
                <li className="listMobil__link--buttonStyle"><a href="login.html">LOG IN</a></li>
            </ul>
        </nav>

    </header>
  )
}

export default Header