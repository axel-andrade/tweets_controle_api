import { AddTweetController } from '../../../presentation/controllers/tweet/add-tweet/add-tweet-controller'
import { AddTweetUseCase } from '../../../domain/usecases/tweet/add-tweet'
import { TweetRepository } from '../../../infra/db/mongo/repositories/tweet'

export default class AddTweetComposer {
  static compose () {
    const repository = new TweetRepository()
    const addTweetUseCase = new AddTweetUseCase(repository)
    return new AddTweetController(addTweetUseCase)
  }
}
