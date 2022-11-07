const mongoose = require('mongoose');



const blogSchema = mongoose.Schema({
    heading:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    caption:{
        type:String,
    },
    created:{
        type:String,
        required:true,
    },
    tags:[{
        tagName:{
            type:String
        }
    }]
},{
    timestamp:true,
})

const Blogs = mongoose.model('Blog',blogSchema);
module.exports = Blogs;