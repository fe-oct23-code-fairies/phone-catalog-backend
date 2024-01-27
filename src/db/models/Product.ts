import { DataTypes } from 'sequelize';
import { sequelize } from '../../db/db.js';

export const Products = sequelize.define(
  'Products',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    category: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    itemId: {
      allowNull: false,
      type: DataTypes.STRING,
      references: {
        model: 'Detailed_Products',
        key: 'id',
      },
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    fullPrice: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    screen: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    capacity: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    colour: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    ram: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    year: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    image: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  },
);
