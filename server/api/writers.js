const router = require("express").Router();
const { Account } = require("../db");
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

module.exports = router;
