import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
   <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/Register">Register</Link>
          </li>
          <li>
            <Link to="/Single">Single</Link>
          </li>
          <li>
            <Link to="/write">Write</Link>
          </li>
          
        </ul>

      </nav>
  )
}

export default Navbar