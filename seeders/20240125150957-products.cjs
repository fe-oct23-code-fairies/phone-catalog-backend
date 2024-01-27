'use strict';

const TABLE_NAME = 'Products';

const products = require('./20240125150957-products.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(TABLE_NAME, products);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(TABLE_NAME, {
      id: products.map((product) => product.id),
    });
  },
};
