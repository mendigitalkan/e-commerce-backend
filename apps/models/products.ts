/* eslint-disable @typescript-eslint/indent */
import { DataTypes, type Model, type Optional, UUIDV4 } from 'sequelize'
import { sequelize } from '.'
import { type ZygoteAttributes, ZygoteModel } from './zygote'

export interface ProductAttributes extends ZygoteAttributes {
  productId: string
  productName: string
  productDescription: string
  productImages: string
  productPrice: number
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type ProductCreationAttributes = Optional<
  ProductAttributes,
  'id' | 'createdAt' | 'updatedAt'
>

// We need to declare an interface for our model that is basically what our class would be

interface ProductInstance
  extends Model<ProductAttributes, ProductCreationAttributes>,
    ProductAttributes {}

export const ProductModel = sequelize.define<ProductInstance>(
  'products',
  {
    ...ZygoteModel,
    productId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: UUIDV4()
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    productImages: {
      type: DataTypes.STRING,
      allowNull: false
    },
    productDescription: {
      type: DataTypes.STRING,
      allowNull: false
    },
    productPrice: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    ...sequelize,
    timestamps: false,
    tableName: 'products',
    deletedAt: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
  }
)
