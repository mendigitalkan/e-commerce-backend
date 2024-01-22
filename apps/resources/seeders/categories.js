/* eslint-disable @typescript-eslint/space-before-function-paren */
'use strict'
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {
        category_id: 'dfd324324rwer',
        category_name: 'makanan'
      },
      {
        category_id: 'ret3453454werd',
        category_name: 'fashion'
      },
      {
        category_id: 'try34534534',
        category_name: 'edukasi'
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {})
  }
}
