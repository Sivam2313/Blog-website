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
    const [likeColor, setLikeColor] = useState('#ffffff');
    const [comments, setComments] = useState([]);
    const [message, setMessage] = useState();
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
                setBlog(data);
                if(data.likes.length!=0){
                    if(data.likes.filter((item)=>{return item.user==user.email}).length!=0){
                        setLikeColor('cyan');
                    }
                } 
                var {data} = await axios.post(
                    '/comment/fetch',
                    JSON.stringify({ blogId:id.substring(1) }),
                    {
                        headers: { "Content-Type": "application/json" },
                        withCredentials: true,
                    }
                );
                setComments(data);
            }
            catch(error){
                console.log(error);
            }   
        }
        fetch();
    }, [])

    
    
    
    const likeHandler = async ()=>{
        const email = user.email;
        try{
            var {data} = await axios.post(
                    '/blogs/like',
                    JSON.stringify({ email,blogId:id.substring(1) }),
                    {
                        headers: { "Content-Type": "application/json" },
                        withCredentials: true,
                    }
                );

            setBlog(data);
            if(data.likes.length!=0){
                if(data.likes.filter((item)=>{return item.user===user.email}).length!=0){
                    setLikeColor('cyan');
                }
                else{
                    setLikeColor('#ffffff');
                }
            }
            else{
                setLikeColor('#ffffff');
            }
            window.location.reload(false);
        }
        catch(error){
            console.log(error);
        }
    }

    const commentHandler = async ()=>{
        try{
            const {data} = await axios.post(
                    '/comment/add',
                    JSON.stringify({ blogId:id.substring(1),message,sendBy:user.email }),
                    {
                        headers: { "Content-Type": "application/json" },
                        withCredentials: true,
                    }
                );
            setComments(data);
        }
        catch(error){
            console.log(error);
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
            display:(user&&(id[0]==':'))?'flex':'none'
        }} onClick={likeHandler}>
            <i class='fas fa-thumbs-up' style={{
                color:(likeColor==='cyan')? '#e02957':'#ffffff',
            }}></i>
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
        <div className='comments-section'>
            <div className='comment-heading'>
                Comments
            </div>
            <div className='send-comments'>
                <div className='name'>
                    {user.email}
                </div>
                <div className='input-section'>
                    <input className='comment-input' placeholder='Add Comments...' onChange={(e)=>{setMessage(e.target.value)}}></input>
                    <div className='btn-comment'>
                        <button type='submit' className='submit-btn1' onClick={commentHandler}> 
                            Add
                        </button>   
                    </div>
                </div>
            </div>
            <div className='show-comments'>
                {
                    (comments.length==0)?'No Comments':
                    comments.map((item,idx)=>{
                        return (
                            <div className='comment'>
                                <div className='user-id'>
                                    {item.sendBy}:
                                </div>
                                <div className='message'>
                                    {item.message}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Content