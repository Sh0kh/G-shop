import React from 'react'
import '../Style/Hero.css'
import { NavLink } from 'react-router-dom'
function Hero() {
  return (
    <section className='hero'>
        <div className='container'>
            <div className='hero-wrapper'>
                <h2>
                    Top G
                </h2>
                <h1>
                    Hayotagi kiyinish stillingizni o'zgartiring! 
                </h1>
                <span>
                    Siz izlayotgan kiyimlar bizda..
                </span>
                <div className='Hero-grid'>
                <NavLink to ="/Shop">Mahsulot</NavLink>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero