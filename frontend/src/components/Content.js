import React from 'react'
import './style/content.css';
import imgg from '../assets/scblog.png';
const Content = ({viewBlog}) => {
  return (
    <div className='blog-viewer'>
        <div className='backbtn btn'>
            <i class='fas fa-arrow-right'></i>
        </div>
        <div className='top btn'>
            <i class='fas fa-angle-up'></i>
        </div>
        <div className='viewer-heading'>
            {viewBlog.heading}
        </div>
        <div className='viewer-img'>
            <img className='imgBlog' src={imgg}></img>
        </div>
        <div className='caption'>
            {viewBlog.caption}
        </div>
        <div className='viewer-content'>
            {viewBlog.content}
        </div>
    </div>
  )
}

export default Content