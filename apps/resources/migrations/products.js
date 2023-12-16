/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      ...ZygoteModel,
      product_id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4
      },
      product_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      product_description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      product_images: {
        type: Sequelize.STRING,
        allowNull: false
      },
      product_price: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products')
  }
}
