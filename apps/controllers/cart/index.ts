import { createCart } from './create'
import { findAllCart, findDetailCart } from './find'
import { removeCart } from './remove'
import { updateCart } from './update'

export const cartController = {
  create: createCart,
  findAll: findAllCart,
  findOne: findDetailCart,
  remove: removeCart,
  update: updateCart
}
