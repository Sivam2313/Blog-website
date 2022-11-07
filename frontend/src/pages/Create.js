import React, { useState } from 'react'
import { Editor } from "@tinymce/tinymce-react";
import './style/create.css';
const Create = () => {
    const [title, settitle] = useState("");
    const [content, setContent] = useState("");
    const [caption, setCaption] = useState("");
    const [img, setImg] = useState("");
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
                    <button className='login'>
                        Login
                    </button>
                </div>
            </div>
        </div>
        <div className='create-content'>
            <div className='title'>
                <input type='text' placeholder='Title of The Blog...' onchange={(e)=>{settitle(e.target.value)}}></input>
            </div>
            <div className='caption'>
                <div className='btn1 imgSelect'>
                    Select
                </div>
                <input className='caption-input' type='text' placeholder='Caption of The Pic...' onchange={(e)=>{setImg(e.target.value)}} />
            </div>
            <div className='area' >
            <Editor
                init={{
                    width: 800,
                    height: 600
                }}
                // onEditorChange={(content, editor)=>{
                //     console.log(content);   
                // }}
            />
            </div>
        </div>
    </div>
  )
}

export default Create