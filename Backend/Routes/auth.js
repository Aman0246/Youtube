import express from 'express'
const router =express.Router()
import {signup,signin} from '../Controller/auth.js'

//create a user 
router.post("/signup",signup)
//SIGN IN
router.post("/signin",signin)
// //GOOGLE AUTH
// router.post("/google",)

export default router  ;