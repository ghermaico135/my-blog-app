import React from 'react'
import logo from "../assets/img/logo.png"

function Footer() {
  return (
    <footer>
      <img src={logo} alt="footer logo" />
    <span>
      Made with love and <b>React.js</b>
    </span>
    </footer>
  )
}

export default Footer