const router = require("express").Router();
const { Account, Post, Tag } = require("../db");
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

//Tags
router.get("/:id/posts/:postId/tags", async (req, res, next) => {
  try {
    const tagList = await Tag.findAll({
      where: {
        postId: req.params.postId,
      },
    });
    res.send(tagList);
  } catch (error) {
    next(error);
  }
});

router.post("/:id/posts/:postId/tags", async (req, res, next) => {
  try {
    const newTag = await Tag.create({
      where: {
        postId: req.params.postId,
      },
    });
    res.send(newTag);
  } catch (error) {
    next(error);
  }
});

router.put("/:id/posts/:postId/tags/:tagId", async (req, res, next) => {
  try {
    const updatedTag = await Tag.findByPk(req.params.tagId, {
      where: {
        postId: req.params.postId,
      },
    });
    res.send(await updatedTag.update(req.body));
  } catch (error) {
    next(error);
  }
});

router.delete(":/id/posts/:postId/tags/:tagId", async (req, res, next) => {
  try {
    const deletedTag = await Tag.findByPk(req.params.tagId);
    await deletedTag.destroy();
  } catch (error) {
    next(error);
  }
});

//Tags

// router.get("/:id/tags/:tagId", async (req, res, next) => {
//   try {
//     const singleTag = await Tag.findByPk(req.params.tagId, {
//       where: {
//         postId: req.params.id,
//       },
//     });
//     res.send(singleTag);
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
