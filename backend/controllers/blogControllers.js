const asyncHandler = require('express-async-handler');
const Blog = require('../model/blogSchema');


const fetchBlog = asyncHandler(async(req,res)=>{
    const{userId} = req.body;
    var blogs
    if(!userId){
        blogs = await Blog.find();
    }
    else{
        blogs = await Blog.find({created:userId});
    }
    if(blogs){
        res.status(201).json(blogs.reverse());
    }
    else{
        throw new Error ('error')
    }
})
const createBlog = asyncHandler(async(req,res)=>{
    const {heading,content,caption,created} = req.body;
    const tags = [{
        tagName:'Tag1'
    }]
    const blog = await Blog.create({
        heading,
        content,
        caption,
        created,
        tags,
    })
    if(blog){
        res.status(201).json(blog);
    }
    else{
        throw new Error ('error');
    }
})

module.exports = {fetchBlog,createBlog}