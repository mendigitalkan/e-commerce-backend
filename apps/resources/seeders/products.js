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
        product_colors: '["Hitam", "Putih", "Biru"]',
        product_sizes: '["S", "L", "XL"]'
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
        product_colors: '["Hitam", "Putih", "Biru"]',
        product_sizes: '["S", "L", "XL"]'
      },
      {
        product_id: 'sd34rewrerwe45435',
        product_name: 'Vivo',
        product_description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate feugiat arcu, sed pharetra est. Curabitur interdum eu diam in porttitor. Phasellus purus odio, viverra dignissim vulputate et, facilisis sed diam. Pellentesque fermentum pulvinar pharetra. Aliquam eget augue ultricies, fermentum sem quis, interdum purus. Maecenas eu condimentum quam. Donec congue sollicitudin massa, tincidunt laoreet risus sagittis nec. Vestibulum quam lacus, elementum eu nibh aliquam, venenatis eleifend nibh. Nunc id posuere risus, eu volutpat ipsum. Suspendisse gravida at libero sit amet eleifend. Quisque feugiat mauris ut ullamcorper feugiat.',
        product_images:
          '["https://cdn1-production-images-kly.akamaized.net/CMvu_q2PtG1chPIPZqrfEH8Z1WA=/800x800/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4406161/original/026226300_1682431734-gsmarena_003__2_.jpg", "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/12/20/462cf855-49ec-4a1d-bf3f-d4faf0d635cc.png"]',
        product_price: 1500000,
        product_category_id: 'ret3453454werd',
        product_condition: 'Baru',
        product_total_sale: 10,
        product_stock: 500,
        product_colors: '["Hitam", "Putih", "Biru"]',
        product_sizes: '["S", "L", "XL"]'
      },
      {
        product_id: 'er342345rterwr',
        product_name: 'Oppo',
        product_description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate feugiat arcu, sed pharetra est. Curabitur interdum eu diam in porttitor. Phasellus purus odio, viverra dignissim vulputate et, facilisis sed diam. Pellentesque fermentum pulvinar pharetra. Aliquam eget augue ultricies, fermentum sem quis, interdum purus. Maecenas eu condimentum quam. Donec congue sollicitudin massa, tincidunt laoreet risus sagittis nec. Vestibulum quam lacus, elementum eu nibh aliquam, venenatis eleifend nibh. Nunc id posuere risus, eu volutpat ipsum. Suspendisse gravida at libero sit amet eleifend. Quisque feugiat mauris ut ullamcorper feugiat.',
        product_images:
          '["https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/a78-en/listpage/a78-427_600-green.png.thumb.webp", "https://static.bmdstatic.com/up/pk/product/medium/OPPO-A17K-3GB64GB---Gold-63f86e62daae4.jpg"]',
        product_price: 100000,
        product_category_id: 'ret3453454werd',
        product_condition: 'Baru',
        product_total_sale: 130,
        product_stock: 20,
        product_discount: 30,
        product_colors: '["Hitam", "Putih", "Biru"]',
        product_sizes: '["S", "L", "XL"]'
      },
      {
        product_id: '34223e234234324r',
        product_name: 'Realme',
        product_description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate feugiat arcu, sed pharetra est. Curabitur interdum eu diam in porttitor. Phasellus purus odio, viverra dignissim vulputate et, facilisis sed diam. Pellentesque fermentum pulvinar pharetra. Aliquam eget augue ultricies, fermentum sem quis, interdum purus. Maecenas eu condimentum quam. Donec congue sollicitudin massa, tincidunt laoreet risus sagittis nec. Vestibulum quam lacus, elementum eu nibh aliquam, venenatis eleifend nibh. Nunc id posuere risus, eu volutpat ipsum. Suspendisse gravida at libero sit amet eleifend. Quisque feugiat mauris ut ullamcorper feugiat.',
        product_images:
          '["https://cworld.id/wp-content/uploads/2022/11/0368d1b4-0ba6-411e-8b24-0484befe296a.jpg", "https://img.lazcdn.com/g/ff/kf/Sc3eaa5d2a10b4bddbf8f1ed85b3ca7a8z.jpg_720x720q80.jpg"]',
        product_price: 1200000,
        product_category_id: 'ret3453454werd',
        product_condition: 'Baru',
        product_total_sale: 2000,
        product_stock: 209,
        product_discount: 50,
        product_colors: '["Hitam", "Putih", "Biru"]',
        product_sizes: '["S", "L", "XL"]'
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {})
  }
}
