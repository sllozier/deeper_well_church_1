const { Account } = require("../db");

const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await Account.byToken(token);
    req.user = user;
  } catch (error) {
    next(error);
  }
};

//OPTIONAL ADMIN FUNCTIONALITY

const isAdmin = async (req, res, next) => {
  try {
    if (req.user.userType !== "ADMIN") {
      console.log("NOT AN ADMIN!");
      res.status(403).send("not an admin");
    }
  } catch (error) {
    next(error);
  }
};

const isWriter = async (req, res, next) => {
  try {
    if (req.user.userType !== "WRITER" || req.user.userType !== "ADMIN") {
      console.log("NOT A WRITER!");
      res.status(403).send("not a writer");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  requireToken,
  isAdmin,
  isWriter,
};
