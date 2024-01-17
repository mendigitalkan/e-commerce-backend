/* eslint-disable @typescript-eslint/indent */
import { DataTypes, type Model, type Optional, UUIDV4 } from 'sequelize'
import { sequelize } from '.'
import { type ZygoteAttributes, ZygoteModel } from './zygote'

export interface CartsAttributes extends ZygoteAttributes {
  cartId: string
  cartUserId: string
  cartProductId: string
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type CartsCreationAttributes = Optional<CartsAttributes, 'id' | 'createdAt' | 'updatedAt'>

// We need to declare an interface for our model that is basically what our class would be

interface CartsInstance
  extends Model<CartsAttributes, CartsCreationAttributes>,
    CartsAttributes {}

export const CartsModel = sequelize.define<CartsInstance>(
  'carts',
  {
    ...ZygoteModel,
    cartId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: UUIDV4()
    },
    cartUserId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cartProductId: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    ...sequelize,
    timestamps: false,
    tableName: 'carts',
    deletedAt: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
  }
)
