import { createTransaction } from './create'
import { findAllTransaction, findDetailTransaction } from './find'
import { removeTransaction } from './remove'
import { updateTransaction } from './update'

export const transactionController = {
  create: createTransaction,
  findAll: findAllTransaction,
  findOne: findDetailTransaction,
  remove: removeTransaction,
  update: updateTransaction
}
