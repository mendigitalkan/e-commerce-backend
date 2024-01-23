/* eslint-disable @typescript-eslint/space-before-function-paren */
'use strict'
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        product_id: '424323423423erwerewr23423rewr',
        product_name: 'I phone x',
        product_description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate feugiat arcu, sed pharetra est. Curabitur interdum eu diam in porttitor. Phasellus purus odio, viverra dignissim vulputate et, facilisis sed diam. Pellentesque fermentum pulvinar pharetra. Aliquam eget augue ultricies, fermentum sem quis, interdum purus. Maecenas eu condimentum quam. Donec congue sollicitudin massa, tincidunt laoreet risus sagittis nec. Vestibulum quam lacus, elementum eu nibh aliquam, venenatis eleifend nibh. Nunc id posuere risus, eu volutpat ipsum. Suspendisse gravida at libero sit amet eleifend. Quisque feugiat mauris ut ullamcorper feugiat. ',
        product_images:
          '["https://cdn.eraspace.com/media/catalog/product/i/p/iphone_14_pro_deep_purple_1.jpg", "https://img.ws.mms.shopee.co.id/id-11134207-7qul6-lhyir6224p9wa4"]',
        product_price: 1200000,
        product_category_id: 'ret3453454werd',
        product_condition: 'Baru',
        product_total_sale: 20,
        product_stock: 50,
        product_discount: 10,
        product_variant:
          '[{type: "colors", values: ["Hitam", "Putih", "Biru"]}, {type: "sizes", values: ["S", "L", "XL"]}]'
      },
      {
        product_id: '53dfd43423erwerewr234dfdertrt',
        product_name: 'Samsung',
        product_description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate feugiat arcu, sed pharetra est. Curabitur interdum eu diam in porttitor. Phasellus purus odio, viverra dignissim vulputate et, facilisis sed diam. Pellentesque fermentum pulvinar pharetra. Aliquam eget augue ultricies, fermentum sem quis, interdum purus. Maecenas eu condimentum quam. Donec congue sollicitudin massa, tincidunt laoreet risus sagittis nec. Vestibulum quam lacus, elementum eu nibh aliquam, venenatis eleifend nibh. Nunc id posuere risus, eu volutpat ipsum. Suspendisse gravida at libero sit amet eleifend. Quisque feugiat mauris ut ullamcorper feugiat.',
        product_images:
          '["https://images.samsung.com/is/image/samsung/p6pim/id/feature/164286679/id-feature-refined-design-with-glossy-finish-534249947?$FB_TYPE_A_MO_JPG$", "https://down-id.img.susercontent.com/file/2f5bb8c7866c8e1bc03923664cff5608"]',
        product_price: 1200000,
        product_category_id: 'ret3453454werd',
        product_condition: 'Bekas',
        product_total_sale: 20,
        product_stock: 50,
        product_variant:
          '[{type: "colors", values: ["Hitam", "Putih", "Biru"]}, {type: "sizes", values: ["S", "L", "XL"]}]'
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {})
  }
}
