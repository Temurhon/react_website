import React from 'react'
//Adding css component
import './article.css';

// using props will allow to render differnet type of image for each created component through the blog
const Article = ( {imgUrl} ) => {
    return (
        <div className='timur__blog-container_article'>
            {/* div for the image */}
           <div className='timur__blog-cotntainer_article-image'>
               <img src={imgUrl} alt='blog image' />
           </div>
        </div>
    )
}

export default Article
