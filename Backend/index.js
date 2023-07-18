import express from "express"
import dotenv from'dotenv'
import mongoose from "mongoose"
import userRoutes from "./Routes/User.js"
import commentRoutes from "./Routes/Comment.js"
import videoRoutes from "./Routes/Video.js"
dotenv.config()
const app=express()
mongoose.connect(process.env.MONGOCONNECT).then(()=>{console.log("mongoose connected")}).catch(()=>{console.log("mongo is not connectd")})

app.use("/api/users",userRoutes)
app.use("/api/videos",videoRoutes)
app.use("/api/comments",commentRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`running at ${process.env.PORT}`)
})
