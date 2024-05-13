import React from 'react'
import '../../Style/Admin/AdminHome.css'
import SaidBar from './SaidBar'
import { NavLink } from 'react-router-dom'
import Hamburger from 'hamburger-react'
function AdminHome() {
  return (
    <div className='Dashboard'>
        <SaidBar/>
        <div className='Dashboard-content'>
          <div className='Dashboard-content-header'>
              <h1>
                  Bosh panel
              </h1>
          </div>
          <div className='Dashboard-main'> 
              <div className='Dashboard-main-wrapper'>
                  <div className='Dashboard-card'>
                      <div className='Dashboard-card-grid'>
                          <h3>
                              Mahsulot
                          </h3>
                          <span>
                            100
                          </span>
                      </div>
                      <NavLink to ="/AdminShop">
                      O`tish <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"/></svg>
                    </NavLink>
                  </div>
                  <div className='Dashboard-card'>
                      <div className='Dashboard-card-grid'>
                          <h3>
                              Turkum
                          </h3>
                          <span>
                            100
                          </span>
                      </div>
                      <NavLink to ="/AdminShop">
                      O`tish <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"/></svg>
                    </NavLink>
                  </div>
                  <div className='Dashboard-card'>
                      <div className='Dashboard-card-grid'>
                          <h3>
                              Habar
                          </h3>
                          <span>
                            100
                          </span>
                      </div>
                      <NavLink to ="/AdminShop">
                      O`tish <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"/></svg>
                    </NavLink>
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default AdminHome