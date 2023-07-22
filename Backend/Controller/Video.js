import UserModel from "../Models/UserModel.js";
import VideoModel from "../Models/Videomodel.js";
import { createError } from "../error.js";

export const addVideo = async (req, res, next) => {
  const newVideo = new VideoModel({ userId: req.user.id, ...req.body });
  try {
    const savedVideo = await newVideo.save();
    res
      .status(200)
      .send({ status: true, message: "video Added", data: savedVideo });
  } catch (err) {
    next(err);
  }
};
//updatevideo
export const updateVideo = async (req, res, next) => {
  // video id ===req.params.id
  try {
    const video = await VideoModel.findById(req.params.id);
    if (!video) return next(createError(404, "Video not found!"));
    if (req.user.id === video.userId) {
      const updatedVideo = await VideoModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res
        .status(200)
        .send({ status: true, message: "video updated", data: updatedVideo });
    } else {
      return next(createError(403, "You can update only your video!"));
    }
  } catch (err) {
    next(err);
  }
};

export const deleteVideo = async (req, res, next) => {
  try {
    // video id ===req.params.id
    const video = await VideoModel.findById(req.params.id);
    if (!video) return next(createError(404, "Video not found!"));
    if (req.user.id === video.userId) {
      await VideoModel.findByIdAndDelete(req.params.id);
      res.status(200).send({ status: true, message: "video deleted" });
    } else {
      return next(createError(403, "You can delete only your video!"));
    }
  } catch (err) {
    next(err);
  }
};

export const getVideo = async (req, res, next) => {
  try {
    const video = await VideoModel.findById(req.params.id);
    if (!video) return next(createError(404, "Video not found"));
    res.status(200).send({ status: true, message: "video found", data: video });
  } catch (err) {
    next(err);
  }
};

export const addView = async (req, res, next) => {
  // req.params.id   ==== video id
  try {
    await VideoModel.findByIdAndUpdate(req.params.id, {
      $inc: { views: 1 },
    });
    res
      .status(200)
      .send({ status: true, message: "The view has been increased." });
  } catch (err) {
    next(err);
  }
};

export const random = async (req, res, next) => {
  try {
    const videos = await VideoModel.aggregate([{ $sample: { size: 40 } }]);
    res
      .status(200)
      .send({ status: true, message: "Random videos", data: videos });
  } catch (err) {
    next(err);
  }
};

export const trend = async (req, res, next) => {
  try {
    const videos = await VideoModel.find().sort({ views: -1 }); //-1 for get max ,, 1 for geting less
    res
      .status(200)
      .send({ status: true, message: "trend videos", data: videos });
  } catch (err) {
    next(err);
  }
};
export const sub = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.user.id);
    const subscribedChannels = user.subscribedUsers;

    const list = await Promise.all(
      subscribedChannels.map(async (channelId) => {
        return await VideoModel.find({ userId: channelId });
      })
    );

    res.status(200).send(list.flat().sort((a, b) => b.createdAt - a.createdAt));
  } catch (err) {
    next(err);
  }
};

export const getByTag = async (req, res, next) => {
  const tags = req.query.tags.split(",");
  try {
    const videos = await VideoModel.find({ tags: { $in: tags } }).limit(20);
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

export const search = async (req, res, next) => {
  const query = req.query.q;
  try {
    const videos = await VideoModel.find({
      title: { $regex: query, $options: "i" },
    }).limit(40);
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};
