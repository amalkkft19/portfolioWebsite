import React from 'react';
import { educationDetails } from '../../../../common/data-provider';

const CommonComponent = () => {
    
  return (educationDetails || []).map((data)=>(  
    <div className='education__details_container'>
        <div className='education__stage'>
            {(data || {}).stage}
        </div>
        <div className='institution'>
            <div className='name'>
            {(data || {}).institution}
            </div>
            <div className='year'>
            {(data || {}).year}
            </div>
        </div>
    </div>
  ))
}

export default CommonComponent