import React from 'react'
import "../Style/style.scss"
import { Link } from 'react-router-dom'
function login() {
  return (
    <div className="auth">
      <h1> Register</h1>
      <form >
        <input type="text" placeholder='username' required/>
        <input type="password" placeholder='password'  required/>
        <button>Login</button>
        <p>Don't you have an account?</p>
        <span><Link className="link" to="/Register">Register here</Link></span>
      </form>
    </div>
  )
}

export default login