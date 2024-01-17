/* eslint-disable @typescript-eslint/indent */
import { DataTypes, type Model, type Optional, UUIDV4 } from 'sequelize'
import { sequelize } from '.'
import { type ZygoteAttributes, ZygoteModel } from './zygote'

export interface CategoriesAttributes extends ZygoteAttributes {
  categoryId: string
  categoryName: string
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type CategoriesCreationAttributes = Optional<
  CategoriesAttributes,
  'id' | 'createdAt' | 'updatedAt'
>

// We need to declare an interface for our model that is basically what our class would be

interface CategoriesInstance
  extends Model<CategoriesAttributes, CategoriesCreationAttributes>,
    CategoriesAttributes {}

export const CategoriesModel = sequelize.define<CategoriesInstance>(
  'categories',
  {
    ...ZygoteModel,
    categoryId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: UUIDV4()
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    ...sequelize,
    timestamps: false,
    tableName: 'categories',
    deletedAt: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
  }
)
