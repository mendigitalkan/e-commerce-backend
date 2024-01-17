/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', {
      ...ZygoteModel,
      transaction_id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4
      },
      transaction_price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      transaction_order_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      transaction_user_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      transaction_ongkir_price: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transactions')
  }
}
