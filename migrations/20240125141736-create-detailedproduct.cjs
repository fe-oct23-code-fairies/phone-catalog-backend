'use strict';

const TABLE_NAME = 'Detailed_Products';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(TABLE_NAME, {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      namespaceId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      capacityAvailable: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      capacity: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      priceRegular: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      priceDiscount: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      coloursAvailable: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      colour: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      images: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      description: {
        allowNull: false,
        type: Sequelize.JSON,
      },
      screen: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      resolution: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      processor: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      ram: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      camera: {
        type: Sequelize.STRING,
      },
      zoom: {
        type: Sequelize.STRING,
      },
      cell: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(TABLE_NAME);
  },
};
