const updatePost = (req, res) => {
    const post = req.body;
    const { id } = req.params;

    post.id = id;
    post.userId = 1;
    
    res.json(post);
}

module.exports = updatePost;