import { createAddress } from './create'
import { findAllAddress, findDetailAddress } from './find'
import { removeAddress } from './remove'
import { updateAddress } from './update'

export const addressController = {
  create: createAddress,
  findAll: findAllAddress,
  findOne: findDetailAddress,
  remove: removeAddress,
  update: updateAddress
}
