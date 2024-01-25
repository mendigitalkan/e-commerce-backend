/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('carts', {
      ...ZygoteModel,
      cart_id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4
      },
      cart_user_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cart_product_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cart_product_color_selected: {
        type: Sequelize.STRING,
        allowNull: true
      },
      cart_product_size_selected: {
        type: Sequelize.STRING,
        allowNull: true
      },
      cart_total_item: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('carts')
  }
}
