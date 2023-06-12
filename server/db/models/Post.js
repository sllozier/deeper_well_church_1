const db = require("../database");
const Sequelize = require("sequelize");

const Post = db.define("post", {
  title: {
    type: Sequelize.STRING,
    defaultValue: "Untitled",
  },
  postImg: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true,
    },
  },
  isPublished: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  isFeatured: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  content: {
    type: Sequelize.TEXT,
  },
  publishedDate: {
    type: Sequelize.DATE,
  },
  totalCharacters: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Post;
