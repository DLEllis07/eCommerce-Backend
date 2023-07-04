require('dotenv').config();

const sequelize = require('sequelize');
const { Sequelize } = require('../../../Class Content/EcommerceBackEnd/config/connection');

const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'mysql',
        dialectOptions: {
            decimalNumbers: true,
          },
    });

    module.exports = sequelize;