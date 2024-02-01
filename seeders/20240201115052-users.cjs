/* eslint-disable max-len */
'use strict';

const uuid = require('uuid');

const TABLE_NAME = 'Users';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(TABLE_NAME, [
      {
        id: uuid.v4(),
        email: 'admin.cool@gmail.com',
        password:
          'U2FsdGVkX1/5XK0FQ2UbpbtIIIMb6MSnZ7yd3IqDjoLbcpk1/sQZ1d3cbnrnJ6RO',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
