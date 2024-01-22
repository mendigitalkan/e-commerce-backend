/* eslint-disable @typescript-eslint/space-before-function-paren */
'use strict'
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('orders', [
      {
        order_id: '5referfw454',
        order_user_id: '66aba427-4b2b-437e-b427-65f2b3f1eca2',
        order_product_id: '424323423423erwerewr23423rewr',
        order_product_name: 'I phone x',
        order_product_description: 'lorem ipsum',
        order_product_images:
          'https://cdn.eraspace.com/media/catalog/product/i/p/iphone_14_pro_deep_purple_1.jpg',
        order_product_price: 1200000,
        order_status: 'waiting'
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('orders', null, {})
  }
}
