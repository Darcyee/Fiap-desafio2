const express = require('express');
const router = express.Router();

const {
  createPost,
  getPosts,
} = require('../controllers/postController');

router.post('/posts', createPost);
router.get('/posts', getPosts);

module.exports = router;

