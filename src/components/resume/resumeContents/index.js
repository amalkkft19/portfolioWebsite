import React from 'react';
import "./resumeContent.scss";
import EducationComponent from './education';
import SkillsComponent from './skills';
import WorkHistoryComponent from './workHistory';
import ProjectsComponent from './projects';

const ResumeContents = ({activeList}) => {
  const switchComponents = ()=>{
   switch (activeList) {
    case 1:
      
      return <EducationComponent/>;
    case 2:
      
      return <WorkHistoryComponent/>;
    case 3:
      
      return <SkillsComponent/>;
    case 4:
      
      return <ProjectsComponent/>;
   
    default:
      break;
   }
  }
 
  return (
    <div className='resume__content_container'>
      {switchComponents()}
    </div>
  )
}

export default ResumeContents