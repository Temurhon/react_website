// CTA = Click to Action.
import React from 'react'
//Adding css component
import './cta.css';
const CTA = () => {
    return (
        <div className='timur__cta'>
           <div className='timur__cta-content'>
           <p>Request Early Access to Get Started</p>
           <h3>Register today & start exploring the endless possiblities.</h3>
           </div>
           {/* contain the button */}
           <div className='timur__cta-button'>
            <button type='button'>Get Started</button>
           </div>
        </div>
    )
}

export default CTA
