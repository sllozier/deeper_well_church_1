const router = require("express").Router();
const { Post } = require("../db");
const { isWriter, requireToken } = require("./gatekeeper");

router.get("/", async (req, res, next) => {
  try {
    const postList = await Post.findAll();
    res.send(postList);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const singlePost = await Post.findByPk(req.params.id);
    res.send(singlePost);
  } catch (error) {
    next(error);
  }
});

router.post("/", requireToken, isWriter, async (req, res, next) => {
  try {
    const newPost = await Post.create(req.body);
    res.send(newPost);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", requireToken, isWriter, async (req, res, next) => {
  try {
    const updatedPost = await Post.findByPk(req.params.id);
    res.send(await updatedPost.update(req.body));
  } catch (error) {
    next(error);
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
    const deletedPost = await Post.findByPk(req.params.id);
    await deletedPost.destroy();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
