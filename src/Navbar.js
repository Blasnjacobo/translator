import React from 'react'
import './App.css'
import logo from './translator.png'

const Navbar = () => {
  return (
    <div className='navbar-section'>
      <img src={logo} alt='translator logo' width='80vw' />
      <p className='welcome'><span>Language Translator:</span> You are having access to more than 10 different languages</p>
    </div>
  )
}

export default Navbar
