/* eslint-disable no-console */

import { Sequelize } from 'sequelize';
import { DB_URI, dbSettings } from './config.js';

export const sequelize = new Sequelize(DB_URI, dbSettings);

export const connectToDb = async(sequelize: Sequelize) => {
  try {
    await sequelize.authenticate();
    console.log('Successfully connected to DB');
  } catch (e) {
    console.error('Failed to connect to DB: ', e);

    throw e;
  }
};
