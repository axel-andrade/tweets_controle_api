import { Router } from 'express'
import tweetRoutes from './tweet-routes'

const router = Router()

router.use('/', tweetRoutes)

router.get('/', async (req: any, res: any) => {
  res.send('Hello world')
})

router.use('*', (req: any, res: any) => {
  res.status(404).json({ errors: { msg: 'URL_NOT_FOUND' } })
})

export default router
