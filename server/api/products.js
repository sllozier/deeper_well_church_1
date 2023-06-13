const router = require("express").Router();
const { Product } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const productList = await Product.findAll();
    res.send(productList);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const singleProduct = await Product.findByPk(req.params.id);
    res.send(singleProduct);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
