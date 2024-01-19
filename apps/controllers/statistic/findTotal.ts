import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { Op } from 'sequelize'
import { ProductModel } from '../../models/products'
import { OrdersModel } from '../../models/orders'
import { TransactionsModel } from '../../models/transactions'
import { UserModel } from '../../models/user'

export const findTotal = async (req: any, res: Response): Promise<any> => {
  try {
    const totalProduct = await ProductModel.count({
      where: {
        deleted: { [Op.eq]: 0 }
      }
    })

    const totalOrder = await OrdersModel.count({
      where: {
        deleted: { [Op.eq]: 0 }
      }
    })

    const totalTransaction = await TransactionsModel.count({
      where: {
        deleted: { [Op.eq]: 0 }
      }
    })

    const totalUser = await UserModel.count({
      where: {
        deleted: { [Op.eq]: 0 },
        userRole: { [Op.not]: 'user' }
      }
    })

    const response = ResponseData.default

    response.data = { totalProduct, totalOrder, totalTransaction, totalUser }
    return res.status(StatusCodes.OK).json(response)
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}
