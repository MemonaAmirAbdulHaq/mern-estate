import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
mongoose.connect(process.env.MONGO)   //add .env to gitignore 
.then(()=>{
    console.log('connect to moongo db');
})
.catch((err)=>{
    console.log(err); 
}) 
const app =express();
app.listen(3000, () =>{
    console.log('server is running port 3000');
});
