const sequelize = require('../config/db');
const Sequelize = require('sequelize');
const { DataTypes } = Sequelize;

const models = {};

models.User = require('./user')(sequelize, DataTypes);

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;