/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import express, { type Express, type Request, type Response } from 'express'
import { UsersController } from '../../controllers/auth'
import { middleware } from '../../middlewares'

export const userRoutes = (app: Express): void => {
  const router = express.Router()
  app.use('/api/v1/users', middleware.useAuthorization, router)

  router.get(
    '/list',
    async (req: Request, res: Response) => await UsersController.findAll(req, res)
  )
  router.get(
    '/detail/:userId',
    async (req: Request, res: Response) => await UsersController.findOne(req, res)
  )
  router.post(
    '/login',
    async (req: Request, res: Response) => await UsersController.login(req, res)
  )
  router.post(
    '/register',
    async (req: Request, res: Response) => await UsersController.register(req, res)
  )
}
