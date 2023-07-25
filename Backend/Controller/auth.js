import UserModel from "../Models/UserModel.js"
import { hassPassword,compare } from "../Bcrypt/bcrypt.js"
import { createError } from "../error.js";
import jwt from "jsonwebtoken"
import dotenv from'dotenv'
import { response } from "express";
dotenv.config()
//create user
export const signup=async(req,res,next)=>{   
try {
    let {email,name,password}=req.body
    let oldname=await UserModel.findOne({name})
    let oldemail=await UserModel.findOne({email})
    if(oldemail||oldname) return next(createError(200,"user already exist"))
    let hassedPassword=await hassPassword(password)
    if(!hassedPassword)return res.send({status:false,message:"unable to hassPassword"})
    let user= await UserModel.create({...req.body,password:hassedPassword})
    res.send({status:true,message:"Registration Done",data:user})

} catch (err) {
    next(err)
}
}
//login user
export const signin=async(req,res,next)=>{   
try {
    let {email,password}=req.body
    let foundUser=await UserModel.findOne({email}) 
    if(!foundUser)return next(createError(404,"Email not Register"))
    let match=await compare(password,foundUser.password)
    if(!match)return  next(createError(404,"Worng Password"))
    //generate token and send it back with response
    var token =jwt.sign({id:foundUser._id},process.env.JWT)
    res.cookie("access_token",token,{httpOnly:true}).send({status:true,message:"Login Successfull",data:foundUser,token:token})

} catch (err) {
    next(err)
}
}
export const logout=async(req,res,next)=>{   
try {
   
    res.clearCookie("access_token")

   return res.status(200).send({status:true,message:"logOut Succesfully"})

} catch (err) {
    next(err)
}
}


export const googleAuth=async(req,res,next)=>{
    try {
       const user=await UserModel.findOne({email:req.body.email})
       if(user){
        var token =jwt.sign({id:user._id},process.env.JWT)
        res.cookie("access_token",token,{httpOnly:true}).send({status:true,message:"Login Successfull",data:user,token:token})
       }
    
       else{
        const newUser= new UserModel({
            ...req.body,
            fromGoogle:true
        })
        const saveduser=await newUser.save();
        const user=await UserModel.findOne({email:req.body.email})
        var token =jwt.sign({id:user._id},process.env.JWT)
        res.cookie("access_token",token,{httpOnly:true}).send({status:true,message:"Login Successfull",data:user,token:token})

       }
       
    } catch (err) {
        next(err)
    }
}
