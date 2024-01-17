import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { requestChecker } from '../../utilities/requestCheker'
import { v4 as uuidv4 } from 'uuid'
import { AddressesModel, type AddressesAttributes } from '../../models/address'

export const createAddress = async (req: any, res: Response): Promise<any> => {
  const requestBody = req.body as AddressesAttributes

  const emptyField = requestChecker({
    requireList: [
      'addressUserId',
      'addressName',
      'addressDetail',
      'addressPostalCode',
      'addressProvinsi',
      'addressKabupaten',
      'addressKecamatan'
    ],
    requestData: requestBody
  })

  if (emptyField.length > 0) {
    const message = `invalid request parameter! require (${emptyField})`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.BAD_REQUEST).json(response)
  }

  try {
    requestBody.addressId = uuidv4()
    await AddressesModel.create(requestBody)

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
