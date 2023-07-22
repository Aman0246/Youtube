import jwt from "jsonwebtoken"
import { createError } from "./error.js"

export const verifyToken=async(req,res,next)=>{
    const token=req.cookies.access_token
    if(!token) return next(createError(400,"You are not authenticated!!"))
    jwt.verify(token,process.env.JWT,(err,user)=>{
        if(err)return next(createError(403,'You are not authorised'))
        req.user=user
        next()
    })
}