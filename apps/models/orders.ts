/* eslint-disable @typescript-eslint/indent */
import { DataTypes, type Model, type Optional, UUIDV4 } from 'sequelize'
import { sequelize } from '.'
import { type ZygoteAttributes, ZygoteModel } from './zygote'

export interface OrdersAttributes extends ZygoteAttributes {
  orderId: string
  orderUserId: string
  orderProductId: string
  orderProductName: string
  orderProductPrice: number
  orderProductPhotos: string
  orderProductDescription: string
  orderStatus: 'waiting' | 'process' | 'delivery' | 'done' | 'cancel'
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type OrdersCreationAttributes = Optional<
  OrdersAttributes,
  'id' | 'createdAt' | 'updatedAt'
>

// We need to declare an interface for our model that is basically what our class would be

interface OrdersInstance
  extends Model<OrdersAttributes, OrdersCreationAttributes>,
    OrdersAttributes {}

export const OrdersModel = sequelize.define<OrdersInstance>(
  'orders',
  {
    ...ZygoteModel,
    orderId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: UUIDV4()
    },
    orderUserId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    orderProductId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    orderProductName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    orderProductPrice: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    orderProductPhotos: {
      type: DataTypes.STRING,
      allowNull: false
    },
    orderProductDescription: {
      type: DataTypes.STRING,
      allowNull: false
    },
    orderStatus: {
      type: DataTypes.ENUM('waiting', 'process', 'delivery', 'done', 'cancel'),
      allowNull: false,
      defaultValue: 'waiting'
    }
  },
  {
    ...sequelize,
    timestamps: false,
    tableName: 'orders',
    deletedAt: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
  }
)
