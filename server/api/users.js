const router = require("express").Router();
const { Account, Comment } = require("../db");
const { requireToken } = require("./gatekeeper");

//Account routes

router.get("/:id", requireToken, async (req, res, next) => {
  try {
    const account = await Account.findByPk(req.params.id);
    res.send(account);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    req.body.userType = "USER";
    const account = await Account.create(req.body);
    res.send(account);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const account = await Account.findByPk(req.account.id);
    await account.update(req.body);
    res.send(account);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deleteAccount = await Account.findByPk(req.params.id);
    await deleteAccount.destroy();
    res.send(deleteAccount);
  } catch (error) {
    next(error);
  }
});

//comments
router.get(":/id/comments", async (req, res, next) => {
  try {
    const commentList = await Comment.findAll({
      where: {
        accountId: req.params.id,
      },
      include: {
        model: Account,
      },
    });
    res.send(commentList);
  } catch (error) {
    next(error);
  }
});

router.get(":/id/comments/:commentId", async (req, res, next) => {
  try {
    const singleComment = await Comment.findByPk(req.params.commentId, {
      where: {
        accountId: req.params.id,
      },
    });
    res.send(singleComment);
  } catch (error) {
    next(error);
  }
});

router.post(":/id/comments", async (req, res, next) => {
  try {
    const newComment = await Comment.create(req.body);
    res.send(newComment);
  } catch (error) {
    next(error);
  }
});

router.put(":/id/comments/:commentId", async (req, res, next) => {
  try {
    const updatedComment = await Comment.findByPk(req.params.commentId);
    res.send(updatedComment.update(req.body));
  } catch (error) {
    next(error);
  }
});

router.delete(":/id/comments/:commentId", async (req, res, next) => {
  try {
    const deletedComment = await Comment.findByPk(req.params.commentId);
    await deletedComment.destory();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
