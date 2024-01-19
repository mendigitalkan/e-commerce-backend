import { findAllAdmin, findAllUser, findDetailAdmin, findDetailUser } from './find'
import { userLogin } from './login'
import { userRegister } from './register'

export const UsersController = {
  login: userLogin,
  register: userRegister,
  findAll: findAllUser,
  findAdmins: findAllAdmin,
  findDetailUser,
  findDetailAdmin
}
