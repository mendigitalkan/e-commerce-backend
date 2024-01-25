import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { Op } from 'sequelize'
import { SettingsModel } from '../../models/settings'

export const findSettings = async (req: any, res: Response): Promise<any> => {
  try {
    const result = await SettingsModel.findOne({
      where: {
        deleted: { [Op.eq]: 0 }
      }
    })

    if (result == null) {
      const message = 'setting not found!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.NOT_FOUND).json(response)
    }

    const response = ResponseData.default
    response.data = result
    return res.status(StatusCodes.OK).json(response)
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}
