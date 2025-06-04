import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import 'hamburgers/dist/hamburgers.min.css'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    }

    return (
    <div className='header'>
        <img src={Logo} alt="" className='logo' />

      {/* Menu: tampil pas menuOpen true */}
    <ul className={`header-menu ${menuOpen ? 'active' : ''}`}>
        <li>Home</li>
        <li>Programs</li>
        <li>Why us</li>
        <li>Plants</li>
        <li>Testimonials</li>
    </ul>

      {/* Hamburger Button */}
    <div className="hamburger21">
        <button className={`hamburger hamburger--spin ${menuOpen ? 'is-active' : ''}`}
            type="button"
            onClick={toggleMenu}>
        <span className="hamburger-box">
            <span className="hamburger-inner"></span>
        </span>
        </button>
    </div>
    </div>
)
}

export default Header
