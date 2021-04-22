const posts = require('../data/posts');

const getAllPost = (req, res) => {
    res.json(posts)
}

module.exports = getAllPost;