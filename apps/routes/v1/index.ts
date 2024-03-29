/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type Express, type Request, type Response } from 'express'
import { index } from '../../controllers'
import { userRoutes } from './user-router'
import { uploadFileRoutes } from './upload-file-route'
import { myProfileRouter } from './myProfileRouter'
import { productRoutes } from './productRouter'
import { orderRoutes } from './orderRouter'
import { categoryRoutes } from './categoryRouter'
import { addressRoutes } from './addressRouter'
import { transactionRoutes } from './transactionRoutes'
import { statisticRouters } from './statisticRouter'
import { cartRoutes } from './cartRouter'
import { settingRouters } from './settingRouter'

export const appRouterV1 = (app: Express) => {
  app.get('/api/v1', async (req: Request, res: Response) => await index(req, res))
  uploadFileRoutes(app)
  myProfileRouter(app)
  userRoutes(app)
  productRoutes(app)
  orderRoutes(app)
  categoryRoutes(app)
  addressRoutes(app)
  transactionRoutes(app)
  statisticRouters(app)
  cartRoutes(app)
  settingRouters(app)
}
