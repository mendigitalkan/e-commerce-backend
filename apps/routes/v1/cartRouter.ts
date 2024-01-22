/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import express, { type Express, type Request, type Response } from 'express'
import { middleware } from '../../middlewares'
import { cartController } from '../../controllers/cart'

export const cartRoutes = (app: Express) => {
  const router = express.Router()
  app.use('/api/v1/carts', middleware.useAuthorization, router)

  router.get(
    '/',
    async (req: Request, res: Response) => await cartController.findAll(req, res)
  )
  router.get(
    '/detail/:cartId',
    async (req: Request, res: Response) => await cartController.findOne(req, res)
  )
  router.post(
    '/',
    async (req: Request, res: Response) => await cartController.create(req, res)
  )
  router.patch(
    '/',
    async (req: Request, res: Response) => await cartController.update(req, res)
  )
  router.delete(
    '/',
    async (req: Request, res: Response) => await cartController.remove(req, res)
  )
}
