import React from 'react'

// importing all the asset image files from import.js file:
import { google,slack,atlassian,dropbox,shopify } from './imports';

//Adding css component
import './brand.css';
const Brand = () => {
    return (
        <div className='timur__brand section__padding'>
           <div>
               <img src={google} alt="google"/>
           </div>

           <div>
               <img src={slack} alt="slack"/>
           </div>

           <div>
               <img src={atlassian} alt="atlassian"/>
           </div>

           <div>
               <img src={dropbox} alt="dropbox"/>
           </div>

           <div>
               <img src={shopify} alt="shopify"/>
           </div>



        </div>
    )
}

export default Brand
