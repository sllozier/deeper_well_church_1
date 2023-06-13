const router = require("express").Router();
const { Account, Post } = require("../db");
const { isWriter, requireToken } = require("./gatekeeper");

router.get(":/id", requireToken, isWriter, async (req, res, next) => {
  try {
    const writer = await Account.findByPk(req.params.id, {
      where: {
        userType: "WRITER",
      },
    });
    res.send(writer);
  } catch (error) {
    next(error);
  }
});

router.put(":/id", requireToken, isWriter, async (req, res, next) => {
  try {
    const updatedWriter = await Account.findByPk(req.params.id, {
      where: {
        userType: "WRITER",
      },
    });
    res.send(await updatedWriter.update(req.body));
  } catch (error) {
    next(error);
  }
});

router.delete(":/id", requireToken, isWriter, async (req, res, next) => {
  try {
    const deletedWriter = await Account.findByPk(req.params.id, {
      where: {
        userType: "WRITER",
      },
    });
    await deletedWriter.destroy();
  } catch (error) {
    next(error);
  }
});

//Posts

router.get(":id/posts", async (req, res, next) => {
  try {
    const postList = await Account.findWriterPosts(req.params.id);
    res.send(postList);
  } catch (error) {
    next(error);
  }
});

router.get(":id/posts/:postId", async (req, res, next) => {
  try {
    const singlePost = await Post.findByPk(req.params.postId, {
      where: {
        writerId: req.params.id,
      },
    });
    res.send(singlePost);
  } catch (error) {
    next(error);
  }
});

router.post(":id/posts", async (req, res, next) => {
  try {
    const newPost = await Post.create(req.body);
    res.send(newPost);
  } catch (error) {
    next(error);
  }
});

router.put(":id/posts/:postId", async (req, res, next) => {
  try {
    const updatedPost = await Post.findByPk(req.params.postId);
    res.send(await updatedPost.update(req.body));
  } catch (error) {
    next(error);
  }
});

router.delete(":id/posts/:postId", async (req, res, next) => {
  try {
    const deletedPost = await Post.findByPk(req.params.postId);
    await deletedPost.destroy();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
