import React, { useEffect, useState } from 'react'
import { Editor } from "@tinymce/tinymce-react";
import './style/create.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const Create = () => {
    const [heading, setHeading] = useState("");
    const [content, setContent] = useState("fjkfjs hdafjsadk hsdfjsdf hjsfksdj f");
    const [caption, setCaption] = useState("");
    const [img, setImg] = useState("");
    const history = useHistory()
    useEffect(() => {
        if(JSON.parse(localStorage.getItem('isAuth'))){

        }
        else{
            history.push('/');
        }
    }, [])

    const loginHandler  = ()=>{
        console.log(JSON.parse(localStorage.getItem('isAuth')));
        if(JSON.parse(localStorage.getItem('isAuth'))){
            localStorage.setItem('user',false);
            localStorage.setItem('isAuth',false);
            history.push('/login');
        }
        else{
            history.push('/login')
        }
    }
    
    const submitHandler = async ()=>{
        console.log(caption);
        const user = JSON.parse(localStorage.getItem('user'));
        if(!heading || !content || !caption ){
            return;
        }
        const created = user.email;
        console.log(user);
        try{
            const {data} = await axios.post(
                '/blogs/create',
                JSON.stringify({ heading,content,caption,created}),
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                }
            );
            history.push('/');
        }
        catch(error){
            console.log(error);
        }
    }
  return (
    <div>
        <div className='navbar'>
            <p className='brand'>
                Blog
            </p>
            <div className='links'>
                <div className='links nav-links'>
                    Explore
                </div>
                <div className='links nav-links'>
                    Create
                </div>
                <div className='links'>
                    <button className='login' onClick={loginHandler}>
                        Login
                    </button>
                </div>
            </div>
        </div>
        <div className='create-content'>
            <div className='title'>
                <input type='text' placeholder='Title of The Blog...' onChange={(e)=>{setHeading(e.target.value)}}></input>
            </div>
            <div className='caption'>
                <div className='btn1 imgSelect'>
                    Cover Image
                </div>
                <input className='caption-input' type='text' placeholder='Caption of The Pic...' onChange={(e)=>{setCaption(e.target.value)}} />
            </div>
            <div className='area' >
            <textarea className='input-content' onChange={(e)=>{setContent(e.target.value)}}></textarea>
            </div>
            <div className='bttn'>
                <button type='submit' className='btn11' onClick={submitHandler}>
                    Submit
                </button>
            </div>
        </div>
    </div>
  )
}

export default Create