/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import express, { type Express, type Request, type Response } from 'express'
import { middleware } from '../../middlewares'
import { addressController } from '../../controllers/addresses'

export const addressRoutes = (app: Express) => {
  const router = express.Router()
  app.use(
    '/api/v1/addresses',
    middleware.useAuthorization,
    middleware.useJwtAccess,
    router
  )

  router.get(
    '/list',
    async (req: Request, res: Response) => await addressController.findAll(req, res)
  )
  router.get(
    '/detail/:addressId',
    async (req: Request, res: Response) => await addressController.findOne(req, res)
  )
  router.post(
    '/',
    async (req: Request, res: Response) => await addressController.create(req, res)
  )
  router.patch(
    '/',
    async (req: Request, res: Response) => await addressController.update(req, res)
  )
  router.delete(
    '/',
    async (req: Request, res: Response) => await addressController.remove(req, res)
  )
}
