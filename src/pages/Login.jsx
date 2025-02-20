import React, {  useState } from 'react'
import axios  from "axios"
import "../Style/style.scss"
import { Link } from 'react-router-dom'

function login() {

  const [inputs, setInputs] = useState({
    username:"",
    password:""
  })

  const handleChange =(e) =>{
    setInputs((prev)=>({...prev,[e.target.name]:e.target.value})
    )

    setInputs("")
  }

  const handleSubmit = async (e) =>{
      e.preventDefault()
      try{
        const response = await axios.get("http//:localhost:3000/")
        console.log("successfuly login",response.data)
      } catch(err){
        console.error("fail to login",err.response?.data || err.response)
      }
    
  }

  return (
    <div className="auth">
      <h1> Login</h1>
      <form >
        <input type="text"  name="username" value={inputs.username }placeholder='username' required onChange={handleChange}/>
        <input type="password" name="password" value={inputs.password} placeholder='password'  required onChange={handleChange} />
        <button onClick={handleSubmit}>Login</button>
        <p>Don't you have an account?</p>
        <span><Link className="link" to="/Register">Register here</Link></span>
      </form>
    </div>
  )
}

export default login