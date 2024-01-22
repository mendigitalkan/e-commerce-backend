import { createNotification } from './create'
import { findAllNotification, findDetailNotification } from './find'
import { removeNofication } from './remove'
import { updateNotification } from './update'

export const notificationController = {
  create: createNotification,
  findAll: findAllNotification,
  findOne: findDetailNotification,
  remove: removeNofication,
  update: updateNotification
}
