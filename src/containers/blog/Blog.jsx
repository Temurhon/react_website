import React from 'react'
// Importing article component for each of the group
import { Article } from '../../components';
//Adding css component
import './blog.css';

// importing all the images from the imports.js
import {blog01,blog02,blog03,blog04,blog05,} from './imports';

const Blog = () => {
    return (
        <div className='timur__blog section__padding' id='blog'>
            <div className='timur__blog-heading'>
                <h1 className='gradient__text'>A lot is happening, 
We are blogging about it.</h1>
            </div>
            {/* structure for the articles */}
            <div className='timur__blog-container'>
                <div className='timur__blog-container_groupa'>
                <Article/>
                </div>

                <div className='timur__blog-container_groupb'>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                </div>
            </div>
        </div>
    )
}

export default Blog
