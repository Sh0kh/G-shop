import React from 'react'
import '../Style/Hero.css'
import { NavLink } from 'react-router-dom'
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import { useGSAP } from '@gsap/react';

function Hero() {
  return (
    <section className='hero'>
        <div className='container'>
            <div className='hero-wrapper'>
                <h2 className='Home_Hero_title'>
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