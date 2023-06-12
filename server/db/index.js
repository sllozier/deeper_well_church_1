// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require("./database");
const Post = require("./models/Post");
const Account = require("./models/Account");
const Tag = require("./models/Tag");
const Comment = require("./models/Comment");
const Event = require("./models/Event");
const Product = require("./models/Product");
const Order = require("./models/Order");
const LineItem = require("./models/LineItem");
//Import models here
//associations
//ACCOUNT
Account.hasMany(Post);
Post.belongsTo(Account, { as: "writerPost", foreignKey: "writerId" });
Post.belongsTo(Account, { as: "adminPost", foreignKey: "adminId" });

Account.hasMany(Comment);
Comment.belongsTo(Account);

Account.hasMany(Order);
Order.belongsTo(Account);

//POST
Post.hasMany(Tag, { through: posttag });
Tag.belongsTo(Post, { through: posttag });

//ORDERS
Product.belongsToMany(Order, { through: LineItem });
Order.belongsToMany(Product, { through: LineItem });

module.exports = {
  db,
  Post,
  Account,
  Tag,
  Comment,
  Event,
  Product,
  Order,
  LineItem,
};
