const posts = require("../data/posts");

const getAllPost = (req, res) => {
  if (req.params.id > 100 || req.params.id < 0) {
    res.json({});
  } else {
    res.json(posts[req.params.id - 1]);
  }
};

module.exports = getAllPost;
