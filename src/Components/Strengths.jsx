import React from 'react'
import '../Style/Strengths.css'
import '../Style/Media.css'
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP, ScrollTrigger,);
function Strengths() {
    useGSAP(()=>{
        gsap.fromTo('.Str__title',
      {
        y:'-100%',
        opacity:0,
      },
      {
        y:'0%',
        opacity:1,
        scrollTrigger:{
          trigger:'.Str__title',
          start:'top 90%',
          scrub:4
        }
      }
    )
        gsap.fromTo('.str__card1',
      {
        opacity:0,
      },
      {
        opacity:1,
        scrollTrigger:{
          trigger:'.str__card1',
          start:'top 90%',
          scrub:3
        }
      }
    )
        gsap.fromTo('.str__card2',
      {
        opacity:0,
      },
      {
        opacity:1,
        scrollTrigger:{
          trigger:'.str__card2',
          start:'top 90%',
          scrub:5
        }
      }
    )
        gsap.fromTo('.str__card3',
      {
        opacity:0,
      },
      {
        opacity:1,
        scrollTrigger:{
          trigger:'.str__card3',
          start:'top 90%',
          scrub:10
        }
      }
    )
        gsap.fromTo('.str__card4',
      {
        opacity:0,
      },
      {
        opacity:1,
        scrollTrigger:{
          trigger:'.str__card4',
          start:'top 90%',
          scrub:15
        }
      }
    )
    })
  return (
   <section className='Strengths'>
        <div className='container'>
            <h1 className='Str__title'>
                Kuchli tomonlarimiz
            </h1>
            <div className='Strenghts-wrapper'>
                <div className='Str-card str__card1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M9.68 13.69L12 11.93l2.31 1.76l-.88-2.85L15.75 9h-2.84L12 6.19L11.09 9H8.25l2.31 1.84zM20 10c0-4.42-3.58-8-8-8s-8 3.58-8 8c0 2.03.76 3.87 2 5.28V23l6-2l6 2v-7.72A7.96 7.96 0 0 0 20 10m-8-6c3.31 0 6 2.69 6 6s-2.69 6-6 6s-6-2.69-6-6s2.69-6 6-6"/></svg>
                <h2>
                    Sifatli xizmat
                </h2>
                </div>
                <div className='Str-card str__card2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="currentColor" fill-rule="evenodd" d="M24.039 6c-4.517 0-8.632 1.492-11.067 2.711q-.33.165-.616.322c-.378.206-.7.398-.956.567l2.77 4.078l1.304.519c5.096 2.571 11.93 2.571 17.027 0l1.48-.768L36.6 9.6a16 16 0 0 0-1.689-.957C32.488 7.437 28.471 6 24.04 6m-6.442 4.616a25 25 0 0 1-2.901-.728C16.978 8.875 20.377 7.8 24.04 7.8c2.537 0 4.936.516 6.92 1.17c-2.325.327-4.806.882-7.17 1.565c-1.86.538-4.034.48-6.192.081m15.96 5.064l-.246.124c-5.606 2.828-13.042 2.828-18.648 0l-.233-.118C6.008 24.927-.422 41.997 24.039 41.997S41.913 24.61 33.557 15.68M23 24a2 2 0 1 0 0 4zm2-2v-1h-2v1a4 4 0 0 0 0 8v4c-.87 0-1.611-.555-1.887-1.333a1 1 0 1 0-1.885.666A4 4 0 0 0 23 36v1h2v-1a4 4 0 0 0 0-8v-4c.87 0 1.611.555 1.887 1.333a1 1 0 1 0 1.885-.666A4 4 0 0 0 25 22m0 8v4a2 2 0 1 0 0-4" clip-rule="evenodd"/></svg>
                <h2>
                Hamyonbob narx
                </h2>
                </div>
                <div className='Str-card str__card3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 13a5 5 0 0 1-5-5h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2a5 5 0 0 1-5 5m0-10a3 3 0 0 1 3 3H9a3 3 0 0 1 3-3m7 3h-2a5 5 0 0 0-5-5a5 5 0 0 0-5 5H5c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2"/></svg>
                <h2>
                    Sifatli mahsulot
                </h2>
                </div>
                <div className='Str-card str__card4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M1 3a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v5h4a5 5 0 0 1 5 5v4a3.001 3.001 0 0 1-2.129 2.872a3 3 0 0 1-5.7.128H8.83a3 3 0 0 1-5.7-.128A3.001 3.001 0 0 1 1 17v-4h6a1 1 0 1 0 0-2H1V9h4a1 1 0 0 0 0-2H1zm13 15h1.171a3 3 0 0 1 5.536-.293A.997.997 0 0 0 21 17v-4a3 3 0 0 0-3-3h-4zm-7 1a1 1 0 1 0-2 0a1 1 0 0 0 2 0m10.293-.707A.994.994 0 0 0 17 19a1 1 0 1 0 .293-.707" clip-rule="evenodd"/></svg>
                <h2>
                Tez yetkazib berish
                </h2>
                </div>
            </div>
        </div>
   </section>
  )
}

export default Strengths