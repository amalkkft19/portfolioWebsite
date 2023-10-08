import React from 'react';
import "./titleComponent.scss";

const TitleComponent = ({margin='40',title}) => {
  return (
    <div className='common-title__container' style={{marginBottom:`${margin}px`}}>{title}</div>
  )
}

export default TitleComponent