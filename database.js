const { Sequelize } = require('sequelize');
require('dotenv').config(); // This is correct for CommonJS

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  dialect: 'mysql',
  logging: false,
});

// Test connection
sequelize.authenticate()
  .then(() => console.log('✅ MySQL CONNECTED!'))
  .catch(err => console.error('❌ MySQL CONNECTION ERROR:', err));

module.exports = sequelize;