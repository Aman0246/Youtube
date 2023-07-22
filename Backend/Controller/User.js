import { createError } from "../error.js"
import UserModel from "../Models/UserModel.js"
//update User
 export const updateUser=async(req,res,next)=>{
  if(req.params.id!=req.user.id)return next(createError(404,"you can update your account only "))
  try {
    const update =await UserModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    res.status(200).send({status:true,message:"UpdatedUser",data:update})
    
  } catch (err) {
    next(err)
  }
  
}
//Delete User
export const deleteUser=async(req,res,next)=>{
  if(req.params.id!=req.user.id)return next(createError(404,"you can Delete your account only "))
  try {
    const update =await UserModel.findByIdAndDelete(req.params.id)
    res.status(200).send({status:true,message:"UpdatedUser",data:update})
    
  } catch (err) {
    next(err)
  }
  
}
//Get User
export const getUser=async(req,res,next)=>{
  try {
    const user=await UserModel.findById(req.params.id)
    if(!user)return next(createError(404,"User Not Found"))
    res.status(200).send({status:true,message:"user Found",data:user})
  } catch (err) {
    next(err)
  }
}
//suscribe  
export const subscribe=async(req,res,next)=>{
  try {
    await UserModel.findByIdAndUpdate(req.user.id,{$push:{subscribedUsers:req.params.id}})
    await UserModel.findByIdAndUpdate(req.params.id,{$inc:{subscribers:1}})
    res.send(200).send({status:true,message:"subscription Successfull"})

  } catch (err) {
    next(err)
  }
}
//Unsubscribe
export const unsubscribe=async(req,res,next)=>{
  try {
    await UserModel.findByIdAndUpdate(req.user.id,{$pull:{subscribedUsers:req.params.id}})
    await UserModel.findByIdAndUpdate(req.params.id,{$inc:{subscribers:-1}})
    res.send(200).send({status:true,message:"unsubscribe Successfull"})
    
  } catch (err) {
    next(err)
  }
}
//Like User
export const like=async(req,res,next)=>{
  try {
    
  } catch (err) {
    next(err)
  }
}
//Dislike User
export const dislike=async(req,res,next)=>{
  try {
    
  } catch (err) {
    next(err)
  }
}


