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
    }],
    img:{
        type:String,
        default: 'https://res.cloudinary.com/dazdnege9/image/upload/v1667969202/gapk1hmukwjqouehr5pf.png',
    }
},{
    timestamp:true,
})

const Blogs = mongoose.model('Blog',blogSchema);
module.exports = Blogs;