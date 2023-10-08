import React from 'react';
import { projects } from '../../../../common/data-provider';
import "./projects.scss";
import CarouselComponent from "../../../carousel/CarouselComponent";

const ProjectsComponent = () => {
  const renderComponent = ()=>{
    return (
      (projects || []).map((project)=>(<div className='projects__container projects'>
        <div className='projects__image' data-slide>
          <img className='backgnd-img' src='https://cutewallpaper.org/21/linkedin-background-photo-engineering/Entry-52-by-freelancerboy36-for-LinkedIn-Background-Image-.jpg' alt="project background"/>
        <img className='icon' src={project.img} alt=""/>
        </div>
        <div className='projects__details'>
        <div className='name'>
          {project.name}
        </div>     
        <div className='button_redirect'>
          <button>View Project</button>
        </div>
        </div>
      </div>
    )))
  }
  return<CarouselComponent renderWidgetImage={renderComponent}/>
  
}

export default ProjectsComponent