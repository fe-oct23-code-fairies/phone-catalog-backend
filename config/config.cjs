const dotenv = require('dotenv');

dotenv.config();

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;

const DB_URI = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}.frankfurt-postgres.render.com/${DB_NAME}`;

const settings = {
  seederStorage: 'sequelize',
  url: DB_URI,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};

module.exports = {
  development: { ...settings },
  test: { ...settings },
  production: { ...settings },
};
