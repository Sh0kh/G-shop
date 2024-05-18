import React from 'react'
import '../Style/HomeContact.css'
import { NavLink } from 'react-router-dom'
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP, ScrollTrigger,);
function HomeContact() {
    useGSAP(()=>{
        gsap.fromTo('.HomeContact_title',
        {
          y:'-100%',
          opacity:0,
        },
        {
          y:'0%',
          opacity:1,
          scrollTrigger:{
            trigger:'.HomeContact_title',
            start:'top 90%',
            scrub:3
          }
        }
      )
      gsap.fromTo('.Contact-btn',
      {
        opacity:0,
        x:'-100%',
      },
      {
        opacity:1,
        x:'0',
        scrollTrigger:{
          trigger:'.Contact-btn',
          end:'top 100%',
          // markers:true,
          scrub:5
        }
      }
    )
    gsap.fromTo('.tel-btn',
      {
        opacity:0,
        x:'100%',
      },
      {
        opacity:1,
        x:'0',
        scrollTrigger:{
          trigger:'.tel-btn',
          end:'top 100%',
        //   markers:true,
          scrub:5
        }
      }
    )
    })
  return (
   <section className='HomeContact'>
        <div className='container'>
            <h1 className='HomeContact_title'>
                Bog`lanish uchun
            </h1>
            <div className='HomeContent-wrapper'>
                <NavLink className='Contact-btn' to ="/Contact">Izoh qoldirish</NavLink>
                <a className='tel-btn' href="!#">Bog`lanish</a>
            </div>
        </div>
   </section>
  )
}

export default HomeContact