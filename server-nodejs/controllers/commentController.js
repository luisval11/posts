const Utils = require('../utils/const')
const got = require('got');
const { pipeline } = require('stream');

const commentController = {};

commentController.findByPostId = async (req, res) => {
    let postId = req.query.postId;
    const dataStream = await got.stream({
        url: Utils.buildUrl(Utils.BASE_URL, Utils.COMMENT, {postId: postId}),
    });
    await pipeline(dataStream, res, (err) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
    });
}

module.exports = commentController;