/* eslint-disable @typescript-eslint/space-before-function-paren */
'use strict'
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        product_id: '424323423423erwerewr23423rewr',
        product_name: 'I phone x',
        product_description: 'lorem ipsum',
        product_images:
          'https://cdn.eraspace.com/media/catalog/product/i/p/iphone_14_pro_deep_purple_1.jpg',
        product_price: 1200000,
        product_category_id: 'ret3453454werd',
        product_total_sale: 20,
        product_stock: 50,
        product_discount: 10,
        product_variant: '{size: [xl, l, m], color: ["black", "red", "white"]}'
      },
      {
        product_id: '53dfd43423erwerewr234dfdertrt',
        product_name: 'Samsung',
        product_description: 'lorem ipsum',
        product_images:
          'https://images.samsung.com/is/image/samsung/p6pim/id/feature/164286679/id-feature-refined-design-with-glossy-finish-534249947?$FB_TYPE_A_MO_JPG$',
        product_price: 1200000,
        product_category_id: 'ret3453454werd',
        product_total_sale: 20,
        product_stock: 50,
        product_variant: '{size: [xl, l, m], color: ["black", "red", "white"]}}'
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {})
  }
}
