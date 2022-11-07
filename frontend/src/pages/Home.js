import React, { useState } from 'react'
import Content from '../components/Content';
import ShowBlogs from '../components/ShowBlogs';
import './style/home.css';
const Home = () => {
    const [viewBlog, setViewBlog] = useState({
        heading:'Heading1',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec finibus lectus. Etiam a metus nibh. Vivamus rhoncus nisi dui, id pellentesque velit euismod eu. Phasellus volutpat eget diam eget laoreet. Aenean tristique malesuada odio, vitae cursus enim semper eu. Aenean bibendum turpis nisl, eget aliquam sem aliquam vitae. Nunc a arcu non nulla commodo facilisis. Duis porttitor ac leo sed scelerisque. Vestibulum eu felis sit amet orci pretium ullamcorper. In mollis, ligula sed lacinia viverra, felis libero porta enim, mattis dictum lectus odio ut lorem. Curabitur eu augue a diam ornare efficitur. Sed blandit interdum sapien, vel viverra nisi maximus vel. In tempor malesuada turpis, sed rhoncus dolor lobortis accumsan. Vivamus pellentesque semper sapien non tempus. Aliquam vitae risus non urna malesuada cursus eget nec lorem. Vestibulum bibendum at libero ac tempor. ',
        tags:['jff','entertainment'],
        created:'xyz',
        caption:'Some Caption',
    });
    const [blogs, setBlogs] = useState([{
        heading:'Heading1',
        content:'dfhgh dsghsf hsdgjskf kasghdsjk hsaghsgfk',
        tags:['jff','entertainment'],
        created:'xyz'
    },
    {
        heading:'Heading2',
        content:'dfhgh dsghsf hsdgjskf kasghdsjk hsaghsgfk',
        tags:['entertainment'],
        created:'xyz123'
    },
    {
        heading:'Heading2',
        content:'dfhgh dsghsf hsdgjskf kasghdsjk hsaghsgfk',
        tags:['entertainment'],
        created:'xyz123'
    },
    {
        heading:'Heading2',
        content:'dfhgh dsghsf hsdgjskf kasghdsjk hsaghsgfk',
        tags:['entertainment'],
        created:'xyz123'
    },
    {
        heading:'Heading2',
        content:'dfhgh dsghsf hsdgjskf kasghdsjk hsaghsgfk',
        tags:['entertainment'],
        created:'xyz123'
    }]);
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
        {(viewBlog==="")?<ShowBlogs blogs={blogs} setViewBlog={setViewBlog}/>:<Content viewBlog={viewBlog}/>}
    </div>
  )
}

export default Home