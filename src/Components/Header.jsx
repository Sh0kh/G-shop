import React, { useState } from 'react'
import '../Style/Header.css'
import header_logo from '../img/header-logo.png'
import Hamburger from 'hamburger-react'
function Header() {
    const [open, close] = useState([])

    const toggleMenu = () => {
        close(!open);
      };
  return (
    <header>
        <div className='container'>
            <div className='Header-wrapper'>
                <div className='Header-logo'>
                    <img src={header_logo} alt="foto" />
                </div>
                <div className='header-nav'>
                    <nav>
                        <a href="!#">Home</a>
                        <a href="!#">Mahsulot</a>
                        <a href="!#">FAQ</a>
                    </nav>
                    <div className='header-line'>

                    </div>
                    <div className='header-btn' >
                    <button>
                        Bog`lanish
                    </button>
                </div>
                </div>
                <div className='hamburger' onClick={toggleMenu}>
                    <Hamburger color='white'/>
                </div>
            </div>
            <div className={`header-modal ${open ? 'close' : 'open'}`}>
                <div>
                    <nav>
                        <a href="!#">Home</a>
                        <a href="!#">Mahsulot</a>
                        <a href="!#">FAQ</a>
                    </nav>
                    <div className='header-btn'>
                        <button>
                            Bog`lanish
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header