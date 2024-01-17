/* eslint-disable @typescript-eslint/indent */
import { DataTypes, type Model, type Optional, UUIDV4 } from 'sequelize'
import { sequelize } from '.'
import { type ZygoteAttributes, ZygoteModel } from './zygote'

export interface TransactionsAttributes extends ZygoteAttributes {
  transactionId: string
  transactionPrice: number
  transactionOrderId: string
  transactionUserId: string
  transactionOngkirPrice: number
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type TransactionsCreationAttributes = Optional<
  TransactionsAttributes,
  'id' | 'createdAt' | 'updatedAt'
>

// We need to declare an interface for our model that is basically what our class would be

interface TransactionsInstance
  extends Model<TransactionsAttributes, TransactionsCreationAttributes>,
    TransactionsAttributes {}

export const TransactionsModel = sequelize.define<TransactionsInstance>(
  'transactions',
  {
    ...ZygoteModel,
    transactionId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: UUIDV4()
    },
    transactionPrice: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    transactionOrderId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    transactionUserId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    transactionOngkirPrice: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    ...sequelize,
    timestamps: false,
    tableName: 'transactions',
    deletedAt: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
  }
)
