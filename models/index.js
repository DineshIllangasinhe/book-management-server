const sequelize = require('../config/db');
const Sequelize = require('sequelize');

const models = {};


models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
