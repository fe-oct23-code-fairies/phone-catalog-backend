import { DataTypes } from 'sequelize';
import { sequelize } from '../../db/db.js';

export const Users = sequelize.define(
  'Users',
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: false,
  },
);
