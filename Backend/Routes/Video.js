import express from 'express'
const router =express.Router()
import {addVideo, addView, getByTag, deleteVideo,getVideo, random,updateVideo, search, sub, trend } from '../Controller/Video.js'
import { verifyToken } from '../VerifyToken.js'


router.post("/", verifyToken, addVideo)
router.put("/:id", verifyToken, updateVideo)
router.delete("/:id", verifyToken, deleteVideo)
router.get("/find/:id", getVideo)
router.put("/view/:id", addView)
router.get("/trend", trend)
router.get("/random", random)
router.get("/sub",verifyToken, sub)
router.get("/tags", getByTag)
router.get("/search", search)




export default router  ;