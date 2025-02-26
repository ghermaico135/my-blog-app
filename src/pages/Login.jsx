import React, {  useState } from 'react'
import axios  from "axios"
import "../Style/style.scss"
import { Link, useNavigate } from 'react-router-dom'

function login() {
  const [inputs, setInputs] = useState({
    username: '',
    password:''
  })

  const [err, setError] = useState(null)

  const navigate = useNavigate()

  const handleChange =(e) =>{
    setInputs((prev)=>({...prev,[e.target.name]:e.target.value})
    )

  }

  const handleSubmit = async (e) =>{
      e.preventDefault()
      try{
         await axios.post("http://localhost:3000/api/auth/login", inputs)
          navigate("/")
       
      } catch(err){
        setError(err.response.data)
      }
    
  }

  return (
    <div className="auth">
      <h1> Login</h1>
      <form >
        <input type="text"  name="username"  placeholder='username' required onChange={handleChange}/>
        <input type="password" name="password"  placeholder='password'  required onChange={handleChange} />
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span><p>If you don't have an account ?</p><Link className="link" to="/Register">Register here</Link></span>
      </form>
    </div>
  )
}

export default login