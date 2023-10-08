import React from 'react'
import AboutMeImageSection from './aboutmeImage'
import TitleComponent from '../common/titleComponent'

const AboutMe = () => {
  return (
    <div id='aboutme'>
    <TitleComponent title="A Creative Mind" margin='80'/>
    <div className='aboutme__container marginBtm'>
      
        <AboutMeImageSection/>
        <div className='aboutme__description'>
          <div className='aboutme__text'>
            <p>
            I'm a React developer with 2 years of experience, known for my dual proficiency in web development and Shopify app creation. My portfolio boasts four successful Shopify apps that have revolutionized the way businesses operate online. Currently, I'm a vital part of Helixo Innovations Pvt Ltd, where I blend my love for React with my passion for developing outstanding Shopify solutions.
            </p>
            <p >
            Outside of coding, I'm an avid learner, always eager to explore new technologies and stay updated with the latest trends in React and JavaScript. I'm a regular reader of tech blogs, and I enjoy participating in hackathons to keep my problem-solving skills sharp.
            </p>
          </div>

        </div>
    </div>
    
    </div>
  )
}

export default AboutMe