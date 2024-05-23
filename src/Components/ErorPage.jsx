import React from 'react'
import '../Style/Error.css'
import { NavLink } from 'react-router-dom'
function ErorPage() {
  return (
    <div className='Error'>
       <div className='Error-wrapper'>
          <h1>
            Hato!
          </h1>
          <NavLink  to='/'>
              <h3 className='Error-btn'>
                Bosh sahifaga qaytish
              </h3>
          </NavLink>
       </div>
    </div>
  )
}

export default ErorPage