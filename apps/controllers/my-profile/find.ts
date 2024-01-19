import { type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../../utilities/response'
import { Op } from 'sequelize'
import { UserModel } from '../../models/user'

export const findMyProfile = async (req: any, res: Response): Promise<any> => {
  try {
    const admin = await UserModel.findOne({
      where: {
        deleted: { [Op.eq]: 0 },
        userId: { [Op.eq]: req.body?.user?.userId }
      },
      attributes: [
        'userId',
        'userName',
        'userEmail',
        'userRole',
        'userPhoneNumber',
        'createdAt',
        'updatedAt'
      ]
    })

    if (admin == null) {
      const message = 'user not found!'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.NOT_FOUND).json(response)
    }

    const response = ResponseData.default
    response.data = admin
    return res.status(StatusCodes.OK).json(response)
  } catch (error: any) {
    console.log(error.message)
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}
