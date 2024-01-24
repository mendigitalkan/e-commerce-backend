import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { Op } from 'sequelize'
import { requestChecker } from '../../utilities/requestCheker'
import { SettingsModel, type SettingsAttributes } from '../../models/settings'
import { UserModel } from '../../models/user'

export const updateSettings = async (req: any, res: Response): Promise<any> => {
  const requestBody = req.body as SettingsAttributes

  const emptyField = requestChecker({
    requireList: ['settingId'],
    requestData: requestBody
  })

  if (emptyField.length > 0) {
    const message = `invalid request parameter! require (${emptyField})`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.BAD_REQUEST).json(response)
  }

  try {
    const checkRole = await UserModel.findOne({
      where: {
        deleted: { [Op.eq]: 0 },
        userId: req.body?.user?.userId,
        userRole: { [Op.eq]: 'superAdmin' }
      }
    })

    if (checkRole == null) {
      const message = 'access denied!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.NOT_FOUND).json(response)
    }

    const result = await SettingsModel.findOne({
      where: {
        deleted: { [Op.eq]: 0 },
        settingId: { [Op.eq]: requestBody.settingId }
      }
    })

    if (result == null) {
      const message = 'setting not found!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.NOT_FOUND).json(response)
    }

    const newData: SettingsAttributes | any = {
      ...(requestBody.settingBanner.length > 0 && {
        settingBanner: requestBody.settingBanner
      }),
      ...(requestBody.settingWhatsappNumber.length > 0 && {
        settingWhatsappNumber: requestBody.settingWhatsappNumber
      })
    }

    await SettingsModel.update(newData, {
      where: {
        deleted: { [Op.eq]: 0 },
        settingId: { [Op.eq]: requestBody.settingId }
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
