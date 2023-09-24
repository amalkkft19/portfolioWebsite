import React from 'react'

const CompanyDetails = ({data = {}}) => {
  return (
    <div className='org__container'>
        <div className='org__header'>
            <div className='org__header_left'>
                <div className='org__icon'>
                    <img className='org__icon-img' alt='org icon' src={data.img}/>
                </div>
                <div className='org__name-place'>
                    <div className='org__name'>
                        {data.company}
                    </div>
                    <div className='org__place'>
                        {data.place}
                    </div>
                </div>
            </div>
            <div className='org__header_right'>
                <div className='org__header_year'>
                    {data.year}
                </div>
            </div>
        </div>

        <div className='org__bottom_section'>
            <div className='org__experience'>
                <div className='number__of_years'>
                    {data.experience}
                </div>
                <div>
                    <div className='years__text'>Years</div>
                    <div className='experience__text'>experience</div>
                </div>
            </div>
            <div className='org__projects'>
                <div className='number__of_projects'>
                    {data.projects}
                </div>
                <div>
                    <div className='text__projects'>Projects</div>
                    <div className='text__class'>{data.type}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CompanyDetails