import React from 'react'
import '../../Style/Admin/SaidBar.css'
import Logo from '../../img/header-logo.png'
import { NavLink } from 'react-router-dom'
function SaidBar() {
  return (
    <div className='SaidBar'>
        <div className='Saidbar-header'>
            <img src={Logo} alt="foto" />
        </div>
        <div  className='SaidBar-menu'>
            <ul>
                <li>
                    <NavLink to ="/Admin">
                        <h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"/></svg>
                            Bosh panel
                        </h3>
                    </NavLink>
                </li>
                <li>
                    <NavLink to ="/AdminShop">
                        <h3>    
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 13a5 5 0 0 1-5-5h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2a5 5 0 0 1-5 5m0-10a3 3 0 0 1 3 3H9a3 3 0 0 1 3-3m7 3h-2a5 5 0 0 0-5-5a5 5 0 0 0-5 5H5c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2"/></svg>
                            Sotuv qism
                        </h3>
                    </NavLink>
                </li>
                <li>
                    <NavLink to ="/Category">
                        <h3>    
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m10 0h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M10 13H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m7 0a4 4 0 1 1-3.995 4.2L13 17l.005-.2A4 4 0 0 1 17 13"/></svg>
                            Turkum
                        </h3>
                    </NavLink>
                </li>
                <li>
                    <NavLink to ="/Habarlar">
                        <h3>    
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M0 1.5C0 .67.671 0 1.5 0h12c.829 0 1.5.67 1.5 1.5v8.994c0 .829-.671 1.499-1.5 1.499H7.667L3.8 14.89a.5.5 0 0 1-.8-.4v-2.498H1.5c-.829 0-1.5-.67-1.5-1.5zm4 2.497h7v1H4zm0 2.998h5v1H4z" clip-rule="evenodd"/></svg>
                            Habarlar
                        </h3>
                    </NavLink>
                </li>
            </ul>
        </div>
        <div className='Saidbar-footer'>
        <ul>
                <li>
                    <NavLink to ="/Admin">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"/></svg>
                    </NavLink>
                </li>
                <li>
                    <NavLink to ="/AdminShop">        
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 13a5 5 0 0 1-5-5h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2a5 5 0 0 1-5 5m0-10a3 3 0 0 1 3 3H9a3 3 0 0 1 3-3m7 3h-2a5 5 0 0 0-5-5a5 5 0 0 0-5 5H5c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2"/></svg>       
                    </NavLink>
                </li>
                <li>
                    <NavLink to ="/Category">
                         
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m10 0h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M10 13H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m7 0a4 4 0 1 1-3.995 4.2L13 17l.005-.2A4 4 0 0 1 17 13"/></svg>
                     
                    </NavLink>
                </li>
                <li>
                    <NavLink to ="/Habarlar">                   
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M0 1.5C0 .67.671 0 1.5 0h12c.829 0 1.5.67 1.5 1.5v8.994c0 .829-.671 1.499-1.5 1.499H7.667L3.8 14.89a.5.5 0 0 1-.8-.4v-2.498H1.5c-.829 0-1.5-.67-1.5-1.5zm4 2.497h7v1H4zm0 2.998h5v1H4z" clip-rule="evenodd"/></svg>
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SaidBar