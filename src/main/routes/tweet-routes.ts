import AddTweetComposer from '../composers/tweet/add-tweet'
import { RouterAdapter } from '../adapters/router/express'
import { Router } from 'express'

const router = Router()

router.post('/tweets', RouterAdapter(AddTweetComposer.compose()))

export default router
