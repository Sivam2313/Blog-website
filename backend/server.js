const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('../backend/config/db');
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000
connectDB();

app.use(express.json())
app.use('/blogs',blogRoutes)
app.use('/user',userRoutes)
app.get('/',(req,res)=>{
    res.send('ok');
})



app.listen(PORT,console.log("server at "+PORT));