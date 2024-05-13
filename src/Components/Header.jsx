import React, { useState } from 'react'
import '../Style/Header.css'
import header_logo from '../img/header-logo.png'
import Hamburger from 'hamburger-react'
import {  useEffect } from 'react';
import { NavLink } from 'react-router-dom'

function Header() {
    const [open, close] = useState([])

    const toggleMenu = () => {
        close(!open);
      };
      const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className={isScrolled ? 'header_bg' : ''}>
        <div className='container'>
            <div className='Header-wrapper'>
                <div className='Header-logo'>
                    <img src={header_logo} alt="foto" />
                </div>
                <div className='header-nav'>
                    <nav>
                    <NavLink to ="/">Bosh sahifa</NavLink>
                        <NavLink to ="/Shop">Mahsulot</NavLink>
                    </nav>
                    <div className='header-line'>

                    </div>
                    <div className='header-btn' >
                        <NavLink to ="/Contact">Bog`lanish</NavLink>
                </div>
                </div>
                <div className='hamburger' onClick={toggleMenu}>
                    <Hamburger color='white'/>
                </div>
            </div>
            <div className={`header-modal ${open ? 'close' : 'open'}`}>
                <div>
                    <nav>
                        <NavLink to ="/">Home</NavLink>
                        <NavLink to ="/Shop">Shop</NavLink>
                    </nav>
                    <div className='header-btn'>
                        <NavLink to ="/Contact">Bog`lanish</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header