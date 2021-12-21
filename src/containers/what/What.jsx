import React from 'react'
import { Feature } from '../../components';
//Adding css component
import './what.css';
const What = () => {
    return (
        <div className='timur__what section__margin' id="what">
             <div className='timur__what-feature'>
                    <Feature title="What is Timmur?" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."/>
             </div>

             <div className='timur__what-heading'>
                 {/* the gradient class was already implemented in app.css */}
                <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
                <p>Explore the Library</p>
             </div>
             <div className='timur__what-container'>
                 <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "/>
                 <Feature title="Knowledge" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
                 <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
             </div>
        </div>
    )
}

export default What
