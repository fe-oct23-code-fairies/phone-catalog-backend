import { DataTypes } from 'sequelize';
import { sequelize } from '../../db/db.js';

export const DetailedProducts = sequelize.define(
  'Detailed_Products',
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    namespaceId: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    capacityAvailable: {
      allowNull: false,
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    capacity: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    priceRegular: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    priceDiscount: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    coloursAvailable: {
      allowNull: false,
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    colour: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    images: {
      allowNull: false,
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    description: {
      allowNull: false,
      type: DataTypes.JSON,
    },
    screen: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    resolution: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    processor: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    ram: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    camera: {
      type: DataTypes.STRING,
    },
    zoom: {
      type: DataTypes.STRING,
    },
    cell: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  },
);
