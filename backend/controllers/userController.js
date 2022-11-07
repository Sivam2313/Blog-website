const asyncHandler = require('express-async-handler');
const User = require('../model/userSchema');


const authUser = asyncHandler(async(req,res)=>{
    console.log(req.body);
    const{email,password} = req.body;
    if(!email || !password){
        console.log(email,password);
        res.sendStatus(404);
    }
    const user = await User.findOne({email:email})
    if(user){
        res.status(201).json(user);
    }
    const google = false;
    const newUser = await User.create({
        email,
        password,
        google,
    })
    if(newUser){
        res.status(201).json(newUser)
    }
    else{
        throw new Error ('error')
    }

})
const authByGoogle = asyncHandler(async(req,res)=>{
    const {email} = req.body;
    console.log(req.body);
    const google = true;
    const user = await User.findOne({email:email});
    if(user){
        res.status(201).json(user);
    }
    const newUser = await User.create({
        email,
        google,
    })
    if(newUser){
        res.status(201).json(newUser)
    }
})

module.exports = {authUser,authByGoogle}