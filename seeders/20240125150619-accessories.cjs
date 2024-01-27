'use strict';

const TABLE_NAME = 'Detailed_Products';

const accessories = require('./20240125150619-accessories.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      TABLE_NAME,
      accessories.map(accessory => {
        const description = accessory.description;

        return {
          ...accessory,
          description: JSON.stringify(description),
        };
      }),
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(TABLE_NAME, {
      id: accessories.map(accessory => accessory.id),
    });
  },
};
