/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('addresses', {
      ...ZygoteModel,
      address_id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4
      },
      address_user_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address_detail: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address_postal_code: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address_provinsi: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address_kabupaten: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address_kecamatan: {
        type: Sequelize.STRING,
        allowNull: false
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('addresses')
  }
}
