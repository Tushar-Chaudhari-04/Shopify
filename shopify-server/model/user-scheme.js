import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
 firstName:{
    type:String,
    min:3,
    max:15,
    trim:true,
 },
 lastName:{
    type:String,
    min:3,
    max:15,
    trim:true,
 },
 mobileNo:{
    type:Number,
    trim:true,
    unique:true,
    required:true
 },
 pincode:{
    type:Number,
    trim:true,
 },
 email:{
    type:String,
    trim:true,
    unique:true,
    lowercase:true,
    required:true
 },
 password:{
    type:String,
    min:8,
    max:15,
    required:true
 },
 confirmPassword:{
    type:String,
    min:8,
    max:15,
    required:true
 }
 
});

const User=mongoose.model("user",userSchema);

export default User;