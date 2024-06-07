import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import './navbar.css';


const Navbar = () => {
  return (
    <div className='navitems'>
      <div className='brandname'></div>
      <h3>24X7 <span>+91876578984</span></h3>
      <div className='navbar-container'>

        <div className='nav-wrapper'>
        <FaArrowAltCircleDown className='navlogo'/>
        <h4>Download App</h4>
        </div>  

        <div className='nav-wrapper'>
        <FaUserCircle  className='navlogo'/>
        <h4>Ravi</h4>
        </div>

      </div>

    </div>
  )
}

export default Navbar;