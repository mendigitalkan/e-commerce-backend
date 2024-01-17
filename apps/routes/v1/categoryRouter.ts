/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import express, { type Express, type Request, type Response } from 'express'
import { middleware } from '../../middlewares'
import { categoriesController } from '../../controllers/categories'

export const categoryRoutes = (app: Express) => {
  const router = express.Router()
  app.use('/api/v1/categories', middleware.useAuthorization, router)

  router.get(
    '/',
    async (req: Request, res: Response) => await categoriesController.findAll(req, res)
  )
  router.get(
    '/detail/:categoryId',
    async (req: Request, res: Response) => await categoriesController.findOne(req, res)
  )
  router.post(
    '/',
    async (req: Request, res: Response) => await categoriesController.create(req, res)
  )
  router.patch(
    '/',
    async (req: Request, res: Response) => await categoriesController.update(req, res)
  )
  router.delete(
    '/',
    async (req: Request, res: Response) => await categoriesController.remove(req, res)
  )
}
