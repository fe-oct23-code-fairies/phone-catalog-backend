'use strict';

const TABLE_NAME = 'Detailed_Products';

const phones = require('./20240125143552-phones.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      TABLE_NAME,
      phones.map((phone) => {
        const description = phone.description;

        return {
          ...phone,
          description: JSON.stringify(description),
        };
      }),
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(TABLE_NAME, {
      id: phones.map((phone) => phone.id),
    });
  },
};
