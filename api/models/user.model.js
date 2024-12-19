import mongoose from 'mongoose';
const userSchema =new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
       
    },
    avator:{
        type:String,
        //default:"img.jpg"
        default:"https://i.pinimg.com/736x/5c/7c/80/5c7c8044238a6384d8fd05f94c00bf67.jpg",

    },

},{timestamps:true});
const User =mongoose.model('User',userSchema);
export default User;