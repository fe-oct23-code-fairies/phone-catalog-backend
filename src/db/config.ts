import dotenv from 'dotenv';

dotenv.config();

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;

export const DB_URI = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}.frankfurt-postgres.render.com/${DB_NAME}`;

export const dbSettings = {
  seederStorage: 'sequelize',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};
