/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

import dotenv from 'dotenv';

import { connectToDb, sequelize } from './db/db.js';
import { serverInit } from './server.js';

dotenv.config();

const app = async() => {
  const app = serverInit();

  await connectToDb(sequelize);

  app.listen(process.env.PORT);

  console.log(`App is listening on port ${process.env.PORT}`);
};

app();

