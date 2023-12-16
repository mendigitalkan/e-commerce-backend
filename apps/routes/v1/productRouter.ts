/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import express, { type Express, type Request, type Response } from 'express'
import { ProductController } from '../../controllers/products'

export const productRoutes = (app: Express) => {
  const route = express.Router()
  app.use('/api/v1/products', route)

  route.get(
    '/list',
    async (req: Request, res: Response) => await ProductController.findAll(req, res)
  )
  route.get(
    '/detail/:productId',
    async (req: Request, res: Response) => await ProductController.findOne(req, res)
  )
  route.post(
    '/',
    async (req: Request, res: Response) => await ProductController.create(req, res)
  )
  route.patch(
    '/',
    async (req: Request, res: Response) => await ProductController.update(req, res)
  )
  route.delete(
    '/',
    async (req: Request, res: Response) => await ProductController.remove(req, res)
  )
}
