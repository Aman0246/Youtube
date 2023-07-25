import express from 'express'
const router =express.Router()
import {signup,signin, logout, googleAuth} from '../Controller/auth.js'

//create a user 
router.post("/signup",signup)
//SIGN IN
router.post("/signin",signin)
router.get("/logout",logout)
// //GOOGLE AUTH
router.post("/google",googleAuth)
// router.post("/google",)

export default router  ;