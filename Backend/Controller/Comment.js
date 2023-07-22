import CommentModel from "../Models/CommentModel.js"
import { createError } from "../error.js"
import VideoModel from "../Models/Videomodel.js";
export const addComment=async(req,res,next)=>{
    try {
        const {userId,videoId,desc}=req.body
        let newComment=await CommentModel.create({userId,videoId,desc})
         if(!newComment) return next(createError(400,"Comment Cannot be added"))
        res.status(200).send({status:true,message:"Comment Added",data:newComment})  
    } catch (err) {
        next(err)
    }
}

export const deleteComment = async (req, res, next) => {
    try {
      const comment = await CommentModel.findById(res.params.id);
      const video = await VideoModel.findById(res.params.id);
      if (req.user.id === comment.userId || req.user.id === video.userId) {
        await CommentModel.findByIdAndDelete(req.params.id);
        res.status(200).json("The comment has been deleted.");
      } else {
        return next(createError(403, "You can delete ony your comment!"));
      }
    } catch (err) {
      next(err);
    }
  };

export const getComment=async(req,res,next)=>{
    try {
        const comments = await CommentModel.find({ videoId: req.params.videoId });
        res.status(200).json(comments);
        
    } catch (err) {
        next(err)
    }
}