import React from 'react'
import '../../Style/Admin/Login.css'
import Login0logo from '../../img/header-logo.png'
function Login() {
  return (
    <div className='Login'>
        <div className='Login-wrapper'>
            <div className='Login-logo'>
                <img src={Login0logo} alt="" />
            </div>
            <form>
                <label htmlFor="login">
                    <h3>
                        Login
                    </h3>
                    <input id='login' required type="text" />
                </label>
                <label htmlFor="password">
                    <h3>
                        Password
                    </h3>
                    <input id='password' required type="text" />
                </label>
                <button type="submit">
                    Kirish
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login