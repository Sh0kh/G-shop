import React from 'react'
import '../Style/HomeContact.css'
import { NavLink } from 'react-router-dom'
function HomeContact() {
  return (
   <section className='HomeContact'>
        <div className='container'>
            <h1>
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