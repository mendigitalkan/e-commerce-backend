import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { Op } from 'sequelize'
import { requestChecker } from '../../utilities/requestCheker'
import { CartsModel, type CartsAttributes } from '../../models/carts'

export const updateCart = async (req: any, res: Response): Promise<any> => {
  const requestBody = req.body as CartsAttributes

  const emptyField = requestChecker({
    requireList: ['cartId'],
    requestData: requestBody
  })

  if (emptyField.length > 0) {
    const message = `invalid request parameter! require (${emptyField})`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.BAD_REQUEST).json(response)
  }

  try {
    const result = await CartsModel.findOne({
      where: {
        deleted: { [Op.eq]: 0 },
        cartId: { [Op.eq]: requestBody.cartId }
      }
    })

    if (result == null) {
      const message = 'not found!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.NOT_FOUND).json(response)
    }

    const newData: CartsAttributes | any = {
      ...(requestBody.cartProductId.length > 0 && {
        cartProductId: requestBody.cartProductId
      }),
      ...(requestBody.cartProductColorSelected.length > 0 && {
        cartProductColorSelected: requestBody.cartProductColorSelected
      }),
      ...(requestBody.cartProductSizeSelected.length > 0 && {
        cartProductSizeSelected: requestBody.cartProductSizeSelected
      })
    }

    await CartsModel.update(newData, {
      where: {
        deleted: { [Op.eq]: 0 },
        cartId: { [Op.eq]: requestBody.cartId }
      }
    })

    const response = ResponseData.default
    response.data = { message: 'success' }
    return res.status(StatusCodes.OK).json(response)
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}
