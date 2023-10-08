import React from 'react';
import "./navBar.scss";

const NavBar = () => {
  const onClickNavBar = (id) =>{
    document.getElementById(`${id}`).scrollIntoView({
      behavior:"smooth"
    })
  }
  return (
    <div className='navBar__container marginBtm__80px'>
        <div className='navBar__link-container'>
            <div onClick={()=> onClickNavBar("home")} className='navBar__link'>Home</div>
            <div onClick={()=> onClickNavBar("aboutme")} className='navBar__link'>About Me</div>
            <div onClick={()=> onClickNavBar("resume")} className='navBar__link'>Resume</div>
            {/* <div onClick={()=> onClickNavBar("testimonial")} className='navBar__link'>Testimonial</div> */}
            <div onClick={()=> onClickNavBar("contact")} className='navBar__link'>Contact</div>
        </div>
    </div>
  )
}

export default NavBar