import { type NextFunction, type Request, type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ResponseData } from '../utilities/response'
import { verifyAccessToken } from '../utilities/jwt'

interface AuthRequest extends Request {
  user?: { userId: string }
}

export const useJwtAccess = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): any => {
  try {
    const token = req.header('x-token')

    if (token == null) {
      const message = 'Invalid Authorization.'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.UNAUTHORIZED).json(response)
    }

    try {
      const decoded = verifyAccessToken(token) as { userId: string }
      req.user = decoded
      console.log(req)
    } catch (error: any) {
      const message = 'Invalid Authorization.'
      const response = ResponseData.error(message)
      return res.status(StatusCodes.UNAUTHORIZED).json(response)
    }
    next()
  } catch (error: any) {
    const message = `unable to process request! error ${error.message}`
    const response = ResponseData.error(message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response)
  }
}
