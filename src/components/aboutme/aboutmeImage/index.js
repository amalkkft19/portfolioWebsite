import React from 'react';
import { CssImage, ReactImage,JavascriprImage,HtmlImage,NodeImage,MongoImage,XdImage,FigmaImage,DeveloperImage } from '../../../images/exportImage';
import "./abtMeImg.scss";

const AboutMeImageSection = () => {
  return (
    <div className='aboutme__images'>
        <div class="icon ">
            <img alt='javascript' src={HtmlImage}/>
        </div>
        <div class="icon">
            <img alt='javascript' src={CssImage}/>
        </div>
        <div class="icon">
            <img alt='javascript' src={JavascriprImage}/>
        </div>
        <div class="icon">
            <img alt='javascript' src={ReactImage}/>
        </div>
        <div class="icon">
            <img alt='javascript' src={NodeImage}/>
        </div>
        <div class="icon">
            <img alt='javascript' src={MongoImage}/>
        </div>
        <div class="icon">
            <img alt='javascript' src={XdImage}/>
        </div>
        <div class="icon">
            <img alt='javascript' src={FigmaImage}/>
        </div>
        <div class="center-image">
            <img src={DeveloperImage} alt='devloper'/>
        </div>
    </div>
  )
}

export default AboutMeImageSection