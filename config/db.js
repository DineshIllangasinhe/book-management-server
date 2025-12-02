const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const dbConfig = {
  database: process.env.DB_DATABASE?.trim(),
  username: process.env.DB_USERNAME?.trim(),
  password: process.env.DB_PASSWORD?.trim(),
  host: process.env.DB_HOST?.trim() || '127.0.0.1',
  dialect: process.env.DB_DIALECT?.trim() || 'mysql'
};

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    logging: false
  }
);

module.exports = sequelize;
