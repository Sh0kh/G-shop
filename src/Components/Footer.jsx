import React from 'react'
import '../Style/Footer.css'
import footer_logo from '../img/header-logo.png'
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    <footer>
        <div className='container'>
            <div className='Footer-wrapper'>
                <div className='footer-nav-grdi'>
                <div className='footer-logo'>
                    <img src={footer_logo} alt="logo" />
                </div>
                <div className='foote-nav' >
                    <NavLink className='tel-btn' to ="/Contact">Bog`lanish</NavLink>
                    <NavLink className='Contact-btn' to ="/Shop">Mahsulot</NavLink>
                </div>
                </div>
                <div className='footer-media'>
                    <a className='footer-instagram' href="https://www.instagram.com/andrew_tatee_uzb/reels/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
                    </a>
                    <a className='footer-telegram' href="https://l.instagram.com/?u=https%3A%2F%2Ft.me%2Fandrewtateuzbb&e=AT3Ie3B_dXlffCZ5JAYqX5p1uZhd6qP3yX7sot-8D5JWSeaUUrd8ykTEeAB0aPFhe1QiWFMeDSymTN0wJki5ZTlEr1dgDdLv4tprz59ONZ6k-tVbJx2pPHk" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01q-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32q3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817c-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088c.327.216.589.393.85.571c.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414c.214-.02.435-.22.547-.82c.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315a.34.34 0 0 0-.114-.217a.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/></svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer