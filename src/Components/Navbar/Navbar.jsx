import React from 'react'
import './Navbar.css'
import assets from '../../assets/assets.js'

const Navbar = () => {
  return (
    <div className='navbar'>
      
      <img src={assets.logo} alt="logo" className='logo' />
      
      <ul>
      <li>Personal Loan</li>
        <li>One Card</li>
        <li>Savings</li>
        <li>Checking</li>
        <li>Help</li>
      </ul>
      <div className="navRight">
        
        <button>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar