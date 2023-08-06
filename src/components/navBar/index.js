import React from 'react';
import "./navBar.scss";

const NavBar = () => {
  return (
    <div className='navBar__container marginBtm'>
        <div className='navBar__link-container'>
            <div className='navBar__link'>Home</div>
            <div className='navBar__link'>About Me</div>
            <div className='navBar__link'>Resume</div>
            <div className='navBar__link'>Testimonial</div>
            <div className='navBar__link'>Contact</div>
        </div>
    </div>
  )
}

export default NavBar