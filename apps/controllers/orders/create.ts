import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { requestChecker } from '../../utilities/requestCheker'
import { v4 as uuidv4 } from 'uuid'
import { OrdersModel, type OrdersAttributes } from '../../models/orders'

export const createOrder = async (req: any, res: Response): Promise<any> => {
  const requestBody = req.body as OrdersAttributes

  const emptyField = requestChecker({
    requireList: [
      'orderUserId',
      'orderProductId',
      'orderProductName',
      'orderProductPrice',
      'orderProductPhotos',
      'orderProductDescription',
      'orderStatus'
    ],
    requestData: requestBody
  })

  if (emptyField.length > 0) {
    const message = `invalid request parameter! require (${emptyField})`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.BAD_REQUEST).json(response)
  }

  try {
    requestBody.orderId = uuidv4()
    await OrdersModel.create(requestBody)

    const response = ResponseData.default
    const result = { message: 'success' }
    response.data = result
    return res.status(StatusCodes.CREATED).json(response)
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}
