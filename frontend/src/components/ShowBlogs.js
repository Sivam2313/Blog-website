import React from 'react'
import { useHistory } from 'react-router-dom';

const ShowBlogs = ({blogs,setViewBlog}) => {
    const history = useHistory();
    function clickHandler(idx){
        const path = '/:' + blogs[idx]._id;
        history.push(path);
    }
  return (
    <div className='content'>
        {
            blogs.map((item,idx)=>{
                return(
                    <div key={idx} className='blog-content' onClick={()=>{clickHandler(idx)}}>
                        <div className='img'>
                            <img src={item.img} className='cover-img'></img>
                        </div>
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
    </div>
  )
}

export default ShowBlogs