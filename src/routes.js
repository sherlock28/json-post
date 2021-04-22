const router = require("express").Router();

const {
  getAllPost,
  getPost,
  savePost,
  updatePost,
  deletePost,
} = require("./controllers");

router.get("/", getAllPost);
router.get("/:id", getPost);
router.post("/", savePost);
router.put("/:id", updatePost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
