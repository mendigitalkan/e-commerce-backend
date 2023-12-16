import { createProduct } from './create'
import { findAllProducts, findOneProduct } from './find'
import { removeProduct } from './remove'
import { updateProduct } from './update'

export const ProductController = {
  create: createProduct,
  findAll: findAllProducts,
  findOne: findOneProduct,
  remove: removeProduct,
  update: updateProduct
}
