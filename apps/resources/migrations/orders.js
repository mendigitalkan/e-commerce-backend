/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      ...ZygoteModel,
      order_id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4
      },
      order_user_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      order_product_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      order_product_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      order_product_price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      order_product_description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      order_product_images: {
        type: Sequelize.STRING,
        allowNull: false
      },
      order_status: {
        type: Sequelize.ENUM('waiting', 'process', 'delivery', 'done', 'cancel'),
        allowNull: false,
        defaultValue: 'waiting'
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders')
  }
}
