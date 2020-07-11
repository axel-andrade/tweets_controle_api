import { IController, IRequest } from '../../../presentation/protocols'
import { Request, Response } from 'express'

export const RouterAdapter = (controller: IController) => {
  return async (req: Request, res: Response) => {
    const request: IRequest = {
      body: req.body,
      params: req.params,
      query: req.query
    }
    const response = await controller.handle(request)
    if (response.statusCode >= 200 && response.statusCode <= 299) {
      res.status(response.statusCode).json(response.body)
    } else {
      res.status(response.statusCode).json({
        error: response.body.message
      })
    }
  }
}
