import React, { useState } from 'react'
import '../Style/Header.css'
import header_logo from '../img/header-logo.png'
import Hamburger from 'hamburger-react'
import {  useEffect } from 'react';
import { NavLink } from 'react-router-dom'

function Header() {
    const [open, setOpen] = useState(false); // Заменил close на setOpen

    const toggleMenu = () => {
        setOpen(!open); // Изменил close на setOpen
    };

    const [isScrolled, setIsScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const ScTop = () => {
        window.scrollTo(0, 0);
    }
    const handleNavClick = () => {
        toggleMenu();
        ScTop();
    };
    return (
        <header className={isScrolled ? 'header_bg' : ''}>
            <div className='container'>
                <div className='Header-wrapper'>
                    <div className='Header-logo'>
                        <img src={header_logo} alt="foto" />
                    </div>
                    <div className='header-nav'>
                        <nav>
                            <NavLink onClick={ScTop} to="/">Bosh sahifa</NavLink>
                            <NavLink onClick={ScTop} to="/Shop">Mahsulot</NavLink>
                        </nav>
                        <div className='header-line'></div>
                        <div className='header-btn' >
                            <NavLink onClick={ScTop} to="/Contact">Bog`lanish</NavLink>
                        </div>
                    </div>
                    <div className='hamburger' onClick={toggleMenu}>
                        <Hamburger color='white' toggled={open} toggle={setOpen} />
                    </div>
                </div>
                <div className={`header-modal ${open ? 'open' : 'close'}`}>
                    <div>
                        <nav>
                            <NavLink onClick={handleNavClick} to="/">Bosh sahifa</NavLink>
                            <NavLink onClick={handleNavClick} to="/Shop">Mahsulot</NavLink>
                        </nav>
                        <div className='header-btn'>
                            <NavLink onClick={handleNavClick} to="/Contact">Bog`lanish</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
