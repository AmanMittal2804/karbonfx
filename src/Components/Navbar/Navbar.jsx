import React from 'react'
import navIcon1 from '../Navbar/git.png'
import './Navbar.css'
function Navbar() {
  return (
    <div className='Header'>
        <div className='title'><h1>USER'S INVENTORY</h1></div>
        <div className="social-icon">
        <a href="https://www.linkedin.com/in/amanmittal2804/"><img src={navIcon1} alt="" /></a>
        </div>
    </div>
  )
}

export default Navbar