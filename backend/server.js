const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('../backend/config/db');


dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000
connectDB();


// app.use('/blogs',blogRoutes)
app.get('/',(req,res)=>{
    res.send('ok');
})



app.listen(PORT,console.log("server at "+PORT));