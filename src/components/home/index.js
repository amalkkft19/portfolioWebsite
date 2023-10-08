import React from 'react';
import "./home.scss";
import HomeButtons from './buttons';
import ProfilePic from "../../images/profilepic.jpg"; 

const Home = () => {
  return (
    <div id='home' className='home__container marginBtm'>
        <div className='home__left-part'>
            <div className='home__text-container'>
                <div className='home__text-name'>
                  <div>I'm</div>  <div>Amal K</div>
                </div>
                <div className='home__text-designation'>
                    <span className='designer'>Designer</span> <span className='and'>&&</span> <span className='developer'>Developer</span>
                </div>
                <div className='home__text-quote'>
                "The best error message is the one that never shows up." - Thomas Fuchs
                </div>
            </div>
            <div className='home__button-container'>
                <HomeButtons/>
            </div>
        </div>
        <div className='home__right-part'>
            <div className='home__image-container'>
                <div className='home__bgnd-img'>
                    <img style={{width:"100%"}} src={ProfilePic} alt='profile'></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home