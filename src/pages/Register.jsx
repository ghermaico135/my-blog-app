import React, { useState } from 'react'
import axios  from "axios"
import "../Style/style.scss"
import {Link} from "react-router-dom"


function Register() {
  const [inputs,setInputs] = useState({
    username:"",email:"",password:""
  })

  const handleChange = (e) =>{
    setInputs((prev)=>({ ...prev,[e.target.name] : e.target.value}))
  }


  const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
      const res = await axios.post("http://localhost:3000/api/auth/register",inputs)
      console.log("successful",res.data)
    }catch(err){
      console.error("error", err.response?.data || err.message)
    }
  }


  return (
    <div className="auth">
    <h1>Register</h1>
    <form>
      <input type="text" name="username" placeholder='username' required onChange={handleChange}/>
      <input type="email" name="email" placeholder='Email' required onChange={handleChange}/>
      <input type="password" name="password" placeholder='password' required  onChange={handleChange}/>
      <button onClick={handleSubmit}>Register</button>
      <span><p>If you have an account?</p> <Link className="link" to="/Login">Login here</Link></span>
    </form>
  </div>
  )
}

export default Register