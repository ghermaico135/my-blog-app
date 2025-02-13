import React from 'react'
import "../Style/style.scss"
import {Link} from "react-router-dom"

function Register() {
  return (
    <div className="auth">
    <h1>Login</h1>
    <form>
      <input type="text" placeholder='username' required/>
      <input type="email" placeholder='Email' required/>
      <input type="password" placeholder='password' required/>
      <button>Register</button>
      <span><p>If you have an account?</p> <Link className="link" to="/Login">Login here</Link></span>
    </form>
  </div>
  )
}

export default Register