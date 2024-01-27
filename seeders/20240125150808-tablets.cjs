'use strict';

const TABLE_NAME = 'Detailed_Products';

const tablets = require('./20240125150808-tablets.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      TABLE_NAME,
      tablets.map(tablet => {
        const description = tablet.description;

        return {
          ...tablet,
          description: JSON.stringify(description),
        };
      }),
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(TABLE_NAME, {
      id: tablets.map(tablet => tablet.id),
    });
  },
};
