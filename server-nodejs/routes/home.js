const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/home', postController.home)

module.exports = router;