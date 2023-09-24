import React, { useEffect, useState } from 'react';
import CommonSkill from './commonSkill';
import { skillsArray } from '../../../../common/data-provider';
import SkillHeading from './SkillHeading';
import "./skills.scss"

const SkillsComponent = () => {
  const[skillRes, setSkillResponse] = useState({});
  const [activeSkill, setActiveSkill]= useState("")
  useEffect(()=>{
    setSkillResponse(skillsArray);
    setActiveSkill((skillsArray || {}).skillsHeader[0]);

  },[])

  const onChangeSkillSet =(index)=>{
    setActiveSkill((skillsArray || {}).skillsHeader[index])
  }
  return (
    <div className='skillSet__container'>
      {/* <SkillHeading skillsArray={skillsArray}/> */}
      <div className='skills__header_container'>
      {((skillRes || {}).skillsHeader || []).map((headings,index)=> <SkillHeading activeSkill={activeSkill} skillsHeadings={headings} onChangeSkillSet={onChangeSkillSet} index={index}/>)}
      </div>
      <CommonSkill skillsArray={skillRes[activeSkill]}/>
    </div>
  )
}

export default SkillsComponent