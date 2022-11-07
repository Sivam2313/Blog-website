const mongoose = require('mongoose');



const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
    },
    google:{
        type:Boolean,
        required:true,
    }
},{
    timestamp:true,
})

const User = mongoose.model('User',userSchema);
module.exports = User;