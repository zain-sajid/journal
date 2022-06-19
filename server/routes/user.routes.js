const express = require('express');
const router = express.Router();

const Post = require('../models/post.model');

// Get request
router.get('/get-posts', async (req, res) => {
  // this (sync) ??? important for some reason
  try {
    const posts = await Post.findAll();
    res.json({ body: posts });
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
    id: req.body.id,
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

module.exports = router;
