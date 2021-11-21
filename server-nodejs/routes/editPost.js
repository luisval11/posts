const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/post/:id/api/edit', postController.editPost);
router.put('/post/:id/api/post/:id', postController.editPostAction);

module.exports = router;