import React, { useState } from 'react'
import ResumeContents from './resumeContents'
import "./resume.scss";
import TitleComponent from '../common/titleComponent';

const Resume = () => {
    const [activeList, setActiveList] = useState(1);

    const onLiClick =(index)=>{
        setActiveList(index);
    }
  return (
    <div id='resume'>
    <TitleComponent title="Balancing Act"/>
    <div  className='resume__container marginBtm'>
        <div className='resume__menu'>
            <ul className='resume__menu_items'>
                <li className={`resume__menu_item menu__one ${activeList === 1 && "active"}`} onClick={()=>onLiClick(1)}>Education</li>
                <li className={`resume__menu_item menu__two ${activeList === 2 && "active"}`} onClick={()=>onLiClick(2)}>Work History</li>
                <li className={`resume__menu_item menu__three ${activeList === 3 && "active"}`} onClick={()=>onLiClick(3)}>Skills</li>
                <li className={`resume__menu_item menu__four ${activeList === 4 && "active"}`} onClick={()=>onLiClick(4)}>Projects</li>
                <li className={`resume__menu_item menu__five ${activeList === 5 && "active"}`} onClick={()=>onLiClick(5)}>Interests</li>
            </ul>
        </div>
        <ResumeContents activeList={activeList}/>
    </div>
    </div>
  )
}

export default Resume