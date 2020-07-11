import { GetTweetsByTextUseCase } from '../../../domain/usecases/tweet/get-tweet-by-text'
import TwitterServiceAdapter from '../../adapters/twitter'
import { GetTweetsByTextController } from '../../../presentation/controllers/tweet/get-tweets-by-text/get-tweets-by-text-controller'

export default class GetTweetsByTextComposer {
  static compose () {
    const getTweetsByTextUseCase = new GetTweetsByTextUseCase(TwitterServiceAdapter)
    return new GetTweetsByTextController(getTweetsByTextUseCase)
  }
}
