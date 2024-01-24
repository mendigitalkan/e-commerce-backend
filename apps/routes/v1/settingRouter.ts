/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import express, { type Express, type Request, type Response } from 'express'
import { middleware } from '../../middlewares'
import { settingsController } from '../../controllers/settings'

export const settingRouters = (app: Express) => {
  const router = express.Router()
  app.use('/api/v1/settings', middleware.useAuthorization, router)
  router.get(
    '/',
    async (req: Request, res: Response) => await settingsController.findSettings(req, res)
  )
  router.patch(
    '/',
    async (req: Request, res: Response) =>
      await settingsController.updateSettings(req, res)
  )
}
