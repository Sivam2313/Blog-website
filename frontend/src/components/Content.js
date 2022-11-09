import React from 'react'
import './style/content.css';
import imgg from '../assets/scblog.png';
import { useHistory } from 'react-router-dom';
const Content = ({viewBlog,setViewBlog}) => {
    const history = useHistory();
    const backHandler = ()=>{
        setViewBlog("");
    }
  return (
    <div className='blog-viewer'>
        <div className='backbtn btn' onClick={backHandler}>
            <i class='fas fa-arrow-right'></i>
        </div>
        <div className='top btn'>
            <i class='fas fa-angle-up'></i>
        </div>
        <div className='viewer-heading'>
            {viewBlog.heading}
        </div>
        <div className='viewer-img'>
            <img className='imgBlog' src={viewBlog.img}></img>
        </div>
        <div className='caption1'>
            {viewBlog.caption}
        </div>
        <div className='viewer-content'>
            {viewBlog.content}
        </div>
    </div>
  )
}

export default Content