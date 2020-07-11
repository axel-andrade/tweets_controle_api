import AddTweetComposer from '../composers/tweet/add-tweet'
import { RouterAdapter } from '../adapters/router/express'
import { Router } from 'express'
import GetTweetsByTextComposer from '../composers/tweet/get-tweets-by-text'

const router = Router()

router.post('/tweets', RouterAdapter(AddTweetComposer.compose()))
router.get('/tweets-by-text', RouterAdapter(GetTweetsByTextComposer.compose()))

export default router
