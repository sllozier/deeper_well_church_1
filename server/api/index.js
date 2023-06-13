const router = require("express").Router();

router.use("/users", require("./users"));
router.use("/admins", require("./admins"));
router.use("/writers", require("./writers"));
router.use("/products", require("./products"));
router.use("/events", require("./events"));
//router.use("/orders", require("./orders"));
router.use("/lineitems", require("./lineitems"));
router.use("/carts", require("./carts"));
router.use("/posts", require("./posts"));
router.use("/auth", require("./auth"));

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
