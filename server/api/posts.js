const router = require("express").Router();
const { Post, Comment, Tag } = require("../db");
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

//Post Comments
router.get("/:id/comments", async (req, res, next) => {
  try {
    const commentList = await Comment.findAll({
      where: {
        postId: req.params.id,
      },
      include: {
        model: Post,
      },
    });
    res.send(commentList);
  } catch (error) {
    next(error);
  }
});

router.get("/:id/comments/:commentId", async (req, res, next) => {
  try {
    const singleComment = await Comment.findByPk(req.params.commentId, {
      where: {
        postId: req.params.id,
      },
    });
    res.send(singleComment);
  } catch (error) {
    next(error);
  }
});

//Post Tags
router.get("/:id/tags", async (req, res, next) => {
  try {
    const tagList = await Tag.findAll({
      where: {
        postId: req.params.id,
      },
    });
    res.send(tagList);
  } catch (error) {
    next(error);
  }
});

router.get("/:id/tags/:tagId", async (req, res, next) => {
  try {
    const singleTag = await Tag.findByPk(req.params.tagId, {
      where: {
        postId: req.params.id,
      },
    });
    res.send(singleTag);
  } catch (error) {
    next(error);
  }
});

router.post("/:id/tags", async (req, res, next) => {
  try {
    const newTag = await Tag.create({
      where: {
        postId: req.params.id,
      },
    });
    res.send(newTag);
  } catch (error) {
    next(error);
  }
});

router.delete(":/id/tags/:tagId", async (req, res, next) => {
  try {
    const deletedTag = await Tag.findByPk(req.params.tagId);
    await deletedTag.destroy();
  } catch (error) {
    next(error);
  }
});
module.exports = router;
