import React from 'react';

const CommonSkill = ({skillsArray =[]}) => {

  const renderSkillRating=(skill)=>{
    const divs= [];
   for(let i=0 ; i < 10; i++ ){
     (divs || []).push(<div className={`rating__bullets ${(skill|| {}).rating >= i && 'rating__bullet_active'}`}></div>);
   }
   return divs;
  }

  return (skillsArray || []).map((skill)=> (
    <div className='skill__container'>
        <div className='skill__name'>
            {(skill || {}).name}
        </div>
        <div className='skills__bullet_container'>
        {renderSkillRating(skill)} 
        </div>
    </div>
  ))
}

export default CommonSkill