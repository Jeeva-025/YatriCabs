import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-profile'>
        <div className='brandphotos'></div>
        <div className='footer-menus'>
            <h4>Home</h4>
            <h4>About</h4>
            <h4>Services</h4>
            <h4>News</h4>
            <h4>Contact</h4>
            <h4>PrivacyPolicy</h4>
        </div>
        <div className='footer-info'>
         <h4>News Letter</h4>
         <input type='text' placeholder='Email'/>
        </div>
        <div className='footer-rights'>
            All CopyRight are reserved by RIDE EVEE
        </div>
    </div>
  )
}

export default Footer