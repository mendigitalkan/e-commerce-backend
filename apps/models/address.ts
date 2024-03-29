/* eslint-disable @typescript-eslint/indent */
import { DataTypes, type Model, type Optional, UUIDV4 } from 'sequelize'
import { sequelize } from '.'
import { type ZygoteAttributes, ZygoteModel } from './zygote'

export interface AddressesAttributes extends ZygoteAttributes {
  addressId: string
  addressUserId: string
  addressName: string
  addressDetail: string
  addressPostalCode: string
  addressProvinsi: string
  addressKabupaten: string
  addressKecamatan: string
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type AddressesCreationAttributes = Optional<
  AddressesAttributes,
  'id' | 'createdAt' | 'updatedAt'
>

// We need to declare an interface for our model that is basically what our class would be

interface AddressesInstance
  extends Model<AddressesAttributes, AddressesCreationAttributes>,
    AddressesAttributes {}

export const AddressesModel = sequelize.define<AddressesInstance>(
  'addresses',
  {
    ...ZygoteModel,
    addressId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: UUIDV4()
    },
    addressUserId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    addressName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    addressDetail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    addressPostalCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    addressProvinsi: {
      type: DataTypes.STRING,
      allowNull: false
    },
    addressKabupaten: {
      type: DataTypes.STRING,
      allowNull: false
    },
    addressKecamatan: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    ...sequelize,
    timestamps: false,
    tableName: 'addresses',
    deletedAt: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
  }
)
