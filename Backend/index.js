
import express from "express"
import dotenv from'dotenv'
import mongoose from "mongoose"
import userRoutes from "./Routes/User.js"
import commentRoutes from "./Routes/Comment.js"
import authRoutes from "./Routes/auth.js"
import videoRoutes from "./Routes/Video.js"
import cookieParser from 'cookie-parser'
dotenv.config()
const app=express()
app.use(cookieParser())
mongoose.connect(process.env.MONGOCONNECT).then(()=>{console.log("mongoose connected")}).catch(()=>{console.log("mongo is not connectd")})
app.use(express.json())
app.use("/api/users",userRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/videos",videoRoutes)
app.use("/api/comments",commentRoutes)

app.use((err,req,res,next)=>{
    const status=err.status||500;
    const message=err.message||"Something Went Wrong !";
    return res.send({
        status:false,  
        statusCode:status,
        message:message
    })
})

app.listen(process.env.PORT,()=>{
    console.log(`running at ${process.env.PORT}`)
})
