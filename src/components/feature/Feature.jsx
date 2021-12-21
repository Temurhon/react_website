import React from 'react'
//Adding css component
import './feature.css';
const Feature = ({title,text}) => {
    return (
        <div className='timur__features-container__feature'>
           <div className='timur__features-container__feature-title'>
               {/* little orange line above the titles */}
            <div/>
            <h1>{title}</h1>
           </div>
           <div className='timur__features-container__feature-text'>
              <p>{text}</p> 
              </div>
        </div>
        
    )
}

export default Feature
