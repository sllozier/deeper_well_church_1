const router = require("express").Router();
const { Account } = require("../db");
const { requireToken } = require("./gatekeeper");

//Account routes
router.get("/", requireToken, async (req, res, next) => {
  try {
    const accounts = await Account.findAll();
    res.send(accounts);
  } catch (error) {
    next(error);
  }
});

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

router.put("/:id", requireToken, async (req, res, next) => {
  try {
    const account = await Account.findByPk(req.account.id);
    await account.update(req.body);
    res.send(account);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", requireToken, async (req, res, next) => {
  try {
    const deleteAccount = await Account.findByPk(req.params.id);
    await deleteAccount.destroy();
    res.send(deleteAccount);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
