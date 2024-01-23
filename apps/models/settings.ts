/* eslint-disable @typescript-eslint/indent */
import { DataTypes, type Model, type Optional, UUIDV4 } from 'sequelize'
import { sequelize } from '.'
import { type ZygoteAttributes, ZygoteModel } from './zygote'

export interface SettingsAttributes extends ZygoteAttributes {
  settingId: string
  settingBanner: string
  settingWhatsappNumber: string
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type SettingsCreationAttributes = Optional<
  SettingsAttributes,
  'id' | 'createdAt' | 'updatedAt'
>

// We need to declare an interface for our model that is basically what our class would be

interface SettingsInstance
  extends Model<SettingsAttributes, SettingsCreationAttributes>,
    SettingsAttributes {}

export const SettingsModel = sequelize.define<SettingsInstance>(
  'settings',
  {
    ...ZygoteModel,
    settingId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: UUIDV4()
    },
    settingBanner: {
      type: DataTypes.STRING,
      allowNull: false
    },
    settingWhatsappNumber: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    ...sequelize,
    timestamps: false,
    tableName: 'settings',
    deletedAt: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
  }
)
