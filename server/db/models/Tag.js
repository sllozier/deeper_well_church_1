const db = require("../database");
const Sequelize = require("sequelize");

const Tag = db.define("tag", {
  name: {
    type: Sequelize.STRING,
  },
});

module.exports = Tag;
