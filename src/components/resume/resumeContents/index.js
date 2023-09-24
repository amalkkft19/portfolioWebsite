import React from 'react';
import "./resumeContent.scss";
import EducationComponent from './education';
import SkillsComponent from './skills';
import WorkHistoryComponent from './workHistory';

const ResumeContents = () => {
  return (
    <div className='resume__content_container'>
   <EducationComponent/>
   {/* <SkillsComponent/> */}
    {/* <WorkHistoryComponent/> */}
    </div>
  )
}

export default ResumeContents