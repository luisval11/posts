const Utils = require('../utils/const')
const got = require('got');
const { pipeline } = require('stream');

const userController = {};

userController.findUsers = async (req, res) => {
    let dataStream;
    if(req.query.id !== null && req.query.id !== undefined) {
        dataStream = await got.stream({
            url: Utils.buildUrl(Utils.BASE_URL, Utils.USER, {id: id}),
        });
    } else {
        dataStream = await got.stream({
            url: Utils.buildUrl(Utils.BASE_URL, Utils.USER, {}),
        });
    }
    await pipeline(dataStream, res, (err) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
    });
}

module.exports = userController;