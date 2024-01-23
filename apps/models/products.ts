/* eslint-disable @typescript-eslint/indent */
import { DataTypes, type Model, type Optional, UUIDV4 } from 'sequelize'
import { sequelize } from '.'
import { type ZygoteAttributes, ZygoteModel } from './zygote'
import { CategoriesModel } from './categories'

export interface ProductAttributes extends ZygoteAttributes {
  productId: string
  productName: string
  productDescription: string
  productImages: string
  productPrice: number
  productCategoryId: string
  productTotalSale: number
  productStock: number
  productDiscount: number
  productCondition: 'Baru' | 'Bekas'
  productWeight: number
  productVariant: string
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
    },
    productCategoryId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    productTotalSale: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    productStock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    productCondition: {
      type: DataTypes.ENUM('Baru', 'Bekas'),
      allowNull: false,
      defaultValue: 'Baru'
    },
    productWeight: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    productDiscount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    productVariant: {
      type: DataTypes.JSON,
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

ProductModel.hasOne(CategoriesModel, {
  sourceKey: 'productCategoryId',
  foreignKey: 'categoryId'
})
