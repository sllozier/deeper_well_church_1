const router = require("express").Router();
const { Event } = require("../db");
const { isAdmin, requireToken } = require("./gateKeeper");

router.get("/", async (req, res, next) => {
  try {
    const eventList = await Event.findAll();
    res.send(eventList);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const singleEvent = await Event.findByPk(req.params.id);
    res.send(singleEvent);
  } catch (error) {
    next(error);
  }
});

router.post("/:id/edit", requireToken, isAdmin, async (req, res, next) => {
  try {
    const newEvent = await Event.create(req.body);
    res.send(newEvent);
  } catch (error) {
    next(error);
  }
});

router.put("/:id/edit", requireToken, isAdmin, async (req, res, next) => {
  try {
    const updatedEvent = await Event.findByPk(req.params.id);
    res.send(await updatedEvent.update(req.body));
  } catch (error) {
    next(error);
  }
});

router.delete("/:id/edit", requireToken, isAdmin, async (req, res, next) => {
  try {
    const deletedEvent = await Event.findByPk(req.params.id);
    await deletedEvent.destroy();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
