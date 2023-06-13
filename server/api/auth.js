const router = require("express").Router();
const { Account } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const account = await Account.byToken(req.headers.authorization);
    res.send(account);
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const token = await Account.authenticate(req.body);
    res.send(token);
  } catch (error) {
    next(error);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const newAccount = await Account.create(req.body);
    res.send({ token: await newAccount.generateToken(), id: newAccount.id });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
