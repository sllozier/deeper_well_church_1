const db = require("../database");
const Sequelize = require("sequelize");
const phoneValidation = /\d{3}-\d{3}-d{4}/;

const Event = db.define("event", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  eventImg: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true,
    },
  },
  pinUrl: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true,
    },
  },
  pocName: {
    type: Sequelize.STRING,
  },
  pocEmail: {
    type: Sequelize.STRING,
    // allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },
  pocPhone: {
    type: Sequelize.STRING,
    // allowNull: false,
    validator: {
      validator: function (v) {
        return phoneValidation.test(v);
      },
    },
  },
  eventDate: {
    type: Sequelize.DATEONLY,
    defaultValue: Sequelize.NOW,
  },
  isPosted: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Event;
