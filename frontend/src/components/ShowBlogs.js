import React from 'react'
import { useHistory } from 'react-router-dom';
import {motion} from 'framer-motion';

const ShowBlogs = ({blogs,setViewBlog}) => {
    const history = useHistory();
    function clickHandler(idx){
        const path = '/:' + blogs[idx]._id;
        history.push(path);
    }
  return (
    <motion.div layout initial={{opacity:0}} animate={{opacity:1}} className='content'>
        {
            blogs.map((item,idx)=>{
                return(
                    <div key={idx} className='blog-content' onClick={()=>{clickHandler(idx)}}>
                        <div className='img'>
                            <img src={item.img} className='cover-img'></img>
                        </div>
                        <div className='header'>
                            <div className='tags'>
                                {
                                    item.tags.map((tg,idx)=>{
                                        return(
                                            <span key={idx} className='tag'>
                                                {tg.tagName}
                                            </span>
                                        )
                                    })
                                }
                            </div>
                            <div className='likes'>
                               <i class='fas fa-thumbs-up like-icon'></i>
                               {item.likes.length} 
                            </div>
                        </div>
                        <div className='blog-main'>
                            <div className='blog-heading'>
                                {item.heading}
                                </div>
                            <div className='blog-desc'>
                                {item.content}
                            </div>
                        </div>
                        <div className='blog-footer'>
                            Created By: {item.created}
                        </div>
                    </div>
                )
            })
        }
    </motion.div>
  )
}

export default ShowBlogs