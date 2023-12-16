/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import express, { type Express, type Request, type Response } from 'express'
import { UsersController } from '../../controllers/auth'

export const userRoutes = (app: Express): void => {
  const route = express.Router()
  app.use('/api/v1/users', route)

  route.get(
    '/list',
    async (req: Request, res: Response) => await UsersController.findAll(req, res)
  )
  route.get(
    '/detail/:userId',
    async (req: Request, res: Response) => await UsersController.findOne(req, res)
  )
  route.post(
    '/login',
    async (req: Request, res: Response) => await UsersController.login(req, res)
  )
  route.post(
    '/register',
    async (req: Request, res: Response) => await UsersController.register(req, res)
  )
}
