const sequelize = require('../config/db')
const UserModel = require('./user');
const BookModel = require('./book');
const Sequelize = require('sequelize');

const models = {};

models.User = UserModel(sequelize, Sequelize.DataTypes);
models.Book = BookModel(sequelize, Sequelize.DataTypes);

models.User.hasMany(models.Book, {
  foreignKey: 'created_by',
  as: 'books'
});

models.Book.belongsTo(models.User, {
  foreignKey: 'created_by',
  as: 'creator'
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;