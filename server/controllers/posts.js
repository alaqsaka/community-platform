import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.messsage });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post found");

  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    }
  );

  res.json(updatedPost);
};

// deleting post
export const deletePost = async (req, res) => {
  // getting id from params
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");

  await PostMessage.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully!" });
};

// liking a post (likeCount)
export const likePost = async (req, res) => {
  // getting id from params
  const { id } = req.params;

  // check if the user is logged in (authenticated)
  if (!req.userId) return res.json({ message: "Unauthenticated" });

  // check if the post id is available in the database
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("Post unavailable");

  // finding a post by id from the database
  const post = await PostMessage.findById(id);

  // check if the user is already liked the post
  const index = post.likes.findIndex((id) => id === String(req.userId));

  if (index === -1) {
    // user like the post
    post.likes.push(req.userId);
  } else {
    // user dislike a post
    post.likes = post.likes.filter((id) => id !== String(req.userId));
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {
    new: true,
  });

  res.json(updatedPost);
};
