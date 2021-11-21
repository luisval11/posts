const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/post/create', postController.createPost);
router.get('/post/:id', postController.viewPost);
router.post('/post', postController.createPostAction);

module.exports = router;