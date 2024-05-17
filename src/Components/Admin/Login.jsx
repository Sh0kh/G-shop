import React, { useEffect, useRef } from "react";
import "../../Style/Admin/Login.css";
import Login0logo from "../../img/header-logo.png";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  let input_login = useRef();
  let input_password = useRef();
  async function checkLogin(e) {
    e.preventDefault();
    const data = {
      email: input_login.current.value,
      password: input_password.current.value,
    };

  

    if (
      input_login.current.value === "admin@gmail.com" &&
      input_password.current.value === "password"
    ) {
      navigate("/Admin");
      await fetch("https://market-online.onrender.com/api/admins/login", {
        method: "POST",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify(data)
      }).then(res=>{
          return res.json()
      }).then ((items)=>{
          console.log(items.tokens.refresh_token);
          localStorage.setItem("token", items?.tokens?.refresh_token)
      })
    } else {
      navigate("/Login");
    }
  }
  return (
    <div className="Login">
      <div className="Login-wrapper">
        <div className="Login-logo">
          <img src={Login0logo} alt="" />
        </div>
        <form onSubmit={(e) => checkLogin(e)}>
          <label htmlFor="login">
            <h3>Login</h3>
            <input ref={input_login} id="login" required type="text" />
          </label>
          <label htmlFor="password">
            <h3>Password</h3>
            <input ref={input_password} id="password" required type="text" />
          </label>
          <button type="submit">Kirish</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
