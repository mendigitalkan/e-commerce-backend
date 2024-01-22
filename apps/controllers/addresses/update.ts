import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { Op } from 'sequelize'
import { requestChecker } from '../../utilities/requestCheker'
import { AddressesModel, type AddressesAttributes } from '../../models/address'

export const updateAddress = async (req: any, res: Response): Promise<any> => {
  const requestBody = req.body as AddressesAttributes

  const emptyField = requestChecker({
    requireList: ['addressId'],
    requestData: requestBody
  })

  if (emptyField.length > 0) {
    const message = `invalid request parameter! require (${emptyField})`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.BAD_REQUEST).json(response)
  }

  try {
    const result = await AddressesModel.findOne({
      where: {
        deleted: { [Op.eq]: 0 },
        addressId: { [Op.eq]: requestBody.addressId }
      }
    })

    if (result == null) {
      const message = 'not found!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.NOT_FOUND).json(response)
    }

    const newData: AddressesAttributes | any = {
      ...(requestBody.addressName.length > 0 && {
        addressName: requestBody.addressName
      })
    }

    await AddressesModel.update(newData, {
      where: {
        deleted: { [Op.eq]: 0 },
        addressId: { [Op.eq]: requestBody.addressId }
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
