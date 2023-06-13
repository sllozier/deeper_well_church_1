const router = require("express").Router();
const { Account, Order, Product, Post, Event } = require("../db");
const { isAdmin, requireToken } = require("./gatekeeper");

router.get("/", async (req, res, next) => {
  try {
    const adminList = await Account.findAll({
      where: {
        userType: "ADMIN",
      },
    });
    res.send(adminList);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", requireToken, isAdmin, async (req, res, next) => {
  try {
    const admin = await Account.findByPk(req.params.id);
    res.send(admin);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deletedAdmin = await Account.findByPk(req.params.id);
    await deletedAdmin.destroy();
    res.send(deletedAdmin);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const updatedAdmin = await Account.findByPk(req.params.id);
    res.send(await updatedAdmin.update(req.body));
  } catch (error) {
    next(error);
  }
});

//Admin-Post routes
router.get("/:id/posts", async (req, res, next) => {
  try {
    const postList = await Account.findAdminPosts(req.params.id);
    res.send(postList);
  } catch (error) {
    next(error);
  }
});

router.get("/:id/posts/:postId", async (req, res, next) => {
  try {
    const singlePost = await Post.findByPk(req.params.postId, {
      where: {
        adminId: req.params.id,
      },
    });
    res.send(singlePost);
  } catch (error) {
    next(error);
  }
});
router.post("/:id/posts", async (req, res, next) => {
  try {
    const newPost = await Post.create(req.body);

    res.send(newPost);
  } catch (error) {
    next(error);
  }
});
router.put("/:id/posts/:postId", async (req, res, next) => {
  try {
    const updatedPost = await Post.findByPk(req.params.postId);
    res.send(await updatedPost.update(req.body));
  } catch (error) {
    next(error);
  }
});

router.delete("/:id/posts/:postId", async (req, res, next) => {
  try {
    const deletedPost = await Post.findByPk(req.params.postId);
    await deletedPost.destroy();
  } catch (error) {
    next(error);
  }
});

//Admin-User routes
router.get("/:id/users", async (req, res, next) => {
  try {
    const userList = await Account.findAll({
      where: {
        userType: "USER",
      },
    });
    res.send(userList);
  } catch (error) {
    next(error);
  }
});

router.get("/:id/users/:userId", async (req, res, next) => {
  try {
    const singleUser = await Account.findByPk(req.params.userId, {
      where: {
        userType: "USER",
      },
      include: {
        model: Order,
      },
    });
    res.send(singleUser);
  } catch (error) {
    next(error);
  }
});

router.post("/:id/users", async (req, res, next) => {
  try {
    const newUser = await Account.create(req.body);
    res.send(newUser);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id/users/:userId", async (req, res, next) => {
  try {
    const deletedUser = await Account.findByPk(req.params.userId);
    await deletedUser.destroy();
  } catch (error) {
    next(error);
  }
});

router.put("/:id/users/:userId", async (req, res, next) => {
  try {
    const updatedUser = await Account.findByPk(req.params.userId);
    res.send(await updatedUser.update(req.body));
  } catch (error) {
    next(error);
  }
});

//Admin-Writer routes
router.get("/:id/writers", async (req, res, next) => {
  try {
    const writerList = await Account.findAll({
      where: {
        userType: "WRITER",
      },
    });
    res.send(writerList);
  } catch (error) {
    next(error);
  }
});

router.get("/:id/writers/:writerId", async (req, res, next) => {
  try {
    const singleWriter = await Account.findByPk(req.params.writerId, {
      where: {
        userType: "WRITER",
      },
      include: {
        model: Order,
      },
    });
    res.send(singleWriter);
  } catch (error) {
    next(error);
  }
});

router.post("/:id/writers", async (req, res, next) => {
  try {
    const newWriter = await Account.create(req.body);
    res.send(newWriter);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id/writers/:writerId", async (req, res, next) => {
  try {
    const deletedWriter = await Account.findByPk(req.params.writerId);
    await deletedWriter.destroy();
  } catch (error) {
    next(error);
  }
});

router.put("/:id/writers/:writerId", async (req, res, next) => {
  try {
    const updatedWriter = await Account.findByPk(req.params.writerId);
    res.send(await updatedWriter.update(req.body));
  } catch (error) {
    next(error);
  }
});

//Writer Posts

router.get("/:id/approvePosts/", async (req, res, next) => {
  try {
    const writerPosts = await Account.findWriterPosts(req.params.writerId);
    res.send(writerPosts);
  } catch (error) {
    next(error);
  }
});

router.get("/:id/approvePosts/:postId", async (req, res, next) => {
  try {
    const writerPost = await Post.findByPk(req.params.postId);
    res.send(writerPost);
  } catch (error) {
    next(error);
  }
});

//route to approve post for publishing
router.put("/:id/approvePosts/:postId", async (req, res, next) => {
  try {
    const updatedPost = await Post.findByPk(req.params.postId);
    res.send(await updatedPost.update(req.body));
  } catch (error) {
    next(error);
  }
});

router.delete("/:id/approvePosts/:postId", async (req, res, next) => {
  try {
    const deletedPost = await Post.findByPk(req.params.postId);
    await deletedPost.destroy();
  } catch (error) {
    next(error);
  }
});

//Admin-Product routes
router.get("/:id/products", async (req, res, next) => {
  try {
    const productList = await Product.findAll();
    res.send(productList);
  } catch (error) {
    next(error);
  }
});

router.get("/:id/products/:productId", async (req, res, next) => {
  try {
    const singleProduct = await Product.findByPk(req.params.productId);
    res.send(singleProduct);
  } catch (error) {
    next(error);
  }
});

router.post("/:id/products", async (req, res, next) => {
  try {
    const addProduct = await Product.create(req.body);
    res.send(addProduct);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id/products/:productId", async (req, res, next) => {
  try {
    const deletedProduct = await Product.findByPk(req.params.productId);
    await deletedProduct.destroy();
  } catch (error) {
    next(error);
  }
});

router.put("/:id/products/:productId", async (req, res, next) => {
  try {
    const updatedProduct = await Product.findByPk(req.params.productId);
    res.send(await updatedProduct.update(req.body));
  } catch (error) {
    next(error);
  }
});

//Admin-Order routes
router.get("/:id/orders", async (req, res, next) => {
  try {
    const orderList = await Order.findAll();
    res.send(orderList);
  } catch (error) {
    next(error);
  }
});

router.get("/:id/orders/:orderId", async (req, res, next) => {
  try {
    const singleOrder = await Order.findByPk(req.params.orderId);
    res.send(singleOrder);
  } catch (error) {
    next(error);
  }
});

router.post("/:id/orders", async (req, res, next) => {
  try {
    const addOrder = await Order.create(req.body);
    res.send(addOrder);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id/orders/:orderId", async (req, res, next) => {
  try {
    const deletedOrder = await Order.findByPk(req.params.orderId);
    await deletedOrder.destroy();
  } catch (error) {
    next(error);
  }
});

router.put("/:id/orders/:orderId", async (req, res, next) => {
  try {
    const updatedOrder = await Order.findByPk(req.params.orderId);
    res.send(await updatedOrder.update(req.body));
  } catch (error) {
    next(error);
  }
});

//Admin-event routes
router.get("/:id/events", async (req, res, next) => {
  try {
    const eventList = await Event.findAll();
    res.send(eventList);
  } catch (error) {
    next(error);
  }
});

router.get("/:id/events/:eventId", async (req, res, next) => {
  try {
    const singleEvent = await Event.findByPk(req.params.eventId);
    res.send(singleEvent);
  } catch (error) {
    next(error);
  }
});

router.post("/:id/events", async (req, res, next) => {
  try {
    const addEvent = await Event.create(req.body);
    res.send(addEvent);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id/events/:eventId", async (req, res, next) => {
  try {
    const deletedEvent = await Event.findByPk(req.params.eventId);
    await deletedEvent.destroy();
  } catch (error) {
    next(error);
  }
});

router.put("/:id/events/:eventId", async (req, res, next) => {
  try {
    const updatedEvent = await Event.findByPk(req.params.eventId);
    res.send(await updatedEvent.update(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
