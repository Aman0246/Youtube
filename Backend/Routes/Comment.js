import express from 'express'
const router =express.Router()
import { addComment ,deleteComment,getComment} from '../Controller/Comment.js'
import { verifyToken } from '../VerifyToken.js';


router.post("/",verifyToken,addComment)
router.delete("/:id",verifyToken,deleteComment)
router.get("/:videoId",verifyToken,getComment)

export default router  ;