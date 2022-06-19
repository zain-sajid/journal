const express = require('express');
const router = express.Router();

const { Post, Comment } = require('../models/post.model');

// Get request
router.get('/get-posts', async (req, res) => {
  // this (sync) ??? important for some reason
  try {
    const posts = await Post.findAll({
      order: [['createdAt', 'DESC']],
    });
    res.json({ body: posts });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/get-post/:id', async (req, res) => {
  // this (sync) ??? important for some reason
  try {
    const post = await Post.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json({ body: post });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// API for updating likes
router.patch('/like-post/:id', async (req, res) => {
  // this (sync) ??? important for some reason
  try {
    const post = await Post.findOne({
      where: {
        id: req.params.id,
      },
    });
    const likedPost = await post.increment('likes');

    res.json({ body: likedPost });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Post request
router.post('/create-post', async (req, res) => {
  await Post.sync({
    force: false,
  });
  const post = new Post({
    user: req.body.user,
    description: req.body.description,
    likes: 0,
  });
  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post('/create-comment', async (req, res) => {
  await Comment.sync({
    force: false,
  });
  const comment = new Comment({
    user: req.body.user,
    text: req.body.text,
    postId: req.body.postId,
  });
  try {
    const newComment = await comment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/get-comments/:id', async (req, res) => {
  // this (sync) ??? important for some reason
  try {
    const comments = await Comment.findAll({
      where: {
        postId: req.params.id,
      },
      order: [['createdAt', 'DESC']],
    });
    res.json({ body: comments });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
