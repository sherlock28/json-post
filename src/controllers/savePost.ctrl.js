const { v4: uuidv4 } = require('uuid');

const savePost = (req, res) => {
    const post = req.body;
    
    post.userId = 1;
    post.id = uuidv4();

    res.json(post);
}

module.exports = savePost;