import React, { useEffect, useState } from 'react'
import './style/content.css';
import imgg from '../assets/scblog.png';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
const Content = () => {
    const history = useHistory();
    const backHandler = ()=>{
        history.push('/');
    }
    const [blog, setBlog] = useState({});
    const [likeShow, setLikeShow] = useState(false);
    const {id} = useParams();
    const user = JSON.parse(localStorage.getItem('user'));
    useEffect(() => {
      async function fetch(){
            try{
                var {data} = await axios.post(
                    '/blogs/fetchablog',
                    JSON.stringify({ blogId:id.substring(1) }),
                    {
                        headers: { "Content-Type": "application/json" },
                        withCredentials: true,
                    }
                );
                // console.log(data);
                // console.log(data);
                setBlog(data); 
                if(user){
                    const arr = data.like.find((item)=>{return user.email===item});
                    console.log(arr);
                    if(arr===user.email){
                        setLikeShow(true);
                    }
                    else{
                        setLikeShow(false);
                    }
                }

            }
            catch(error){
                console.log(error);
            }   
        }
        fetch();
    }, [])
    
    const likeHandler = ()=>{
        if(blog.like.find((item)=>{return item==user.email})){
            const arr  = [...blog.like];
        }
    }


  return (
    <div className='blog-viewer'>
        <div className='backbtn btn' onClick={backHandler}>
            <i class='fas fa-arrow-right'></i>
        </div>
        <div className='top btn'>
            <i class='fas fa-angle-up'></i>
        </div>
        <div className='like btn' style={{
            display:(user)?'flex':'none',
            color:(likeShow)? 'cyan':'ffffff',
        }} onClick={likeHandler}>
            <i class='fas fa-thumbs-up'></i>
        </div>
        <div className='viewer-heading'>
            {blog.heading}
        </div>
        <div className='viewer-img'>
            <img className='imgBlog' src={blog.img}></img>
        </div>
        <div className='caption1'>
            {blog.caption}
        </div>
        <div className='viewer-content'>
            {blog.content}
        </div>
    </div>
  )
}

export default Content