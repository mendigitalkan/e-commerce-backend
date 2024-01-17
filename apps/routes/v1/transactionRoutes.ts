/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import express, { type Express, type Request, type Response } from 'express'
import { middleware } from '../../middlewares'
import { transactionController } from '../../controllers/transactions'

export const transactionRoutes = (app: Express) => {
  const router = express.Router()
  app.use('/api/v1/transactions', middleware.useAuthorization, router)

  router.get(
    '/',
    async (req: Request, res: Response) => await transactionController.findAll(req, res)
  )
  router.get(
    '/detail/:orderId',
    async (req: Request, res: Response) => await transactionController.findOne(req, res)
  )
  router.post(
    '/',
    async (req: Request, res: Response) => await transactionController.create(req, res)
  )
  router.patch(
    '/',
    async (req: Request, res: Response) => await transactionController.update(req, res)
  )
  router.delete(
    '/',
    async (req: Request, res: Response) => await transactionController.remove(req, res)
  )
}
