import React from 'react'
//Adding css component
import './header.css';
//Adding AI image
import ai from '../../assets/ai.png';
//Adding people Icon
import people from '../../assets/people.png';

const Header = () => {
    return (
        <div className='timur__header section__padding' id='home'>
            <div className='timur__header-content'>
                    <h1 className='gradient__text'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
                    <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                {/* Email Input */}
                <div className='timur__header-content__input'>
                    {/* This input will be a self-closing component of type: email.*/}
                     <input type="email" placeholder='Your Email Address'></input>       
                                 {/* Get Started Button */}
                    <button type='button'>Get Started</button>
                </div>
                {/* Users Div */}
                    <div className='timur__header-content__people'>
                        {/* Icons of users */}
                        <img src={people} alt='People'></img>
                        {/* Description */}
                        <p>1,600 people requested access a visit in last 24 hours</p>
                    </div>

                    {/* Icon of that AI MAN */}
                    <div className='timur__header-image'>

                        <img src={ai} alt="AI" />

                    </div>

            </div>
        </div>
    )
}

export default Header
