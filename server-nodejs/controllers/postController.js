const Utils = require('../utils/const')
const got = require('got');
const { pipeline } = require('stream');
const axios = require('axios');

const postController = {};

postController.home = async (req, res) => {
    const postsUrl = Utils.buildUrl(Utils.BASE_URL, Utils.POST, {})
    const authorsUrl = Utils.buildUrl(Utils.BASE_URL, Utils.USER, {})
    const requestPosts = await axios.get(postsUrl);
    const requestAuthors = await axios.get(authorsUrl);

    res.json({
        posts: requestPosts.data,
        authors: requestAuthors.data
    });
}

postController.editPost = async (req, res) => {
    const postsUrl = Utils.buildUrl(Utils.BASE_URL, Utils.POST, {id: req.params.id})
    const authorsUrl = Utils.buildUrl(Utils.BASE_URL, Utils.USER, {})
    const requestPosts = await axios.get(postsUrl);
    const requestAuthors = await axios.get(authorsUrl);

    res.json({
        post: requestPosts.data,
        authors: requestAuthors.data
    });
}

postController.editPostAction = async (req, res) => {
    const postsUrl = Utils.buildUrl(Utils.BASE_URL, Utils.POST + `/${req.params.id}`, {})
    const requestPosts = await axios.put(postsUrl, {
        id: req.body.id,
        title: req.body.title,
        body: req.body.body,
        userId: req.body.userId
    });

    res.json({
        post: requestPosts.data
    });
}

postController.viewPost = async (req, res) => {
    const postsUrl = Utils.buildUrl(Utils.BASE_URL, Utils.POST, {id: req.params.id})
    const requestPosts = await axios.get(postsUrl);
    const userId = requestPosts.data[0].userId;
    const authorsUrl = Utils.buildUrl(Utils.BASE_URL, Utils.USER, {id: userId})
    const commentsUrl = Utils.buildUrl(Utils.BASE_URL, Utils.COMMENT, {postId: req.params.id})
    const requestAuthors = await axios.get(authorsUrl);
    const requestComment = await axios.get(commentsUrl);

    res.json({
        post: requestPosts.data,
        author: requestAuthors.data,
        comments: requestComment.data
    });
}

postController.createPost = async (req, res) => {
    const authorsUrl = Utils.buildUrl(Utils.BASE_URL, Utils.USER, {})
    const requestAuthors = await axios.get(authorsUrl);
    
    res.json({
        authors: requestAuthors.data
    });
}


postController.createPostAction = async (req, res) => {
    const postsUrl = Utils.buildUrl(Utils.BASE_URL, Utils.POST, {})
    const requestPosts = await axios.post(postsUrl, {
        title: req.body.title,
        body: req.body.body,
        userId: req.body.userId
    });

    res.json({
        post: requestPosts.data
    });
}

module.exports = postController;