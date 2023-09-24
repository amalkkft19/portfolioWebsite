import React, { useEffect, useState } from 'react';
import { workHistory } from '../../../../common/data-provider';
import "./workhistory.scss";
import CompanyDetails from './CompanyDetails';

const WorkHistoryComponent = () => {
    const [ workDetails, setWorkDetails ] = useState([]);
    useEffect(()=>{
        setWorkDetails(workHistory);
    },[])
  return (
    <div className='workHistory__container'>
        {
            workDetails.map((data)=><CompanyDetails data={ data }/>)
        }
    </div>
  )
}

export default WorkHistoryComponent