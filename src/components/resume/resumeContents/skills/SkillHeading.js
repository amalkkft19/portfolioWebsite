import React from 'react'

const SkillHeading = ({activeSkill,skillsHeadings,onChangeSkillSet,index}) => {

  return (
    <div onClick={()=>onChangeSkillSet(index)} className={`${activeSkill === skillsHeadings && 'active'} skillsHeader`}>
       { skillsHeadings}
    </div>
  )
}

export default SkillHeading