import { Router } from 'express'
import tweetRoutes from './tweet-routes'
import TwitterServiceAdapter from '../adapters/twitter-service'

const router = Router()

router.use('/', tweetRoutes)

router.get('/', async (req: any, res: any) => {
  const tweets = await TwitterServiceAdapter.searchTweets('#test', 100)
  res.send(JSON.stringify(tweets))
})

router.use('*', (req: any, res: any) => {
  res.status(404).json({ errors: { msg: 'URL_NOT_FOUND' } })
})

export default router
