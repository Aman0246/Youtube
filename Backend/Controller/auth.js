import UserModel from "../Models/UserModel.js"
import { hassPassword,compare } from "../Bcrypt/bcrypt.js"
import { createError } from "../error.js";

//create user
export const signup=async(req,res,next)=>{   
try {
    let {password}=req.body
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
    res.send({status:true,message:"Login Successfull",data:foundUser})

} catch (err) {
    next(err)
}
}
