import React from 'react'
import '../Style/Hero.css'
import { NavLink } from 'react-router-dom'
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP, ScrollTrigger,);
function Hero() {
    useGSAP(()=>{
        gsap.fromTo('.Home_Hero_title',
            { y: '100%', opacity: 0 }, 
            { y: '0%', opacity: 1, duration: 2, ease: 'power2.out' }
          )
        gsap.fromTo('.Home_Hero_title2',
            { y: '100%', opacity: 0 }, 
            { y: '0%', opacity: 1, duration: 2, ease: 'power2.out' }
          )
        gsap.fromTo('.Home_Hero_title3',
            { y: '100%', opacity: 0 }, 
            { y: '0%', opacity: 1, duration: 2, ease: 'power2.out' }
          )
        gsap.fromTo('.Hero_btn',
            { y: '100%', opacity: 0 }, 
            { y: '0%', opacity: 1, duration: 2, ease: 'power2.out' }
          )
    })
  return (
    <section className='hero'>
        <div className='container'>
            <div className='hero-wrapper'>
                <h2 className='Home_Hero_title'>
                    Top G
                </h2>
                <h1 className='Home_Hero_title2'>
                    Hayotagi kiyinish stillingizni o'zgartiring! 
                </h1>
                <span className='Home_Hero_title3'>
                    Siz izlayotgan kiyimlar bizda..
                </span>
                <div className='Hero-grid'>
                <NavLink className="Hero_btn" to ="/Shop">Mahsulot</NavLink>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero