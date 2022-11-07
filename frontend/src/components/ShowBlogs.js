import React from 'react'

const ShowBlogs = ({blogs,setViewBlog}) => {
    function clickHandler(idx){
        setViewBlog(blogs[idx])
    }
  return (
    <div className='content'>
        {
            blogs.map((item,idx)=>{
                return(
                    <div key={idx} className='blog-content' onClick={()=>{clickHandler(idx)}}>
                        <div className='img'>
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