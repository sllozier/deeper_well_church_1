const db = require("../database");
const Sequelize = require("sequelize");

const Comment = db.define("comment", {
  text: {
    type: Sequelize.TEXT,
  },
});

module.exports = Comment;
