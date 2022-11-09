const asyncHandler = require('express-async-handler');
const Comment = require('../model/commentSchema');

const addComment = asyncHandler(async(req,res)=>{
    const {blogId,message,sendBy} = req.body;
    if(!blogId || !message){
        res.status(404)
    }

    const comment = await Comment.create({
        blog:blogId,
        message,
        sendBy,
    })
    const allComments = await Comment.find({blog:blogId});
    if(allComments){
        res.status(201).json(allComments.reverse());
    }
    else{
        res.status(500)
    }
})

const fetchComment = asyncHandler(async(req,res)=>{
    const {blogId} = req.body;
    if(!blogId){
        res.status(404);
    }
    const comments = await Comment.find({blog:blogId});
    if(comments){
        res.status(201).json(comments.reverse())
    }
    else{
        const arr = [];
        res.status(201).json(arr)
    }
})


module.exports = {addComment,fetchComment}