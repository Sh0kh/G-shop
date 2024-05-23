import React from 'react'
import '../Style/AboutUs.css'
import '../Style/Media.css'
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP, ScrollTrigger,);

function AboutUs() {
  useGSAP(()=>{
    gsap.fromTo('.AboutUS__title',
    {
      y:'-100%',
      opacity:0,
    },
    {
      y:'0%',
      opacity:1,
      scrollTrigger:{
        trigger:'.AboutUS__title',
        start:'top 90%',
        scrub:1
      }
    }
  )
  gsap.fromTo('.AboutUS__text',
  {
    opacity: 0 ,
  },
  {
    opacity:1,
    scrollTrigger:{
      trigger:'.AboutUS__text',
      start:'top 90%',
      scrub:1.2
    }
  }
)
  gsap.fromTo('.AboutUS__text2',
  {
    opacity: 0 ,
  },
  {
    opacity:1,
    scrollTrigger:{
      trigger:'.AboutUS__text2',
      start:'top 90%',
      scrub:1.2
    }
  }
)
})
  return (
    <section className='AboutUs'>
        <div className='container'>
            <h1 className='AboutUS__title'>
                Biz haqimizda
            </h1>
            <p className='AboutUS__text'>
                Biz yosh Top G lar, sizga birinchilardan bo'lib Top G kiyimlarini va kerakli stillni, arzon va sifatli narxlarda taqdim etmoqdamiz. 
            </p>
            <p className='AboutUS__text2'>
              O'zingizni bir hillikdan qutqaring, va mutlaqo yangi ko'rinishni yarating, albatta biz bilan.
            </p>
        </div>
    </section>
  )
}

export default AboutUs